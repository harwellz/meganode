# AboutStats Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/AboutStats.tsx`
- **Screenshots:** `seg-desktop-01.png`, `state-about-cards.png`, mobile `seg-mobile-01.png`…`seg-mobile-03.png`
- **Interaction model:** scroll-driven per-char colour reveal on the headline; scroll-triggered fade-in + count-up; time-driven announcement ticker.

## DOM Structure
`<section>` white, padding `0 12px`, `relative z-[4]` → card bg rgb(240,240,240), radius 20, padding `12px 40px` → column (gap 200, padding `200px 0 30px`):
1. **Text block** (column): headline via `ScrollRevealText` (Inter Display 500 56px/60px, letter-spacing −2px, width ~1042) with `dimColor="rgba(26,26,26,0.1)"` and `color="rgb(26,26,26)"`; then the paragraph (width 600, Inter Display 300 16px/24px +0.32px ink) in a `FadeIn`.
2. **Bento row** (4 columns, gap 10, height ~315) — see dump for exact per-card sizes/radii/padding/colours:
   - **Card A** (dark, bg rgb(26,26,26)): white 60×60 rounded tile with a trend-up icon (svg02); big number "$45M" (Inter 400 43px/43px −2px, white) that **counts up** from "$0M" to "$45M" (~1.6s, ease-out) once visible; caption "Revenue generated for our clients through AI-led optimizations." (white).
   - **Card B** (two stacked cards): top — dashed-border card with 4 overlapping circular avatars ("Stacked Avatars") and "**15,400** active agents" (15,400 in `<strong>`); bottom — "5x" (counts up from "0x") + "Faster speed to market.".
   - **Card C**: radial tick dial (svg03, 149×153) with a dark circle + rocket icon (svg04) centred; "Inference speed" (h4 Inter Display 500 20px/28px −0.4px) + "Real-time processing for enterprise-grade deployments.".
   - **Card D** (white): quote icon (svg05, 40×40) top-left, cigna logo image (63×38) top-right; quote text (Inter Display 400 18px/25.2px); bullet list item "CTO, Cigna".
3. **Announcement ticker** at the very bottom: `<AnnouncementTicker />` (ink) in a 0-height relative wrapper so it sits in the bottom padding ("Variant 1" in the dump, absolute top 0, 20px tall).

## States & Behaviors
- Headline reveal is scroll-driven (no time animation).
- Paragraph and bento cards fade in (`FadeIn`, 0.8s) when entering.
- Count-up: integers, ease-out, ~1.6s, once.

## Text Content (verbatim)
- Headline: "Automate the manual, accelerate the future. Our custom AI solutions deliver measurable growth and operational excellence."
- "Empowering teams with intelligent tools that turn complex data into actionable business outcomes daily."
- "$45M" · "Revenue generated for our clients through AI-led optimizations." · "15,400 active agents" · "5x" · "Faster speed to market." · "Inference speed" · "Real-time processing for enterprise-grade deployments." · "The custom LLM they built for us reduced our support tickets by 80% while increasing user satisfaction." · "CTO, Cigna"

