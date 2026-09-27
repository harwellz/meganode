# Testimonials Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Testimonials.tsx` (client component)
- **Screenshots:** `seg-desktop-06.png` (bottom), `seg-desktop-07.png`, `state-testimonials-0.png`, `state-testimonials-next.png`; mobile `seg-mobile-11.png`, `seg-mobile-12.png`
- **Interaction model:** click-driven carousel (Prev/Next) + time-driven big marquee & ticker + fade-in.

## DOM Structure
`<section id="test-2">` bg #fff, `relative z-[4]`, overflow clip:
- **Dark strip** absolute top 0, full width, height 20px, bg rgb(26,26,26), `rounded-b-[20px]`, z-9 (continues the dark section's rounded bottom).
- **Header** (padding `170px 0 120px`, z-2, gap 40): `<BigMarquee title="Experiences" />`; below it a row split 50/50: left half has a 1px hairline (720×1 at mid-height, rgba(26,26,26,0.1)), right half has the description (Inter Display 300 16px/24px +0.32px ink, width ~390) and under it (gap ~24) two 40×40 circular buttons (bg rgb(26,26,26), white chevron icons, gap 10; aria-labels "Previous"/"Next").
- **Carousel** (padding `0 30px`, z-2, height 394): the track starts at x≈720 (right half) but bleeds across the whole width to the left and right. Cards 285×394, gap 16, radius 20, bg rgb(240,240,240), padding ~20:
  - Header chip: pill (bg #fff, radius 100, height ~44, padding 4 14 4 4) with avatar 36px circle + company logo image (~60×18, dark).
  - Quote icon (svg09, 24×24, rgba(26,26,26,0.2)) then quote text Inter Display 400 21px/25.2px −0.21px ink (5 lines).
  - Footer with 2px left rule rgba(26,26,26,0.1) (padding-left 12): name Geist Mono 500 13px uppercase ink + role Inter Display 300 12px/16.8px rgba(26,26,26,0.6).
- **Ticker** at the bottom (padding-bottom 30, gap 180 above): `<AnnouncementTicker />` inside a 0-height relative wrapper (see "Variant 1").

## States & Behaviors
- Carousel is an infinite loop: render the 4 cards repeated (e.g. ×5) and start translated so the card sequence begins at x≈720 with earlier copies visible on the left (initial translateX −1204px in the original track).
- **Next:** translate the track by −903px (3 × 301); **Previous:** +903px. Transition ~0.6s cubic-bezier(0.22,1,0.36,1). Wrap seamlessly (reset without animation when passing the ends).
- No autoplay.

## Card data (order)
1. Avatar `w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg`, logo `3EwtMm1CTn3V13Xu2ufZVUnW4.png` — "The custom agentic workflows they built reduced our manual data entry by 90%, saving us hundreds of hours weekly." — MARCUS CHENG, Head of AI, Aetna
2. Avatar `rLkyXpp1TSaADDj0EYjy9c8uw.jpg`, logo `yV2zGDqTwUzGafOnvA53MLQkM.png` — "Their team didn't just provide tools; they provided a roadmap for AI integration that actually makes sense for ROI." — DAVID ROSSI, Lead Dev, Cigna
3. Avatar `IIK9uqdpvVqpPgAHuhf8s9r4Ee4.jpg`, logo `RlGLod5QkyznR4SBy9PQw3raa80.png` — "A game-changer for our R&D. The neural infrastructure is robust, secure, and perfectly tailored to our niche stack." — SARAH JENKINS, CTO, Anthem Group
4. Avatar `QHChEEbpWFuUCrhS6zqN5BK4Rr0.jpg`, logo `qA80rXn5OyEhaPlYKJ8gIEE6Ds.png` — "Incredible technical depth. They handled our complex RAG implementation with ease and delivered ahead of schedule." — ELENA VANCE, VP Eng, UnitedHealth
(Logos are white PNGs shown dark: apply `filter: invert(1)` or brightness(0) as needed to match the screenshot.) Cards link to `https://contra.com/sirdelani/work?r=sirdelani` (target _blank).

## Text Content
Description: "Empowering global enterprises through bespoke neural architectures and autonomous agentic workflows."

## Responsive Behavior
- **Phone:** big marquee 128px; description + arrows full width (padding 20); carousel shows ~1.2 cards (card 285 wide) starting at the left padding (`seg-mobile-12.png`); arrows shift by 1 card.
- **Tablet:** see tablet excerpt.
