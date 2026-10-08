# Pricing Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Pricing.tsx` (client component)
- **Screenshots:** `seg-desktop-12.png`, `seg-desktop-13.png`, `state-pricing-toggled.png` (Monthly); mobile `seg-mobile-19.png`…`seg-mobile-22.png`
- **Interaction model:** click-driven billing toggle + time-driven big marquee & ticker + staggered fade-in of plan cards.

## DOM Structure
`<section id="pricing">` bg #fff, `relative z-[4]`, overflow clip:
1. **Header** (padding `150px 0 60px`, z-2, gap 40): `<BigMarquee title="Pricing" />`; then a row (padding 0 40px, align-end, height 72): left half — billing toggle; right half — description (Inter Display 300 16px/24px +0.32px ink, width ~380).
   - **Toggle:** "Monthly" (Inter Display 300 14px ink) · switch 50×22 track (radius 100, 1px border rgba(26,26,26,0.1), bg rgba(26,26,26,0.03)) with a 28×28 dark knob (bg rgb(26,26,26), radius 100) containing a white check icon (svg14, 16×16) · "Annually" · "(Save 20%)" (12px, rgba(26,26,26,0.4)). Default = **Annually** (knob on the right). Clicking the switch (or labels) toggles; knob slides left/right ~0.3s.
2. **Plans** (padding `0 40px`, z-10, then 180px gap, then the ticker): a 1360×553 container, 1px border rgba(26,26,26,0.1), radius 20, overflow clip, 4 equal columns separated by 1px (gap 1, bg hairline). Each plan column (339 wide):
   - **Top block** (height ~215, padding `46px 30px 40px 24px`, bg image cover `lu9xdgbj7zB5GkewV6UCW9Y68.jpg` light waves; Pro uses the dark wave image from the dump): name (Inter Display 600 30px/36px ink; white on Pro), price row (price Inter Display 300 54px/59.4px −2.16px + "/mo" 14px/21px 300 rgba(26,26,26,0.6) raised −10.5px), "USD Billed Annually" (300 14px/21px).
   - **Middle block** (height ~115, bg rgb(240,240,240); Pro rgb(41,40,40); padding `20px 20px 0 24px`, gap 25, borders per dump): tagline (Inter Display 400 16px/24px) + `<ExpandButton size="sm" label="Get started" …/>` — Core/Growth/Scale: `tone="coal"` with `borderColor="rgba(255,255,255,0.2)"`; Pro: `tone="white"` with `borderColor="rgba(26,26,26,0.1)"`. Link `https://contra.com/sirdelani/work?r=sirdelani` (external).
   - **Features block** (bg image continues): 4 lines Inter Display 300 14px/21px, gap ~10, rgba(26,26,26,0.7) (Pro: white).
3. **Ticker**: `<AnnouncementTicker />` in a 0-height wrapper at the bottom (padding-bottom 40).

## States & Behaviors
- Toggle → Monthly: prices Core $618, Growth $1,570, Pro $3,650, Scale $9,380; caption "USD Billed Monthly". Annually (default): $495, $1,250, $2,900, $7,500; "USD Billed Annually".
- Plan columns fade in left→right (delays 0, 0.1, 0.2, 0.3s).

## Plan data
| Plan | Tagline | Features |
|---|---|---|
| Core | Automate your repetitive tasks. | 3 Automation Flows · Standard RAG Support · 1 Admin Seat · Discord Support |
| Growth | Advanced agentic workflows. | 10 Automation Flows · Vector DB Hosting · 5 Admin Seats · Priority Email |
| Pro (dark) | Custom neural architecture. | Unlimited Flows · Custom Fine-Tuning · 15 Admin Seats · 24/7 Slack Connect |
| Scale | Enterprise infrastructure. | Full Neural Stack · On-Premise LLMs · Unlimited Seats · Dedicated Engineer |

Description: "Flexible intelligence tiers designed to scale alongside your business. No hidden costs, just high-performance results."

## Responsive Behavior
- **Tablet:** 2×2 plan grid (see tablet excerpt).
- **Phone:** single column; plans stacked with 1px separators; toggle below the description (`seg-mobile-19..22`). Phone price 35px/38.5px 300 (see `w390-mobile-menu-open.txt` capture of the Core card: name 28px/33.6px 600).
