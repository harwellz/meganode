# Design Tokens — spartanai.framer.website

Source: `tokens-raw.json` (frequency counts of computed styles across the page).

## Colors
| Token (CSS var) | Value | Usage |
|---|---|---|
| `--sp-ink` | `rgb(26, 26, 26)` #1a1a1a | primary text, dark sections, dark buttons |
| `--sp-white` | `#ffffff` | page bg, text on dark |
| `--sp-mist` | `rgb(240, 240, 240)` #f0f0f0 | hero/about/FAQ card bg, asterisk strokes |
| `--sp-coal` | `rgb(36, 36, 36)` #242424 | raised surfaces on dark (process active row, cards) |
| `--sp-pixel` | `rgb(31, 31, 31)` #1f1f1f | pixel-arrow fill, secondary icon boxes |
| `--sp-stone` | `rgb(214, 214, 214)` #d6d6d6 | article cards |
| ink alphas | 0.03 / 0.06 / 0.1 / 0.4 / 0.6 / 0.7 / 0.8 | card fills, hairlines, muted text |
| white alphas | 0.04 / 0.06 / 0.1 / 0.4 / 0.5 / 0.7 / 0.8 | same on dark |

## Typography
| Family | Weights | Source | CSS var |
|---|---|---|---|
| Inter Display | 300, 400, 500, 600, 700 | self-hosted latin woff2 (framerusercontent) | `--font-inter-display` |
| Inter | 400 | `next/font/google` | `--font-inter` |
| Geist Mono | 200, 300, 400, 500 | `next/font/google` | `--font-geist-mono` |
| IBM Plex Mono | 400, 500 | `next/font/google` | `--font-ibm-plex-mono` |
| Jaini | 400 | `next/font/google` | `--font-jaini` |

Most-used type styles (family | weight | size | line-height | letter-spacing):
- Display marquee: Inter Display | 700 | 200px | 220px | -8px
- Hero H1: Inter Display | 500 | 70px | 77px | -2.8px
- Section headline (char reveal): Inter Display | 500 | 56px | 60px | -2px / -3px
- Large heading: Inter Display | 500 | 54px | 59.4px | -2.16px
- Collective statement: Inter Display | 500 | 100px | 100px | -4px
- Card title: Inter Display | 500 | 28px | 39.2px | -0.28px; 30px/600/36px
- Body L: Inter Display | 400 | 21px | 25.2px | -0.21px (testimonial quotes)
- Body: Inter Display | 300 | 16px | 24px | 0.32px
- Body S: Inter Display | 300 | 14px | 21px | 0.28px; 400 14px/19.6px/0.28px (nav, buttons)
- Caption: Inter Display | 300 | 12px | 16.8px | 0.12px
- Mono label: Geist Mono | 500 | 16px | 22.4px; IBM Plex Mono | 500 | 13px | 20.8px; IBM Plex Mono 400 11px/16.5px/-0.33px (tags)
- Number font: Jaini 400 16px/19.2px

## Radii
20px (section cards), 100px (pills), 12px/10px (buttons & icon boxes), 14px (small buttons), 16–24px (cards).

## Breakpoints
Desktop ≥1200 · Tablet 810–1199 · Phone ≤809.
