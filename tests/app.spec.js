import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
});

test("navigates roles, searches, opens settings, and resets demo state", async ({ page }) => {
  await page.goto("/");
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
  await page.goto("/#lms");
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
  await page.goto("/");
  await page.locator(".mobile-role-nav").getByRole("link", { name: /Student/i }).click();
  await expect(page.getByRole("heading", { name: /Welcome back/i })).toBeVisible();
  await page.getByRole("button", { name: /Continue Adventure/i }).click();
  await expect(page.getByText(/marked complete/i)).toBeVisible();
});

test("switches demo identities and enforces role permissions", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Demo login and API mode").getByRole("button", { name: "Parent" }).click();
  await expect(page.getByText("Signed in as Sarah Jenkins.")).toBeVisible();
  await page.getByRole("link", { name: /Platform/i }).first().click();
  await expect(page.getByRole("button", { name: /Add School Tenant/i })).toBeDisabled();

  await page.getByRole("link", { name: /Messages/i }).first().click();
  await expect(page.getByRole("button", { name: /Enable/i })).toBeDisabled();

  await page.getByLabel("Demo login and API mode").getByRole("button", { name: "Admin" }).click();
  await page.getByRole("link", { name: /Messages/i }).first().click();
  await expect(page.getByRole("button", { name: /Enable/i })).toBeEnabled();
});

test("runs walkthrough and opens mock API mode", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Start Walkthrough/i }).click();
  await expect(page.getByText("Walkthrough started.")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Choose a role" })).toBeVisible();
  await page.getByRole("button", { name: /Next/i }).click();
  await expect(page.getByRole("heading", { name: "Create learning work" })).toBeVisible();

  await page.getByLabel("Settings").click();
  await page.getByLabel("Data mode").selectOption("mock-api");
  await expect(page.getByText("Mock API mode enabled.")).toBeVisible();
});

test("manages permissions, roster, gradebook, and audit trail", async ({ page }) => {
  await page.goto("/#platform");
  await expect(page.getByRole("heading", { name: "Users & Roles" })).toBeVisible();
  await page.locator('[data-profile-permission="teacher:submit-post"]').click();
  await expect(page.getByText("permissions updated")).toBeVisible();

  await page.getByRole("link", { name: /Teacher/i }).first().click();
  await page.getByLabel("Filter roster").selectOption("Watch");
  const rosterPanel = page.locator(".roster-panel");
  await expect(rosterPanel.getByText("Liam Wilson")).toBeVisible();
  await expect(rosterPanel.getByText("Leo Jenkins")).not.toBeVisible();

  await page.getByRole("link", { name: /LMS/i }).first().click();
  await page.getByRole("button", { name: /Maya Rodriguez/i }).click();
  await page.getByRole("textbox", { name: "Teacher comment" }).fill("Updated rubric feedback.");
  await page.getByRole("button", { name: /Save Comment/i }).click();
  await expect(page.getByText("Gradebook comment saved.")).toBeVisible();

  await page.getByRole("link", { name: /Platform/i }).first().click();
  await expect(page.getByText("Saved gradebook comment for Maya Rodriguez")).toBeVisible();
});

test("validates imported demo state JSON", async ({ page }) => {
  await page.goto("/");
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
