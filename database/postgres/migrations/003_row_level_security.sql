BEGIN;

SET LOCAL lock_timeout = '10s';
SET LOCAL statement_timeout = '5min';

-- Request identity -----------------------------------------------------------
-- The API must set app.user_id with SET LOCAL inside every transaction.
-- Missing or malformed identity fails closed.

CREATE OR REPLACE FUNCTION educonnect.current_user_id()
RETURNS uuid
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
    raw_user_id text;
BEGIN
    raw_user_id := current_setting('app.user_id', true);
    IF raw_user_id IS NULL OR btrim(raw_user_id) = '' THEN
        RETURN NULL;
    END IF;

    BEGIN
        RETURN raw_user_id::uuid;
    EXCEPTION
        WHEN invalid_text_representation THEN
            RETURN NULL;
    END;
END;
$$;

CREATE OR REPLACE FUNCTION educonnect.is_global_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.user_accounts AS users
        WHERE users.id = educonnect.current_user_id()
          AND users.status = 'active'
          AND users.deleted_at IS NULL
          AND users.is_global_admin
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.is_active_user()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.user_accounts AS users
        WHERE users.id = educonnect.current_user_id()
          AND users.status = 'active'
          AND users.deleted_at IS NULL
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_access_scope(
    target_state_id uuid,
    target_district_id uuid DEFAULT NULL,
    target_school_id uuid DEFAULT NULL
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_global_admin()
        OR EXISTS (
            SELECT 1
            FROM educonnect.tenant_memberships AS membership
            JOIN educonnect.user_accounts AS users ON users.id = membership.user_id
            WHERE membership.user_id = educonnect.current_user_id()
              AND users.status = 'active'
              AND users.deleted_at IS NULL
              AND membership.status = 'active'
              AND membership.starts_at <= statement_timestamp()
              AND (membership.ends_at IS NULL OR membership.ends_at > statement_timestamp())
              AND membership.state_id = target_state_id
              AND (
                  (
                      target_school_id IS NOT NULL
                      AND (
                          membership.scope_type = 'state'
                          OR (membership.scope_type = 'district' AND membership.district_id = target_district_id)
                          OR (membership.scope_type = 'school' AND membership.school_id = target_school_id)
                      )
                  )
                  OR (
                      target_school_id IS NULL
                      AND target_district_id IS NOT NULL
                      AND (
                          membership.scope_type = 'state'
                          OR membership.district_id = target_district_id
                      )
                  )
                  OR (
                      target_school_id IS NULL
                      AND target_district_id IS NULL
                  )
              )
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.has_scope_permission(
    target_state_id uuid,
    target_district_id uuid,
    target_school_id uuid,
    required_permission text
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_global_admin()
        OR EXISTS (
            SELECT 1
            FROM educonnect.tenant_memberships AS membership
            JOIN educonnect.user_accounts AS users ON users.id = membership.user_id
            JOIN educonnect.role_permissions AS role_permission
              ON role_permission.role_id = membership.role_id
            JOIN educonnect.permissions AS permission
              ON permission.id = role_permission.permission_id
            WHERE membership.user_id = educonnect.current_user_id()
              AND users.status = 'active'
              AND users.deleted_at IS NULL
              AND membership.status = 'active'
              AND membership.starts_at <= statement_timestamp()
              AND (membership.ends_at IS NULL OR membership.ends_at > statement_timestamp())
              AND permission.code = required_permission
              AND membership.state_id = target_state_id
              AND (
                  (
                      target_school_id IS NOT NULL
                      AND (
                          membership.scope_type = 'state'
                          OR (membership.scope_type = 'district' AND membership.district_id = target_district_id)
                          OR (membership.scope_type = 'school' AND membership.school_id = target_school_id)
                      )
                  )
                  OR (
                      target_school_id IS NULL
                      AND target_district_id IS NOT NULL
                      AND (
                          membership.scope_type = 'state'
                          OR (membership.scope_type = 'district' AND membership.district_id = target_district_id)
                      )
                  )
                  OR (
                      target_school_id IS NULL
                      AND target_district_id IS NULL
                      AND membership.scope_type = 'state'
                  )
              )
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_access_school(target_school_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.schools AS school
        WHERE school.id = target_school_id
          AND educonnect.can_access_scope(school.state_id, school.district_id, school.id)
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.has_school_permission(
    target_school_id uuid,
    required_permission text
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.schools AS school
        WHERE school.id = target_school_id
          AND educonnect.has_scope_permission(
              school.state_id,
              school.district_id,
              school.id,
              required_permission
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_create_users()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_global_admin()
        OR EXISTS (
            SELECT 1
            FROM educonnect.tenant_memberships AS membership
            JOIN educonnect.user_accounts AS users ON users.id = membership.user_id
            JOIN educonnect.role_permissions AS role_permission
              ON role_permission.role_id = membership.role_id
            JOIN educonnect.permissions AS permission
              ON permission.id = role_permission.permission_id
            WHERE membership.user_id = educonnect.current_user_id()
              AND users.status = 'active'
              AND users.deleted_at IS NULL
              AND membership.status = 'active'
              AND membership.starts_at <= statement_timestamp()
              AND (membership.ends_at IS NULL OR membership.ends_at > statement_timestamp())
              AND permission.code = 'users.manage'
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_view_user(target_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT (target_user_id = educonnect.current_user_id() AND educonnect.is_active_user())
        OR educonnect.is_global_admin()
        OR EXISTS (
            SELECT 1
            FROM educonnect.tenant_memberships AS target_membership
            WHERE target_membership.user_id = target_user_id
              AND target_membership.status <> 'ended'
              AND (
                  educonnect.has_scope_permission(
                      target_membership.state_id,
                      target_membership.district_id,
                      target_membership.school_id,
                      'users.view'
                  )
                  OR educonnect.has_scope_permission(
                      target_membership.state_id,
                      target_membership.district_id,
                      target_membership.school_id,
                      'users.manage'
                  )
              )
        )
        OR EXISTS (
            SELECT 1
            FROM educonnect.guardian_student_links AS link
            WHERE link.guardian_user_id = educonnect.current_user_id()
              AND link.student_user_id = target_user_id
              AND link.status = 'active'
              AND link.educational_records_access
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_manage_user(target_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_global_admin()
        OR EXISTS (
            SELECT 1
            FROM educonnect.tenant_memberships AS target_membership
            WHERE target_membership.user_id = target_user_id
              AND target_membership.status <> 'ended'
              AND educonnect.has_scope_permission(
                  target_membership.state_id,
                  target_membership.district_id,
                  target_membership.school_id,
                  'users.manage'
              )
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.is_guardian_of(
    target_school_id uuid,
    target_student_user_id uuid
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_active_user()
        AND EXISTS (
        SELECT 1
        FROM educonnect.guardian_student_links AS link
        WHERE link.school_id = target_school_id
          AND link.guardian_user_id = educonnect.current_user_id()
          AND link.student_user_id = target_student_user_id
          AND link.status = 'active'
          AND link.educational_records_access
    );
$$;

-- LMS ownership helpers ------------------------------------------------------

CREATE OR REPLACE FUNCTION educonnect.can_staff_section(target_section_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_active_user()
        AND EXISTS (
        SELECT 1
        FROM educonnect.course_sections AS section
        WHERE section.id = target_section_id
          AND (
              educonnect.has_school_permission(section.school_id, 'lms.manage')
              OR section.primary_teacher_user_id = educonnect.current_user_id()
              OR EXISTS (
                  SELECT 1
                  FROM educonnect.section_enrollments AS enrollment
                  WHERE enrollment.section_id = section.id
                    AND enrollment.user_id = educonnect.current_user_id()
                    AND enrollment.enrollment_role IN ('teacher', 'aide')
                    AND enrollment.status = 'active'
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_view_section(target_section_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_active_user()
        AND (
            educonnect.can_staff_section(target_section_id)
            OR EXISTS (
            SELECT 1
            FROM educonnect.section_enrollments AS enrollment
            WHERE enrollment.section_id = target_section_id
              AND enrollment.user_id = educonnect.current_user_id()
              AND enrollment.status IN ('active', 'completed')
            )
            OR EXISTS (
            SELECT 1
            FROM educonnect.section_enrollments AS enrollment
            JOIN educonnect.guardian_student_links AS link
              ON link.school_id = enrollment.school_id
             AND link.student_user_id = enrollment.user_id
            WHERE enrollment.section_id = target_section_id
              AND enrollment.enrollment_role = 'student'
              AND enrollment.status IN ('active', 'completed')
              AND link.guardian_user_id = educonnect.current_user_id()
              AND link.status = 'active'
              AND link.educational_records_access
            )
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_staff_course(target_course_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.course_sections AS section
        WHERE section.course_id = target_course_id
          AND educonnect.can_staff_section(section.id)
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.is_course_learner(target_course_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_active_user()
        AND EXISTS (
            SELECT 1
            FROM educonnect.course_sections AS section
            JOIN educonnect.section_enrollments AS enrollment
              ON enrollment.section_id = section.id
            WHERE section.course_id = target_course_id
              AND enrollment.user_id = educonnect.current_user_id()
              AND enrollment.enrollment_role IN ('student', 'observer')
              AND enrollment.status IN ('active', 'completed')
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.is_course_guardian(target_course_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_active_user()
        AND EXISTS (
            SELECT 1
            FROM educonnect.course_sections AS section
            JOIN educonnect.section_enrollments AS enrollment
              ON enrollment.section_id = section.id
             AND enrollment.enrollment_role = 'student'
             AND enrollment.status IN ('active', 'completed')
            JOIN educonnect.guardian_student_links AS link
              ON link.school_id = enrollment.school_id
             AND link.student_user_id = enrollment.user_id
            WHERE section.course_id = target_course_id
              AND link.guardian_user_id = educonnect.current_user_id()
              AND link.status = 'active'
              AND link.educational_records_access
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_edit_course(target_course_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.courses AS course
        WHERE course.id = target_course_id
          AND (
              educonnect.has_school_permission(course.school_id, 'lms.manage')
              OR (
                  educonnect.has_school_permission(course.school_id, 'lms.author')
                  AND course.owner_user_id = educonnect.current_user_id()
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_view_course(target_course_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.courses AS course
        WHERE course.id = target_course_id
          AND (
              educonnect.can_edit_course(course.id)
              OR educonnect.can_staff_course(course.id)
              OR (
                  course.status = 'published'
                  AND (
                      educonnect.is_course_learner(course.id)
                      OR educonnect.is_course_guardian(course.id)
                  )
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_edit_lesson(target_lesson_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.lessons AS lesson
        WHERE lesson.id = target_lesson_id
          AND (
              educonnect.has_school_permission(lesson.school_id, 'lms.manage')
              OR (
                  educonnect.has_school_permission(lesson.school_id, 'lms.author')
                  AND (
                      lesson.author_user_id = educonnect.current_user_id()
                      OR educonnect.can_edit_course(lesson.course_id)
                  )
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_view_lesson(target_lesson_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.lessons AS lesson
        WHERE lesson.id = target_lesson_id
          AND (
              educonnect.can_edit_lesson(lesson.id)
              OR educonnect.can_staff_course(lesson.course_id)
              OR (
                  lesson.status = 'published'
                  AND (
                      (
                          lesson.visibility IN ('students', 'students_and_families')
                          AND educonnect.is_course_learner(lesson.course_id)
                      )
                      OR (
                          lesson.visibility = 'students_and_families'
                          AND educonnect.is_course_guardian(lesson.course_id)
                      )
                  )
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_staff_assignment(target_assignment_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.assignments AS assignment
        WHERE assignment.id = target_assignment_id
          AND educonnect.can_staff_section(assignment.section_id)
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_view_assignment(target_assignment_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.assignments AS assignment
        WHERE assignment.id = target_assignment_id
          AND (
              educonnect.can_staff_section(assignment.section_id)
              OR (
                  assignment.status IN ('scheduled', 'published', 'closed')
                  AND educonnect.can_view_section(assignment.section_id)
                  AND (assignment.available_at IS NULL OR assignment.available_at <= statement_timestamp())
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_submit_assignment(target_assignment_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.is_active_user()
        AND EXISTS (
            SELECT 1
            FROM educonnect.assignments AS assignment
            JOIN educonnect.section_enrollments AS enrollment
              ON enrollment.section_id = assignment.section_id
            WHERE assignment.id = target_assignment_id
              AND enrollment.user_id = educonnect.current_user_id()
              AND enrollment.enrollment_role = 'student'
              AND enrollment.status = 'active'
              AND assignment.status IN ('scheduled', 'published')
              AND (assignment.available_at IS NULL OR assignment.available_at <= statement_timestamp())
              AND (assignment.lock_at IS NULL OR assignment.lock_at > statement_timestamp())
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_edit_question(target_question_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.questions AS question
        WHERE question.id = target_question_id
          AND (
              educonnect.has_school_permission(question.school_id, 'lms.manage')
              OR (
                  educonnect.has_school_permission(question.school_id, 'lms.author')
                  AND question.author_user_id = educonnect.current_user_id()
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_edit_quiz(target_quiz_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.quizzes AS quiz
        WHERE quiz.id = target_quiz_id
          AND (
              educonnect.has_school_permission(quiz.school_id, 'lms.manage')
              OR (
                  educonnect.has_school_permission(quiz.school_id, 'lms.author')
                  AND quiz.author_user_id = educonnect.current_user_id()
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_view_quiz(target_quiz_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.quizzes AS quiz
        WHERE quiz.id = target_quiz_id
          AND (
              educonnect.can_edit_quiz(quiz.id)
              OR (
                  quiz.status = 'published'
                  AND (
                      (quiz.lesson_id IS NOT NULL AND educonnect.can_view_lesson(quiz.lesson_id))
                      OR EXISTS (
                          SELECT 1
                          FROM educonnect.assignments AS assignment
                          WHERE assignment.quiz_id = quiz.id
                            AND educonnect.can_view_assignment(assignment.id)
                      )
                  )
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_view_question(target_question_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT educonnect.can_edit_question(target_question_id)
        OR EXISTS (
            SELECT 1
            FROM educonnect.quiz_questions AS quiz_question
            WHERE quiz_question.question_id = target_question_id
              AND educonnect.can_view_quiz(quiz_question.quiz_id)
        );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_grade_question(target_question_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.questions AS question
        WHERE question.id = target_question_id
          AND educonnect.has_school_permission(question.school_id, 'lms.grade')
          AND (
              educonnect.can_edit_question(question.id)
              OR EXISTS (
                  SELECT 1
                  FROM educonnect.quiz_questions AS quiz_question
                  JOIN educonnect.assignments AS assignment
                    ON assignment.quiz_id = quiz_question.quiz_id
                  WHERE quiz_question.question_id = question.id
                    AND educonnect.can_staff_assignment(assignment.id)
              )
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_view_submission(target_submission_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.submissions AS submission
        WHERE submission.id = target_submission_id
          AND (
              submission.student_user_id = educonnect.current_user_id()
              OR educonnect.is_guardian_of(submission.school_id, submission.student_user_id)
              OR educonnect.can_staff_assignment(submission.assignment_id)
          )
    );
$$;

CREATE OR REPLACE FUNCTION educonnect.can_view_media(target_media_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM educonnect.media_objects AS media
        WHERE media.id = target_media_id
          AND media.deleted_at IS NULL
          AND media.scan_status = 'clean'
          AND (
              media.uploaded_by = educonnect.current_user_id()
              OR educonnect.has_school_permission(media.school_id, 'lms.author')
              OR educonnect.has_school_permission(media.school_id, 'lms.manage')
              OR EXISTS (
                  SELECT 1
                  FROM educonnect.lesson_blocks AS block
                  WHERE block.media_object_id = media.id
                    AND educonnect.can_view_lesson(block.lesson_id)
              )
              OR EXISTS (
                  SELECT 1
                  FROM educonnect.submission_media AS attachment
                  WHERE attachment.media_object_id = media.id
                    AND educonnect.can_view_submission(attachment.submission_id)
              )
          )
    );
$$;

-- Security and consistency triggers -----------------------------------------

CREATE OR REPLACE FUNCTION educonnect.validate_membership_role_scope()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
DECLARE
    expected_scope text;
BEGIN
    SELECT role.scope_level
    INTO expected_scope
    FROM educonnect.role_definitions AS role
    WHERE role.id = NEW.role_id;

    IF expected_scope IS NULL THEN
        RAISE EXCEPTION 'Unknown role %', NEW.role_id USING ERRCODE = '23503';
    END IF;

    IF expected_scope <> NEW.scope_type THEN
        RAISE EXCEPTION 'Role scope % cannot be assigned at % scope', expected_scope, NEW.scope_type
            USING ERRCODE = '23514';
    END IF;

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS tenant_membership_role_scope ON educonnect.tenant_memberships;
CREATE TRIGGER tenant_membership_role_scope
    BEFORE INSERT OR UPDATE OF role_id, scope_type
    ON educonnect.tenant_memberships
    FOR EACH ROW EXECUTE FUNCTION educonnect.validate_membership_role_scope();

CREATE OR REPLACE FUNCTION educonnect.protect_global_admin_flag()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
BEGIN
    IF NEW.is_global_admin IS DISTINCT FROM OLD.is_global_admin
       AND NOT educonnect.is_global_admin() THEN
        RAISE EXCEPTION 'Only a global administrator can change global-admin status'
            USING ERRCODE = '42501';
    END IF;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS protect_global_admin_flag ON educonnect.user_accounts;
CREATE TRIGGER protect_global_admin_flag
    BEFORE UPDATE OF is_global_admin ON educonnect.user_accounts
    FOR EACH ROW EXECUTE FUNCTION educonnect.protect_global_admin_flag();

CREATE OR REPLACE FUNCTION educonnect.enforce_media_ingest_status()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
BEGIN
    IF NOT educonnect.has_school_permission(NEW.school_id, 'lms.manage')
       AND (
           NEW.scan_status <> 'pending'
           OR NEW.processing_status <> 'pending'
       ) THEN
        RAISE EXCEPTION 'New media must remain pending until trusted workers finish scanning and processing'
            USING ERRCODE = '42501';
    END IF;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS enforce_media_ingest_status ON educonnect.media_objects;
CREATE TRIGGER enforce_media_ingest_status
    BEFORE INSERT ON educonnect.media_objects
    FOR EACH ROW EXECUTE FUNCTION educonnect.enforce_media_ingest_status();

CREATE OR REPLACE FUNCTION educonnect.protect_submission_grading_fields()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
DECLARE
    staff_actor boolean;
    allowed_attempts integer;
BEGIN
    staff_actor := educonnect.can_staff_assignment(NEW.assignment_id);

    IF NOT staff_actor THEN
        SELECT COALESCE(override.max_attempts, assignment.max_attempts)
        INTO allowed_attempts
        FROM educonnect.assignments AS assignment
        LEFT JOIN educonnect.assignment_overrides AS override
          ON override.assignment_id = assignment.id
         AND override.user_id = NEW.student_user_id
        WHERE assignment.id = NEW.assignment_id;

        IF allowed_attempts IS NOT NULL AND NEW.attempt > allowed_attempts THEN
            RAISE EXCEPTION 'Submission attempt % exceeds allowed maximum %', NEW.attempt, allowed_attempts
                USING ERRCODE = '23514';
        END IF;
    END IF;

    IF TG_OP = 'INSERT' AND NOT staff_actor THEN
        IF NEW.student_user_id <> educonnect.current_user_id()
           OR NEW.score IS NOT NULL
           OR NEW.graded_by IS NOT NULL
           OR NEW.graded_at IS NOT NULL
           OR NEW.returned_at IS NOT NULL
           OR NEW.feedback <> '{}'::jsonb THEN
            RAISE EXCEPTION 'Learners cannot set grading fields'
                USING ERRCODE = '42501';
        END IF;
    ELSIF TG_OP = 'UPDATE' AND NOT staff_actor THEN
        IF NEW.student_user_id IS DISTINCT FROM OLD.student_user_id
           OR NEW.assignment_id IS DISTINCT FROM OLD.assignment_id
           OR NEW.score IS DISTINCT FROM OLD.score
           OR NEW.feedback IS DISTINCT FROM OLD.feedback
           OR NEW.graded_by IS DISTINCT FROM OLD.graded_by
           OR NEW.graded_at IS DISTINCT FROM OLD.graded_at
           OR NEW.returned_at IS DISTINCT FROM OLD.returned_at THEN
            RAISE EXCEPTION 'Learners cannot change ownership or grading fields'
                USING ERRCODE = '42501';
        END IF;
    END IF;

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS protect_submission_grading_fields ON educonnect.submissions;
CREATE TRIGGER protect_submission_grading_fields
    BEFORE INSERT OR UPDATE ON educonnect.submissions
    FOR EACH ROW EXECUTE FUNCTION educonnect.protect_submission_grading_fields();

-- Atomic tenant-safe user provisioning. Global-admin status is deliberately
-- excluded; it must be managed through a separate break-glass process.
CREATE OR REPLACE FUNCTION educonnect.provision_user_with_membership(
    new_email text,
    new_username text,
    new_password_hash text,
    new_given_name text,
    new_family_name text,
    role_code text,
    membership_scope text,
    membership_state_id uuid,
    membership_district_id uuid DEFAULT NULL,
    membership_school_id uuid DEFAULT NULL
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, educonnect
AS $$
DECLARE
    new_user_id uuid;
    selected_role_id uuid;
    selected_role_scope text;
BEGIN
    IF educonnect.current_user_id() IS NULL THEN
        RAISE EXCEPTION 'Authenticated request context required' USING ERRCODE = '42501';
    END IF;

    IF NOT educonnect.has_scope_permission(
        membership_state_id,
        membership_district_id,
        membership_school_id,
        'users.manage'
    ) THEN
        RAISE EXCEPTION 'User management permission required for target scope'
            USING ERRCODE = '42501';
    END IF;

    SELECT role.id, role.scope_level
    INTO selected_role_id, selected_role_scope
    FROM educonnect.role_definitions AS role
    WHERE role.code = role_code;

    IF selected_role_id IS NULL OR selected_role_scope <> membership_scope THEN
        RAISE EXCEPTION 'Role is missing or does not match target scope'
            USING ERRCODE = '23514';
    END IF;

    IF (new_email IS NULL OR btrim(new_email) = '')
       AND (new_username IS NULL OR btrim(new_username) = '') THEN
        RAISE EXCEPTION 'Email or username is required' USING ERRCODE = '23514';
    END IF;

    IF new_password_hash IS NOT NULL AND length(new_password_hash) < 20 THEN
        RAISE EXCEPTION 'A password hash, never a plaintext password, is required'
            USING ERRCODE = '23514';
    END IF;

    INSERT INTO educonnect.user_accounts (
        email,
        username,
        password_hash,
        given_name,
        family_name,
        display_name,
        status,
        is_global_admin,
        must_rotate_password
    )
    VALUES (
        NULLIF(lower(btrim(new_email)), ''),
        NULLIF(lower(btrim(new_username)), ''),
        new_password_hash,
        COALESCE(new_given_name, ''),
        COALESCE(new_family_name, ''),
        btrim(concat_ws(' ', new_given_name, new_family_name)),
        'invited',
        false,
        true
    )
    RETURNING id INTO new_user_id;

    INSERT INTO educonnect.tenant_memberships (
        user_id,
        role_id,
        scope_type,
        state_id,
        district_id,
        school_id,
        status
    )
    VALUES (
        new_user_id,
        selected_role_id,
        membership_scope,
        membership_state_id,
        membership_district_id,
        membership_school_id,
        'invited'
    );

    RETURN new_user_id;
END;
$$;

-- Enable RLS on every application-facing table. The schema owner intentionally
-- bypasses RLS for SECURITY DEFINER helpers; the runtime role must not own these
-- tables and must not have BYPASSRLS.
DO $$
DECLARE
    table_name text;
BEGIN
    FOREACH table_name IN ARRAY ARRAY[
        'states', 'districts', 'schools', 'school_domains', 'school_branding',
        'user_accounts', 'role_definitions', 'permissions', 'role_permissions',
        'tenant_memberships', 'guardian_student_links', 'auth_sessions', 'mfa_factors',
        'academic_years', 'academic_terms', 'media_objects', 'courses',
        'course_sections', 'section_enrollments', 'course_units', 'lessons',
        'lesson_blocks', 'questions', 'question_options', 'question_answer_keys',
        'quizzes', 'quiz_questions', 'assignments', 'assignment_overrides',
        'submissions', 'submission_media', 'gradebook_entries', 'lesson_progress',
        'certificates', 'background_jobs', 'job_attempts', 'academic_year_rollovers',
        'intervention_plans', 'intervention_team_members', 'intervention_goals',
        'intervention_services', 'intervention_progress_notes',
        'integration_connections', 'integration_sync_runs', 'integration_sync_errors',
        'external_id_mappings', 'backup_runs', 'restore_drills', 'audit_events',
        'outbox_events', 'analytics_aggregates', 'legacy_snapshot_imports'
    ]
    LOOP
        EXECUTE format('ALTER TABLE educonnect.%I ENABLE ROW LEVEL SECURITY', table_name);
    END LOOP;
END;
$$;

-- Authorization catalog ------------------------------------------------------

DO $$
DECLARE
    table_name text;
BEGIN
    FOREACH table_name IN ARRAY ARRAY['role_definitions', 'permissions', 'role_permissions']
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS catalog_read ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY catalog_read ON educonnect.%I FOR SELECT '
            'USING (educonnect.is_active_user())',
            table_name
        );
        EXECUTE format('DROP POLICY IF EXISTS catalog_global_write ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY catalog_global_write ON educonnect.%I FOR ALL '
            'USING (educonnect.is_global_admin()) WITH CHECK (educonnect.is_global_admin())',
            table_name
        );
    END LOOP;
END;
$$;

-- Tenant hierarchy -----------------------------------------------------------

DROP POLICY IF EXISTS states_select ON educonnect.states;
CREATE POLICY states_select ON educonnect.states FOR SELECT
USING (educonnect.can_access_scope(id, NULL, NULL));
DROP POLICY IF EXISTS states_insert ON educonnect.states;
CREATE POLICY states_insert ON educonnect.states FOR INSERT
WITH CHECK (educonnect.is_global_admin());
DROP POLICY IF EXISTS states_update ON educonnect.states;
CREATE POLICY states_update ON educonnect.states FOR UPDATE
USING (educonnect.has_scope_permission(id, NULL, NULL, 'tenant.manage'))
WITH CHECK (educonnect.has_scope_permission(id, NULL, NULL, 'tenant.manage'));

DROP POLICY IF EXISTS districts_select ON educonnect.districts;
CREATE POLICY districts_select ON educonnect.districts FOR SELECT
USING (educonnect.can_access_scope(state_id, id, NULL));
DROP POLICY IF EXISTS districts_insert ON educonnect.districts;
CREATE POLICY districts_insert ON educonnect.districts FOR INSERT
WITH CHECK (educonnect.has_scope_permission(state_id, NULL, NULL, 'tenant.manage'));
DROP POLICY IF EXISTS districts_update ON educonnect.districts;
CREATE POLICY districts_update ON educonnect.districts FOR UPDATE
USING (educonnect.has_scope_permission(state_id, id, NULL, 'tenant.manage'))
WITH CHECK (educonnect.has_scope_permission(state_id, id, NULL, 'tenant.manage'));

DROP POLICY IF EXISTS schools_select ON educonnect.schools;
CREATE POLICY schools_select ON educonnect.schools FOR SELECT
USING (educonnect.can_access_scope(state_id, district_id, id));
DROP POLICY IF EXISTS schools_insert ON educonnect.schools;
CREATE POLICY schools_insert ON educonnect.schools FOR INSERT
WITH CHECK (
    educonnect.has_scope_permission(state_id, district_id, id, 'tenant.manage')
    AND (source_school_id IS NULL OR educonnect.can_access_school(source_school_id))
);
DROP POLICY IF EXISTS schools_update ON educonnect.schools;
CREATE POLICY schools_update ON educonnect.schools FOR UPDATE
USING (educonnect.has_scope_permission(state_id, district_id, id, 'tenant.manage'))
WITH CHECK (
    educonnect.has_scope_permission(state_id, district_id, id, 'tenant.manage')
    AND (source_school_id IS NULL OR educonnect.can_access_school(source_school_id))
);

DO $$
DECLARE
    table_name text;
BEGIN
    FOREACH table_name IN ARRAY ARRAY['school_domains', 'school_branding']
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS tenant_config_read ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY tenant_config_read ON educonnect.%I FOR SELECT '
            'USING (educonnect.can_access_school(school_id))',
            table_name
        );
        EXECUTE format('DROP POLICY IF EXISTS tenant_config_write ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY tenant_config_write ON educonnect.%I FOR ALL '
            'USING (educonnect.has_school_permission(school_id, ''tenant.manage'')) '
            'WITH CHECK (educonnect.has_school_permission(school_id, ''tenant.manage''))',
            table_name
        );
    END LOOP;
END;
$$;

-- Identity ------------------------------------------------------------------

DROP POLICY IF EXISTS user_accounts_select ON educonnect.user_accounts;
CREATE POLICY user_accounts_select ON educonnect.user_accounts FOR SELECT
USING (educonnect.can_view_user(id));
DROP POLICY IF EXISTS user_accounts_insert ON educonnect.user_accounts;
CREATE POLICY user_accounts_insert ON educonnect.user_accounts FOR INSERT
WITH CHECK (
    educonnect.can_create_users()
    AND (NOT is_global_admin OR educonnect.is_global_admin())
);
DROP POLICY IF EXISTS user_accounts_update ON educonnect.user_accounts;
CREATE POLICY user_accounts_update ON educonnect.user_accounts FOR UPDATE
USING (educonnect.can_manage_user(id))
WITH CHECK (educonnect.can_manage_user(id));

DROP POLICY IF EXISTS memberships_select ON educonnect.tenant_memberships;
CREATE POLICY memberships_select ON educonnect.tenant_memberships FOR SELECT
USING (
    user_id = educonnect.current_user_id()
    OR educonnect.has_scope_permission(state_id, district_id, school_id, 'users.view')
    OR educonnect.has_scope_permission(state_id, district_id, school_id, 'users.manage')
);
DROP POLICY IF EXISTS memberships_insert ON educonnect.tenant_memberships;
CREATE POLICY memberships_insert ON educonnect.tenant_memberships FOR INSERT
WITH CHECK (educonnect.has_scope_permission(state_id, district_id, school_id, 'users.manage'));
DROP POLICY IF EXISTS memberships_update ON educonnect.tenant_memberships;
CREATE POLICY memberships_update ON educonnect.tenant_memberships FOR UPDATE
USING (educonnect.has_scope_permission(state_id, district_id, school_id, 'users.manage'))
WITH CHECK (educonnect.has_scope_permission(state_id, district_id, school_id, 'users.manage'));
DROP POLICY IF EXISTS memberships_delete ON educonnect.tenant_memberships;
CREATE POLICY memberships_delete ON educonnect.tenant_memberships FOR DELETE
USING (educonnect.has_scope_permission(state_id, district_id, school_id, 'users.manage'));

DROP POLICY IF EXISTS guardian_links_select ON educonnect.guardian_student_links;
CREATE POLICY guardian_links_select ON educonnect.guardian_student_links FOR SELECT
USING (
    guardian_user_id = educonnect.current_user_id()
    OR student_user_id = educonnect.current_user_id()
    OR educonnect.has_school_permission(school_id, 'users.view')
);
DROP POLICY IF EXISTS guardian_links_write ON educonnect.guardian_student_links;
CREATE POLICY guardian_links_write ON educonnect.guardian_student_links FOR ALL
USING (educonnect.has_school_permission(school_id, 'users.manage'))
WITH CHECK (educonnect.has_school_permission(school_id, 'users.manage'));

DROP POLICY IF EXISTS auth_sessions_select ON educonnect.auth_sessions;
CREATE POLICY auth_sessions_select ON educonnect.auth_sessions FOR SELECT
USING (user_id = educonnect.current_user_id() OR educonnect.can_manage_user(user_id));
DROP POLICY IF EXISTS auth_sessions_insert ON educonnect.auth_sessions;
CREATE POLICY auth_sessions_insert ON educonnect.auth_sessions FOR INSERT
WITH CHECK (user_id = educonnect.current_user_id());
DROP POLICY IF EXISTS auth_sessions_update ON educonnect.auth_sessions;
CREATE POLICY auth_sessions_update ON educonnect.auth_sessions FOR UPDATE
USING (user_id = educonnect.current_user_id() OR educonnect.can_manage_user(user_id))
WITH CHECK (user_id = educonnect.current_user_id() OR educonnect.can_manage_user(user_id));
DROP POLICY IF EXISTS auth_sessions_delete ON educonnect.auth_sessions;
CREATE POLICY auth_sessions_delete ON educonnect.auth_sessions FOR DELETE
USING (user_id = educonnect.current_user_id() OR educonnect.can_manage_user(user_id));

DROP POLICY IF EXISTS mfa_factors_select ON educonnect.mfa_factors;
CREATE POLICY mfa_factors_select ON educonnect.mfa_factors FOR SELECT
USING (user_id = educonnect.current_user_id() OR educonnect.can_manage_user(user_id));
DROP POLICY IF EXISTS mfa_factors_insert ON educonnect.mfa_factors;
CREATE POLICY mfa_factors_insert ON educonnect.mfa_factors FOR INSERT
WITH CHECK (user_id = educonnect.current_user_id());
DROP POLICY IF EXISTS mfa_factors_update ON educonnect.mfa_factors;
CREATE POLICY mfa_factors_update ON educonnect.mfa_factors FOR UPDATE
USING (user_id = educonnect.current_user_id() OR educonnect.can_manage_user(user_id))
WITH CHECK (user_id = educonnect.current_user_id() OR educonnect.can_manage_user(user_id));
DROP POLICY IF EXISTS mfa_factors_delete ON educonnect.mfa_factors;
CREATE POLICY mfa_factors_delete ON educonnect.mfa_factors FOR DELETE
USING (user_id = educonnect.current_user_id() OR educonnect.can_manage_user(user_id));

-- Academic calendar ----------------------------------------------------------

DO $$
DECLARE
    table_name text;
BEGIN
    FOREACH table_name IN ARRAY ARRAY['academic_years', 'academic_terms']
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS academic_read ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY academic_read ON educonnect.%I FOR SELECT '
            'USING (educonnect.can_access_school(school_id))',
            table_name
        );
        EXECUTE format('DROP POLICY IF EXISTS academic_write ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY academic_write ON educonnect.%I FOR ALL '
            'USING (educonnect.has_school_permission(school_id, ''rollover.manage'') '
            'OR educonnect.has_school_permission(school_id, ''tenant.manage'')) '
            'WITH CHECK (educonnect.has_school_permission(school_id, ''rollover.manage'') '
            'OR educonnect.has_school_permission(school_id, ''tenant.manage''))',
            table_name
        );
    END LOOP;
END;
$$;

DROP POLICY IF EXISTS rollovers_read ON educonnect.academic_year_rollovers;
CREATE POLICY rollovers_read ON educonnect.academic_year_rollovers FOR SELECT
USING (educonnect.has_school_permission(school_id, 'rollover.manage'));
DROP POLICY IF EXISTS rollovers_write ON educonnect.academic_year_rollovers;
CREATE POLICY rollovers_write ON educonnect.academic_year_rollovers FOR ALL
USING (educonnect.has_school_permission(school_id, 'rollover.manage'))
WITH CHECK (educonnect.has_school_permission(school_id, 'rollover.manage'));

-- LMS content ---------------------------------------------------------------

DROP POLICY IF EXISTS media_select ON educonnect.media_objects;
CREATE POLICY media_select ON educonnect.media_objects FOR SELECT
USING (educonnect.can_view_media(id));
DROP POLICY IF EXISTS media_insert ON educonnect.media_objects;
CREATE POLICY media_insert ON educonnect.media_objects FOR INSERT
WITH CHECK (
    educonnect.can_access_school(school_id)
    AND uploaded_by = educonnect.current_user_id()
);
DROP POLICY IF EXISTS media_update ON educonnect.media_objects;
CREATE POLICY media_update ON educonnect.media_objects FOR UPDATE
USING (educonnect.has_school_permission(school_id, 'lms.manage'))
WITH CHECK (educonnect.has_school_permission(school_id, 'lms.manage'));
DROP POLICY IF EXISTS media_delete ON educonnect.media_objects;
CREATE POLICY media_delete ON educonnect.media_objects FOR DELETE
USING (
    uploaded_by = educonnect.current_user_id()
    OR educonnect.has_school_permission(school_id, 'lms.manage')
);

DROP POLICY IF EXISTS courses_select ON educonnect.courses;
CREATE POLICY courses_select ON educonnect.courses FOR SELECT
USING (educonnect.can_view_course(id));
DROP POLICY IF EXISTS courses_insert ON educonnect.courses;
CREATE POLICY courses_insert ON educonnect.courses FOR INSERT
WITH CHECK (
    educonnect.has_school_permission(school_id, 'lms.manage')
    OR (
        educonnect.has_school_permission(school_id, 'lms.author')
        AND owner_user_id = educonnect.current_user_id()
    )
);
DROP POLICY IF EXISTS courses_update ON educonnect.courses;
CREATE POLICY courses_update ON educonnect.courses FOR UPDATE
USING (
    educonnect.has_school_permission(school_id, 'lms.manage')
    OR (
        educonnect.has_school_permission(school_id, 'lms.author')
        AND owner_user_id = educonnect.current_user_id()
    )
)
WITH CHECK (
    educonnect.has_school_permission(school_id, 'lms.manage')
    OR (
        educonnect.has_school_permission(school_id, 'lms.author')
        AND owner_user_id = educonnect.current_user_id()
    )
);
DROP POLICY IF EXISTS courses_delete ON educonnect.courses;
CREATE POLICY courses_delete ON educonnect.courses FOR DELETE
USING (educonnect.can_edit_course(id));

DROP POLICY IF EXISTS sections_select ON educonnect.course_sections;
CREATE POLICY sections_select ON educonnect.course_sections FOR SELECT
USING (educonnect.can_view_section(id));
DROP POLICY IF EXISTS sections_write ON educonnect.course_sections;
CREATE POLICY sections_write ON educonnect.course_sections FOR ALL
USING (
    educonnect.has_school_permission(school_id, 'lms.manage')
    OR (
        educonnect.has_school_permission(school_id, 'lms.author')
        AND primary_teacher_user_id = educonnect.current_user_id()
    )
)
WITH CHECK (
    educonnect.has_school_permission(school_id, 'lms.manage')
    OR (
        educonnect.has_school_permission(school_id, 'lms.author')
        AND primary_teacher_user_id = educonnect.current_user_id()
    )
);

DROP POLICY IF EXISTS enrollments_select ON educonnect.section_enrollments;
CREATE POLICY enrollments_select ON educonnect.section_enrollments FOR SELECT
USING (
    user_id = educonnect.current_user_id()
    OR educonnect.is_guardian_of(school_id, user_id)
    OR educonnect.can_staff_section(section_id)
);
DROP POLICY IF EXISTS enrollments_write ON educonnect.section_enrollments;
CREATE POLICY enrollments_write ON educonnect.section_enrollments FOR ALL
USING (educonnect.can_staff_section(section_id))
WITH CHECK (educonnect.can_staff_section(section_id));

DROP POLICY IF EXISTS units_select ON educonnect.course_units;
CREATE POLICY units_select ON educonnect.course_units FOR SELECT
USING (educonnect.can_view_course(course_id));
DROP POLICY IF EXISTS units_write ON educonnect.course_units;
CREATE POLICY units_write ON educonnect.course_units FOR ALL
USING (educonnect.can_edit_course(course_id))
WITH CHECK (educonnect.can_edit_course(course_id));

DROP POLICY IF EXISTS lessons_select ON educonnect.lessons;
CREATE POLICY lessons_select ON educonnect.lessons FOR SELECT
USING (educonnect.can_view_lesson(id));
DROP POLICY IF EXISTS lessons_insert ON educonnect.lessons;
CREATE POLICY lessons_insert ON educonnect.lessons FOR INSERT
WITH CHECK (
    educonnect.can_edit_course(course_id)
    AND (
        author_user_id = educonnect.current_user_id()
        OR educonnect.has_school_permission(school_id, 'lms.manage')
    )
);
DROP POLICY IF EXISTS lessons_update ON educonnect.lessons;
CREATE POLICY lessons_update ON educonnect.lessons FOR UPDATE
USING (educonnect.can_edit_lesson(id))
WITH CHECK (
    educonnect.can_edit_course(course_id)
    AND (
        author_user_id = educonnect.current_user_id()
        OR educonnect.has_school_permission(school_id, 'lms.manage')
    )
);
DROP POLICY IF EXISTS lessons_delete ON educonnect.lessons;
CREATE POLICY lessons_delete ON educonnect.lessons FOR DELETE
USING (educonnect.can_edit_lesson(id));

DROP POLICY IF EXISTS lesson_blocks_select ON educonnect.lesson_blocks;
CREATE POLICY lesson_blocks_select ON educonnect.lesson_blocks FOR SELECT
USING (educonnect.can_view_lesson(lesson_id));
DROP POLICY IF EXISTS lesson_blocks_write ON educonnect.lesson_blocks;
CREATE POLICY lesson_blocks_write ON educonnect.lesson_blocks FOR ALL
USING (educonnect.can_edit_lesson(lesson_id))
WITH CHECK (educonnect.can_edit_lesson(lesson_id));

DROP POLICY IF EXISTS questions_select ON educonnect.questions;
CREATE POLICY questions_select ON educonnect.questions FOR SELECT
USING (educonnect.can_view_question(id));
DROP POLICY IF EXISTS questions_insert ON educonnect.questions;
CREATE POLICY questions_insert ON educonnect.questions FOR INSERT
WITH CHECK (
    educonnect.has_school_permission(school_id, 'lms.manage')
    OR (
        educonnect.has_school_permission(school_id, 'lms.author')
        AND author_user_id = educonnect.current_user_id()
    )
);
DROP POLICY IF EXISTS questions_update ON educonnect.questions;
CREATE POLICY questions_update ON educonnect.questions FOR UPDATE
USING (educonnect.can_edit_question(id))
WITH CHECK (
    educonnect.has_school_permission(school_id, 'lms.manage')
    OR (
        educonnect.has_school_permission(school_id, 'lms.author')
        AND author_user_id = educonnect.current_user_id()
    )
);
DROP POLICY IF EXISTS questions_delete ON educonnect.questions;
CREATE POLICY questions_delete ON educonnect.questions FOR DELETE
USING (educonnect.can_edit_question(id));

DROP POLICY IF EXISTS question_options_select ON educonnect.question_options;
CREATE POLICY question_options_select ON educonnect.question_options FOR SELECT
USING (educonnect.can_view_question(question_id));
DROP POLICY IF EXISTS question_options_write ON educonnect.question_options;
CREATE POLICY question_options_write ON educonnect.question_options FOR ALL
USING (educonnect.can_edit_question(question_id))
WITH CHECK (educonnect.can_edit_question(question_id));

DROP POLICY IF EXISTS answer_keys_select ON educonnect.question_answer_keys;
CREATE POLICY answer_keys_select ON educonnect.question_answer_keys FOR SELECT
USING (educonnect.can_grade_question(question_id));
DROP POLICY IF EXISTS answer_keys_write ON educonnect.question_answer_keys;
CREATE POLICY answer_keys_write ON educonnect.question_answer_keys FOR ALL
USING (
    educonnect.can_edit_question(question_id)
    AND educonnect.has_school_permission(school_id, 'lms.grade')
)
WITH CHECK (
    educonnect.can_edit_question(question_id)
    AND educonnect.has_school_permission(school_id, 'lms.grade')
);

DROP POLICY IF EXISTS quizzes_select ON educonnect.quizzes;
CREATE POLICY quizzes_select ON educonnect.quizzes FOR SELECT
USING (educonnect.can_view_quiz(id));
DROP POLICY IF EXISTS quizzes_insert ON educonnect.quizzes;
CREATE POLICY quizzes_insert ON educonnect.quizzes FOR INSERT
WITH CHECK (
    educonnect.has_school_permission(school_id, 'lms.manage')
    OR (
        educonnect.has_school_permission(school_id, 'lms.author')
        AND author_user_id = educonnect.current_user_id()
    )
);
DROP POLICY IF EXISTS quizzes_update ON educonnect.quizzes;
CREATE POLICY quizzes_update ON educonnect.quizzes FOR UPDATE
USING (educonnect.can_edit_quiz(id))
WITH CHECK (
    educonnect.has_school_permission(school_id, 'lms.manage')
    OR (
        educonnect.has_school_permission(school_id, 'lms.author')
        AND author_user_id = educonnect.current_user_id()
    )
);
DROP POLICY IF EXISTS quizzes_delete ON educonnect.quizzes;
CREATE POLICY quizzes_delete ON educonnect.quizzes FOR DELETE
USING (educonnect.can_edit_quiz(id));

DROP POLICY IF EXISTS quiz_questions_select ON educonnect.quiz_questions;
CREATE POLICY quiz_questions_select ON educonnect.quiz_questions FOR SELECT
USING (educonnect.can_view_quiz(quiz_id));
DROP POLICY IF EXISTS quiz_questions_write ON educonnect.quiz_questions;
CREATE POLICY quiz_questions_write ON educonnect.quiz_questions FOR ALL
USING (educonnect.can_edit_quiz(quiz_id))
WITH CHECK (educonnect.can_edit_quiz(quiz_id));

DROP POLICY IF EXISTS assignments_select ON educonnect.assignments;
CREATE POLICY assignments_select ON educonnect.assignments FOR SELECT
USING (educonnect.can_view_assignment(id));
DROP POLICY IF EXISTS assignments_write ON educonnect.assignments;
CREATE POLICY assignments_write ON educonnect.assignments FOR ALL
USING (educonnect.can_staff_section(section_id))
WITH CHECK (educonnect.can_staff_section(section_id));

DROP POLICY IF EXISTS assignment_overrides_select ON educonnect.assignment_overrides;
CREATE POLICY assignment_overrides_select ON educonnect.assignment_overrides FOR SELECT
USING (
    user_id = educonnect.current_user_id()
    OR educonnect.is_guardian_of(school_id, user_id)
    OR educonnect.can_staff_assignment(assignment_id)
);
DROP POLICY IF EXISTS assignment_overrides_write ON educonnect.assignment_overrides;
CREATE POLICY assignment_overrides_write ON educonnect.assignment_overrides FOR ALL
USING (educonnect.can_staff_assignment(assignment_id))
WITH CHECK (educonnect.can_staff_assignment(assignment_id));

DROP POLICY IF EXISTS submissions_select ON educonnect.submissions;
CREATE POLICY submissions_select ON educonnect.submissions FOR SELECT
USING (educonnect.can_view_submission(id));
DROP POLICY IF EXISTS submissions_insert ON educonnect.submissions;
CREATE POLICY submissions_insert ON educonnect.submissions FOR INSERT
WITH CHECK (
    educonnect.can_staff_assignment(assignment_id)
    OR (
        student_user_id = educonnect.current_user_id()
        AND educonnect.can_submit_assignment(assignment_id)
    )
);
DROP POLICY IF EXISTS submissions_update ON educonnect.submissions;
CREATE POLICY submissions_update ON educonnect.submissions FOR UPDATE
USING (
    educonnect.can_staff_assignment(assignment_id)
    OR (
        student_user_id = educonnect.current_user_id()
        AND status IN ('draft', 'returned')
    )
)
WITH CHECK (
    educonnect.can_staff_assignment(assignment_id)
    OR (
        student_user_id = educonnect.current_user_id()
        AND educonnect.can_submit_assignment(assignment_id)
        AND status IN ('draft', 'submitted', 'late')
    )
);
DROP POLICY IF EXISTS submissions_delete ON educonnect.submissions;
CREATE POLICY submissions_delete ON educonnect.submissions FOR DELETE
USING (
    educonnect.can_staff_assignment(assignment_id)
    OR (student_user_id = educonnect.current_user_id() AND status = 'draft')
);

DROP POLICY IF EXISTS submission_media_select ON educonnect.submission_media;
CREATE POLICY submission_media_select ON educonnect.submission_media FOR SELECT
USING (educonnect.can_view_submission(submission_id));
DROP POLICY IF EXISTS submission_media_write ON educonnect.submission_media;
CREATE POLICY submission_media_write ON educonnect.submission_media FOR ALL
USING (
    educonnect.can_staff_assignment((
        SELECT submission.assignment_id
        FROM educonnect.submissions AS submission
        WHERE submission.id = submission_id
    ))
    OR EXISTS (
        SELECT 1
        FROM educonnect.submissions AS submission
        WHERE submission.id = submission_id
          AND submission.student_user_id = educonnect.current_user_id()
          AND submission.status = 'draft'
    )
)
WITH CHECK (
    educonnect.can_staff_assignment((
        SELECT submission.assignment_id
        FROM educonnect.submissions AS submission
        WHERE submission.id = submission_id
    ))
    OR EXISTS (
        SELECT 1
        FROM educonnect.submissions AS submission
        WHERE submission.id = submission_id
          AND submission.student_user_id = educonnect.current_user_id()
          AND submission.status = 'draft'
    )
);

DROP POLICY IF EXISTS gradebook_select ON educonnect.gradebook_entries;
CREATE POLICY gradebook_select ON educonnect.gradebook_entries FOR SELECT
USING (
    student_user_id = educonnect.current_user_id()
    OR educonnect.is_guardian_of(school_id, student_user_id)
    OR educonnect.can_staff_assignment(assignment_id)
);
DROP POLICY IF EXISTS gradebook_write ON educonnect.gradebook_entries;
CREATE POLICY gradebook_write ON educonnect.gradebook_entries FOR ALL
USING (educonnect.can_staff_assignment(assignment_id))
WITH CHECK (educonnect.can_staff_assignment(assignment_id));

DROP POLICY IF EXISTS lesson_progress_select ON educonnect.lesson_progress;
CREATE POLICY lesson_progress_select ON educonnect.lesson_progress FOR SELECT
USING (
    user_id = educonnect.current_user_id()
    OR educonnect.is_guardian_of(school_id, user_id)
    OR educonnect.has_school_permission(school_id, 'lms.grade')
);
DROP POLICY IF EXISTS lesson_progress_insert ON educonnect.lesson_progress;
CREATE POLICY lesson_progress_insert ON educonnect.lesson_progress FOR INSERT
WITH CHECK (
    user_id = educonnect.current_user_id()
    AND educonnect.can_view_lesson(lesson_id)
);
DROP POLICY IF EXISTS lesson_progress_update ON educonnect.lesson_progress;
CREATE POLICY lesson_progress_update ON educonnect.lesson_progress FOR UPDATE
USING (
    user_id = educonnect.current_user_id()
    OR educonnect.has_school_permission(school_id, 'lms.grade')
)
WITH CHECK (
    user_id = educonnect.current_user_id()
    OR educonnect.has_school_permission(school_id, 'lms.grade')
);

DROP POLICY IF EXISTS certificates_select ON educonnect.certificates;
CREATE POLICY certificates_select ON educonnect.certificates FOR SELECT
USING (
    user_id = educonnect.current_user_id()
    OR educonnect.is_guardian_of(school_id, user_id)
    OR educonnect.has_school_permission(school_id, 'lms.grade')
);
DROP POLICY IF EXISTS certificates_write ON educonnect.certificates;
CREATE POLICY certificates_write ON educonnect.certificates FOR ALL
USING (educonnect.has_school_permission(school_id, 'lms.grade'))
WITH CHECK (educonnect.has_school_permission(school_id, 'lms.grade'));

-- Confidential interventions -------------------------------------------------

DO $$
DECLARE
    table_name text;
BEGIN
    FOREACH table_name IN ARRAY ARRAY[
        'intervention_plans', 'intervention_team_members', 'intervention_goals',
        'intervention_services', 'intervention_progress_notes'
    ]
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS intervention_read ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY intervention_read ON educonnect.%I FOR SELECT '
            'USING (educonnect.has_school_permission(school_id, ''interventions.view'') '
            'OR educonnect.has_school_permission(school_id, ''interventions.manage''))',
            table_name
        );
        EXECUTE format('DROP POLICY IF EXISTS intervention_write ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY intervention_write ON educonnect.%I FOR ALL '
            'USING (educonnect.has_school_permission(school_id, ''interventions.manage'')) '
            'WITH CHECK (educonnect.has_school_permission(school_id, ''interventions.manage''))',
            table_name
        );
    END LOOP;
END;
$$;

-- Integrations ---------------------------------------------------------------

DO $$
DECLARE
    table_name text;
BEGIN
    FOREACH table_name IN ARRAY ARRAY[
        'integration_connections', 'integration_sync_runs',
        'integration_sync_errors', 'external_id_mappings'
    ]
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS integrations_read ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY integrations_read ON educonnect.%I FOR SELECT '
            'USING (educonnect.has_school_permission(school_id, ''integrations.view'') '
            'OR educonnect.has_school_permission(school_id, ''integrations.manage''))',
            table_name
        );
        EXECUTE format('DROP POLICY IF EXISTS integrations_write ON educonnect.%I', table_name);
        EXECUTE format(
            'CREATE POLICY integrations_write ON educonnect.%I FOR ALL '
            'USING (educonnect.has_school_permission(school_id, ''integrations.manage'')) '
            'WITH CHECK (educonnect.has_school_permission(school_id, ''integrations.manage''))',
            table_name
        );
    END LOOP;
END;
$$;

-- Jobs, backups, audit, and analytics ----------------------------------------

DROP POLICY IF EXISTS jobs_read ON educonnect.background_jobs;
CREATE POLICY jobs_read ON educonnect.background_jobs FOR SELECT
USING (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND (
        educonnect.has_school_permission(school_id, 'jobs.view')
        OR educonnect.has_school_permission(school_id, 'jobs.manage')
    ))
);
DROP POLICY IF EXISTS jobs_write ON educonnect.background_jobs;
CREATE POLICY jobs_write ON educonnect.background_jobs FOR ALL
USING (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND educonnect.has_school_permission(school_id, 'jobs.manage'))
)
WITH CHECK (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND educonnect.has_school_permission(school_id, 'jobs.manage'))
);

DROP POLICY IF EXISTS job_attempts_read ON educonnect.job_attempts;
CREATE POLICY job_attempts_read ON educonnect.job_attempts FOR SELECT
USING (EXISTS (
    SELECT 1
    FROM educonnect.background_jobs AS job
    WHERE job.id = job_id
      AND (
          (job.school_id IS NULL AND educonnect.is_global_admin())
          OR (job.school_id IS NOT NULL AND (
              educonnect.has_school_permission(job.school_id, 'jobs.view')
              OR educonnect.has_school_permission(job.school_id, 'jobs.manage')
          ))
      )
));
DROP POLICY IF EXISTS job_attempts_write ON educonnect.job_attempts;
CREATE POLICY job_attempts_write ON educonnect.job_attempts FOR ALL
USING (EXISTS (
    SELECT 1
    FROM educonnect.background_jobs AS job
    WHERE job.id = job_id
      AND (
          (job.school_id IS NULL AND educonnect.is_global_admin())
          OR (job.school_id IS NOT NULL AND educonnect.has_school_permission(job.school_id, 'jobs.manage'))
      )
))
WITH CHECK (EXISTS (
    SELECT 1
    FROM educonnect.background_jobs AS job
    WHERE job.id = job_id
      AND (
          (job.school_id IS NULL AND educonnect.is_global_admin())
          OR (job.school_id IS NOT NULL AND educonnect.has_school_permission(job.school_id, 'jobs.manage'))
      )
));

DROP POLICY IF EXISTS backups_read ON educonnect.backup_runs;
CREATE POLICY backups_read ON educonnect.backup_runs FOR SELECT
USING (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND (
        educonnect.has_school_permission(school_id, 'backups.view')
        OR educonnect.has_school_permission(school_id, 'backups.manage')
    ))
);
DROP POLICY IF EXISTS backups_write ON educonnect.backup_runs;
CREATE POLICY backups_write ON educonnect.backup_runs FOR ALL
USING (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND educonnect.has_school_permission(school_id, 'backups.manage'))
)
WITH CHECK (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND educonnect.has_school_permission(school_id, 'backups.manage'))
);

DROP POLICY IF EXISTS restore_drills_read ON educonnect.restore_drills;
CREATE POLICY restore_drills_read ON educonnect.restore_drills FOR SELECT
USING (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND (
        educonnect.has_school_permission(school_id, 'backups.view')
        OR educonnect.has_school_permission(school_id, 'backups.manage')
    ))
);
DROP POLICY IF EXISTS restore_drills_write ON educonnect.restore_drills;
CREATE POLICY restore_drills_write ON educonnect.restore_drills FOR ALL
USING (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND educonnect.has_school_permission(school_id, 'backups.manage'))
)
WITH CHECK (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND educonnect.has_school_permission(school_id, 'backups.manage'))
);

DROP POLICY IF EXISTS audit_events_select ON educonnect.audit_events;
CREATE POLICY audit_events_select ON educonnect.audit_events FOR SELECT
USING (
    educonnect.is_global_admin()
    OR (school_id IS NOT NULL AND educonnect.has_school_permission(school_id, 'audit.view'))
    OR (
        school_id IS NULL
        AND district_id IS NOT NULL
        AND educonnect.has_scope_permission(state_id, district_id, NULL, 'audit.view')
    )
    OR (
        school_id IS NULL
        AND district_id IS NULL
        AND state_id IS NOT NULL
        AND educonnect.has_scope_permission(state_id, NULL, NULL, 'audit.view')
    )
);
DROP POLICY IF EXISTS audit_events_insert ON educonnect.audit_events;
CREATE POLICY audit_events_insert ON educonnect.audit_events FOR INSERT
WITH CHECK (
    actor_user_id = educonnect.current_user_id()
    AND (
        (school_id IS NOT NULL AND educonnect.can_access_school(school_id))
        OR (
            school_id IS NULL
            AND district_id IS NOT NULL
            AND educonnect.can_access_scope(state_id, district_id, NULL)
        )
        OR (
            school_id IS NULL
            AND district_id IS NULL
            AND state_id IS NOT NULL
            AND educonnect.can_access_scope(state_id, NULL, NULL)
        )
        OR (state_id IS NULL AND educonnect.is_global_admin())
    )
);

DROP POLICY IF EXISTS outbox_read ON educonnect.outbox_events;
CREATE POLICY outbox_read ON educonnect.outbox_events FOR SELECT
USING (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND (
        educonnect.has_school_permission(school_id, 'jobs.view')
        OR educonnect.has_school_permission(school_id, 'jobs.manage')
    ))
);
DROP POLICY IF EXISTS outbox_insert ON educonnect.outbox_events;
CREATE POLICY outbox_insert ON educonnect.outbox_events FOR INSERT
WITH CHECK (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND educonnect.can_access_school(school_id))
);
DROP POLICY IF EXISTS outbox_update ON educonnect.outbox_events;
CREATE POLICY outbox_update ON educonnect.outbox_events FOR UPDATE
USING (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND educonnect.has_school_permission(school_id, 'jobs.manage'))
)
WITH CHECK (
    (school_id IS NULL AND educonnect.is_global_admin())
    OR (school_id IS NOT NULL AND educonnect.has_school_permission(school_id, 'jobs.manage'))
);

DROP POLICY IF EXISTS analytics_select ON educonnect.analytics_aggregates;
CREATE POLICY analytics_select ON educonnect.analytics_aggregates FOR SELECT
USING (educonnect.has_school_permission(school_id, 'analytics.view'));
DROP POLICY IF EXISTS analytics_write ON educonnect.analytics_aggregates;
CREATE POLICY analytics_write ON educonnect.analytics_aggregates FOR ALL
USING (
    educonnect.is_global_admin()
    OR educonnect.has_school_permission(school_id, 'jobs.manage')
)
WITH CHECK (
    educonnect.is_global_admin()
    OR educonnect.has_school_permission(school_id, 'jobs.manage')
);

DROP POLICY IF EXISTS legacy_imports_global ON educonnect.legacy_snapshot_imports;
CREATE POLICY legacy_imports_global ON educonnect.legacy_snapshot_imports FOR ALL
USING (educonnect.is_global_admin())
WITH CHECK (educonnect.is_global_admin());

INSERT INTO educonnect.schema_migrations (version, description)
VALUES ('003', 'Fail-closed tenant and record-level row security')
ON CONFLICT (version) DO UPDATE
SET description = EXCLUDED.description;

COMMIT;
