BEGIN;

SET LOCAL lock_timeout = '10s';
SET LOCAL statement_timeout = '5min';

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE SCHEMA IF NOT EXISTS educonnect;

CREATE TABLE IF NOT EXISTS educonnect.schema_migrations (
    version text PRIMARY KEY,
    description text NOT NULL,
    applied_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

CREATE OR REPLACE FUNCTION educonnect.touch_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at := clock_timestamp();
    RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION educonnect.prevent_mutation()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE EXCEPTION '% is append-only', TG_TABLE_NAME
        USING ERRCODE = '55000';
END;
$$;

-- Tenant hierarchy -----------------------------------------------------------

CREATE TABLE IF NOT EXISTS educonnect.states (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    code text NOT NULL,
    name text NOT NULL,
    timezone text NOT NULL DEFAULT 'America/New_York',
    status text NOT NULL DEFAULT 'active'
        CHECK (status IN ('active', 'inactive', 'archived')),
    settings jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(settings) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    archived_at timestamptz,
    CONSTRAINT states_code_unique UNIQUE (code)
);

CREATE TABLE IF NOT EXISTS educonnect.districts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    state_id uuid NOT NULL REFERENCES educonnect.states(id) ON DELETE RESTRICT,
    external_key text,
    slug text NOT NULL,
    name text NOT NULL,
    status text NOT NULL DEFAULT 'active'
        CHECK (status IN ('onboarding', 'active', 'suspended', 'archived')),
    settings jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(settings) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    archived_at timestamptz,
    CONSTRAINT districts_state_slug_unique UNIQUE (state_id, slug),
    CONSTRAINT districts_id_state_unique UNIQUE (id, state_id)
);

CREATE TABLE IF NOT EXISTS educonnect.schools (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    state_id uuid NOT NULL,
    district_id uuid NOT NULL,
    external_key text,
    slug text NOT NULL,
    name text NOT NULL,
    category text NOT NULL DEFAULT 'public'
        CHECK (category IN ('public', 'charter', 'private', 'other')),
    status text NOT NULL DEFAULT 'onboarding'
        CHECK (status IN ('onboarding', 'active', 'suspended', 'archived')),
    timezone text NOT NULL DEFAULT 'America/New_York',
    locale text NOT NULL DEFAULT 'en-US',
    modules text[] NOT NULL DEFAULT ARRAY['LMS']::text[],
    storage_quota_bytes bigint NOT NULL DEFAULT 80530636800
        CHECK (storage_quota_bytes >= 0),
    is_sandbox boolean NOT NULL DEFAULT false,
    source_school_id uuid REFERENCES educonnect.schools(id) ON DELETE SET NULL,
    settings jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(settings) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    archived_at timestamptz,
    CONSTRAINT schools_district_hierarchy_fk
        FOREIGN KEY (district_id, state_id)
        REFERENCES educonnect.districts(id, state_id) ON DELETE RESTRICT,
    CONSTRAINT schools_district_slug_unique UNIQUE (district_id, slug),
    CONSTRAINT schools_id_district_state_unique UNIQUE (id, district_id, state_id),
    CONSTRAINT schools_id_school_unique UNIQUE (id, state_id),
    CONSTRAINT schools_not_own_source CHECK (source_school_id IS NULL OR source_school_id <> id)
);

