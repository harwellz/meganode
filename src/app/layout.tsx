import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Mono, Inter, Jaini } from "next/font/google";
import "./globals.css";

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
      className={`${inter.variable} ${geistMono.variable} ${ibmPlexMono.variable} ${jaini.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
