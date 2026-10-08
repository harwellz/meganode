# VisionTech Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/VisionTech.tsx` (client component)
- **Screenshots:** `seg-desktop-05.png` (vision), `seg-desktop-06.png` (tech row); mobile `seg-mobile-08.png`…`seg-mobile-11.png`
- **Interaction model:** scroll-driven per-char reveal (headline), scroll-triggered fade-ins, time-driven animated icons.

## DOM Structure
Dark block (bg rgb(26,26,26), 1440×1618) with two parts:
1. **Vision** (padding `250px 40px 160px`, `rounded-b-[20px]`, z-1): row of two 680px halves.
   - Left: founder photo card 320×320, radius 20, image `jnIpVvHAXWiAGa8gLEmWtRuDwQ.png` (cover), with an inner frame (inset 10px, radius 14, 1px border rgba(255,255,255,0.2)) holding four 11×11 corner marks (L-shaped corner ticks rotated 45°, svg07/svg08 below) at 11px from each corner. Caption (gap 6): "ALEXANDER VACCA" Geist Mono 300 12px/19.2px uppercase white + "Founder & Lead Engineer" Inter Display 300 12px/16.8px rgba(255,255,255,0.7). Column gap 30.
   - Right (width 500, gap 50): `<SectionLabel label="OUR VISION" order="label-first" color="#fff" lineColor="rgba(255,255,255,0.1)" />`; then (gap 40) headline via `ScrollRevealText` (Inter Display 500 56px/60px −3px, `dimColor="rgba(255,255,255,0.1)" color="#fff"`) and paragraph (300 16px/24px +0.32px white).
2. **Tech row** (padding `180px 60px`, z-6, bg rgb(26,26,26), column gap 80):
   - Top row: left half — mono paragraph (Geist Mono 200 12px/20.4px uppercase white, width 380); right half (padding-left 22, space-between) — 4 overlapping white 44px circles (spacing 30px, each with `box-shadow: rgba(0,0,0,0.12) -7px 0 5px 1px`, logo image inverted `filter: invert(1)` at opacity 0.9) that slide in staggered (`FadeIn x={6|12|23|45}`), and `<ExpandButton label="Digital Brain v4.0.2" size="md" tone="coal" />`.
   - Bottom row: 4 feature columns (~343 wide each, first 293): animated icon (~50px tall) + 1px hairline rgba(255,255,255,0.1) + text (Inter Display 300 15px/22.5px +0.3px white, width ~200). Build the icons as small SVG/DOM animations:
     1. Magnifier with sparkle (bg-image data-URI SVGs in the dump) — wobble rotate between −20° and +35°, ~2s ease-in-out alternate.
     2. Orbit/target: ring + dot orbiting — rotate 360° ~6s linear.
     3. Sliders: 4 vertical lines with 7×3 knobs bobbing up/down ±10px at staggered phases (~1.5s).
     4. Language ticker: a narrow window showing 2 of the codes "ZH HI ES FR AR BN PT RU EN DE" (Geist Mono 500 ~10px) with a small ▼ marker above, sliding horizontally in steps.
   Match the screenshots; exact geometry is in the dump.

## Text Content (verbatim)
- "ALEXANDER VACCA" · "Founder & Lead Engineer" · "OUR VISION"
- Headline: "We believe that AI should not just automate tasks, but amplify the creative and strategic potential of every human."
- "By merging technical rigor with intuitive design, we build systems that don't just solve problems—they create entirely new opportunities for growth."
- "ENGINEERING SYSTEMS THAT SCALE WITH YOUR AMBITION. WE LEVERAGE INDUSTRY-LEADING MODELS TO DEPLOY CUSTOM NEURAL SOLUTIONS TAILORED TO YOUR STACK."
- "Digital Brain v4.0.2"
- Features: "Semantic vector search for hyper-accurate retrieval" · "Unified data lakes for expansive model context." · "Token-optimized flows for high speed processing" · "Global LLM deployment. Support for 95+ languages."

## Assets
Founder `jnIpVvHAXWiAGa8gLEmWtRuDwQ.png`; model logos `SMyO8DDP1JPIhoq2Ak1dNFDpGIo.png`, `ss2Osfd5P1AGF1NpgQhGgyGabA.png`, `fQ71Xa5nLv0lmW62RjPI68rMDcU.png`, `Yhx5rRmY8EDv8iMIG0L554Xx3k.png`.

## Responsive Behavior
- **Tablet:** see tablet excerpt.
- **Phone:** vision stacks (photo, caption, label, headline ~36px, paragraph); tech row stacks: mono text, circles, button, then features in a single column (`seg-mobile-10.png`).
