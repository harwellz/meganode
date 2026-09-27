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

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
<section> [0,0 1440x855] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
  <div> [0,0 1440x855] position:relative; zIndex:4
    <div name="Desktop default"> [0,0 1440x855] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(26, 26, 26); overflow:clip
      <div> [0,0 1440x855] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:0px; flexDirection:column; justifyContent:space-between; alignItems:center; padding:100px 40px; overflow:clip; zIndex:8
        <div> [40,100 1360x72] display:flex; position:relative; justifyContent:space-between; alignItems:flex-start; overflow:clip
          <div> [40,100 380x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <p> [40,100 380x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgb(255, 255, 255) TEXT="Exploring the intersection of human creativity and machine logic to redefine what's possible in the digital age."
          <div> [1270,100 130x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:6px 14px 6px 6px; backgroundColor:rgba(255, 255, 255, 0.06); borderRadius:100px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 100px
            <div> [1276,106 24x24] position:relative
              <svg> [1276,106 24x24] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
            <div> [1306,108 80x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <p> [1306,108 80x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="2mins watch"
        <div> [40,636 1360x119] display:flex; position:relative; justifyContent:space-between; alignItems:flex-end; overflow:clip
          <div> [40,636 400x119] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <h2> [40,636 400x119] fontFamily:"Inter Display"; fontSize:54px; fontWeight:500; lineHeight:59.4px; letterSpacing:-2.16px; textAlign:left; color:rgb(255, 255, 255) TEXT="Intelligence by Design."
          <div> [1264,678 136x77] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):16px 16px 16px 16px solid rgb(255, 255, 255) radius 100px
      <div> [0,0 1440x20] position:absolute; top:0px; left:0px; right:0px; bottom:835px; backgroundColor:rgb(255, 255, 255); borderRadius:0px 0px 20px 20px; overflow:clip; zIndex:9
      <div> [0,825 1440x30] position:absolute; top:825px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(26, 26, 26); overflow:clip; zIndex:5
      <div> [662,370 116x116] position:absolute; top:369.5px; left:662px; right:662px; bottom:369.5px; zIndex:10; cursor:pointer
        <div> [663,370 115x115] position:absolute; top:58px; left:58px; right:-57px; bottom:-57px; zIndex:10; transform:matrix(1, 0, 0, 1, -57.5, -57.5)
          <div name="Play"> [663,370 115x115] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
            <div> [663,370 115x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:0px; justifyContent:center; alignItems:center; gap:10px; borderRadius:100%; overflow:clip; zIndex:1; BORDER(::after):1px 1px 1px 1px solid rgb(255, 255, 255) radius 100%
            <div> [702,412 38x32] display:flex; position:absolute; top:57.5px; left:58.6406px; right:18.3594px; bottom:25.5px; justifyContent:center; alignItems:center; gap:10px; transform:matrix(1, 0, 0, 1, -19, -16)
              <div> [705,409 32x38] position:relative; transform:matrix(0, 1, -1, 0, 0, 0)
                <div> [705,409 32x38] 
                  <svg> [705,409 32x38] overflow:hidden
      <div> [0,0 1440x855] position:absolute; top:0px; left:0px; right:0px; bottom:0px; gap:200px; borderRadius:0px 0px 20px 20px; zIndex:6
        <div> [0,0 1440x855] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:0px 0px 20px 20px
          <img> [0,0 1440x855] borderRadius:0px 0px 20px 20px; overflow:clip; objectFit:cover IMG=Y43VBCJU98vH9ESfLTOmhYvVKjY.jpg alt="activity tracker reading 11 36 Mo 21"
      <div> [0,0 1440x855] position:absolute; top:0px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(26, 26, 26); borderRadius:0px 0px 20px 20px; opacity:0; overflow:clip; zIndex:7
```

## Computed Styles — tablet 1000px (layout/type props only)
```
<section> [0,0 1000x855] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
  <div> [0,0 1000x855] position:relative
    <div name="Desktop default"> [0,0 1000x855] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(26, 26, 26)
      <div> [0,0 1000x855] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:0px; flexDirection:column; justifyContent:space-between; alignItems:center; padding:100px 40px
        <div> [40,100 920x72] display:flex; position:relative; justifyContent:space-between; alignItems:flex-start
          <div> [40,100 380x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [40,100 380x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Exploring the intersection of human creativity and machine logic to redefine what's possible in the digital age."
          <div> [830,100 130x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:6px 14px 6px 6px; backgroundColor:rgba(255, 255, 255, 0.06); borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 100px
            <div> [836,106 24x24] position:relative
              <svg> [836,106 24x24] display:inline-block
            <div> [866,108 80x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [866,108 80x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="2mins watch"
        <div> [40,678 920x77] display:flex; position:relative; justifyContent:space-between; alignItems:flex-end
          <div> [40,708 400x47] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <h2> [40,708 400x47] fontFamily:"Inter Display"; fontSize:43px; fontWeight:500; lineHeight:47.3px; letterSpacing:-1.72px TEXT="Intelligence by Design."
          <div> [824,678 136x77] position:relative; borderRadius:100px; BORDER(::after):16px 16px 16px 16px solid rgb(255, 255, 255) radius 100px
      <div> [0,0 1000x20] position:absolute; top:0px; left:0px; right:0px; bottom:835px; backgroundColor:rgb(255, 255, 255); borderRadius:0px 0px 20px 20px
      <div> [0,825 1000x30] position:absolute; top:825px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(26, 26, 26)
      <div> [442,370 116x116] position:absolute; top:369.5px; left:442px; right:442px; bottom:369.5px
        <div> [443,370 115x115] position:absolute; top:58px; left:58px; right:-57px; bottom:-57px; transform:matrix(1, 0, 0, 1, -57.5, -57.5)
          <div name="Play"> [443,370 115x115] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
            <div> [443,370 115x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:0px; justifyContent:center; alignItems:center; gap:10px; borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgb(255, 255, 255) radius 100%
            <div> [482,412 38x32] display:flex; position:absolute; top:57.5px; left:58.6406px; right:18.3594px; bottom:25.5px; justifyContent:center; alignItems:center; gap:10px; transform:matrix(1, 0, 0, 1, -19, -16)
              <div> [485,409 32x38] position:relative; transform:matrix(0, 1, -1, 0, 0, 0)
                <div> [485,409 32x38] 
                  <svg> [485,409 32x38] 
      <div> [0,0 1000x855] position:absolute; top:0px; left:0px; right:0px; bottom:0px; gap:200px; borderRadius:0px 0px 20px 20px
        <div> [0,0 1000x855] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:0px 0px 20px 20px
          <img> [0,0 1000x855] borderRadius:0px 0px 20px 20px IMG=Y43VBCJU98vH9ESfLTOmhYvVKjY.jpg alt="activity tracker reading 11 36 Mo 21"
      <div> [0,0 1000x855] position:absolute; top:0px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(26, 26, 26); borderRadius:0px 0px 20px 20px; opacity:0
```

## Computed Styles — phone 390px (layout/type props only)
```
<section> [0,0 390x855] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
  <div> [0,0 390x855] position:relative
    <div name="Mobile default"> [0,0 390x855] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(26, 26, 26)
      <div> [0,0 390x855] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:0px; flexDirection:column; justifyContent:space-between; alignItems:center; padding:100px 20px
        <div> [20,100 350x138] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:30px
          <div> [20,166 350x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [20,166 350x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Exploring the intersection of human creativity and machine logic to redefine what's possible in the digital age."
          <div> [20,100 130x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:6px 14px 6px 6px; backgroundColor:rgba(255, 255, 255, 0.06); borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 100px
            <div> [26,106 24x24] position:relative
              <svg> [26,106 24x24] display:inline-block
            <div> [56,108 80x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [56,108 80x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="2mins watch"
        <div> [20,599 350x156] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:30px
          <div> [20,599 300x77] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <h2> [20,599 300x77] fontFamily:"Inter Display"; fontSize:35px; fontWeight:500; lineHeight:38.5px; letterSpacing:-1.4px TEXT="Intelligence by Design."
          <div> [20,706 86x49] position:relative; borderRadius:100px; BORDER(::after):11px 11px 11px 11px solid rgb(255, 255, 255) radius 100px
      <div> [0,0 390x20] position:absolute; top:0px; left:0px; right:0px; bottom:835px; backgroundColor:rgb(255, 255, 255); borderRadius:0px 0px 20px 20px
      <div> [0,825 390x30] position:absolute; top:825px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(26, 26, 26)
      <div> [137,348 116x116] position:absolute; top:348.125px; left:137px; right:137px; bottom:390.875px
        <div> [138,349 115x115] position:absolute; top:58px; left:58px; right:-57px; bottom:-57px; transform:matrix(1, 0, 0, 1, -57.5, -57.5)
          <div name="Play"> [138,349 115x115] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
            <div> [138,349 115x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:0px; justifyContent:center; alignItems:center; gap:10px; borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgb(255, 255, 255) radius 100%
            <div> [177,390 38x32] display:flex; position:absolute; top:57.5px; left:58.6406px; right:18.3594px; bottom:25.5px; justifyContent:center; alignItems:center; gap:10px; transform:matrix(1, 0, 0, 1, -19, -16)
              <div> [180,387 32x38] position:relative; transform:matrix(0, 1, -1, 0, 0, 0)
                <div> [180,387 32x38] 
                  <svg> [180,387 32x38] 
      <div> [0,0 390x855] position:absolute; top:0px; left:0px; right:0px; bottom:0px; gap:200px; borderRadius:0px 0px 20px 20px
        <div> [0,0 390x855] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:0px 0px 20px 20px
          <img> [0,0 390x855] borderRadius:0px 0px 20px 20px IMG=Y43VBCJU98vH9ESfLTOmhYvVKjY.jpg alt="activity tracker reading 11 36 Mo 21"
      <div> [0,0 390x855] position:absolute; top:0px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(26, 26, 26); borderRadius:0px 0px 20px 20px; opacity:0
```

## SVG markup (inline these as React components)
### svg10
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"><g color="rgb(255, 255, 255)" weight="regular"><path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path></g></svg>
```
### svg11
```html
<svg style="width:100%;height:100%;" preserveAspectRatio="none" width="100%" height="100%"><svg viewBox="0 0 38 32" overflow="visible"><path d="M 19 4 L 35.454 28 L 2.546 28 Z" fill="rgb(255, 255, 255)"></path></svg></svg>
```
