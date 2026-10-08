# Behaviors — spartanai.framer.website

Raw evidence: `behav-raw.txt` (time-driven), `scroll-raw.txt` (scroll-driven), `hover-raw.txt`, `click-raw.txt`, `click2-raw.txt`, `click3-raw.txt`, `click4-raw.txt`.
Framer animates with JS springs; CSS equivalents below use `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out) unless noted.

## Global
- No smooth-scroll library (no Lenis / Locomotive). Native scrolling.
- **Breakpoints (Framer):** desktop ≥1200px, tablet 810–1199px, phone ≤809px.
- **Fixed nav** (z 10): pill nav top-left (top 30, left 30) + "Hire Team" button top-right (top 30, right 30). Phone: single full-width pill (top/left/right 20) with logo + hamburger (two 40×6 bars). Nav does NOT change on scroll.
- **Top progressive blur** (fixed, 0–90px, z 7): 8 stacked layers with backdrop-filter blur 0.039/0.078/0.156/0.3125/0.625/1.25/2.5/5px, each masked with a moving `linear-gradient(to top, …)` band — content scrolling under the nav gets progressively blurred toward the top edge.
- **Footer reveal:** footer is `position: fixed; inset: 0; z-index: 1` behind the page. The page content (z above) ends with a rounded bottom edge; the document has ~775px of extra space after the last section so the fixed footer is revealed as the content scrolls away.
- **Scroll-triggered fade-in (appear):** most blocks start at `opacity: 0` and animate to 1 when they enter the viewport (≈ top of element reaches ~85–100% viewport height). Duration ~0.6–0.8s, no transform. Includes: section labels, paragraphs, headings, buttons, work cards (by row), capability cards, pricing cards (staggered left→right ~0.1s), FAQ blocks, article cards.
- **Staggered slide-in:** the 4 overlapping AI-model logo circles in the Tech row fade in with `translateX(45px → 0)` staggered (rightmost has the largest offset).

## Time-driven (continuous)
- **Pixel arrow icon** (every button's icon box): 10×5 grid of 3px squares; a ">>" double chevron scrolls right, 14 frames, ~100ms/frame, loops. Filled cell pattern at frame s, row r (row offsets [0,1,2,1,0]): cell c is on if `((c - s - off[r]) mod 14) ∈ {2,3,6,7}`.
- **Hero logo marquee:** row of 10 logo PNGs (189×57, gap 10), scrolls left ~25px/s, infinite, edge-faded with mask `linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)`.
- **Big title marquees** ("Our Works", "Experiences", "Pricing", "Insights"): 200px/700 Inter Display text + rotating asterisk, gap 60px, scrolls left ~30px/s infinitely.
- **Asterisk** (6 strokes, color rgb(240,240,240), 151×151 viewBox, stroke-width 17): rotates continuously ~15°/s (≈24s per turn). Inside the dark Insights area the asterisk is white.
- **Announcement ticker** ("//SPARTAN" pill + sentence): scrolls left ~70px/s, gap 100px, appears at bottom of About section, bottom of Testimonials section, and below Pricing.
- **Testimonials card track**: static between clicks (not auto-playing). It is an infinite-loop carousel (cards repeated; initial translateX −1204px so partial cards bleed off both edges). Prev/Next arrow buttons shift it by 3 cards (903px = 3 × (285 + 16)) with a ~0.6s ease.
- **Tech icons:** magnifier wobble-rotates ±20°; slider knobs (7×3 bars) bob up/down; language ticker ("ZH HI ES FR AR BN PT RU EN DE") slides horizontally; target/orbit icon rotates.
- **Floating illustrations:** capability illustration ("Group 117", 270×270) and process illustration (300×300) bob vertically ±6px, ~3s loop.
- **Hero "Digital Brain" card:** autoplaying muted looping mp4.

## Scroll-triggered count-up
- About bento: "$45M" counts from "$0M" and "5x" from "0x" when the cards enter the viewport, ~1.6s, ease-out (integer steps).

## Scroll-driven
- **Per-character color reveal:** the About headline ("Automate the manual, …") and the Vision headline ("We believe that AI …") render each char as a span; chars go from 10% alpha to full color progressively as the heading scrolls through the viewport (start ≈ heading top at 85% vh, end ≈ heading bottom at 40% vh). About: `rgba(26,26,26,0.1)` → `rgb(26,26,26)`; Vision: `rgba(255,255,255,0.1)` → `#fff`.

## Hover
- **Expand buttons** (Primary/Secondary, regular 65px tall and small 42px tall): icon box width grows from its size (65 / 40) to the full button width, text box width shrinks to 0, padding right → 3px, gap → 0. The icon box shows the pixel arrow plus a duplicate of the label. Transition ~0.4s.
- **Nav links:** opacity 0.65 → 1, scale 1 → 1.1.
- **Hero Digital Brain card:** title/subtitle/arrow turn white (`#fff` / `rgba(255,255,255,0.5)`); white overlay fades out (opacity 1 → 0) revealing the dark image; arrow shifts right 10px.
- **Work cards:** card bg `rgba(26,26,26,0.03)` → `rgba(26,26,26,0.8)`; tag bg white → transparent; logo scales 189→199 wide and filter `invert(0.73)` → `invert(0)`; hidden background image (440×330) fades to opacity 0.54 and grows to 480×363.
- **FAQ rows:** scale 1 → 1.05, shadow `rgba(0,0,0,0) 0 8px 13px 3px` → `rgba(0,0,0,0.25) 0 16px 13px -5px`.
- **Article cards:** bg rgb(214,214,214) → rgb(26,26,26); all text → white; round arrow button bg rgb(26,26,26) → #fff, arrow color inverts, arrow rotation −45° → 0.
- **Team cards:** photo card flips to a light glass card (white→light gradient) showing social icons (X, GitHub), a quote paragraph and name/role in mono; card height grows to include the caption.

## Click
- **Capabilities horizontal accordion:** 3 cards (001/002/003). The active card is 480px wide showing title, description and illustration; inactive cards are 90px wide showing the number pill and a vertical (rotated) uppercase mono title. Click an inactive card to activate it. Width transition ~0.5s.
- **Process accordion:** 4 rows (// 01–04). Active row is expanded (172px tall, bg rgb(36,36,36)) showing a tag pill and description; others collapsed (81px). Click to switch (single open).
- **FAQ accordion:** 7 items, first open by default; clicking an open item closes it; clicking another opens it and closes the rest. Open item shows answer text and an × icon; closed items show a + icon.
- **Pricing toggle:** Monthly | switch | Annually (Save 20%). Default Annually (knob right, dark with check). Toggling to Monthly moves the knob left and switches prices: Core $495→$618, Growth $1,250→$1,570, Pro $2,900→$3,650, Scale $7,500→$9,380, and "USD Billed Annually" → "USD Billed Monthly".
- **Testimonials Prev/Next:** 40px circular dark buttons; shift the track by one page (3 cards).
- **Video section play button:** opens a full-bleed YouTube embed (`https://www.youtube.com/embed/8AHPXm9Y6mI?autoplay=1&rel=0&modestbranding=1&playsinline=1`) over the section with a white × close button top-right.
