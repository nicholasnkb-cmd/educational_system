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
  await page.getByRole("button", { name: /Create Assignment/i }).click();
  await expect(page.getByText(/was created in the LMS grading suite/i)).toBeVisible();
  await expect(page.getByText(/Quick Check/i).first()).toBeVisible();

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
  await page.getByRole("link", { name: /Parent/i }).first().click();
  await expect(page.getByRole("heading", { name: "Parent Dashboard" })).toBeVisible();
  await page.getByRole("link", { name: /Student/i }).first().click();
  await expect(page.getByRole("heading", { name: "Student Dashboard" })).toBeVisible();
});

test("manages permissions, roster, gradebook, and audit trail", async ({ page }) => {
  await loginAs(page);
  await expect(page.getByRole("heading", { name: "Users & Roles" })).toBeVisible();
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
