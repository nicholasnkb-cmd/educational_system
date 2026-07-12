import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testIgnore: "**/*.test.mjs",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:4529",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev -- --port 4529 --strictPort",
    url: "http://127.0.0.1:4529",
    reuseExistingServer: false,
    timeout: 120000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
