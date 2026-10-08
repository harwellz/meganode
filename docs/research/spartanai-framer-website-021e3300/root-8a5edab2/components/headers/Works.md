# Works Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Works.tsx`
- **Screenshots:** `seg-desktop-02.png`, `seg-desktop-03.png`; mobile `seg-mobile-03.png`…`seg-mobile-06.png`
- **Interaction model:** time-driven (big marquee) + hover (cards) + scroll-triggered fade-in (cards, per row).

## DOM Structure
This is the TOP part of a dark section: the outer `<section>` (bg rgb(26,26,26), `relative z-[4]`) is rendered by the page; this component renders the **white block** that sits inside it with `rounded-b-[20px]`, bg #fff, `relative z-[2]`, padding-bottom 180px, overflow clip, and a 1px bottom hairline rgba(26,26,26,0.06).
1. **Big marquee** row: padding `180px 0 30px` → `<BigMarquee title="Our Works" />`.
2. **Card grid** wrapper: padding `0 40px`, 1px top+bottom hairlines rgba(26,26,26,0.06). Rows are CSS grids `grid-template-columns: 440px 440px 440px` (use `repeat(3, 1fr)` within 1360px), column gap 20px, each row has a bottom hairline. Row 1: cards 1–3, Row 2: cards 4–5 (third cell empty).
3. **Card** (`<a>` 440×482, padding 16, vertical hairlines left/right rgba(26,26,26,0.06)): inner box 408×450, bg rgba(26,26,26,0.03), radius 20, padding 1, gap 1, column:
   - **Top panel** 406×302, bg #fff, radius `19px 19px 10px 10px`, padding 10, overflow clip:
     - Tag pill (z-2): bg #fff, radius 100, padding `8px 16px 7px`, 1px border rgb(219,219,219); text Geist Mono 400 10px/16px uppercase ink.
     - Logo (z-1): 189×57 image centred (absolute, centred via translate(-50%,-50%) at the panel centre), `filter: invert(0.73)`.
     - Hover image (z-0): absolute top 0, left/right −17px, bottom −28.4px (440×330), object-cover, **opacity 0**.
   - **Stats grid** 406×145: 2×2 grid, gap 1, radius `10px 10px 19px 19px`; each cell bg #fff radius 10, padding `14px 11px 15px 15px`, gap 4: value (Geist Mono 500 16px/22.4px, rgba(26,26,26,0.7)) + label (Inter Display 300 12px/16.8px +0.12px, rgba(26,26,26,0.7)).

## States & Behaviors
- **Card hover (~0.4s ease-out):** inner box bg rgba(26,26,26,0.03) → rgba(26,26,26,0.8); top panel bg #fff → transparent; logo grows 189×57 → 199×60 and `filter: invert(0.73)` → `invert(0)` (logos are white PNGs, so they read grey at rest and white on hover); hover image opacity 0 → 0.54 and grows 440×330 → 480×363 (left −17 → −37px).
- **Fade-in:** each card row fades in (opacity 0→1) when entering the viewport.

## Card data (in order)
| # | Tag | Logo | Hover image | $ | % | x | Partnerships |
|---|---|---|---|---|---|---|---|
| 1 | Healthcare AI | `yV2zGDqTwUzGafOnvA53MLQkM.png` (cigna) | `sZxYLpvH56E3RznKPcnAPYlPvo.jpg` | $45M+ | 700% | 41x | 84 |
| 2 | Healthcare | `CLpXi6HupcG6YYxVylXG8rj7eo4.png` (aetna) | `4GMiBYbu9SI4dXo9ENcqlNA.jpg` | $62M+ | 450% | 32x | 91 |
| 3 | Healthcare | `RlGLod5QkyznR4SBy9PQw3raa80.png` (Anthem) | `0g3E5eja3ueYAXkITtsy9quyYo.jpg` | $82M+ | 340% | 19x | 56 |
| 4 | Retail & Logistics | `3ICxPpL7nA6WiDyreZSZlU70E8.png` (CVS) | `ZK0k9kMGgE21P7r3puSMYZ8548.jpg` | $59M+ | 215% | 73x | 28 |
| 5 | Cybersecurity | `qA80rXn5OyEhaPlYKJ8gIEE6Ds.png` (UnitedHealthcare) | `LYQLqywSoqlHG7KLRJM70MIk.png` | $94M+ | 120% | 66x | 12 |
Stat labels: "Funds raised", "Social growth", "ATH ROI", "Partnerships". All card links → `#`.

## Responsive Behavior
- **Tablet:** 2-column grid (see tablet excerpt), big marquee 160px.
- **Phone:** single column of full-width cards; on phone the hover image is shown (cards appear dark with the image, as in `seg-mobile-04.png`) — check the phone excerpt for the resting opacity; big marquee 128px.
