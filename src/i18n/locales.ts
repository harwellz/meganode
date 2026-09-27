// Single source of truth for routing locales. Kept free of server-only imports so
// `src/proxy.ts` can share it. A locale listed here must have content files under
// `content/{globals,pages}/<locale>/` and an entry in `src/content/load.ts`.
export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

/** Served unprefixed at `/`; `/vi/*` permanently redirects to `/*`. */
export const defaultLocale: Locale = "vi";

export const hasLocale = (locale: string): locale is Locale => (locales as readonly string[]).includes(locale);

/** BCP 47 tag and text direction for `<html lang dir>` and hreflang. */
export const localeMeta: Record<Locale, { htmlLang: string; dir: "ltr" | "rtl" }> = {
  vi: { htmlLang: "vi", dir: "ltr" },
  en: { htmlLang: "en", dir: "ltr" },
};

/** Public URL path for `path` (leading slash) in `locale`. */
export function localizedPath(locale: Locale, path = "/"): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