## Responsive Behavior
- **Tablet:** see tablet excerpt (bento wraps).
- **Phone:** headline shrinks (see excerpt); bento becomes a single column of full-width cards (`seg-mobile-01..03`).

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
<section> [0,0 1440x1067] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; padding:0px 12px; backgroundColor:rgb(255, 255, 255); overflow:clip; zIndex:4
  <div> [12,0 1416x1067] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px; padding:12px 40px; backgroundColor:rgb(240, 240, 240); borderRadius:20px; overflow:clip
    <div> [52,12 1336x1043] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:200px; padding:200px 0px 30px
      <div> [52,212 1336x613] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:40px; overflow:clip
        <div> [52,212 1336x258] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
          <div> [52,212 1042x180] position:relative; zIndex:1
            <p> [52,212 1042x180] display:flex; flexWrap:wrap; justifyContent:flex-start; fontFamily:"Inter Display"; fontSize:56px; fontWeight:500; lineHeight:60px; letterSpacing:-2px; color:rgb(26, 26, 26)
              <span> [52,212 240x60] 
                (8 per-char spans) TEXT="Automate " firstSpan: display:inline | lastSpan: display:inline
              <span> [292,212 86x60] 
              <span> [377,212 192x60] 
                (7 per-char spans) TEXT="manual, " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [570,212 250x60] 
                (10 per-char spans) TEXT="accelerate " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [820,212 86x60] 
              <span> [906,212 159x60] 
                (7 per-char spans) TEXT="future. " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [52,272 98x60] 
              <span> [150,272 186x60] 
              <span> [335,272 59x60] 
              <span> [394,272 217x60] 
                (9 per-char spans) TEXT="solutions " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [611,272 163x60] 
                (7 per-char spans) TEXT="deliver " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [773,272 281x60] 
                (10 per-char spans) TEXT="measurable " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [52,332 174x60] 
              <span> [226,332 99x60] 
              <span> [324,332 267x60] 
                (11 per-char spans) TEXT="operational " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [591,332 266x60] 
                (11 per-char spans) TEXT="excellence. " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
          <div> [52,422 600x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <p> [52,422 600x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgb(26, 26, 26) TEXT="Empowering teams with intelligent tools that turn complex data into actionable business outcomes daily."
        <div> [52,510 1336x315] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; overflow:clip
          <div> [52,510 339x315] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:24px; backgroundColor:rgb(26, 26, 26); borderRadius:30px; overflow:clip
            <div> [76,534 291x117] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:14px; overflow:clip
              <div> [76,534 60x60] position:relative; backgroundColor:rgb(255, 255, 255); borderRadius:16px; overflow:clip
                <div> [91,549 30x30] position:absolute; top:15px; left:15px; right:15px; bottom:15px
                  <svg> [91,549 30x30] display:inline-block; color:rgb(26, 26, 26); overflow:hidden
              <div> [76,608 114x43] position:relative
                <p> [76,608 114x43] fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px; textAlign:center; opacity:0 TEXT="$ 45 M"
                <p> [76,608 114x43] position:absolute; top:0px; left:0px; right:0px; bottom:0px; fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px; textAlign:center; color:rgb(255, 255, 255) TEXT="$ 45 M"
            <div> [76,762 291x39] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [76,762 291x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <p> [76,762 291x39] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Revenue generated for our clients through AI-led optimizations."
          <div> [401,510 291x315] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; overflow:clip
            <div> [401,510 291x210] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:22px; padding:24px; borderRadius:30px; overflow:clip; BORDER(::after):1px 1px 1px 1px dashed rgba(26, 26, 26, 0.6) radius 30px
              <div name="Stacked Avatars"> [458,564 176x60] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:38px; padding:0px 29px
                <div> [487,564 1x60] position:relative
                  <div name="Avatar"> [487,564 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [461,568 52x52] position:relative; borderRadius:1000px; boxShadow:rgb(255, 255, 255) 0px 0px 0px 5px; overflow:hidden; zIndex:1
                      <div> [461,568 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [461,568 52x52] borderRadius:1000px; overflow:clip; objectFit:cover IMG=D3gag0wTRQzvb6CCfJkTShmXTPI.jpg alt="A cartoon character wearing a blue shirt and a blue hat"
                <div> [526,564 1x60] position:relative
                  <div name="Avatar"> [526,564 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [500,568 52x52] position:relative; borderRadius:1000px; boxShadow:rgb(255, 255, 255) 0px 0px 0px 5px; overflow:hidden; zIndex:1
                      <div> [500,568 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [500,568 52x52] borderRadius:1000px; overflow:clip; objectFit:cover IMG=9AvPLCB2PkQCEoFgNdwvDaIaGGI.jpg alt="A cartoon character with a weird haircut"
                <div> [565,564 1x60] position:relative
                  <div name="Avatar"> [565,564 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [539,568 52x52] position:relative; borderRadius:1000px; boxShadow:rgb(255, 255, 255) 0px 0px 0px 5px; overflow:hidden; zIndex:1
                      <div> [539,568 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [539,568 52x52] borderRadius:1000px; overflow:clip; objectFit:cover IMG=pktP7O1JHzk75RWizEsb0jRSjk.jpg alt="A person wearing a green frog costume"
                <div> [604,564 1x60] position:relative
                  <div name="Avatar"> [604,564 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [578,568 52x52] position:relative; borderRadius:1000px; boxShadow:rgb(255, 255, 255) 0px 0px 0px 5px; overflow:hidden; zIndex:1
                      <div> [578,568 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [578,568 52x52] borderRadius:1000px; overflow:clip; objectFit:cover IMG=2418vQBGZ7CPVHaaIlQ5wuUyr4.jpg alt="A cartoon character wearing a purple shirt and a red headband"
              <div> [479,646 134x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <p> [479,646 134x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgba(26, 26, 26, 0.8) TEXT="active agents"
                  <strong> [479,647 46x17] display:inline; fontWeight:700 TEXT="15,400"
            <div> [401,730 291x95] display:flex; position:relative; justifyContent:center; alignItems:center; gap:26px; padding:20px 27px; backgroundColor:rgba(26, 26, 26, 0.06); borderRadius:30px; overflow:clip
              <div> [428,756 47x43] position:relative
                <p> [428,756 47x43] fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px; textAlign:center; opacity:0 TEXT="5 x"
                <p> [428,756 47x43] position:absolute; top:0px; left:0px; right:0px; bottom:0px; fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px; textAlign:center; color:rgb(41, 40, 40) TEXT="5 x"
              <div> [501,768 163x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <p> [501,768 163x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgba(26, 26, 26, 0.6) TEXT="Faster speed to market."
          <div> [701,510 339x315] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; padding:24px; backgroundColor:rgba(26, 26, 26, 0.06); borderRadius:30px; overflow:clip
            <div> [725,534 291x192] position:relative; overflow:clip
              <div> [796,541 149x153] position:absolute; top:7.01562px; left:71.0625px; right:70.4375px; bottom:31.7969px
                <div> [796,541 149x153] display:flex; position:relative; justifyContent:center; alignItems:center
                  <svg> [796,541 149x153] overflow:hidden
                  <div> [843,598 54x39] position:absolute; top:57px; left:47.2656px; right:47.2656px; bottom:57px; fontFamily:"Inter Display"; fontSize:33px; lineHeight:33px; letterSpacing:-0.33px; color:rgba(18, 18, 18, 0) TEXT="90"
                    <span> [884,610 14x20] display:inline; margin:0px 0px 0px 2px; fontSize:16.5px; opacity:0.7 TEXT="%"
              <div> [841,588 60x60] position:absolute; top:53.5156px; left:115.562px; right:114.938px; bottom:78.2969px; backgroundColor:rgb(26, 26, 26); borderRadius:100%; overflow:clip; zIndex:1
                <div> [859,606 24x24] position:absolute; top:18px; left:18px; right:18px; bottom:18px
                  <svg> [859,606 24x24] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
            <div> [725,726 291x75] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:8px; overflow:clip
              <div> [725,726 134x28] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <h4> [725,726 134x28] fontFamily:"Inter Display"; fontSize:20px; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgba(26, 26, 26, 0.8) TEXT="Inference speed"
              <div> [725,762 291x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <p> [725,762 291x39] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgba(26, 26, 26, 0.6) TEXT="Real-time processing for enterprise-grade deployments."
          <div> [1050,510 339x315] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:24px; backgroundColor:rgb(255, 255, 255); borderRadius:30px; overflow:clip
            <div> [1074,534 291x40] display:flex; position:relative; justifyContent:space-between; alignItems:center; overflow:clip
              <div> [1074,534 40x40] position:relative; zIndex:1
                <svg> [1074,534 40x40] display:inline-block; color:rgb(26, 26, 26); overflow:hidden
              <div name="Frame 2121451351"> [1301,535 63x38] position:relative; filter:invert(1)
                <div> [1301,535 63x38] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [1301,535 63x38] overflow:clip; objectFit:cover IMG=C7otSLQhZagCjkAC4M6MX1Ns.png alt=""
            <div> [1074,686 291x115] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; overflow:clip
              <div> [1074,686 291x76] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <p> [1074,686 291x76] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px; textAlign:left; color:rgba(26, 26, 26, 0.8) TEXT="The custom LLM they built for us reduced our support tickets by 80% while increasing user satisfaction."
              <div> [1074,781 291x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <ul> [1074,781 291x20] position:relative; fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgba(26, 26, 26, 0.6)
                  <li> [1074,781 291x20] display:list-item; padding:0px 0px 0px 17.1719px
                    <p> [1091,781 273x20]  TEXT="CTO, Cigna"
      <div> [52,1025 1336x0] position:relative
        <div name="Variant 1"> [52,1025 1336x20] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:-20.3906px; justifyContent:flex-start; alignItems:center; gap:100px; borderRadius:10px; maskImage:linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 4%, rgb(0, 0, 0) 96%, rgba(0, 0, 0, 0) 100%)
          <ul> [-1476,1025 1336x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:100px; transform:matrix(1, 0, 0, 1, -1528.05, 0)
            <li> [1568,1025 118x20] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 3044, 0)
              <div> [1568,1025 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                <div> [1568,1025 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
                <div> [1614,1025 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [1614,1025 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="//SPARTAN"
            <li> [1786,1025 1204x20] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 3044, 0)
              <div> [1786,1025 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [1786,1025 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
            <li> [46,1025 118x20] display:list-item; position:relative
              <div> [46,1025 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                <div> [46,1025 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
                <div> [92,1025 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [92,1025 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="//SPARTAN"
            <li> [264,1025 1204x20] display:list-item; position:relative
              <div> [264,1025 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [264,1025 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
```

## Computed Styles — tablet 1000px (layout/type props only)
```
<section> [0,0 1000x1227] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; padding:0px 12px; backgroundColor:rgb(255, 255, 255)
  <div> [12,0 976x1227] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px; padding:12px 40px; backgroundColor:rgb(240, 240, 240); borderRadius:20px
    <div> [52,12 896x1203] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:140px; padding:140px 0px 30px
      <div> [52,152 896x893] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:40px
        <div> [52,152 896x213] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
          <div> [52,152 896x135] position:relative
            <p> [52,152 896x135] display:flex; flexWrap:wrap; justifyContent:flex-start; fontFamily:"Inter Display"; fontSize:43px; fontWeight:500; lineHeight:45px; letterSpacing:-2px
              <span> [52,152 180x45] 
                (8 per-char spans) TEXT="Automate " firstSpan: display:inline | lastSpan: display:inline
              <span> [232,152 64x45] 
              <span> [296,152 144x45] 
                (7 per-char spans) TEXT="manual, " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [440,152 187x45] 
                (10 per-char spans) TEXT="accelerate " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [627,152 64x45] 
              <span> [691,152 118x45] 
                (7 per-char spans) TEXT="future. " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [809,152 73x45] 
              <span> [52,197 139x45] 
              <span> [191,197 44x45] 
              <span> [235,197 162x45] 
                (9 per-char spans) TEXT="solutions " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [397,197 121x45] 
                (7 per-char spans) TEXT="deliver " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [518,197 211x45] 
                (10 per-char spans) TEXT="measurable " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [729,197 130x45] 
              <span> [859,197 74x45] 
              <span> [52,242 199x45] 
                (11 per-char spans) TEXT="operational " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [251,242 199x45] 
                (11 per-char spans) TEXT="excellence. " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
          <div> [52,317 600x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [52,317 600x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Empowering teams with intelligent tools that turn complex data into actionable business outcomes daily."
        <div> [52,405 896x640] display:grid; position:relative; justifyContent:center; gap:10px; gridTemplateColumns:443px 443px
          <div> [52,405 443x315] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:24px; backgroundColor:rgb(26, 26, 26); borderRadius:30px
            <div> [76,429 395x117] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:14px
              <div> [76,429 60x60] position:relative; backgroundColor:rgb(255, 255, 255); borderRadius:16px
                <div> [91,444 30x30] position:absolute; top:15px; left:15px; right:15px; bottom:15px
                  <svg> [91,444 30x30] display:inline-block
              <div> [76,503 114x43] position:relative
                <p> [76,503 114x43] fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px; opacity:0 TEXT="$ 45 M"
                <p> [76,503 114x43] position:absolute; top:0px; left:0px; right:0px; bottom:0px; fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px TEXT="$ 45 M"
            <div> [76,657 395x39] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
              <div> [76,657 395x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [76,657 395x39] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Revenue generated for our clients through AI-led optimizations."
          <div> [505,405 443x315] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
            <div> [505,405 443x210] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:22px; padding:24px; borderRadius:30px; BORDER(::after):1px 1px 1px 1px dashed rgba(26, 26, 26, 0.6) radius 30px
              <div name="Stacked Avatars"> [639,459 176x60] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:38px; padding:0px 29px
                <div> [668,459 1x60] position:relative
                  <div name="Avatar"> [668,459 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [642,463 52x52] position:relative; borderRadius:1000px
                      <div> [642,463 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [642,463 52x52] borderRadius:1000px IMG=D3gag0wTRQzvb6CCfJkTShmXTPI.jpg alt="A cartoon character wearing a blue shirt and a blue hat"
                <div> [707,459 1x60] position:relative
                  <div name="Avatar"> [707,459 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [681,463 52x52] position:relative; borderRadius:1000px
                      <div> [681,463 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [681,463 52x52] borderRadius:1000px IMG=9AvPLCB2PkQCEoFgNdwvDaIaGGI.jpg alt="A cartoon character with a weird haircut"
                <div> [746,459 1x60] position:relative
                  <div name="Avatar"> [746,459 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [720,463 52x52] position:relative; borderRadius:1000px
                      <div> [720,463 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [720,463 52x52] borderRadius:1000px IMG=pktP7O1JHzk75RWizEsb0jRSjk.jpg alt="A person wearing a green frog costume"
                <div> [785,459 1x60] position:relative
                  <div name="Avatar"> [785,459 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [759,463 52x52] position:relative; borderRadius:1000px
                      <div> [759,463 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [759,463 52x52] borderRadius:1000px IMG=2418vQBGZ7CPVHaaIlQ5wuUyr4.jpg alt="A cartoon character wearing a purple shirt and a red headband"
              <div> [659,541 134x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [659,541 134x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="active agents"
                  <strong> [659,542 46x17] display:inline; fontWeight:700 TEXT="15,400"
            <div> [505,625 443x95] display:flex; position:relative; justifyContent:center; alignItems:center; gap:26px; padding:20px 27px; backgroundColor:rgba(26, 26, 26, 0.06); borderRadius:30px
              <div> [590,651 47x43] position:relative
                <p> [590,651 47x43] fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px; opacity:0 TEXT="5 x"
                <p> [590,651 47x43] position:absolute; top:0px; left:0px; right:0px; bottom:0px; fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px TEXT="5 x"
              <div> [663,663 200x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [663,663 200x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Faster speed to market."
          <div> [52,730 443x315] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; padding:24px; backgroundColor:rgba(26, 26, 26, 0.06); borderRadius:30px
            <div> [76,754 395x214] position:relative
              <div> [199,771 149x153] position:absolute; top:16.7656px; left:123.438px; right:122.562px; bottom:44.4375px
                <div> [199,771 149x153] display:flex; position:relative; justifyContent:center; alignItems:center
                  <svg> [199,771 149x153] 
                  <div> [247,828 54x39] position:absolute; top:57px; left:47.2656px; right:47.2656px; bottom:57px; fontFamily:"Inter Display"; fontSize:33px; lineHeight:33px; letterSpacing:-0.33px TEXT="90"
                    <span> [288,840 14x20] display:inline; fontSize:16.5px; opacity:0.7 TEXT="%"
              <div> [244,817 60x60] position:absolute; top:63.2656px; left:167.938px; right:167.062px; bottom:90.9375px; backgroundColor:rgb(26, 26, 26); borderRadius:100%
                <div> [262,835 24x24] position:absolute; top:18px; left:18px; right:18px; bottom:18px
                  <svg> [262,835 24x24] display:inline-block
            <div> [76,968 395x53] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:8px
              <div> [76,968 121x25] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h4> [76,968 121x25] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Inference speed"
              <div> [76,1001 395x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [76,1001 395x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Real-time processing for enterprise-grade deployments."
          <div> [505,730 443x315] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:24px; backgroundColor:rgb(255, 255, 255); borderRadius:30px
            <div> [529,754 395x40] display:flex; position:relative; justifyContent:space-between; alignItems:center
              <div> [529,754 40x40] position:relative
                <svg> [529,754 40x40] display:inline-block
              <div name="Frame 2121451351"> [861,755 63x38] position:relative
                <div> [861,755 63x38] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [861,755 63x38]  IMG=C7otSLQhZagCjkAC4M6MX1Ns.png alt=""
            <div> [529,906 395x115] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
              <div> [529,906 395x76] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [529,906 395x76] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px TEXT="The custom LLM they built for us reduced our support tickets by 80% while increasing user satisfaction."
              <div> [529,1001 395x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <ul> [529,1001 395x20] position:relative; fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px
                  <li> [529,1001 395x20] display:list-item; padding:0px 0px 0px 17.1719px
                    <p> [546,1001 378x20]  TEXT="CTO, Cigna"
      <div> [52,1185 896x0] position:relative
        <div name="Variant 1"> [52,1185 896x20] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:-20.3906px; justifyContent:flex-start; alignItems:center; gap:100px; borderRadius:10px
          <ul> [-1492,1185 896x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:100px; transform:matrix(1, 0, 0, 1, -1544.16, 0)
            <li> [1552,1185 118x20] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 3044, 0)
              <div> [1552,1185 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [1552,1185 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
                <div> [1598,1185 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [1598,1185 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="//SPARTAN"
            <li> [1770,1185 1204x20] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 3044, 0)
              <div> [1770,1185 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [1770,1185 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
            <li> [30,1185 118x20] display:list-item; position:relative
              <div> [30,1185 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [30,1185 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
                <div> [76,1185 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [76,1185 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="//SPARTAN"
            <li> [248,1185 1204x20] display:list-item; position:relative
              <div> [248,1185 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [248,1185 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
```

## Computed Styles — phone 390px (layout/type props only)
```
<section> [0,0 390x2019] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; padding:0px 12px; backgroundColor:rgb(255, 255, 255)
  <div> [12,0 366x2019] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px; padding:12px 20px; backgroundColor:rgb(240, 240, 240); borderRadius:20px
    <div> [32,12 326x1995] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:140px; padding:140px 0px 30px
      <div> [32,152 326x1685] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:40px
        <div> [32,152 326x355] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:24px
          <div> [32,152 326x259] position:relative
            <p> [32,152 326x259] display:flex; flexWrap:wrap; justifyContent:flex-start; fontFamily:"Inter Display"; fontSize:35px; fontWeight:500; lineHeight:37px; letterSpacing:-2px
              <span> [32,152 143x37] 
                (8 per-char spans) TEXT="Automate " firstSpan: display:inline | lastSpan: display:inline
              <span> [175,152 51x37] 
              <span> [226,152 114x37] 
                (7 per-char spans) TEXT="manual, " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [32,189 148x37] 
                (10 per-char spans) TEXT="accelerate " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [180,189 51x37] 
              <span> [231,189 93x37] 
                (7 per-char spans) TEXT="future. " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [32,226 58x37] 
              <span> [90,226 111x37] 
              <span> [201,226 34x37] 
              <span> [32,263 128x37] 
                (9 per-char spans) TEXT="solutions " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [160,263 96x37] 
                (7 per-char spans) TEXT="deliver " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [32,300 168x37] 
                (10 per-char spans) TEXT="measurable " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [200,300 103x37] 
              <span> [32,337 59x37] 
              <span> [91,337 158x37] 
                (11 per-char spans) TEXT="operational " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
              <span> [32,374 158x37] 
                (11 per-char spans) TEXT="excellence. " firstSpan: display:inline; color:rgba(26, 26, 26, 0.1) | lastSpan: display:inline; color:rgba(26, 26, 26, 0.1)
          <div> [32,435 326x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [32,435 326x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Empowering teams with intelligent tools that turn complex data into actionable business outcomes daily."
        <div> [32,547 326x1290] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
          <div> [32,547 326x315] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:24px; backgroundColor:rgb(26, 26, 26); borderRadius:30px
            <div> [56,571 278x117] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:14px
              <div> [56,571 60x60] position:relative; backgroundColor:rgb(255, 255, 255); borderRadius:16px
                <div> [71,586 30x30] position:absolute; top:15px; left:15px; right:15px; bottom:15px
                  <svg> [71,586 30x30] display:inline-block
              <div> [56,645 114x43] position:relative
                <p> [56,645 114x43] fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px; opacity:0 TEXT="$ 45 M"
                <p> [56,645 114x43] position:absolute; top:0px; left:0px; right:0px; bottom:0px; fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px TEXT="$ 45 M"
            <div> [56,799 278x39] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
              <div> [56,799 278x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [56,799 278x39] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Revenue generated for our clients through AI-led optimizations."
          <div> [32,872 326x315] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
            <div> [32,872 326x210] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:22px; padding:24px; borderRadius:30px; BORDER(::after):1px 1px 1px 1px dashed rgba(26, 26, 26, 0.6) radius 30px
              <div name="Stacked Avatars"> [107,926 176x60] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:38px; padding:0px 29px
                <div> [136,926 1x60] position:relative
                  <div name="Avatar"> [136,926 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [111,930 52x52] position:relative; borderRadius:1000px
                      <div> [111,930 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [111,930 52x52] borderRadius:1000px IMG=D3gag0wTRQzvb6CCfJkTShmXTPI.jpg alt="A cartoon character wearing a blue shirt and a blue hat"
                <div> [175,926 1x60] position:relative
                  <div name="Avatar"> [175,926 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [150,930 52x52] position:relative; borderRadius:1000px
                      <div> [150,930 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [150,930 52x52] borderRadius:1000px IMG=9AvPLCB2PkQCEoFgNdwvDaIaGGI.jpg alt="A cartoon character with a weird haircut"
                <div> [214,926 1x60] position:relative
                  <div name="Avatar"> [214,926 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [189,930 52x52] position:relative; borderRadius:1000px
                      <div> [189,930 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [189,930 52x52] borderRadius:1000px IMG=pktP7O1JHzk75RWizEsb0jRSjk.jpg alt="A person wearing a green frog costume"
                <div> [253,926 1x60] position:relative
                  <div name="Avatar"> [253,926 1x60] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div name="Image"> [228,930 52x52] position:relative; borderRadius:1000px
                      <div> [228,930 52x52] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:1000px
                        <img> [228,930 52x52] borderRadius:1000px IMG=2418vQBGZ7CPVHaaIlQ5wuUyr4.jpg alt="A cartoon character wearing a purple shirt and a red headband"
              <div> [128,1008 134x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [128,1008 134x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="active agents"
                  <strong> [128,1009 46x17] display:inline; fontWeight:700 TEXT="15,400"
            <div> [32,1092 326x95] display:flex; position:relative; justifyContent:center; alignItems:center; gap:26px; padding:20px 27px; backgroundColor:rgba(26, 26, 26, 0.06); borderRadius:30px
              <div> [84,1118 47x43] position:relative
                <p> [84,1118 47x43] fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px; opacity:0 TEXT="5 x"
                <p> [84,1118 47x43] position:absolute; top:0px; left:0px; right:0px; bottom:0px; fontFamily:Inter; fontSize:43px; lineHeight:43px; letterSpacing:-2px TEXT="5 x"
              <div> [157,1130 149x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [157,1130 149x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Faster speed to market."
          <div> [32,1197 326x315] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; padding:24px; backgroundColor:rgba(26, 26, 26, 0.06); borderRadius:30px
            <div> [56,1221 278x195] position:relative
              <div> [121,1229 149x153] position:absolute; top:8.23438px; left:64.7969px; right:64.2031px; bottom:33.375px
                <div> [121,1229 149x153] display:flex; position:relative; justifyContent:center; alignItems:center
                  <svg> [121,1229 149x153] 
                  <div> [168,1286 54x39] position:absolute; top:57px; left:47.2656px; right:47.2656px; bottom:57px; fontFamily:"Inter Display"; fontSize:33px; lineHeight:33px; letterSpacing:-0.33px TEXT="90"
                    <span> [209,1298 14x20] display:inline; fontSize:16.5px; opacity:0.7 TEXT="%"
              <div> [165,1276 60x60] position:absolute; top:54.7344px; left:109.297px; right:108.703px; bottom:79.875px; backgroundColor:rgb(26, 26, 26); borderRadius:100%
                <div> [183,1294 24x24] position:absolute; top:18px; left:18px; right:18px; bottom:18px
                  <svg> [183,1294 24x24] display:inline-block
            <div> [56,1416 278x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:8px
              <div> [56,1416 121x25] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h4> [56,1416 121x25] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Inference speed"
              <div> [56,1449 278x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [56,1449 278x39] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Real-time processing for enterprise-grade deployments."
          <div> [32,1522 326x315] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:24px; backgroundColor:rgb(255, 255, 255); borderRadius:30px
            <div> [56,1546 278x40] display:flex; position:relative; justifyContent:space-between; alignItems:center
              <div> [56,1546 40x40] position:relative
                <svg> [56,1546 40x40] display:inline-block
              <div name="Frame 2121451351"> [271,1547 63x38] position:relative
                <div> [271,1547 63x38] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [271,1547 63x38]  IMG=C7otSLQhZagCjkAC4M6MX1Ns.png alt=""
            <div> [56,1673 278x140] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
              <div> [56,1673 278x101] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [56,1673 278x101] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px TEXT="The custom LLM they built for us reduced our support tickets by 80% while increasing user satisfaction."
              <div> [56,1793 278x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <ul> [56,1793 278x20] position:relative; fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px
                  <li> [56,1793 278x20] display:list-item; padding:0px 0px 0px 17.1719px
                    <p> [73,1793 261x20]  TEXT="CTO, Cigna"
      <div> [32,1977 326x0] position:relative
        <div name="Variant 1"> [32,1977 326x20] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:-20.3906px; justifyContent:flex-start; alignItems:center; gap:100px; borderRadius:10px
          <ul> [-1520,1977 326x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:100px; transform:matrix(1, 0, 0, 1, -1552.15, 0)
            <li> [1524,1977 118x20] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 3044, 0)
              <div> [1524,1977 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [1524,1977 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
                <div> [1570,1977 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [1570,1977 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="//SPARTAN"
            <li> [1742,1977 1204x20] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 3044, 0)
              <div> [1742,1977 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [1742,1977 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
            <li> [2,1977 118x20] display:list-item; position:relative
              <div> [2,1977 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [2,1977 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
                <div> [48,1977 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [48,1977 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="//SPARTAN"
            <li> [220,1977 1204x20] display:list-item; position:relative
              <div> [220,1977 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [220,1977 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
```

## SVG markup (inline these as React components)
### svg02
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(31, 31, 31)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(31, 31, 31); color: rgb(31, 31, 31); flex-shrink: 0;"><g color="rgb(31, 31, 31)" weight="light"><path d="M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z"></path></g></svg>
```
### svg03
```html
<svg viewBox="0 0 200 200" style="width:100%;height:100%"><line x1="100" y1="26" x2="100" y2="0" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="111.57615041297709" y1="26.911062795959808" x2="115.64344650402309" y2="1.2311659404862212" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="122.86725758374611" y1="29.621817794158645" x2="130.90169943749476" y2="4.89434837048465" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="133.59529698072646" y1="34.06551721006079" x2="145.39904997395467" y2="10.899347581163227" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="143.496108669643" y1="40.13274241625389" x2="158.77852522924732" y2="19.09830056250526" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="152.3259018078045" y1="47.67409819219549" x2="170.71067811865476" y2="29.28932188134526" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="159.8672575837461" y1="56.503891330356986" x2="180.90169943749476" y2="41.221474770752685" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="165.93448278993924" y1="66.40470301927354" x2="189.10065241883677" y2="54.600950026045325" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="170.37818220584137" y1="77.13274241625389" x2="195.10565162951536" y2="69.09830056250526" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="173.08893720404018" y1="88.42384958702291" x2="198.76883405951378" y2="84.35655349597691" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="174" y1="100" x2="200" y2="100" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="173.08893720404018" y1="111.57615041297709" x2="198.76883405951378" y2="115.64344650402309" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="170.37818220584137" y1="122.86725758374611" x2="195.10565162951536" y2="130.90169943749473" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="165.93448278993924" y1="133.59529698072646" x2="189.10065241883677" y2="145.39904997395467" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="159.8672575837461" y1="143.496108669643" x2="180.90169943749476" y2="158.77852522924732" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="152.3259018078045" y1="152.3259018078045" x2="170.71067811865476" y2="170.71067811865476" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="143.496108669643" y1="159.8672575837461" x2="158.77852522924732" y2="180.90169943749476" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="133.59529698072646" y1="165.9344827899392" x2="145.39904997395467" y2="189.10065241883677" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="122.86725758374611" y1="170.37818220584137" x2="130.90169943749476" y2="195.10565162951536" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="111.57615041297709" y1="173.08893720404018" x2="115.64344650402309" y2="198.76883405951378" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="100" y1="174" x2="100" y2="200" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="88.4238495870229" y1="173.08893720404018" x2="84.3565534959769" y2="198.76883405951378" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="77.1327424162539" y1="170.37818220584137" x2="69.09830056250527" y2="195.10565162951536" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="66.40470301927354" y1="165.93448278993924" x2="54.60095002604533" y2="189.10065241883677" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="56.50389133035699" y1="159.8672575837461" x2="41.2214747707527" y2="180.90169943749476" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="47.67409819219549" y1="152.3259018078045" x2="29.28932188134526" y2="170.71067811865476" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="40.1327424162539" y1="143.49610866964304" x2="19.098300562505273" y2="158.77852522924732" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="34.06551721006079" y1="133.59529698072646" x2="10.899347581163227" y2="145.39904997395467" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="29.621817794158645" y1="122.86725758374612" x2="4.89434837048465" y2="130.90169943749476" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="26.911062795959808" y1="111.57615041297709" x2="1.2311659404862354" y2="115.6434465040231" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="26" y1="100.00000000000001" x2="0" y2="100.00000000000001" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="26.911062795959808" y1="88.42384958702293" x2="1.2311659404862212" y2="84.35655349597693" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="29.621817794158645" y1="77.13274241625388" x2="4.89434837048465" y2="69.09830056250523" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="34.06551721006076" y1="66.40470301927357" x2="10.899347581163184" y2="54.600950026045375" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="40.13274241625388" y1="56.50389133035699" x2="19.098300562505244" y2="41.2214747707527" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="47.67409819219547" y1="47.67409819219549" x2="29.28932188134523" y2="29.28932188134526" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="56.50389133035698" y1="40.1327424162539" x2="41.22147477075268" y2="19.098300562505273" stroke="rgba(31, 31, 31, 0.6)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="66.40470301927353" y1="34.06551721006079" x2="54.60095002604531" y2="10.899347581163227" stroke="rgba(31, 31, 31, 0.03)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="77.13274241625388" y1="29.621817794158645" x2="69.09830056250524" y2="4.89434837048465" stroke="rgba(31, 31, 31, 0.03)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="88.4238495870229" y1="26.911062795959808" x2="84.3565534959769" y2="1.2311659404862354" stroke="rgba(31, 31, 31, 0.03)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line><line x1="99.99999999999999" y1="26" x2="99.99999999999999" y2="0" stroke="rgba(31, 31, 31, 0.03)" stroke-width="1.5" stroke-linecap="round" style="transition:stroke 0.1s ease"></line></svg>
```
### svg04
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"><g color="rgb(255, 255, 255)" weight="light"><path d="M150,224a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,224ZM128,110a10,10,0,1,0-10-10A10,10,0,0,0,128,110Zm93.67,45.4L209.31,211A14,14,0,0,1,187,219l-27.79-21H96.82L69,219a14,14,0,0,1-22.34-8L34.33,155.4a14.06,14.06,0,0,1,2.91-12l29-34.76a121.28,121.28,0,0,1,8.48-36.71c12.72-31.88,35.52-51.88,44.73-59a14,14,0,0,1,17.16,0c9.21,7.12,32,27.12,44.73,59a121.28,121.28,0,0,1,8.48,36.71l29,34.76A14.06,14.06,0,0,1,221.67,155.4ZM98.26,186h59.48c21.93-38.46,26.12-75.33,12.43-109.62-11.95-30-34.35-48.87-40.93-54a2,2,0,0,0-2.48,0c-6.58,5.09-29,24-40.93,54C72.14,110.67,76.33,147.54,98.26,186ZM87,190.4c-12-21.49-18.9-42.6-20.62-63.19L46.46,151.08a2,2,0,0,0-.42,1.71l12.37,55.64a2,2,0,0,0,3.2,1.13l.13-.11Zm122.57-39.32-19.89-23.87c-1.72,20.59-8.6,41.7-20.62,63.19l25.23,19,.13.11a2,2,0,0,0,3.2-1.13L210,152.79A2,2,0,0,0,209.54,151.08Z"></path></g></svg>
```
### svg05
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(31, 31, 31)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(31, 31, 31); color: rgb(31, 31, 31); flex-shrink: 0;"><g color="rgb(31, 31, 31)" weight="fill"><path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path></g></svg>
```
