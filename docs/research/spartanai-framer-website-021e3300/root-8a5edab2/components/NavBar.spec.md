# NavBar Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/NavBar.tsx` (client component)
- **Screenshots:** `docs/design-references/spartanai-framer-website-021e3300/root-8a5edab2/seg-desktop-00.png` (top), `state-mobile-menu-open.png`
- **Interaction model:** static fixed overlay; hover on links; click hamburger (phone) toggles menu.

## DOM Structure
Three fixed layers (all `position: fixed`):
1. **Top progressive blur** — `inset-x-0 top-0 h-[90px] z-[7] pointer-events-none`, 8 stacked absolute layers (z 1..8), `backdrop-filter: blur(0.0390625px | 0.078125px | 0.15625px | 0.3125px | 0.625px | 1.25px | 2.5px | 5px)`, each with the `mask-image` band listed in the dump (`linear-gradient(to top, …)`). Copy the exact mask stops.
2. **Link pill (≥810px)** — fixed `top:30px; left:30px; z-10`, white `rounded-full`, padding `5px 26px 5px 5px`, gap 24px, height 44. Contains logo link (60×34 ring: `LogoPill width={60} height={34} border={6} color="rgb(26,26,26)"`) then the link row (gap 0): Works, Services, Insights, Pricing, Company. Each link padding `7px 16px`, text Inter Display 400 14px/19.6px +0.28px ink, **opacity 0.65**.
3. **Hire Team button (≥810px)** — fixed `top:30px; right:30px; z-10`: `<ExpandButton label="Hire Team" size="sm" tone="white" />` (140×42).

Phone (≤809): both desktop pieces are replaced by ONE fixed pill `top:20px; left:20px; right:20px; z-10`, white, radius 20px, padding `5px 16px 5px 5px`, containing a row `justify-between`: the 60×34 logo ring and a 40×33 hamburger (two bars 40×6, `rgb(26,26,26)`, radius 100px, at top 8px and top 19px).

## States & Behaviors
- **Link hover:** opacity 0.65 → 1 and `scale(1.1)`, transition ~0.3s ease-out.
- **The nav never changes on scroll.**
- **Phone menu (click hamburger):** the pill grows (height transition ~0.4s) into a white card (radius 20px) listing the 5 links vertically (Inter Display 300 ~18px, ink at 0.65 opacity, ~59px row pitch, left padding ~20px), then a full-width `<ExpandButton label="Hire Team" size="md" tone="coal" />` at the bottom with ~20px side/bottom inset. The two bars animate into an ✕ (rotate ±45°, meeting in the middle). Clicking a link or the ✕ closes it.

## Links
Works → `#`, Services → `#capabilities`, Insights → `#`, Pricing → `#pricing`, Company → `#`, logo → `#`, Hire Team → `#`.

## Responsive Behavior
- **Desktop (≥1200) & Tablet (810–1199):** desktop layout (pill left + Hire Team right) — identical at 1000px.
- **Phone (≤809):** single full-width pill with hamburger (phone excerpt below).

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
FIXED ELEMENT; parent chain: DIV.framer-Z8hVM framer-u3qn7x pos=relative z=auto < DIV. pos=static z=auto
<div> [0,0 1440x90] position:fixed; top:0px; left:0px; right:0px; bottom:810px; zIndex:7
  <div> [0,0 1440x90] position:absolute; top:0px; left:0px; right:0px; bottom:0px; overflow:hidden
    <div> [0,0 1440x90] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:1; backdropFilter:blur(0.0390625px); maskImage:linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)
    <div> [0,0 1440x90] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:2; backdropFilter:blur(0.078125px); maskImage:linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)
    <div> [0,0 1440x90] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:3; backdropFilter:blur(0.15625px); maskImage:linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)
    <div> [0,0 1440x90] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:4; backdropFilter:blur(0.3125px); maskImage:linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)
    <div> [0,0 1440x90] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:5; backdropFilter:blur(0.625px); maskImage:linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)
    <div> [0,0 1440x90] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:6; backdropFilter:blur(1.25px); maskImage:linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)
    <div> [0,0 1440x90] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:7; backdropFilter:blur(2.5px); maskImage:linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)
    <div> [0,0 1440x90] position:absolute; top:0px; left:0px; right:0px; bottom:0px; zIndex:8; backdropFilter:blur(5px); maskImage:linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)
