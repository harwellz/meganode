# Works Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Works.tsx`
- **Screenshots:** `seg-desktop-02.png`, `seg-desktop-03.png`; mobile `seg-mobile-03.png`…`seg-mobile-06.png`
- **Interaction model:** time-driven (big marquee) + hover (cards) + scroll-triggered fade-in (cards, per row).

## DOM Structure
This is the TOP part of a dark section: the outer `<section>` (bg rgb(26,26,26), `relative z-[4]`) is rendered by the page; this component renders the **white block** that sits inside it with `rounded-b-[20px]`, bg #fff, `relative z-[2]`, padding-bottom 180px, overflow clip, and a 1px bottom hairline rgba(26,26,26,0.06).
1. **Big marquee** row: padding `180px 0 30px` → `<BigMarquee title="Our Works" />`.
2. **Card grid** wrapper: padding `0 40px`, 1px top+bottom hairlines rgba(26,26,26,0.06). Rows are CSS grids `grid-template-columns: 440px 440px 440px` (use `repeat(3, 1fr)` within 1360px), column gap 20px, each row has a bottom hairline. Row 1: cards 1–3, Row 2: cards 4–5 (third cell empty).
3. **Card** (`<a>` 440×482, padding 16, vertical hairlines left/right rgba(26,26,26,0.06)): inner box 408×450, bg rgba(26,26,26,0.03), radius 20, padding 1, gap 1, column:
   - **Top panel** 406×302, bg #fff, radius `19px 19px 10px 10px`, padding 10, overflow clip:
     - Tag pill (z-2): bg #fff, radius 100, padding `8px 16px 7px`, 1px border rgb(219,219,219); text Geist Mono 400 10px/16px uppercase ink.
     - Logo (z-1): 189×57 image centred (absolute, centred via translate(-50%,-50%) at the panel centre), `filter: invert(0.73)`.
     - Hover image (z-0): absolute top 0, left/right −17px, bottom −28.4px (440×330), object-cover, **opacity 0**.
   - **Stats grid** 406×145: 2×2 grid, gap 1, radius `10px 10px 19px 19px`; each cell bg #fff radius 10, padding `14px 11px 15px 15px`, gap 4: value (Geist Mono 500 16px/22.4px, rgba(26,26,26,0.7)) + label (Inter Display 300 12px/16.8px +0.12px, rgba(26,26,26,0.7)).

## States & Behaviors
- **Card hover (~0.4s ease-out):** inner box bg rgba(26,26,26,0.03) → rgba(26,26,26,0.8); top panel bg #fff → transparent; logo grows 189×57 → 199×60 and `filter: invert(0.73)` → `invert(0)` (logos are white PNGs, so they read grey at rest and white on hover); hover image opacity 0 → 0.54 and grows 440×330 → 480×363 (left −17 → −37px).
- **Fade-in:** each card row fades in (opacity 0→1) when entering the viewport.

## Card data (in order)
| # | Tag | Logo | Hover image | $ | % | x | Partnerships |
|---|---|---|---|---|---|---|---|
| 1 | Healthcare AI | `yV2zGDqTwUzGafOnvA53MLQkM.png` (cigna) | `sZxYLpvH56E3RznKPcnAPYlPvo.jpg` | $45M+ | 700% | 41x | 84 |
| 2 | Healthcare | `CLpXi6HupcG6YYxVylXG8rj7eo4.png` (aetna) | `4GMiBYbu9SI4dXo9ENcqlNA.jpg` | $62M+ | 450% | 32x | 91 |
| 3 | Healthcare | `RlGLod5QkyznR4SBy9PQw3raa80.png` (Anthem) | `0g3E5eja3ueYAXkITtsy9quyYo.jpg` | $82M+ | 340% | 19x | 56 |
| 4 | Retail & Logistics | `3ICxPpL7nA6WiDyreZSZlU70E8.png` (CVS) | `ZK0k9kMGgE21P7r3puSMYZ8548.jpg` | $59M+ | 215% | 73x | 28 |
| 5 | Cybersecurity | `qA80rXn5OyEhaPlYKJ8gIEE6Ds.png` (UnitedHealthcare) | `LYQLqywSoqlHG7KLRJM70MIk.png` | $94M+ | 120% | 66x | 12 |
Stat labels: "Funds raised", "Social growth", "ATH ROI", "Partnerships". All card links → `#`.

