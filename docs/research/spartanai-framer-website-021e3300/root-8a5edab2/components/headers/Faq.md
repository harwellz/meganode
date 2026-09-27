# Faq Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Faq.tsx` (client component)
- **Screenshots:** `seg-desktop-13.png` (bottom), `seg-desktop-14.png` (top), `state-faq-open.png`; mobile `seg-mobile-22.png`, `seg-mobile-23.png`
- **Interaction model:** click-driven accordion (first item open by default; clicking the open item closes it) + hover scale + fade-ins.

## DOM Structure
Top part of the light card section (the page renders the outer `<section>` white with padding `0 12px 12px`, `rounded-b-[20px]` bottom corners, and the inner card bg rgb(240,240,240) radius 20 padding `12px 40px`). This component = the FAQ block: padding `180px 0 30px`, 1336 wide, row of two 668px halves (height 576):
- **Left** (column, `justify-between`, padding-right ~70): top (width 500, gap 50): `<SectionLabel label="COMMON QUERIES" order="pill-first" />` + paragraph (Inter Display 300 16px/24px +0.32px ink). Bottom (gap 40): H2 "Everything you need to know about our AI." (Inter Display 500 54px/59.4px −2.16px ink, width ~600) + `<ExpandButton label="Contact Support" size="md" tone="ink" />`.
- **Right** (668 wide, column gap 6): 7 items. Each item bg rgb(26,26,26), radius 20, padding ~20px 20px, cursor pointer:
  - Row: question (Inter Display 500 20px/28px −0.4px, white) + icon 16×16 white on the right: "+" when closed, "×" when open (svg15 is the open-state icon; closed = same icon rotated 45°).
  - Answer (open only): Inter Display 300 16px/24px +0.32px, rgba(255,255,255,0.8), margin-top ~14, max width ~580.
  - Closed height 68, open ~132.
- **Hover:** item `scale(1.05)` and shadow `rgba(0,0,0,0) 0 8px 13px 3px` → `rgba(0,0,0,0.25) 0 16px 13px -5px`, ~0.3s.
- **Click:** toggles; only one open at a time. Height animates ~0.4s, answer fades in.

## FAQ data
1. How do you ensure our data remains secure? — We utilize SOC2-compliant local vector databases and on-premise LLM hosting to ensure your proprietary data never leaves your infrastructure. *(open by default)*
2. What is the typical deployment timeline? — Initial neural audits take 1 week, followed by a 4-week rapid prototyping phase before full-scale production deployment.
3. Can we integrate with our existing CRM? — Yes, our cognitive pipelines are built with native API connectors for Salesforce, HubSpot, and custom enterprise ERP systems.
4. Do you provide model fine-tuning? — Absolutely. We offer bespoke fine-tuning services to align open-source models (like Llama 3) with your specific industry terminology and logic.
5. How do you calculate ROI for automation? — We track "Inference-to-Impact" metrics, measuring hours saved and accuracy gains against your previous baseline manual workflows.
6. Do we own the custom code you build? — Yes. All custom neural architectures and integration code developed for your firm are 100% owned by you upon project completion.
7. What models do you specialize in? — We are model-agnostic, specializing in OpenAI, Anthropic, and Mistral, as well as local deployments of high-performance open-source LLMs.

## Text Content (verbatim)
"COMMON QUERIES" · "Find answers to technical specifications, deployment timelines, and our data security protocols." · "Everything you need to know about our AI." · "Contact Support"

## Responsive Behavior
- **Phone:** columns stack (text block first, then items full width); question 16px (see phone excerpt).
- **Tablet:** see tablet excerpt.
