import fs from "fs";
import { defineConfig } from "@playwright/test";

// Browser smoke suite. Runs the app in dev mode against a dedicated port so
// it never collides with a manually started dev server on :3000.
// Browser: Playwright's bundled Chromium when installed (bunx playwright
// install chromium), otherwise the system Chromium (/usr/sbin/chromium on
// Arch). Override either with CHROMIUM_PATH.

const PORT = Number(process.env.PLAYWRIGHT_PORT || 3111);
const SYSTEM_CHROMIUM = "/usr/sbin/chromium";
const executablePath = process.env.CHROMIUM_PATH ?? (fs.existsSync(SYSTEM_CHROMIUM) ? SYSTEM_CHROMIUM : undefined);

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 90_000,
  expect: { timeout: 15_000 },
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    headless: true,
    screenshot: "only-on-failure",
    navigationTimeout: 60_000,
    ...(executablePath ? { launchOptions: { executablePath } } : {}),
  },
  webServer: {
    command: "bun run dev",
    port: PORT,
    // Next.js dev server binds process.env.PORT
    env: { ...process.env, PORT: String(PORT) },
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