CREATE TABLE IF NOT EXISTS educonnect.school_domains (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    domain text NOT NULL,
    is_primary boolean NOT NULL DEFAULT false,
    dns_status text NOT NULL DEFAULT 'pending'
        CHECK (dns_status IN ('pending', 'verified', 'failed')),
    tls_status text NOT NULL DEFAULT 'pending'
        CHECK (tls_status IN ('pending', 'provisioning', 'active', 'failed')),
    verification_token_hash text,
    verified_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

CREATE UNIQUE INDEX IF NOT EXISTS school_domains_domain_unique
    ON educonnect.school_domains (lower(domain));
CREATE UNIQUE INDEX IF NOT EXISTS school_domains_one_primary
    ON educonnect.school_domains (school_id) WHERE is_primary;

CREATE TABLE IF NOT EXISTS educonnect.school_branding (
    school_id uuid PRIMARY KEY REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    display_name text,
    logo_object_key text,
    favicon_object_key text,
    primary_color text NOT NULL DEFAULT '#0050CB'
        CHECK (primary_color ~ '^#[0-9A-Fa-f]{6}$'),
    secondary_color text NOT NULL DEFAULT '#10233F'
        CHECK (secondary_color ~ '^#[0-9A-Fa-f]{6}$'),
    accent_color text NOT NULL DEFAULT '#F2B705'
        CHECK (accent_color ~ '^#[0-9A-Fa-f]{6}$'),
    font_family text NOT NULL DEFAULT 'Inter',
    login_message text,
    custom_css text,
    updated_by uuid,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

-- Identity and authorization -------------------------------------------------

CREATE TABLE IF NOT EXISTS educonnect.user_accounts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text,
    username text,
    password_hash text,
    given_name text NOT NULL DEFAULT '',
    family_name text NOT NULL DEFAULT '',
    display_name text NOT NULL DEFAULT '',
    status text NOT NULL DEFAULT 'invited'
        CHECK (status IN ('invited', 'active', 'locked', 'disabled', 'deleted')),
    is_global_admin boolean NOT NULL DEFAULT false,
    must_rotate_password boolean NOT NULL DEFAULT true,
    password_changed_at timestamptz,
    last_login_at timestamptz,
    locale text NOT NULL DEFAULT 'en-US',
    profile jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(profile) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    deleted_at timestamptz,
    CONSTRAINT user_accounts_login_present CHECK (email IS NOT NULL OR username IS NOT NULL)
);

DO $$
BEGIN
    ALTER TABLE educonnect.school_branding
        ADD CONSTRAINT school_branding_updated_by_fk
        FOREIGN KEY (updated_by)
        REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL;
EXCEPTION
    WHEN duplicate_object THEN NULL;
END;
$$;

CREATE UNIQUE INDEX IF NOT EXISTS user_accounts_email_unique
    ON educonnect.user_accounts (lower(email))
    WHERE email IS NOT NULL AND deleted_at IS NULL;
CREATE UNIQUE INDEX IF NOT EXISTS user_accounts_username_unique
    ON educonnect.user_accounts (lower(username))
    WHERE username IS NOT NULL AND deleted_at IS NULL;

CREATE TABLE IF NOT EXISTS educonnect.role_definitions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    code text NOT NULL UNIQUE,
    label text NOT NULL,
    scope_level text NOT NULL
        CHECK (scope_level IN ('state', 'district', 'school')),
    description text NOT NULL DEFAULT '',
    is_system boolean NOT NULL DEFAULT false,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

CREATE TABLE IF NOT EXISTS educonnect.permissions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    code text NOT NULL UNIQUE,
    description text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

CREATE TABLE IF NOT EXISTS educonnect.role_permissions (
    role_id uuid NOT NULL REFERENCES educonnect.role_definitions(id) ON DELETE CASCADE,
    permission_id uuid NOT NULL REFERENCES educonnect.permissions(id) ON DELETE CASCADE,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE IF NOT EXISTS educonnect.tenant_memberships (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    role_id uuid NOT NULL REFERENCES educonnect.role_definitions(id) ON DELETE RESTRICT,
    scope_type text NOT NULL CHECK (scope_type IN ('state', 'district', 'school')),
    state_id uuid NOT NULL REFERENCES educonnect.states(id) ON DELETE CASCADE,
    district_id uuid,
    school_id uuid,
    status text NOT NULL DEFAULT 'active'
        CHECK (status IN ('invited', 'active', 'suspended', 'ended')),
    starts_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    ends_at timestamptz,
    metadata jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metadata) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT memberships_district_hierarchy_fk
        FOREIGN KEY (district_id, state_id)
        REFERENCES educonnect.districts(id, state_id) ON DELETE CASCADE,
    CONSTRAINT memberships_school_hierarchy_fk
        FOREIGN KEY (school_id, district_id, state_id)
        REFERENCES educonnect.schools(id, district_id, state_id) ON DELETE CASCADE,
    CONSTRAINT memberships_scope_shape CHECK (
        (scope_type = 'state' AND district_id IS NULL AND school_id IS NULL)
        OR (scope_type = 'district' AND district_id IS NOT NULL AND school_id IS NULL)
        OR (scope_type = 'school' AND district_id IS NOT NULL AND school_id IS NOT NULL)
    ),
    CONSTRAINT memberships_valid_window CHECK (ends_at IS NULL OR ends_at > starts_at)
);

CREATE UNIQUE INDEX IF NOT EXISTS memberships_unique_state_role
    ON educonnect.tenant_memberships (user_id, role_id, state_id)
    WHERE scope_type = 'state' AND status IN ('invited', 'active', 'suspended');
CREATE UNIQUE INDEX IF NOT EXISTS memberships_unique_district_role
    ON educonnect.tenant_memberships (user_id, role_id, district_id)
    WHERE scope_type = 'district' AND status IN ('invited', 'active', 'suspended');
CREATE UNIQUE INDEX IF NOT EXISTS memberships_unique_school_role
    ON educonnect.tenant_memberships (user_id, role_id, school_id)
    WHERE scope_type = 'school' AND status IN ('invited', 'active', 'suspended');

CREATE TABLE IF NOT EXISTS educonnect.guardian_student_links (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    guardian_user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    student_user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    relationship text NOT NULL DEFAULT 'guardian',
    educational_records_access boolean NOT NULL DEFAULT true,
    emergency_contact boolean NOT NULL DEFAULT false,
    status text NOT NULL DEFAULT 'active'
        CHECK (status IN ('pending', 'active', 'revoked')),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT guardian_student_distinct CHECK (guardian_user_id <> student_user_id),
    CONSTRAINT guardian_student_school_unique UNIQUE (school_id, guardian_user_id, student_user_id)
);

CREATE TABLE IF NOT EXISTS educonnect.auth_sessions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    token_hash text NOT NULL UNIQUE,
    device_label text,
    user_agent text,
    ip_address inet,
    mfa_verified_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    last_seen_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    expires_at timestamptz NOT NULL,
    revoked_at timestamptz,
    revoke_reason text,
    CONSTRAINT auth_sessions_expiry_after_creation CHECK (expires_at > created_at)
);

CREATE TABLE IF NOT EXISTS educonnect.mfa_factors (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    factor_type text NOT NULL CHECK (factor_type IN ('totp', 'webauthn', 'recovery')),
    label text NOT NULL,
    secret_ciphertext bytea,
    secret_key_reference text,
    public_data jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(public_data) = 'object'),
    verified_at timestamptz,
    last_used_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    revoked_at timestamptz,
    CONSTRAINT mfa_secret_envelope_complete CHECK (
        (secret_ciphertext IS NULL AND secret_key_reference IS NULL)
        OR (secret_ciphertext IS NOT NULL AND secret_key_reference IS NOT NULL)
    )
);

-- Academic calendar ----------------------------------------------------------

CREATE TABLE IF NOT EXISTS educonnect.academic_years (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    code text NOT NULL,
    name text NOT NULL,
    starts_on date NOT NULL,
    ends_on date NOT NULL,
    status text NOT NULL DEFAULT 'planning'
        CHECK (status IN ('planning', 'active', 'closed', 'archived')),
    settings jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(settings) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT academic_year_dates_valid CHECK (ends_on >= starts_on),
    CONSTRAINT academic_year_school_code_unique UNIQUE (school_id, code),
    CONSTRAINT academic_year_id_school_unique UNIQUE (id, school_id)
);

CREATE UNIQUE INDEX IF NOT EXISTS academic_year_one_active_per_school
    ON educonnect.academic_years (school_id) WHERE status = 'active';

CREATE TABLE IF NOT EXISTS educonnect.academic_terms (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    academic_year_id uuid NOT NULL,
    code text NOT NULL,
    name text NOT NULL,
    sequence smallint NOT NULL CHECK (sequence > 0),
    starts_on date NOT NULL,
    ends_on date NOT NULL,
    grading_closes_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT academic_terms_year_fk
        FOREIGN KEY (academic_year_id, school_id)
        REFERENCES educonnect.academic_years(id, school_id) ON DELETE CASCADE,
    CONSTRAINT academic_term_dates_valid CHECK (ends_on >= starts_on),
    CONSTRAINT academic_term_year_code_unique UNIQUE (academic_year_id, code),
    CONSTRAINT academic_term_id_school_unique UNIQUE (id, school_id)
);

-- Media and LMS --------------------------------------------------------------

