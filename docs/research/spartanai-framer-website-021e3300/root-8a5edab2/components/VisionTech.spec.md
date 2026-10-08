# VisionTech Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/VisionTech.tsx` (client component)
- **Screenshots:** `seg-desktop-05.png` (vision), `seg-desktop-06.png` (tech row); mobile `seg-mobile-08.png`…`seg-mobile-11.png`
- **Interaction model:** scroll-driven per-char reveal (headline), scroll-triggered fade-ins, time-driven animated icons.

## DOM Structure
Dark block (bg rgb(26,26,26), 1440×1618) with two parts:
1. **Vision** (padding `250px 40px 160px`, `rounded-b-[20px]`, z-1): row of two 680px halves.
   - Left: founder photo card 320×320, radius 20, image `jnIpVvHAXWiAGa8gLEmWtRuDwQ.png` (cover), with an inner frame (inset 10px, radius 14, 1px border rgba(255,255,255,0.2)) holding four 11×11 corner marks (L-shaped corner ticks rotated 45°, svg07/svg08 below) at 11px from each corner. Caption (gap 6): "ALEXANDER VACCA" Geist Mono 300 12px/19.2px uppercase white + "Founder & Lead Engineer" Inter Display 300 12px/16.8px rgba(255,255,255,0.7). Column gap 30.
   - Right (width 500, gap 50): `<SectionLabel label="OUR VISION" order="label-first" color="#fff" lineColor="rgba(255,255,255,0.1)" />`; then (gap 40) headline via `ScrollRevealText` (Inter Display 500 56px/60px −3px, `dimColor="rgba(255,255,255,0.1)" color="#fff"`) and paragraph (300 16px/24px +0.32px white).
2. **Tech row** (padding `180px 60px`, z-6, bg rgb(26,26,26), column gap 80):
   - Top row: left half — mono paragraph (Geist Mono 200 12px/20.4px uppercase white, width 380); right half (padding-left 22, space-between) — 4 overlapping white 44px circles (spacing 30px, each with `box-shadow: rgba(0,0,0,0.12) -7px 0 5px 1px`, logo image inverted `filter: invert(1)` at opacity 0.9) that slide in staggered (`FadeIn x={6|12|23|45}`), and `<ExpandButton label="Digital Brain v4.0.2" size="md" tone="coal" />`.
   - Bottom row: 4 feature columns (~343 wide each, first 293): animated icon (~50px tall) + 1px hairline rgba(255,255,255,0.1) + text (Inter Display 300 15px/22.5px +0.3px white, width ~200). Build the icons as small SVG/DOM animations:
     1. Magnifier with sparkle (bg-image data-URI SVGs in the dump) — wobble rotate between −20° and +35°, ~2s ease-in-out alternate.
     2. Orbit/target: ring + dot orbiting — rotate 360° ~6s linear.
     3. Sliders: 4 vertical lines with 7×3 knobs bobbing up/down ±10px at staggered phases (~1.5s).
     4. Language ticker: a narrow window showing 2 of the codes "ZH HI ES FR AR BN PT RU EN DE" (Geist Mono 500 ~10px) with a small ▼ marker above, sliding horizontally in steps.
   Match the screenshots; exact geometry is in the dump.

## Text Content (verbatim)
- "ALEXANDER VACCA" · "Founder & Lead Engineer" · "OUR VISION"
- Headline: "We believe that AI should not just automate tasks, but amplify the creative and strategic potential of every human."
- "By merging technical rigor with intuitive design, we build systems that don't just solve problems—they create entirely new opportunities for growth."
- "ENGINEERING SYSTEMS THAT SCALE WITH YOUR AMBITION. WE LEVERAGE INDUSTRY-LEADING MODELS TO DEPLOY CUSTOM NEURAL SOLUTIONS TAILORED TO YOUR STACK."
- "Digital Brain v4.0.2"
- Features: "Semantic vector search for hyper-accurate retrieval" · "Unified data lakes for expansive model context." · "Token-optimized flows for high speed processing" · "Global LLM deployment. Support for 95+ languages."

## Assets
Founder `jnIpVvHAXWiAGa8gLEmWtRuDwQ.png`; model logos `SMyO8DDP1JPIhoq2Ak1dNFDpGIo.png`, `ss2Osfd5P1AGF1NpgQhGgyGabA.png`, `fQ71Xa5nLv0lmW62RjPI68rMDcU.png`, `Yhx5rRmY8EDv8iMIG0L554Xx3k.png`.

