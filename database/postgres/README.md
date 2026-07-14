# EduConnect PostgreSQL foundation

This directory is the production relational-data foundation for EduConnect. It
does not switch the current API to PostgreSQL by itself; the API adapter and a
controlled legacy-data import must be deployed before PostgreSQL becomes the
system of record.

## Current persistence audit

The existing runtime has two snapshot implementations:

- `server.mjs` writes the whole application snapshot to
  `data/educonnect-state.json`, stores accounts in a second JSON file, and keeps
  sessions in process memory.
- `api/index.php` stores that same snapshot as JSON in a SQLite `kv_store` row
  when PDO SQLite is available, with JSON-file fallback. Its `audit_events`
  table is the only independently relational record.
- Tenant isolation currently depends on API code that normalizes and filters
  `stateId`, `districtId`, and `schoolId` fields before merging a snapshot.
  That is useful defense in depth, but it is not a database security boundary.

The PostgreSQL model replaces snapshot-wide writes with constrained rows,
foreign keys, transactions, and database-enforced row-level security (RLS).

## Included migrations

Apply files in lexical order:

1. `migrations/001_core_schema.sql` creates the `educonnect` schema, tenant
   hierarchy, identity/RBAC, LMS, academic calendar and rollover, confidential
   interventions, durable jobs/outbox, integrations, backups, immutable audit,
   privacy-safe aggregates, and a checksum-tracked legacy import landing zone.
2. `migrations/002_authorization_seed.sql` installs the system permission and
   role catalog. It does not create users or embed passwords.
3. `migrations/003_row_level_security.sql` installs fail-closed scope helpers,
   ownership helpers, safety triggers, atomic tenant user provisioning, and RLS
   policies.

PostgreSQL 15 or newer is required. Migration 001 creates `pgcrypto` for UUID
generation, so the migration owner must be allowed to install that extension.

```sh
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f database/postgres/migrations/001_core_schema.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f database/postgres/migrations/002_authorization_seed.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f database/postgres/migrations/003_row_level_security.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f database/postgres/verify/verify_schema.sql
```

Run migrations as a dedicated, non-login owner role. The runtime role must not
own the schema or tables and must not be a superuser or have `BYPASSRLS`.
Security-definer functions rely on that separation to inspect membership rows
without recursive policies.

## Runtime request context

Every authenticated API transaction must set the user UUID with `SET LOCAL`.
Never use session-level `SET` with a connection pool.

```sql
BEGIN;
SELECT set_config('app.user_id', $1::text, true);
-- Application queries here are filtered by RLS.
COMMIT;
```

If the setting is missing, empty, malformed, belongs to a disabled account, or
does not have an active membership, protected queries return no rows. State and
district memberships inherit access downward; school memberships never inherit
access sideways or upward for write permissions.

The application should also keep its existing authorization checks. RLS is the
last boundary, not a replacement for clear API errors and feature permissions.

## Database roles and grants

Use separate credentials for migrations, the web API, and asynchronous workers.
The exact role names are deployment-specific. A typical owner-run grant is:

```sql
GRANT USAGE ON SCHEMA educonnect TO educonnect_app;
GRANT SELECT, INSERT, UPDATE, DELETE
    ON ALL TABLES IN SCHEMA educonnect TO educonnect_app;
GRANT USAGE, SELECT
    ON ALL SEQUENCES IN SCHEMA educonnect TO educonnect_app;
REVOKE ALL ON educonnect.schema_migrations FROM educonnect_app;

ALTER DEFAULT PRIVILEGES FOR ROLE educonnect_owner IN SCHEMA educonnect
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO educonnect_app;
ALTER DEFAULT PRIVILEGES FOR ROLE educonnect_owner IN SCHEMA educonnect
    GRANT USAGE, SELECT ON SEQUENCES TO educonnect_app;
```

Do not give browser clients database credentials. Provider secrets are stored
only as envelope-encrypted `bytea` plus a KMS/key reference; plaintext provider
tokens do not belong in PostgreSQL, source control, logs, or job payloads.

## Authorization design

- `tenant_memberships` assigns a role at exactly one state, district, or school
  scope. Composite foreign keys prevent mismatched hierarchy IDs, and a trigger
  prevents assigning a school role at district/state scope.