CREATE TABLE IF NOT EXISTS educonnect.media_objects (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    uploaded_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    provider text NOT NULL,
    bucket text NOT NULL,
    object_key text NOT NULL,
    original_filename text NOT NULL,
    content_type text NOT NULL,
    byte_size bigint NOT NULL CHECK (byte_size >= 0),
    sha256 text NOT NULL CHECK (sha256 ~ '^[0-9A-Fa-f]{64}$'),
    scan_status text NOT NULL DEFAULT 'pending'
        CHECK (scan_status IN ('pending', 'clean', 'infected', 'failed', 'quarantined')),
    processing_status text NOT NULL DEFAULT 'pending'
        CHECK (processing_status IN ('pending', 'ready', 'failed')),
    metadata jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metadata) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    deleted_at timestamptz,
    CONSTRAINT media_object_key_unique UNIQUE (provider, bucket, object_key),
    CONSTRAINT media_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.courses (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    academic_year_id uuid,
    owner_user_id uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    course_code text,
    title text NOT NULL,
    subject text NOT NULL,
    grade_band text,
    description text NOT NULL DEFAULT '',
    standards text[] NOT NULL DEFAULT '{}'::text[],
    status text NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published', 'archived')),
    settings jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(settings) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    archived_at timestamptz,
    CONSTRAINT courses_year_fk
        FOREIGN KEY (academic_year_id, school_id)
        REFERENCES educonnect.academic_years(id, school_id)
        ON DELETE SET NULL (academic_year_id),
    CONSTRAINT courses_id_school_unique UNIQUE (id, school_id)
);

CREATE UNIQUE INDEX IF NOT EXISTS courses_school_code_unique
    ON educonnect.courses (school_id, course_code)
    WHERE course_code IS NOT NULL AND archived_at IS NULL;

CREATE TABLE IF NOT EXISTS educonnect.course_sections (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    course_id uuid NOT NULL,
    academic_term_id uuid,
    primary_teacher_user_id uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    section_code text,
    name text NOT NULL,
    status text NOT NULL DEFAULT 'planned'
        CHECK (status IN ('planned', 'active', 'completed', 'archived')),
    schedule jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(schedule) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT course_sections_course_fk
        FOREIGN KEY (course_id, school_id)
        REFERENCES educonnect.courses(id, school_id) ON DELETE CASCADE,
    CONSTRAINT course_sections_term_fk
        FOREIGN KEY (academic_term_id, school_id)
        REFERENCES educonnect.academic_terms(id, school_id)
        ON DELETE SET NULL (academic_term_id),
    CONSTRAINT course_sections_id_school_unique UNIQUE (id, school_id)
);

CREATE UNIQUE INDEX IF NOT EXISTS course_sections_school_code_unique
    ON educonnect.course_sections (school_id, section_code)
    WHERE section_code IS NOT NULL AND status <> 'archived';

CREATE TABLE IF NOT EXISTS educonnect.section_enrollments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    section_id uuid NOT NULL,
    user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    enrollment_role text NOT NULL
        CHECK (enrollment_role IN ('student', 'teacher', 'aide', 'observer')),
    status text NOT NULL DEFAULT 'active'
        CHECK (status IN ('pending', 'active', 'completed', 'withdrawn')),
    enrolled_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    ended_at timestamptz,
    metadata jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metadata) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT section_enrollments_section_fk
        FOREIGN KEY (section_id, school_id)
        REFERENCES educonnect.course_sections(id, school_id) ON DELETE CASCADE,
    CONSTRAINT section_enrollment_unique UNIQUE (section_id, user_id, enrollment_role),
    CONSTRAINT section_enrollment_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.course_units (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    course_id uuid NOT NULL,
    title text NOT NULL,
    description text NOT NULL DEFAULT '',
    sequence integer NOT NULL CHECK (sequence >= 0),
    status text NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published', 'archived')),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT course_units_course_fk
        FOREIGN KEY (course_id, school_id)
        REFERENCES educonnect.courses(id, school_id) ON DELETE CASCADE,
    CONSTRAINT course_unit_sequence_unique UNIQUE (course_id, sequence),
    CONSTRAINT course_unit_id_course_school_unique UNIQUE (id, course_id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.lessons (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    course_id uuid NOT NULL,
    unit_id uuid,
    author_user_id uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    title text NOT NULL,
    summary text NOT NULL DEFAULT '',
    status text NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'review', 'published', 'archived')),
    visibility text NOT NULL DEFAULT 'students'
        CHECK (visibility IN ('staff', 'students', 'students_and_families')),
    sequence integer NOT NULL DEFAULT 0 CHECK (sequence >= 0),
    estimated_minutes integer CHECK (estimated_minutes IS NULL OR estimated_minutes > 0),
    standards text[] NOT NULL DEFAULT '{}'::text[],
    controls jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(controls) = 'object'),
    published_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT lessons_course_fk
        FOREIGN KEY (course_id, school_id)
        REFERENCES educonnect.courses(id, school_id) ON DELETE CASCADE,
    CONSTRAINT lessons_unit_fk
        FOREIGN KEY (unit_id, course_id, school_id)
        REFERENCES educonnect.course_units(id, course_id, school_id)
        ON DELETE SET NULL (unit_id),
    CONSTRAINT lesson_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.lesson_blocks (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    lesson_id uuid NOT NULL,
    media_object_id uuid,
    block_type text NOT NULL
        CHECK (block_type IN (
            'heading', 'rich_text', 'image', 'audio', 'video', 'document',
            'embed', 'callout', 'discussion', 'activity', 'quiz', 'divider'
        )),
    sequence integer NOT NULL CHECK (sequence >= 0),
    content jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(content) = 'object'),
    accessibility jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(accessibility) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT lesson_blocks_lesson_fk
        FOREIGN KEY (lesson_id, school_id)
        REFERENCES educonnect.lessons(id, school_id) ON DELETE CASCADE,
    CONSTRAINT lesson_blocks_media_fk
        FOREIGN KEY (media_object_id, school_id)
        REFERENCES educonnect.media_objects(id, school_id)
        ON DELETE SET NULL (media_object_id),
    CONSTRAINT lesson_block_sequence_unique UNIQUE (lesson_id, sequence),
    CONSTRAINT lesson_block_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.questions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    author_user_id uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    question_type text NOT NULL
        CHECK (question_type IN (
            'multiple_choice', 'multiple_select', 'true_false', 'short_answer',
            'long_answer', 'fill_blank', 'matching', 'ordering', 'numeric', 'file_upload'
        )),
    title text,
    prompt jsonb NOT NULL
        CHECK (jsonb_typeof(prompt) = 'object'),
    subject text,
    grade_band text,
    standards text[] NOT NULL DEFAULT '{}'::text[],
    default_points numeric(10,2) NOT NULL DEFAULT 1 CHECK (default_points >= 0),
    status text NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'active', 'retired')),
    metadata jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metadata) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT question_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.question_options (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    question_id uuid NOT NULL,
    option_key text NOT NULL,
    content jsonb NOT NULL
        CHECK (jsonb_typeof(content) = 'object'),
    sequence integer NOT NULL CHECK (sequence >= 0),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT question_options_question_fk
        FOREIGN KEY (question_id, school_id)
        REFERENCES educonnect.questions(id, school_id) ON DELETE CASCADE,
    CONSTRAINT question_option_key_unique UNIQUE (question_id, option_key),
    CONSTRAINT question_option_sequence_unique UNIQUE (question_id, sequence)
);

