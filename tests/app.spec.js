import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
});

async function loginAs(page, profileId = "state-admin", workspace = "") {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Learning, families, and schools—connected." })).toBeVisible();
  await page.getByLabel("School email or username").fill(profileId);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByLabel("Sign out")).toBeVisible();
  if (workspace) await page.getByRole("link", { name: new RegExp(workspace, "i") }).first().click();
}

test("navigates roles, searches, opens settings, and resets demo state", async ({ page }) => {
  await loginAs(page);
  await expect(page.getByRole("heading", { name: "Tenant Governance" })).toBeVisible();

  await page.getByPlaceholder("Search resources...").fill("fractions");
  await expect(page.getByText('Results for "fractions"')).toBeVisible();
  await page.getByRole("button", { name: /Fractions Mastery Check/i }).click();
  await expect(page.getByRole("heading", { name: "LMS Dashboard" })).toBeVisible();

  await page.getByLabel("Settings").click();
  await expect(page.getByRole("heading", { name: "Settings" })).toBeVisible();
  await page.getByLabel("Compact dashboard density").check();
  await expect(page.locator(".app")).toHaveClass(/compact-mode/);
  await page.getByLabel("Close settings").click();

  await page.getByRole("button", { name: /Reset Demo/i }).click();
  await expect(page.getByRole("heading", { name: "Tenant Governance" })).toBeVisible();
});

test("runs LMS, teacher, messaging, and community demo flows", async ({ page }) => {
  await loginAs(page, "school-admin", "LMS");
  await page.getByRole("button", { name: /Build Offline Pack/i }).click();
  await expect(page.getByText("Offline pack built and sync queue prepared.")).toBeVisible();
  await expect(page.getByText("Offline pack ready")).toBeVisible();

  await page.getByRole("link", { name: /Teacher/i }).first().click();
  const quickAssignment = page.locator(".assignment-composer-panel");
  await quickAssignment.getByLabel("Title").fill("Reading Quick Check");
  await quickAssignment.getByRole("button", { name: /Add Assignment/i }).click();
  await expect(page.getByText(/Reading Quick Check added/i)).toBeVisible();
  await expect(page.getByText(/Reading Quick Check/i).first()).toBeVisible();

  await page.getByRole("link", { name: /Messages/i }).first().click();
  await page.getByPlaceholder(/Message/i).fill("Demo message from test");
  await page.getByRole("button", { name: "Send", exact: true }).click();
  await expect(page.locator(".chat-stream").getByText("Demo message from test")).toBeVisible();

  await page.getByRole("link", { name: /Community/i }).first().click();
  await page.getByLabel("Title").fill("Test community update");
  await page.getByRole("textbox", { name: "Message" }).fill("Families can review this test update.");
  await page.getByRole("button", { name: /Submit for Admin Approval/i }).click();
  await expect(page.getByText("Test community update")).toBeVisible();
  await page.getByRole("button", { name: /Approve/i }).first().click();
  await expect(page.getByText("Approved just now")).toBeVisible();
});

test("supports the mobile bottom navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await loginAs(page, "student");
  await expect(page.locator(".mobile-role-nav").getByRole("link")).toHaveCount(1);
  await expect(page.getByRole("heading", { name: /Welcome back/i })).toBeVisible();
  await page.getByRole("button", { name: /Continue Adventure/i }).click();
  await expect(page.getByText(/marked complete/i)).toBeVisible();
});

test("switches demo identities and enforces role permissions", async ({ page }) => {
  await loginAs(page, "parent");
  await expect(page.getByText("Signed in as Demo Guardian.")).toBeVisible();
  await expect(page.getByRole("link", { name: /State Admin/i })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Teacher/i })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Parent/i }).first()).toBeVisible();

  await page.getByRole("link", { name: /Messages/i }).first().click();
  await expect(page.getByRole("button", { name: /Enable/i })).toBeDisabled();

  await page.getByLabel("Sign out").click();
  await page.getByLabel("School email or username").fill("district-admin");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("link", { name: /State Admin/i })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /District Admin/i }).first()).toBeVisible();
  await page.getByRole("link", { name: /Messages/i }).first().click();
  await expect(page.getByRole("button", { name: /Enable/i })).toBeEnabled();
});

