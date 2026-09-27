# Output Plan — spartanai.framer.website

| Item | Value |
|---|---|
| Target URL | `https://spartanai.framer.website/` (normalized origin `https://spartanai.framer.website`, pathname `/`) |
| `<app-root>` | `.` (repository root, single application) |
| `<site-key>` | `spartanai-framer-website-021e3300` (sha256("https://spartanai.framer.website")[:8]) |
| `<page-key>` | `root-8a5edab2` (sha256("/")[:8]) |
| Destination route | `/` → `src/app/page.tsx` (replaces the untouched template scaffold; first clone in a fresh template) |
| Artifact root | `docs/research/spartanai-framer-website-021e3300/root-8a5edab2/` |
| Screenshot root | `docs/design-references/spartanai-framer-website-021e3300/root-8a5edab2/` |
| Component root | `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/` |
| Shared components | `src/components/sites/spartanai-framer-website-021e3300/shared/` |
| Asset root | `public/sites/spartanai-framer-website-021e3300/root-8a5edab2/{images,videos}/` |
| Fonts | `src/app/fonts/spartanai-framer-website-021e3300/` (Inter Display, latin subset) |
| Downloader | `scripts/download-assets-spartanai-framer-website-021e3300-root-8a5edab2.mjs` |

## Shared foundation files changed
- `src/app/layout.tsx` — fonts (Inter Display local; Inter, Geist Mono, IBM Plex Mono, Jaini via `next/font/google`), metadata.
- `src/app/globals.css` — site tokens + keyframes, added without removing template tokens.

## Pre-existing routes
- Only the template scaffold `src/app/page.tsx` existed (placeholder text). No other routes, component namespaces, research folders or assets existed.

## Exclusions (intentional)
- Framer platform overlays are not part of the site design and are not cloned: "Made in Framer" badge (`#__framer-badge-container`), the "Buy Spartan AI Template from $129" marketplace promo (`#qj62i1`), the "Built with Spartan by Delani" credit link, and the Framer editor iframe.

## Browser automation
- No browser MCP was connected; headless Chromium via Playwright (installed in the session scratchpad, not the project) was used for all extraction, with user approval.