…
FIXED ELEMENT; parent chain: DIV.ssr-variant hidden-z9ppoh pos=static z=auto < DIV.framer-Z8hVM framer-u3qn7x pos=relative z=auto
<div> [30,0 523x44] position:fixed; top:30px; left:30px; right:886.781px; bottom:826px; zIndex:10
  <div name="Desktop"> [30,0 523x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:24px; padding:5px 26px 5px 5px; backgroundColor:rgb(255, 255, 255); borderRadius:100px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 100px
    <div> [35,5 60x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
      <a> [35,5 60x34] position:relative; borderRadius:100px; overflow:clip; cursor:pointer; BORDER(::after):6px 6px 6px 6px solid rgb(26, 26, 26) radius 100px href=./
    <div> [119,5 408x34] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:0px; overflow:clip
      <a> [119,5 72x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px 16px; opacity:0.65; cursor:pointer href=./project
        <div> [135,12 40x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
          <p> [135,12 40x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Works"
      <a> [191,5 87x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px 16px; opacity:0.65; cursor:pointer href=./#capabilities
        <div> [207,12 55x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
          <p> [207,12 55x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Services"
      <a> [277,5 81x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px 16px; opacity:0.65; cursor:pointer href=./articles
        <div> [293,12 49x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
          <p> [293,12 49x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Insights"
      <a> [358,5 76x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px 16px; opacity:0.65; cursor:pointer href=./#pricing
        <div> [374,12 44x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
          <p> [374,12 44x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Pricing"
      <a> [434,5 93x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px 16px; opacity:0.65; cursor:pointer href=./about
        <div> [450,12 61x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
          <p> [450,12 61x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Company"
…
FIXED ELEMENT; parent chain: DIV.framer-Z8hVM framer-u3qn7x pos=relative z=auto < DIV. pos=static z=auto
<div> [1270,0 140x42] position:fixed; top:30px; left:1270px; right:30px; bottom:828px; zIndex:10
  <a name="Primary small"> [1270,0 140x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(255, 255, 255); borderRadius:12px; overflow:clip; cursor:pointer; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 12px href=./contact
    <div> [1273,3 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px; overflow:clip
      <div> [1285,14 16x15] position:relative; zIndex:1; filter:contrast(2) invert(0.95)
        <div name="Animation 13"> [1285,14 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
          <div> [1278,14 30x15] position:relative
            <div> [1278,14 30x15] 
              <svg> [1278,14 30x15] 
    <div> [1319,7 81x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
      <div> [1327,11 64x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
        <p> [1327,11 64x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Hire Team"
```

## Computed Styles — phone 390px (layout/type props only)
```
FIXED ELEMENT; parent chain: DIV.ssr-variant hidden-u3qn7x hidden-17qhrii pos=static z=auto < DIV.framer-Z8hVM framer-u3qn7x pos=relative z=auto
<div> [20,0 350x44] position:fixed; top:20px; left:20px; right:20px; bottom:836px
  <div name="Phone"> [20,0 350x44] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; padding:5px 16px 5px 5px; backgroundColor:rgb(255, 255, 255); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 20px
    <div> [25,5 329x34] display:flex; position:relative; justifyContent:space-between; alignItems:center
      <a> [25,5 60x34] position:relative; borderRadius:100px; BORDER(::after):6px 6px 6px 6px solid rgb(26, 26, 26) radius 100px href=./
      <div> [314,6 40x33] position:relative
        <div> [314,14 40x6] position:absolute; top:8px; left:0px; right:0px; bottom:19px; backgroundColor:rgb(26, 26, 26); borderRadius:100px
        <div> [314,25 40x6] position:absolute; top:19px; left:0px; right:0px; bottom:8px; backgroundColor:rgb(26, 26, 26); borderRadius:100px

```