test("uses a public landing page before opening a role workspace", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Open your portal/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Everyone has a place to learn and connect." })).toBeVisible();
  await expect(page.locator(".workspace")).toHaveCount(0);
  await expect(page.locator("#landing-profile")).toHaveCount(0);
  await page.getByLabel("School email or username").fill("parent");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Parent Dashboard" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Student/i })).toHaveCount(0);
});

test("gives the global test administrator every workspace", async ({ page }) => {
  await loginAs(page, "global-admin");
  await expect(page.locator(".role-nav").getByRole("link")).toHaveCount(9);
  await expect(page.getByRole("heading", { name: "Role Control Center" })).toBeVisible();
  await expect(page.locator(".role-control-launcher").getByRole("button")).toHaveCount(9);
  await page.getByRole("link", { name: /Parent/i }).first().click();
  await expect(page.getByRole("heading", { name: "Parent Dashboard" })).toBeVisible();
  await page.getByRole("link", { name: /Student/i }).first().click();
  await expect(page.getByRole("heading", { name: "Student Dashboard" })).toBeVisible();
});

test("manages permissions, roster, gradebook, and audit trail", async ({ page }) => {
  await loginAs(page);
  await expect(page.getByRole("heading", { name: "Role Control Center" })).toBeVisible();
  await page.locator('[data-profile-permission="teacher:submit-post"]').click();
  await expect(page.getByText("permissions updated")).toBeVisible();

  await page.getByRole("link", { name: /Teacher/i }).first().click();
  await page.getByLabel("Filter roster").selectOption("Watch");
  const rosterPanel = page.locator(".roster-panel");
  await expect(rosterPanel.getByText("Demo Learner 3")).toBeVisible();
  await expect(rosterPanel.getByText("Demo Learner 1")).not.toBeVisible();

  await page.getByRole("link", { name: /LMS/i }).first().click();
  await page.getByRole("button", { name: /Demo Learner 2/i }).click();
  await page.getByRole("textbox", { name: "Teacher comment" }).fill("Updated rubric feedback.");
  await page.getByRole("button", { name: /Save Comment/i }).click();
  await expect(page.getByText("Gradebook comment saved.")).toBeVisible();

  await page.getByRole("link", { name: /State Admin/i }).first().click();
  await expect(page.getByText("Saved gradebook comment for Demo Learner 2")).toBeVisible();
});

test("keeps role controls in one centralized workspace", async ({ page }) => {
  await loginAs(page, "global-admin");
  await expect(page.locator("#role-control-center")).toHaveCount(1);
  await page.getByRole("link", { name: /District Admin/i }).first().click();
  await expect(page.locator("#role-control-center")).toHaveCount(0);
  await page.getByRole("button", { name: /Role controls/i }).click();
  await expect(page.locator("#role-control-center")).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "Role Control Center" })).toBeVisible();
});

