# Capabilities Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Capabilities.tsx` (client component)
- **Screenshots:** `seg-desktop-04.png` (001 active), `state-cap-002.png` (002 active); mobile `seg-mobile-07.png`, `seg-mobile-08.png`
- **Interaction model:** **click-driven horizontal accordion** (no scroll or hover switching) + scroll-triggered fade-in + time-driven floating illustration.

## DOM Structure
Rendered on the dark section background (rgb(26,26,26)); root element `id="capabilities"`, padding `250px 40px 0`, row of two 680px halves (height 630):
- **Left column** (680×630, padding-right 70, `justify-between`):
  - Top (width 500, gap 50): `<SectionLabel label="CAPABILITIES" order="pill-first" color="#fff" lineColor="rgba(255,255,255,0.1)" />` + paragraph (Inter Display 300 16px/24px +0.32px, white).
  - Bottom (gap 40): H2 (width 600) Inter Display 500 54px/59.4px −2.16px white + `<ExpandButton label="Start Build" size="md" tone="coal" />`.
- **Right column** (680×630): flex row, gap 10: three cards. Active card width 480, inactive width 90; all height 630, radius 20.
  - **Active card:** bg transparent (rgba(255,255,255,0)), 1px border rgba(255,255,255,0.2). Top text block (padding `30px 70px 0 30px`, gap 20): H3 Inter Display 500 28px/39.2px −0.28px white + description (300 14px/21px +0.28px white, width 380). Number pill absolute top 14 right 14: padding `10px 20px`, radius 100, 1px border (white alpha), text Geist Mono 200 12px/20.4px uppercase white. Background pattern image absolute top 130 → bottom, opacity 0.18, `mask-image: linear-gradient(0deg, #000 70.15%, transparent 100%)`. Illustration 270×270 image centred at (left 240px, top ~221.5px + centre) floating (sp-bob, ~3s, ±6px).
  - **Inactive card:** bg rgba(255,255,255,0.04), 1px border rgba(255,255,255,0.1)-ish, number pill at top (centred), vertical title at the bottom: Geist Mono 400 13px uppercase rgba(255,255,255,0.7), `writing-mode: vertical-rl; transform: rotate(180deg)` (reads bottom→top), padding 10, bottom 30px.
- **Click an inactive card** → it becomes active (width 90 → 480) and the previous active shrinks (480 → 90); inner content cross-fades (opacity). Transition ~0.5s ease-out.

## Card data
| # | Title | Description | Pattern (bg) | Illustration |
|---|---|---|---|---|
| 001 | Autonomous Agent Architecture Labs | Architecting robust server environments and local LLM integrations to ensure data remains secure and local. | `qWpzthqQ4FGQWP39IeKgah1OP8.png` | `WTuFQeqWgOcQVCks16yKxgDaefI.png` |
| 002 | Autonomous Agentic Workflows | Building self-optimizing task bots that handle complex multi-step workflows with zero human intervention. | `pEct5trUmjDYAblzuKYq2MpHaA.png` | `In0V7veBPGhnSUzXqR7lATUDvE.png` |
| 003 | Data Pipelines & RAG Systems | Streamlining data ingestion and processing using advanced RAG systems for real-time business intelligence. | `qWpzthqQ4FGQWP39IeKgah1OP8.png` | `T1zAekOylQHr0GPPBMBKhmpUeI.png` |
Vertical titles are the same strings, uppercase.

## Text Content (verbatim)
"CAPABILITIES" · "We bridge the gap between abstract machine learning and practical business utility through bespoke engineering." · "Tailored Intelligence for Modern Enterprises." · "Start Build"

## Behaviors
- Label block, paragraph, H2, button and cards fade in on enter (`FadeIn`).

## Responsive Behavior
- **Tablet:** see tablet excerpt (columns stack; cards area full width).
- **Phone:** text stacked on top; cards become a vertical accordion list: active card full-width (~600px tall) and inactive cards as ~90px-tall horizontal rows showing number pill + title in one line (see `seg-mobile-08.png`); clicking a row activates it.
