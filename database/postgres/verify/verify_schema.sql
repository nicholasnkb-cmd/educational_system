\set ON_ERROR_STOP on

DO $$
DECLARE
    unapplied text[];
    rls_disabled text[];
    missing_policy text[];
BEGIN
    IF current_setting('server_version_num')::integer < 150000 THEN
        RAISE EXCEPTION 'EduConnect requires PostgreSQL 15 or newer';
    END IF;

    SELECT array_agg(required.version ORDER BY required.version)
    INTO unapplied
    FROM (VALUES ('001'), ('002'), ('003')) AS required(version)
    LEFT JOIN educonnect.schema_migrations AS applied USING (version)
    WHERE applied.version IS NULL;

    IF unapplied IS NOT NULL THEN
        RAISE EXCEPTION 'Missing migrations: %', array_to_string(unapplied, ', ');
    END IF;

    SELECT array_agg(class.relname ORDER BY class.relname)
    INTO rls_disabled
    FROM pg_catalog.pg_class AS class
    JOIN pg_catalog.pg_namespace AS namespace ON namespace.oid = class.relnamespace
    WHERE namespace.nspname = 'educonnect'
      AND class.relkind IN ('r', 'p')
      AND class.relname <> 'schema_migrations'
      AND NOT class.relrowsecurity;

    IF rls_disabled IS NOT NULL THEN
        RAISE EXCEPTION 'RLS is disabled on: %', array_to_string(rls_disabled, ', ');
    END IF;

    SELECT array_agg(required.policy_name ORDER BY required.policy_name)
    INTO missing_policy
    FROM (
        VALUES
            ('schools'::text, 'schools_select'::text),
            ('tenant_memberships', 'memberships_select'),
            ('question_answer_keys', 'answer_keys_select'),
            ('submissions', 'submissions_select'),
            ('intervention_plans', 'intervention_read'),
            ('integration_connections', 'integrations_read'),
            ('background_jobs', 'jobs_read'),
            ('backup_runs', 'backups_read'),
            ('audit_events', 'audit_events_select'),
            ('analytics_aggregates', 'analytics_select')
    ) AS required(table_name, policy_name)
    LEFT JOIN pg_catalog.pg_policies AS policy
      ON policy.schemaname = 'educonnect'
     AND policy.tablename = required.table_name
     AND policy.policyname = required.policy_name
    WHERE policy.policyname IS NULL;

    IF missing_policy IS NOT NULL THEN
        RAISE EXCEPTION 'Required RLS policies are missing: %', array_to_string(missing_policy, ', ');
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_catalog.pg_trigger AS trigger
        JOIN pg_catalog.pg_class AS class ON class.oid = trigger.tgrelid
        JOIN pg_catalog.pg_namespace AS namespace ON namespace.oid = class.relnamespace
        WHERE namespace.nspname = 'educonnect'
          AND class.relname = 'audit_events'
          AND trigger.tgname = 'audit_events_append_only'
          AND NOT trigger.tgisinternal
    ) THEN
        RAISE EXCEPTION 'Immutable audit trigger is missing';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_catalog.pg_proc AS procedure
        JOIN pg_catalog.pg_namespace AS namespace ON namespace.oid = procedure.pronamespace
        WHERE namespace.nspname = 'educonnect'
          AND procedure.proname = 'has_scope_permission'
          AND procedure.prosecdef
    ) THEN
        RAISE EXCEPTION 'Tenant authorization helper is missing or is not SECURITY DEFINER';
    END IF;
END;
$$;

SELECT
    current_setting('server_version') AS postgres_version,
    (SELECT count(*) FROM educonnect.schema_migrations) AS migrations_recorded,
    (SELECT count(*)
       FROM pg_catalog.pg_class AS class
       JOIN pg_catalog.pg_namespace AS namespace ON namespace.oid = class.relnamespace
      WHERE namespace.nspname = 'educonnect'
        AND class.relkind IN ('r', 'p')) AS tables_created,
    (SELECT count(*)
       FROM pg_catalog.pg_policies
      WHERE schemaname = 'educonnect') AS policies_created;