test("customizes school identity, instance, logo, and colors from School Admin", async ({ page }) => {
  await loginAs(page, "school-admin");
  await expect(page.getByRole("heading", { name: "School Customization" })).toBeVisible();

  await page.getByLabel("School name").fill("P.S. 118 Discovery Lab");
  await page.getByLabel("Instance slug").fill("ps118lab");
  await page.getByLabel("Logo mark").fill("DL");
  await page.getByLabel("Crest / logo name").fill("Discovery Lab Owls");
  await page.getByLabel("School voice").fill("Curious learners building a brighter future");
  await page.getByLabel("Custom domain").fill("learn.discoverylab.org");
  await page.getByLabel("Login welcome message").fill("Welcome, Discovery Lab learners!");
  await page.getByLabel("Storage quota (GB)").fill("75");
  await page.getByLabel("Community").uncheck();
  await page.getByLabel("Primary buttons").fill("#3157c8");
  await page.getByRole("button", { name: /Save school customization/i }).click();

  await expect(page.getByText("P.S. 118 Discovery Lab customization saved.")).toBeVisible();
  await expect(page.locator(".tenant-bar").getByText("P.S. 118 Discovery Lab", { exact: true }).first()).toBeVisible();
  await expect(page.locator(".tenant-bar").getByText("ps118lab.educonnect.local")).toBeVisible();
  await expect(page.locator(".school-brand-preview").getByText("learn.discoverylab.org")).toBeVisible();
  await expect(page.locator(".brand-mark")).toHaveText("DL");

  await page.getByRole("link", { name: /LMS/i }).first().click();
  await page.getByRole("button", { name: /School design/i }).click();
  await expect(page.getByRole("heading", { name: "School Customization" })).toBeVisible();
  await expect(page.getByLabel("School name")).toHaveValue("P.S. 118 Discovery Lab");
});

test("creates, publishes, previews, and completes a multimedia quiz lesson", async ({ page }) => {
  await loginAs(page, "teacher");
  await page.getByRole("button", { name: "Create lesson" }).first().click();
  await expect(page.getByRole("heading", { name: "Create a lesson" })).toBeVisible();

  await page.getByLabel("Lesson title").fill("Persuasive Media Lab");
  await page.getByLabel("Learning objective and summary").fill("Analyze a message, identify supporting evidence, and demonstrate understanding.");
  await page.getByLabel("Section title").fill("Start with a claim");
  await page.getByLabel("Lesson content").fill("A strong claim is clear, focused, and supported by relevant evidence.");

  await page.getByRole("button", { name: /Media/i }).click();
  await page.getByLabel("Media title").fill("Persuasion example");
  await page.getByLabel("Media URL").fill("https://example.com/persuasion-video");
  await page.getByLabel("Caption or instructions").fill("Open the example and identify the main claim.");
  await page.locator("[data-lesson-media-upload]").setInputFiles({ name: "persuasion-guide.pdf", mimeType: "application/pdf", buffer: Buffer.from("teacher media guide") });
  await expect(page.getByText("persuasion-guide.pdf attached to the lesson.")).toBeVisible();

  await page.getByRole("button", { name: /Quiz/i }).click();
  await page.getByLabel("Quiz title").fill("Claim check");
  await page.getByLabel("Question", { exact: true }).fill("Which statement best describes a strong claim?");
  await page.getByLabel("Answer option 1").fill("It includes every possible detail.");
  await page.getByLabel("Answer option 2").fill("It is clear and supported by evidence.");
  await page.locator('[data-correct-answer]').nth(1).check();
  await page.getByLabel("Answer feedback").fill("A strong claim is focused and supported by relevant evidence.");
  await page.getByRole("button", { name: /Publish lesson/i }).click();
  await expect(page.getByText("Persuasive Media Lab published to students.")).toBeVisible();

  await page.getByRole("link", { name: /LMS/i }).first().click();
  const lessonCard = page.locator(".lesson-card").filter({ hasText: "Persuasive Media Lab" });
  await expect(lessonCard.getByText("Published")).toBeVisible();
  await lessonCard.getByRole("button", { name: /Preview/i }).click();
  await expect(page.locator(".lesson-preview-panel").getByRole("heading", { name: "Persuasive Media Lab" })).toBeVisible();

  await page.getByLabel("Sign out").click();
  await page.getByLabel("School email or username").fill("student");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.getByRole("button", { name: /Persuasive Media Lab/i }).click();
  const lessonView = page.locator(".student-lesson-view");
  await lessonView.getByText("It is clear and supported by evidence.").click();
  await lessonView.getByRole("button", { name: /Complete lesson/i }).click();
  await expect(page.getByText("Persuasive Media Lab completed with a 100% quiz score.")).toBeVisible();
  await expect(lessonView.getByText("Latest score")).toBeVisible();
});

