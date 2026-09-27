# Insights Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Insights.tsx`
- **Screenshots:** `seg-desktop-14.png` (bottom), `seg-desktop-15.png`; mobile `seg-mobile-24.png`…`seg-mobile-26.png`
- **Interaction model:** time-driven big marquee + hover (article cards) + fade-in.

## DOM Structure
Bottom part of the light FAQ/Insights card (bg rgb(240,240,240)), 1336 wide, padding-bottom 180, column gap 50:
1. **Header** (gap 40): `<BigMarquee title="Insights" asteriskColor="#fff" />` (the asterisk here is WHITE on the grey card); row: left half empty, right half: paragraph (Inter Display 300 16px/24px +0.32px ink, width ~420) + `<ExpandButton label="All articles" size="md" tone="ink" />` (gap ~40).
2. **Blog grid** (3 columns 432 wide, gap 20, height 650): masonry-like alternating layout —
   - Column 1: image card (432×260, radius 20, cover) on top, text card (432×370) below.
   - Column 2: text card on top (432×370), image card below.
   - Column 3: image on top, text card below.
   (Gap 20 between image and text.)
   - **Text card** (`<a>`): bg rgb(214,214,214), radius 20, padding 24, column `justify-between`: category (IBM Plex Mono 400 12px uppercase ink), title (h4 Inter Display 400 20px/28px −0.4px ink, gap ~20), excerpt (Inter Display 300 14px/21px ink, 0.8 alpha), footer row: "Written by" (Inter Display 400 14px) + author (300 12px) and a 48px round button (bg rgb(26,26,26)) with a white arrow icon (svg17) rotated −45° (pointing up-right).
- **Card hover (~0.4s):** text card bg rgb(214,214,214) → rgb(26,26,26); all text → white; round button bg → #fff, arrow → ink and rotation −45° → 0°.
- Cards fade in on enter.

## Article data
| # | Image | Category | Title | Excerpt | Author |
|---|---|---|---|---|---|
| 1 | `862JbA3xEJjbdSDVyKEwOZ0f2g.jpeg` | TRANSFORMATION | The Sovereign Cloud: Why On-Premise AI is the Future of Data Privacy | Explore how federated learning and private hosting are allowing firms to innovate without risking security. | Frank Joel |
| 2 | `YKAEpvQFebP2OETEJDVNip8UTg.jpeg` | ARCHITECTURE | The Architecture of Autonomy: Scaling AI Within Legacy Frameworks | A comprehensive guide on integrating custom machine learning models into complex enterprise environments. | Damilola Manuel |
| 3 | `egDVD5dc2AvUIZKG0seuGXtH0.jpeg` | PRIVACY | Human-Centric Automation: Designing AI That Empowers Your Workforce | Why the most successful AI implementations focus on augmenting human talent rather than simply replacing it. | Deborah Reachie |
(Which image goes with which column/position: see IMG entries in the dump; card links → `#`.)

Paragraph: "A curated repository of technical frameworks, model benchmarks, and strategic guides for leaders navigating the integration of custom neural architectures."

