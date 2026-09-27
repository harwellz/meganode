import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, hasLocale } from "@/i18n/locales";

// Default locale lives at the unprefixed URL: `/x` is served from `/vi/x` internally,
// and an explicit `/vi/x` permanently redirects to `/x` so each page has one URL.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 301);
  }

  if (hasLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes and anything that looks like a file (public assets).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