test("validates imported demo state JSON", async ({ page }) => {
  await loginAs(page);
  await page.getByLabel("Settings").click();
  const chooserPromise = page.waitForEvent("filechooser");
  await page.getByText("Import JSON File").click();
  const chooser = await chooserPromise;
  await chooser.setFiles({
    name: "bad-state.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify({ hello: "world" })),
  });
  await expect(page.getByText(/Import failed: Missing state object/i)).toBeVisible();

  const legacySnapshot = await page.evaluate(() => JSON.parse(localStorage.getItem("educonnect-demo-state-v1")));
  legacySnapshot.productionReadiness = { tenantIsolation: { status: "Enforced" } };
  const legacyChooserPromise = page.waitForEvent("filechooser");
  await page.getByText("Import JSON File").click();
  const legacyChooser = await legacyChooserPromise;
  await legacyChooser.setFiles({ name: "legacy-state.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(legacySnapshot)) });
  await expect(page.getByRole("heading", { name: "Platform Operations Center" })).toBeVisible();
  await expect(page.getByText("All systems operational")).toBeVisible();
});

test("runs realtime app workflows with editable filler data", async ({ page }) => {
  await loginAs(page);
  await page.locator(".realtime-panel").getByRole("button", { name: /Simulate Update/i }).click();
  await expect(page.getByText("Live app data updated.")).toBeVisible();
  await expect(page.locator(".realtime-panel").getByText(/synced|updated|message/i).first()).toBeVisible();

  await page.getByRole("link", { name: /Teacher/i }).first().click();
  const assignmentForm = page.locator("#assignment-form");
  await assignmentForm.getByPlaceholder("Example: Reading Checkpoint").fill("Realtime Reading Draft");
  await assignmentForm.locator("#assignment-class").selectOption("Creative Writing");
  await assignmentForm.getByRole("button", { name: /Add Assignment/i }).click();
  await expect(page.getByText("Realtime Reading Draft added to Creative Writing.")).toBeVisible();

  const rosterRow = page.locator(".editable-roster-row").filter({ hasText: "Demo Learner 2" });
  await rosterRow.locator("[data-roster-status]").selectOption("Watch");
  await expect(page.getByText("Demo Learner 2's roster record updated.")).toBeVisible();

  await page.getByRole("link", { name: /LMS/i }).first().click();
  await expect(page.locator(".assignment-list").getByText("Realtime Reading Draft")).toBeVisible();

  await page.getByLabel("Notifications").click();
  await page.getByRole("button", { name: /Mark all read/i }).click();
  await expect(page.getByText("All notifications marked read.")).toBeVisible();

  await page.getByRole("link", { name: /Messages/i }).first().click();
  await page.getByLabel("Start video call").click();
  await expect(page.getByText(/Live call with/i)).toBeVisible();
  await page.getByRole("button", { name: "End call" }).click();
  await expect(page.getByText("Video call ended.")).toBeVisible();
});

test("keeps workspace-style services passive in the LMS background", async ({ page }) => {
  await loginAs(page, "teacher", "LMS");
  const services = page.locator(".background-services");
  await expect(services.getByRole("heading", { name: "Background Services" })).toBeVisible();
  await expect(services.getByText("Runs quietly behind LMS work")).toBeVisible();
  await expect(services.getByText("Workspace sync")).toBeVisible();
  await expect(services.getByText("File handling")).toBeVisible();
  await expect(services.getByText("Notification routing")).toBeVisible();
  await expect(services.getByText("Calendar bridge")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Workspace Integration" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "File Handling" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Organized Notifications" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Offline Sync Queue" })).toHaveCount(0);
});

test("integrates every workspace into the platform operating system", async ({ page }) => {
  await loginAs(page);
  await expect(page.getByRole("heading", { name: "Unified School Operating System" })).toBeVisible();
  const hub = page.locator(".unified-os-panel");
  const modules = hub.locator(".unified-os-grid");
  await expect(modules.getByRole("button", { name: /LMS/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Students/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Teachers/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Parents/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Messages/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Community/i })).toBeVisible();
  await expect(hub.getByText("Students + LMS")).toBeVisible();
  await expect(hub.getByText("Teachers + Classes")).toBeVisible();
  await expect(hub.getByText("Parents + Messages")).toBeVisible();
  await expect(hub.getByText("Admin + Community")).toBeVisible();

  await modules.getByRole("button", { name: /Messages/i }).click();
  await expect(page.getByRole("heading", { name: "Communication Hub" })).toBeVisible();
});

test("runs production launch controls with backend-ready filler data", async ({ page }) => {
  await loginAs(page);
  const launch = page.locator(".production-panel");
  await expect(launch.getByRole("heading", { name: "Launch Control" })).toBeVisible();

  await launch.locator("#backend-provider").selectOption("Firebase");
  await expect(page.getByText("Firebase selected as backend provider.")).toBeVisible();

  await launch.getByRole("button", { name: /Backend Ready/i }).click();
  await expect(page.getByText("Backend-ready mode enabled.")).toBeVisible();

  await launch.getByRole("button", { name: /Provision mock schema/i }).click();
  await expect(page.getByText("Database blueprint marked ready.")).toBeVisible();

  await launch.getByPlaceholder("Invite user name").fill("Launch Teacher");
  await launch.locator("#onboarding-user-role").selectOption("Teacher");
  await launch.getByRole("button", { name: /Invite/i }).click();
  await expect(page.getByText("Launch Teacher invited as Teacher.")).toBeVisible();

  await launch.getByRole("button", { name: /Send test batch/i }).click();
  await expect(page.getByText("Notification delivery test completed.")).toBeVisible();

  await expect(launch.getByText("File Uploads")).toBeVisible();
  await expect(launch.getByText("Privacy & Security")).toBeVisible();
  await expect(launch.getByText("Deployment Pipeline")).toBeVisible();
});

test("lets global administrators preview a role and safely return", async ({ page }) => {
  await loginAs(page, "global-admin");
  const teacherCard = page.locator(".user-role-card").filter({ hasText: "Demo Teacher" });
  await teacherCard.getByRole("button", { name: /Preview as this user/i }).click();
  await expect(page.getByText(/Previewing as/)).toBeVisible();
  await expect(page.getByRole("heading", { name: "Teacher Dashboard" })).toBeVisible();
  await expect(page.getByRole("link", { name: /State Admin/i })).toHaveCount(0);
  await page.getByRole("button", { name: /Return to Global Admin/i }).click();
  await expect(page.getByRole("heading", { name: "Tenant Governance" })).toBeVisible();
  await expect(page.getByText("Returned to Global Admin.")).toBeVisible();
});

test("supports student assignment submission and teacher feedback", async ({ page }) => {
  await loginAs(page, "student");
  const assignment = page.locator(".student-assignment-work").first();
  await assignment.getByLabel("Written response").fill("My evidence-based response for teacher review.");
  await assignment.getByRole("button", { name: /Submit assignment/i }).click();
  await expect(page.getByText(/submitted\./i)).toBeVisible();

  await page.getByLabel("Sign out").click();
  await page.getByLabel("School email or username").fill("teacher");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  const gradingRow = page.locator("[data-return-submission]").filter({ hasText: "My evidence-based response" });
  await gradingRow.getByLabel("Score").fill("92");
  await gradingRow.getByLabel("Feedback").fill("Strong evidence. Add one more source next time.");
  await gradingRow.getByRole("button", { name: /Return/i }).click();
  await expect(page.getByText(/returned to/i)).toBeVisible();
});

test("applies accessibility, language, and notification preferences", async ({ page }) => {
  await loginAs(page, "student");
  await page.getByLabel("Settings").click();
  await page.getByLabel("Language").selectOption("Spanish");
  await expect(page.getByRole("heading", { name: "Configuración" })).toBeVisible();
  await page.getByLabel("Tamaño del texto").selectOption("Large");
  await expect(page.locator(".app")).toHaveClass(/font-large/);
  await page.getByLabel("Dyslexia-friendly type").check();
  await expect(page.locator(".app")).toHaveClass(/dyslexia-friendly/);
  await page.getByLabel("SMS").check();
  await page.getByRole("button", { name: /Enviar notificación de prueba/i }).click();
  await expect(page.getByText(/Test notification added/i)).toBeVisible();
});

test("runs tenant, security, backup, notification, and monitoring operations", async ({ page }) => {
  await loginAs(page, "global-admin");
  const operations = page.locator(".operations-command-center");
  await expect(operations.getByRole("heading", { name: "Platform Operations Center" })).toBeVisible();
  await operations.getByRole("button", { name: /Test isolation/i }).click();
  await expect(page.getByText(/Tenant isolation test passed/i)).toBeVisible();
  await operations.getByRole("button", { name: "Verify" }).last().click();
  await expect(page.getByText(/DNS and SSL are verified/i)).toBeVisible();

  await operations.getByRole("tab", { name: "Security & backups" }).click();
  await operations.getByLabel("Require MFA for administrators").uncheck();
  await expect(page.getByText("Security policy updated.")).toBeVisible();
  await operations.getByRole("button", { name: "Test restore" }).click();
  await expect(page.getByText(/Restore drill passed/i)).toBeVisible();

  await operations.getByRole("tab", { name: "Notifications" }).click();
  await operations.getByPlaceholder("New template name").fill("Attendance follow-up");
  await operations.getByRole("button", { name: "Add template" }).click();
  await expect(page.getByText("Attendance follow-up template created.")).toBeVisible();

  await operations.getByRole("tab", { name: "Monitoring" }).click();
  await operations.getByRole("button", { name: "Run checks" }).click();
  await expect(page.getByText("All production service checks passed.")).toBeVisible();
  await operations.getByRole("button", { name: /Install EduConnect/i }).click();
  await expect(page.getByText(/ready for offline use/i)).toBeVisible();
});

test("imports enrollment data and exports standards-based grades", async ({ page }) => {
  await loginAs(page, "school-admin");
  const enrollment = page.locator(".enrollment-center-panel");
  await enrollment.locator("#enrollment-file").setInputFiles({ name: "new-students.csv", mimeType: "text/csv", buffer: Buffer.from("student,guardian\nA Student,A Guardian\nB Student,B Guardian") });
  await enrollment.getByRole("button", { name: /Validate and import/i }).click();
  await expect(page.getByText("2 enrollment records validated and imported.")).toBeVisible();
  await expect(enrollment.getByText("new-students.csv")).toBeVisible();

  await page.getByRole("link", { name: /Teacher/i }).first().click();
  const gradebook = page.locator(".standards-gradebook-panel");
  await expect(gradebook.getByRole("heading", { name: "Standards Gradebook" })).toBeVisible();
  await gradebook.locator("[data-gradebook-weight]").first().fill("45");
  await gradebook.locator("[data-gradebook-weight]").first().blur();
  await expect(page.getByText("Gradebook category weights updated.")).toBeVisible();
  await gradebook.getByRole("button", { name: /Export to SIS/i }).click();
  await expect(page.getByText("Gradebook exported to the SIS.")).toBeVisible();
});

test("shows a family weekly summary and installable PWA metadata", async ({ page }) => {
  await loginAs(page, "parent");
  const summary = page.locator(".family-summary-panel");
  await expect(summary.getByRole("heading", { name: "This Week at a Glance" })).toBeVisible();
  await summary.getByRole("button", { name: /Send summary now/i }).click();
  await expect(page.getByText("Weekly family summary queued.")).toBeVisible();
  const manifestHref = await page.locator('link[rel="manifest"]').getAttribute("href");
  const manifestUrl = new URL(manifestHref, page.url());
  const manifest = await page.request.get(manifestUrl.href);
  expect(manifest.ok()).toBeTruthy();
  expect((await manifest.json()).display).toBe("standalone");
  const worker = await page.request.get(new URL("service-worker.js", manifestUrl).href);
  expect(worker.ok()).toBeTruthy();
});

test("operates provider readiness, SIS sync, background jobs, and a synthetic sandbox", async ({ page }) => {
  await loginAs(page, "global-admin");
  const operations = page.locator(".operations-command-center");

  await operations.getByRole("tab", { name: "Connected services" }).click();
  const oneRoster = operations.locator(".integration-operation-card").filter({ hasText: "OneRoster 1.2" });
  await oneRoster.getByRole("button", { name: "Test", exact: true }).click();
  await expect(page.getByText("OneRoster 1.2 is ready.")).toBeVisible();
  await oneRoster.getByRole("button", { name: "Sync now" }).click();
  await expect(page.getByText("OneRoster 1.2 synchronized successfully.")).toBeVisible();

  await operations.getByRole("tab", { name: "Jobs & recovery" }).click();
  const analyticsJob = operations.locator(".job-row").filter({ hasText: "Privacy-safe analytics rollup" });
  await analyticsJob.getByRole("button", { name: "Run now" }).click();
  await expect(page.getByText("Privacy-safe analytics rollup completed.")).toBeVisible();
  await expect(analyticsJob.getByText("Completed", { exact: true })).toBeVisible();

  await operations.getByRole("tab", { name: "Launch & review" }).click();
  await operations.getByRole("button", { name: "Create sandbox" }).click();
  await expect(page.getByText(/ready with synthetic data only/i)).toBeVisible();
  await expect(operations.getByText("Active", { exact: true }).first()).toBeVisible();
});

test("previews an academic rollover and manages an intervention without exposing a small cohort", async ({ page }) => {
  await loginAs(page, "school-admin");
  const continuity = page.locator(".school-success-panel");
  await continuity.getByRole("button", { name: "Preview rollover" }).click();
  await expect(continuity.getByText("Preview ready")).toBeVisible();
  await continuity.getByRole("button", { name: "Create new year" }).click();
  await expect(page.getByText(/2026–2027 was created/i)).toBeVisible();
  await expect(continuity.getByText("Archived", { exact: true })).toBeVisible();

  const interventions = page.locator(".intervention-center-panel");
  await interventions.getByLabel("Support area").fill("Attendance support");
  await interventions.getByLabel("Next review").fill("2026-09-15");
  await interventions.getByLabel("Goal and supports").fill("Weekly check-ins with an attendance goal of 95 percent.");
  await interventions.getByRole("button", { name: /Create support plan/i }).click();
  await expect(page.getByText(/Support plan created/i)).toBeVisible();
  await expect(interventions.getByText("Attendance support")).toBeVisible();

  await continuity.getByRole("button", { name: "Refresh school analytics" }).click();
  await expect(page.getByText("Analytics refreshed; small cohorts remain hidden.")).toBeVisible();
  await expect(continuity.getByText(/Not shown—fewer than 5 learners/i).first()).toBeVisible();
});

test("supports multilingual chrome and keyboard navigation across operations tabs", async ({ page }) => {
  await loginAs(page, "global-admin");
  await page.getByLabel("Settings").click();
  await page.getByLabel("Language").selectOption("French");
  await expect(page.getByRole("heading", { name: "Paramètres" })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await page.getByLabel("Langue").selectOption("Haitian Creole");
  await expect(page.getByRole("heading", { name: "Anviwònman" })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "ht");
  await page.getByLabel("Fèmen Anviwònman").click();

  const firstTab = page.getByRole("tab", { name: "Tenants & domains" });
  await firstTab.focus();
  await firstTab.press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Security & backups" })).toBeFocused();
  await expect(page.getByRole("tabpanel", { name: "Security & backups" })).toBeVisible();
});
