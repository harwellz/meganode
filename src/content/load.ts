import "server-only";

import { z } from "zod";

import { HomeContentSchema, SiteContentSchema, type HomeContent, type SiteContent } from "@/content/schema";

// Locale → lazy JSON imports, the pattern from Next's i18n guide. Add a locale here
// once its files exist under `content/globals/<locale>/` and `content/pages/<locale>/`.
const sources = {
  vi: {
    site: () => import("../../content/globals/vi/site.json").then((m) => m.default),
    home: () => import("../../content/pages/vi/home.json").then((m) => m.default),
  },
};

export type Locale = keyof typeof sources;

export const defaultLocale: Locale = "vi";

export const hasLocale = (locale: string): locale is Locale => Object.hasOwn(sources, locale);

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
