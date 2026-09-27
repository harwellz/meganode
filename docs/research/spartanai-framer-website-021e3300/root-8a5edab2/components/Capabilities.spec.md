# Capabilities Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Capabilities.tsx` (client component)
- **Screenshots:** `seg-desktop-04.png` (001 active), `state-cap-002.png` (002 active); mobile `seg-mobile-07.png`, `seg-mobile-08.png`
- **Interaction model:** **click-driven horizontal accordion** (no scroll or hover switching) + scroll-triggered fade-in + time-driven floating illustration.

## DOM Structure
Rendered on the dark section background (rgb(26,26,26)); root element `id="capabilities"`, padding `250px 40px 0`, row of two 680px halves (height 630):
- **Left column** (680×630, padding-right 70, `justify-between`):
  - Top (width 500, gap 50): `<SectionLabel label="CAPABILITIES" order="pill-first" color="#fff" lineColor="rgba(255,255,255,0.1)" />` + paragraph (Inter Display 300 16px/24px +0.32px, white).
  - Bottom (gap 40): H2 (width 600) Inter Display 500 54px/59.4px −2.16px white + `<ExpandButton label="Start Build" size="md" tone="coal" />`.
- **Right column** (680×630): flex row, gap 10: three cards. Active card width 480, inactive width 90; all height 630, radius 20.
  - **Active card:** bg transparent (rgba(255,255,255,0)), 1px border rgba(255,255,255,0.2). Top text block (padding `30px 70px 0 30px`, gap 20): H3 Inter Display 500 28px/39.2px −0.28px white + description (300 14px/21px +0.28px white, width 380). Number pill absolute top 14 right 14: padding `10px 20px`, radius 100, 1px border (white alpha), text Geist Mono 200 12px/20.4px uppercase white. Background pattern image absolute top 130 → bottom, opacity 0.18, `mask-image: linear-gradient(0deg, #000 70.15%, transparent 100%)`. Illustration 270×270 image centred at (left 240px, top ~221.5px + centre) floating (sp-bob, ~3s, ±6px).
  - **Inactive card:** bg rgba(255,255,255,0.04), 1px border rgba(255,255,255,0.1)-ish, number pill at top (centred), vertical title at the bottom: Geist Mono 400 13px uppercase rgba(255,255,255,0.7), `writing-mode: vertical-rl; transform: rotate(180deg)` (reads bottom→top), padding 10, bottom 30px.
- **Click an inactive card** → it becomes active (width 90 → 480) and the previous active shrinks (480 → 90); inner content cross-fades (opacity). Transition ~0.5s ease-out.

## Card data
| # | Title | Description | Pattern (bg) | Illustration |
|---|---|---|---|---|
| 001 | Autonomous Agent Architecture Labs | Architecting robust server environments and local LLM integrations to ensure data remains secure and local. | `qWpzthqQ4FGQWP39IeKgah1OP8.png` | `WTuFQeqWgOcQVCks16yKxgDaefI.png` |
| 002 | Autonomous Agentic Workflows | Building self-optimizing task bots that handle complex multi-step workflows with zero human intervention. | `pEct5trUmjDYAblzuKYq2MpHaA.png` | `In0V7veBPGhnSUzXqR7lATUDvE.png` |
| 003 | Data Pipelines & RAG Systems | Streamlining data ingestion and processing using advanced RAG systems for real-time business intelligence. | `qWpzthqQ4FGQWP39IeKgah1OP8.png` | `T1zAekOylQHr0GPPBMBKhmpUeI.png` |
Vertical titles are the same strings, uppercase.

## Text Content (verbatim)
"CAPABILITIES" · "We bridge the gap between abstract machine learning and practical business utility through bespoke engineering." · "Tailored Intelligence for Modern Enterprises." · "Start Build"

## Behaviors
- Label block, paragraph, H2, button and cards fade in on enter (`FadeIn`).

