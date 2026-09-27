# Footer Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Footer.tsx` (client component)
- **Screenshots:** `seg-desktop-16.png`; mobile `seg-mobile-27.png`, `seg-mobile-28.png`
- **Interaction model:** static, revealed by scrolling (fixed behind the page) + hover on links/button.

## DOM Structure
`<footer>` `position: fixed; inset: 0; z-index: 1` (1440×900 at desktop), behind the page content. The page supplies a transparent spacer after the last section so the footer is revealed (desktop 774px, phone ~791px). Contents:
- **Background** (absolute top 0, bottom −240px, z-1, overflow clip): full-cover forest photo `v2cZIMtgjEII7EpDnUDGGgCyuiQ.png`.
- **Main row** (absolute-ish at y 291, x 40, 1360×569, z-2): 
  - Left (680, column): brand block (width 610, gap ~20): white pill ring (60×34, border 6 white) + "spartan" wordmark image `8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png` (~155×42, white) + paragraph (Inter Display 400 16px/22px white, width ~380) + newsletter form: 400×54 pill (radius 14, bg rgba(255,255,255,0.2), 1px border rgba(255,255,255,0.4), backdrop blur) with an email `<input placeholder="jane@framer.com">` (Inter Display 400 16px, placeholder rgba(255,255,255,0.5)) and a small white "Subscribe" button on the right (bg rgba(255,255,255,0.8)?, radius 10, 150×44, containing a dark 36px icon box with the pixel arrow + "Subscribe" 14px ink). Then "FOLLOW US:" (Geist Mono 500 12px white) and 4 social squares 34×34 (radius 6, 1px border rgba(255,255,255,0.2), bg rgba(255,255,255,0.1)) with white icons (svg19 X, svg20 LinkedIn, svg21 YouTube, svg22 Instagram) — links x.com/sirdelani, linkedin.com/in/delanipro/, youtube.com, instagram.com/sirdelani.
  - Right (680): three link columns 200 wide, each with a 1px left rule rgba(255,255,255,0.2), padding-left 16: heading (Geist Mono 500 16px/22.4px white) then links (Inter Display 400 14px, white, gap ~12). Link hover: underline or opacity per dump.
- **Giant wordmark** ("Spartan", absolute top 828px at 1440 → i.e. bottom-anchored, left −14, right −20, height ~398): the same wordmark image `8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png` stretched to ~1474 wide, white, sitting at the bottom and cut off by the viewport.

## Links
Quick Links: Home `#`, Digital Brain `#`, Projects `#`, Articles `#`. Company: About Us `#`, Contact Us `#`, Book A Call `https://cal.com`, More Templates `https://delani.pro/templates`. Policies: Terms & Conditions `#`, Privacy Policy `#`.

## Text Content (verbatim)
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ultrices massa. Vivamus faucibus egestas nulla" · "Subscribe" · "Follow Us:" (rendered uppercase) · "Quick Links" · "Company" · "Policies"