## Responsive Behavior
- **Tablet:** see tablet excerpt.
- **Phone:** vision stacks (photo, caption, label, headline ~36px, paragraph); tech row stacks: mono text, circles, button, then features in a single column (`seg-mobile-10.png`).

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
    <div> [0,2454 1440x1618] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:0px; backgroundColor:rgb(26, 26, 26); overflow:clip
      <div> [0,2454 1440x952] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:160px; padding:250px 40px 160px; backgroundColor:rgb(26, 26, 26); borderRadius:0px 0px 20px 20px; overflow:clip; zIndex:10
        <div> [40,2704 1360x542] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:0px; overflow:clip
          <div> [40,2704 680x392] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:30px; overflow:clip
            <div> [40,2704 320x320] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; padding:50px; borderRadius:20px; overflow:clip
              <div> [40,2704 320x320] position:absolute; top:0px; left:0px; right:0px; bottom:0px; overflow:clip; zIndex:1
                <div> [40,2704 320x320] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                  <img> [40,2704 320x320] overflow:clip; objectFit:cover IMG=jnIpVvHAXWiAGa8gLEmWtRuDwQ.png alt=""
                <div> [50,2714 300x300] position:absolute; top:10px; left:10px; right:10px; bottom:10px; borderRadius:14px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.2) radius 14px
                  <div> [61,2725 14x14] display:flex; position:absolute; top:11px; left:11px; right:275px; bottom:275px; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                    <div> [63,2727 11x11] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                      <div> [63,2727 11x11] 
                        <svg> [63,2727 11x11] 
                  <div> [325,2725 14x14] display:flex; position:absolute; top:11px; left:275px; right:11px; bottom:275px; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                    <div> [327,2727 11x11] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                      <div> [327,2727 11x11] 
                        <svg> [327,2727 11x11] 
                  <div> [325,2989 14x14] display:flex; position:absolute; top:275px; left:275px; right:11px; bottom:11px; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                    <div> [327,2991 11x11] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                      <div> [327,2991 11x11] 
                        <svg> [327,2991 11x11] 
                  <div> [61,2989 14x14] display:flex; position:absolute; top:275px; left:11px; right:275px; bottom:11px; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                    <div> [63,2991 11x11] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                      <div> [63,2991 11x11] 
                        <svg> [63,2991 11x11] 
            <div> [40,3054 131x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px
              <div> [40,3054 108x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [40,3054 108x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px; textAlign:left; textTransform:uppercase; color:rgb(255, 255, 255) TEXT="ALEXANDER VACCA"
              <div> [40,3079 131x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                <p> [40,3079 131x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px; textAlign:left; color:rgba(255, 255, 255, 0.7) TEXT="Founder & Lead Engineer"
          <div> [720,2704 680x542] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [720,2704 500x542] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px; overflow:clip
              <div> [720,2704 500x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px; overflow:clip
                <div> [720,2705 72x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                  <p> [720,2705 72x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px; textAlign:left; textTransform:uppercase; color:rgb(255, 255, 255) TEXT="OUR VISION"
                <div> [812,2714 352x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1); overflow:clip
                <div> [1184,2704 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(255, 255, 255) radius 100px
              <div> [720,2774 500x472] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px; overflow:clip
                <div> [720,2774 500x360] position:relative; zIndex:1
                  <p> [720,2774 500x360] display:flex; flexWrap:wrap; justifyContent:flex-start; fontFamily:"Inter Display"; fontSize:56px; fontWeight:500; lineHeight:60px; letterSpacing:-3px; color:rgb(255, 255, 255)
                    <span> [720,2774 86x60] 
                    <span> [806,2774 165x60] 
                      (7 per-char spans) TEXT="believe " firstSpan: display:inline | lastSpan: display:inline
                    <span> [971,2774 96x60] 
                    <span> [1067,2774 56x60] 
                    <span> [720,2834 158x60] 
                    <span> [878,2834 83x60] 
                    <span> [961,2834 88x60] 
                    <span> [720,2894 223x60] 
                      (8 per-char spans) TEXT="automate " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [943,2894 138x60] 
                    <span> [1081,2894 83x60] 
                    <span> [720,2954 172x60] 
                      (7 per-char spans) TEXT="amplify " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [892,2954 82x60] 
                    <span> [973,2954 185x60] 
                      (8 per-char spans) TEXT="creative " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [720,3014 95x60] 
                    <span> [815,3014 201x60] 
                      (9 per-char spans) TEXT="strategic " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [1015,3014 199x60] 
                      (9 per-char spans) TEXT="potential " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [720,3074 54x60] 
                    <span> [774,3074 133x60] 
                    <span> [907,3074 177x60] 
                <div> [720,3174 500x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                  <p> [720,3174 500x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgb(255, 255, 255) TEXT="By merging technical rigor with intuitive design, we build systems that don't just solve problems—they create entirely new opportunities for growth."
      <div> [0,3406 1440x666] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:80px 0px; padding:180px 60px; backgroundColor:rgb(26, 26, 26); zIndex:6
        <div> [60,3586 1320x65] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:0px
          <div> [60,3586 660x61] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:0px 70px 0px 0px; overflow:clip
            <div> [60,3586 380x61] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [60,3586 380x61] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px; textAlign:left; textTransform:uppercase; color:rgb(255, 255, 255) TEXT="ENGINEERING SYSTEMS THAT SCALE WITH YOUR AMBITION. WE LEVERAGE INDUSTRY-LEADING MODELS TO DEPLOY CUSTOM NEURAL SOLUTIONS TAILORED TO YOUR STACK."
          <div> [720,3586 660x65] display:flex; position:relative; justifyContent:space-between; alignItems:flex-start; padding:0px 0px 0px 22px
            <div> [742,3586 94x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:28px; padding:0px 0px 0px 2px
              <div> [744,3586 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [723,3586 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; boxShadow:rgba(0, 0, 0, 0.08) -7px 0px 5px 1px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector-1"> [734,3598 22x21] position:relative; opacity:0.9; filter:invert(1)
                    <div> [734,3598 22x21] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [734,3598 22x21] overflow:clip; objectFit:cover IMG=SMyO8DDP1JPIhoq2Ak1dNFDpGIo.png alt=""
              <div> [774,3586 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [753,3586 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; boxShadow:rgba(0, 0, 0, 0.12) -7px 0px 5px 1px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector-3"> [765,3598 21x21] position:relative; opacity:0.9; filter:invert(1)
                    <div> [765,3598 21x21] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [765,3598 21x21] overflow:clip; objectFit:cover IMG=ss2Osfd5P1AGF1NpgQhGgyGabA.png alt=""
              <div> [804,3586 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [783,3586 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; boxShadow:rgba(0, 0, 0, 0.12) -7px 0px 5px 1px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector-2"> [796,3599 19x19] position:relative; opacity:0.9; filter:invert(1)
                    <div> [796,3599 19x19] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [796,3599 19x19] overflow:clip; objectFit:cover IMG=fQ71Xa5nLv0lmW62RjPI68rMDcU.png alt=""
              <div> [834,3586 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [813,3586 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; boxShadow:rgba(0, 0, 0, 0.12) -7px 0px 5px 1px; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector"> [827,3599 17x20] position:relative; opacity:0.9; filter:invert(1)
                    <div> [827,3599 17x20] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [827,3599 17x20] overflow:clip; objectFit:cover IMG=Yhx5rRmY8EDv8iMIG0L554Xx3k.png alt=""
            <div> [1122,3586 258x65] position:relative; zIndex:4
              <a name="Secondary"> [1122,3586 258x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:16px; overflow:clip; cursor:pointer href=./digital-brain
                <div> [1125,3589 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:14px; overflow:clip
                  <div> [1143,3611 30x15] position:relative; zIndex:1; filter:contrast(2) invert(0.95)
                    <div name="Animation 14"> [1143,3611 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div> [1143,3611 30x15] position:relative
                        <div> [1143,3611 30x15] 
                          <svg> [1143,3611 30x15] 
                <div> [1206,3589 150x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                  <div> [1216,3607 130x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                    <p> [1216,3607 130x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgb(255, 255, 255) TEXT="Digital Brain v4.0.2"
        <div> [60,3731 1320x161] display:flex; position:relative; justifyContent:center; alignItems:center; gap:0px
          <div> [60,3731 293x161] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
            <div> [60,3731 34x55] position:relative
              <div name="Lens 1"> [60,3731 34x55] position:relative
                <div> [71,3730 15x15] position:absolute; top:11px; left:33px; right:-11px; bottom:32px; backgroundImage:url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 11.79 11.791%22 overflow=%22visible%22><path d=%22M 5.621 0.224 C 5.682 -0.074 6.108 -0.074 6.169 0.224 L 6.981 4.157 C 7.049 4.485 7.305 4.742 7.634 4.81 L 11.567 5.622 C 11.865 5.683 11.865 6.109 11.567 6.17 L 7.634 6.981 C 7.305 7.049 7.049 7.306 6.981 7.635 L 6.169 11.567 C 6.108 11.865 5.683 11.865 5.621 11.567 L 4.809 7.635 C 4.741 7.306 4.484 7.049 4.156 6.981 L 0.223 6.17 C -0.074 6.109 -0.074 5.683 0.223 5.622 L 4.156 4.81 C 4.484 4.742 4.741 4.485 4.809 4.157 Z%22 fill=%22rgb(255, 255, 255)%22></path></svg>"); transform:matrix(0.939693, -0.34202, 0.34202, 0.939693, -20.623, -10.3115)
                <div> [84,3739 6x6] position:absolute; top:25px; left:39px; right:-10px; bottom:25px; backgroundImage:url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 4.579 4.58%22 overflow=%22visible%22><path d=%22M 2.113 0.144 C 2.153 -0.048 2.426 -0.048 2.465 0.144 L 2.731 1.429 C 2.775 1.64 2.94 1.805 3.151 1.849 L 4.435 2.114 C 4.627 2.154 4.627 2.427 4.435 2.466 L 3.15 2.731 C 2.939 2.775 2.774 2.94 2.73 3.151 L 2.465 4.436 C 2.426 4.628 2.152 4.628 2.113 4.436 L 1.848 3.151 C 1.805 2.94 1.64 2.775 1.428 2.731 L 0.143 2.466 C -0.048 2.426 -0.048 2.153 0.143 2.114 L 1.428 1.849 C 1.64 1.805 1.805 1.64 1.848 1.429 Z%22 fill=%22rgb(255, 255, 255)%22></path></svg>"); transform:matrix(0.939693, -0.34202, 0.34202, 0.939693, -14.608, -17.1859)
                <div> [53,3738 44x52] position:absolute; top:11px; left:0px; right:3px; bottom:0px; backgroundImage:url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 30.956 44.192%22 overflow=%22visible%22><path d=%22M 5.587 1.427 C 10.875 -1.564 17.587 0.299 20.577 5.587 C 23.402 10.582 21.894 16.844 17.262 20.044 L 21.222 27.048 L 22.096 26.555 L 30.956 42.223 L 27.475 44.192 L 18.613 28.524 L 19.481 28.033 L 15.521 21.028 C 10.392 23.346 4.251 21.41 1.427 16.417 C -1.563 11.129 0.299 4.417 5.587 1.427 Z M 18.836 6.571 C 16.389 2.245 10.898 0.721 6.571 3.168 C 2.245 5.615 0.721 11.106 3.168 15.432 C 5.615 19.759 11.106 21.283 15.432 18.836 C 19.759 16.389 21.283 10.898 18.836 6.571 Z%22 fill=%22rgb(255, 255, 255)%22></path></svg>"); transform:matrix(0.939693, -0.34202, 0.34202, 0.939693, 0, 0)
            <div> [60,3816 293x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1); overflow:clip; zIndex:1
            <div> [60,3847 210x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [60,3847 210x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px; textAlign:left; color:rgb(255, 255, 255) TEXT="Semantic vector search for hyper-accurate retrieval"
          <div> [353,3731 343x161] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:0px 0px 0px 50px
            <div> [403,3731 34x55] position:relative
              <div> [402,3737 45x45] position:absolute; top:28.0469px; left:0px; right:-10px; bottom:-17.0469px; transform:matrix(-0.0167544, -0.99986, 0.99986, -0.0167544, 0, -22)
                <div> [402,3737 45x45] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgb(255, 255, 255) radius 100%
                <div> [403,3768 6x6] position:absolute; top:0px; left:8px; right:30px; bottom:38px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; overflow:clip
              <div> [406,3742 35x35] position:absolute; top:15.5px; left:9px; right:0px; bottom:14.5px; transform:matrix(0.797036, 0.603932, -0.603932, 0.797036, 0, 0)
                <div> [406,3742 35x35] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%; overflow:clip; BORDER(::after):1px 1px 1px 1px solid rgb(255, 255, 255) radius 100%
                <div> [425,3765 8x8] position:absolute; top:14px; left:20px; right:-1px; bottom:5px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; overflow:clip
              <div> [422,3756 7x7] position:absolute; top:28.0469px; left:19px; right:8px; bottom:19.9531px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; overflow:clip; transform:matrix(1, 0, 0, 1, 0, -3.5)
            <div> [403,3816 293x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1); overflow:clip; zIndex:1
            <div> [403,3847 210x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [403,3847 210x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px; textAlign:left; color:rgb(255, 255, 255) TEXT="Unified data lakes for expansive model context."
          <div> [695,3731 343x161] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:0px 0px 0px 50px; overflow:clip
            <div> [745,3731 34x55] position:relative
              <div name="Anim 1"> [745,3731 34x55] display:flex; position:relative; justifyContent:center; alignItems:flex-end; gap:1px; overflow:clip
                <div> [747,3742 7x44] position:relative; overflow:clip
                  <div> [749,3742 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255); overflow:clip
                  <div> [747,3776 7x3] position:absolute; top:9px; left:0px; right:0px; bottom:32px; backgroundColor:rgb(255, 255, 255); overflow:clip; transform:matrix(1, 0, 0, 1, 0, 24.9707)
                <div> [755,3742 7x44] position:relative; overflow:clip
                  <div> [757,3742 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255); overflow:clip
                  <div> [755,3763 7x3] position:absolute; top:26px; left:0px; right:0px; bottom:15px; backgroundColor:rgb(255, 255, 255); overflow:clip; transform:matrix(1, 0, 0, 1, 0, -5.0625)
                <div> [763,3742 7x44] position:relative; overflow:clip
                  <div> [765,3742 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255); overflow:clip
                  <div> [763,3751 7x3] position:absolute; top:15px; left:0px; right:0px; bottom:26px; backgroundColor:rgb(255, 255, 255); overflow:clip; transform:matrix(1, 0, 0, 1, 0, -6)
                <div> [771,3742 7x44] position:relative; overflow:clip
                  <div> [773,3742 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255); overflow:clip
                  <div> [771,3769 7x3] position:absolute; top:34px; left:0px; right:0px; bottom:7px; backgroundColor:rgb(255, 255, 255); overflow:clip; transform:matrix(1, 0, 0, 1, 0, -7)
            <div> [745,3816 293x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1); overflow:clip; zIndex:1
            <div> [745,3847 210x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [745,3847 210x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px; textAlign:left; color:rgb(255, 255, 255) TEXT="Token-optimized flows for high speed processing"
          <div> [1038,3731 343x161] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px; padding:0px 0px 0px 50px
            <div> [1088,3731 34x55] position:relative
              <div> [1088,3743 34x43] position:absolute; top:12px; left:0px; right:0px; bottom:0px
                <div name="AR"> [1088,3743 34x43] position:relative; overflow:clip; BORDER(::after):0px 1px 0px 1px solid rgba(255, 255, 255, 0.4) radius 0px
                  <div> [1034,3755 200x19] display:flex; position:absolute; top:21.0625px; left:-71.9688px; right:-94px; bottom:2.73438px; justifyContent:center; alignItems:center; gap:7px; overflow:clip; transform:matrix(1, 0, 0, 1, 18.6927, -9.60156)
                    <div> [1034,3755 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1034,3755 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="ZH"
                    <div> [1055,3755 12x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1055,3755 12x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="HI"
                    <div> [1074,3755 13x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1074,3755 13x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="ES"
                    <div> [1094,3755 13x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1094,3755 13x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="FR"
                    <div> [1114,3755 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1114,3755 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="AR"
                    <div> [1135,3755 15x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1135,3755 15x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="BN"
                    <div> [1157,3755 13x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1157,3755 13x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="PT"
                    <div> [1178,3755 15x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1178,3755 15x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="RU"
                    <div> [1199,3755 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1199,3755 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="EN"
                    <div> [1221,3755 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                      <p> [1221,3755 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px; color:rgb(255, 255, 255) TEXT="DE"
                  <div> [1100,3743 9x9] position:absolute; top:0px; left:12.0312px; right:12.9688px; bottom:34px; overflow:clip
                    <div> [1100,3743 9x9] position:absolute; top:0px; left:0px; right:0px; bottom:0px; backgroundImage:url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 9 9%22 overflow=%22visible%22><path d=%22M 4.5 1.125 L 8.397 7.875 L 0.603 7.875 Z%22 fill=%22rgb(255, 255, 255)%22></path></svg>"); transform:matrix(-1, 0, 0, -1, 0, 0)
            <div> [1088,3816 293x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1); overflow:clip; zIndex:1
            <div> [1088,3847 210x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [1088,3847 210x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px; textAlign:left; color:rgb(255, 255, 255) TEXT="Global LLM deployment. Support for 95+ languages."
        <div> [0,3366 1440x70] position:absolute; top:-40px; left:0px; right:0px; bottom:636px; backgroundColor:rgb(36, 36, 36); borderRadius:0px 0px 20px 20px; overflow:clip; zIndex:1
```

## Computed Styles — tablet 1000px (layout/type props only)
```
                        <svg> [327,3235 11x11] 
                  <div> [325,3497 14x14] display:flex; position:absolute; top:275px; left:275px; right:11px; bottom:11px; justifyContent:center; alignItems:center; gap:10px
                    <div> [327,3499 11x11] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                      <div> [327,3499 11x11] 
                        <svg> [327,3499 11x11] 
                  <div> [61,3497 14x14] display:flex; position:absolute; top:275px; left:11px; right:275px; bottom:11px; justifyContent:center; alignItems:center; gap:10px
                    <div> [63,3499 11x11] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                      <div> [63,3499 11x11] 
                        <svg> [63,3499 11x11] 
            <div> [40,3562 131x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px
              <div> [40,3562 108x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [40,3562 108x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="ALEXANDER VACCA"
              <div> [40,3587 131x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [40,3587 131x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Founder & Lead Engineer"
          <div> [40,2859 920x293] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [40,2859 920x293] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px
              <div> [40,2859 920x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px
                <div> [40,2859 72x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [40,2859 72x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="OUR VISION"
                <div> [132,2868 772x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
                <div> [924,2859 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(255, 255, 255) radius 100px
              <div> [40,2929 920x223] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
                <div> [40,2929 920x135] position:relative
                  <p> [40,2929 920x135] display:flex; flexWrap:wrap; justifyContent:flex-start; fontFamily:"Inter Display"; fontSize:43px; fontWeight:500; lineHeight:45px; letterSpacing:-3px
                    <span> [40,2929 64x45] 
                    <span> [104,2929 121x45] 
                      (7 per-char spans) TEXT="believe " firstSpan: display:inline | lastSpan: display:inline
                    <span> [225,2929 70x45] 
                    <span> [296,2929 41x45] 
                    <span> [336,2929 117x45] 
                    <span> [453,2929 61x45] 
                    <span> [513,2929 64x45] 
                    <span> [578,2929 165x45] 
                      (8 per-char spans) TEXT="automate " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [743,2929 101x45] 
                    <span> [844,2929 61x45] 
                    <span> [40,2974 126x45] 
                      (7 per-char spans) TEXT="amplify " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [166,2974 60x45] 
                    <span> [226,2974 136x45] 
                      (8 per-char spans) TEXT="creative " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [362,2974 70x45] 
                    <span> [432,2974 147x45] 
                      (9 per-char spans) TEXT="strategic " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [579,2974 146x45] 
                      (9 per-char spans) TEXT="potential " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [725,2974 39x45] 
                    <span> [765,2974 98x45] 
                    <span> [40,3019 131x45] 
                <div> [40,3104 600x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [40,3104 600x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="By merging technical rigor with intuitive design, we build systems that don't just solve problems—they create entirely new opportunities for growth."
      <div> [0,3734 1000x920] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:60px 0px; padding:130px 60px; backgroundColor:rgb(26, 26, 26)
        <div> [60,3864 880x228] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
          <div> [60,3864 880x41] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px; padding:0px 70px 0px 0px
            <div> [60,3864 810x41] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [60,3864 810x41] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="ENGINEERING SYSTEMS THAT SCALE WITH YOUR AMBITION. WE LEVERAGE INDUSTRY-LEADING MODELS TO DEPLOY CUSTOM NEURAL SOLUTIONS TAILORED TO YOUR STACK."
          <div> [60,3935 440x157] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:48px
            <div> [60,3935 94x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:28px; padding:0px 0px 0px 2px
              <div> [62,3935 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [41,3935 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector-1"> [52,3947 22x21] position:relative; opacity:0.9
                    <div> [52,3947 22x21] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [52,3947 22x21]  IMG=SMyO8DDP1JPIhoq2Ak1dNFDpGIo.png alt=""
              <div> [92,3935 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [71,3935 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector-3"> [83,3947 21x21] position:relative; opacity:0.9
                    <div> [83,3947 21x21] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [83,3947 21x21]  IMG=ss2Osfd5P1AGF1NpgQhGgyGabA.png alt=""
              <div> [122,3935 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [101,3935 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector-2"> [114,3948 19x19] position:relative; opacity:0.9
                    <div> [114,3948 19x19] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [114,3948 19x19]  IMG=fQ71Xa5nLv0lmW62RjPI68rMDcU.png alt=""
              <div> [152,3935 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [131,3935 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector"> [145,3947 17x20] position:relative; opacity:0.9
                    <div> [145,3947 17x20] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [145,3947 17x20]  IMG=Yhx5rRmY8EDv8iMIG0L554Xx3k.png alt=""
            <div> [60,4027 258x65] position:relative
              <a name="Secondary"> [60,4027 258x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:16px href=./digital-brain
                <div> [63,4030 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:14px
                  <div> [81,4052 30x15] position:relative
                    <div name="Animation 6"> [81,4052 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div> [81,4052 30x15] position:relative
                        <div> [81,4052 30x15] 
                          <svg> [81,4052 30x15] 
                <div> [144,4030 150x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                  <div> [154,4048 130x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [154,4048 130x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Digital Brain v4.0.2"
        <div> [60,4152 880x372] display:grid; position:relative; justifyContent:center; gap:50px 70px; gridTemplateColumns:405px 405px
          <div> [60,4152 405x161] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
            <div> [60,4152 34x55] position:relative
              <div name="Lens 1"> [60,4152 34x55] position:relative
                <div> [91,4161 17x17] position:absolute; top:11px; left:33px; right:-11px; bottom:32px; transform:matrix(0.75471, 0.656059, -0.656059, 0.75471, -0.0275497, -0.0137748)
                <div> [98,4176 7x7] position:absolute; top:25px; left:39px; right:-10px; bottom:25px; transform:matrix(0.75471, 0.656059, -0.656059, 0.75471, -0.0195144, -0.0229581)
                <div> [49,4158 52x54] position:absolute; top:11px; left:0px; right:3px; bottom:0px; transform:matrix(0.75471, 0.656059, -0.656059, 0.75471, 0, 0)
            <div> [60,4237 405x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [60,4268 210x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [60,4268 210x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Semantic vector search for hyper-accurate retrieval"
          <div> [535,4152 405x161] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
            <div> [535,4152 34x55] position:relative
              <div> [527,4150 61x61] position:absolute; top:28.0469px; left:0px; right:-10px; bottom:-17.0469px; transform:matrix(0.850444, -0.526066, 0.526066, 0.850444, 0, -22)
                <div> [527,4150 61x61] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgb(255, 255, 255) radius 100%
                <div> [534,4166 8x8] position:absolute; top:0px; left:8px; right:30px; bottom:38px; backgroundColor:rgb(255, 255, 255); borderRadius:100%
              <div> [544,4168 25x25] position:absolute; top:15.5px; left:9px; right:0px; bottom:14.5px
                <div> [544,4168 25x25] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgb(255, 255, 255) radius 100%
                <div> [564,4182 6x6] position:absolute; top:14px; left:20px; right:-1px; bottom:5px; backgroundColor:rgb(255, 255, 255); borderRadius:100%
              <div> [554,4177 7x7] position:absolute; top:28.0469px; left:19px; right:8px; bottom:19.9531px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; transform:matrix(1, 0, 0, 1, 0, -3.5)
            <div> [535,4237 405x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [535,4268 210x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [535,4268 210x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Unified data lakes for expansive model context."
          <div> [60,4363 405x161] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
            <div> [60,4363 34x55] position:relative
              <div name="Anim 2"> [60,4363 34x55] display:flex; position:relative; justifyContent:center; alignItems:flex-end; gap:1px
                <div> [62,4374 7x44] position:relative
                  <div> [64,4374 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255)
                  <div> [62,4383 7x3] position:absolute; top:9px; left:0px; right:0px; bottom:32px; backgroundColor:rgb(255, 255, 255); transform:matrix(1, 0, 0, 1, 0, 0.0161813)
                <div> [70,4374 7x44] position:relative
                  <div> [72,4374 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255)
                  <div> [70,4398 7x3] position:absolute; top:20.9375px; left:0px; right:0px; bottom:20.0625px; backgroundColor:rgb(255, 255, 255); transform:matrix(1, 0, 0, 1, 0, 3.48823)
                <div> [78,4374 7x44] position:relative
                  <div> [80,4374 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255)
                  <div> [78,4389 7x3] position:absolute; top:15px; left:0px; right:0px; bottom:26px; backgroundColor:rgb(255, 255, 255)
                <div> [86,4374 7x44] position:relative
                  <div> [88,4374 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255)
                  <div> [86,4406 7x3] position:absolute; top:27px; left:0px; right:0px; bottom:14px; backgroundColor:rgb(255, 255, 255); transform:matrix(1, 0, 0, 1, 0, 4.82323)
            <div> [60,4448 405x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [60,4479 210x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [60,4479 210x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Token-optimized flows for high speed processing"
          <div> [535,4363 405x161] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
            <div> [535,4363 34x55] position:relative
              <div> [535,4375 34x43] position:absolute; top:12px; left:0px; right:0px; bottom:0px
                <div name="AR"> [535,4375 34x43] position:relative; BORDER(::after):0px 1px 0px 1px solid rgba(255, 255, 255, 0.4) radius 0px
                  <div> [463,4386 200x19] display:flex; position:absolute; top:21.0625px; left:-71.9688px; right:-94px; bottom:2.73438px; justifyContent:center; alignItems:center; gap:7px; transform:matrix(1, 0, 0, 1, 0, -9.60156)
                    <div> [463,4386 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [463,4386 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="ZH"
                    <div> [484,4386 12x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [484,4386 12x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="HI"
                    <div> [503,4386 13x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [503,4386 13x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="ES"
                    <div> [523,4386 13x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [523,4386 13x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="FR"
                    <div> [543,4386 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [543,4386 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="AR"
                    <div> [564,4386 15x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [564,4386 15x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="BN"
                    <div> [586,4386 13x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [586,4386 13x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="PT"
                    <div> [606,4386 15x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [606,4386 15x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="RU"
                    <div> [628,4386 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [628,4386 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="EN"
                    <div> [649,4386 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [649,4386 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="DE"
                  <div> [547,4375 9x9] position:absolute; top:0px; left:12.0312px; right:12.9688px; bottom:34px
                    <div> [547,4375 9x9] position:absolute; top:0px; left:0px; right:0px; bottom:0px; transform:matrix(-1, 0, 0, -1, 0, 0)
            <div> [535,4448 405x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [535,4479 210x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [535,4479 210x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Global LLM deployment. Support for 95+ languages."
        <div> [0,3694 1000x70] position:absolute; top:-40px; left:0px; right:0px; bottom:889.812px; backgroundColor:rgb(36, 36, 36); borderRadius:0px 0px 20px 20px
```

## Computed Styles — phone 390px (layout/type props only)
```
                        <svg> [337,4700 11x11] 
                  <div> [335,4993 14x14] display:flex; position:absolute; top:305px; left:305px; right:11px; bottom:11px; justifyContent:center; alignItems:center; gap:10px
                    <div> [337,4994 11x11] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                      <div> [337,4994 11x11] 
                        <svg> [337,4994 11x11] 
                  <div> [41,4993 14x14] display:flex; position:absolute; top:305px; left:11px; right:305px; bottom:11px; justifyContent:center; alignItems:center; gap:10px
                    <div> [43,4994 11x11] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                      <div> [43,4994 11x11] 
                        <svg> [43,4994 11x11] 
            <div> [20,5048 131x42] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:6px
              <div> [20,5048 108x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [20,5048 108x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="ALEXANDER VACCA"
              <div> [20,5073 131x17] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [20,5073 131x17] fontFamily:"Inter Display"; fontWeight:300; lineHeight:16.8px; letterSpacing:0.12px TEXT="Founder & Lead Engineer"
          <div> [20,4260 350x367] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
            <div> [20,4260 350x367] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px
              <div> [20,4260 350x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px
                <div> [20,4261 72x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [20,4261 72x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="OUR VISION"
                <div> [112,4270 202x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
                <div> [334,4260 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(255, 255, 255) radius 100px
              <div> [20,4331 350x297] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
                <div> [20,4331 350x185] position:relative
                  <p> [20,4331 350x185] display:flex; flexWrap:wrap; justifyContent:flex-start; fontFamily:"Inter Display"; fontSize:35px; fontWeight:500; lineHeight:37px; letterSpacing:-3px
                    <span> [20,4331 50x37] 
                    <span> [70,4331 94x37] 
                      (7 per-char spans) TEXT="believe " firstSpan: display:inline | lastSpan: display:inline
                    <span> [164,4331 55x37] 
                    <span> [219,4331 31x37] 
                    <span> [250,4331 91x37] 
                    <span> [20,4368 47x37] 
                    <span> [67,4368 50x37] 
                    <span> [117,4368 129x37] 
                      (8 per-char spans) TEXT="automate " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [246,4368 78x37] 
                    <span> [20,4405 48x37] 
                    <span> [68,4405 98x37] 
                      (7 per-char spans) TEXT="amplify " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [166,4405 47x37] 
                    <span> [213,4405 106x37] 
                      (8 per-char spans) TEXT="creative " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [20,4442 55x37] 
                    <span> [75,4442 114x37] 
                      (9 per-char spans) TEXT="strategic " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [189,4442 113x37] 
                      (9 per-char spans) TEXT="potential " firstSpan: display:inline; color:rgba(255, 255, 255, 0.1) | lastSpan: display:inline; color:rgba(255, 255, 255, 0.1)
                    <span> [302,4442 30x37] 
                    <span> [20,4479 76x37] 
                    <span> [96,4479 103x37] 
                <div> [20,4556 350x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                  <p> [20,4556 350x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="By merging technical rigor with intuitive design, we build systems that don't just solve problems—they create entirely new opportunities for growth."
      <div> [0,5220 390x1295] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:60px 0px; padding:130px 30px; backgroundColor:rgb(26, 26, 26)
        <div> [30,5350 330x261] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
          <div> [30,5350 330x82] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:10px
            <div> [30,5350 330x82] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [30,5350 330x82] fontFamily:"Geist Mono"; fontWeight:200; lineHeight:20.4px TEXT="ENGINEERING SYSTEMS THAT SCALE WITH YOUR AMBITION. WE LEVERAGE INDUSTRY-LEADING MODELS TO DEPLOY CUSTOM NEURAL SOLUTIONS TAILORED TO YOUR STACK."
          <div> [30,5461 330x149] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:flex-start; gap:40px
            <div> [30,5461 114x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:28px; padding:0px 0px 0px 22px
              <div> [52,5461 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [31,5461 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector-1"> [42,5473 22x21] position:relative; opacity:0.9
                    <div> [42,5473 22x21] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [42,5473 22x21]  IMG=SMyO8DDP1JPIhoq2Ak1dNFDpGIo.png alt=""
              <div> [82,5461 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [61,5461 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector-3"> [73,5473 21x21] position:relative; opacity:0.9
                    <div> [73,5473 21x21] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [73,5473 21x21]  IMG=ss2Osfd5P1AGF1NpgQhGgyGabA.png alt=""
              <div> [112,5461 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [91,5461 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector-2"> [104,5474 19x19] position:relative; opacity:0.9
                    <div> [104,5474 19x19] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [104,5474 19x19]  IMG=fQ71Xa5nLv0lmW62RjPI68rMDcU.png alt=""
              <div> [142,5461 2x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                <div> [121,5461 44x44] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgba(255, 255, 255, 0.06) radius 100%
                  <div name="Vector"> [135,5473 17x20] position:relative; opacity:0.9
                    <div> [135,5473 17x20] position:absolute; top:0px; left:0px; right:0px; bottom:0px
                      <img> [135,5473 17x20]  IMG=Yhx5rRmY8EDv8iMIG0L554Xx3k.png alt=""
            <div> [30,5545 258x65] position:relative
              <a name="Secondary"> [30,5545 258x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(36, 36, 36); borderRadius:16px href=./digital-brain
                <div> [33,5548 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(26, 26, 26); borderRadius:14px
                  <div> [51,5570 30x15] position:relative
                    <div name="Animation 14"> [51,5570 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div> [51,5570 30x15] position:relative
                        <div> [51,5570 30x15] 
                          <svg> [51,5570 30x15] 
                <div> [114,5548 150x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                  <div> [124,5566 130x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [124,5566 130x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Digital Brain v4.0.2"
        <div> [30,5670 330x714] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px 40px
          <div> [30,5670 330x141] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
            <div> [30,5670 34x55] position:relative
              <div name="Lens 1"> [30,5670 34x55] position:relative
                <div> [49,5674 13x13] position:absolute; top:11px; left:33px; right:-11px; bottom:32px; transform:matrix(0.993691, 0.112156, -0.112156, 0.993691, -13.769, -6.88448)
                <div> [59,5683 6x6] position:absolute; top:25px; left:39px; right:-10px; bottom:25px; transform:matrix(0.993691, 0.112156, -0.112156, 0.993691, -9.75301, -11.4741)
                <div> [28,5680 36x47] position:absolute; top:11px; left:0px; right:3px; bottom:0px; transform:matrix(0.993691, 0.112156, -0.112156, 0.993691, 0, 0)
            <div> [30,5745 330x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [30,5766 250x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [30,5766 250x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Semantic vector search for hyper-accurate retrieval"
          <div> [30,5861 330x141] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
            <div> [30,5861 34x55] position:relative
              <div> [30,5867 44x44] position:absolute; top:28.0469px; left:0px; right:-10px; bottom:-17.0469px; transform:matrix(1, 0, 0, 1, 0, -22)
                <div> [30,5867 44x44] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgb(255, 255, 255) radius 100%
                <div> [38,5867 6x6] position:absolute; top:0px; left:8px; right:30px; bottom:38px; backgroundColor:rgb(255, 255, 255); borderRadius:100%
              <div> [39,5877 25x25] position:absolute; top:15.5px; left:9px; right:0px; bottom:14.5px
                <div> [39,5877 25x25] position:absolute; top:0px; left:0px; right:0px; bottom:0px; borderRadius:100%; BORDER(::after):1px 1px 1px 1px solid rgb(255, 255, 255) radius 100%
                <div> [59,5891 6x6] position:absolute; top:14px; left:20px; right:-1px; bottom:5px; backgroundColor:rgb(255, 255, 255); borderRadius:100%
              <div> [49,5886 7x7] position:absolute; top:28.0469px; left:19px; right:8px; bottom:19.9531px; backgroundColor:rgb(255, 255, 255); borderRadius:100%; transform:matrix(1, 0, 0, 1, 0, -3.5)
            <div> [30,5936 330x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [30,5957 250x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [30,5957 250x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Unified data lakes for expansive model context."
          <div> [30,6052 330x141] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
            <div> [30,6052 34x55] position:relative
              <div name="Anim 1"> [30,6052 34x55] display:flex; position:relative; justifyContent:center; alignItems:flex-end; gap:1px
                <div> [32,6063 7x44] position:relative
                  <div> [34,6063 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255)
                  <div> [32,6086 7x3] position:absolute; top:9px; left:0px; right:0px; bottom:32px; backgroundColor:rgb(255, 255, 255); transform:matrix(1, 0, 0, 1, 0, 13.7435)
                <div> [40,6063 7x44] position:relative
                  <div> [42,6063 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255)
                  <div> [40,6086 7x3] position:absolute; top:26px; left:0px; right:0px; bottom:15px; backgroundColor:rgb(255, 255, 255); transform:matrix(1, 0, 0, 1, 0, -2.78622)
                <div> [48,6063 7x44] position:relative
                  <div> [50,6063 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255)
                  <div> [48,6075 7x3] position:absolute; top:15px; left:0px; right:0px; bottom:26px; backgroundColor:rgb(255, 255, 255); transform:matrix(1, 0, 0, 1, 0, -3.30219)
                <div> [56,6063 7x44] position:relative
                  <div> [58,6063 1x44] position:absolute; top:0px; left:2.48438px; right:3.51562px; bottom:0px; backgroundColor:rgb(255, 255, 255)
                  <div> [56,6093 7x3] position:absolute; top:34px; left:0px; right:0px; bottom:7px; backgroundColor:rgb(255, 255, 255); transform:matrix(1, 0, 0, 1, 0, -3.85255)
            <div> [30,6127 330x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [30,6148 250x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [30,6148 250x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Token-optimized flows for high speed processing"
          <div> [30,6243 330x141] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:20px
            <div> [30,6243 34x55] position:relative
              <div> [30,6255 34x43] position:absolute; top:12px; left:0px; right:0px; bottom:0px
                <div name="ES"> [30,6255 34x43] position:relative; BORDER(::after):0px 1px 0px 1px solid rgba(255, 255, 255, 0.4) radius 0px
                  <div> [-69,6267 200x19] display:flex; position:absolute; top:21.0625px; left:-32.9688px; right:-133px; bottom:2.73438px; justifyContent:center; alignItems:center; gap:7px; transform:matrix(1, 0, 0, 1, -65.9313, -9.60156)
                    <div> [-69,6267 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [-69,6267 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="ZH"
                    <div> [-48,6267 12x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [-48,6267 12x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="HI"
                    <div> [-29,6267 13x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [-29,6267 13x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="ES"
                    <div> [-9,6267 13x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [-9,6267 13x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="FR"
                    <div> [11,6267 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [11,6267 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="AR"
                    <div> [32,6267 15x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [32,6267 15x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="BN"
                    <div> [54,6267 13x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [54,6267 13x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="PT"
                    <div> [75,6267 15x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [75,6267 15x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="RU"
                    <div> [96,6267 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [96,6267 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="EN"
                    <div> [117,6267 14x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                      <p> [117,6267 14x19] fontFamily:Jaini; fontSize:16px; lineHeight:19.2px TEXT="DE"
                  <div> [42,6255 9x9] position:absolute; top:0px; left:12.0312px; right:12.9688px; bottom:34px
                    <div> [42,6255 9x9] position:absolute; top:0px; left:0px; right:0px; bottom:0px; transform:matrix(-1, 0, 0, -1, 0, 0)
            <div> [30,6318 330x1] position:relative; backgroundColor:rgba(255, 255, 255, 0.1)
            <div> [30,6339 250x45] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [30,6339 250x45] fontFamily:"Inter Display"; fontSize:15px; fontWeight:300; lineHeight:22.5px; letterSpacing:0.3px TEXT="Global LLM deployment. Support for 95+ languages."
        <div> [0,5180 390x70] position:absolute; top:-40px; left:0px; right:0px; bottom:1264.62px; backgroundColor:rgb(36, 36, 36); borderRadius:0px 0px 20px 20px
```

## SVG markup (inline these as React components)
### svg07
```html
<svg style="width:100%;height:100%;overflow: visible;" preserveAspectRatio="none" width="100%" height="100%"><svg viewBox="0 0 14 1" overflow="visible"><path d="M 0 0 L 14 0" fill="transparent" stroke="rgba(255, 255, 255, 0.3)" stroke-linejoin="round"></path></svg></svg>
```
### svg08
```html
<svg style="width:100%;height:100%;overflow: visible;" preserveAspectRatio="none" width="100%" height="100%"><svg viewBox="0 0 1 14" overflow="visible"><path d="M 0 0 L 0 14" fill="transparent" stroke="rgba(255, 255, 255, 0.3)" stroke-linejoin="round"></path></svg></svg>
```