## Responsive Behavior
- **Tablet:** 2-column grid (see tablet excerpt), big marquee 160px.
- **Phone:** single column of full-width cards; on phone the hover image is shown (cards appear dark with the image, as in `seg-mobile-04.png`) — check the phone excerpt for the resting opacity; big marquee 128px.

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
<section> [0,0 1440x4072] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(26, 26, 26); overflow:clip; zIndex:4
  <div> [0,0 1440x1574] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; padding:0px 0px 180px; backgroundColor:rgb(255, 255, 255); borderRadius:0px 0px 20px 20px; overflow:clip; zIndex:2; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px 0px 20px 20px
    <div> [0,0 1440x430] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:180px 0px 30px
      <div> [0,180 1440x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
        <div> [0,180 1440x220] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
          <ul> [-9,180 1440x220] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -9.398, 0)
            <li> [-9,180 905x220] display:list-item; position:relative
              <div> [-9,180 905x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <h2> [-9,180 905x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Our Works"
            <li> [955,215 151x151] display:list-item; position:relative
              <div> [933,192 195x195] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip; transform:matrix(0.361299, -0.93245, 0.93245, 0.361299, 0, 0)
                <div> [933,192 195x195] position:relative
                  <div> [933,192 195x195] 
                    <svg> [933,192 195x195] 
            <li> [1166,180 905x220] display:list-item; position:relative
              <div> [1166,180 905x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <h2> [1166,180 905x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Our Works"
            <li> [2131,215 151x151] display:list-item; position:relative
              <div> [2131,215 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                <div> [2131,215 151x151] position:relative
                  <div> [2131,215 151x151] 
                    <svg> [2131,215 151x151] 
    <div> [0,430 1440x964] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:0px 40px; overflow:clip; BORDER(::after):1px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
      <div> [40,430 1360x482] display:grid; position:relative; justifyContent:center; gap:0px 20px; gridTemplateColumns:440px 440px 440px; overflow:clip; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
        <div> [40,430 440x482] position:relative
          <a name="Desktop"> [40,430 440x482] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:16px; overflow:clip; cursor:pointer; BORDER(::after):0px 1px 0px 1px solid rgba(26, 26, 26, 0.06) radius 0px href=./project/cigna-smart-health-systems
            <div> [56,446 408x450] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:1px; padding:1px; backgroundColor:rgba(26, 26, 26, 0.03); borderRadius:20px; overflow:clip
              <div> [57,447 406x302] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px; padding:10px; backgroundColor:rgb(255, 255, 255); borderRadius:19px 19px 10px 10px; overflow:clip
                <div> [67,457 110x32] position:relative; zIndex:2
                  <div name="In progress"> [67,457 110x32] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:8px 16px 7px; backgroundColor:rgb(255, 255, 255); borderRadius:100px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgb(219, 219, 219) radius 100px
                    <div> [83,465 78x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-end; alignItems:center; gap:10px
                      <div> [83,466 78x16] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [83,466 78x16] fontFamily:"Geist Mono"; fontSize:10px; lineHeight:16px; textAlign:left; textTransform:uppercase; color:rgb(26, 26, 26) TEXT="Healthcare AI"
                <div name="Frame 2121451347"> [166,569 189x57] position:absolute; top:150.797px; left:203px; right:14px; bottom:93.7656px; zIndex:1; transform:matrix(1, 0, 0, 1, -94.5, -28.5156); filter:invert(0.73)
                  <div> [166,569 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [166,569 189x57] overflow:clip; objectFit:cover IMG=yV2zGDqTwUzGafOnvA53MLQkM.png alt=""
                <div> [40,447 440x330] position:absolute; top:0px; left:-17px; right:-17px; bottom:-28.4062px; opacity:0; overflow:clip; zIndex:0
                  <div> [40,447 440x330] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [40,447 440x330] overflow:clip; objectFit:cover IMG=sZxYLpvH56E3RznKPcnAPYlPvo.jpg alt="gray concrete illustration"
              <div> [57,750 406x145] display:grid; position:relative; justifyContent:center; gap:1px; gridTemplateColumns:202.5px 202.5px; borderRadius:10px 10px 19px 19px; overflow:clip
                <div> [57,750 203x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px; overflow:clip
                  <div> [72,764 48x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [72,764 48x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="$45M+"
                  <div> [72,790 66x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [72,790 66x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="Funds raised"
                <div> [261,750 203x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px; overflow:clip
                  <div> [276,764 38x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [276,764 38x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="700%"
                  <div> [276,790 70x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [276,790 70x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="Social growth"
                <div> [57,823 203x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px; overflow:clip
                  <div> [72,837 29x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [72,837 29x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="41x"
                  <div> [72,863 44x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [72,863 44x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="ATH ROI"
                <div> [261,823 203x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px; overflow:clip
                  <div> [276,837 19x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [276,837 19x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="84"
                  <div> [276,863 65x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [276,863 65x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="Partnerships"
```

## Computed Styles — tablet 1000px (layout/type props only)
```
        <div> [0,120 1000x176] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
          <ul> [-13,120 1000x176] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -12.508, 0)
            <li> [-13,120 724x176] display:list-item; position:relative
              <div> [-13,120 724x176] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h2> [-13,120 724x176] fontFamily:"Inter Display"; fontSize:160px; fontWeight:700; lineHeight:176px; letterSpacing:-6.4px TEXT="Our Works"
            <li> [771,133 151x151] display:list-item; position:relative
              <div> [763,124 167x167] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; transform:matrix(0.113064, -0.993588, 0.993588, 0.113064, 0, 0)
                <div> [763,124 167x167] position:relative
                  <div> [763,124 167x167] 
                    <svg> [763,124 167x167] 
            <li> [982,120 724x176] display:list-item; position:relative
              <div> [982,120 724x176] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h2> [982,120 724x176] fontFamily:"Inter Display"; fontSize:160px; fontWeight:700; lineHeight:176px; letterSpacing:-6.4px TEXT="Our Works"
            <li> [1766,133 151x151] display:list-item; position:relative
              <div> [1766,133 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [1766,133 151x151] position:relative
                  <div> [1766,133 151x151] 
                    <svg> [1766,133 151x151] 
    <div> [0,326 1000x964] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:0px 30px; BORDER(::after):1px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
      <div> [30,326 940x482] display:grid; position:relative; justifyContent:center; gap:0px 20px; gridTemplateColumns:460px 460px; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
        <div> [30,326 460x482] position:relative
          <a name="Mobile"> [30,326 460x482] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:16px; BORDER(::after):0px 1px 0px 1px solid rgba(26, 26, 26, 0.06) radius 0px href=./project/cigna-smart-health-systems
            <div> [46,342 428x450] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:1px; padding:1px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
              <div> [47,343 426x302] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px; padding:10px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:19px 19px 10px 10px
                <div> [57,353 110x32] position:relative
                  <div name="In progress"> [57,353 110x32] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:8px 16px 7px; backgroundColor:rgb(255, 255, 255); borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgb(219, 219, 219) radius 100px
                    <div> [73,361 78x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-end; alignItems:center; gap:10px
                      <div> [73,362 78x16] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [73,362 78x16] fontFamily:"Geist Mono"; fontSize:10px; lineHeight:16px TEXT="Healthcare AI"
                <div name="Frame 2121451347"> [166,465 189x57] position:absolute; top:150.797px; left:213px; right:24px; bottom:93.7656px; transform:matrix(1, 0, 0, 1, -94.5, -28.5156)
                  <div> [166,465 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [166,465 189x57]  IMG=yV2zGDqTwUzGafOnvA53MLQkM.png alt=""
                <div> [30,343 460x330] position:absolute; top:0px; left:-17px; right:-17px; bottom:-28.4062px; opacity:0.54
                  <div> [30,343 460x330] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [30,343 460x330]  IMG=sZxYLpvH56E3RznKPcnAPYlPvo.jpg alt="gray concrete illustration"
              <div> [47,646 426x145] display:grid; position:relative; justifyContent:center; gap:1px; gridTemplateColumns:212.5px 212.5px; borderRadius:10px 10px 19px 19px
                <div> [47,646 213x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px
                  <div> [62,660 48x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [62,660 48x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="$45M+"
                  <div> [62,686 66x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [62,686 66x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Funds raised"
                <div> [261,646 213x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px
                  <div> [276,660 38x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [276,660 38x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="700%"
                  <div> [276,686 70x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [276,686 70x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Social growth"
                <div> [47,719 213x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px
                  <div> [62,733 29x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [62,733 29x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="41x"
                  <div> [62,759 44x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [62,759 44x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="ATH ROI"
                <div> [261,719 213x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px
                  <div> [276,733 19x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [276,733 19x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="84"
                  <div> [276,759 65x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [276,759 65x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Partnerships"
        <div> [510,326 460x482] position:relative
          <a name="Mobile"> [510,326 460x482] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:16px; BORDER(::after):0px 1px 0px 1px solid rgba(26, 26, 26, 0.06) radius 0px href=./project/aetna-health-data-ecosystem
            <div> [526,342 428x450] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:1px; padding:1px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
              <div> [527,343 426x302] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px; padding:10px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:19px 19px 10px 10px
                <div> [537,353 92x32] position:relative
                  <div name="In progress"> [537,353 92x32] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:8px 16px 7px; backgroundColor:rgb(255, 255, 255); borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgb(219, 219, 219) radius 100px
                    <div> [553,361 60x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-end; alignItems:center; gap:10px
                      <div> [553,362 60x16] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [553,362 60x16] fontFamily:"Geist Mono"; fontSize:10px; lineHeight:16px TEXT="Healthcare"
                <div name="Frame 2121451347"> [646,465 189x57] position:absolute; top:150.797px; left:213px; right:24px; bottom:93.7656px; transform:matrix(1, 0, 0, 1, -94.5, -28.5156)
                  <div> [646,465 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [646,465 189x57]  IMG=CLpXi6HupcG6YYxVylXG8rj7eo4.png alt=""
                <div> [510,343 460x330] position:absolute; top:0px; left:-17px; right:-17px; bottom:-28.4062px; opacity:0.54
                  <div> [510,343 460x330] position:absolute; top:0px; left:0px; right:0px; bottom:0px
```

## Computed Styles — phone 390px (layout/type props only)
```
        <div> [0,120 390x151] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
          <ul> [-13,120 390x151] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -12.903, 0)
            <li> [-13,125 579x141] display:list-item; position:relative
              <div> [-13,125 579x141] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h2> [-13,125 579x141] fontFamily:"Inter Display"; fontSize:128px; fontWeight:700; lineHeight:140.8px; letterSpacing:-5.12px TEXT="Our Works"
            <li> [626,120 151x151] display:list-item; position:relative
              <div> [626,120 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [626,120 151x151] position:relative
                  <div> [626,120 151x151] 
                    <svg> [626,120 151x151] 
            <li> [837,125 579x141] display:list-item; position:relative
              <div> [837,125 579x141] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h2> [837,125 579x141] fontFamily:"Inter Display"; fontSize:128px; fontWeight:700; lineHeight:140.8px; letterSpacing:-5.12px TEXT="Our Works"
            <li> [1476,120 151x151] display:list-item; position:relative
              <div> [1476,120 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [1476,120 151x151] position:relative
                  <div> [1476,120 151x151] 
                    <svg> [1476,120 151x151] 
    <div> [0,301 390x2410] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:0px 12px; BORDER(::after):1px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
      <div> [12,301 366x1446] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px 20px; gridTemplateColumns:repeat(3, minmax(50px, 1fr)); BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
        <div> [12,301 366x482] position:relative
          <a name="Mobile"> [12,301 366x482] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:16px; BORDER(::after):0px 1px 0px 1px solid rgba(26, 26, 26, 0.06) radius 0px href=./project/cigna-smart-health-systems
            <div> [28,317 334x450] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:1px; padding:1px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
              <div> [29,318 332x302] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px; padding:10px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:19px 19px 10px 10px
                <div> [39,328 110x32] position:relative
                  <div name="In progress"> [39,328 110x32] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:8px 16px 7px; backgroundColor:rgb(255, 255, 255); borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgb(219, 219, 219) radius 100px
                    <div> [55,336 78x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-end; alignItems:center; gap:10px
                      <div> [55,337 78x16] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [55,337 78x16] fontFamily:"Geist Mono"; fontSize:10px; lineHeight:16px TEXT="Healthcare AI"
                <div name="Frame 2121451347"> [101,440 189x57] position:absolute; top:150.797px; left:166px; right:-23px; bottom:93.7656px; transform:matrix(1, 0, 0, 1, -94.5, -28.5156)
                  <div> [101,440 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [101,440 189x57]  IMG=yV2zGDqTwUzGafOnvA53MLQkM.png alt=""
                <div> [12,318 366x330] position:absolute; top:0px; left:-17px; right:-17px; bottom:-28.4062px; opacity:0.54
                  <div> [12,318 366x330] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [12,318 366x330]  IMG=sZxYLpvH56E3RznKPcnAPYlPvo.jpg alt="gray concrete illustration"
              <div> [29,621 332x145] display:grid; position:relative; justifyContent:center; gap:1px; gridTemplateColumns:165.5px 165.5px; borderRadius:10px 10px 19px 19px
                <div> [29,621 166x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px
                  <div> [44,635 48x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [44,635 48x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="$45M+"
                  <div> [44,661 66x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [44,661 66x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Funds raised"
                <div> [196,621 166x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px
                  <div> [211,635 38x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [211,635 38x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="700%"
                  <div> [211,661 70x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [211,661 70x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Social growth"
                <div> [29,694 166x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px
                  <div> [44,708 29x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [44,708 29x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="41x"
                  <div> [44,734 44x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [44,734 44x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="ATH ROI"
                <div> [196,694 166x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px; padding:14px 11px 15px 15px; backgroundColor:rgb(255, 255, 255); borderRadius:10px
                  <div> [211,708 19x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [211,708 19x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="84"
                  <div> [211,734 65x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [211,734 65x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Partnerships"
        <div> [12,783 366x482] position:relative
          <a name="Mobile"> [12,783 366x482] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:16px; BORDER(::after):0px 1px 0px 1px solid rgba(26, 26, 26, 0.06) radius 0px href=./project/aetna-health-data-ecosystem
            <div> [28,799 334x450] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:1px; padding:1px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
              <div> [29,800 332x302] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px; padding:10px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:19px 19px 10px 10px
                <div> [39,810 92x32] position:relative
                  <div name="In progress"> [39,810 92x32] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:8px 16px 7px; backgroundColor:rgb(255, 255, 255); borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgb(219, 219, 219) radius 100px
                    <div> [55,818 60x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-end; alignItems:center; gap:10px
                      <div> [55,819 60x16] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [55,819 60x16] fontFamily:"Geist Mono"; fontSize:10px; lineHeight:16px TEXT="Healthcare"
                <div name="Frame 2121451347"> [101,922 189x57] position:absolute; top:150.797px; left:166px; right:-23px; bottom:93.7656px; transform:matrix(1, 0, 0, 1, -94.5, -28.5156)
                  <div> [101,922 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [101,922 189x57]  IMG=CLpXi6HupcG6YYxVylXG8rj7eo4.png alt=""
                <div> [12,800 366x330] position:absolute; top:0px; left:-17px; right:-17px; bottom:-28.4062px; opacity:0.54
                  <div> [12,800 366x330] position:absolute; top:0px; left:0px; right:0px; bottom:0px
```
