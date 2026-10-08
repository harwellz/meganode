# Testimonials Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Testimonials.tsx` (client component)
- **Screenshots:** `seg-desktop-06.png` (bottom), `seg-desktop-07.png`, `state-testimonials-0.png`, `state-testimonials-next.png`; mobile `seg-mobile-11.png`, `seg-mobile-12.png`
- **Interaction model:** click-driven carousel (Prev/Next) + time-driven big marquee & ticker + fade-in.

## DOM Structure
`<section id="test-2">` bg #fff, `relative z-[4]`, overflow clip:
- **Dark strip** absolute top 0, full width, height 20px, bg rgb(26,26,26), `rounded-b-[20px]`, z-9 (continues the dark section's rounded bottom).
- **Header** (padding `170px 0 120px`, z-2, gap 40): `<BigMarquee title="Experiences" />`; below it a row split 50/50: left half has a 1px hairline (720×1 at mid-height, rgba(26,26,26,0.1)), right half has the description (Inter Display 300 16px/24px +0.32px ink, width ~390) and under it (gap ~24) two 40×40 circular buttons (bg rgb(26,26,26), white chevron icons, gap 10; aria-labels "Previous"/"Next").
- **Carousel** (padding `0 30px`, z-2, height 394): the track starts at x≈720 (right half) but bleeds across the whole width to the left and right. Cards 285×394, gap 16, radius 20, bg rgb(240,240,240), padding ~20:
  - Header chip: pill (bg #fff, radius 100, height ~44, padding 4 14 4 4) with avatar 36px circle + company logo image (~60×18, dark).
  - Quote icon (svg09, 24×24, rgba(26,26,26,0.2)) then quote text Inter Display 400 21px/25.2px −0.21px ink (5 lines).
  - Footer with 2px left rule rgba(26,26,26,0.1) (padding-left 12): name Geist Mono 500 13px uppercase ink + role Inter Display 300 12px/16.8px rgba(26,26,26,0.6).
- **Ticker** at the bottom (padding-bottom 30, gap 180 above): `<AnnouncementTicker />` inside a 0-height relative wrapper (see "Variant 1").

## States & Behaviors
- Carousel is an infinite loop: render the 4 cards repeated (e.g. ×5) and start translated so the card sequence begins at x≈720 with earlier copies visible on the left (initial translateX −1204px in the original track).
- **Next:** translate the track by −903px (3 × 301); **Previous:** +903px. Transition ~0.6s cubic-bezier(0.22,1,0.36,1). Wrap seamlessly (reset without animation when passing the ends).
- No autoplay.

## Card data (order)
1. Avatar `w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg`, logo `3EwtMm1CTn3V13Xu2ufZVUnW4.png` — "The custom agentic workflows they built reduced our manual data entry by 90%, saving us hundreds of hours weekly." — MARCUS CHENG, Head of AI, Aetna
2. Avatar `rLkyXpp1TSaADDj0EYjy9c8uw.jpg`, logo `yV2zGDqTwUzGafOnvA53MLQkM.png` — "Their team didn't just provide tools; they provided a roadmap for AI integration that actually makes sense for ROI." — DAVID ROSSI, Lead Dev, Cigna
3. Avatar `IIK9uqdpvVqpPgAHuhf8s9r4Ee4.jpg`, logo `RlGLod5QkyznR4SBy9PQw3raa80.png` — "A game-changer for our R&D. The neural infrastructure is robust, secure, and perfectly tailored to our niche stack." — SARAH JENKINS, CTO, Anthem Group
4. Avatar `QHChEEbpWFuUCrhS6zqN5BK4Rr0.jpg`, logo `qA80rXn5OyEhaPlYKJ8gIEE6Ds.png` — "Incredible technical depth. They handled our complex RAG implementation with ease and delivered ahead of schedule." — ELENA VANCE, VP Eng, UnitedHealth
(Logos are white PNGs shown dark: apply `filter: invert(1)` or brightness(0) as needed to match the screenshot.) Cards link to `https://contra.com/sirdelani/work?r=sirdelani` (target _blank).

## Text Content
Description: "Empowering global enterprises through bespoke neural architectures and autonomous agentic workflows."

## Responsive Behavior
- **Phone:** big marquee 128px; description + arrows full width (padding 20); carousel shows ~1.2 cards (card 285 wide) starting at the left padding (`seg-mobile-12.png`); arrows shift by 1 card.
- **Tablet:** see tablet excerpt.

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
<section> [0,0 1440x1202] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(255, 255, 255); overflow:clip; zIndex:4
  <div> [0,0 1440x598] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:170px 0px 120px; zIndex:2
    <div> [0,170 1440x308] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:40px
      <div> [0,170 1440x220] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
        <ul> [-12,170 1440x220] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -12.445, 0)
          <li> [-12,170 1054x220] display:list-item; position:relative
            <div> [-12,170 1054x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <h2> [-12,170 1054x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Experiences"
          <li> [1102,205 151x151] display:list-item; position:relative
            <div> [1072,174 212x212] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip; transform:matrix(0.609592, -0.792715, 0.792715, 0.609592, 0, 0)
              <div> [1072,174 212x212] position:relative
                <div> [1072,174 212x212] 
                  <svg> [1072,174 212x212] 
          <li> [1313,170 1054x220] display:list-item; position:relative
            <div> [1313,170 1054x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <h2> [1313,170 1054x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Experiences"
          <li> [2427,205 151x151] display:list-item; position:relative
            <div> [2427,205 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [2427,205 151x151] position:relative
                <div> [2427,205 151x151] 
                  <svg> [2427,205 151x151] 
      <div> [0,430 1440x48] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; overflow:clip
        <div> [0,454 720x1] position:relative; overflow:clip
        <div name="Experiences Description"> [720,430 720x48] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; overflow:clip
          <div> [720,430 440x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <p> [720,430 440x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgb(26, 26, 26) TEXT="Empowering global enterprises through bespoke neural architectures and autonomous agentic workflows."
  <div> [0,598 1440x604] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:180px; padding:0px 0px 30px
    <div> [0,598 1440x394] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:0px; padding:0px 30px; zIndex:2
      <div> [30,598 690x394] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
      <div> [720,598 690x394] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; zIndex:2
        <div> [720,598 285x394] position:relative
          <section> [720,598 285x394] display:flex; alignItems:center
            <div> [720,598 285x394] position:absolute; top:0px; left:0px; right:0px; bottom:0px
              <ul> [-484,598 285x394] display:flex; alignItems:center; gap:16px; transform:matrix(1, 0, 0, 1, -1204, 0)
                <div> [-484,598 285x394] position:relative
                  <a name="Desktop"> [-484,598 285x394] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:10px; backgroundColor:rgb(240, 240, 240); borderRadius:20px; overflow:clip; cursor:default href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [-474,608 124x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; padding:6px; borderRadius:100px; overflow:clip; zIndex:2; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 100px
                      <div> [-468,614 32x32] position:relative; borderRadius:100%; overflow:clip
                        <div> [-468,614 32x32] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%
                          <img> [-468,614 32x32] borderRadius:100%; overflow:clip; objectFit:cover IMG=w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg alt="A cartoon character with a weird haircut"
                      <div name="Frame 2121451350"> [-436,618 80x24] position:relative; opacity:0.67; filter:invert(1)
                        <div> [-436,618 80x24] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                          <img> [-436,618 80x24] overflow:clip; objectFit:cover IMG=3EwtMm1CTn3V13Xu2ufZVUnW4.png alt=""
                    <div> [-474,703 265x156] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:20px 10px 10px; zIndex:2
                      <div> [-464,723 245x126] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:2; whiteSpace:pre-wrap
                        <p> [-464,723 245x126] fontFamily:"Inter Display"; fontSize:21px; lineHeight:25.2px; letterSpacing:-0.21px; textAlign:left; color:rgb(26, 26, 26) TEXT="The custom agentic workflows they built reduced our manual data entry by 90%, saving us hundreds of hours weekly."
                      <svg> [-464,693 24x24] position:absolute; top:1.54688px; left:10px; right:231px; bottom:130.469px; overflow:hidden; zIndex:0; transform:matrix(1, 0, 0, 1, 0, -12)
                    <div> [-474,910 265x72] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:10px; padding:10px 10px 20px; overflow:clip; zIndex:2
                      <div> [-464,920 3x42] position:relative; backgroundColor:rgba(26, 26, 26, 0.1); borderRadius:10px; overflow:clip
                      <div> [-451,920 232x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px
                        <div> [-451,920 232x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                          <h5> [-451,920 232x21] fontFamily:"IBM Plex Mono"; fontSize:13px; fontWeight:500; lineHeight:20.8px; textAlign:left; textTransform:uppercase; color:rgb(26, 26, 26) TEXT="MARCUS CHENG"
                        <div> [-451,945 232x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                          <p> [-451,945 232x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgba(26, 26, 26, 0.7) TEXT="Head of AI, Aetna"
                    <div> [-484,598 285x394] position:absolute; top:0px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; opacity:0; overflow:clip; zIndex:1
                <div> [-183,598 285x394] position:relative
                  <a name="Desktop"> [-183,598 285x394] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:10px; backgroundColor:rgb(240, 240, 240); borderRadius:20px; overflow:clip; cursor:default href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [-173,608 124x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; padding:6px; borderRadius:100px; overflow:clip; zIndex:2; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 100px
                      <div> [-167,614 32x32] position:relative; borderRadius:100%; overflow:clip
                        <div> [-167,614 32x32] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%
                          <img> [-167,614 32x32] borderRadius:100%; overflow:clip; objectFit:cover IMG=rLkyXpp1TSaADDj0EYjy9c8uw.jpg alt="A glass sculpture of a woman's head and shoulders"
                      <div name="Frame 2121451350"> [-135,618 80x24] position:relative; opacity:0.67; filter:invert(1)
                        <div> [-135,618 80x24] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                          <img> [-135,618 80x24] overflow:clip; objectFit:cover IMG=yV2zGDqTwUzGafOnvA53MLQkM.png alt=""
                    <div> [-173,703 265x156] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:20px 10px 10px; zIndex:2
                      <div> [-163,723 245x126] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:2; whiteSpace:pre-wrap
                        <p> [-163,723 245x126] fontFamily:"Inter Display"; fontSize:21px; lineHeight:25.2px; letterSpacing:-0.21px; textAlign:left; color:rgb(26, 26, 26) TEXT="Their team didn't just provide tools; they provided a roadmap for AI integration that actually makes sense for ROI."
                      <svg> [-163,693 24x24] position:absolute; top:1.54688px; left:10px; right:231px; bottom:130.469px; overflow:hidden; zIndex:0; transform:matrix(1, 0, 0, 1, 0, -12)
                    <div> [-173,910 265x72] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:10px; padding:10px 10px 20px; overflow:clip; zIndex:2
                      <div> [-163,920 3x42] position:relative; backgroundColor:rgba(26, 26, 26, 0.1); borderRadius:10px; overflow:clip
                      <div> [-150,920 232x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px
…
    <div> [0,1172 1440x0] position:relative
      <div name="Variant 1"> [0,1172 1440x20] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:-20.3906px; justifyContent:flex-start; alignItems:center; gap:100px; borderRadius:10px; maskImage:linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 4%, rgb(0, 0, 0) 96%, rgba(0, 0, 0, 0) 100%)
        <ul> [-30,1172 1440x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:100px; transform:matrix(1, 0, 0, 1, -30.415, 0)
          <li> [-30,1172 118x20] display:list-item; position:relative
            <div> [-30,1172 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [-30,1172 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
              <div> [16,1172 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [16,1172 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="//SPARTAN"
          <li> [187,1172 1204x20] display:list-item; position:relative
            <div> [187,1172 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <p> [187,1172 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
          <li> [1492,1172 118x20] display:list-item; position:relative
            <div> [1492,1172 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [1492,1172 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
              <div> [1538,1172 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [1538,1172 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="//SPARTAN"
          <li> [1709,1172 1204x20] display:list-item; position:relative
            <div> [1709,1172 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <p> [1709,1172 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
  <div> [0,0 1440x20] position:absolute; top:0px; left:0px; right:0px; bottom:1182px; backgroundColor:rgb(26, 26, 26); borderRadius:0px 0px 20px 20px; overflow:clip; zIndex:9
```

## Computed Styles — tablet 1000px (layout/type props only)
```
<section> [0,0 1000x1068] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(255, 255, 255)
  <div> [0,0 1000x524] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:140px 0px 120px
    <div> [0,140 1000x264] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:40px
      <div> [0,140 1000x176] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
        <ul> [-13,140 1000x176] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -13.313, 0)
          <li> [-13,140 844x176] display:list-item; position:relative
            <div> [-13,140 844x176] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [-13,140 844x176] fontFamily:"Inter Display"; fontSize:160px; fontWeight:700; lineHeight:176px; letterSpacing:-6.4px TEXT="Experiences"
          <li> [890,153 151x151] display:list-item; position:relative
            <div> [864,126 203x203] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; transform:matrix(0.455669, -0.890149, 0.890149, 0.455669, 0, 0)
              <div> [864,126 203x203] position:relative
                <div> [864,126 203x203] 
                  <svg> [864,126 203x203] 
          <li> [1101,140 844x176] display:list-item; position:relative
            <div> [1101,140 844x176] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [1101,140 844x176] fontFamily:"Inter Display"; fontSize:160px; fontWeight:700; lineHeight:176px; letterSpacing:-6.4px TEXT="Experiences"
          <li> [2005,153 151x151] display:list-item; position:relative
            <div> [2005,153 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
              <div> [2005,153 151x151] position:relative
                <div> [2005,153 151x151] 
                  <svg> [2005,153 151x151] 
      <div> [0,356 1000x48] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; padding:0px 40px
        <div name="Experiences Description"> [40,356 400x48] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px
          <div> [40,356 400x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [40,356 400x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Empowering global enterprises through bespoke neural architectures and autonomous agentic workflows."
  <div> [0,524 1000x544] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:120px; padding:0px 0px 30px
    <div> [0,524 1000x394] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:0px; padding:0px 30px
      <div> [30,524 940x394] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
        <div> [30,524 285x394] position:relative
          <section> [30,524 285x394] display:flex; alignItems:center
            <div> [30,524 285x394] position:absolute; top:0px; left:0px; right:0px; bottom:0px
              <ul> [-1174,524 285x394] display:flex; alignItems:center; gap:16px; transform:matrix(1, 0, 0, 1, -1204, 0)
                <div> [-1174,524 285x394] position:relative
                  <a name="Desktop"> [-1174,524 285x394] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:10px; backgroundColor:rgb(240, 240, 240); borderRadius:20px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [-1164,534 124x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; padding:6px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 100px
                      <div> [-1158,540 32x32] position:relative; borderRadius:100%
                        <div> [-1158,540 32x32] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%
                          <img> [-1158,540 32x32] borderRadius:100% IMG=w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg alt="A cartoon character with a weird haircut"
                      <div name="Frame 2121451350"> [-1126,544 80x24] position:relative; opacity:0.67
                        <div> [-1126,544 80x24] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                          <img> [-1126,544 80x24]  IMG=3EwtMm1CTn3V13Xu2ufZVUnW4.png alt=""
                    <div> [-1164,629 265x156] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:20px 10px 10px
                      <div> [-1154,649 245x126] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [-1154,649 245x126] fontFamily:"Inter Display"; fontSize:21px; lineHeight:25.2px; letterSpacing:-0.21px TEXT="The custom agentic workflows they built reduced our manual data entry by 90%, saving us hundreds of hours weekly."
                      <svg> [-1154,619 24x24] position:absolute; top:1.54688px; left:10px; right:231px; bottom:130.469px; transform:matrix(1, 0, 0, 1, 0, -12)
                    <div> [-1164,836 265x72] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:10px; padding:10px 10px 20px
                      <div> [-1154,846 3x42] position:relative; backgroundColor:rgba(26, 26, 26, 0.1); borderRadius:10px
                      <div> [-1141,846 232x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px
                        <div> [-1141,846 232x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <h5> [-1141,846 232x21] fontFamily:"IBM Plex Mono"; fontSize:13px; fontWeight:500; lineHeight:20.8px TEXT="MARCUS CHENG"
                        <div> [-1141,871 232x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [-1141,871 232x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Head of AI, Aetna"
                    <div> [-1174,524 285x394] position:absolute; top:0px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; opacity:0
                <div> [-873,524 285x394] position:relative
                  <a name="Desktop"> [-873,524 285x394] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:10px; backgroundColor:rgb(240, 240, 240); borderRadius:20px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [-863,534 124x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; padding:6px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 100px
                      <div> [-857,540 32x32] position:relative; borderRadius:100%
                        <div> [-857,540 32x32] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%
                          <img> [-857,540 32x32] borderRadius:100% IMG=rLkyXpp1TSaADDj0EYjy9c8uw.jpg alt="A glass sculpture of a woman's head and shoulders"
                      <div name="Frame 2121451350"> [-825,544 80x24] position:relative; opacity:0.67
```

## Computed Styles — phone 390px (layout/type props only)
```
<section> [0,0 390x1067] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(255, 255, 255)
  <div> [0,0 390x523] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:140px 0px 120px
    <div> [0,140 390x263] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:40px
      <div> [0,140 390x151] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
        <ul> [-13,140 390x151] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -13.406, 0)
          <li> [-13,145 675x141] display:list-item; position:relative
            <div> [-13,145 675x141] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [-13,145 675x141] fontFamily:"Inter Display"; fontSize:128px; fontWeight:700; lineHeight:140.8px; letterSpacing:-5.12px TEXT="Experiences"
          <li> [721,140 151x151] display:list-item; position:relative
            <div> [721,140 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
              <div> [721,140 151x151] position:relative
                <div> [721,140 151x151] 
                  <svg> [721,140 151x151] 
          <li> [932,145 675x141] display:list-item; position:relative
            <div> [932,145 675x141] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [932,145 675x141] fontFamily:"Inter Display"; fontSize:128px; fontWeight:700; lineHeight:140.8px; letterSpacing:-5.12px TEXT="Experiences"
          <li> [1667,140 151x151] display:list-item; position:relative
            <div> [1667,140 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
              <div> [1667,140 151x151] position:relative
                <div> [1667,140 151x151] 
                  <svg> [1667,140 151x151] 
      <div> [0,331 390x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; padding:0px 20px
        <div name="Experiences Description"> [20,331 350x72] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px
          <div> [20,331 350x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [20,331 350x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Empowering global enterprises through bespoke neural architectures and autonomous agentic workflows."
  <div> [0,523 390x544] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:120px; padding:0px 0px 30px
    <div> [0,523 390x394] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:0px; padding:0px 20px
      <div> [20,523 350x394] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
        <div> [20,523 285x394] position:relative
          <section> [20,523 285x394] display:flex; alignItems:center
            <div> [20,523 285x394] position:absolute; top:0px; left:0px; right:0px; bottom:0px
              <ul> [-1184,523 285x394] display:flex; alignItems:center; gap:16px; transform:matrix(1, 0, 0, 1, -1204, 0)
                <div> [-1184,523 285x394] position:relative
                  <a name="Mobile"> [-1184,523 285x394] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:10px; backgroundColor:rgb(240, 240, 240); borderRadius:20px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [-1174,533 124x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; padding:6px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 100px
                      <div> [-1168,539 32x32] position:relative; borderRadius:100%
                        <div> [-1168,539 32x32] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%
                          <img> [-1168,539 32x32] borderRadius:100% IMG=w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg alt="A cartoon character with a weird haircut"
                      <div name="Frame 2121451350"> [-1136,543 80x24] position:relative; opacity:0.67
                        <div> [-1136,543 80x24] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                          <img> [-1136,543 80x24]  IMG=3EwtMm1CTn3V13Xu2ufZVUnW4.png alt=""
                    <div> [-1174,628 265x156] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:20px 10px 10px
                      <div> [-1164,648 245x126] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [-1164,648 245x126] fontFamily:"Inter Display"; fontSize:21px; lineHeight:25.2px; letterSpacing:-0.21px TEXT="The custom agentic workflows they built reduced our manual data entry by 90%, saving us hundreds of hours weekly."
                      <svg> [-1164,618 24x24] position:absolute; top:1.54688px; left:10px; right:231px; bottom:130.469px; transform:matrix(1, 0, 0, 1, 0, -12)
                    <div> [-1174,835 265x72] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:10px; padding:10px 10px 20px
                      <div> [-1164,845 3x42] position:relative; backgroundColor:rgba(26, 26, 26, 0.1); borderRadius:10px
                      <div> [-1151,845 232x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:4px
                        <div> [-1151,845 232x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <h5> [-1151,845 232x21] fontFamily:"IBM Plex Mono"; fontSize:13px; fontWeight:500; lineHeight:20.8px TEXT="MARCUS CHENG"
                        <div> [-1151,870 232x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [-1151,870 232x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Head of AI, Aetna"
                    <div> [-1184,523 285x394] position:absolute; top:0px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; opacity:0
                <div> [-883,523 285x394] position:relative
                  <a name="Mobile"> [-883,523 285x394] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:10px; backgroundColor:rgb(240, 240, 240); borderRadius:20px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [-873,533 124x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; padding:6px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 100px
                      <div> [-867,539 32x32] position:relative; borderRadius:100%
                        <div> [-867,539 32x32] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%
                          <img> [-867,539 32x32] borderRadius:100% IMG=IIK9uqdpvVqpPgAHuhf8s9r4Ee4.jpg alt="man in white crew neck shirt wearing black sunglasses"
                      <div name="Frame 2121451350"> [-835,543 80x24] position:relative; opacity:0.67
```

## SVG markup (inline these as React components)
### svg09
```html
<svg class="framer-ScJvX framer-1inlqak" role="presentation" viewBox="0 0 24 24" style="--1ww558a: 1; --4rxgx6: rgba(26, 26, 26, 0.2); transform: translateY(-50%); opacity: 1;"><svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 9.5 C 8 10.052 7.552 10.5 7 10.5 L 4.5 10.5 C 4.224 10.5 4 10.724 4 11 L 4 12 C 4 13.105 4.895 14 6 14 L 7 14 C 7.552 14 8 14.448 8 15 L 8 17 C 8 17.552 7.552 18 7 18 L 6 18 C 2.686 18 0 15.314 0 12 L 0 1 C 0 0.448 0.448 0 1 0 Z" fill="transparent" height="18px" id="WpQDT2Tmw" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(14 3)" width="8px"></path><path d="M 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 9.5 C 8 10.052 7.552 10.5 7 10.5 L 4.5 10.5 C 4.224 10.5 4 10.724 4 11 L 4 12 C 4 13.105 4.895 14 6 14 L 7 14 C 7.552 14 8 14.448 8 15 L 8 17 C 8 17.552 7.552 18 7 18 L 6 18 C 2.686 18 0 15.314 0 12 L 0 1 C 0 0.448 0.448 0 1 0 Z" fill="transparent" height="18px" id="OaYbrCBrD" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 3)" width="8px"></path></svg></svg>
```
