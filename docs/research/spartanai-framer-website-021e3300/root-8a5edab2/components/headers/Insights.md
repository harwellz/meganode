# Insights Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Insights.tsx`
- **Screenshots:** `seg-desktop-14.png` (bottom), `seg-desktop-15.png`; mobile `seg-mobile-24.png`…`seg-mobile-26.png`
- **Interaction model:** time-driven big marquee + hover (article cards) + fade-in.

## DOM Structure
Bottom part of the light FAQ/Insights card (bg rgb(240,240,240)), 1336 wide, padding-bottom 180, column gap 50:
1. **Header** (gap 40): `<BigMarquee title="Insights" asteriskColor="#fff" />` (the asterisk here is WHITE on the grey card); row: left half empty, right half: paragraph (Inter Display 300 16px/24px +0.32px ink, width ~420) + `<ExpandButton label="All articles" size="md" tone="ink" />` (gap ~40).
2. **Blog grid** (3 columns 432 wide, gap 20, height 650): masonry-like alternating layout —
   - Column 1: image card (432×260, radius 20, cover) on top, text card (432×370) below.
   - Column 2: text card on top (432×370), image card below.
   - Column 3: image on top, text card below.
   (Gap 20 between image and text.)
   - **Text card** (`<a>`): bg rgb(214,214,214), radius 20, padding 24, column `justify-between`: category (IBM Plex Mono 400 12px uppercase ink), title (h4 Inter Display 400 20px/28px −0.4px ink, gap ~20), excerpt (Inter Display 300 14px/21px ink, 0.8 alpha), footer row: "Written by" (Inter Display 400 14px) + author (300 12px) and a 48px round button (bg rgb(26,26,26)) with a white arrow icon (svg17) rotated −45° (pointing up-right).
- **Card hover (~0.4s):** text card bg rgb(214,214,214) → rgb(26,26,26); all text → white; round button bg → #fff, arrow → ink and rotation −45° → 0°.
- Cards fade in on enter.

## Article data
| # | Image | Category | Title | Excerpt | Author |
|---|---|---|---|---|---|
| 1 | `862JbA3xEJjbdSDVyKEwOZ0f2g.jpeg` | TRANSFORMATION | The Sovereign Cloud: Why On-Premise AI is the Future of Data Privacy | Explore how federated learning and private hosting are allowing firms to innovate without risking security. | Frank Joel |
| 2 | `YKAEpvQFebP2OETEJDVNip8UTg.jpeg` | ARCHITECTURE | The Architecture of Autonomy: Scaling AI Within Legacy Frameworks | A comprehensive guide on integrating custom machine learning models into complex enterprise environments. | Damilola Manuel |
| 3 | `egDVD5dc2AvUIZKG0seuGXtH0.jpeg` | PRIVACY | Human-Centric Automation: Designing AI That Empowers Your Workforce | Why the most successful AI implementations focus on augmenting human talent rather than simply replacing it. | Deborah Reachie |
(Which image goes with which column/position: see IMG entries in the dump; card links → `#`.)

Paragraph: "A curated repository of technical frameworks, model benchmarks, and strategic guides for leaders navigating the integration of custom neural architectures."

## Responsive Behavior
- **Phone:** single column: image then text card per article (`seg-mobile-25..26`); big marquee 128px.
- **Tablet:** see tablet excerpt.
