import { z } from "zod";

// Content schemas for page copy. Files live in `content/pages/<locale>/<page>.json`
// (Decap folder collection, i18n structure `multiple_folders`) and are validated
// at build time by the loaders in this folder.

const nonEmpty = z.string().trim().min(1);

export const LinkSchema = z.object({
  label: nonEmpty,
  href: nonEmpty,
});

export const FaqContentSchema = z.object({
  label: nonEmpty,
  intro: nonEmpty,
  heading: nonEmpty,
  cta: LinkSchema,
  items: z
    .array(
      z.object({
        q: nonEmpty,
        a: nonEmpty,
      }),
    )
    .min(1),
});

export const HomeContentSchema = z.object({
  faq: FaqContentSchema,
});

export type LinkContent = z.infer<typeof LinkSchema>;
export type FaqContent = z.infer<typeof FaqContentSchema>;
export type HomeContent = z.infer<typeof HomeContentSchema>;
