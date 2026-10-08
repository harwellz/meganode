import { expect, test, type Page } from "@playwright/test";

/**
 * Visual baseline for the home page at the three Framer breakpoints
 * (phone ≤809, tablet 810–1199, desktop ≥1200).
 *
 * Time is frozen with `page.clock` so JS-driven motion (count-ups, tickers, pixel arrows,
 * scroll reveal) is deterministic; CSS animations are disabled at capture time.
 */
const VIEWPORTS = [
  { name: "phone", width: 390, height: 844 },
  { name: "tablet", width: 1000, height: 900 },
  { name: "desktop", width: 1440, height: 900 },
] as const;

const PATHS = [{ name: "home", path: "/" }] as const;

async function openSettled(page: Page, path: string) {
  await page.clock.install({ time: new Date("2026-01-01T00:00:00Z") });
  await page.goto(path, { waitUntil: "networkidle" });
  // Scroll through once so in-view effects (fade-ins, count-ups) reach their final state.
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.clock.runFor(200);
  }
  await page.clock.runFor(5000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.clock.runFor(1000);
}

for (const { name: pageName, path } of PATHS) {
  for (const vp of VIEWPORTS) {
    test.describe(`${pageName} @ ${vp.name}`, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } });

      test("section heights", async ({ page }) => {
        await openSettled(page, path);
        const layout = await page.evaluate(() => ({
          documentHeight: document.documentElement.scrollHeight,
          sections: [...document.querySelectorAll("main > *")].map((el) => Math.round(el.getBoundingClientRect().height)),
        }));
        expect(JSON.stringify(layout, null, 2)).toMatchSnapshot(`${pageName}-${vp.name}-layout.json`);
      });

      test("no broken images or console errors", async ({ page }) => {
        const errors: string[] = [];
        page.on("pageerror", (e) => errors.push(e.message));
        page.on("console", (m) => {
          if (m.type() === "error") errors.push(m.text());
        });
        await openSettled(page, path);
        const broken = await page.evaluate(() =>
          [...document.images].filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.currentSrc),
        );
        expect(broken).toEqual([]);
        expect(errors).toEqual([]);
      });

      test("screens", async ({ page }) => {
        await openSettled(page, path);
        const tops = await page.evaluate(() =>
          [...document.querySelectorAll("main > *")].map((el) => Math.round(el.getBoundingClientRect().top + window.scrollY)),
        );
        // One screenshot per top-level section, plus the fully revealed footer at the end.
        const stops = [...tops, await page.evaluate(() => document.documentElement.scrollHeight)];
        for (const [i, top] of stops.entries()) {
          await page.evaluate((y) => window.scrollTo(0, y), top);
          await page.clock.runFor(1500);
          await expect.soft(page).toHaveScreenshot(`${pageName}-${vp.name}-${String(i).padStart(2, "0")}.png`, {
            mask: [page.locator("video"), page.locator("iframe")],
          });
        }
      });
    });
  }
}
