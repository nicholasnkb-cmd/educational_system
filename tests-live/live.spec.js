import { expect, test } from "@playwright/test";

test("live site loads core routes", async ({ page, baseURL }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/EduConnect Interactive Portal/);
  await expect(page.getByRole("heading", { name: "Tenant Governance" })).toBeVisible();

  await page.goto(`${baseURL}/#messages`);
  await expect(page.getByRole("heading", { name: "Communication Hub" })).toBeVisible();

  await page.goto(`${baseURL}/#community`);
  await expect(page.getByRole("heading", { name: /Approved school community chat/i })).toBeVisible();
});
