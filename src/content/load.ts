import "server-only";

import { z } from "zod";

import { HomeContentSchema, SiteContentSchema, type HomeContent, type SiteContent } from "@/content/schema";
import type { Locale } from "@/i18n/locales";

// Locale → lazy JSON imports, the pattern from Next's i18n guide. Keyed by the routing
// locales in `src/i18n/locales.ts`, so a routed locale without content fails typecheck.
const sources: Record<Locale, { site: () => Promise<unknown>; home: () => Promise<unknown> }> = {
  vi: {
    site: () => import("../../content/globals/vi/site.json").then((m) => m.default),
    home: () => import("../../content/pages/vi/home.json").then((m) => m.default),
  },
  en: {
    site: () => import("../../content/globals/en/site.json").then((m) => m.default),
    home: () => import("../../content/pages/en/home.json").then((m) => m.default),
  },
};

function validate<T extends z.ZodType>(schema: T, raw: unknown, file: string): z.output<T> {
  const result = schema.safeParse(raw);
  if (!result.success) {
    throw new Error(`Invalid content in ${file}:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}

/** Site-wide copy (nav, footer, announcement); invalid content fails the build. */
export async function getSiteContent(locale: Locale): Promise<SiteContent> {
  return validate(SiteContentSchema, await sources[locale].site(), `content/globals/${locale}/site.json`);
}

/** Home page copy; invalid content fails the build. */
export async function getHomeContent(locale: Locale): Promise<HomeContent> {
  return validate(HomeContentSchema, await sources[locale].home(), `content/pages/${locale}/home.json`);
}
