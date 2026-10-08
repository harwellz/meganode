# Pricing Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Pricing.tsx` (client component)
- **Screenshots:** `seg-desktop-12.png`, `seg-desktop-13.png`, `state-pricing-toggled.png` (Monthly); mobile `seg-mobile-19.png`…`seg-mobile-22.png`
- **Interaction model:** click-driven billing toggle + time-driven big marquee & ticker + staggered fade-in of plan cards.

## DOM Structure
`<section id="pricing">` bg #fff, `relative z-[4]`, overflow clip:
1. **Header** (padding `150px 0 60px`, z-2, gap 40): `<BigMarquee title="Pricing" />`; then a row (padding 0 40px, align-end, height 72): left half — billing toggle; right half — description (Inter Display 300 16px/24px +0.32px ink, width ~380).
   - **Toggle:** "Monthly" (Inter Display 300 14px ink) · switch 50×22 track (radius 100, 1px border rgba(26,26,26,0.1), bg rgba(26,26,26,0.03)) with a 28×28 dark knob (bg rgb(26,26,26), radius 100) containing a white check icon (svg14, 16×16) · "Annually" · "(Save 20%)" (12px, rgba(26,26,26,0.4)). Default = **Annually** (knob on the right). Clicking the switch (or labels) toggles; knob slides left/right ~0.3s.
2. **Plans** (padding `0 40px`, z-10, then 180px gap, then the ticker): a 1360×553 container, 1px border rgba(26,26,26,0.1), radius 20, overflow clip, 4 equal columns separated by 1px (gap 1, bg hairline). Each plan column (339 wide):
   - **Top block** (height ~215, padding `46px 30px 40px 24px`, bg image cover `lu9xdgbj7zB5GkewV6UCW9Y68.jpg` light waves; Pro uses the dark wave image from the dump): name (Inter Display 600 30px/36px ink; white on Pro), price row (price Inter Display 300 54px/59.4px −2.16px + "/mo" 14px/21px 300 rgba(26,26,26,0.6) raised −10.5px), "USD Billed Annually" (300 14px/21px).
   - **Middle block** (height ~115, bg rgb(240,240,240); Pro rgb(41,40,40); padding `20px 20px 0 24px`, gap 25, borders per dump): tagline (Inter Display 400 16px/24px) + `<ExpandButton size="sm" label="Get started" …/>` — Core/Growth/Scale: `tone="coal"` with `borderColor="rgba(255,255,255,0.2)"`; Pro: `tone="white"` with `borderColor="rgba(26,26,26,0.1)"`. Link `https://contra.com/sirdelani/work?r=sirdelani` (external).
   - **Features block** (bg image continues): 4 lines Inter Display 300 14px/21px, gap ~10, rgba(26,26,26,0.7) (Pro: white).
3. **Ticker**: `<AnnouncementTicker />` in a 0-height wrapper at the bottom (padding-bottom 40).

## States & Behaviors
- Toggle → Monthly: prices Core $618, Growth $1,570, Pro $3,650, Scale $9,380; caption "USD Billed Monthly". Annually (default): $495, $1,250, $2,900, $7,500; "USD Billed Annually".
- Plan columns fade in left→right (delays 0, 0.1, 0.2, 0.3s).

## Plan data
| Plan | Tagline | Features |
|---|---|---|
| Core | Automate your repetitive tasks. | 3 Automation Flows · Standard RAG Support · 1 Admin Seat · Discord Support |
| Growth | Advanced agentic workflows. | 10 Automation Flows · Vector DB Hosting · 5 Admin Seats · Priority Email |
| Pro (dark) | Custom neural architecture. | Unlimited Flows · Custom Fine-Tuning · 15 Admin Seats · 24/7 Slack Connect |
| Scale | Enterprise infrastructure. | Full Neural Stack · On-Premise LLMs · Unlimited Seats · Dedicated Engineer |

Description: "Flexible intelligence tiers designed to scale alongside your business. No hidden costs, just high-performance results."

