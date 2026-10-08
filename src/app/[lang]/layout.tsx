import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Mono, Inter, Jaini } from "next/font/google";
import { notFound } from "next/navigation";

import { defaultLocale, hasLocale, localeMeta, locales, localizedPath } from "@/i18n/locales";

import "../globals.css";

// Variable Inter with the optical-size axis: opsz 32 is the Display cut and
// opsz 14 the text cut (selected per utility in globals.css).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  axes: ["opsz"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["200", "300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
});

const jaini = Jaini({
  variable: "--font-jaini",
  subsets: ["latin"],
  weight: ["400"],
});

const baseMetadata: Metadata = {
  // Absolute base for canonical/hreflang URLs; set SITE_URL in the deployment environment.
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: "Meganode",
  description:
    "Build a world-class digital presence with the Meganode template—a premium Framer ecosystem designed specifically for AI research labs, neural engineering firms, and high-end tech agencies.",
  icons: {
    icon: "/sites/spartanai-framer-website-021e3300/root-8a5edab2/images/d6IuUgB4OOUort0AccMgzEPUGw.png",
    apple: "/sites/spartanai-framer-website-021e3300/root-8a5edab2/images/31fOyKvwCm72RWXbx38uLHt044.png",
  },
};

// Only the listed locales exist; any other first segment 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return {
    ...baseMetadata,
    alternates: {
      canonical: localizedPath(lang),
      languages: {
        ...Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, localizedPath(l)])),
        "x-default": localizedPath(defaultLocale),
      },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { htmlLang, dir } = localeMeta[lang];

  return (
    <html
      lang={htmlLang}
      dir={dir}
      className={`${inter.variable} ${geistMono.variable} ${ibmPlexMono.variable} ${jaini.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
