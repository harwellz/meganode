import "server-only";

import { z } from "zod";

import { HomeContentSchema, type HomeContent } from "@/content/schema";

// Locale → lazy JSON import, the pattern from Next's i18n guide. Add a locale here
// once `content/pages/<locale>/home.json` exists.
const homeContent = {
  vi: () => import("../../content/pages/vi/home.json").then((m) => m.default),
};

export type Locale = keyof typeof homeContent;

export const defaultLocale: Locale = "vi";

export const hasLocale = (locale: string): locale is Locale => Object.hasOwn(homeContent, locale);

/** Loads and validates the home page copy; invalid content fails the build. */
export async function getHomeContent(locale: Locale): Promise<HomeContent> {
  const raw = await homeContent[locale]();
  const result = HomeContentSchema.safeParse(raw);
  if (!result.success) {
    throw new Error(`Invalid content in content/pages/${locale}/home.json:\n${z.prettifyError(result.error)}`);
  }
  return result.data;
}
