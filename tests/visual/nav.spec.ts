import { expect, test, type Page } from "@playwright/test";

/**
 * Nav + language switcher, per locale. The switcher is too small to trip the full-page
 * screenshots in `home.spec.ts`, so this captures the nav element itself, including the
 * phone menu in its open state, which the home suite never shows.
 */
const LOCALES = [
  { name: "vi", path: "/", current: "Tiếng Việt", other: { name: "English", href: "/en" } },
  { name: "en", path: "/en", current: "English", other: { name: "Tiếng Việt", href: "/" } },
] as const;

// Tablet at its 810px minimum, where the nav pill comes closest to the CTA.
const WIDE_VIEWPORTS = [
  { name: "tablet-min", width: 810, height: 600 },
  { name: "desktop", width: 1440, height: 900 },
] as const;

async function open(page: Page, path: string) {
  await page.clock.install({ time: new Date("2026-01-01T00:00:00Z") });
  await page.goto(path, { waitUntil: "networkidle" });
  await page.clock.runFor(1000);
}

for (const locale of LOCALES) {
  test.describe(`nav ${locale.name}`, () => {
    for (const vp of WIDE_VIEWPORTS) {
      test(`@ ${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await open(page, locale.path);

        const nav = page.locator("nav").first();
        const switcher = nav.getByRole("list", { name: "Language" });
        await expect(switcher.locator('[aria-current="true"]')).toContainText(locale.current);
        await expect(switcher.getByRole("link", { name: locale.other.name })).toHaveAttribute("href", locale.other.href);

        // The pill must not run into the CTA (longer translated labels would).
        const navBox = await nav.boundingBox();
        const ctaBox = await page.locator("div.fixed").filter({ has: page.getByText("Hire Team") }).first().boundingBox();
        expect(navBox && ctaBox && navBox.x + navBox.width < ctaBox.x).toBe(true);

        await expect(nav).toHaveScreenshot(`nav-${locale.name}-${vp.name}.png`, {
          animations: "disabled",
        });
      });
    }

    test("@ phone, menu open", async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await open(page, locale.path);

      await page.getByRole("button", { name: "Open menu" }).click();
      await page.clock.runFor(1000);

      const nav = page.locator("nav").nth(1);
      const switcher = nav.getByRole("list", { name: "Language" });
      await expect(switcher.locator('[aria-current="true"]')).toContainText(locale.current);
      await expect(switcher.getByRole("link", { name: locale.other.name })).toHaveAttribute("href", locale.other.href);

      await expect(nav).toHaveScreenshot(`nav-${locale.name}-phone-open.png`, { animations: "disabled" });
    });
  });
}