-- Answer material is intentionally separated from student-readable questions.
CREATE TABLE IF NOT EXISTS educonnect.question_answer_keys (
    question_id uuid PRIMARY KEY,
    school_id uuid NOT NULL,
    answer_spec jsonb NOT NULL
        CHECK (jsonb_typeof(answer_spec) = 'object'),
    feedback jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(feedback) = 'object'),
    grading_strategy text NOT NULL DEFAULT 'automatic'
        CHECK (grading_strategy IN ('automatic', 'manual', 'hybrid')),
    updated_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT question_answer_key_question_fk
        FOREIGN KEY (question_id, school_id)
        REFERENCES educonnect.questions(id, school_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS educonnect.quizzes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    lesson_id uuid,
    author_user_id uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    title text NOT NULL,
    instructions text NOT NULL DEFAULT '',
    status text NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'review', 'published', 'archived')),
    time_limit_minutes integer CHECK (time_limit_minutes IS NULL OR time_limit_minutes > 0),
    max_attempts integer NOT NULL DEFAULT 1 CHECK (max_attempts > 0),
    shuffle_questions boolean NOT NULL DEFAULT false,
    shuffle_options boolean NOT NULL DEFAULT false,
    show_results text NOT NULL DEFAULT 'after_submission'
        CHECK (show_results IN ('never', 'after_submission', 'after_due_date', 'after_grading')),
    passing_score numeric(5,2) CHECK (passing_score IS NULL OR (passing_score >= 0 AND passing_score <= 100)),
    settings jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(settings) = 'object'),
    published_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT quizzes_lesson_fk
        FOREIGN KEY (lesson_id, school_id)
        REFERENCES educonnect.lessons(id, school_id)
        ON DELETE SET NULL (lesson_id),
    CONSTRAINT quiz_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.quiz_questions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    quiz_id uuid NOT NULL,
    question_id uuid NOT NULL,
    sequence integer NOT NULL CHECK (sequence >= 0),
    points numeric(10,2) NOT NULL CHECK (points >= 0),
    settings jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(settings) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT quiz_questions_quiz_fk
        FOREIGN KEY (quiz_id, school_id)
        REFERENCES educonnect.quizzes(id, school_id) ON DELETE CASCADE,
    CONSTRAINT quiz_questions_question_fk
        FOREIGN KEY (question_id, school_id)
        REFERENCES educonnect.questions(id, school_id) ON DELETE RESTRICT,
    CONSTRAINT quiz_question_unique UNIQUE (quiz_id, question_id),
    CONSTRAINT quiz_question_sequence_unique UNIQUE (quiz_id, sequence)
);

CREATE TABLE IF NOT EXISTS educonnect.assignments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    section_id uuid NOT NULL,
    lesson_id uuid,
    quiz_id uuid,
    created_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    title text NOT NULL,
    assignment_type text NOT NULL DEFAULT 'activity'
        CHECK (assignment_type IN ('activity', 'quiz', 'writing', 'discussion', 'project', 'file_upload')),
    instructions jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(instructions) = 'object'),
    points_possible numeric(10,2) NOT NULL DEFAULT 0 CHECK (points_possible >= 0),
    status text NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'scheduled', 'published', 'closed', 'archived')),
    available_at timestamptz,
    due_at timestamptz,
    lock_at timestamptz,
    allow_resubmission boolean NOT NULL DEFAULT true,
    max_attempts integer NOT NULL DEFAULT 1 CHECK (max_attempts > 0),
    settings jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(settings) = 'object'),
    published_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT assignments_section_fk
        FOREIGN KEY (section_id, school_id)
        REFERENCES educonnect.course_sections(id, school_id) ON DELETE CASCADE,
    CONSTRAINT assignments_lesson_fk
        FOREIGN KEY (lesson_id, school_id)
        REFERENCES educonnect.lessons(id, school_id)
        ON DELETE SET NULL (lesson_id),
    CONSTRAINT assignments_quiz_fk
        FOREIGN KEY (quiz_id, school_id)
        REFERENCES educonnect.quizzes(id, school_id)
        ON DELETE SET NULL (quiz_id),
    CONSTRAINT assignments_window_valid CHECK (due_at IS NULL OR available_at IS NULL OR due_at >= available_at),
    CONSTRAINT assignments_lock_valid CHECK (lock_at IS NULL OR due_at IS NULL OR lock_at >= due_at),
    CONSTRAINT assignment_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.assignment_overrides (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    assignment_id uuid NOT NULL,
    user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    available_at timestamptz,
    due_at timestamptz,
    lock_at timestamptz,
    max_attempts integer CHECK (max_attempts IS NULL OR max_attempts > 0),
    reason text,
    created_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT assignment_overrides_assignment_fk
        FOREIGN KEY (assignment_id, school_id)
        REFERENCES educonnect.assignments(id, school_id) ON DELETE CASCADE,
    CONSTRAINT assignment_override_unique UNIQUE (assignment_id, user_id)
);

