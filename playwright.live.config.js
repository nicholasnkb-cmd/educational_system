import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests-live",
  fullyParallel: true,
  use: {
    baseURL: process.env.LIVE_BASE_URL || "https://educationalsystem.fieldserviceit.com",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
