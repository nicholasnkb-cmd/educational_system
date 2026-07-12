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
