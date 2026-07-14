import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
});

async function seriousViolations(page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  return results.violations.filter((violation) => ["serious", "critical"].includes(violation.impact));
}

async function loginAs(page, profileId) {
  await page.goto("/");
  await page.getByLabel("School email or username").fill(profileId);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByLabel("Sign out")).toBeVisible();
}

test("landing page has no serious automated WCAG violations", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Learning, families, and schools—connected." })).toBeVisible();
  expect(await seriousViolations(page)).toEqual([]);
});

test("global administration has no serious automated WCAG violations", async ({ page }) => {
  await loginAs(page, "global-admin");
  await expect(page.getByRole("heading", { name: "Tenant Governance" })).toBeVisible();
  expect(await seriousViolations(page)).toEqual([]);
});

test("student learning view has no serious automated WCAG violations", async ({ page }) => {
  await loginAs(page, "student");
  await expect(page.getByRole("heading", { name: /Welcome back/i })).toBeVisible();
  expect(await seriousViolations(page)).toEqual([]);
});

test("open general menu has no serious automated WCAG violations", async ({ page }) => {
  await loginAs(page, "global-admin");
  await page.getByRole("button", { name: "General menu" }).click();
  await expect(page.getByRole("dialog", { name: "General menu" })).toBeVisible();
  expect(await seriousViolations(page)).toEqual([]);
});
