import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Mono, Inter, Jaini } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const interDisplay = localFont({
  variable: "--font-inter-display",
  display: "swap",
  src: [
    { path: "./fonts/spartanai-framer-website-021e3300/InterDisplay-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/spartanai-framer-website-021e3300/InterDisplay-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/spartanai-framer-website-021e3300/InterDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/spartanai-framer-website-021e3300/InterDisplay-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/spartanai-framer-website-021e3300/InterDisplay-700.woff2", weight: "700", style: "normal" },
  ],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jaini = Jaini({
  variable: "--font-jaini",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Spartan-AI",
  description:
    "Build a world-class digital presence with the Spartan AI template—a premium Framer ecosystem designed specifically for AI research labs, neural engineering firms, and high-end tech agencies.",
  icons: {
    icon: "/sites/spartanai-framer-website-021e3300/root-8a5edab2/images/d6IuUgB4OOUort0AccMgzEPUGw.png",
    apple: "/sites/spartanai-framer-website-021e3300/root-8a5edab2/images/31fOyKvwCm72RWXbx38uLHt044.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interDisplay.variable} ${inter.variable} ${geistMono.variable} ${ibmPlexMono.variable} ${jaini.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