CREATE TABLE IF NOT EXISTS educonnect.submissions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    assignment_id uuid NOT NULL,
    student_user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    attempt integer NOT NULL DEFAULT 1 CHECK (attempt > 0),
    status text NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'submitted', 'late', 'returned', 'graded', 'excused')),
    response jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(response) = 'object'),
    submitted_at timestamptz,
    score numeric(10,2) CHECK (score IS NULL OR score >= 0),
    feedback jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(feedback) = 'object'),
    graded_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    graded_at timestamptz,
    returned_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT submissions_assignment_fk
        FOREIGN KEY (assignment_id, school_id)
        REFERENCES educonnect.assignments(id, school_id) ON DELETE CASCADE,
    CONSTRAINT submission_attempt_unique UNIQUE (assignment_id, student_user_id, attempt),
    CONSTRAINT submission_id_school_unique UNIQUE (id, school_id),
    CONSTRAINT submission_gradebook_identity_unique
        UNIQUE (id, assignment_id, student_user_id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.submission_media (
    submission_id uuid NOT NULL,
    media_object_id uuid NOT NULL,
    school_id uuid NOT NULL,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    PRIMARY KEY (submission_id, media_object_id),
    CONSTRAINT submission_media_submission_fk
        FOREIGN KEY (submission_id, school_id)
        REFERENCES educonnect.submissions(id, school_id) ON DELETE CASCADE,
    CONSTRAINT submission_media_object_fk
        FOREIGN KEY (media_object_id, school_id)
        REFERENCES educonnect.media_objects(id, school_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS educonnect.gradebook_entries (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    assignment_id uuid NOT NULL,
    student_user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    submission_id uuid,
    status text NOT NULL DEFAULT 'ungraded'
        CHECK (status IN ('ungraded', 'missing', 'late', 'excused', 'graded')),
    points_earned numeric(10,2),
    points_possible numeric(10,2) NOT NULL CHECK (points_possible >= 0),
    rubric_scores jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(rubric_scores) = 'object'),
    private_comment text,
    posted_at timestamptz,
    graded_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT gradebook_assignment_fk
        FOREIGN KEY (assignment_id, school_id)
        REFERENCES educonnect.assignments(id, school_id) ON DELETE CASCADE,
    CONSTRAINT gradebook_submission_fk
        FOREIGN KEY (submission_id, assignment_id, student_user_id, school_id)
        REFERENCES educonnect.submissions(id, assignment_id, student_user_id, school_id)
        ON DELETE SET NULL (submission_id),
    CONSTRAINT gradebook_assignment_student_unique UNIQUE (assignment_id, student_user_id)
);

CREATE TABLE IF NOT EXISTS educonnect.lesson_progress (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    lesson_id uuid NOT NULL,
    user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    status text NOT NULL DEFAULT 'not_started'
        CHECK (status IN ('not_started', 'in_progress', 'completed')),
    progress_percent numeric(5,2) NOT NULL DEFAULT 0
        CHECK (progress_percent >= 0 AND progress_percent <= 100),
    last_block_id uuid,
    bookmarks jsonb NOT NULL DEFAULT '[]'::jsonb
        CHECK (jsonb_typeof(bookmarks) = 'array'),
    notes jsonb NOT NULL DEFAULT '[]'::jsonb
        CHECK (jsonb_typeof(notes) = 'array'),
    started_at timestamptz,
    completed_at timestamptz,
    last_accessed_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT lesson_progress_lesson_fk
        FOREIGN KEY (lesson_id, school_id)
        REFERENCES educonnect.lessons(id, school_id) ON DELETE CASCADE,
    CONSTRAINT lesson_progress_block_fk
        FOREIGN KEY (last_block_id, school_id)
        REFERENCES educonnect.lesson_blocks(id, school_id)
        ON DELETE SET NULL (last_block_id),
    CONSTRAINT lesson_progress_user_unique UNIQUE (lesson_id, user_id)
);

CREATE TABLE IF NOT EXISTS educonnect.certificates (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    course_id uuid,
    title text NOT NULL,
    verification_code text NOT NULL UNIQUE,
    issued_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    expires_at timestamptz,
    revoked_at timestamptz,
    metadata jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metadata) = 'object'),
    CONSTRAINT certificates_course_fk
        FOREIGN KEY (course_id, school_id)
        REFERENCES educonnect.courses(id, school_id)
        ON DELETE SET NULL (course_id)
);

-- Durable work queue and academic-year rollover ------------------------------

CREATE TABLE IF NOT EXISTS educonnect.background_jobs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    job_type text NOT NULL,
    queue_name text NOT NULL DEFAULT 'default',
    payload jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(payload) = 'object'),
    priority smallint NOT NULL DEFAULT 100,
    status text NOT NULL DEFAULT 'queued'
        CHECK (status IN ('queued', 'running', 'succeeded', 'failed', 'cancelled', 'dead_letter')),
    available_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    attempts integer NOT NULL DEFAULT 0 CHECK (attempts >= 0),
    max_attempts integer NOT NULL DEFAULT 5 CHECK (max_attempts > 0),
    locked_by text,
    locked_at timestamptz,
    heartbeat_at timestamptz,
    last_error jsonb,
    result jsonb,
    deduplication_key text,
    created_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    started_at timestamptz,
    finished_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

CREATE UNIQUE INDEX IF NOT EXISTS background_jobs_active_deduplication
    ON educonnect.background_jobs (queue_name, deduplication_key)
    WHERE deduplication_key IS NOT NULL
      AND status IN ('queued', 'running');

CREATE TABLE IF NOT EXISTS educonnect.job_attempts (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    job_id uuid NOT NULL REFERENCES educonnect.background_jobs(id) ON DELETE CASCADE,
    attempt_number integer NOT NULL CHECK (attempt_number > 0),
    worker_id text NOT NULL,
    started_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    finished_at timestamptz,
    outcome text CHECK (outcome IN ('succeeded', 'failed', 'abandoned')),
    error jsonb,
    metrics jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metrics) = 'object'),
    CONSTRAINT job_attempt_number_unique UNIQUE (job_id, attempt_number)
);

CREATE TABLE IF NOT EXISTS educonnect.academic_year_rollovers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    source_academic_year_id uuid NOT NULL,
    target_academic_year_id uuid NOT NULL,
    job_id uuid REFERENCES educonnect.background_jobs(id) ON DELETE SET NULL,
    requested_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    status text NOT NULL DEFAULT 'planned'
        CHECK (status IN ('planned', 'validating', 'running', 'completed', 'failed', 'cancelled')),
    options jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(options) = 'object'),
    validation_report jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(validation_report) = 'object'),
    result jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(result) = 'object'),
    started_at timestamptz,
    completed_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT rollovers_source_year_fk
        FOREIGN KEY (source_academic_year_id, school_id)
        REFERENCES educonnect.academic_years(id, school_id) ON DELETE RESTRICT,
    CONSTRAINT rollovers_target_year_fk
        FOREIGN KEY (target_academic_year_id, school_id)
        REFERENCES educonnect.academic_years(id, school_id) ON DELETE RESTRICT,
    CONSTRAINT rollover_distinct_years CHECK (source_academic_year_id <> target_academic_year_id),
    CONSTRAINT rollover_school_target_unique UNIQUE (school_id, target_academic_year_id)
);

-- Student interventions ------------------------------------------------------

