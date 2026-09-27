# Hero Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Hero.tsx`
- **Screenshots:** `seg-desktop-00.png`, mobile `seg-mobile-00.png`, `state-mobile-menu-open.png` (shows the card on phone)
- **Interaction model:** static + time-driven (logo marquee, autoplay video) + hover (Digital Brain card).

## DOM Structure
`<section>` white, padding 12px, `relative z-[4]`, overflow clip → inner card 1416×876 (i.e. `h-[calc(100vh-24px)]`-like; use fixed 876 at desktop per dump), bg rgb(240,240,240), radius 20px, padding `190px 0 160px`, overflow clip:
- **Background layer** (absolute inset 0, bottom −10px, z-1): full-cover image `PXNhr4LbXoJRWLAHfzNTYjvdR5Y.png` (object-cover) + a bottom panel (absolute from top 481px to bottom) with `background-image: linear-gradient(rgba(31,31,31,0) 0%, rgba(26,26,26,0.6) 100%)` and an 8-layer progressive backdrop blur (blur 0.039→5px, masks run top→bottom; copy stops from the dump).
- **Content row** (padding 0 40px, space-between, z-4): left column (gap 26) with H1 + paragraph (gap 14) and the Primary button; right: Digital Brain product card 320×303 (z-5).
  - H1 (width 500): Inter Display 500 70px/77px −2.8px; "Scale your ideas." in `rgba(26,26,26,0.4)`, line break, then "Build with AI." in `rgb(26,26,26)` (a span).
  - Paragraph (width 390): Inter Display 300 16px/24px +0.32px ink.
  - `<ExpandButton label="Start Build" size="md" tone="ink" />`
- **Bottom overlay** (absolute, top ≈729.8px, left/right 0, bottom −10px, padding `0 40px 50px`, z-3, column gap 10): white caption (300px wide, Inter Display 400 14px/19.6px +0.28px) + logo marquee row (1336×57).
- **Logo marquee:** `<Marquee speed={25} gap={10} mask="linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 8.03%, #000 92.01%, rgba(0,0,0,0) 100%)">`, radius 10. Items are 189×57 PNG logos (object-cover) — use the IMG files in the order they appear in the dump's `<ul>`.

## Digital Brain card
`<a>` 320×303, bg rgb(26,26,26), radius 24, padding 6, 1px inner border rgba(26,26,26,0.1), column:
- Video box 308×220, bg white, radius 20, overflow hidden: `<video autoPlay muted loop playsInline>` src `spVideo("2WO0ZC7yTbYNkxdTbPKkcOs30s.mp4")`, object-cover, z-3.
- Caption row (308×71, padding 14, z-3): "Digital Brain" (Inter Display 400 15px/21px ink) and "// Model v4.0.2" (300 12px/16.8px +0.12px, rgba(26,26,26,0.7)), gap 5; arrow icon 26×26 absolute at left 258px, vertically centred — Phosphor light "arrow-right" (svg01 below), colour rgb(31,31,31).
- Light overlay (absolute inset 0, z-2): image `i8M81i0PeB8FDxgPt1GPDik2kA.jpg` (object-cover) — so at rest the card body looks light.
- **Hover (~0.4s ease-out):** overlay opacity 1 → 0 (card body becomes dark), title → #fff, subtitle → rgba(255,255,255,0.5), arrow → #fff and moves from left 258 → 268.

## Text Content (verbatim)
- "Scale your ideas." / "Build with AI."
- "Deploy custom neural agents, LLMs, and automation in one seamless flow."
- "Start Build"
- "Digital Brain" / "// Model v4.0.2"
- "+2,400 active deployments and 8,200 brands trust our high-performance architecture."

