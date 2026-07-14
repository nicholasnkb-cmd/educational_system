BEGIN;

SET LOCAL lock_timeout = '10s';
SET LOCAL statement_timeout = '2min';

INSERT INTO educonnect.permissions (code, description)
VALUES
    ('tenant.view', 'View tenant hierarchy and non-sensitive configuration'),
    ('tenant.manage', 'Provision and configure districts, schools, domains, and branding'),
    ('users.view', 'View users within an authorized tenant scope'),
    ('users.manage', 'Create, invite, suspend, and assign roles within an authorized tenant scope'),
    ('security.manage', 'Manage sessions, MFA policy, and account security within scope'),
    ('lms.learn', 'Access published learning content and own learning records'),
    ('lms.family_view', 'View published family content and linked learner records'),
    ('lms.author', 'Create and publish courses, lessons, quizzes, and assignments'),
    ('lms.grade', 'Review submissions, answer keys, rubrics, and gradebook records'),
    ('lms.manage', 'Administer all LMS content and enrollment records within scope'),
    ('students.view', 'View authorized student roster and academic records'),
    ('interventions.view', 'View confidential intervention plans within scope'),
    ('interventions.manage', 'Create and update confidential intervention plans within scope'),
    ('integrations.view', 'View integration health and sync results'),
    ('integrations.manage', 'Configure providers and run SIS, SSO, delivery, or storage syncs'),
    ('jobs.view', 'View background job status within scope'),
    ('jobs.manage', 'Enqueue, retry, cancel, and dead-letter background jobs within scope'),
    ('backups.view', 'View backup and restore-drill status within scope'),
    ('backups.manage', 'Create backups and run restore drills within scope'),
    ('audit.view', 'View immutable audit events within scope'),
    ('analytics.view', 'View privacy-safe aggregate analytics within scope'),
    ('communications.manage', 'Manage school communication and notification workflows'),
    ('compliance.view', 'View compliance and governance records within scope'),
    ('sandbox.manage', 'Create and refresh non-production sandbox schools'),
    ('rollover.manage', 'Validate and execute academic-year rollover workflows')
ON CONFLICT (code) DO UPDATE
SET description = EXCLUDED.description;

INSERT INTO educonnect.role_definitions (code, label, scope_level, description, is_system)
VALUES
    ('state_admin', 'State Admin', 'state', 'Statewide tenant, compliance, security, and operational administration.', true),
    ('state_reviewer', 'State Reviewer', 'state', 'Read-only statewide compliance and audit review.', true),
    ('district_admin', 'District Admin', 'district', 'District and school tenant administration.', true),
    ('district_data_manager', 'District Data Manager', 'district', 'District roster, integration, rollover, and analytics operations.', true),
    ('school_admin', 'School Admin', 'school', 'School configuration, users, LMS, security, and operations.', true),
    ('teacher', 'Teacher', 'school', 'Course authoring, classroom enrollment, grading, and student support.', true),
    ('interventionist', 'Interventionist', 'school', 'Confidential intervention planning and progress monitoring.', true),
    ('student', 'Student', 'school', 'Published learning content and the student''s own records.', true),
    ('guardian', 'Guardian', 'school', 'Published family content and linked learner records.', true)
ON CONFLICT (code) DO UPDATE
SET label = EXCLUDED.label,
    scope_level = EXCLUDED.scope_level,
    description = EXCLUDED.description,
    is_system = EXCLUDED.is_system;

