import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

const baseURL = process.env.BASE_URL;

if (!baseURL) {
  throw new Error("Missing required environment variable: BASE_URL");
}

export default defineConfig({
  testDir: "./src/tests",

  timeout: 30_000,

  expect: {
    timeout: 5_000,
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],

  use: {
    baseURL,

    headless: true,

    actionTimeout: 10_000,
    navigationTimeout: 30_000,

    screenshot: {
      mode: "only-on-failure",
      fullPage: true,
    },

    video: "retain-on-failure",
    trace: "retain-on-failure",

    viewport: {
      width: 1440,
      height: 900,
    },
  },

  outputDir: "test-results",

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
