import { expect, test } from "@playwright/test";

test("live public landing page is education-friendly and protects role views", async ({ page, baseURL }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/The right school view for every person/);
  await expect(page.getByRole("heading", { name: "Learning, families, and schools—connected." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Welcome back" })).toBeVisible();
  await expect(page.getByLabel("School email or username")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
  await expect(page.locator("[data-login-profile]")).toHaveCount(0);

  await page.getByRole("link", { name: "See how EduConnect helps" }).click();
  await expect(page.getByRole("heading", { name: "Everyone has a place to learn and connect." })).toBeVisible();

  await page.goto(`${baseURL}/#messages`);
  await expect(page.getByRole("heading", { name: "Welcome back" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Communication Hub" })).toHaveCount(0);
});

test("live global administrator receives the global role workspace", async ({ page }) => {
  const password = process.env.EDU_GLOBAL_ADMIN_PASSWORD;
  test.skip(!password, "EDU_GLOBAL_ADMIN_PASSWORD is required for the authenticated live check.");

  await page.goto("/");
  await page.getByLabel("School email or username").fill("global-admin");
  await page.getByLabel("Password").fill(password);
  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByRole("heading", { name: "Tenant Governance" })).toBeVisible();
  await expect(page.getByText("Global Admin", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Role Control Center" })).toBeVisible();
});