## Responsive Behavior
- **Tablet (810–1199):** H1 56px/61.6px −2.24px; layout per tablet excerpt.
- **Phone (≤809):** section ~971px tall; H1 45px/49.5px −1.8px; stack: heading, paragraph, button, then the Digital Brain card full-width; caption + logo marquee at the bottom. See the phone excerpt for exact paddings/sizes.

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
<section> [0,0 1440x900] display:flex; position:relative; justifyContent:center; alignItems:center; gap:12px; padding:12px; backgroundColor:rgb(255, 255, 255); overflow:clip; zIndex:4
  <div> [12,12 1416x876] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:26px; padding:190px 0px 160px; backgroundColor:rgb(240, 240, 240); borderRadius:20px; overflow:clip
    <div> [12,202 1416x307] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:0px 40px; overflow:clip
      <div> [52,202 1006x307] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:26px; overflow:clip
        <div> [52,202 1006x216] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:14px; overflow:clip; zIndex:4
          <div> [52,202 500x154] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <h1> [52,202 500x154] fontFamily:"Inter Display"; fontSize:70px; fontWeight:500; lineHeight:77px; letterSpacing:-2.8px; textAlign:left; color:rgba(26, 26, 26, 0.4) TEXT="Scale your ideas."
              <span> [52,198 490x162] display:inline; color:rgb(26, 26, 26) TEXT="Build with AI."
          <div> [52,370 390x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <p> [52,370 390x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgb(26, 26, 26) TEXT="Deploy custom neural agents, LLMs, and automation in one seamless flow."
        <div> [52,444 200x65] position:relative; zIndex:4
          <a name="Primary"> [52,444 200x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(26, 26, 26); borderRadius:16px; overflow:clip; cursor:pointer href=./contact
            <div> [55,447 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:14px; overflow:clip
              <div> [73,469 30x15] position:relative; zIndex:1
                <div name="Animation 14"> [73,469 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                  <div> [73,469 30x15] position:relative
                    <div> [73,469 30x15] 
                      <svg> [73,469 30x15] 
            <div> [136,447 92x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
              <div> [146,465 72x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [146,465 72x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgb(255, 255, 255) TEXT="Start Build"
      <div> [1068,204 320x303] position:relative; zIndex:5
        <a name="Product"> [1068,204 320x303] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; padding:6px; backgroundColor:rgb(26, 26, 26); borderRadius:24px; overflow:clip; cursor:pointer; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 24px href=./digital-brain
          <div> [1074,210 308x220] position:relative; backgroundColor:rgb(255, 255, 255); borderRadius:20px; overflow:clip; zIndex:3
            <div> [1074,210 308x220] position:absolute; top:0px; left:0px; right:0px; bottom:0px
              <video> [1074,210 308x220] overflow:clip; objectFit:cover; cursor:auto VIDEO=2WO0ZC7yTbYNkxdTbPKkcOs30s.mp4
          <div> [1074,430 308x71] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:14px; overflow:clip; zIndex:3
            <div> [1088,444 280x43] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:5px; overflow:clip
              <div> [1088,444 280x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <p> [1088,444 280x21] fontFamily:"Inter Display"; fontSize:15px; lineHeight:21px; textAlign:left; color:rgb(26, 26, 26) TEXT="Digital Brain"
              <div> [1088,470 280x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <p> [1088,470 280x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="// Model v4.0.2"
            <div> [1332,452 26x26] position:absolute; top:21.8906px; left:258px; right:24px; bottom:22.9062px; zIndex:1
              <svg> [1332,452 26x26] display:inline-block; color:rgb(26, 26, 26); overflow:hidden
          <div> [1068,204 320x303] position:absolute; top:0px; left:0px; right:0px; bottom:0px; overflow:clip; zIndex:2
            <div> [1068,204 320x303] position:absolute; top:0px; left:0px; right:0px; bottom:0px
              <img> [1068,204 320x303] overflow:clip; objectFit:cover IMG=i8M81i0PeB8FDxgPt1GPDik2kA.jpg alt="a blurry image of a green and yellow background"
    <div> [12,742 1416x156] display:flex; position:absolute; top:729.781px; left:0px; right:0px; bottom:-10px; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; padding:0px 40px 50px; overflow:clip; zIndex:3
      <div> [52,742 300x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
        <p> [52,742 300x39] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="+2,400 active deployments and 8,200 brands trust our high-performance architecture."
      <div> [52,791 1336x57] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; borderRadius:10px; overflow:clip; filter:invert(0); maskImage:linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 8.03421%, rgb(0, 0, 0) 92.0098%, rgba(0, 0, 0, 0) 100%)
        <ul> [9,791 1336x57] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; transform:matrix(1, 0, 0, 1, -43.2717, 0)
          <li> [9,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451347"> [9,791 189x57] position:relative
              <div> [9,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [9,791 189x57] overflow:clip; objectFit:cover IMG=FIkeNB0CMpKHgxqL0a3aPHKlAyQ.png alt=""
          <li> [208,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451348"> [208,791 189x57] position:relative
              <div> [208,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [208,791 189x57] overflow:clip; objectFit:cover IMG=nJbNnh8E8FlHfzjwzNY6HTfjGnE.png alt=""
          <li> [407,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451350"> [407,791 189x57] position:relative
              <div> [407,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [407,791 189x57] overflow:clip; objectFit:cover IMG=3EwtMm1CTn3V13Xu2ufZVUnW4.png alt=""
          <li> [606,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451351"> [606,791 189x57] position:relative
              <div> [606,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [606,791 189x57] overflow:clip; objectFit:cover IMG=C7otSLQhZagCjkAC4M6MX1Ns.png alt=""
          <li> [805,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451352"> [805,791 189x57] position:relative
              <div> [805,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [805,791 189x57] overflow:clip; objectFit:cover IMG=PNxA5d1umCQiNSezotkgCnArwqU.png alt=""
          <li> [1004,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451347"> [1004,791 189x57] position:relative
              <div> [1004,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [1004,791 189x57] overflow:clip; objectFit:cover IMG=FIkeNB0CMpKHgxqL0a3aPHKlAyQ.png alt=""
          <li> [1203,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451348"> [1203,791 189x57] position:relative
              <div> [1203,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [1203,791 189x57] overflow:clip; objectFit:cover IMG=nJbNnh8E8FlHfzjwzNY6HTfjGnE.png alt=""
          <li> [1402,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451350"> [1402,791 189x57] position:relative
              <div> [1402,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [1402,791 189x57] overflow:clip; objectFit:cover IMG=3EwtMm1CTn3V13Xu2ufZVUnW4.png alt=""
          <li> [1601,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451351"> [1601,791 189x57] position:relative
              <div> [1601,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [1601,791 189x57] overflow:clip; objectFit:cover IMG=C7otSLQhZagCjkAC4M6MX1Ns.png alt=""
          <li> [1800,791 189x57] display:list-item; position:relative
            <div name="Frame 2121451352"> [1800,791 189x57] position:relative
              <div> [1800,791 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [1800,791 189x57] overflow:clip; objectFit:cover IMG=PNxA5d1umCQiNSezotkgCnArwqU.png alt=""
    <div> [12,12 1416x886] position:absolute; top:0px; left:0px; right:0px; bottom:-10px; overflow:clip; zIndex:1
      <div> [12,12 1416x886] position:absolute; top:0px; left:0px; right:0px; bottom:0px
        <img> [12,12 1416x886] overflow:clip; objectFit:cover IMG=PXNhr4LbXoJRWLAHfzNTYjvdR5Y.png alt=""
      <div> [12,493 1416x405] position:absolute; top:481px; left:0px; right:0px; bottom:0px; backgroundImage:linear-gradient(rgba(31, 31, 31, 0) 0%, rgba(26, 26, 26, 0.6) 100%); overflow:clip
        <div> [12,493 1416x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
          <div> [12,493 1416x405] position:relative; overflow:hidden
            <div> [12,493 1416x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:1; backdropFilter:blur(0.0390625px); maskImage:linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)
            <div> [12,493 1416x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:2; backdropFilter:blur(0.078125px); maskImage:linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)
            <div> [12,493 1416x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:3; backdropFilter:blur(0.15625px); maskImage:linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)
            <div> [12,493 1416x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:4; backdropFilter:blur(0.3125px); maskImage:linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)
            <div> [12,493 1416x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:5; backdropFilter:blur(0.625px); maskImage:linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)
            <div> [12,493 1416x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:6; backdropFilter:blur(1.25px); maskImage:linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)
            <div> [12,493 1416x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:7; backdropFilter:blur(2.5px); maskImage:linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%, rgba(0, 0, 0, 0) 112.5%)
            <div> [12,493 1416x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:8; backdropFilter:blur(5px); maskImage:linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%, rgb(0, 0, 0) 112.5%, rgba(0, 0, 0, 0) 125%)
```

## Computed Styles — tablet 1000px (layout/type props only)
```
<section> [0,0 1000x1045] display:flex; position:relative; justifyContent:center; alignItems:center; gap:52px; padding:12px; backgroundColor:rgb(255, 255, 255)
  <div> [12,12 976x1021] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:76px; padding:150px 0px 40px; backgroundColor:rgb(240, 240, 240); borderRadius:20px
    <div> [12,162 976x649] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:70px; padding:0px 40px
      <div> [52,162 896x276] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:26px
        <div> [52,162 896x185] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:14px
          <div> [52,162 500x123] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <h1> [52,162 500x123] fontFamily:"Inter Display"; fontSize:56px; fontWeight:500; lineHeight:61.6px; letterSpacing:-2.24px TEXT="Scale your ideas."
              <span> [52,158 392x130] display:inline TEXT="Build with AI."
          <div> [52,299 390x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [52,299 390x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Deploy custom neural agents, LLMs, and automation in one seamless flow."
        <div> [52,373 200x65] position:relative
          <a name="Primary"> [52,373 200x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(26, 26, 26); borderRadius:16px href=./contact
            <div> [55,376 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:14px
              <div> [73,398 30x15] position:relative
                <div name="Animation 6"> [73,398 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                  <div> [73,398 30x15] position:relative
                    <div> [73,398 30x15] 
                      <svg> [73,398 30x15] 
            <div> [136,376 92x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
              <div> [146,394 72x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [146,394 72x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Start Build"
      <div> [52,508 320x303] position:relative
        <a name="Product"> [52,508 320x303] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; padding:6px; backgroundColor:rgb(26, 26, 26); borderRadius:24px; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 24px href=./digital-brain
          <div> [58,514 308x220] position:relative; backgroundColor:rgb(255, 255, 255); borderRadius:20px
            <div> [58,514 308x220] position:absolute; top:0px; left:0px; right:0px; bottom:0px
              <video> [58,514 308x220]  VIDEO=2WO0ZC7yTbYNkxdTbPKkcOs30s.mp4
          <div> [58,734 308x71] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:14px
            <div> [72,748 280x43] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:5px
              <div> [72,748 280x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [72,748 280x21] fontFamily:"Inter Display"; fontSize:15px; lineHeight:21px TEXT="Digital Brain"
              <div> [72,774 280x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [72,774 280x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="// Model v4.0.2"
            <div> [316,756 26x26] position:absolute; top:21.8906px; left:258px; right:24px; bottom:22.9062px
              <svg> [316,756 26x26] display:inline-block
          <div> [52,508 320x303] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [52,508 320x303] position:absolute; top:0px; left:0px; right:0px; bottom:0px
              <img> [52,508 320x303]  IMG=i8M81i0PeB8FDxgPt1GPDik2kA.jpg alt="a blurry image of a green and yellow background"
    <div> [12,887 976x106] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; padding:0px 40px
      <div> [52,887 300x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
        <p> [52,887 300x39] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="+2,400 active deployments and 8,200 brands trust our high-performance architecture."
      <div> [52,936 896x57] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; borderRadius:10px
        <ul> [-3,936 896x57] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; transform:matrix(1, 0, 0, 1, -55.2683, 0)
          <li> [-3,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451347"> [-3,936 189x57] position:relative
              <div> [-3,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [-3,936 189x57]  IMG=FIkeNB0CMpKHgxqL0a3aPHKlAyQ.png alt=""
          <li> [196,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451348"> [196,936 189x57] position:relative
              <div> [196,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [196,936 189x57]  IMG=nJbNnh8E8FlHfzjwzNY6HTfjGnE.png alt=""
          <li> [395,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451350"> [395,936 189x57] position:relative
              <div> [395,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [395,936 189x57]  IMG=3EwtMm1CTn3V13Xu2ufZVUnW4.png alt=""
          <li> [594,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451351"> [594,936 189x57] position:relative
              <div> [594,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [594,936 189x57]  IMG=C7otSLQhZagCjkAC4M6MX1Ns.png alt=""
          <li> [793,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451352"> [793,936 189x57] position:relative
              <div> [793,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [793,936 189x57]  IMG=PNxA5d1umCQiNSezotkgCnArwqU.png alt=""
          <li> [992,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451347"> [992,936 189x57] position:relative
              <div> [992,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [992,936 189x57]  IMG=FIkeNB0CMpKHgxqL0a3aPHKlAyQ.png alt=""
          <li> [1191,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451348"> [1191,936 189x57] position:relative
              <div> [1191,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [1191,936 189x57]  IMG=nJbNnh8E8FlHfzjwzNY6HTfjGnE.png alt=""
          <li> [1390,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451350"> [1390,936 189x57] position:relative
              <div> [1390,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [1390,936 189x57]  IMG=3EwtMm1CTn3V13Xu2ufZVUnW4.png alt=""
          <li> [1589,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451351"> [1589,936 189x57] position:relative
              <div> [1589,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [1589,936 189x57]  IMG=C7otSLQhZagCjkAC4M6MX1Ns.png alt=""
          <li> [1788,936 189x57] display:list-item; position:relative
            <div name="Frame 2121451352"> [1788,936 189x57] position:relative
              <div> [1788,936 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [1788,936 189x57]  IMG=PNxA5d1umCQiNSezotkgCnArwqU.png alt=""
    <div> [12,12 976x1031] position:absolute; top:0px; left:0px; right:0px; bottom:-10px
      <div> [12,12 976x1031] position:absolute; top:0px; left:0px; right:0px; bottom:0px
        <img> [12,12 976x1031]  IMG=PXNhr4LbXoJRWLAHfzNTYjvdR5Y.png alt=""
      <div> [12,638 976x405] position:absolute; top:626.203px; left:0px; right:0px; bottom:0px
        <div> [12,638 976x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
          <div> [12,638 976x405] position:relative
            <div> [12,638 976x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,638 976x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,638 976x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,638 976x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,638 976x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,638 976x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,638 976x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,638 976x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
```

## Computed Styles — phone 390px (layout/type props only)
```
<section> [0,0 390x971] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:52px; padding:12px; backgroundColor:rgb(255, 255, 255)
  <div> [12,12 366x947] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:76px; padding:130px 0px 40px; backgroundColor:rgb(240, 240, 240); borderRadius:20px
    <div> [12,142 366x595] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px; padding:0px 20px
      <div> [32,142 326x252] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:26px
        <div> [32,142 326x161] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:14px
          <div> [32,142 326x99] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <h1> [32,142 326x99] fontFamily:"Inter Display"; fontSize:45px; fontWeight:500; lineHeight:49.5px; letterSpacing:-1.8px TEXT="Scale your ideas."
              <span> [32,139 315x105] display:inline TEXT="Build with AI."
          <div> [32,255 326x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [32,255 326x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Deploy custom neural agents, LLMs, and automation in one seamless flow."
        <div> [32,329 200x65] position:relative
          <a name="Primary"> [32,329 200x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(26, 26, 26); borderRadius:16px href=./contact
            <div> [35,332 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:14px
              <div> [53,354 30x15] position:relative
                <div name="Animation 14"> [53,354 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                  <div> [53,354 30x15] position:relative
                    <div> [53,354 30x15] 
                      <svg> [53,354 30x15] 
            <div> [116,332 92x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
              <div> [126,350 72x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [126,350 72x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Start Build"
      <div> [32,434 326x303] position:relative
        <a name="Product"> [32,434 326x303] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; padding:6px; backgroundColor:rgb(26, 26, 26); borderRadius:24px; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 24px href=./digital-brain
          <div> [38,440 314x220] position:relative; backgroundColor:rgb(255, 255, 255); borderRadius:20px
            <div> [38,440 314x220] position:absolute; top:0px; left:0px; right:0px; bottom:0px
              <video> [38,440 314x220]  VIDEO=2WO0ZC7yTbYNkxdTbPKkcOs30s.mp4
          <div> [38,660 314x71] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:14px
            <div> [52,674 286x43] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:5px
              <div> [52,674 280x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [52,674 280x21] fontFamily:"Inter Display"; fontSize:15px; lineHeight:21px TEXT="Digital Brain"
              <div> [52,700 280x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [52,700 280x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="// Model v4.0.2"
            <div> [302,682 26x26] position:absolute; top:21.8906px; left:264px; right:24px; bottom:22.9062px
              <svg> [302,682 26x26] display:inline-block
          <div> [32,434 326x303] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [32,434 326x303] position:absolute; top:0px; left:0px; right:0px; bottom:0px
              <img> [32,434 326x303]  IMG=i8M81i0PeB8FDxgPt1GPDik2kA.jpg alt="a blurry image of a green and yellow background"
    <div> [12,813 366x106] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; padding:0px 20px
      <div> [32,813 300x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
        <p> [32,813 300x39] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="+2,400 active deployments and 8,200 brands trust our high-performance architecture."
      <div> [32,862 326x57] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; borderRadius:10px
        <ul> [-49,862 326x57] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; transform:matrix(1, 0, 0, 1, -81.435, 0)
          <li> [-49,862 189x57] display:list-item; position:relative
            <div name="Frame 2121451347"> [-49,862 189x57] position:relative
              <div> [-49,862 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [-49,862 189x57]  IMG=FIkeNB0CMpKHgxqL0a3aPHKlAyQ.png alt=""
          <li> [150,862 189x57] display:list-item; position:relative
            <div name="Frame 2121451348"> [150,862 189x57] position:relative
              <div> [150,862 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [150,862 189x57]  IMG=nJbNnh8E8FlHfzjwzNY6HTfjGnE.png alt=""
          <li> [349,862 189x57] display:list-item; position:relative
            <div name="Frame 2121451350"> [349,862 189x57] position:relative
              <div> [349,862 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [349,862 189x57]  IMG=3EwtMm1CTn3V13Xu2ufZVUnW4.png alt=""
          <li> [548,862 189x57] display:list-item; position:relative
            <div name="Frame 2121451351"> [548,862 189x57] position:relative
              <div> [548,862 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [548,862 189x57]  IMG=C7otSLQhZagCjkAC4M6MX1Ns.png alt=""
          <li> [747,862 189x57] display:list-item; position:relative
            <div name="Frame 2121451352"> [747,862 189x57] position:relative
              <div> [747,862 189x57] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [747,862 189x57]  IMG=PNxA5d1umCQiNSezotkgCnArwqU.png alt=""
    <div> [12,-146 366x1115] position:absolute; top:-158px; left:0px; right:0px; bottom:-10px
      <div> [12,-146 366x1115] position:absolute; top:0px; left:0px; right:0px; bottom:0px
        <img> [12,-146 366x1115]  IMG=PXNhr4LbXoJRWLAHfzNTYjvdR5Y.png alt=""
      <div> [12,564 366x405] position:absolute; top:710.016px; left:0px; right:0px; bottom:0px
        <div> [12,564 366x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
          <div> [12,564 366x405] position:relative
            <div> [12,564 366x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,564 366x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,564 366x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,564 366x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,564 366x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,564 366x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,564 366x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
            <div> [12,564 366x405] position:absolute; top:0px; left:0px; right:0px; bottom:0px
```

## SVG markup (inline these as React components)
### svg01
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(31, 31, 31)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(31, 31, 31); color: rgb(31, 31, 31); flex-shrink: 0;"><g color="rgb(31, 31, 31)" weight="light"><path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"></path></g></svg>
```
