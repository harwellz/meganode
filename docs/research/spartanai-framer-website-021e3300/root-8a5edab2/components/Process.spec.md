# Process Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Process.tsx` (client component)
- **Screenshots:** `seg-desktop-09.png`, `seg-desktop-10.png` (top), `state-proc-04.png`; mobile `seg-mobile-14.png`, `seg-mobile-15.png`
- **Interaction model:** **click-driven accordion** (single open, first open by default) + fade-ins + floating illustration.

## DOM Structure
Rendered inside the dark process section (the page renders the outer `<section>` bg rgb(26,26,26) with padding `250px 40px 200px`, gap 250 between Process and Team). This component = the 1360-wide column (gap between blocks per dump, ~50):
1. `<SectionLabel label="OUR PROCESS" order="label-first" color="#fff" lineColor="rgba(255,255,255,0.1)" />` (full width 1360).
2. H2 (width 800 container, text ~540): Inter Display 500 54px/59.4px −2.16px white.
3. Row (height 445, gap 10): 
   - Illustration card 400×445, radius 20, 1px border rgba(255,255,255,0.1), overflow clip: background pattern image `QRyW2z7jtn8Iu8Ohz7dYmwxFJo.png` + floating illustration 300×300 `liXydHdt7Kdt6VKUzzjSZwFJ4FA.png` (sp-bob ±6px ~3s).
   - Accordion (flex 1, column, gap 10): 4 items. Collapsed item: height 81, radius 20, 1px border rgba(255,255,255,0.1), padding ~0 30px, row: "// 0N" (Inter Display 400 16px, rgba(255,255,255,0.5)) + title (Inter Display 500 18px/19.8px −0.72px white), gap ~30. Expanded item: height ~172, bg rgb(36,36,36), shows a tag pill at right (white bg, radius 100, Geist/IBM Plex Mono 400 11px/16.5px −0.33px uppercase ink, padding 4 10) and the description (Inter Display 300 15px/22.5px +0.3px white, width ~590) under the title.
4. CTA row (height 65): left mono text (Geist Mono 200 12px/20.4px uppercase white, width ~600) + right `<ExpandButton label="Build Now" size="md" tone="coal" />`.

## States & Behaviors
- Click a collapsed item → it expands (height 81 → 172, bg transparent → rgb(36,36,36), description fades in) and the open one collapses. ~0.5s ease-out.
- Fade-in on enter for label, heading, illustration card, accordion, CTA row.

## Accordion data
| # | Title | Tag | Description |
|---|---|---|---|
| // 01 | Comprehensive Strategic Audit | AUDIT | We perform a deep-layer analysis of your current technical stack and fragmented data silos to identify high-impact AI opportunities that align with your core business objectives and ROI targets. |
| // 02 | Custom Architecture Design | DESIGN | Our engineers architect bespoke neural model topologies and advanced RAG pipelines, ensuring every piece of the infrastructure is tailored to your unique data security needs and operational logic. |
| // 03 | Rapid Prototype Development | BUILD | We transition from blueprints to functional MVPs within weeks, utilizing iterative sprints to validate model performance, optimize token latency, and refine the end-user interaction experience. |
| // 04 | Enterprise Scale Deployment | SCALE | We harden the validated system for full-scale production, ensuring seamless integration across your enterprise with robust monitoring, dedicated compute clusters, and strict SOC2 compliance layers. |

## Text Content (verbatim)
"OUR PROCESS" · "From raw data to refined intelligence. Our iterative deployment cycle." · "WE DON'T JUST SHIP CODE; WE SHIP COMPETITIVE ADVANTAGES. EVERY STEP IS DESIGNED TO ENSURE YOUR AI INFRASTRUCTURE IS FUTURE-PROOF AND SCALABLE." · "Build Now"

