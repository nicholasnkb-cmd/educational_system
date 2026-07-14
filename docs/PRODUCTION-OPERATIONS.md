# EduConnect production operations

EduConnect separates application readiness from outside-service activation. The application can validate, queue, scope, audit, and display each workflow now; a provider is marked **Connected** only when its required deployment credentials are present. Credentials must be stored in Hostinger or GitHub secrets, never in the browser snapshot, repository, logs, or security-review export.

## Deployment readiness matrix

| Capability | Repository status | External step before production use |
| --- | --- | --- |
| Tenant data | PostgreSQL schema, authorization seed, and default-deny row-level security migrations | Provision PostgreSQL, set `DATABASE_URL`, apply every migration in `database/postgres/migrations` in numeric order, and run isolation tests |
| School media + offsite backup | S3-compatible readiness checks, quotas, encrypted local/GitHub backup, restore drills | Create a private S3/R2 bucket, set object-storage secrets, define retention/versioning, and complete an offsite restore drill |
| Email | Provider readiness, consent-aware templates, queue records | Configure a verified Postmark or SendGrid sender and approved school templates |
| SMS | Provider readiness, family opt-outs, emergency/routine distinction | Configure Twilio, complete sender registration where required, and obtain school-approved consent language |
| Push | PWA, service worker, notification preferences | Add VAPID keys and validate opt-in/opt-out delivery on supported browsers |
| Administrator MFA | MFA-required policy and provider readiness | Set the TOTP encryption key, enroll each privileged account, and verify recovery procedures |
| Upload malware scanning | Type/size/quota validation, built-in test-signature blocking, and ClamAV INSTREAM support that fails closed when a configured scanner is unavailable | Connect ClamAV on a private/local network, keep signatures current, and verify clean/infected/unavailable paths; never expose the unauthenticated ClamAV TCP socket to the public internet |
| SIS/identity | OneRoster 1.2 CSV sync plus Clever, ClassLink, Google, and Microsoft adapters | Add school-owned credentials, select permitted sync scopes, run a dry sync, and obtain data-owner approval |
| Monitoring | Live health checks, structured client error intake, Lighthouse/Axe gates, incident issue workflow | Configure a private alert destination and on-call ownership |
| Pilot | Synthetic sandbox, readiness checkpoints, security-review package | Select an authorized pilot school, use synthetic or formally sanitized records, assign an independent security reviewer, and approve launch/rollback criteria |

## Scheduled work

- `.github/workflows/education-jobs.yml` signs in with the protected state-admin secret every five minutes and processes delivery, media, SIS, analytics, and backup-copy work.
- `.github/workflows/backups.yml` creates an authenticated backup, runs a restore validation, exports accounts and state, encrypts the export with AES-256/PBKDF2, and retains the encrypted artifact for 30 days.
- `.github/workflows/monitor.yml` checks the two live applications, both dedicated APIs, CORS boundaries, and certificate expiry; failures open or update a GitHub incident issue.
- `.github/workflows/production.yml` blocks deployment on API tests, PHP syntax, Playwright workflows, automated WCAG checks, a production build, and Lighthouse thresholds.

## Academic-year rollover safety

Rollover is idempotent per school and destination year. It archives the prior year and may copy course structures, lessons, assignments, and gradebook configuration as drafts. It never copies submissions, grades, conversations, uploads, credentials, or audit events. Create and verify a backup before using the workflow with school-authorized data.

## Intervention and analytics privacy

Intervention plans are staff-only and school-scoped. Parent and student state responses do not contain the intervention collection. Analytics use a fixed minimum cohort and suppress small cells; names and learner identifiers are never included in aggregate output. Do not lower the threshold based on a browser request.

## Pilot and independent review

The in-app sandbox copies tenant configuration, branding, and synthetic learning templates only. It excludes real people and activity. The generated security-review package excludes credentials, active session identifiers, student records, messages, and uploaded content. A qualified independent reviewer still has to perform and sign off on the review; generating the package is preparation, not certification.