WITH grants(role_code, permission_code) AS (
    VALUES
        ('state_admin', 'tenant.view'),
        ('state_admin', 'tenant.manage'),
        ('state_admin', 'users.view'),
        ('state_admin', 'users.manage'),
        ('state_admin', 'security.manage'),
        ('state_admin', 'lms.author'),
        ('state_admin', 'lms.grade'),
        ('state_admin', 'lms.manage'),
        ('state_admin', 'students.view'),
        ('state_admin', 'interventions.view'),
        ('state_admin', 'interventions.manage'),
        ('state_admin', 'integrations.view'),
        ('state_admin', 'integrations.manage'),
        ('state_admin', 'jobs.view'),
        ('state_admin', 'jobs.manage'),
        ('state_admin', 'backups.view'),
        ('state_admin', 'backups.manage'),
        ('state_admin', 'audit.view'),
        ('state_admin', 'analytics.view'),
        ('state_admin', 'communications.manage'),
        ('state_admin', 'compliance.view'),
        ('state_admin', 'sandbox.manage'),
        ('state_admin', 'rollover.manage'),

        ('state_reviewer', 'tenant.view'),
        ('state_reviewer', 'audit.view'),
        ('state_reviewer', 'analytics.view'),
        ('state_reviewer', 'compliance.view'),

        ('district_admin', 'tenant.view'),
        ('district_admin', 'tenant.manage'),
        ('district_admin', 'users.view'),
        ('district_admin', 'users.manage'),
        ('district_admin', 'security.manage'),
        ('district_admin', 'lms.author'),
        ('district_admin', 'lms.grade'),
        ('district_admin', 'lms.manage'),
        ('district_admin', 'students.view'),
        ('district_admin', 'interventions.view'),
        ('district_admin', 'interventions.manage'),
        ('district_admin', 'integrations.view'),
        ('district_admin', 'integrations.manage'),
        ('district_admin', 'jobs.view'),
        ('district_admin', 'jobs.manage'),
        ('district_admin', 'backups.view'),
        ('district_admin', 'backups.manage'),
        ('district_admin', 'audit.view'),
        ('district_admin', 'analytics.view'),
        ('district_admin', 'communications.manage'),
        ('district_admin', 'compliance.view'),
        ('district_admin', 'sandbox.manage'),
        ('district_admin', 'rollover.manage'),

        ('district_data_manager', 'tenant.view'),
        ('district_data_manager', 'users.view'),
        ('district_data_manager', 'students.view'),
        ('district_data_manager', 'integrations.view'),
        ('district_data_manager', 'integrations.manage'),
        ('district_data_manager', 'jobs.view'),
        ('district_data_manager', 'jobs.manage'),
        ('district_data_manager', 'analytics.view'),
        ('district_data_manager', 'rollover.manage'),

        ('school_admin', 'tenant.view'),
        ('school_admin', 'tenant.manage'),
        ('school_admin', 'users.view'),
        ('school_admin', 'users.manage'),
        ('school_admin', 'security.manage'),
        ('school_admin', 'lms.author'),
        ('school_admin', 'lms.grade'),
        ('school_admin', 'lms.manage'),
        ('school_admin', 'students.view'),
        ('school_admin', 'interventions.view'),
        ('school_admin', 'interventions.manage'),
        ('school_admin', 'integrations.view'),
        ('school_admin', 'integrations.manage'),
        ('school_admin', 'jobs.view'),
        ('school_admin', 'jobs.manage'),
        ('school_admin', 'backups.view'),
        ('school_admin', 'backups.manage'),
        ('school_admin', 'audit.view'),
        ('school_admin', 'analytics.view'),
        ('school_admin', 'communications.manage'),
        ('school_admin', 'compliance.view'),
        ('school_admin', 'sandbox.manage'),
        ('school_admin', 'rollover.manage'),

        ('teacher', 'tenant.view'),
        ('teacher', 'users.view'),
        ('teacher', 'lms.learn'),
        ('teacher', 'lms.author'),
        ('teacher', 'lms.grade'),
        ('teacher', 'students.view'),
        ('teacher', 'communications.manage'),

        ('interventionist', 'tenant.view'),
        ('interventionist', 'users.view'),
        ('interventionist', 'students.view'),
        ('interventionist', 'lms.family_view'),
        ('interventionist', 'interventions.view'),
        ('interventionist', 'interventions.manage'),

        ('student', 'lms.learn'),
        ('guardian', 'lms.family_view')
)
INSERT INTO educonnect.role_permissions (role_id, permission_id)
SELECT roles.id, permissions.id
FROM grants
JOIN educonnect.role_definitions AS roles ON roles.code = grants.role_code
JOIN educonnect.permissions ON permissions.code = grants.permission_code
ON CONFLICT (role_id, permission_id) DO NOTHING;

INSERT INTO educonnect.schema_migrations (version, description)
VALUES ('002', 'Built-in authorization catalog')
ON CONFLICT (version) DO UPDATE
SET description = EXCLUDED.description;

COMMIT;