CREATE TABLE IF NOT EXISTS educonnect.intervention_plans (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    academic_year_id uuid NOT NULL,
    student_user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    case_manager_user_id uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    plan_type text NOT NULL,
    tier smallint CHECK (tier BETWEEN 1 AND 3),
    status text NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'active', 'monitoring', 'completed', 'closed')),
    reason text NOT NULL,
    strengths text NOT NULL DEFAULT '',
    family_contact_status text,
    consent_recorded_at timestamptz,
    starts_on date NOT NULL,
    review_on date,
    ends_on date,
    sensitive_data jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(sensitive_data) = 'object'),
    created_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT intervention_plan_year_fk
        FOREIGN KEY (academic_year_id, school_id)
        REFERENCES educonnect.academic_years(id, school_id) ON DELETE RESTRICT,
    CONSTRAINT intervention_plan_dates_valid CHECK (ends_on IS NULL OR ends_on >= starts_on),
    CONSTRAINT intervention_plan_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.intervention_team_members (
    plan_id uuid NOT NULL,
    school_id uuid NOT NULL,
    user_id uuid NOT NULL REFERENCES educonnect.user_accounts(id) ON DELETE CASCADE,
    team_role text NOT NULL,
    can_edit boolean NOT NULL DEFAULT false,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    PRIMARY KEY (plan_id, user_id),
    CONSTRAINT intervention_team_plan_fk
        FOREIGN KEY (plan_id, school_id)
        REFERENCES educonnect.intervention_plans(id, school_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS educonnect.intervention_goals (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    plan_id uuid NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    baseline numeric,
    target numeric,
    unit text,
    target_date date,
    status text NOT NULL DEFAULT 'active'
        CHECK (status IN ('active', 'met', 'revised', 'closed')),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT intervention_goals_plan_fk
        FOREIGN KEY (plan_id, school_id)
        REFERENCES educonnect.intervention_plans(id, school_id) ON DELETE CASCADE,
    CONSTRAINT intervention_goal_id_school_unique UNIQUE (id, school_id),
    CONSTRAINT intervention_goal_note_identity_unique UNIQUE (id, plan_id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.intervention_services (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    plan_id uuid NOT NULL,
    provider_user_id uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    service_type text NOT NULL,
    cadence text,
    minutes_per_session integer CHECK (minutes_per_session IS NULL OR minutes_per_session > 0),
    starts_on date NOT NULL,
    ends_on date,
    status text NOT NULL DEFAULT 'scheduled'
        CHECK (status IN ('scheduled', 'active', 'paused', 'completed', 'cancelled')),
    notes text,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT intervention_services_plan_fk
        FOREIGN KEY (plan_id, school_id)
        REFERENCES educonnect.intervention_plans(id, school_id) ON DELETE CASCADE,
    CONSTRAINT intervention_service_dates_valid CHECK (ends_on IS NULL OR ends_on >= starts_on)
);

CREATE TABLE IF NOT EXISTS educonnect.intervention_progress_notes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    plan_id uuid NOT NULL,
    goal_id uuid,
    recorded_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    observed_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    measurement numeric,
    note text NOT NULL,
    evidence jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(evidence) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT intervention_notes_plan_fk
        FOREIGN KEY (plan_id, school_id)
        REFERENCES educonnect.intervention_plans(id, school_id) ON DELETE CASCADE,
    CONSTRAINT intervention_notes_goal_fk
        FOREIGN KEY (goal_id, plan_id, school_id)
        REFERENCES educonnect.intervention_goals(id, plan_id, school_id)
        ON DELETE SET NULL (goal_id)
);

-- External integrations ------------------------------------------------------

CREATE TABLE IF NOT EXISTS educonnect.integration_connections (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    provider text NOT NULL,
    integration_type text NOT NULL
        CHECK (integration_type IN ('sis', 'sso', 'storage', 'email', 'sms', 'push', 'malware_scan', 'analytics')),
    display_name text NOT NULL,
    status text NOT NULL DEFAULT 'disconnected'
        CHECK (status IN ('disconnected', 'configuring', 'connected', 'degraded', 'disabled')),
    public_config jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(public_config) = 'object'),
    secret_ciphertext bytea,
    secret_key_reference text,
    scopes text[] NOT NULL DEFAULT '{}'::text[],
    sync_cursor text,
    last_healthcheck_at timestamptz,
    last_success_at timestamptz,
    last_error jsonb,
    created_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT integration_school_provider_unique UNIQUE (school_id, provider, integration_type),
    CONSTRAINT integration_id_school_unique UNIQUE (id, school_id),
    CONSTRAINT integration_secret_envelope_complete CHECK (
        (secret_ciphertext IS NULL AND secret_key_reference IS NULL)
        OR (secret_ciphertext IS NOT NULL AND secret_key_reference IS NOT NULL)
    )
);

CREATE TABLE IF NOT EXISTS educonnect.integration_sync_runs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    connection_id uuid NOT NULL,
    job_id uuid REFERENCES educonnect.background_jobs(id) ON DELETE SET NULL,
    direction text NOT NULL CHECK (direction IN ('import', 'export', 'bidirectional')),
    sync_mode text NOT NULL CHECK (sync_mode IN ('full', 'incremental', 'webhook')),
    status text NOT NULL DEFAULT 'queued'
        CHECK (status IN ('queued', 'running', 'succeeded', 'partial', 'failed', 'cancelled')),
    cursor_before text,
    cursor_after text,
    records_seen integer NOT NULL DEFAULT 0 CHECK (records_seen >= 0),
    records_created integer NOT NULL DEFAULT 0 CHECK (records_created >= 0),
    records_updated integer NOT NULL DEFAULT 0 CHECK (records_updated >= 0),
    records_rejected integer NOT NULL DEFAULT 0 CHECK (records_rejected >= 0),
    summary jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(summary) = 'object'),
    started_at timestamptz,
    completed_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT integration_sync_connection_fk
        FOREIGN KEY (connection_id, school_id)
        REFERENCES educonnect.integration_connections(id, school_id) ON DELETE CASCADE,
    CONSTRAINT integration_sync_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.integration_sync_errors (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    school_id uuid NOT NULL,
    sync_run_id uuid NOT NULL,
    external_record_type text,
    external_record_id text,
    error_code text NOT NULL,
    message text NOT NULL,
    detail jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(detail) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT integration_error_run_fk
        FOREIGN KEY (sync_run_id, school_id)
        REFERENCES educonnect.integration_sync_runs(id, school_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS educonnect.external_id_mappings (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL,
    connection_id uuid NOT NULL,
    entity_type text NOT NULL,
    internal_id uuid NOT NULL,
    external_id text NOT NULL,
    external_version text,
    last_seen_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    metadata jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metadata) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT external_mapping_connection_fk
        FOREIGN KEY (connection_id, school_id)
        REFERENCES educonnect.integration_connections(id, school_id) ON DELETE CASCADE,
    CONSTRAINT external_mapping_external_unique UNIQUE (connection_id, entity_type, external_id),
    CONSTRAINT external_mapping_internal_unique UNIQUE (connection_id, entity_type, internal_id)
);

-- Backup and recovery --------------------------------------------------------

CREATE TABLE IF NOT EXISTS educonnect.backup_runs (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    backup_scope text NOT NULL CHECK (backup_scope IN ('platform', 'school')),
    backup_type text NOT NULL CHECK (backup_type IN ('full', 'incremental', 'logical_export')),
    provider text NOT NULL,
    object_location text,
    checksum_sha256 text CHECK (checksum_sha256 IS NULL OR checksum_sha256 ~ '^[0-9A-Fa-f]{64}$'),
    byte_size bigint CHECK (byte_size IS NULL OR byte_size >= 0),
    encryption_key_reference text NOT NULL,
    status text NOT NULL DEFAULT 'queued'
        CHECK (status IN ('queued', 'running', 'succeeded', 'failed', 'expired', 'deleted')),
    recovery_point_at timestamptz,
    retention_until timestamptz,
    initiated_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    started_at timestamptz,
    completed_at timestamptz,
    error jsonb,
    metadata jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metadata) = 'object'),
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT backup_scope_school_shape CHECK (
        (backup_scope = 'platform' AND school_id IS NULL)
        OR (backup_scope = 'school' AND school_id IS NOT NULL)
    ),
    CONSTRAINT backup_id_school_unique UNIQUE (id, school_id)
);

