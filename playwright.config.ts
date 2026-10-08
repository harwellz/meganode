import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.VISUAL_PORT ?? 3100);

/**
 * Visual regression suite. Runs against a production build (`npm run build` first).
 * Update baselines intentionally with `npm run test:visual:update`.
 */
export default defineConfig({
  testDir: "tests/visual",
  snapshotPathTemplate: "{testDir}/__snapshots__/{testFilePath}/{arg}{ext}",
  fullyParallel: true,
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: "disabled", caret: "hide" },
  },
  use: {
    baseURL: `http://localhost:${PORT}`,
    ...devices["Desktop Chrome"],
    deviceScaleFactor: 1,
  },
  webServer: {
    command: `npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
