import { z } from "zod";

// Content schemas for page copy, validated at build time by `src/content/load.ts`.
// - `content/globals/<locale>/site.json` — nav, footer, announcement (every page)
// - `content/pages/<locale>/home.json`  — home page sections
// Folder-per-locale matches Decap's i18n `multiple_folders` structure.

const text = z.string().trim().min(1);
/** Alt text may be empty for decorative images. */
const alt = z.string();
/** Public path of an image or video, e.g. `/sites/.../images/foo.png`. */
const asset = z.string().startsWith("/");

export const LinkSchema = z.object({ label: text, href: text });
export const ButtonSchema = z.object({ label: text, href: text.optional() });

const SocialSchema = <T extends readonly [string, ...string[]]>(platforms: T) =>
  z.object({ platform: z.enum(platforms), label: text, href: text });

// ── Site-wide ────────────────────────────────────────────────────────────────

export const SiteContentSchema = z.object({
  homeLabel: text,
  announcement: z.object({ tag: text, message: text }),
  nav: z.object({
    links: z.array(LinkSchema).min(1),
    cta: ButtonSchema,
    openMenuLabel: text,
    closeMenuLabel: text,
  }),
  footer: z.object({
    description: text,
    newsletter: z.object({ emailLabel: text, placeholder: text, submit: text }),
    followLabel: text,
    socials: z.array(SocialSchema(["x", "linkedin", "youtube", "instagram"])),
    columns: z.array(z.object({ title: text, links: z.array(LinkSchema).min(1) })).min(1),
  }),
});

// ── Home sections ────────────────────────────────────────────────────────────

const CounterSchema = z.object({
  value: z.number().int().nonnegative(),
  prefix: z.string().default(""),
  suffix: z.string().default(""),
});

export const HeroContentSchema = z.object({
  headingMuted: text,
  headingStrong: text,
  subheading: text,
  cta: ButtonSchema,
  card: z.object({ title: text, caption: text, href: text, imageAlt: alt }),
  trustLine: text,
});

export const AboutContentSchema = z.object({
  headline: text,
  intro: text,
  revenue: CounterSchema.extend({ caption: text }),
  agents: z.object({
    count: text,
    label: text,
    avatars: z.array(z.object({ image: asset, alt })).length(4),
  }),
  speed: CounterSchema.extend({ caption: text }),
  inference: z.object({ title: text, caption: text }),
  quote: z.object({ text, author: text }),
});

export const WorksContentSchema = z.object({
  title: text,
  statLabels: z.tuple([text, text, text, text]),
  items: z
    .array(
      z.object({
        tag: text,
        href: text,
        logo: asset,
        image: asset,
        imageAlt: alt,
        stats: z.tuple([text, text, text, text]),
      }),
    )
    .min(1),
});

export const CapabilitiesContentSchema = z.object({
  label: text,
  intro: text,
  heading: text,
  cta: ButtonSchema,
  items: z
    .array(z.object({ num: text, title: text, description: text, pattern: asset, illustration: asset }))
    .min(1),
});

export const VisionTechContentSchema = z.object({
  founder: z.object({ name: text, role: text }),
  label: text,
  headline: text,
  body: text,
  statement: text,
  cta: ButtonSchema,
  /** One per icon column: magnifier, orbit, sliders, language ticker. */
  features: z.tuple([text, text, text, text]),
});

export const TestimonialsContentSchema = z.object({
  title: text,
  intro: text,
  previousLabel: text,
  nextLabel: text,
  cardHref: text,
  items: z
    .array(z.object({ avatar: asset, avatarAlt: alt, logo: asset, quote: text, name: text, role: text }))
    .min(1),
});

export const VideoContentSchema = z.object({
  intro: text,
  duration: text,
  heading: text,
  imageAlt: alt,
  playLabel: text,
  closeLabel: text,
  videoTitle: text,
  videoSrc: z.url(),
});

export const ProcessContentSchema = z.object({
  label: text,
  heading: text,
  steps: z.array(z.object({ num: text, title: text, tag: text, body: text })).min(1),
  statement: text,
  cta: ButtonSchema,
});

export const TeamContentSchema = z.object({
  statement: text,
  intro: text,
  cta: ButtonSchema,
  socials: z.array(SocialSchema(["x", "github"])),
  members: z.array(z.object({ name: text, role: text, photo: asset, quote: text })).min(1),
});

export const PricingContentSchema = z.object({
  title: text,
  intro: text,
  billing: z.object({
    monthly: text,
    annually: text,
    savings: text,
    toggleLabel: text,
    perMonth: text,
    billedMonthly: text,
    billedAnnually: text,
  }),
  cta: z.object({ label: text, href: text }),
  /** Four tiers: card corner radii are laid out for a 1 / 2×2 / 4-column grid. */
  plans: z
    .array(
      z.object({
        name: text,
        monthly: text,
        annually: text,
        tagline: text,
        features: z.array(text).min(1),
        featured: z.boolean().default(false),
      }),
    )
    .length(4),
});

export const FaqContentSchema = z.object({
  label: text,
  intro: text,
  heading: text,
  cta: LinkSchema,
  items: z.array(z.object({ q: text, a: text })).min(1),
});

export const InsightsContentSchema = z.object({
  title: text,
  intro: text,
  cta: ButtonSchema,
  writtenBy: text,
  articles: z
    .array(
      z.object({
        href: text,
        image: asset,
        alt,
        category: text,
        title: text,
        excerpt: text,
        author: text,
        /** Text card above the image on tablet/desktop. */
        reversed: z.boolean().default(false),
      }),
    )
    .min(1),
});

export const HomeContentSchema = z.object({
  hero: HeroContentSchema,
  about: AboutContentSchema,
  works: WorksContentSchema,
  capabilities: CapabilitiesContentSchema,
  visionTech: VisionTechContentSchema,
  testimonials: TestimonialsContentSchema,
  video: VideoContentSchema,
  process: ProcessContentSchema,
  team: TeamContentSchema,
  pricing: PricingContentSchema,
  faq: FaqContentSchema,
  insights: InsightsContentSchema,
});

export type LinkContent = z.infer<typeof LinkSchema>;
export type ButtonContent = z.infer<typeof ButtonSchema>;
export type SiteContent = z.infer<typeof SiteContentSchema>;
export type AnnouncementContent = SiteContent["announcement"];
export type NavContent = SiteContent["nav"];
export type FooterContent = SiteContent["footer"];
export type HeroContent = z.infer<typeof HeroContentSchema>;
export type AboutContent = z.infer<typeof AboutContentSchema>;
export type WorksContent = z.infer<typeof WorksContentSchema>;
export type CapabilitiesContent = z.infer<typeof CapabilitiesContentSchema>;
export type VisionTechContent = z.infer<typeof VisionTechContentSchema>;
export type TestimonialsContent = z.infer<typeof TestimonialsContentSchema>;
export type VideoContent = z.infer<typeof VideoContentSchema>;
export type ProcessContent = z.infer<typeof ProcessContentSchema>;
export type TeamContent = z.infer<typeof TeamContentSchema>;
export type PricingContent = z.infer<typeof PricingContentSchema>;
export type FaqContent = z.infer<typeof FaqContentSchema>;
export type InsightsContent = z.infer<typeof InsightsContentSchema>;
export type HomeContent = z.infer<typeof HomeContentSchema>;
