# Privacy and FERPA production checklist

The records bundled with this repository are synthetic demonstration data. They must never be replaced with real student education records in source control, browser-local demo state, screenshots, fixtures, logs, or GitHub Actions artifacts.

Before onboarding a school or district:

- Execute a written agreement that assigns the school as the education-record controller and defines EduConnect's permitted school-official purpose.
- Document legitimate educational interest for every role and review staff access at least quarterly.
- Keep tenant, guardian, and learner scoping tests in the release gate; deny access when a scope is missing or ambiguous.
- Define record retention and deletion periods with the school. Remove expired exports, logs, uploads, sessions, and backups consistently.
- Provide an authenticated workflow for access, correction, export, and deletion requests; record each action in the audit log.
- Prohibit production student data in support tickets and error-report payloads. Redact names, emails, identifiers, message bodies, and file contents before telemetry leaves the service.
- Encrypt data in transit and at rest, rotate credentials, require MFA for privileged users, and test backup restoration monthly.
- Maintain incident-response contacts and notification timelines with each school.

This checklist supports an implementation review; it is not a legal determination of FERPA compliance. The school and qualified counsel must approve the final data practices, notices, contracts, and retention schedule.
