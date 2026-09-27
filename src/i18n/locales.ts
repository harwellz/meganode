// Single source of truth for routing locales. Kept free of server-only imports so
// `src/proxy.ts` can share it. A locale listed here must have content files under
// `content/{globals,pages}/<locale>/` and an entry in `src/content/load.ts`.
export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

/** Served unprefixed at `/`; `/vi/*` permanently redirects to `/*`. */
export const defaultLocale: Locale = "vi";

export const hasLocale = (locale: string): locale is Locale => (locales as readonly string[]).includes(locale);

/**
 * BCP 47 tag and text direction for `<html lang dir>` and hreflang, plus the language's
 * own name (endonym) and short code for the language switcher. Endonyms are the same in
 * every locale, so they live here rather than in per-locale content.
 */
export const localeMeta: Record<Locale, { htmlLang: string; dir: "ltr" | "rtl"; name: string; code: string }> = {
  vi: { htmlLang: "vi", dir: "ltr", name: "Tiếng Việt", code: "VI" },
  en: { htmlLang: "en", dir: "ltr", name: "English", code: "EN" },
};

/** Public URL path for `path` (leading slash) in `locale`. */
export function localizedPath(locale: Locale, path = "/"): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export type LanguageLink = { href: string; htmlLang: string; name: string; code: string; current: boolean };

/** One switcher entry per locale, each pointing at `path` in that locale. */
export function languageLinks(current: Locale, path = "/"): LanguageLink[] {
  return locales.map((locale) => {
    const { htmlLang, name, code } = localeMeta[locale];
    return { href: localizedPath(locale, path), htmlLang, name, code, current: locale === current };
  });
}
