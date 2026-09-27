# Project Context — meganode

## Purpose
Marketing site for an AI agency. The UI is currently a pixel-level clone of the
Spartan AI Framer template (spartanai.framer.website). The clone's UX/UI is the
baseline design; it will be customised later. License of the original template is
not a concern for this phase (owner decision, 2026-09-27).

## Tech stack
- Next.js 16 App Router (breaking changes vs older Next — read `node_modules/next/dist/docs/` first; `middleware` is now `proxy.ts`)
- React 19, TypeScript strict, Tailwind CSS v4, shadcn/ui
- Deployment target: Vercel (`output: "standalone"` in next.config.ts)
- Site components: `src/components/sites/spartanai-framer-website-021e3300/`
  (`shared/` + `root-8a5edab2/` — 14 page sections)

## Current phase
Clone complete and visually verified on branch `clone/spartanai-framer-website`.
Next: i18n, Decap CMS, source optimisation, and finishing clone QA leftovers.

## Decisions
- **i18n routing:** default locale `vi` served at `/` with **no prefix**. Other locales
  are prefixed: `/en`, `/ja`, `/zh-cn`, `/ar`, more to come. `/vi/*` should
  redirect to the unprefixed path. `ar` is RTL — layouts must support `dir="rtl"`.
  Implemented without an i18n library (Next docs pattern): `src/i18n/locales.ts` lists
  routed locales + `lang`/`dir`; `src/proxy.ts` rewrites unprefixed paths to `/vi/*`
  and 301s `/vi/*`; `app/[lang]/layout.tsx` prerenders each locale
  (`dynamicParams = false`) and emits canonical + hreflang (set `SITE_URL` in deploys).
  Enable a locale only once its content exists: add it to `locales`/`localeMeta`,
  add `content/{globals,pages}/<locale>/`, and its `sources` entry in `src/content/load.ts`.
- **Content:** all copy moves out of components into git-tracked, typed content files
  per locale, read at build time by Server Components and passed to client
  components as props. Content is validated with a schema at build time.
  Layout: `content/globals/<locale>/site.json` (nav, footer, announcement) and
  `content/pages/<locale>/home.json` (sections); zod schemas in `src/content/schema.ts`,
  loader `src/content/load.ts`. Folder-per-locale = Decap folder collection with
  i18n `multiple_folders` (Decap file collections only support `single_file`).
- **CMS:** Decap CMS (git-based) at `/admin`. Editors are the owner, content staff,
  and AI agents. Humans use Decap; agents may edit the content files directly in git.
  Must be ready to grow a blog (per-locale Markdown posts) later.
- **Rendering:** static generation per locale; a CMS commit triggers a Vercel rebuild.

## Key constraints
- No visual regression vs the clone for the default design (verified with Playwright
  screenshots at 390 / 1000 / 1440 px — Framer breakpoints: phone ≤809, tablet 810–1199, desktop ≥1200).
- Fonts must cover every enabled locale (Vietnamese diacritics, CJK, Arabic).
- TypeScript strict, no `any`; Tailwind utilities; mobile-first.

## Definition of done
Every locale renders statically with correct `lang`/`dir`, content is editable via
Decap (and by agents via files), `npm run check` passes, and the visual baseline shows
no unintended diffs.