## Responsive Behavior
- **Tablet:** see tablet excerpt (columns stack; cards area full width).
- **Phone:** text stacked on top; cards become a vertical accordion list: active card full-width (~600px tall) and inactive cards as ~90px-tall horizontal rows showing number pill + title in one line (see `seg-mobile-08.png`); clicking a row activates it.

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
  <div> [0,1574 1440x2498] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:0px; borderRadius:0px 0px 20px 20px; zIndex:1
    <div> [0,1574 1440x880] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:250px 40px 0px; overflow:clip; zIndex:3
      <div> [40,1824 680x630] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:0px 70px 0px 0px; overflow:clip
        <div> [40,1824 500x118] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px; overflow:clip
          <div> [40,1824 500x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px; overflow:clip
            <div> [40,1824 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(255, 255, 255) radius 100px
            <div> [96,1834 338x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1); overflow:clip
            <div> [454,1825 86x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [454,1825 86x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px; textAlign:left; textTransform:uppercase; color:rgb(255, 255, 255) TEXT="CAPABILITIES"
          <div> [40,1894 500x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <p> [40,1894 500x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgb(255, 255, 255) TEXT="We bridge the gap between abstract machine learning and practical business utility through bespoke engineering."
        <div> [40,2230 610x224] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px; overflow:clip
          <div> [40,2230 600x119] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <h2> [40,2230 600x119] fontFamily:"Inter Display"; fontSize:54px; fontWeight:500; lineHeight:59.4px; letterSpacing:-2.16px; textAlign:left; color:rgb(255, 255, 255) TEXT="Tailored Intelligence for Modern Enterprises."
          <div> [40,2389 212x65] position:relative; zIndex:4
            <a name="Secondary"> [40,2389 212x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:16px; overflow:clip; cursor:pointer href=./contact
              <div> [43,2392 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:14px; overflow:clip
                <div> [61,2414 30x15] position:relative; zIndex:1; filter:contrast(2) invert(0.95)
                  <div name="Animation 14"> [61,2414 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                    <div> [61,2414 30x15] position:relative
                      <div> [61,2414 30x15] 
                        <svg> [61,2414 30x15] 
              <div> [124,2392 104x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                <div> [140,2410 72x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [140,2410 72x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgb(255, 255, 255) TEXT="Start Build"
      <div> [720,1824 680x630] position:relative
        <div name="Desktop 1"> [720,1824 680x630] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:10px; overflow:clip
          <div> [720,1824 480x630] position:relative
            <div name="Desktop Open"> [720,1824 480x630] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:0px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 20px
              <div> [720,1824 480x187] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:30px 70px 0px 30px; overflow:clip
                <div> [750,1854 350x78] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                  <h3> [750,1854 350x78] fontFamily:"Inter Display"; fontSize:28px; fontWeight:500; lineHeight:39.2px; letterSpacing:-0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Autonomous Agent Architecture Labs"
                <div> [750,1952 380x42] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                  <p> [750,1952 380x42] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Architecting robust server environments and local LLM integrations to ensure data remains secure and local."
              <div> [720,2011 480x443] position:relative; overflow:clip
                <div name="Group 117"> [825,2098 270x270] position:absolute; top:221.5px; left:240px; right:-30px; bottom:-48.5px; zIndex:5; transform:matrix(1, 0, 0, 1, -135, -135)
                  <div> [825,2098 270x270] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [825,2098 270x270] overflow:clip; objectFit:cover IMG=WTuFQeqWgOcQVCks16yKxgDaefI.png alt=""
              <div> [720,1954 480x500] position:absolute; top:130px; left:0px; right:0px; bottom:0px; opacity:0.18; overflow:clip; zIndex:1; maskImage:linear-gradient(0deg, rgb(0, 0, 0) 70.1471%, rgba(0, 0, 0, 0) 100%)
                <div> [720,1954 480x500] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [720,1954 480x500] overflow:clip; objectFit:cover IMG=qWpzthqQ4FGQWP39IeKgah1OP8.png alt=""
              <div> [1124,1838 62x40] display:flex; position:absolute; top:14px; left:404.391px; right:14px; bottom:575.594px; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:10px 20px; borderRadius:100px; overflow:clip; zIndex:1; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100px
                <div> [1144,1848 22x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [1144,1848 22x20] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px; textAlign:left; textTransform:uppercase; color:rgb(255, 255, 255) TEXT="001"
              <div> [942,2139 37x285] position:absolute; top:314.797px; left:240px; right:203px; bottom:30px; opacity:0; zIndex:1; transform:matrix(1, 0, 0, 1, -18.5, 0)
                <div> [942,2139 37x285] display:flex; flexDirection:column; justifyContent:flex-end; alignItems:center
                  <div> [942,2139 37x285] padding:10px; fontFamily:"Geist Mono"; fontSize:13px; textAlign:center; textTransform:uppercase; color:rgba(255, 255, 255, 0.7); transform:matrix(-1, 0, 0, -1, 0, 0); whiteSpace:nowrap TEXT="Autonomous Agent Architecture Labs"
          <div> [1210,1824 90x630] position:relative
            <div name="Desktop Close"> [1210,1824 90x630] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:0px; backgroundColor:rgba(255, 255, 255, 0.04); borderRadius:20px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.03) radius 20px
              <div> [1210,1954 90x500] position:absolute; top:130px; left:0px; right:0px; bottom:0px; opacity:0; overflow:clip; zIndex:1; maskImage:linear-gradient(0deg, rgb(0, 0, 0) 70.1471%, rgba(0, 0, 0, 0) 100%)
                <div> [1210,1954 90x500] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [1210,1954 90x500] overflow:clip; objectFit:cover IMG=pEct5trUmjDYAblzuKYq2MpHaA.png alt=""
              <div> [1224,1838 62x40] display:flex; position:absolute; top:14px; left:45px; right:-16.6094px; bottom:575.594px; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:10px 20px; borderRadius:100px; overflow:clip; zIndex:1; transform:matrix(1, 0, 0, 1, -30.8047, 0); BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100px
                <div> [1244,1848 22x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [1244,1848 22x20] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px; textAlign:left; textTransform:uppercase; color:rgba(255, 255, 255, 0.8) TEXT="002"
              <div> [1237,2186 37x238] position:absolute; top:361.594px; left:45px; right:8px; bottom:30px; zIndex:1; transform:matrix(1, 0, 0, 1, -18.5, 0)
                <div> [1237,2186 37x238] display:flex; flexDirection:column; justifyContent:flex-end; alignItems:center
                  <div> [1237,2186 37x238] padding:10px; fontFamily:"Geist Mono"; fontSize:13px; textAlign:center; textTransform:uppercase; color:rgba(255, 255, 255, 0.7); transform:matrix(-1, 0, 0, -1, 0, 0); whiteSpace:nowrap TEXT="Autonomous Agentic Workflows"
          <div> [1310,1824 90x630] position:relative
            <div name="Desktop Close"> [1310,1824 90x630] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:0px; backgroundColor:rgba(255, 255, 255, 0.04); borderRadius:20px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.03) radius 20px
              <div> [1310,1954 90x500] position:absolute; top:130px; left:0px; right:0px; bottom:0px; opacity:0; overflow:clip; zIndex:1; maskImage:linear-gradient(0deg, rgb(0, 0, 0) 70.1471%, rgba(0, 0, 0, 0) 100%)
                <div> [1310,1954 90x500] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [1310,1954 90x500] overflow:clip; objectFit:cover IMG=qWpzthqQ4FGQWP39IeKgah1OP8.png alt=""
              <div> [1324,1838 62x40] display:flex; position:absolute; top:14px; left:45px; right:-16.6094px; bottom:575.594px; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:10px 20px; borderRadius:100px; overflow:clip; zIndex:1; transform:matrix(1, 0, 0, 1, -30.8047, 0); BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100px
                <div> [1344,1848 22x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                  <p> [1344,1848 22x20] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px; textAlign:left; textTransform:uppercase; color:rgba(255, 255, 255, 0.8) TEXT="003"
              <div> [1337,2186 37x238] position:absolute; top:361.594px; left:45px; right:8px; bottom:30px; zIndex:1; transform:matrix(1, 0, 0, 1, -18.5, 0)
                <div> [1337,2186 37x238] display:flex; flexDirection:column; justifyContent:flex-end; alignItems:center
                  <div> [1337,2186 37x238] padding:10px; fontFamily:"Geist Mono"; fontSize:13px; textAlign:center; textTransform:uppercase; color:rgba(255, 255, 255, 0.7); transform:matrix(-1, 0, 0, -1, 0, 0); whiteSpace:nowrap TEXT="Data Pipelines & RAG Systems"
```

## Computed Styles — tablet 1000px (layout/type props only)
```
  <div> [0,1410 1000x3244] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:30px; borderRadius:0px 0px 20px 20px
    <div> [0,1410 1000x1269] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:60px; padding:150px 40px 0px
      <div> [40,1560 920x368] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:50px
        <div> [40,1560 920x118] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px
          <div> [40,1560 920x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px
            <div> [40,1560 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(255, 255, 255) radius 100px
            <div> [96,1570 758x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [874,1561 86x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [874,1561 86x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="CAPABILITIES"
          <div> [40,1630 600x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [40,1630 600x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="We bridge the gap between abstract machine learning and practical business utility through bespoke engineering."
        <div> [40,1728 920x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
          <div> [40,1728 600x95] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <h2> [40,1728 600x95] fontFamily:"Inter Display"; fontSize:43px; fontWeight:500; lineHeight:47.3px; letterSpacing:-1.72px TEXT="Tailored Intelligence for Modern Enterprises."
          <div> [40,1863 212x65] position:relative
            <a name="Secondary"> [40,1863 212x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:16px href=./contact
              <div> [43,1866 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:14px
                <div> [61,1888 30x15] position:relative
                  <div name="Animation 1"> [61,1888 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div> [61,1888 30x15] position:relative
                      <div> [61,1888 30x15] 
                        <svg> [61,1888 30x15] 
              <div> [124,1866 104x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                <div> [140,1883 72x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [140,1883 72x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Start Build"
      <div> [40,1988 920x691] position:relative
        <div name="Mobile"> [40,1988 920x691] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px
          <div> [40,1988 920x510] position:relative
            <div name="Mobile Open"> [40,1988 920x510] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:0px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 20px
              <div> [40,1988 920x187] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:30px 70px 0px 30px
                <div> [70,2018 350x73] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <h3> [70,2018 350x73] fontFamily:"Inter Display"; fontSize:26px; fontWeight:500; lineHeight:36.4px; letterSpacing:-0.26px TEXT="Autonomous Agent Architecture Labs"
                <div> [70,2111 600x42] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [70,2111 600x42] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Architecting robust server environments and local LLM integrations to ensure data remains secure and local."
              <div> [40,2175 920x323] position:relative
                <div name="Group 117"> [365,2201 270x270] position:absolute; top:161.5px; left:460px; right:190px; bottom:-108.5px; transform:matrix(1, 0, 0, 1, -135, -135)
                  <div> [365,2201 270x270] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [365,2201 270x270]  IMG=WTuFQeqWgOcQVCks16yKxgDaefI.png alt=""
              <div> [40,2118 920x380] position:absolute; top:130px; left:0px; right:0px; bottom:0px; opacity:0.18
                <div> [40,2118 920x380] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [40,2118 920x380]  IMG=qWpzthqQ4FGQWP39IeKgah1OP8.png alt=""
              <div> [884,2002 62x40] display:flex; position:absolute; top:14px; left:844.391px; right:14px; bottom:455.594px; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:10px 20px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100px
                <div> [904,2012 22x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [904,2012 22x20] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="001"
              <div> [482,2183 37x285] position:absolute; top:194.797px; left:460px; right:423px; bottom:30px; opacity:0; transform:matrix(1, 0, 0, 1, -18.5, 0)
                <div> [482,2183 37x285] display:flex; flexDirection:column; justifyContent:flex-end; alignItems:center
                  <div> [482,2183 37x285] padding:10px; fontFamily:"Geist Mono"; fontSize:13px; transform:matrix(-1, 0, 0, -1, 0, 0) TEXT="Autonomous Agent Architecture Labs"
          <div> [40,2508 920x80] position:relative
            <div name="Mobile Close"> [40,2508 920x80] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:14px; padding:20px; backgroundColor:rgba(255, 255, 255, 0.04); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.03) radius 20px
              <div> [40,2638 920x0] position:absolute; top:130px; left:0px; right:0px; bottom:0px; opacity:0
                <div> [40,2638 920x0] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [40,2638 920x0]  IMG=pEct5trUmjDYAblzuKYq2MpHaA.png alt=""
              <div> [60,2528 62x40] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:10px 20px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100px
                <div> [80,2538 22x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [80,2538 22x20] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="002"
              <div> [136,2539 804x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [136,2539 804x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Autonomous Agentic Workflows"
          <div> [40,2598 920x80] position:relative
            <div name="Mobile Close"> [40,2598 920x80] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:14px; padding:20px; backgroundColor:rgba(255, 255, 255, 0.04); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.03) radius 20px
              <div> [40,2728 920x0] position:absolute; top:130px; left:0px; right:0px; bottom:0px; opacity:0
                <div> [40,2728 920x0] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [40,2728 920x0]  IMG=qWpzthqQ4FGQWP39IeKgah1OP8.png alt=""
              <div> [60,2618 62x40] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:10px 20px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100px
                <div> [80,2628 22x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [80,2628 22x20] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="003"
              <div> [136,2629 804x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [136,2629 804x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Data Pipelines & RAG Systems"
    <div> [0,2709 1000x1945] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(26, 26, 26)
```

## Computed Styles — phone 390px (layout/type props only)
```
  <div> [0,2831 390x3683] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:30px; borderRadius:0px 0px 20px 20px
    <div> [0,2831 390x1249] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:54px; padding:150px 20px 0px
      <div> [20,2981 350x354] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:30px
        <div> [20,2981 350x142] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px
          <div> [20,2981 350x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px
            <div> [20,2981 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(255, 255, 255) radius 100px
            <div> [76,2991 188x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [284,2982 86x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [284,2982 86x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="CAPABILITIES"
          <div> [20,3051 350x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [20,3051 350x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="We bridge the gap between abstract machine learning and practical business utility through bespoke engineering."
        <div> [20,3153 350x182] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
          <div> [20,3153 350x77] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <h2> [20,3153 350x77] fontFamily:"Inter Display"; fontSize:35px; fontWeight:500; lineHeight:38.5px; letterSpacing:-1.4px TEXT="Tailored Intelligence for Modern Enterprises."
          <div> [20,3270 212x65] position:relative
            <a name="Secondary"> [20,3270 212x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:16px href=./contact
              <div> [23,3273 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:14px
                <div> [41,3295 30x15] position:relative
                  <div name="Animation 14"> [41,3295 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                    <div> [41,3295 30x15] position:relative
                      <div> [41,3295 30x15] 
                        <svg> [41,3295 30x15] 
              <div> [104,3273 104x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                <div> [120,3291 72x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [120,3291 72x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Start Build"
      <div> [20,3389 350x691] position:relative
        <div name="Mobile"> [20,3389 350x691] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:10px
          <div> [20,3389 350x510] position:relative
            <div name="Mobile Open"> [20,3389 350x510] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:0px; backgroundColor:rgba(255, 255, 255, 0); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 20px
              <div> [20,3389 350x187] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:30px 70px 0px 30px
                <div> [50,3419 250x73] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <h3> [50,3419 250x73] fontFamily:"Inter Display"; fontSize:26px; fontWeight:500; lineHeight:36.4px; letterSpacing:-0.26px TEXT="Autonomous Agent Architecture Labs"
                <div> [50,3512 250x63] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [50,3512 250x63] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Architecting robust server environments and local LLM integrations to ensure data remains secure and local."
              <div> [20,3576 350x323] position:relative
                <div name="Group 117"> [60,3603 270x270] position:absolute; top:161.5px; left:175px; right:-95px; bottom:-108.5px; transform:matrix(1, 0, 0, 1, -135, -135)
                  <div> [60,3603 270x270] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [60,3603 270x270]  IMG=WTuFQeqWgOcQVCks16yKxgDaefI.png alt=""
              <div> [20,3519 350x380] position:absolute; top:130px; left:0px; right:0px; bottom:0px; opacity:0.18
                <div> [20,3519 350x380] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [20,3519 350x380]  IMG=qWpzthqQ4FGQWP39IeKgah1OP8.png alt=""
              <div> [294,3403 62x40] display:flex; position:absolute; top:14px; left:274.391px; right:14px; bottom:455.594px; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:10px 20px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100px
                <div> [314,3413 22x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [314,3413 22x20] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="001"
              <div> [177,3584 37x285] position:absolute; top:194.797px; left:175px; right:138px; bottom:30px; opacity:0; transform:matrix(1, 0, 0, 1, -18.5, 0)
                <div> [177,3584 37x285] display:flex; flexDirection:column; justifyContent:flex-end; alignItems:center
                  <div> [177,3584 37x285] padding:10px; fontFamily:"Geist Mono"; fontSize:13px; transform:matrix(-1, 0, 0, -1, 0, 0) TEXT="Autonomous Agent Architecture Labs"
          <div> [20,3909 350x80] position:relative
            <div name="Mobile Close"> [20,3909 350x80] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:14px; padding:20px; backgroundColor:rgba(255, 255, 255, 0.04); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.03) radius 20px
              <div> [20,4039 350x0] position:absolute; top:130px; left:0px; right:0px; bottom:0px; opacity:0
                <div> [20,4039 350x0] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [20,4039 350x0]  IMG=pEct5trUmjDYAblzuKYq2MpHaA.png alt=""
              <div> [40,3929 62x40] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:10px 20px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100px
                <div> [60,3939 22x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [60,3939 22x20] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="002"
              <div> [116,3940 234x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [116,3940 234x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Autonomous Agentic Workflows"
          <div> [20,4000 350x80] position:relative
            <div name="Mobile Close"> [20,4000 350x80] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:14px; padding:20px; backgroundColor:rgba(255, 255, 255, 0.04); borderRadius:20px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.03) radius 20px
              <div> [20,4130 350x0] position:absolute; top:130px; left:0px; right:0px; bottom:0px; opacity:0
                <div> [20,4130 350x0] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [20,4130 350x0]  IMG=qWpzthqQ4FGQWP39IeKgah1OP8.png alt=""
              <div> [40,4020 62x40] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:10px; padding:10px 20px; borderRadius:100px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100px
                <div> [60,4030 22x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [60,4030 22x20] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="003"
              <div> [116,4030 234x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [116,4030 234x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Data Pipelines & RAG Systems"
    <div> [0,4110 390x2404] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(26, 26, 26)
```
