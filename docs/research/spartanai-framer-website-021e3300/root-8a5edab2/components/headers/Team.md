# Team Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Team.tsx` (client component)
- **Screenshots:** `seg-desktop-10.png` (statement), `seg-desktop-11.png`, `state-team-hover.png`; mobile `seg-mobile-15.png`…`seg-mobile-19.png`
- **Interaction model:** hover (card flip/reveal) + fade-ins.

## DOM Structure
Second block inside the dark process section (1360 wide, column, gap ~50 per dump):
1. **Statement** H6 (width ~1200): Inter Display 500 100px/100px −4px white — "We are a collective of engineers, designers, and researchers dedicated to the frontier of AI."
2. **Row** (right half, x 720): paragraph (Inter Display 300 16px/24px +0.32px white, width 380) + `<ExpandButton label="Our Story" size="md" tone="coal" />` (gap ~40, column).
3. **Team grid**: 4 columns (≈330 wide, gap 14), each: photo card 330×402 radius 20 (portrait image cover, a small white 36×20 pill-ring outline at top-right 30px inset, opacity ~0.5), then caption row (padding-left 12, 2px left rule rgba(255,255,255,0.1)): name Geist Mono 500 13px uppercase white + role Inter Display 300 12px/16.8px rgba(255,255,255,0.6).

## States & Behaviors
- **Hover card:** the photo is replaced by a light "glass" card (bg image `ssKw1Uch7OIVz4Suw9U15iwfys.jpg` cover, white/light grey), which grows to cover photo+caption (height ~482): top row = two 28px black circles with X and GitHub icons (svg12/svg13, white) on the left and a black pill-ring logo (36×20, border 4) on the right; quote paragraph Inter Display 400 18px/25.2px ink (padding 20); bottom = name (Geist Mono 500 13px ink) + role (Geist Mono 400 11px, rgba(26,26,26,0.7)) with a left rule. Crossfade ~0.4s. Social links: X → https://x.com/sirdelani, GitHub → https://github.com (target _blank).
- Fade-in on enter.

## Team data
| Name | Role | Photo | Quote |
|---|---|---|---|
| SARAH JENKINS | Head of Machine Learning | `OrsgMbvM0AZiEvhgHFZUJM2g.png` | Our focus remains on the ethical deployment of large-scale models. We don't just optimize for performance; we ensure every neural architecture we build is interpretable, secure, and ready for enterprise-grade scrutiny. |
| MARCUS CHENG | Principal Design Director | `BbqpJjnldDFDulJFBarqs7wJpFk.png` | AI shouldn't feel like a black box. My goal is to design intuitive interfaces that make complex data actionable, ensuring that the human-machine collaboration is seamless, visually stunning, and highly efficient for users. |
| ELENA VANCE | Lead Cognitive Scientist | `8k7FcfFSjgocOslFu94p0ih1UY.png` | We study the cognitive friction between AI output and human decision-making. By applying behavioral science to our agentic workflows, we create tools that naturally align with how your best employees actually think and work. |
| DAVID ROSSI | Infrastructure Architect | `FnCj7jgTvcpKSt0CUVIqbyiS9o.png` | Latency is the enemy of adoption. I architect the backbone of our solutions to ensure that even the most complex RAG systems deliver sub-second responses, maintaining 99.9% uptime across distributed global compute clusters. |

## Text Content (verbatim)
Paragraph: "Bridging the gap between academic research and commercial deployment with precision engineering." · Button "Our Story"

## Responsive Behavior
- **Phone:** statement ~40px (see excerpt); paragraph+button full width; team cards single column full width (~350×430).
- **Tablet:** 2×2 grid.
