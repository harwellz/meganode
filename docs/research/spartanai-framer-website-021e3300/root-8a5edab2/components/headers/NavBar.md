# NavBar Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/NavBar.tsx` (client component)
- **Screenshots:** `docs/design-references/spartanai-framer-website-021e3300/root-8a5edab2/seg-desktop-00.png` (top), `state-mobile-menu-open.png`
- **Interaction model:** static fixed overlay; hover on links; click hamburger (phone) toggles menu.

## DOM Structure
Three fixed layers (all `position: fixed`):
1. **Top progressive blur** — `inset-x-0 top-0 h-[90px] z-[7] pointer-events-none`, 8 stacked absolute layers (z 1..8), `backdrop-filter: blur(0.0390625px | 0.078125px | 0.15625px | 0.3125px | 0.625px | 1.25px | 2.5px | 5px)`, each with the `mask-image` band listed in the dump (`linear-gradient(to top, …)`). Copy the exact mask stops.
2. **Link pill (≥810px)** — fixed `top:30px; left:30px; z-10`, white `rounded-full`, padding `5px 26px 5px 5px`, gap 24px, height 44. Contains logo link (60×34 ring: `LogoPill width={60} height={34} border={6} color="rgb(26,26,26)"`) then the link row (gap 0): Works, Services, Insights, Pricing, Company. Each link padding `7px 16px`, text Inter Display 400 14px/19.6px +0.28px ink, **opacity 0.65**.
3. **Hire Team button (≥810px)** — fixed `top:30px; right:30px; z-10`: `<ExpandButton label="Hire Team" size="sm" tone="white" />` (140×42).

Phone (≤809): both desktop pieces are replaced by ONE fixed pill `top:20px; left:20px; right:20px; z-10`, white, radius 20px, padding `5px 16px 5px 5px`, containing a row `justify-between`: the 60×34 logo ring and a 40×33 hamburger (two bars 40×6, `rgb(26,26,26)`, radius 100px, at top 8px and top 19px).

## States & Behaviors
- **Link hover:** opacity 0.65 → 1 and `scale(1.1)`, transition ~0.3s ease-out.
- **The nav never changes on scroll.**
- **Phone menu (click hamburger):** the pill grows (height transition ~0.4s) into a white card (radius 20px) listing the 5 links vertically (Inter Display 300 ~18px, ink at 0.65 opacity, ~59px row pitch, left padding ~20px), then a full-width `<ExpandButton label="Hire Team" size="md" tone="coal" />` at the bottom with ~20px side/bottom inset. The two bars animate into an ✕ (rotate ±45°, meeting in the middle). Clicking a link or the ✕ closes it.

## Links
Works → `#`, Services → `#capabilities`, Insights → `#`, Pricing → `#pricing`, Company → `#`, logo → `#`, Hire Team → `#`.

## Responsive Behavior
- **Desktop (≥1200) & Tablet (810–1199):** desktop layout (pill left + Hire Team right) — identical at 1000px.
- **Phone (≤809):** single full-width pill with hamburger (phone excerpt below).