CREATE TABLE IF NOT EXISTS educonnect.restore_drills (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    backup_run_id uuid NOT NULL REFERENCES educonnect.backup_runs(id) ON DELETE RESTRICT,
    target_environment text NOT NULL,
    requested_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    status text NOT NULL DEFAULT 'queued'
        CHECK (status IN ('queued', 'running', 'passed', 'failed', 'cancelled')),
    expected_rto_minutes integer CHECK (expected_rto_minutes IS NULL OR expected_rto_minutes > 0),
    actual_rto_seconds integer CHECK (actual_rto_seconds IS NULL OR actual_rto_seconds >= 0),
    integrity_checks jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(integrity_checks) = 'object'),
    started_at timestamptz,
    completed_at timestamptz,
    error jsonb,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

-- Audit, outbox, and privacy-safe analytics ----------------------------------

CREATE TABLE IF NOT EXISTS educonnect.audit_events (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    -- Audit identifiers are deliberately not foreign keys. They must survive
    -- tenant/user archival unchanged and may refer to an external service actor.
    state_id uuid,
    district_id uuid,
    school_id uuid,
    actor_user_id uuid,
    actor_type text NOT NULL DEFAULT 'user'
        CHECK (actor_type IN ('user', 'service', 'system', 'support')),
    event_type text NOT NULL,
    action text NOT NULL,
    resource_type text,
    resource_id text,
    request_id text,
    ip_address inet,
    user_agent text,
    before_state jsonb,
    after_state jsonb,
    metadata jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metadata) = 'object'),
    occurred_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

CREATE TABLE IF NOT EXISTS educonnect.outbox_events (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    aggregate_type text NOT NULL,
    aggregate_id text NOT NULL,
    event_type text NOT NULL,
    payload jsonb NOT NULL CHECK (jsonb_typeof(payload) = 'object'),
    headers jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(headers) = 'object'),
    status text NOT NULL DEFAULT 'pending'
        CHECK (status IN ('pending', 'publishing', 'published', 'failed', 'dead_letter')),
    attempts integer NOT NULL DEFAULT 0 CHECK (attempts >= 0),
    available_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    locked_by text,
    locked_at timestamptz,
    published_at timestamptz,
    last_error jsonb,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp()
);

CREATE TABLE IF NOT EXISTS educonnect.analytics_aggregates (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id uuid NOT NULL REFERENCES educonnect.schools(id) ON DELETE CASCADE,
    academic_year_id uuid,
    metric_key text NOT NULL,
    period_start date NOT NULL,
    period_end date NOT NULL,
    dimensions jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(dimensions) = 'object'),
    metrics jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(metrics) = 'object'),
    cohort_size integer NOT NULL CHECK (cohort_size >= 0),
    privacy_threshold integer NOT NULL DEFAULT 10 CHECK (privacy_threshold > 0),
    suppressed boolean NOT NULL DEFAULT false,
    noise_epsilon numeric(8,4),
    generated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    expires_at timestamptz,
    CONSTRAINT analytics_year_fk
        FOREIGN KEY (academic_year_id, school_id)
        REFERENCES educonnect.academic_years(id, school_id) ON DELETE CASCADE,
    CONSTRAINT analytics_period_valid CHECK (period_end >= period_start),
    CONSTRAINT analytics_privacy_floor CHECK (suppressed OR cohort_size >= privacy_threshold)
);

-- Landing zone for a controlled, checksum-verified migration from legacy JSON.
CREATE TABLE IF NOT EXISTS educonnect.legacy_snapshot_imports (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    source_name text NOT NULL,
    source_sha256 text NOT NULL CHECK (source_sha256 ~ '^[0-9A-Fa-f]{64}$'),
    snapshot jsonb NOT NULL CHECK (jsonb_typeof(snapshot) = 'object'),
    status text NOT NULL DEFAULT 'staged'
        CHECK (status IN ('staged', 'validating', 'validated', 'importing', 'completed', 'failed')),
    validation_report jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(validation_report) = 'object'),
    import_report jsonb NOT NULL DEFAULT '{}'::jsonb
        CHECK (jsonb_typeof(import_report) = 'object'),
    imported_by uuid REFERENCES educonnect.user_accounts(id) ON DELETE SET NULL,
    created_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT clock_timestamp(),
    CONSTRAINT legacy_snapshot_digest_unique UNIQUE (source_sha256)
);

-- Operational indexes --------------------------------------------------------

CREATE INDEX IF NOT EXISTS districts_state_status_idx
    ON educonnect.districts (state_id, status);
CREATE INDEX IF NOT EXISTS schools_hierarchy_status_idx
    ON educonnect.schools (state_id, district_id, status);
CREATE INDEX IF NOT EXISTS memberships_user_status_idx
    ON educonnect.tenant_memberships (user_id, status, ends_at);
