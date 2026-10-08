# VideoShowcase Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/VideoShowcase.tsx` (client component)
- **Screenshots:** `seg-desktop-08.png`, `state-video-play.png`; mobile `seg-mobile-13.png`
- **Interaction model:** click-driven (play → YouTube modal) + hover on play button.

## DOM Structure
`<section>` 1440×855, `relative z-[4]` → inner (bg rgb(26,26,26), overflow clip, centred):
- Full-cover background photo `Y43VBCJU98vH9ESfLTOmhYvVKjY.jpg` (object-cover).
- Top-left paragraph (x 40, y ~150, width ~390): Inter Display 300 16px/24px +0.32px white.
- Top-right pill "2mins watch": stopwatch icon (svg10, 24×24 white) + text Inter Display 400 14px white; pill 1px border rgba(255,255,255,0.2), radius 100, padding ~8px 14px 8px 10px, backdrop blur.
- Centre play button: 116×116 circle, 1px white border, play triangle (svg11, 32×38, white) centred.
- Bottom-left H2 "Intelligence by Design." Inter Display 500 54px/59.4px −2.16px white, width ~380, at y ~680.
- Bottom-right: large white Spartan ring logo (~135×80, border ~16px white) at x ~1265, y ~720 (see dump for exact).

## States & Behaviors
- **Play hover:** the ring shrinks & fades (opacity 1 → 0, 115px → 1px, ~0.4s) while the play triangle scales up 38×32 → 101×85.
- **Click play:** open an overlay covering the section (or fixed full screen) with black bg and an `<iframe src="https://www.youtube.com/embed/8AHPXm9Y6mI?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen>` filling it, and a white ✕ close button (36px lines) top-right (~40px inset). Close removes the iframe.

## Text Content (verbatim)
"Exploring the intersection of human creativity and machine logic to redefine what's possible in the digital age." · "2mins watch" · "Intelligence by Design."

## Responsive Behavior
- **Phone:** section ~600 tall per phone excerpt; heading at top-left, ring logo below, play button centred lower; paragraph and pill below heading (`seg-mobile-13.png`).
