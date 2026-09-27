# Hero Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Hero.tsx`
- **Screenshots:** `seg-desktop-00.png`, mobile `seg-mobile-00.png`, `state-mobile-menu-open.png` (shows the card on phone)
- **Interaction model:** static + time-driven (logo marquee, autoplay video) + hover (Digital Brain card).

## DOM Structure
`<section>` white, padding 12px, `relative z-[4]`, overflow clip → inner card 1416×876 (i.e. `h-[calc(100vh-24px)]`-like; use fixed 876 at desktop per dump), bg rgb(240,240,240), radius 20px, padding `190px 0 160px`, overflow clip:
- **Background layer** (absolute inset 0, bottom −10px, z-1): full-cover image `PXNhr4LbXoJRWLAHfzNTYjvdR5Y.png` (object-cover) + a bottom panel (absolute from top 481px to bottom) with `background-image: linear-gradient(rgba(31,31,31,0) 0%, rgba(26,26,26,0.6) 100%)` and an 8-layer progressive backdrop blur (blur 0.039→5px, masks run top→bottom; copy stops from the dump).
- **Content row** (padding 0 40px, space-between, z-4): left column (gap 26) with H1 + paragraph (gap 14) and the Primary button; right: Digital Brain product card 320×303 (z-5).
  - H1 (width 500): Inter Display 500 70px/77px −2.8px; "Scale your ideas." in `rgba(26,26,26,0.4)`, line break, then "Build with AI." in `rgb(26,26,26)` (a span).
  - Paragraph (width 390): Inter Display 300 16px/24px +0.32px ink.
  - `<ExpandButton label="Start Build" size="md" tone="ink" />`
- **Bottom overlay** (absolute, top ≈729.8px, left/right 0, bottom −10px, padding `0 40px 50px`, z-3, column gap 10): white caption (300px wide, Inter Display 400 14px/19.6px +0.28px) + logo marquee row (1336×57).
- **Logo marquee:** `<Marquee speed={25} gap={10} mask="linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 8.03%, #000 92.01%, rgba(0,0,0,0) 100%)">`, radius 10. Items are 189×57 PNG logos (object-cover) — use the IMG files in the order they appear in the dump's `<ul>`.

## Digital Brain card
`<a>` 320×303, bg rgb(26,26,26), radius 24, padding 6, 1px inner border rgba(26,26,26,0.1), column:
- Video box 308×220, bg white, radius 20, overflow hidden: `<video autoPlay muted loop playsInline>` src `spVideo("2WO0ZC7yTbYNkxdTbPKkcOs30s.mp4")`, object-cover, z-3.
- Caption row (308×71, padding 14, z-3): "Digital Brain" (Inter Display 400 15px/21px ink) and "// Model v4.0.2" (300 12px/16.8px +0.12px, rgba(26,26,26,0.7)), gap 5; arrow icon 26×26 absolute at left 258px, vertically centred — Phosphor light "arrow-right" (svg01 below), colour rgb(31,31,31).
- Light overlay (absolute inset 0, z-2): image `i8M81i0PeB8FDxgPt1GPDik2kA.jpg` (object-cover) — so at rest the card body looks light.
- **Hover (~0.4s ease-out):** overlay opacity 1 → 0 (card body becomes dark), title → #fff, subtitle → rgba(255,255,255,0.5), arrow → #fff and moves from left 258 → 268.

## Text Content (verbatim)
- "Scale your ideas." / "Build with AI."
- "Deploy custom neural agents, LLMs, and automation in one seamless flow."
- "Start Build"
- "Digital Brain" / "// Model v4.0.2"
- "+2,400 active deployments and 8,200 brands trust our high-performance architecture."

## Responsive Behavior
- **Tablet (810–1199):** H1 56px/61.6px −2.24px; layout per tablet excerpt.
- **Phone (≤809):** section ~971px tall; H1 45px/49.5px −1.8px; stack: heading, paragraph, button, then the Digital Brain card full-width; caption + logo marquee at the bottom. See the phone excerpt for exact paddings/sizes.