## Responsive Behavior
- **Phone:** content column at left 20px: brand, paragraph, form (full width), follow us, then link columns (2 per row, then Policies) and the giant wordmark at the bottom (`seg-mobile-27..28`). Footer remains fixed; spacer ~791px.
- **Tablet:** see tablet excerpt.

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
FIXED ELEMENT; parent chain: DIV.framer-Z8hVM framer-u3qn7x pos=relative z=auto < DIV. pos=static z=auto
<div> [0,0 1440x900] position:fixed; top:0px; left:0px; right:0px; bottom:0px; zIndex:1
  <div name="Desktop"> [0,0 1440x900] display:flex; position:relative; flexDirection:column; justifyContent:flex-end; alignItems:flex-start; gap:160px; padding:170px 40px 40px; backgroundColor:rgb(255, 255, 255); overflow:hidden
    <div> [0,0 1440x1140] position:absolute; top:0px; left:0px; right:0px; bottom:-240px; overflow:clip; zIndex:1; maskImage:linear-gradient(0deg, rgba(0, 0, 0, 0) 8.63246%, rgb(0, 0, 0) 29.4341%)
      <div> [0,0 1440x1140] position:absolute; top:0px; left:0px; right:0px; bottom:0px
        <img> [0,0 1440x1140] overflow:clip; objectFit:cover IMG=v2cZIMtgjEII7EpDnUDGGgCyuiQ.png alt=""
    <div> [40,291 1360x569] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:0px 0px 250px; overflow:clip; zIndex:2
      <div> [40,291 680x319] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:0px 70px 0px 0px; overflow:clip
        <div> [40,291 610x226] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:15px; overflow:clip
          <a> [40,291 155x92] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; overflow:clip; cursor:pointer href=./
            <div> [40,291 60x34] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):6px 6px 6px 6px solid rgb(255, 255, 255) radius 100px
            <div name="Spartan"> [40,341 155x42] position:relative; zIndex:2
              <div> [40,341 155x42] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [40,341 155x42] overflow:clip; objectFit:cover IMG=8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png alt=""
          <div> [40,398 610x119] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; overflow:clip
            <div> [40,398 400x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [40,398 400x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px; textAlign:left; color:rgb(255, 255, 255) TEXT="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ultrices massa. Vivamus faucibus egestas nulla"
            <form> [40,463 400x54] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:8px; padding:6px; backgroundColor:rgba(255, 255, 255, 0.2); borderRadius:17px; overflow:hidden; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 17px
              <label> [46,469 230x40] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px; cursor:default
                <div> [46,469 230x40] display:flex; position:relative; alignItems:center; padding:12px; borderRadius:10px; overflow:hidden; transition:background, box-shadow
                  <input> [58,481 206x16] fontFamily:Inter; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255); overflow:clip; whiteSpace:nowrap; cursor:text
              <div> [284,469 150x42] position:relative
                <button name="Disabled"> [284,469 150x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; textAlign:center; border:0px outset rgb(0, 0, 0); borderTop:0px outset rgb(0, 0, 0); borderBottom:0px outset rgb(0, 0, 0); borderLeft:0px outset rgb(0, 0, 0); borderRight:0px outset rgb(0, 0, 0); borderRadius:10px; opacity:0.7
                  <div name="Variant 2"> [284,469 150x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(255, 255, 255); borderRadius:12px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 12px
                    <div> [287,472 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px; overflow:clip
                      <div> [299,482 16x15] position:relative; zIndex:1; filter:contrast(2) invert(1)
                        <div name="Animation 15"> [299,482 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                          <div> [292,482 30x15] position:relative
                            <div> [292,482 30x15] 
                              <svg> [292,482 30x15] 
                    <div> [333,475 91x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                      <div> [347,480 63x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [347,480 63x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Subscribe"
        <div> [40,547 610x63] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; overflow:clip
          <div> [40,547 610x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <p> [40,547 610x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px; textAlign:left; textTransform:uppercase; color:rgb(255, 255, 255) TEXT="Follow Us:"
          <div> [40,576 166x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
            <div> [40,576 34x34] position:relative
              <a name="White"> [40,576 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px; overflow:clip; cursor:pointer href=https://x.com/sirdelani
                <div> [47,583 20x20] position:relative
                  <svg> [47,583 20x20] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
            <div> [84,576 34x34] position:relative
              <a name="White"> [84,576 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px; overflow:clip; cursor:pointer href=https://www.linkedin.com/in/delanipro/
                <div> [91,583 20x20] position:relative
                  <svg> [91,583 20x20] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
            <div> [128,576 34x34] position:relative
              <a name="White"> [128,576 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px; overflow:clip; cursor:pointer href=https://youtube.com
                <div> [135,583 20x20] position:relative
                  <svg> [135,583 20x20] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
            <div> [172,576 34x34] position:relative
              <a name="White"> [172,576 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px; overflow:clip; cursor:pointer href=https://instagram.com/sirdelani
                <div> [179,583 20x20] position:relative
                  <svg> [179,583 20x20] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
      <div> [720,291 680x174] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:0px 80px 0px 0px; overflow:clip
        <div> [720,291 200x174] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; padding:0px 0px 0px 17px; BORDER(::after):0px 0px 0px 1px solid rgba(255, 255, 255, 0.1) radius 0px
          <div> [737,291 106x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
            <p> [737,291 106x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="Quick Links"
          <div> [737,333 183x132] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [737,333 37x33] position:relative
              <a name="Menu"> [737,333 37x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=./
                <div> [702,349 15x1] position:absolute; top:15.75px; left:-35px; right:57.375px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [737,339 37x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [737,339 37x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Home"
            <div> [737,366 74x33] position:relative
              <a name="Menu"> [737,366 74x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=./digital-brain
                <div> [702,382 15x1] position:absolute; top:15.75px; left:-35px; right:93.75px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [737,372 74x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [737,372 74x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Digital Brain"
            <div> [737,399 50x33] position:relative
              <a name="Menu"> [737,399 50x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=./project
                <div> [702,415 15x1] position:absolute; top:15.75px; left:-35px; right:69.6406px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [737,405 50x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [737,405 50x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Projects"
            <div> [737,432 46x33] position:relative
              <a name="Menu"> [737,432 46x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=./articles
                <div> [702,448 15x1] position:absolute; top:15.75px; left:-35px; right:66.0156px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [737,438 46x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [737,438 46x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Articles"
        <div> [920,291 200x174] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; padding:0px 0px 0px 17px; BORDER(::after):0px 0px 0px 1px solid rgba(255, 255, 255, 0.1) radius 0px
          <div> [937,291 67x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
            <p> [937,291 67x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="Company"
          <div> [937,333 183x132] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [937,333 58x33] position:relative
              <a name="Menu"> [937,333 58x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=./about
                <div> [902,349 15x1] position:absolute; top:15.75px; left:-35px; right:77.5156px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [937,339 58x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [937,339 58x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="About Us"
            <div> [937,366 70x33] position:relative
              <a name="Menu"> [937,366 70x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=./contact
                <div> [902,382 15x1] position:absolute; top:15.75px; left:-35px; right:89.6719px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [937,372 70x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [937,372 70x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Contact Us"
            <div> [937,399 71x33] position:relative
              <a name="Menu"> [937,399 71x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=https://cal.com
                <div> [902,415 15x1] position:absolute; top:15.75px; left:-35px; right:91.3906px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [937,405 71x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [937,405 71x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Book A Call"
            <div> [937,432 99x33] position:relative
              <a name="Menu"> [937,432 99x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=https://delani.pro/templates
                <div> [902,448 15x1] position:absolute; top:15.75px; left:-35px; right:119.188px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [937,438 99x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [937,438 99x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="More Templates"
        <div> [1120,291 200x108] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; padding:0px 0px 0px 17px; BORDER(::after):0px 0px 0px 1px solid rgba(255, 255, 255, 0.1) radius 0px
          <div> [1137,291 77x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
            <p> [1137,291 77x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="Policies"
          <div> [1137,333 183x66] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [1137,333 120x33] position:relative
              <a name="Menu"> [1137,333 120x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=./policies/terms-conditions
                <div> [1102,349 15x1] position:absolute; top:15.75px; left:-35px; right:140.016px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [1137,339 120x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [1137,339 120x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Terms & Conditions"
            <div> [1137,366 85x33] position:relative
              <a name="Menu"> [1137,366 85x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px; overflow:clip; cursor:pointer href=./policies/privacy-policy
                <div> [1102,382 15x1] position:absolute; top:15.75px; left:-35px; right:105.078px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5); overflow:clip; zIndex:1
                <div> [1137,372 85x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [1137,372 85x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Privacy Policy"
    <div name="Spartan"> [-14,629 1474x398] position:absolute; top:828px; left:-14px; right:-20px; bottom:-326.375px; zIndex:2; transform:matrix(1, 0, 0, 1, 0, -199.188)
      <div> [-14,629 1474x398] position:absolute; top:0px; left:0px; right:0px; bottom:0px
        <img> [-14,629 1474x398] overflow:clip; objectFit:cover IMG=8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png alt=""
```

## Computed Styles — tablet 1000px (layout/type props only)
```
FIXED ELEMENT; parent chain: DIV.framer-Z8hVM framer-u3qn7x pos=relative z=auto < DIV. pos=static z=auto
<div> [0,0 1000x900] position:fixed; top:0px; left:0px; right:0px; bottom:0px
  <div name="Tablet"> [0,0 1000x900] display:flex; position:relative; flexDirection:column; justifyContent:flex-end; alignItems:flex-start; gap:160px; padding:160px 40px 40px; backgroundColor:rgb(255, 255, 255)
    <div> [0,0 1000x1140] position:absolute; top:0px; left:0px; right:0px; bottom:-240px
      <div> [0,0 1000x1140] position:absolute; top:0px; left:0px; right:0px; bottom:0px
        <img> [0,0 1000x1140]  IMG=v2cZIMtgjEII7EpDnUDGGgCyuiQ.png alt=""
    <div> [40,221 920x639] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:0px 0px 250px
      <div> [40,221 460x319] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:0px 50px 0px 0px
        <div> [40,221 410x226] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:15px
          <a> [40,221 155x92] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px href=./
            <div> [40,221 60x34] position:relative; borderRadius:100px; BORDER(::after):6px 6px 6px 6px solid rgb(255, 255, 255) radius 100px
            <div name="Spartan"> [40,271 155x42] position:relative
              <div> [40,271 155x42] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [40,271 155x42]  IMG=8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png alt=""
          <div> [40,328 410x119] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
            <div> [40,328 400x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [40,328 400x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ultrices massa. Vivamus faucibus egestas nulla"
            <form> [40,393 400x54] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:8px; padding:6px; backgroundColor:rgba(255, 255, 255, 0.2); borderRadius:17px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 17px
              <label> [46,399 230x40] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px
                <div> [46,399 230x40] display:flex; position:relative; alignItems:center; padding:12px; borderRadius:10px
                  <input> [58,411 206x16] fontFamily:Inter; fontSize:16px; lineHeight:19.2px
              <div> [284,399 150x42] position:relative
                <button name="Disabled"> [284,399 150x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; borderRadius:10px; opacity:0.7
                  <div name="Variant 2"> [284,399 150x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(255, 255, 255); borderRadius:12px; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 12px
                    <div> [287,402 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px
                      <div> [299,413 16x15] position:relative
                        <div name="Animation 15"> [299,413 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                          <div> [292,413 30x15] position:relative
                            <div> [292,413 30x15] 
                              <svg> [292,413 30x15] 
                    <div> [333,406 91x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                      <div> [347,410 63x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [347,410 63x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Subscribe"
        <div> [40,477 410x63] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
          <div> [40,477 410x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [40,477 410x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Follow Us:"
          <div> [40,506 166x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
            <div> [40,506 34x34] position:relative
              <a name="White"> [40,506 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px href=https://x.com/sirdelani
                <div> [47,513 20x20] position:relative
                  <svg> [47,513 20x20] display:inline-block
            <div> [84,506 34x34] position:relative
              <a name="White"> [84,506 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px href=https://www.linkedin.com/in/delanipro/
                <div> [91,513 20x20] position:relative
                  <svg> [91,513 20x20] display:inline-block
            <div> [128,506 34x34] position:relative
              <a name="White"> [128,506 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px href=https://youtube.com
                <div> [135,513 20x20] position:relative
                  <svg> [135,513 20x20] display:inline-block
            <div> [172,506 34x34] position:relative
              <a name="White"> [172,506 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px href=https://instagram.com/sirdelani
                <div> [179,513 20x20] position:relative
                  <svg> [179,513 20x20] display:inline-block
      <div> [500,221 460x389] display:grid; position:relative; justifyContent:center; gap:40px 60px; gridTemplateColumns:200px 200px
        <div> [500,221 200x174] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; padding:0px 0px 0px 17px; BORDER(::after):0px 0px 0px 1px solid rgba(255, 255, 255, 0.1) radius 0px
          <div> [517,221 106x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [517,221 106x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="Quick Links"
          <div> [517,264 183x132] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [517,264 37x33] position:relative
              <a name="Menu"> [517,264 37x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./
                <div> [482,279 15x1] position:absolute; top:15.75px; left:-35px; right:57.375px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [517,270 37x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [517,270 37x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Home"
            <div> [517,297 74x33] position:relative
              <a name="Menu"> [517,297 74x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./digital-brain
                <div> [482,312 15x1] position:absolute; top:15.75px; left:-35px; right:93.75px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [517,303 74x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [517,303 74x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Digital Brain"
            <div> [517,330 50x33] position:relative
              <a name="Menu"> [517,330 50x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./project
                <div> [482,345 15x1] position:absolute; top:15.75px; left:-35px; right:69.6406px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [517,336 50x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [517,336 50x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Projects"
            <div> [517,363 46x33] position:relative
              <a name="Menu"> [517,363 46x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./articles
                <div> [482,378 15x1] position:absolute; top:15.75px; left:-35px; right:66.0156px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [517,369 46x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [517,369 46x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Articles"
        <div> [760,221 200x174] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; padding:0px 0px 0px 17px; BORDER(::after):0px 0px 0px 1px solid rgba(255, 255, 255, 0.1) radius 0px
          <div> [777,221 67x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [777,221 67x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="Company"
          <div> [777,264 183x132] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [777,264 58x33] position:relative
              <a name="Menu"> [777,264 58x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./about
                <div> [742,279 15x1] position:absolute; top:15.75px; left:-35px; right:77.5156px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [777,270 58x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [777,270 58x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="About Us"
            <div> [777,297 70x33] position:relative
              <a name="Menu"> [777,297 70x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./contact
                <div> [742,312 15x1] position:absolute; top:15.75px; left:-35px; right:89.6719px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [777,303 70x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [777,303 70x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Contact Us"
            <div> [777,330 71x33] position:relative
              <a name="Menu"> [777,330 71x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=https://cal.com
                <div> [742,345 15x1] position:absolute; top:15.75px; left:-35px; right:91.3906px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [777,336 71x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [777,336 71x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Book A Call"
            <div> [777,363 99x33] position:relative
              <a name="Menu"> [777,363 99x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=https://delani.pro/templates
                <div> [742,378 15x1] position:absolute; top:15.75px; left:-35px; right:119.188px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [777,369 99x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [777,369 99x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="More Templates"
        <div> [500,436 200x108] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; padding:0px 0px 0px 17px; BORDER(::after):0px 0px 0px 1px solid rgba(255, 255, 255, 0.1) radius 0px
          <div> [517,436 77x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [517,436 77x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="Policies"
          <div> [517,478 183x66] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [517,478 120x33] position:relative
              <a name="Menu"> [517,478 120x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./policies/terms-conditions
                <div> [482,494 15x1] position:absolute; top:15.75px; left:-35px; right:140.016px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [517,484 120x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [517,484 120x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Terms & Conditions"
            <div> [517,511 85x33] position:relative
              <a name="Menu"> [517,511 85x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./policies/privacy-policy
                <div> [482,527 15x1] position:absolute; top:15.75px; left:-35px; right:105.078px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [517,517 85x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [517,517 85x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Privacy Policy"
    <div name="Spartan"> [-14,724 1034x279] position:absolute; top:864px; left:-14px; right:-20px; bottom:-243.453px; transform:matrix(1, 0, 0, 1, 0, -139.727)
      <div> [-14,724 1034x279] position:absolute; top:0px; left:0px; right:0px; bottom:0px
        <img> [-14,724 1034x279]  IMG=8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png alt=""
```

## Computed Styles — phone 390px (layout/type props only)
```
FIXED ELEMENT; parent chain: DIV.framer-Z8hVM framer-u3qn7x pos=relative z=auto < DIV. pos=static z=auto
<div> [0,0 390x900] position:fixed; top:0px; left:0px; right:0px; bottom:0px
  <div name="Phone"> [0,0 390x900] display:flex; position:relative; flexDirection:column; justifyContent:flex-end; alignItems:flex-start; gap:160px; padding:130px 20px 40px; backgroundColor:rgb(26, 26, 26)
    <div> [0,0 2175x900] position:absolute; top:0px; left:0px; right:-1785px; bottom:0px
      <div> [0,0 2175x900] position:absolute; top:0px; left:0px; right:0px; bottom:0px
        <img> [0,0 2175x900]  IMG=v2cZIMtgjEII7EpDnUDGGgCyuiQ.png alt=""
    <div> [20,157 350x703] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:40px
      <div> [20,157 350x312] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px
        <div> [20,157 350x229] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:12px
          <a> [20,157 125x75] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:13px href=./
            <div> [20,157 50x28] position:relative; borderRadius:100px; BORDER(::after):6px 6px 6px 6px solid rgb(255, 255, 255) radius 100px
            <div name="Spartan"> [20,199 125x34] position:relative
              <div> [20,199 125x34] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [20,199 125x34]  IMG=8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png alt=""
          <div> [20,244 350x142] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
            <div> [20,244 350x68] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [20,244 350x68] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ultrices massa. Vivamus faucibus egestas nulla"
            <form> [20,332 350x54] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:8px; padding:6px; backgroundColor:rgba(255, 255, 255, 0.2); borderRadius:17px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 17px
              <label> [26,338 180x40] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px
                <div> [26,338 180x40] display:flex; position:relative; alignItems:center; padding:12px; borderRadius:10px
                  <input> [38,350 156x16] fontFamily:Inter; fontSize:16px; lineHeight:19.2px
              <div> [214,338 150x42] position:relative
                <button name="Disabled"> [214,338 150x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px; borderRadius:10px; opacity:0.7
                  <div name="Variant 2"> [214,338 150x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(255, 255, 255); borderRadius:12px; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 12px
                    <div> [217,341 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px
                      <div> [229,351 16x15] position:relative
                        <div name="Animation 15"> [229,351 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                          <div> [222,351 30x15] position:relative
                            <div> [222,351 30x15] 
                              <svg> [222,351 30x15] 
                    <div> [263,344 91x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                      <div> [277,349 63x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [277,349 63x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Subscribe"
        <div> [20,406 350x63] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
          <div> [20,406 350x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [20,406 350x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Follow Us:"
          <div> [20,435 166x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
            <div> [20,435 34x34] position:relative
              <a name="White"> [20,435 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px href=https://x.com/sirdelani
                <div> [27,442 20x20] position:relative
                  <svg> [27,442 20x20] display:inline-block
            <div> [64,435 34x34] position:relative
              <a name="White"> [64,435 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px href=https://www.linkedin.com/in/delanipro/
                <div> [71,442 20x20] position:relative
                  <svg> [71,442 20x20] display:inline-block
            <div> [108,435 34x34] position:relative
              <a name="White"> [108,435 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px href=https://youtube.com
                <div> [115,442 20x20] position:relative
                  <svg> [115,442 20x20] display:inline-block
            <div> [152,435 34x34] position:relative
              <a name="White"> [152,435 34x34] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:7px; backgroundColor:rgba(255, 255, 255, 0.1); borderRadius:6px href=https://instagram.com/sirdelani
                <div> [159,442 20x20] position:relative
                  <svg> [159,442 20x20] display:inline-block
      <div> [20,509 350x351] display:grid; position:relative; justifyContent:center; gap:24px 0px; gridTemplateColumns:175px 175px
        <div> [20,509 175x163] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:9px; padding:0px 0px 0px 17px; BORDER(::after):0px 0px 0px 1px solid rgba(255, 255, 255, 0.1) radius 0px
          <div> [37,509 106x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [37,509 106x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="Quick Links"
          <div> [37,541 158x132] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [37,541 37x33] position:relative
              <a name="Menu"> [37,541 37x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./
                <div> [2,556 15x1] position:absolute; top:15.75px; left:-35px; right:57.375px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [37,547 37x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [37,547 37x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Home"
            <div> [37,574 74x33] position:relative
              <a name="Menu"> [37,574 74x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./digital-brain
                <div> [2,589 15x1] position:absolute; top:15.75px; left:-35px; right:93.75px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [37,580 74x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [37,580 74x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Digital Brain"
            <div> [37,607 50x33] position:relative
              <a name="Menu"> [37,607 50x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./project
                <div> [2,622 15x1] position:absolute; top:15.75px; left:-35px; right:69.6406px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [37,613 50x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [37,613 50x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Projects"
            <div> [37,640 46x33] position:relative
              <a name="Menu"> [37,640 46x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./articles
                <div> [2,655 15x1] position:absolute; top:15.75px; left:-35px; right:66.0156px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [37,646 46x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [37,646 46x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Articles"
        <div> [195,509 175x163] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:9px; padding:0px 0px 0px 17px; BORDER(::after):0px 0px 0px 1px solid rgba(255, 255, 255, 0.1) radius 0px
          <div> [212,509 67x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [212,509 67x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="Company"
          <div> [212,541 158x132] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [212,541 58x33] position:relative
              <a name="Menu"> [212,541 58x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./about
                <div> [177,556 15x1] position:absolute; top:15.75px; left:-35px; right:77.5156px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [212,547 58x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [212,547 58x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="About Us"
            <div> [212,574 70x33] position:relative
              <a name="Menu"> [212,574 70x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./contact
                <div> [177,589 15x1] position:absolute; top:15.75px; left:-35px; right:89.6719px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [212,580 70x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [212,580 70x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Contact Us"
            <div> [212,607 71x33] position:relative
              <a name="Menu"> [212,607 71x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=https://cal.com
                <div> [177,622 15x1] position:absolute; top:15.75px; left:-35px; right:91.3906px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [212,613 71x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [212,613 71x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Book A Call"
            <div> [212,640 99x33] position:relative
              <a name="Menu"> [212,640 99x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=https://delani.pro/templates
                <div> [177,655 15x1] position:absolute; top:15.75px; left:-35px; right:119.188px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [212,646 99x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [212,646 99x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="More Templates"
        <div> [20,697 175x97] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:9px; padding:0px 0px 0px 17px; BORDER(::after):0px 0px 0px 1px solid rgba(255, 255, 255, 0.1) radius 0px
          <div> [37,697 77x22] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [37,697 77x22] fontFamily:"Geist Mono"; fontSize:16px; fontWeight:500; lineHeight:22.4px TEXT="Policies"
          <div> [37,728 158x66] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [37,728 120x33] position:relative
              <a name="Menu"> [37,728 120x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./policies/terms-conditions
                <div> [2,744 15x1] position:absolute; top:15.75px; left:-35px; right:140.016px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [37,734 120x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [37,734 120x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Terms & Conditions"
            <div> [37,761 85x33] position:relative
              <a name="Menu"> [37,761 85x33] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:6px 0px href=./policies/privacy-policy
                <div> [2,777 15x1] position:absolute; top:15.75px; left:-35px; right:105.078px; bottom:16.25px; backgroundColor:rgba(255, 255, 255, 0.5)
                <div> [37,767 85x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [37,767 85x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Privacy Policy"
    <div name="Spartan"> [-14,825 424x115] position:absolute; top:882px; left:-14px; right:-20px; bottom:-96.5938px; transform:matrix(1, 0, 0, 1, 0, -57.2969)
      <div> [-14,825 424x115] position:absolute; top:0px; left:0px; right:0px; bottom:0px
        <img> [-14,825 424x115]  IMG=8AjRJ3fmfVsGAO1xyzDT2NbfkE8.png alt=""
```

## SVG markup (inline these as React components)
### svg19
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"><g color="rgb(255, 255, 255)" weight="regular"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></g></svg>
```
### svg20
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"><g color="rgb(255, 255, 255)" weight="regular"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></g></svg>
```
### svg21
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"><g color="rgb(255, 255, 255)" weight="regular"><path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path></g></svg>
```
### svg22
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"><g color="rgb(255, 255, 255)" weight="regular"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></g></svg>
```