## Responsive Behavior
- **Tablet:** 2×2 plan grid (see tablet excerpt).
- **Phone:** single column; plans stacked with 1px separators; toggle below the description (`seg-mobile-19..22`). Phone price 35px/38.5px 300 (see `w390-mobile-menu-open.txt` capture of the Core card: name 28px/33.6px 600).

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
<section> [0,0 1440x1315] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(255, 255, 255); overflow:clip; zIndex:4
  <div> [0,0 1440x542] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:150px 0px 60px; zIndex:2
    <div> [0,150 1440x332] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:40px
      <div> [0,150 1440x220] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
        <ul> [-12,150 1440x220] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -11.553, 0)
          <li> [-12,150 591x220] display:list-item; position:relative
            <div> [-12,150 591x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <h2> [-12,150 591x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Pricing"
          <li> [639,185 151x151] display:list-item; position:relative
            <div> [611,156 207x207] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip; transform:matrix(0.857311, -0.514799, 0.514799, 0.857311, 0, 0)
              <div> [611,156 207x207] position:relative
                <div> [611,156 207x207] 
                  <svg> [611,156 207x207] 
          <li> [850,150 591x220] display:list-item; position:relative
            <div> [850,150 591x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <h2> [850,150 591x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Pricing"
          <li> [1501,185 151x151] display:list-item; position:relative
            <div> [1501,185 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [1501,185 151x151] position:relative
                <div> [1501,185 151x151] 
                  <svg> [1501,185 151x151] 
          <li> [1712,150 591x220] display:list-item; position:relative
            <div> [1712,150 591x220] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <h2> [1712,150 591x220] fontFamily:"Inter Display"; fontSize:200px; fontWeight:700; lineHeight:220px; letterSpacing:-8px; textAlign:left; color:rgb(26, 26, 26) TEXT="Pricing"
          <li> [2363,185 151x151] display:list-item; position:relative
            <div> [2363,185 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [2363,185 151x151] position:relative
                <div> [2363,185 151x151] 
                  <svg> [2363,185 151x151] 
      <div> [0,410 1440x72] display:flex; position:relative; justifyContent:center; alignItems:flex-end; gap:0px; padding:0px 40px
        <div> [40,460 680x22] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255)
        <div> [720,410 680x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:30px; overflow:clip
          <div> [720,410 380x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
            <p> [720,410 380x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgb(26, 26, 26) TEXT="Flexible intelligence tiers designed to scale alongside your business. No hidden costs, just high-performance results."
  <div> [0,542 1440x773] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:180px; padding:0px 0px 40px; zIndex:10
    <div> [0,542 1440x553] position:relative; zIndex:10
      <div name="Desktop"> [0,542 1440x553] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:0px 40px; filter:grayscale(1)
        <div> [40,542 1360x553] display:flex; position:relative; justifyContent:center; alignItems:center; gap:1px; padding:1px; backgroundColor:rgba(26, 26, 26, 0.1); borderRadius:21px
          <div> [41,543 339x551] position:relative
            <div name="Light"> [41,543 339x551] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; backgroundColor:rgb(255, 255, 255); borderRadius:20px 0px 0px 20px; overflow:clip
              <div> [41,543 339x216] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:30px 0px 30px 24px
                <div> [65,573 66x36] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:2; whiteSpace:pre
                  <h6> [65,573 66x36] fontFamily:"Inter Display"; fontSize:30px; fontWeight:600; lineHeight:36px; color:rgb(26, 26, 26) TEXT="Core"
                <div> [65,639 315x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; zIndex:2
                  <div> [65,639 116x59] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                    <div> [65,639 116x59] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <h2> [65,639 116x59] fontFamily:"Inter Display"; fontSize:54px; fontWeight:300; lineHeight:59.4px; letterSpacing:-2.16px; textAlign:left; color:rgb(26, 26, 26) TEXT="$495"
                    <div> [188,665 24x21] display:flex; position:absolute; top:36.2344px; left:123.156px; right:-31px; bottom:2.17188px; flexDirection:column; justifyContent:flex-start; zIndex:1; transform:matrix(1, 0, 0, 1, 0, -10.5); whiteSpace:pre
                      <p> [188,665 24x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgba(26, 26, 26, 0.6) TEXT="/mo"
                  <div> [65,708 122x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre
                    <p> [65,708 122x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="USD Billed Annually"
              <div> [41,759 339x135] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; zIndex:2
                <div> [65,779 170x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:4; whiteSpace:pre-wrap
                  <p> [65,779 170x48] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgb(26, 26, 26) TEXT="Automate your repetitive tasks."
                <div> [65,852 137x42] position:relative; zIndex:4
                  <a name="Secondary small"> [65,852 137x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:12px; overflow:clip; cursor:pointer; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 12px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [68,855 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px; overflow:clip
                      <div> [80,866 16x15] position:relative; zIndex:1; filter:contrast(2) invert(0.95)
                        <div name="Animation 14"> [80,866 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                          <div> [73,866 30x15] position:relative
                            <div> [73,866 30x15] 
                              <svg> [73,866 30x15] 
                    <div> [114,859 78x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                      <div> [117,864 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [117,864 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Get started"
                <div> [41,759 339x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:20px; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; backgroundColor:rgb(240, 240, 240); zIndex:2; BORDER(::after):1px 0px 1px 1px solid rgba(26, 26, 26, 0.06) radius 0px
              <div> [41,894 339x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:46px 30px 40px 24px
                <div> [65,940 285x114] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [65,940 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [65,940 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="3 Automation Flows"
                  <div> [65,971 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [65,971 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Standard RAG Support"
                  <div> [65,1002 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [65,1002 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="1 Admin Seat"
                  <div> [65,1033 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [65,1033 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Discord Support"
              <div> [41,543 339x551] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.29; overflow:clip; zIndex:1; maskImage:linear-gradient(148deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 39.9599%)
                <div> [41,543 339x551] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [41,543 339x551] overflow:clip; objectFit:cover IMG=lu9xdgbj7zB5GkewV6UCW9Y68.jpg alt="a close up of a white wall with wavy lines"
          <div> [381,543 339x551] position:relative
            <div name="Light"> [381,543 339x551] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; backgroundColor:rgb(255, 255, 255); overflow:clip
              <div> [381,543 339x216] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:30px 0px 30px 24px
                <div> [405,573 101x36] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:2; whiteSpace:pre
                  <h6> [405,573 101x36] fontFamily:"Inter Display"; fontSize:30px; fontWeight:600; lineHeight:36px; color:rgb(26, 26, 26) TEXT="Growth"
                <div> [405,639 315x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; zIndex:2
                  <div> [405,639 141x59] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                    <div> [405,639 141x59] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <h2> [405,639 141x59] fontFamily:"Inter Display"; fontSize:54px; fontWeight:300; lineHeight:59.4px; letterSpacing:-2.16px; textAlign:left; color:rgb(26, 26, 26) TEXT="$1,250"
                    <div> [553,665 24x21] display:flex; position:absolute; top:36.2344px; left:147.844px; right:-31px; bottom:2.17188px; flexDirection:column; justifyContent:flex-start; zIndex:1; transform:matrix(1, 0, 0, 1, 0, -10.5); whiteSpace:pre
                      <p> [553,665 24x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgba(26, 26, 26, 0.6) TEXT="/mo"
                  <div> [405,708 122x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre
                    <p> [405,708 122x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="USD Billed Annually"
              <div> [381,759 339x135] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; zIndex:2
                <div> [405,779 170x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:4; whiteSpace:pre-wrap
                  <p> [405,779 170x48] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgb(26, 26, 26) TEXT="Advanced agentic workflows."
                <div> [405,852 137x42] position:relative; zIndex:4
                  <a name="Secondary small"> [405,852 137x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:12px; overflow:clip; cursor:pointer; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 12px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [408,855 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px; overflow:clip
                      <div> [420,866 16x15] position:relative; zIndex:1; filter:contrast(2) invert(0.95)
                        <div name="Animation 14"> [420,866 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                          <div> [413,866 30x15] position:relative
                            <div> [413,866 30x15] 
                              <svg> [413,866 30x15] 
                    <div> [454,859 78x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                      <div> [457,864 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [457,864 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Get started"
                <div> [381,759 339x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:20px; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; backgroundColor:rgb(240, 240, 240); zIndex:2; BORDER(::after):1px 0px 1px 1px solid rgba(26, 26, 26, 0.06) radius 0px
              <div> [381,894 339x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:46px 30px 40px 24px
                <div> [405,940 285x114] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [405,940 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [405,940 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="10 Automation Flows"
                  <div> [405,971 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [405,971 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Vector DB Hosting"
                  <div> [405,1002 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [405,1002 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="5 Admin Seats"
                  <div> [405,1033 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [405,1033 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Priority Email"
              <div> [381,543 339x551] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.29; overflow:clip; zIndex:1; maskImage:linear-gradient(148deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 39.9599%)
                <div> [381,543 339x551] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [381,543 339x551] overflow:clip; objectFit:cover IMG=lu9xdgbj7zB5GkewV6UCW9Y68.jpg alt="a close up of a white wall with wavy lines"
          <div> [721,543 339x551] position:relative
            <div name="Dark"> [721,543 339x551] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; backgroundColor:rgb(255, 255, 255); overflow:clip
              <div> [721,543 339x216] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:30px 0px 30px 24px
                <div> [745,573 46x36] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:2; whiteSpace:pre
                  <h6> [745,573 46x36] fontFamily:"Inter Display"; fontSize:30px; fontWeight:600; lineHeight:36px; color:rgb(255, 255, 255) TEXT="Pro"
                <div> [745,639 315x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; zIndex:2
                  <div> [745,639 155x59] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                    <div> [745,639 155x59] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <h2> [745,639 155x59] fontFamily:"Inter Display"; fontSize:54px; fontWeight:300; lineHeight:59.4px; letterSpacing:-2.16px; textAlign:left; color:rgb(255, 255, 255) TEXT="$2,900"
                    <div> [906,665 24x21] display:flex; position:absolute; top:36.2344px; left:161.453px; right:-31px; bottom:2.17188px; flexDirection:column; justifyContent:flex-start; zIndex:1; transform:matrix(1, 0, 0, 1, 0, -10.5); whiteSpace:pre
                      <p> [906,665 24x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="/mo"
                  <div> [745,708 122x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre
                    <p> [745,708 122x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="USD Billed Annually"
              <div> [721,759 339x135] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; zIndex:2
                <div> [745,779 170x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:4; whiteSpace:pre-wrap
                  <p> [745,779 170x48] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgba(255, 255, 255, 0.8) TEXT="Custom neural architecture."
                <div> [745,852 137x42] position:relative; zIndex:4
                  <a name="Primary small"> [745,852 137x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(255, 255, 255); borderRadius:12px; overflow:clip; cursor:pointer; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.1) radius 12px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [748,855 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px; overflow:clip
                      <div> [760,866 16x15] position:relative; zIndex:1; filter:contrast(2) invert(0.95)
                        <div name="Animation 14"> [760,866 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                          <div> [753,866 30x15] position:relative
                            <div> [753,866 30x15] 
                              <svg> [753,866 30x15] 
                    <div> [794,859 78x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                      <div> [797,864 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [797,864 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Get started"
                <div> [721,759 339x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:20px; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; backgroundColor:rgb(41, 40, 40); zIndex:2; BORDER(::after):1px 0px 1px 1px solid rgba(26, 26, 26, 0.06) radius 0px
              <div> [721,894 339x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:46px 30px 40px 24px; zIndex:3
                <div> [745,940 285x114] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [745,940 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [745,940 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Unlimited Flows"
                  <div> [745,971 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [745,971 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Custom Fine-Tuning"
                  <div> [745,1002 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [745,1002 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="15 Admin Seats"
                  <div> [745,1033 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [745,1033 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="24/7 Slack Connect"
              <div> [721,543 339x551] position:absolute; top:0px; left:0px; right:0px; bottom:0px; overflow:clip; zIndex:1; filter:invert(1)
                <div> [721,543 339x551] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [721,543 339x551] overflow:clip; objectFit:cover IMG=lu9xdgbj7zB5GkewV6UCW9Y68.jpg alt="a close up of a white wall with wavy lines"
          <div> [1060,543 339x551] position:relative
            <div name="Light"> [1060,543 339x551] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; backgroundColor:rgb(255, 255, 255); borderRadius:0px 20px 20px 0px; overflow:clip
              <div> [1060,543 339x216] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:30px 0px 30px 24px
                <div> [1084,573 76x36] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:2; whiteSpace:pre
                  <h6> [1084,573 76x36] fontFamily:"Inter Display"; fontSize:30px; fontWeight:600; lineHeight:36px; color:rgb(26, 26, 26) TEXT="Scale"
                <div> [1084,639 315x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px; zIndex:2
                  <div> [1084,639 145x59] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                    <div> [1084,639 145x59] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <h2> [1084,639 145x59] fontFamily:"Inter Display"; fontSize:54px; fontWeight:300; lineHeight:59.4px; letterSpacing:-2.16px; textAlign:left; color:rgb(26, 26, 26) TEXT="$7,500"
                    <div> [1236,665 24x21] display:flex; position:absolute; top:36.2344px; left:151.953px; right:-31px; bottom:2.17188px; flexDirection:column; justifyContent:flex-start; zIndex:1; transform:matrix(1, 0, 0, 1, 0, -10.5); whiteSpace:pre
                      <p> [1236,665 24x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgba(26, 26, 26, 0.6) TEXT="/mo"
                  <div> [1084,708 122x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre
                    <p> [1084,708 122x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="USD Billed Annually"
              <div> [1060,759 339x135] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; zIndex:2
                <div> [1084,779 170x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:4; whiteSpace:pre-wrap
                  <p> [1084,779 170x48] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgb(26, 26, 26) TEXT="Enterprise infrastructure."
                <div> [1084,852 137x42] position:relative; zIndex:4
                  <a name="Secondary small"> [1084,852 137x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:12px; overflow:clip; cursor:pointer; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 12px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [1087,855 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px; overflow:clip
                      <div> [1099,866 16x15] position:relative; zIndex:1; filter:contrast(2) invert(0.95)
                        <div name="Animation 13"> [1099,866 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                          <div> [1092,866 30x15] position:relative
                            <div> [1092,866 30x15] 
                              <svg> [1092,866 30x15] 
                    <div> [1133,859 78x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                      <div> [1136,864 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                        <p> [1136,864 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(255, 255, 255) TEXT="Get started"
                <div> [1060,759 339x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:20px; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; backgroundColor:rgb(240, 240, 240); zIndex:2; BORDER(::after):1px 0px 1px 1px solid rgba(26, 26, 26, 0.06) radius 0px
              <div> [1060,894 339x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:46px 30px 40px 24px
                <div> [1084,940 285x114] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [1084,940 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [1084,940 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Full Neural Stack"
                  <div> [1084,971 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [1084,971 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="On-Premise LLMs"
                  <div> [1084,1002 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [1084,1002 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Unlimited Seats"
                  <div> [1084,1033 285x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; zIndex:1; whiteSpace:pre-wrap
                    <p> [1084,1033 285x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Dedicated Engineer"
              <div> [1060,543 339x551] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.29; overflow:clip; zIndex:1; maskImage:linear-gradient(148deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 39.9599%)
                <div> [1060,543 339x551] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [1060,543 339x551] overflow:clip; objectFit:cover IMG=lu9xdgbj7zB5GkewV6UCW9Y68.jpg alt="a close up of a white wall with wavy lines"
          <div> [40,458 255x22] display:flex; position:absolute; top:-84px; left:0px; right:1104.91px; bottom:615.406px; justifyContent:center; alignItems:center; gap:16px; zIndex:1
            <div> [40,459 50x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <p> [40,459 50x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Monthly"
            <div> [106,458 50x22] position:relative; borderRadius:100px; cursor:pointer; BORDER(::after):1px 1px 1px 1px solid rgba(26, 26, 26, 0.2) radius 100px
              <div> [127,455 29x28] display:flex; position:absolute; top:-3px; left:21.0156px; right:0px; bottom:-3px; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:100%; overflow:clip
                <div> [134,461 16x16] position:relative
                  <svg> [134,461 16x16] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
            <div> [172,459 123x21] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [172,459 53x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [172,459 53x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="Annually"
              <div> [235,461 60x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [235,461 60x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgba(26, 26, 26, 0.6) TEXT="(Save 20%)"
    <div> [0,1275 1440x0] position:relative
      <div name="Variant 1"> [0,1275 1440x20] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:-20.3906px; justifyContent:flex-start; alignItems:center; gap:100px; borderRadius:10px; maskImage:linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 4%, rgb(0, 0, 0) 96%, rgba(0, 0, 0, 0) 100%)
        <ul> [-28,1275 1440x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:100px; transform:matrix(1, 0, 0, 1, -27.8647, 0)
          <li> [-28,1275 118x20] display:list-item; position:relative
            <div> [-28,1275 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [-28,1275 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
              <div> [18,1276 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [18,1276 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="//SPARTAN"
          <li> [190,1276 1204x20] display:list-item; position:relative
            <div> [190,1276 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <p> [190,1276 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
          <li> [1494,1275 118x20] display:list-item; position:relative
            <div> [1494,1275 118x20] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
              <div> [1494,1275 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
              <div> [1540,1276 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [1540,1276 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="//SPARTAN"
          <li> [1712,1276 1204x20] display:list-item; position:relative
            <div> [1712,1276 1204x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
              <p> [1712,1276 1204x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px; textAlign:left; color:rgb(26, 26, 26) TEXT="We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America."
```

## Computed Styles — tablet 1000px (layout/type props only)
```
<section> [0,0 1000x1741] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(255, 255, 255)
  <div> [0,0 1000x504] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:120px 0px
    <div> [0,120 1000x264] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:40px
      <div> [0,120 1000x176] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
        <ul> [-12,120 1000x176] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -11.948, 0)
          <li> [-12,120 473x176] display:list-item; position:relative
            <div> [-12,120 473x176] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [-12,120 473x176] fontFamily:"Inter Display"; fontSize:160px; fontWeight:700; lineHeight:176px; letterSpacing:-6.4px TEXT="Pricing"
          <li> [521,133 151x151] display:list-item; position:relative
            <div> [490,102 212x212] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; transform:matrix(0.784084, -0.620655, 0.620655, 0.784084, 0, 0)
              <div> [490,102 212x212] position:relative
                <div> [490,102 212x212] 
                  <svg> [490,102 212x212] 
          <li> [732,120 473x176] display:list-item; position:relative
            <div> [732,120 473x176] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [732,120 473x176] fontFamily:"Inter Display"; fontSize:160px; fontWeight:700; lineHeight:176px; letterSpacing:-6.4px TEXT="Pricing"
          <li> [1265,133 151x151] display:list-item; position:relative
            <div> [1265,133 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
              <div> [1265,133 151x151] position:relative
                <div> [1265,133 151x151] 
                  <svg> [1265,133 151x151] 
      <div> [0,336 1000x48] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px; padding:0px 40px
        <div> [40,336 920x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:30px
          <div> [40,336 500x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [40,336 500x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Flexible intelligence tiers designed to scale alongside your business. No hidden costs, just high-performance results."
  <div> [0,504 1000x1237] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:120px; padding:0px 0px 40px
    <div> [0,504 1000x1077] position:relative
      <div name="Tablet"> [0,504 1000x1077] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:0px 40px
        <div> [40,504 920x1077] display:grid; position:relative; justifyContent:center; gap:1px; gridTemplateColumns:458.5px 458.5px; padding:1px; backgroundColor:rgba(26, 26, 26, 0.1); borderRadius:21px
          <div> [41,505 459x537] position:relative
            <div name="Light"> [41,505 459x537] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; backgroundColor:rgb(255, 255, 255); borderRadius:20px 0px 0px
              <div> [41,505 459x202] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:30px 0px 30px 24px
                <div> [65,535 62x34] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <h6> [65,535 62x34] fontFamily:"Inter Display"; fontSize:28px; fontWeight:600; lineHeight:33.6px TEXT="Core"
                <div> [65,599 435x78] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [65,599 93x47] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                    <div> [65,599 93x47] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h2> [65,599 93x47] fontFamily:"Inter Display"; fontSize:43px; fontWeight:300; lineHeight:47.3px; letterSpacing:-1.72px TEXT="$495"
                    <div> [164,617 24x21] display:flex; position:absolute; top:28.8438px; left:99.4531px; right:-31px; bottom:-2.54688px; flexDirection:column; justifyContent:flex-start; transform:matrix(1, 0, 0, 1, 0, -10.5)
                      <p> [164,617 24x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="/mo"
                  <div> [65,656 122x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [65,656 122x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="USD Billed Annually"
              <div> [41,707 459x135] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px
                <div> [65,727 170x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [65,727 170x48] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Automate your repetitive tasks."
                <div> [65,800 137x42] position:relative
                  <a name="Secondary small"> [65,800 137x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:12px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 12px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [68,803 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px
                      <div> [80,813 16x15] position:relative
                        <div name="Animation 6"> [80,813 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                          <div> [73,813 30x15] position:relative
                            <div> [73,813 30x15] 
                              <svg> [73,813 30x15] 
                    <div> [114,806 78x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                      <div> [117,811 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [117,811 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Get started"
                <div> [41,707 459x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:20px; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; backgroundColor:rgb(240, 240, 240); BORDER(::after):1px 0px 1px 1px solid rgba(26, 26, 26, 0.06) radius 0px
              <div> [41,842 459x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:46px 30px 40px 24px
                <div> [65,888 405x114] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [65,888 405x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [65,888 405x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="3 Automation Flows"
                  <div> [65,919 405x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [65,919 405x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Standard RAG Support"
                  <div> [65,950 405x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [65,950 405x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="1 Admin Seat"
                  <div> [65,981 405x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [65,981 405x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Discord Support"
              <div> [41,505 459x537] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.29
                <div> [41,505 459x537] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [41,505 459x537]  IMG=lu9xdgbj7zB5GkewV6UCW9Y68.jpg alt="a close up of a white wall with wavy lines"
          <div> [501,505 459x537] position:relative
            <div name="Light"> [501,505 459x537] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; backgroundColor:rgb(255, 255, 255); borderRadius:0px 20px 0px 0px
              <div> [501,505 459x202] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:30px 0px 30px 24px
                <div> [525,535 94x34] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <h6> [525,535 94x34] fontFamily:"Inter Display"; fontSize:28px; fontWeight:600; lineHeight:33.6px TEXT="Growth"
                <div> [525,599 435x78] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [525,599 112x47] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                    <div> [525,599 112x47] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h2> [525,599 112x47] fontFamily:"Inter Display"; fontSize:43px; fontWeight:300; lineHeight:47.3px; letterSpacing:-1.72px TEXT="$1,250"
                    <div> [644,617 24x21] display:flex; position:absolute; top:28.8438px; left:119.109px; right:-31px; bottom:-2.54688px; flexDirection:column; justifyContent:flex-start; transform:matrix(1, 0, 0, 1, 0, -10.5)
                      <p> [644,617 24x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="/mo"
                  <div> [525,656 122x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [525,656 122x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="USD Billed Annually"
              <div> [501,707 459x135] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px
                <div> [525,727 170x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [525,727 170x48] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Advanced agentic workflows."
                <div> [525,800 137x42] position:relative
                  <a name="Secondary small"> [525,800 137x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:12px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 12px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [528,803 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px
                      <div> [540,813 16x15] position:relative
                        <div name="Animation 6"> [540,813 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                          <div> [533,813 30x15] position:relative
                            <div> [533,813 30x15] 
                              <svg> [533,813 30x15] 
                    <div> [574,806 78x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                      <div> [577,811 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [577,811 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Get started"
                <div> [501,707 459x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:20px; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; backgroundColor:rgb(240, 240, 240); BORDER(::after):1px 0px 1px 1px solid rgba(26, 26, 26, 0.06) radius 0px
              <div> [501,842 459x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:46px 30px 40px 24px
                <div> [525,888 405x114] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [525,888 405x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [525,888 405x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="10 Automation Flows"
                  <div> [525,919 405x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [525,919 405x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Vector DB Hosting"
                  <div> [525,950 405x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [525,950 405x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="5 Admin Seats"
                  <div> [525,981 405x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [525,981 405x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Priority Email"
              <div> [501,505 459x537] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.29
                <div> [501,505 459x537] position:absolute; top:0px; left:0px; right:0px; bottom:0px
```

## Computed Styles — phone 390px (layout/type props only)
```
<section> [0,0 390x2770] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(255, 255, 255)
  <div> [0,0 390x493] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:20px; padding:120px 0px 110px
    <div> [0,120 390x263] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:40px
      <div> [0,120 390x151] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; borderRadius:10px
        <ul> [-13,120 390x151] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:60px; transform:matrix(1, 0, 0, 1, -13.195, 0)
          <li> [-13,125 378x141] display:list-item; position:relative
            <div> [-13,125 378x141] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [-13,125 378x141] fontFamily:"Inter Display"; fontSize:128px; fontWeight:700; lineHeight:140.8px; letterSpacing:-5.12px TEXT="Pricing"
          <li> [425,120 151x151] display:list-item; position:relative
            <div> [394,89 213x213] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; transform:matrix(0.663822, -0.747891, 0.747891, 0.663822, 0, 0)
              <div> [394,89 213x213] position:relative
                <div> [394,89 213x213] 
                  <svg> [394,89 213x213] 
          <li> [636,125 378x141] display:list-item; position:relative
            <div> [636,125 378x141] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [636,125 378x141] fontFamily:"Inter Display"; fontSize:128px; fontWeight:700; lineHeight:140.8px; letterSpacing:-5.12px TEXT="Pricing"
          <li> [1074,120 151x151] display:list-item; position:relative
            <div> [1074,120 151x151] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
              <div> [1074,120 151x151] position:relative
                <div> [1074,120 151x151] 
                  <svg> [1074,120 151x151] 
      <div> [0,311 390x72] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px; padding:0px 20px
        <div> [20,311 350x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:30px
          <div> [20,311 350x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
            <p> [20,311 350x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Flexible intelligence tiers designed to scale alongside your business. No hidden costs, just high-performance results."
  <div> [0,493 390x2277] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:120px; padding:0px 0px 40px
    <div> [0,493 390x2117] position:relative
      <div name="Phone"> [0,493 390x2117] display:flex; position:relative; justifyContent:flex-start; alignItems:flex-start; gap:0px; padding:0px 20px
        <div> [20,493 350x2117] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:1px; padding:1px; backgroundColor:rgba(26, 26, 26, 0.1); borderRadius:21px
          <div> [21,494 348x528] position:relative
            <div name="Light"> [21,494 348x528] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; backgroundColor:rgb(255, 255, 255); borderRadius:20px 20px 0px 0px
              <div> [21,494 348x193] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:30px 0px 30px 24px
                <div> [45,524 62x34] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <h6> [45,524 62x34] fontFamily:"Inter Display"; fontSize:28px; fontWeight:600; lineHeight:33.6px TEXT="Core"
                <div> [45,588 324x70] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [45,588 75x39] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                    <div> [45,588 75x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h2> [45,588 75x39] fontFamily:"Inter Display"; fontSize:35px; fontWeight:300; lineHeight:38.5px; letterSpacing:-1.4px TEXT="$495"
                    <div> [127,601 24x21] display:flex; position:absolute; top:23.4844px; left:82.2188px; right:-31px; bottom:-5.98438px; flexDirection:column; justifyContent:flex-start; transform:matrix(1, 0, 0, 1, 0, -10.5)
                      <p> [127,601 24x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="/mo"
                  <div> [45,636 122x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,636 122x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="USD Billed Annually"
              <div> [21,687 348x135] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px
                <div> [45,707 170x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [45,707 170x48] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Automate your repetitive tasks."
                <div> [45,780 137x42] position:relative
                  <a name="Secondary small"> [45,780 137x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:12px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 12px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [48,783 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px
                      <div> [60,794 16x15] position:relative
                        <div name="Animation 13"> [60,794 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                          <div> [53,794 30x15] position:relative
                            <div> [53,794 30x15] 
                              <svg> [53,794 30x15] 
                    <div> [94,787 78x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                      <div> [97,791 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [97,791 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Get started"
                <div> [21,687 348x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:20px; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; backgroundColor:rgb(240, 240, 240); BORDER(::after):1px 0px 1px 1px solid rgba(26, 26, 26, 0.06) radius 0px
              <div> [21,822 348x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:46px 30px 40px 24px
                <div> [45,868 294x114] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [45,868 294x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,868 294x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="3 Automation Flows"
                  <div> [45,899 294x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,899 294x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Standard RAG Support"
                  <div> [45,930 294x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,930 294x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="1 Admin Seat"
                  <div> [45,961 294x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,961 294x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Discord Support"
              <div> [21,494 348x528] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.29
                <div> [21,494 348x528] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [21,494 348x528]  IMG=lu9xdgbj7zB5GkewV6UCW9Y68.jpg alt="a close up of a white wall with wavy lines"
          <div> [21,1023 348x528] position:relative
            <div name="Light"> [21,1023 348x528] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px; backgroundColor:rgb(255, 255, 255)
              <div> [21,1023 348x193] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:30px 0px 30px 24px
                <div> [45,1053 94x34] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <h6> [45,1053 94x34] fontFamily:"Inter Display"; fontSize:28px; fontWeight:600; lineHeight:33.6px TEXT="Growth"
                <div> [45,1117 324x70] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [45,1117 91x39] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                    <div> [45,1117 91x39] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <h2> [45,1117 91x39] fontFamily:"Inter Display"; fontSize:35px; fontWeight:300; lineHeight:38.5px; letterSpacing:-1.4px TEXT="$1,250"
                    <div> [143,1130 24x21] display:flex; position:absolute; top:23.4844px; left:98.2031px; right:-31px; bottom:-5.98438px; flexDirection:column; justifyContent:flex-start; transform:matrix(1, 0, 0, 1, 0, -10.5)
                      <p> [143,1130 24x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="/mo"
                  <div> [45,1165 122x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,1165 122x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="USD Billed Annually"
              <div> [21,1216 348x135] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px
                <div> [45,1236 170x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [45,1236 170x48] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Advanced agentic workflows."
                <div> [45,1309 137x42] position:relative
                  <a name="Secondary small"> [45,1309 137x42] display:flex; position:relative; justifyContent:center; alignItems:center; gap:6px; padding:3px 10px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:12px; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 12px href=https://contra.com/sirdelani/work?r=sirdelani
                    <div> [48,1312 40x36] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:10px
                      <div> [60,1323 16x15] position:relative
                        <div name="Animation 13"> [60,1323 16x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                          <div> [53,1323 30x15] position:relative
                            <div> [53,1323 30x15] 
                              <svg> [53,1323 30x15] 
                    <div> [94,1316 78x29] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                      <div> [97,1320 72x20] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [97,1320 72x20] fontFamily:"Inter Display"; fontSize:14px; lineHeight:19.6px; letterSpacing:0.28px TEXT="Get started"
                <div> [21,1216 348x115] display:flex; position:absolute; top:0px; left:0px; right:0px; bottom:20px; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:25px; padding:20px 20px 0px 24px; backgroundColor:rgb(240, 240, 240); BORDER(::after):1px 0px 1px 1px solid rgba(26, 26, 26, 0.06) radius 0px
              <div> [21,1351 348x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:46px 30px 40px 24px
                <div> [45,1397 294x114] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:10px
                  <div> [45,1397 294x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,1397 294x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="10 Automation Flows"
                  <div> [45,1428 294x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,1428 294x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Vector DB Hosting"
                  <div> [45,1459 294x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,1459 294x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="5 Admin Seats"
                  <div> [45,1490 294x21] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [45,1490 294x21] fontFamily:"Inter Display"; fontSize:14px; fontWeight:300; lineHeight:21px; letterSpacing:0.28px TEXT="Priority Email"
              <div> [21,1023 348x528] position:absolute; top:0px; left:0px; right:0px; bottom:0px; opacity:0.29
                <div> [21,1023 348x528] position:absolute; top:0px; left:0px; right:0px; bottom:0px
```

## SVG markup (inline these as React components)
### svg14
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"><g color="rgb(255, 255, 255)" weight="regular"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></g></svg>
```