## Responsive Behavior
- **Phone:** heading ~36px; illustration card full-width on top, accordion below full-width, CTA row stacks (`seg-mobile-14..15`).
- **Tablet:** see tablet excerpt.

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
<section> [0,0 1440x2695] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(26, 26, 26); overflow:clip; zIndex:4
  <div> [0,0 1440x2695] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:160px; padding:250px 40px 200px; backgroundColor:rgb(26, 26, 26); borderRadius:0px 0px 20px 20px; overflow:clip; zIndex:3
    <div> [40,250 1360x2245] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:250px; overflow:clip; zIndex:2
      <div> [40,250 1360x858] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px; overflow:clip
        <div> [40,250 1360x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px; overflow:clip
          <div> [40,251 79x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <p> [40,251 79x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px; textAlign:left; textTransform:uppercase; color:rgb(255, 255, 255) TEXT="OUR PROCESS"
          <div> [139,260 1205x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1); overflow:clip
          <div> [1364,250 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(255, 255, 255) radius 100px
        <div> [40,320 1360x178] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px; overflow:clip
          <div> [40,320 800x178] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <h2> [40,320 800x178] fontFamily:"Inter Display"; fontSize:54px; fontWeight:500; lineHeight:59.4px; letterSpacing:-2.16px; textAlign:left; color:rgb(255, 255, 255) TEXT="From raw data to refined intelligence. Our iterative deployment cycle."
        <div> [40,549 1360x445] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
          <div> [40,549 400x445] display:flex; position:relative; justifyContent:center; alignItems:center; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
            <div> [90,621 300x300] position:relative; overflow:clip; zIndex:2
              <div> [90,621 300x300] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [90,621 300x300] overflow:clip; objectFit:cover IMG=liXydHdt7Kdt6VKUzzjSZwFJ4FA.png alt=""
            <div> [40,549 400x445] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.17; overflow:clip; zIndex:0
              <div> [40,549 400x445] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [40,549 400x445] overflow:clip; objectFit:cover IMG=QRyW2z7jtn8Iu8Ohz7dYmwxFJo.png alt=""
          <div> [450,549 950x445] position:relative
            <div name="Desktop 1"> [450,549 950x445] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [450,549 950x172] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [450,549 950x172] position:relative
                  <div name="Desktop 1"> [450,549 950x172] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0.04); borderRadius:20px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.03) radius 20px
                    <div> [480,579 26x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [480,579 26x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [480,579 26x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgba(255, 255, 255, 0.4) TEXT="// 01"
                    <div> [536,579 834x112] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; overflow:clip
                      <div> [536,579 834x24] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [536,579 770x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                          <p> [536,579 770x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px; textAlign:left; color:rgb(255, 255, 255) TEXT="Comprehensive Strategic Audit"
                        <div> [1316,579 54x24] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:4px 12px; backgroundColor:rgb(255, 255, 255); borderRadius:100px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 100px
                          <div> [1328,583 30x16] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                            <p> [1328,583 30x16] fontFamily:"Geist Mono"; fontSize:10px; lineHeight:16px; textAlign:left; textTransform:uppercase; color:rgb(26, 26, 26) TEXT="Audit"
                      <div> [536,623 600x68] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                        <p> [536,623 600x68] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px; textAlign:left; color:rgb(255, 255, 255) TEXT="We perform a deep-layer analysis of your current technical stack and fragmented data silos to identify high-impact AI opportunities that align with your core business objectives and ROI targets."
              <div> [450,730 950x81] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                <div> [450,730 950x81] position:relative
                  <div name="Desktop 2"> [450,730 950x81] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
                    <div> [480,760 29x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [480,760 29x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [480,760 29x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgba(255, 255, 255, 0.4) TEXT="// 02"
                    <div> [539,760 831x20] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; overflow:clip
                      <div> [539,760 831x20] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [539,760 831x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                          <p> [539,760 831x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px; textAlign:left; color:rgb(255, 255, 255) TEXT="Custom Architecture Design"
              <div> [450,821 950x81] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                <div> [450,821 950x81] position:relative
                  <div name="Desktop 2"> [450,821 950x81] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
                    <div> [480,851 30x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [480,851 30x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [480,851 30x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgba(255, 255, 255, 0.4) TEXT="// 03"
                    <div> [540,851 830x20] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; overflow:clip
                      <div> [540,851 830x20] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [540,851 830x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                          <p> [540,851 830x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px; textAlign:left; color:rgb(255, 255, 255) TEXT="Rapid Prototype Development"
              <div> [450,912 950x81] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                <div> [450,912 950x81] position:relative
                  <div name="Desktop 2"> [450,912 950x81] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
                    <div> [480,942 30x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [480,942 30x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [480,942 30x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgba(255, 255, 255, 0.4) TEXT="// 04"
                    <div> [540,942 830x20] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px; overflow:clip
                      <div> [540,942 830x20] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [540,942 830x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                          <p> [540,942 830x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px; textAlign:left; color:rgb(255, 255, 255) TEXT="Enterprise Scale Deployment"
        <div> [40,1043 1360x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
          <div> [40,1055 1118x41] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; overflow:clip
            <div> [40,1055 600x41] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [40,1055 600x41] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px; textAlign:left; textTransform:uppercase; color:rgb(255, 255, 255) TEXT="WE DON'T JUST SHIP CODE; WE SHIP COMPETITIVE ADVANTAGES. EVERY STEP IS DESIGNED TO ENSURE YOUR AI INFRASTRUCTURE IS FUTURE-PROOF AND SCALABLE."
          <div> [1168,1043 232x65] position:relative; zIndex:4
            <a name="Secondary"> [1168,1043 232x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:16px; overflow:clip; cursor:pointer href=./contact
              <div> [1171,1046 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:14px; overflow:clip
                <div> [1189,1068 30x15] position:relative; zIndex:1; filter:contrast(2) invert(0.95)
                  <div name="Animation 14"> [1189,1068 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                    <div> [1189,1068 30x15] position:relative
                      <div> [1189,1068 30x15] 
                        <svg> [1189,1068 30x15] 
              <div> [1252,1046 124x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                <div> [1279,1064 70x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [1279,1064 70x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgb(255, 255, 255) TEXT="Build Now"
…
  <div> [0,2665 1440x30] position:absolute; top:2664.77px; left:0px; right:0px; bottom:0px; backgroundColor:rgb(255, 255, 255); overflow:clip; zIndex:0
```

## Computed Styles — tablet 1000px (layout/type props only)
```
    <div> [40,150 920x3312] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:120px
      <div> [40,150 920x1265] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px
        <div> [40,150 920x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px
          <div> [40,151 79x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [40,151 79x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="OUR PROCESS"
          <div> [139,160 765x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
          <div> [924,150 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(255, 255, 255) radius 100px
        <div> [40,220 920x95] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
          <div> [40,220 800x95] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <h2> [40,220 800x95] fontFamily:"Inter Display"; fontSize:43px; fontWeight:500; lineHeight:47.3px; letterSpacing:-1.72px TEXT="From raw data to refined intelligence. Our iterative deployment cycle."
        <div> [40,365 920x855] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
          <div> [40,365 920x400] display:flex; position:relative; justifyContent:center; alignItems:center; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
            <div> [350,415 300x300] position:relative
              <div> [350,415 300x300] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [350,415 300x300]  IMG=liXydHdt7Kdt6VKUzzjSZwFJ4FA.png alt=""
            <div> [40,365 920x400] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.17
              <div> [40,365 920x400] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [40,365 920x400]  IMG=QRyW2z7jtn8Iu8Ohz7dYmwxFJo.png alt=""
          <div> [40,775 920x445] position:relative
            <div name="Desktop 1"> [40,775 920x445] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
              <div> [40,775 920x172] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [40,775 920x172] position:relative
                  <div name="Desktop 1"> [40,775 920x172] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0.04); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.03) radius 20px
                    <div> [70,805 26x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [70,805 26x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [70,805 26x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="// 01"
                    <div> [126,805 804x112] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
                      <div> [126,805 804x24] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [126,805 740x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [126,805 740x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px TEXT="Comprehensive Strategic Audit"
                        <div> [876,805 54x24] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:4px 12px; backgroundColor:rgb(255, 255, 255); borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 100px
                          <div> [888,809 30x16] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                            <p> [888,809 30x16] fontFamily:"Geist Mono"; fontSize:10px; lineHeight:16px TEXT="Audit"
                      <div> [126,849 600x68] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [126,849 600x68] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="We perform a deep-layer analysis of your current technical stack and fragmented data silos to identify high-impact AI opportunities that align with your core business objectives and ROI targets."
              <div> [40,956 920x81] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                <div> [40,956 920x81] position:relative
                  <div name="Desktop 2"> [40,956 920x81] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
                    <div> [70,986 29x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [70,986 29x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [70,986 29x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="// 02"
                    <div> [129,986 801x20] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
                      <div> [129,986 801x20] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [129,986 801x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [129,986 801x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px TEXT="Custom Architecture Design"
              <div> [40,1047 920x81] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                <div> [40,1047 920x81] position:relative
                  <div name="Desktop 2"> [40,1047 920x81] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
                    <div> [70,1077 30x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [70,1077 30x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [70,1077 30x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="// 03"
                    <div> [130,1077 800x20] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
                      <div> [130,1077 800x20] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [130,1077 800x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [130,1077 800x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px TEXT="Rapid Prototype Development"
              <div> [40,1138 920x81] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                <div> [40,1138 920x81] position:relative
                  <div name="Desktop 2"> [40,1138 920x81] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
                    <div> [70,1168 30x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [70,1168 30x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [70,1168 30x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="// 04"
                    <div> [130,1168 800x20] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
                      <div> [130,1168 800x20] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [130,1168 800x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [130,1168 800x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px TEXT="Enterprise Scale Deployment"
        <div> [40,1269 920x146] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
          <div> [40,1269 920x41] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
            <div> [40,1269 600x41] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [40,1269 600x41] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="WE DON'T JUST SHIP CODE; WE SHIP COMPETITIVE ADVANTAGES. EVERY STEP IS DESIGNED TO ENSURE YOUR AI INFRASTRUCTURE IS FUTURE-PROOF AND SCALABLE."
          <div> [40,1350 232x65] position:relative
            <a name="Secondary"> [40,1350 232x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:16px href=./contact
              <div> [43,1353 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:14px
                <div> [61,1375 30x15] position:relative
                  <div name="Animation 6"> [61,1375 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div> [61,1375 30x15] position:relative
                      <div> [61,1375 30x15] 
                        <svg> [61,1375 30x15] 
              <div> [124,1353 124x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                <div> [151,1371 70x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [151,1371 70x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Build Now"
      <div> [40,1535 920x1927] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:60px
```

## Computed Styles — phone 390px (layout/type props only)
```
    <div> [20,150 350x4479] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:120px
      <div> [20,150 350x1409] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px
        <div> [20,150 350x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px
          <div> [20,151 79x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [20,151 79x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="OUR PROCESS"
          <div> [119,160 195x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
          <div> [334,150 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(255, 255, 255) radius 100px
        <div> [20,220 350x116] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
          <div> [20,220 350x116] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <h2> [20,220 350x116] fontFamily:"Inter Display"; fontSize:35px; fontWeight:500; lineHeight:38.5px; letterSpacing:-1.4px TEXT="From raw data to refined intelligence. Our iterative deployment cycle."
        <div> [20,386 350x936] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
          <div> [20,386 350x400] display:flex; position:relative; justifyContent:center; alignItems:center; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
            <div> [50,436 290x300] position:relative
              <div> [50,436 290x300] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [50,436 290x300]  IMG=liXydHdt7Kdt6VKUzzjSZwFJ4FA.png alt=""
            <div> [20,386 350x400] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.17
              <div> [20,386 350x400] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                <img> [20,386 350x400]  IMG=QRyW2z7jtn8Iu8Ohz7dYmwxFJo.png alt=""
          <div> [20,796 350x526] position:relative
            <div name="Mobile 1"> [20,796 350x526] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
              <div> [20,796 350x253] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                <div> [20,796 350x253] position:relative
                  <div name="Mobile"> [20,796 350x253] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:30px; backgroundColor:rgba(255, 255, 255, 0.04); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.03) radius 20px
                    <div> [50,826 290x25] display:flex; position:relative; justifyContent:space-between; alignItems:center
                      <div> [50,828 26x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [50,828 26x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="// 01"
                      <div> [289,826 51x25] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:4px 12px; backgroundColor:rgb(255, 255, 255); borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 100px
                        <div> [301,830 27x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [301,830 27x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Audit"
                    <div> [50,871 290x148] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px
                      <div> [50,871 290x20] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:10px
                        <div> [50,871 290x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [50,871 290x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px TEXT="Comprehensive Strategic Audit"
                      <div> [50,906 290x113] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [50,906 290x113] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="We perform a deep-layer analysis of your current technical stack and fragmented data silos to identify high-impact AI opportunities that align with your core business objectives and ROI targets."
              <div> [20,1059 350x81] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                <div> [20,1059 350x81] position:relative
                  <div name="Desktop 2"> [20,1059 350x81] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
                    <div> [50,1089 29x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [50,1089 29x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [50,1089 29x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="// 02"
                    <div> [109,1089 231x20] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
                      <div> [109,1089 231x20] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [109,1089 231x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [109,1089 231x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px TEXT="Custom Architecture Design"
              <div> [20,1150 350x81] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                <div> [20,1150 350x81] position:relative
                  <div name="Desktop 2"> [20,1150 350x81] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
                    <div> [50,1180 30x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [50,1180 30x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [50,1180 30x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="// 03"
                    <div> [110,1180 230x20] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
                      <div> [110,1180 230x20] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [110,1180 230x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [110,1180 230x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px TEXT="Rapid Prototype Development"
              <div> [20,1241 350x81] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [20,1241 350x81] position:relative
                  <div name="Desktop 2"> [20,1241 350x81] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:30px; padding:30px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.1) radius 20px
                    <div> [50,1271 30x21] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px
                      <div> [50,1271 30x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [50,1271 30x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="// 04"
                    <div> [110,1271 230x20] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
                      <div> [110,1271 230x20] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:10px
                        <div> [110,1271 230x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                          <p> [110,1271 230x20] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:19.8px; letterSpacing:-0.72px TEXT="Enterprise Scale Deployment"
        <div> [20,1372 350x187] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
          <div> [20,1372 350x82] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
            <div> [20,1372 350x82] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [20,1372 350x82] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="WE DON'T JUST SHIP CODE; WE SHIP COMPETITIVE ADVANTAGES. EVERY STEP IS DESIGNED TO ENSURE YOUR AI INFRASTRUCTURE IS FUTURE-PROOF AND SCALABLE."
          <div> [20,1494 232x65] position:relative
            <a name="Secondary"> [20,1494 232x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:16px href=./contact
              <div> [23,1497 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:14px
                <div> [41,1519 30x15] position:relative
                  <div name="Animation 14"> [41,1519 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div> [41,1519 30x15] position:relative
                      <div> [41,1519 30x15] 
                        <svg> [41,1519 30x15] 
              <div> [104,1497 124x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                <div> [131,1514 70x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [131,1514 70x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Build Now"
      <div> [20,1679 350x2950] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:60px
```