## Responsive Behavior
- **Phone:** single column: image then text card per article (`seg-mobile-25..26`); big marquee 128px.
- **Tablet:** see tablet excerpt.

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
    <div> [52,978 1336x1311] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:50px; padding:0px 0px 180px
      <div> [52,978 1336x431] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:40px
        <div> [52,978 1336x220] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
          <ul> [-904,978 1336x220] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -955.664, 0)
            <li> [1922,978 671x220] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 2826, 0)
              <div> [1922,978 671x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <h2> [1922,978 671x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Insights"
            <li> [2653,1013 151x151] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 2826, 0)
              <div> [2630,990 197x197] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip; transform:matrix(0.926502, -0.376289, 0.376289, 0.926502, 0, 0)
                <div> [2630,990 197x197] position:relative
                  <div> [2630,990 197x197] 
                    <svg> [2630,990 197x197] 
            <li> [38,978 671x220] display:list-item; position:relative
              <div> [38,978 671x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <h2> [38,978 671x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Insights"
            <li> [769,1013 151x151] display:list-item; position:relative
              <div> [747,990 196x196] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip; transform:matrix(0.92939, -0.369098, 0.369098, 0.92939, 0, 0)
                <div> [747,990 196x196] position:relative
                  <div> [747,990 196x196] 
                    <svg> [747,990 196x196] 
            <li> [980,978 671x220] display:list-item; position:relative
              <div> [980,978 671x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <h2> [980,978 671x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Insights"
            <li> [1711,1013 151x151] display:list-item; position:relative
              <div> [1711,1013 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                <div> [1711,1013 151x151] position:relative
                  <div> [1711,1013 151x151] 
                    <svg> [1711,1013 151x151] 
        <div> [52,1238 1336x171] display:flex; position:relative; justifyContent:center; alignItems:flex-end; gap:0px
          <div> [52,1387 668x22] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px
          <div> [720,1238 668x171] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:34px; overflow:clip
            <div> [720,1238 450x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [720,1238 450x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgb(26, 26, 26) TEXT="A curated repository of technical frameworks, model benchmarks, and strategic guides for leaders navigating the integration of custom neural architectures."
            <div> [720,1344 202x65] position:relative; zIndex:4
              <a name="Primary"> [720,1344 202x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(26, 26, 26); borderRadius:16px; overflow:clip; cursor:pointer href=./articles
                <div> [723,1347 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:14px; overflow:clip
                  <div> [741,1369 30x15] position:relative; zIndex:1
                    <div name="Animation 13"> [741,1369 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div> [741,1369 30x15] position:relative
                        <div> [741,1369 30x15] 
                          <svg> [741,1369 30x15] 
                <div> [804,1347 94x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                  <div> [816,1365 71x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                    <p> [816,1365 71x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgb(255, 255, 255) TEXT="All articles"
      <div name="Blog Content"> [52,1459 1336x650] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:20px; overflow:clip
        <div> [52,1459 432x650] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px 20px; overflow:clip; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
          <div> [52,1459 432x650] position:relative
            <a name="Desktop 1"> [52,1459 432x650] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; borderRadius:20px; overflow:clip; cursor:pointer href=./articles/the-sovereign-cloud-why-on-premise-ai-is-the-future-of-data-privacy
              <div> [52,1459 432x260] position:relative; borderRadius:20px; overflow:clip
                <div> [52,1459 432x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px; overflow:clip
                  <div> [52,1459 432x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [52,1459 432x260] overflow:clip; objectFit:cover IMG=862JbA3xEJjbdSDVyKEwOZ0f2g.jpeg alt="boy in front of computer monitor"
              <div> [52,1739 432x370] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:40px 24px 24px; backgroundColor:rgb(214, 214, 214); borderRadius:20px; overflow:clip
                <div> [76,1779 384x155] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:22px; overflow:clip
                  <div> [76,1779 384x91] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; overflow:clip
                    <div> [76,1779 101x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                      <p> [76,1779 101x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px; textAlign:left; textTransform:uppercase; color:rgb(26, 26, 26) TEXT="Transformation"
                    <div> [76,1814 350x56] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                      <h4> [76,1814 350x56] fontFamily:"Inter Display"; fontSize:20px; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(26, 26, 26) TEXT="The Sovereign Cloud: Why On-Premise AI is the Future of Data Privacy"
                  <div> [76,1892 380x42] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [76,1892 380x42] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Explore how federated learning and private hosting are allowing firms to innovate without risking security."
                <div> [76,2036 384x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                  <div> [76,2039 325x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px; overflow:clip
                    <div> [76,2039 65x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [76,2039 65x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Written by"
                    <div> [76,2065 54x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [76,2065 54x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgb(26, 26, 26) TEXT="Frank Joel"
                  <div> [411,2036 49x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%; overflow:clip
                    <div> [423,2048 25x25] position:relative; transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)
                      <svg> [423,2048 25x25] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
        <div> [504,1459 432x650] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px 20px; overflow:clip; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
          <div> [504,1459 432x650] position:relative
            <a name="Desktop 2"> [504,1459 432x650] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; borderRadius:20px; overflow:clip; cursor:pointer href=./articles/the-architecture-of-autonomy-scaling-ai-within-legacy-frameworks
              <div> [504,1849 432x260] position:relative; borderRadius:20px; overflow:clip
                <div> [504,1849 432x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px; overflow:clip
                  <div> [504,1849 432x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [504,1849 432x260] overflow:clip; objectFit:cover IMG=YKAEpvQFebP2OETEJDVNip8UTg.jpeg alt="people doing office works"
              <div> [504,1459 432x370] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:24px 24px 40px; backgroundColor:rgb(214, 214, 214); borderRadius:20px; overflow:clip
                <div> [528,1483 384x155] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:22px; overflow:clip
                  <div> [528,1483 384x91] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; overflow:clip
                    <div> [528,1483 86x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                      <p> [528,1483 86x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px; textAlign:left; textTransform:uppercase; color:rgb(26, 26, 26) TEXT="Architecture"
                    <div> [528,1518 350x56] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                      <h4> [528,1518 350x56] fontFamily:"Inter Display"; fontSize:20px; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(26, 26, 26) TEXT="The Architecture of Autonomy: Scaling AI Within Legacy Frameworks"
                  <div> [528,1596 380x42] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [528,1596 380x42] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="A comprehensive guide on integrating custom machine learning models into complex enterprise environments."
                <div> [528,1740 384x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                  <div> [528,1743 325x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px; overflow:clip
                    <div> [528,1743 65x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [528,1743 65x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Written by"
                    <div> [528,1769 86x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [528,1769 86x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgb(26, 26, 26) TEXT="Damilola Manuel"
                  <div> [863,1740 49x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%; overflow:clip
                    <div> [875,1752 25x25] position:relative; transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)
                      <svg> [875,1752 25x25] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
        <div> [956,1459 432x650] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px 20px; overflow:clip; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
          <div> [956,1459 432x650] position:relative
            <a name="Desktop 1"> [956,1459 432x650] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; borderRadius:20px; overflow:clip; cursor:pointer href=./articles/human-centric-automation-designing-ai-that-empowers-your-workforce
              <div> [956,1459 432x260] position:relative; borderRadius:20px; overflow:clip
                <div> [956,1459 432x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px; overflow:clip
                  <div> [956,1459 432x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [956,1459 432x260] overflow:clip; objectFit:cover IMG=egDVD5dc2AvUIZKG0seuGXtH0.jpeg alt="sittin people beside table inside room"
              <div> [956,1739 432x370] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:40px 24px 24px; backgroundColor:rgb(214, 214, 214); borderRadius:20px; overflow:clip
                <div> [980,1779 384x155] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:22px; overflow:clip
                  <div> [980,1779 384x91] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; overflow:clip
                    <div> [980,1779 50x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                      <p> [980,1779 50x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px; textAlign:left; textTransform:uppercase; color:rgb(26, 26, 26) TEXT="Privacy"
                    <div> [980,1814 350x56] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                      <h4> [980,1814 350x56] fontFamily:"Inter Display"; fontSize:20px; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(26, 26, 26) TEXT="Human-Centric Automation: Designing AI That Empowers Your Workforce"
                  <div> [980,1892 380x42] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                    <p> [980,1892 380x42] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Why the most successful AI implementations focus on augmenting human talent rather than simply replacing it."
                <div> [980,2036 384x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                  <div> [980,2039 325x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px; overflow:clip
                    <div> [980,2039 65x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [980,2039 65x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Written by"
                    <div> [980,2065 89x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [980,2065 89x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgb(26, 26, 26) TEXT="Deborah Reachie"
                  <div> [1315,2036 49x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%; overflow:clip
                    <div> [1327,2048 25x25] position:relative; transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)
                      <svg> [1327,2048 25x25] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
```

## Computed Styles — tablet 1000px (layout/type props only)
```
    <div> [52,1246 896x1907] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:50px; padding:0px 0px 150px
      <div> [52,1246 896x387] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:40px
        <div> [52,1246 896x176] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
          <ul> [-769,1246 896x176] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -821.087, 0)
            <li> [847,1246 537x176] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 1616, 0)
              <div> [847,1246 537x176] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h2> [847,1246 537x176] fontFamily:"Inter Display"; fontSize:160px; fontWeight:700; lineHeight:176px; letterSpacing:-6.4px TEXT="Insights"
            <li> [1444,1259 151x151] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 1616, 0)
              <div> [1418,1234 201x201] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; transform:matrix(0.902315, -0.431078, 0.431078, 0.902315, 0, 0)
                <div> [1418,1234 201x201] position:relative
                  <div> [1418,1234 201x201] 
                    <svg> [1418,1234 201x201] 
            <li> [39,1246 537x176] display:list-item; position:relative
              <div> [39,1246 537x176] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h2> [39,1246 537x176] fontFamily:"Inter Display"; fontSize:160px; fontWeight:700; lineHeight:176px; letterSpacing:-6.4px TEXT="Insights"
            <li> [635,1259 151x151] display:list-item; position:relative
              <div> [610,1234 201x201] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; transform:matrix(0.904649, -0.426158, 0.426158, 0.904649, 0, 0)
                <div> [610,1234 201x201] position:relative
                  <div> [610,1234 201x201] 
                    <svg> [610,1234 201x201] 
        <div> [52,1462 896x171] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-end; gap:0px
          <div> [52,1462 896x171] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:34px
            <div> [52,1462 500x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [52,1462 500x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="A curated repository of technical frameworks, model benchmarks, and strategic guides for leaders navigating the integration of custom neural architectures."
            <div> [52,1568 202x65] position:relative
              <a name="Primary"> [52,1568 202x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(26, 26, 26); borderRadius:16px href=./articles
                <div> [55,1571 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:14px
                  <div> [73,1593 30x15] position:relative
                    <div name="Animation 6"> [73,1593 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div> [73,1593 30x15] position:relative
                        <div> [73,1593 30x15] 
                          <svg> [73,1593 30x15] 
                <div> [136,1571 94x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                  <div> [148,1589 71x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [148,1589 71x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="All articles"
      <div name="Blog Content"> [52,1683 896x1320] display:grid; position:relative; justifyContent:center; gap:20px; gridTemplateColumns:438px 438px
        <div> [52,1683 438x650] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px 20px; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
          <div> [52,1683 438x650] position:relative
            <a name="Mobile 1"> [52,1683 438x650] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; borderRadius:20px href=./articles/the-sovereign-cloud-why-on-premise-ai-is-the-future-of-data-privacy
              <div> [52,1683 438x260] position:relative; borderRadius:20px
                <div> [52,1683 438x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <div> [52,1683 438x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [52,1683 438x260]  IMG=862JbA3xEJjbdSDVyKEwOZ0f2g.jpeg alt="boy in front of computer monitor"
              <div> [52,1963 438x370] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:40px 24px 24px; backgroundColor:rgb(214, 214, 214); borderRadius:20px
                <div> [76,2003 390x150] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:22px
                  <div> [76,2003 390x86] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px
                    <div> [76,2003 101x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [76,2003 101x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Transformation"
                    <div> [76,2039 350x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h4> [76,2039 350x50] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px; letterSpacing:-0.36px TEXT="The Sovereign Cloud: Why On-Premise AI is the Future of Data Privacy"
                  <div> [76,2111 380x42] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [76,2111 380x42] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Explore how federated learning and private hosting are allowing firms to innovate without risking security."
                <div> [76,2260 390x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                  <div> [76,2264 331x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px
                    <div> [76,2264 65x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [76,2264 65x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Written by"
                    <div> [76,2289 54x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [76,2289 54x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Frank Joel"
                  <div> [417,2260 49x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%
                    <div> [429,2272 25x25] position:relative; transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)
                      <svg> [429,2272 25x25] display:inline-block
        <div> [510,1683 438x650] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px 20px; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
          <div> [510,1683 438x650] position:relative
            <a name="Mobile 2"> [510,1683 438x650] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; borderRadius:20px href=./articles/the-architecture-of-autonomy-scaling-ai-within-legacy-frameworks
              <div> [510,2073 438x260] position:relative; borderRadius:20px
                <div> [510,2073 438x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <div> [510,2073 438x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [510,2073 438x260]  IMG=YKAEpvQFebP2OETEJDVNip8UTg.jpeg alt="people doing office works"
              <div> [510,1683 438x370] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:24px 24px 40px; backgroundColor:rgb(214, 214, 214); borderRadius:20px
                <div> [534,1707 390x150] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:22px
                  <div> [534,1707 390x86] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px
                    <div> [534,1707 86x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [534,1707 86x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Architecture"
                    <div> [534,1743 350x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h4> [534,1743 350x50] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px; letterSpacing:-0.36px TEXT="The Architecture of Autonomy: Scaling AI Within Legacy Frameworks"
                  <div> [534,1815 380x42] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [534,1815 380x42] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="A comprehensive guide on integrating custom machine learning models into complex enterprise environments."
                <div> [534,1964 390x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                  <div> [534,1968 331x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px
                    <div> [534,1968 65x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [534,1968 65x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Written by"
                    <div> [534,1993 86x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [534,1993 86x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Damilola Manuel"
                  <div> [875,1964 49x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%
                    <div> [887,1976 25x25] position:relative; transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)
                      <svg> [887,1976 25x25] display:inline-block
        <div> [52,2353 438x650] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px 20px; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
          <div> [52,2353 438x650] position:relative
            <a name="Mobile 1"> [52,2353 438x650] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; borderRadius:20px href=./articles/human-centric-automation-designing-ai-that-empowers-your-workforce
              <div> [52,2353 438x260] position:relative; borderRadius:20px
                <div> [52,2353 438x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <div> [52,2353 438x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [52,2353 438x260]  IMG=egDVD5dc2AvUIZKG0seuGXtH0.jpeg alt="sittin people beside table inside room"
              <div> [52,2633 438x370] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:40px 24px 24px; backgroundColor:rgb(214, 214, 214); borderRadius:20px
                <div> [76,2673 390x150] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:22px
                  <div> [76,2673 390x86] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px
                    <div> [76,2673 50x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [76,2673 50x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Privacy"
                    <div> [76,2709 350x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h4> [76,2709 350x50] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Human-Centric Automation: Designing AI That Empowers Your Workforce"
                  <div> [76,2781 380x42] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [76,2781 380x42] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Why the most successful AI implementations focus on augmenting human talent rather than simply replacing it."
                <div> [76,2930 390x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                  <div> [76,2934 331x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px
                    <div> [76,2934 65x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [76,2934 65x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Written by"
                    <div> [76,2959 89x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [76,2959 89x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Deborah Reachie"
                  <div> [417,2930 49x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%
                    <div> [429,2942 25x25] position:relative; transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)
                      <svg> [429,2942 25x25] display:inline-block
```

## Computed Styles — phone 390px (layout/type props only)
```
    <div> [32,1477 326x2576] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:50px; padding:0px 0px 150px
      <div> [32,1477 326x386] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:40px
        <div> [32,1477 326x151] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
          <ul> [-682,1477 326x151] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -713.703, 0)
            <li> [718,1482 429x141] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 1400, 0)
              <div> [718,1482 429x141] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h2> [718,1482 429x141] fontFamily:"Inter Display"; fontSize:128px; fontWeight:700; lineHeight:140.8px; letterSpacing:-5.12px TEXT="Insights"
            <li> [1208,1477 151x151] display:list-item; position:relative; transform:matrix(1, 0, 0, 1, 1400, 0)
              <div> [1208,1477 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [1208,1477 151x151] position:relative
                  <div> [1208,1477 151x151] 
                    <svg> [1208,1477 151x151] 
            <li> [19,1482 429x141] display:list-item; position:relative
              <div> [19,1482 429x141] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <h2> [19,1482 429x141] fontFamily:"Inter Display"; fontSize:128px; fontWeight:700; lineHeight:140.8px; letterSpacing:-5.12px TEXT="Insights"
            <li> [508,1477 151x151] display:list-item; position:relative
              <div> [508,1477 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [508,1477 151x151] position:relative
                  <div> [508,1477 151x151] 
                    <svg> [508,1477 151x151] 
        <div> [32,1668 326x195] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-end; gap:0px
          <div> [32,1668 326x195] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:34px
            <div> [32,1668 326x96] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [32,1668 326x96] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="A curated repository of technical frameworks, model benchmarks, and strategic guides for leaders navigating the integration of custom neural architectures."
            <div> [32,1798 202x65] position:relative
              <a name="Primary"> [32,1798 202x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(26, 26, 26); borderRadius:16px href=./articles
                <div> [35,1801 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:14px
                  <div> [53,1823 30x15] position:relative
                    <div name="Animation 13"> [53,1823 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div> [53,1823 30x15] position:relative
                        <div> [53,1823 30x15] 
                          <svg> [53,1823 30x15] 
                <div> [116,1801 94x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                  <div> [128,1819 71x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [128,1819 71x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="All articles"
      <div name="Blog Content"> [32,1913 326x1990] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px
        <div> [32,1913 326x650] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px 20px; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
          <div> [32,1913 326x650] position:relative
            <a name="Mobile 1"> [32,1913 326x650] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; borderRadius:20px href=./articles/the-sovereign-cloud-why-on-premise-ai-is-the-future-of-data-privacy
              <div> [32,1913 326x260] position:relative; borderRadius:20px
                <div> [32,1913 326x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <div> [32,1913 326x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [32,1913 326x260]  IMG=862JbA3xEJjbdSDVyKEwOZ0f2g.jpeg alt="boy in front of computer monitor"
              <div> [32,2193 326x370] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:40px 24px 24px; backgroundColor:rgb(214, 214, 214); borderRadius:20px
                <div> [56,2233 278x196] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:22px
                  <div> [56,2233 278x111] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px
                    <div> [56,2233 101x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [56,2233 101x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Transformation"
                    <div> [56,2268 278x76] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h4> [56,2268 278x76] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px; letterSpacing:-0.36px TEXT="The Sovereign Cloud: Why On-Premise AI is the Future of Data Privacy"
                  <div> [56,2366 278x63] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [56,2366 278x63] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Explore how federated learning and private hosting are allowing firms to innovate without risking security."
                <div> [56,2490 278x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                  <div> [56,2494 219x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px
                    <div> [56,2494 65x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [56,2494 65x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Written by"
                    <div> [56,2519 54x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [56,2519 54x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Frank Joel"
                  <div> [285,2490 49x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%
                    <div> [297,2502 25x25] position:relative; transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)
                      <svg> [297,2502 25x25] display:inline-block
        <div> [32,2583 326x650] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px 20px; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
          <div> [32,2583 326x650] position:relative
            <a name="Mobile 1"> [32,2583 326x650] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; borderRadius:20px href=./articles/the-architecture-of-autonomy-scaling-ai-within-legacy-frameworks
              <div> [32,2583 326x260] position:relative; borderRadius:20px
                <div> [32,2583 326x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <div> [32,2583 326x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [32,2583 326x260]  IMG=YKAEpvQFebP2OETEJDVNip8UTg.jpeg alt="people doing office works"
              <div> [32,2863 326x370] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:40px 24px 24px; backgroundColor:rgb(214, 214, 214); borderRadius:20px
                <div> [56,2903 278x196] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:22px
                  <div> [56,2903 278x111] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px
                    <div> [56,2903 86x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [56,2903 86x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Architecture"
                    <div> [56,2938 278x76] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h4> [56,2938 278x76] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px; letterSpacing:-0.36px TEXT="The Architecture of Autonomy: Scaling AI Within Legacy Frameworks"
                  <div> [56,3036 278x63] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [56,3036 278x63] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="A comprehensive guide on integrating custom machine learning models into complex enterprise environments."
                <div> [56,3160 278x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                  <div> [56,3164 219x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px
                    <div> [56,3164 65x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [56,3164 65x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Written by"
                    <div> [56,3189 86x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [56,3189 86x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Damilola Manuel"
                  <div> [285,3160 49x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%
                    <div> [297,3172 25x25] position:relative; transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)
                      <svg> [297,3172 25x25] display:inline-block
        <div> [32,3253 326x650] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px 20px; BORDER(::after):0px 0px 1px 0px solid rgba(26, 26, 26, 0.06) radius 0px
          <div> [32,3253 326x650] position:relative
            <a name="Mobile 1"> [32,3253 326x650] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; borderRadius:20px href=./articles/human-centric-automation-designing-ai-that-empowers-your-workforce
              <div> [32,3253 326x260] position:relative; borderRadius:20px
                <div> [32,3253 326x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <div> [32,3253 326x260] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                    <img> [32,3253 326x260]  IMG=egDVD5dc2AvUIZKG0seuGXtH0.jpeg alt="sittin people beside table inside room"
              <div> [32,3533 326x370] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:40px 24px 24px; backgroundColor:rgb(214, 214, 214); borderRadius:20px
                <div> [56,3573 278x196] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:22px
                  <div> [56,3573 278x111] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px
                    <div> [56,3573 50x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [56,3573 50x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="Privacy"
                    <div> [56,3608 278x76] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h4> [56,3608 278x76] fontFamily:"Inter Display"; fontSize:18px; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Human-Centric Automation: Designing AI That Empowers Your Workforce"
                  <div> [56,3706 278x63] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [56,3706 278x63] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Why the most successful AI implementations focus on augmenting human talent rather than simply replacing it."
                <div> [56,3830 278x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                  <div> [56,3834 219x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px
                    <div> [56,3834 65x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [56,3834 65x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Written by"
                    <div> [56,3859 89x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [56,3859 89x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Deborah Reachie"
                  <div> [285,3830 49x49] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%
                    <div> [297,3842 25x25] position:relative; transform:matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)
                      <svg> [297,3842 25x25] display:inline-block
```

## SVG markup (inline these as React components)
### svg17
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"><g color="rgb(255, 255, 255)" weight="regular"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></g></svg>
```