CREATE INDEX IF NOT EXISTS memberships_school_status_idx
    ON educonnect.tenant_memberships (school_id, status) WHERE school_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS memberships_district_status_idx
    ON educonnect.tenant_memberships (district_id, status) WHERE district_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS guardian_links_student_idx
    ON educonnect.guardian_student_links (student_user_id, school_id, status);
CREATE INDEX IF NOT EXISTS auth_sessions_user_active_idx
    ON educonnect.auth_sessions (user_id, expires_at) WHERE revoked_at IS NULL;
CREATE INDEX IF NOT EXISTS academic_year_school_status_idx
    ON educonnect.academic_years (school_id, status);
CREATE INDEX IF NOT EXISTS media_school_status_idx
    ON educonnect.media_objects (school_id, scan_status, processing_status) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS sections_school_course_idx
    ON educonnect.course_sections (school_id, course_id, status);
CREATE INDEX IF NOT EXISTS enrollments_user_active_idx
    ON educonnect.section_enrollments (user_id, school_id, status);
CREATE INDEX IF NOT EXISTS enrollments_section_active_idx
    ON educonnect.section_enrollments (section_id, enrollment_role, status);
CREATE INDEX IF NOT EXISTS lessons_course_status_idx
    ON educonnect.lessons (school_id, course_id, status, sequence);
CREATE INDEX IF NOT EXISTS lesson_blocks_lesson_sequence_idx
    ON educonnect.lesson_blocks (lesson_id, sequence);
CREATE INDEX IF NOT EXISTS questions_school_status_idx
    ON educonnect.questions (school_id, status, question_type);
CREATE INDEX IF NOT EXISTS quizzes_school_status_idx
    ON educonnect.quizzes (school_id, status);
CREATE INDEX IF NOT EXISTS assignments_section_due_idx
    ON educonnect.assignments (section_id, status, due_at);
CREATE INDEX IF NOT EXISTS submissions_student_status_idx
    ON educonnect.submissions (student_user_id, school_id, status, submitted_at DESC);
CREATE INDEX IF NOT EXISTS submissions_assignment_status_idx
    ON educonnect.submissions (assignment_id, status, submitted_at DESC);
CREATE INDEX IF NOT EXISTS gradebook_student_idx
    ON educonnect.gradebook_entries (student_user_id, school_id, posted_at DESC);
CREATE INDEX IF NOT EXISTS lesson_progress_user_idx
    ON educonnect.lesson_progress (user_id, school_id, status);
CREATE INDEX IF NOT EXISTS jobs_dequeue_idx
    ON educonnect.background_jobs (queue_name, priority, available_at, created_at)
    WHERE status = 'queued';
CREATE INDEX IF NOT EXISTS jobs_stale_lock_idx
    ON educonnect.background_jobs (locked_at) WHERE status = 'running';
CREATE INDEX IF NOT EXISTS intervention_student_status_idx
    ON educonnect.intervention_plans (school_id, student_user_id, status);
CREATE INDEX IF NOT EXISTS intervention_review_idx
    ON educonnect.intervention_plans (school_id, review_on) WHERE status IN ('active', 'monitoring');
CREATE INDEX IF NOT EXISTS intervention_notes_plan_observed_idx
    ON educonnect.intervention_progress_notes (plan_id, observed_at DESC);
CREATE INDEX IF NOT EXISTS integration_sync_connection_created_idx
    ON educonnect.integration_sync_runs (connection_id, created_at DESC);
CREATE INDEX IF NOT EXISTS external_mappings_lookup_idx
    ON educonnect.external_id_mappings (school_id, entity_type, internal_id);
CREATE INDEX IF NOT EXISTS backups_school_created_idx
    ON educonnect.backup_runs (school_id, created_at DESC);
CREATE INDEX IF NOT EXISTS backups_retention_idx
    ON educonnect.backup_runs (retention_until) WHERE status = 'succeeded';
CREATE INDEX IF NOT EXISTS audit_school_occurred_idx
    ON educonnect.audit_events (school_id, occurred_at DESC);
CREATE INDEX IF NOT EXISTS audit_actor_occurred_idx
    ON educonnect.audit_events (actor_user_id, occurred_at DESC);
CREATE INDEX IF NOT EXISTS audit_request_idx
    ON educonnect.audit_events (request_id) WHERE request_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS outbox_dequeue_idx
    ON educonnect.outbox_events (available_at, created_at) WHERE status = 'pending';
CREATE INDEX IF NOT EXISTS analytics_school_metric_period_idx
    ON educonnect.analytics_aggregates (school_id, metric_key, period_end DESC);

-- Maintain updated_at consistently. Dynamic creation keeps this migration
-- concise while still giving every mutable record the same behavior.
DO $$
DECLARE
    table_name text;
BEGIN
    FOREACH table_name IN ARRAY ARRAY[
        'states', 'districts', 'schools', 'school_domains', 'school_branding',
        'user_accounts', 'role_definitions', 'tenant_memberships',
        'guardian_student_links', 'academic_years', 'academic_terms',
        'media_objects', 'courses', 'course_sections', 'section_enrollments',
        'course_units', 'lessons', 'lesson_blocks', 'questions',
        'question_options', 'question_answer_keys', 'quizzes', 'quiz_questions',
        'assignments', 'assignment_overrides', 'submissions', 'gradebook_entries',
        'lesson_progress', 'background_jobs', 'academic_year_rollovers',
        'intervention_plans', 'intervention_goals', 'intervention_services',
        'integration_connections', 'external_id_mappings', 'backup_runs',
        'restore_drills', 'outbox_events', 'legacy_snapshot_imports'
    ]
    LOOP
        EXECUTE format('DROP TRIGGER IF EXISTS touch_updated_at ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE TRIGGER touch_updated_at BEFORE UPDATE ON educonnect.%I '
            'FOR EACH ROW EXECUTE FUNCTION educonnect.touch_updated_at()',
            table_name
        );
    END LOOP;
END;
$$;

DROP TRIGGER IF EXISTS audit_events_append_only ON educonnect.audit_events;
CREATE TRIGGER audit_events_append_only
    BEFORE UPDATE OR DELETE ON educonnect.audit_events
    FOR EACH ROW EXECUTE FUNCTION educonnect.prevent_mutation();

INSERT INTO educonnect.schema_migrations (version, description)
VALUES ('001', 'Core relational multi-tenant schema')
ON CONFLICT (version) DO UPDATE
SET description = EXCLUDED.description;

COMMIT;
