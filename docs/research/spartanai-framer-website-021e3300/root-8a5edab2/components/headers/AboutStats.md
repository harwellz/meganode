# AboutStats Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/AboutStats.tsx`
- **Screenshots:** `seg-desktop-01.png`, `state-about-cards.png`, mobile `seg-mobile-01.png`…`seg-mobile-03.png`
- **Interaction model:** scroll-driven per-char colour reveal on the headline; scroll-triggered fade-in + count-up; time-driven announcement ticker.

## DOM Structure
`<section>` white, padding `0 12px`, `relative z-[4]` → card bg rgb(240,240,240), radius 20, padding `12px 40px` → column (gap 200, padding `200px 0 30px`):
1. **Text block** (column): headline via `ScrollRevealText` (Inter Display 500 56px/60px, letter-spacing −2px, width ~1042) with `dimColor="rgba(26,26,26,0.1)"` and `color="rgb(26,26,26)"`; then the paragraph (width 600, Inter Display 300 16px/24px +0.32px ink) in a `FadeIn`.
2. **Bento row** (4 columns, gap 10, height ~315) — see dump for exact per-card sizes/radii/padding/colours:
   - **Card A** (dark, bg rgb(26,26,26)): white 60×60 rounded tile with a trend-up icon (svg02); big number "$45M" (Inter 400 43px/43px −2px, white) that **counts up** from "$0M" to "$45M" (~1.6s, ease-out) once visible; caption "Revenue generated for our clients through AI-led optimizations." (white).
   - **Card B** (two stacked cards): top — dashed-border card with 4 overlapping circular avatars ("Stacked Avatars") and "**15,400** active agents" (15,400 in `<strong>`); bottom — "5x" (counts up from "0x") + "Faster speed to market.".
   - **Card C**: radial tick dial (svg03, 149×153) with a dark circle + rocket icon (svg04) centred; "Inference speed" (h4 Inter Display 500 20px/28px −0.4px) + "Real-time processing for enterprise-grade deployments.".
   - **Card D** (white): quote icon (svg05, 40×40) top-left, cigna logo image (63×38) top-right; quote text (Inter Display 400 18px/25.2px); bullet list item "CTO, Cigna".
3. **Announcement ticker** at the very bottom: `<AnnouncementTicker />` (ink) in a 0-height relative wrapper so it sits in the bottom padding ("Variant 1" in the dump, absolute top 0, 20px tall).

## States & Behaviors
- Headline reveal is scroll-driven (no time animation).
- Paragraph and bento cards fade in (`FadeIn`, 0.8s) when entering.
- Count-up: integers, ease-out, ~1.6s, once.

## Text Content (verbatim)
- Headline: "Automate the manual, accelerate the future. Our custom AI solutions deliver measurable growth and operational excellence."
- "Empowering teams with intelligent tools that turn complex data into actionable business outcomes daily."
- "$45M" · "Revenue generated for our clients through AI-led optimizations." · "15,400 active agents" · "5x" · "Faster speed to market." · "Inference speed" · "Real-time processing for enterprise-grade deployments." · "The custom LLM they built for us reduced our support tickets by 80% while increasing user satisfaction." · "CTO, Cigna"

## Responsive Behavior
- **Tablet:** see tablet excerpt (bento wraps).
- **Phone:** headline shrinks (see excerpt); bento becomes a single column of full-width cards (`seg-mobile-01..03`).