- `user_accounts.is_global_admin` is a break-glass platform flag, protected by a
  trigger. Tenant administrators cannot grant it through row updates.
- `provision_user_with_membership(...)` creates an invited identity and its
  first membership atomically after checking `users.manage` at the target
  scope. Global-admin creation is deliberately excluded.
- Quiz prompts/options and answer keys are separate tables. Learners can reach
  questions only through a visible published quiz; answer keys require grading
  authority.
- Submission triggers prevent learners from setting scores, feedback, graders,
  ownership, or attempts above the configured maximum.
- New media uploaded in a user context must remain `pending`; only trusted
  administrative/worker paths can mark malware scanning and processing complete.
- Intervention tables require explicit `interventions.view` or
  `interventions.manage`, not ordinary school membership.
- Audit events are append-only and retain UUID values even after operational
  records are archived. They intentionally have no cascading foreign keys.

## Durable jobs and integrations

`background_jobs` supports queue names, priority, delayed availability,
deduplication, bounded attempts, heartbeats, stale-lock detection, results, and
dead-letter status. Workers should claim rows in a short transaction using:

```sql
WITH claimable AS (
    SELECT id
    FROM educonnect.background_jobs
    WHERE status = 'queued'
      AND available_at <= clock_timestamp()
      AND attempts < max_attempts
    ORDER BY priority, available_at, created_at
    FOR UPDATE SKIP LOCKED
    LIMIT $1
)
UPDATE educonnect.background_jobs AS job
SET status = 'running',
    attempts = attempts + 1,
    locked_by = $2,
    locked_at = clock_timestamp(),
    heartbeat_at = clock_timestamp()
FROM claimable
WHERE job.id = claimable.id
RETURNING job.*;
```

Use a narrowly granted worker role or a vetted security-definer claim function;
never make a general-purpose web role `BYPASSRLS`. The transactional
`outbox_events` table is for reliable email/SMS/push/SIS dispatch after the
business transaction commits.

Integration credentials are envelope-encrypted. `integration_sync_runs`,
row-level errors, cursors, and external-ID mappings support incremental OneRoster
or provider-specific synchronization without overwriting local identities.

## Legacy snapshot migration

Do not transform the live snapshot in place. Use this sequence:

1. Freeze or dual-write mutations for a short migration window.
2. Export the JSON snapshot and account records, calculate SHA-256, encrypt the
   export, and stage it in `legacy_snapshot_imports` as a global administrator.
3. Validate tenant IDs, duplicate logins, orphaned student/guardian links,
   assignment/submission relationships, and every file checksum in a dry run.
4. Import hierarchy and identities first, then memberships, academic years,
   courses/sections, LMS content, submissions/grades, interventions, and audit.
5. Compare per-school counts and sampled checksums. Run cross-tenant RLS tests
   with the runtime role before enabling writes.
6. Keep the encrypted legacy export until the rollback window closes, then
   destroy it according to the retention policy.

Legacy string IDs should be retained in `external_key` fields or integration
mappings while internal relationships use UUIDs.

## Required production checks

Before cutover:

- Run `verify/verify_schema.sql` and verify the runtime role is neither table
  owner, superuser, nor `BYPASSRLS`.
- With no `app.user_id`, confirm protected tables return zero rows.
- Test two school users and prove that each cannot select, update, or infer the
  other school's users, lessons, media, submissions, jobs, backups, or audit.
- Confirm a learner cannot select `question_answer_keys`, change grading fields,
  view family-restricted content incorrectly, or submit after `lock_at`.
- Confirm intervention staff access is explicit and removed immediately when
  their membership ends.
- Exercise concurrent job claims and stale-heartbeat recovery.
- Enable encrypted off-site base backups plus WAL/PITR, test restores in an
  isolated environment, and record achieved RPO/RTO in `restore_drills`.
- Monitor slow queries, connection-pool saturation, dead letters, failed syncs,
  backup age, and rejected RLS access at the API boundary.

The analytics table enforces suppression whenever a cohort is below its stored
privacy threshold. Do not expose raw student-level analytics through aggregate
endpoints, and do not lower the threshold without a documented privacy review.
