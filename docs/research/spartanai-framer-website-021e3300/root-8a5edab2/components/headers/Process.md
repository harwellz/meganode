# Process Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Process.tsx` (client component)
- **Screenshots:** `seg-desktop-09.png`, `seg-desktop-10.png` (top), `state-proc-04.png`; mobile `seg-mobile-14.png`, `seg-mobile-15.png`
- **Interaction model:** **click-driven accordion** (single open, first open by default) + fade-ins + floating illustration.

## DOM Structure
Rendered inside the dark process section (the page renders the outer `<section>` bg rgb(26,26,26) with padding `250px 40px 200px`, gap 250 between Process and Team). This component = the 1360-wide column (gap between blocks per dump, ~50):
1. `<SectionLabel label="OUR PROCESS" order="label-first" color="#fff" lineColor="rgba(255,255,255,0.1)" />` (full width 1360).
2. H2 (width 800 container, text ~540): Inter Display 500 54px/59.4px −2.16px white.
3. Row (height 445, gap 10): 
   - Illustration card 400×445, radius 20, 1px border rgba(255,255,255,0.1), overflow clip: background pattern image `QRyW2z7jtn8Iu8Ohz7dYmwxFJo.png` + floating illustration 300×300 `liXydHdt7Kdt6VKUzzjSZwFJ4FA.png` (sp-bob ±6px ~3s).
   - Accordion (flex 1, column, gap 10): 4 items. Collapsed item: height 81, radius 20, 1px border rgba(255,255,255,0.1), padding ~0 30px, row: "// 0N" (Inter Display 400 16px, rgba(255,255,255,0.5)) + title (Inter Display 500 18px/19.8px −0.72px white), gap ~30. Expanded item: height ~172, bg rgb(36,36,36), shows a tag pill at right (white bg, radius 100, Geist/IBM Plex Mono 400 11px/16.5px −0.33px uppercase ink, padding 4 10) and the description (Inter Display 300 15px/22.5px +0.3px white, width ~590) under the title.
4. CTA row (height 65): left mono text (Geist Mono 200 12px/20.4px uppercase white, width ~600) + right `<ExpandButton label="Build Now" size="md" tone="coal" />`.

## States & Behaviors
- Click a collapsed item → it expands (height 81 → 172, bg transparent → rgb(36,36,36), description fades in) and the open one collapses. ~0.5s ease-out.
- Fade-in on enter for label, heading, illustration card, accordion, CTA row.

## Accordion data
| # | Title | Tag | Description |
|---|---|---|---|
| // 01 | Comprehensive Strategic Audit | AUDIT | We perform a deep-layer analysis of your current technical stack and fragmented data silos to identify high-impact AI opportunities that align with your core business objectives and ROI targets. |
| // 02 | Custom Architecture Design | DESIGN | Our engineers architect bespoke neural model topologies and advanced RAG pipelines, ensuring every piece of the infrastructure is tailored to your unique data security needs and operational logic. |
| // 03 | Rapid Prototype Development | BUILD | We transition from blueprints to functional MVPs within weeks, utilizing iterative sprints to validate model performance, optimize token latency, and refine the end-user interaction experience. |
| // 04 | Enterprise Scale Deployment | SCALE | We harden the validated system for full-scale production, ensuring seamless integration across your enterprise with robust monitoring, dedicated compute clusters, and strict SOC2 compliance layers. |

## Text Content (verbatim)
"OUR PROCESS" · "From raw data to refined intelligence. Our iterative deployment cycle." · "WE DON'T JUST SHIP CODE; WE SHIP COMPETITIVE ADVANTAGES. EVERY STEP IS DESIGNED TO ENSURE YOUR AI INFRASTRUCTURE IS FUTURE-PROOF AND SCALABLE." · "Build Now"

## Responsive Behavior
- **Phone:** heading ~36px; illustration card full-width on top, accordion below full-width, CTA row stacks (`seg-mobile-14..15`).
- **Tablet:** see tablet excerpt.
