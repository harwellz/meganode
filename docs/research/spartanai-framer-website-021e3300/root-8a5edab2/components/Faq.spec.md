# Faq Specification

## Overview
- **Target file:** `src/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Faq.tsx` (client component)
- **Screenshots:** `seg-desktop-13.png` (bottom), `seg-desktop-14.png` (top), `state-faq-open.png`; mobile `seg-mobile-22.png`, `seg-mobile-23.png`
- **Interaction model:** click-driven accordion (first item open by default; clicking the open item closes it) + hover scale + fade-ins.

## DOM Structure
Top part of the light card section (the page renders the outer `<section>` white with padding `0 12px 12px`, `rounded-b-[20px]` bottom corners, and the inner card bg rgb(240,240,240) radius 20 padding `12px 40px`). This component = the FAQ block: padding `180px 0 30px`, 1336 wide, row of two 668px halves (height 576):
- **Left** (column, `justify-between`, padding-right ~70): top (width 500, gap 50): `<SectionLabel label="COMMON QUERIES" order="pill-first" />` + paragraph (Inter Display 300 16px/24px +0.32px ink). Bottom (gap 40): H2 "Everything you need to know about our AI." (Inter Display 500 54px/59.4px −2.16px ink, width ~600) + `<ExpandButton label="Contact Support" size="md" tone="ink" />`.
- **Right** (668 wide, column gap 6): 7 items. Each item bg rgb(26,26,26), radius 20, padding ~20px 20px, cursor pointer:
  - Row: question (Inter Display 500 20px/28px −0.4px, white) + icon 16×16 white on the right: "+" when closed, "×" when open (svg15 is the open-state icon; closed = same icon rotated 45°).
  - Answer (open only): Inter Display 300 16px/24px +0.32px, rgba(255,255,255,0.8), margin-top ~14, max width ~580.
  - Closed height 68, open ~132.
- **Hover:** item `scale(1.05)` and shadow `rgba(0,0,0,0) 0 8px 13px 3px` → `rgba(0,0,0,0.25) 0 16px 13px -5px`, ~0.3s.
- **Click:** toggles; only one open at a time. Height animates ~0.4s, answer fades in.

## FAQ data
1. How do you ensure our data remains secure? — We utilize SOC2-compliant local vector databases and on-premise LLM hosting to ensure your proprietary data never leaves your infrastructure. *(open by default)*
2. What is the typical deployment timeline? — Initial neural audits take 1 week, followed by a 4-week rapid prototyping phase before full-scale production deployment.
3. Can we integrate with our existing CRM? — Yes, our cognitive pipelines are built with native API connectors for Salesforce, HubSpot, and custom enterprise ERP systems.
4. Do you provide model fine-tuning? — Absolutely. We offer bespoke fine-tuning services to align open-source models (like Llama 3) with your specific industry terminology and logic.
5. How do you calculate ROI for automation? — We track "Inference-to-Impact" metrics, measuring hours saved and accuracy gains against your previous baseline manual workflows.
6. Do we own the custom code you build? — Yes. All custom neural architectures and integration code developed for your firm are 100% owned by you upon project completion.
7. What models do you specialize in? — We are model-agnostic, specializing in OpenAI, Anthropic, and Mistral, as well as local deployments of high-performance open-source LLMs.

## Text Content (verbatim)
"COMMON QUERIES" · "Find answers to technical specifications, deployment timelines, and our data security protocols." · "Everything you need to know about our AI." · "Contact Support"

## Responsive Behavior
- **Phone:** columns stack (text block first, then items full width); question 16px (see phone excerpt).
- **Tablet:** see tablet excerpt.

## Conventions for these excerpts
- Excerpts are Playwright dumps of the live page: `<tag name="framer layer name"> [x,y WxH]` (x/y relative to the section top-left, page-absolute x) followed by non-default **computed** styles. `BORDER(::after)` = Framer's inner border (render as `box-shadow: inset 0 0 0 1px …` or a border on an absolutely positioned overlay). Per-character reveal spans are omitted.
- `IMG=<file>` → use `spImg("<file>")` from `@/components/sites/spartanai-framer-website-021e3300/shared/assets`; `VIDEO=<file>` → `spVideo("<file>")`.
- Many wrappers exist only because of Framer — flatten them; reproduce the visual result (sizes, spacing, colours, type), not the wrapper count.
- Pixel-arrow SVGs (`<use href="#svg…">` 30×15) are the shared `PixelArrow` / `ExpandButton`; don't recreate them.

## Computed Styles — desktop 1440px (exact values)
```
<section> [0,0 1440x2313] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:center; gap:180px; padding:0px 12px 12px; backgroundColor:rgb(255, 255, 255); borderRadius:0px 0px 20px 20px; overflow:clip; zIndex:4
  <div> [12,0 1416x2301] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:180px; padding:12px 40px; backgroundColor:rgb(240, 240, 240); borderRadius:20px; overflow:clip
    <div> [52,12 1336x786] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:200px; padding:180px 0px 30px
      <div> [52,192 1336x576] display:flex; position:relative; justifyContent:center; alignItems:flex-start; gap:0px
        <div> [52,192 668x576] display:flex; position:relative; flexDirection:column; justifyContent:space-between; alignItems:flex-start; padding:0px 70px 0px 0px; overflow:clip
          <div> [52,192 500x118] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px; overflow:clip
            <div> [52,192 500x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px; overflow:clip
              <div> [52,192 36x20] position:relative; borderRadius:100px; overflow:clip; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
              <div> [108,202 323x1] position:relative; backgroundColor:rgba(26, 26, 26, 0.2); overflow:clip
              <div> [451,193 101x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                <p> [451,193 101x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px; textAlign:left; textTransform:uppercase; color:rgb(26, 26, 26) TEXT="COMMON QUERIES"
            <div> [52,262 500x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <p> [52,262 500x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgb(26, 26, 26) TEXT="Find answers to technical specifications, deployment timelines, and our data security protocols."
          <div> [52,544 598x224] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px; overflow:clip
            <div> [52,544 598x119] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
              <h2> [52,544 598x119] fontFamily:"Inter Display"; fontSize:54px; fontWeight:500; lineHeight:59.4px; letterSpacing:-2.16px; textAlign:left; color:rgb(26, 26, 26) TEXT="Everything you need to know about our AI."
            <div> [52,703 252x65] position:relative; zIndex:4
              <a name="Primary"> [52,703 252x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(26, 26, 26); borderRadius:16px; overflow:clip; cursor:pointer href=./contact
                <div> [55,706 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:14px; overflow:clip
                  <div> [73,728 30x15] position:relative; zIndex:1
                    <div name="Animation 13"> [73,728 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div> [73,728 30x15] position:relative
                        <div> [73,728 30x15] 
                          <svg> [73,728 30x15] 
                <div> [136,706 144x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px; overflow:clip
                  <div> [150,724 116x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre
                    <p> [150,724 116x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px; color:rgb(255, 255, 255) TEXT="Contact Support"
        <div> [720,192 668x576] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
          <div> [720,192 668x576] position:relative
            <div name="Question 1"> [720,192 668x576] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:6px
              <div> [720,192 668x132] position:relative
                <div name="Open"> [720,192 668x132] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px; cursor:pointer
                  <div> [720,192 668x132] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; boxShadow:rgba(0, 0, 0, 0) 0px 8px 13px 3px; overflow:clip
                    <div> [740,212 628x28] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div name="How does it predict disasters?"> [740,212 602x28] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9; whiteSpace:pre-wrap
                        <h4> [740,212 602x28] fontFamily:"Inter Display"; fontSize:20px; fontWeight:500; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="How do you ensure our data remains secure?"
                      <div> [1352,218 16x16] position:relative
                        <svg> [1352,218 16x16] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
                    <div> [740,256 628x48] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div name="By encoding "Project Physics"—the relationship between time, cost, and physical reality. We see the ripples in a schedule that lead to a cost explosion six months down the line."> [740,256 628x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; whiteSpace:pre-wrap
                        <p> [740,256 628x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px; textAlign:left; color:rgba(255, 255, 255, 0.8) TEXT="We utilize SOC2-compliant local vector databases and on-premise LLM hosting to ensure your proprietary data never leaves your infrastructure."
              <div> [720,330 668x68] position:relative
                <div name="Close"> [720,330 668x68] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px; cursor:pointer
                  <div> [720,330 668x68] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; boxShadow:rgba(0, 0, 0, 0) 0px 8px 13px 3px; overflow:clip
                    <div> [740,350 628x28] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div name="How does it predict disasters?"> [740,350 602x28] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9; whiteSpace:pre-wrap
                        <h4> [740,350 602x28] fontFamily:"Inter Display"; fontSize:20px; fontWeight:500; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="What is the typical deployment timeline?"
                      <div> [1349,353 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [1349,353 23x23] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
              <div> [720,404 668x68] position:relative
                <div name="Close"> [720,404 668x68] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px; cursor:pointer
                  <div> [720,404 668x68] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; boxShadow:rgba(0, 0, 0, 0) 0px 8px 13px 3px; overflow:clip
                    <div> [740,424 628x28] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div name="How does it predict disasters?"> [740,424 602x28] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9; whiteSpace:pre-wrap
                        <h4> [740,424 602x28] fontFamily:"Inter Display"; fontSize:20px; fontWeight:500; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="Can we integrate with our existing CRM?"
                      <div> [1349,427 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [1349,427 23x23] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
              <div> [720,478 668x68] position:relative
                <div name="Close"> [720,478 668x68] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px; cursor:pointer
                  <div> [720,478 668x68] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; boxShadow:rgba(0, 0, 0, 0) 0px 8px 13px 3px; overflow:clip
                    <div> [740,498 628x28] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div name="How does it predict disasters?"> [740,498 602x28] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9; whiteSpace:pre-wrap
                        <h4> [740,498 602x28] fontFamily:"Inter Display"; fontSize:20px; fontWeight:500; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="Do you provide model fine-tuning?"
                      <div> [1349,501 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [1349,501 23x23] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
              <div> [720,552 668x68] position:relative
                <div name="Close"> [720,552 668x68] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px; cursor:pointer
                  <div> [720,552 668x68] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; boxShadow:rgba(0, 0, 0, 0) 0px 8px 13px 3px; overflow:clip
                    <div> [740,572 628x28] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div name="How does it predict disasters?"> [740,572 602x28] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9; whiteSpace:pre-wrap
                        <h4> [740,572 602x28] fontFamily:"Inter Display"; fontSize:20px; fontWeight:500; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="How do you calculate ROI for automation?"
                      <div> [1349,575 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [1349,575 23x23] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
              <div> [720,626 668x68] position:relative
                <div name="Close"> [720,626 668x68] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px; cursor:pointer
                  <div> [720,626 668x68] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; boxShadow:rgba(0, 0, 0, 0) 0px 8px 13px 3px; overflow:clip
                    <div> [740,646 628x28] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div name="How does it predict disasters?"> [740,646 602x28] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9; whiteSpace:pre-wrap
                        <h4> [740,646 602x28] fontFamily:"Inter Display"; fontSize:20px; fontWeight:500; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="Do we own the custom code you build?"
                      <div> [1349,649 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [1349,649 23x23] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
              <div> [720,700 668x68] position:relative
                <div name="Close"> [720,700 668x68] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px; cursor:pointer
                  <div> [720,700 668x68] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px; boxShadow:rgba(0, 0, 0, 0) 0px 8px 13px 3px; overflow:clip
                    <div> [740,720 628x28] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; overflow:clip
                      <div name="How does it predict disasters?"> [740,720 602x28] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9; whiteSpace:pre-wrap
                        <h4> [740,720 602x28] fontFamily:"Inter Display"; fontSize:20px; fontWeight:500; lineHeight:28px; letterSpacing:-0.4px; textAlign:left; color:rgb(255, 255, 255) TEXT="What models do you specialize in?"
                      <div> [1349,723 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [1349,723 23x23] display:inline-block; color:rgb(255, 255, 255); overflow:hidden
```

## Computed Styles — tablet 1000px (layout/type props only)
```
        <div> [52,152 896x348] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
          <div> [52,152 896x118] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px
            <div> [52,152 896x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px
              <div> [52,152 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
              <div> [108,162 719x1] position:relative; backgroundColor:rgba(26, 26, 26, 0.2)
              <div> [847,153 101x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [847,153 101x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="COMMON QUERIES"
            <div> [52,222 600x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [52,222 600x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Find answers to technical specifications, deployment timelines, and our data security protocols."
          <div> [52,300 896x200] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
            <div> [52,300 600x95] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [52,300 600x95] fontFamily:"Inter Display"; fontSize:43px; fontWeight:500; lineHeight:47.3px; letterSpacing:-1.72px TEXT="Everything you need to know about our AI."
            <div> [52,435 252x65] position:relative
              <a name="Primary"> [52,435 252x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(26, 26, 26); borderRadius:16px href=./contact
                <div> [55,438 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:14px
                  <div> [73,460 30x15] position:relative
                    <div name="Animation 6"> [73,460 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div> [73,460 30x15] position:relative
                        <div> [73,460 30x15] 
                          <svg> [73,460 30x15] 
                <div> [136,438 144x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                  <div> [150,455 116x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [150,455 116x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Contact Support"
        <div> [52,550 896x556] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
          <div> [52,550 896x556] position:relative
            <div name="Question 1"> [52,550 896x556] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:6px
              <div> [52,550 896x129] position:relative
                <div name="Open"> [52,550 896x129] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [52,550 896x129] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [72,570 856x25] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [72,570 830x25] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [72,570 830x25] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="How do you ensure our data remains secure?"
                      <div> [912,575 16x16] position:relative
                        <svg> [912,575 16x16] display:inline-block
                    <div> [72,611 856x48] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="By encoding "Project Physics"—the relationship between time, cost, and physical reality. We see the ripples in a schedule that lead to a cost explosion six months down the line."> [72,611 856x48] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [72,611 856x48] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="We utilize SOC2-compliant local vector databases and on-premise LLM hosting to ensure your proprietary data never leaves your infrastructure."
              <div> [52,685 896x65] position:relative
                <div name="Close"> [52,685 896x65] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [52,685 896x65] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [72,705 856x25] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [72,705 830x25] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [72,705 830x25] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="What is the typical deployment timeline?"
                      <div> [909,706 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [909,706 23x23] display:inline-block
              <div> [52,756 896x65] position:relative
                <div name="Close"> [52,756 896x65] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [52,756 896x65] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [72,776 856x25] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [72,776 830x25] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [72,776 830x25] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Can we integrate with our existing CRM?"
                      <div> [909,778 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [909,778 23x23] display:inline-block
              <div> [52,828 896x65] position:relative
                <div name="Close"> [52,828 896x65] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [52,828 896x65] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [72,848 856x25] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [72,848 830x25] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [72,848 830x25] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Do you provide model fine-tuning?"
                      <div> [909,849 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [909,849 23x23] display:inline-block
              <div> [52,899 896x65] position:relative
                <div name="Close"> [52,899 896x65] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [52,899 896x65] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [72,919 856x25] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [72,919 830x25] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [72,919 830x25] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="How do you calculate ROI for automation?"
                      <div> [909,920 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [909,920 23x23] display:inline-block
              <div> [52,970 896x65] position:relative
                <div name="Close"> [52,970 896x65] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [52,970 896x65] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [72,990 856x25] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [72,990 830x25] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [72,990 830x25] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Do we own the custom code you build?"
                      <div> [909,991 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [909,991 23x23] display:inline-block
              <div> [52,1041 896x65] position:relative
                <div name="Close"> [52,1041 896x65] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [52,1041 896x65] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [72,1061 856x25] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [72,1061 830x25] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [72,1061 830x25] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="What models do you specialize in?"
                      <div> [909,1062 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [909,1062 23x23] display:inline-block
```

## Computed Styles — phone 390px (layout/type props only)
```
        <div> [32,152 326x354] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:30px
          <div> [32,152 326x142] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:50px
            <div> [32,152 326x20] display:flex; position:relative; justifyContent:flex-start; alignItems:center; gap:20px
              <div> [32,152 36x20] position:relative; borderRadius:100px; BORDER(::after):4px 4px 4px 4px solid rgb(26, 26, 26) radius 100px
              <div> [88,162 149x1] position:relative; backgroundColor:rgba(26, 26, 26, 0.2)
              <div> [257,153 101x19] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                <p> [257,153 101x19] fontFamily:"Geist Mono"; fontWeight:300; lineHeight:19.2px TEXT="COMMON QUERIES"
            <div> [32,222 326x72] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <p> [32,222 326x72] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="Find answers to technical specifications, deployment timelines, and our data security protocols."
          <div> [32,324 326x182] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:40px
            <div> [32,324 326x77] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
              <h2> [32,324 326x77] fontFamily:"Inter Display"; fontSize:35px; fontWeight:500; lineHeight:38.5px; letterSpacing:-1.4px TEXT="Everything you need to know about our AI."
            <div> [32,441 252x65] position:relative
              <a name="Primary"> [32,441 252x65] display:flex; position:relative; justifyContent:center; alignItems:center; gap:16px; padding:3px 24px 3px 3px; backgroundColor:rgb(26, 26, 26); borderRadius:16px href=./contact
                <div> [35,444 65x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; backgroundColor:rgb(255, 255, 255); borderRadius:14px
                  <div> [53,466 30x15] position:relative
                    <div name="Animation 13"> [53,466 30x15] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div> [53,466 30x15] position:relative
                        <div> [53,466 30x15] 
                          <svg> [53,466 30x15] 
                <div> [116,444 144x59] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px; borderRadius:14px
                  <div> [130,462 116x24] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                    <p> [130,462 116x24] fontFamily:"Inter Display"; fontSize:16px; lineHeight:24px TEXT="Contact Support"
        <div> [32,556 326x781] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:0px
          <div> [32,556 326x781] position:relative
            <div name="Question 1"> [32,556 326x781] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:6px
              <div> [32,556 326x202] position:relative
                <div name="Open"> [32,556 326x202] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [32,556 326x202] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [52,576 286x50] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [52,576 260x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [52,576 260x50] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="How do you ensure our data remains secure?"
                      <div> [322,594 16x16] position:relative
                        <svg> [322,594 16x16] display:inline-block
                    <div> [52,643 286x96] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="By encoding "Project Physics"—the relationship between time, cost, and physical reality. We see the ripples in a schedule that lead to a cost explosion six months down the line."> [52,643 286x96] display:flex; position:relative; flexDirection:column; justifyContent:flex-start
                        <p> [52,643 286x96] fontFamily:"Inter Display"; fontSize:16px; fontWeight:300; lineHeight:24px; letterSpacing:0.32px TEXT="We utilize SOC2-compliant local vector databases and on-premise LLM hosting to ensure your proprietary data never leaves your infrastructure."
              <div> [32,765 326x90] position:relative
                <div name="Close"> [32,765 326x90] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [32,765 326x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [52,785 286x50] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [52,785 260x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [52,785 260x50] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="What is the typical deployment timeline?"
                      <div> [319,799 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [319,799 23x23] display:inline-block
              <div> [32,861 326x90] position:relative
                <div name="Close"> [32,861 326x90] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [32,861 326x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [52,881 286x50] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [52,881 260x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [52,881 260x50] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Can we integrate with our existing CRM?"
                      <div> [319,895 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [319,895 23x23] display:inline-block
              <div> [32,958 326x90] position:relative
                <div name="Close"> [32,958 326x90] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [32,958 326x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [52,978 286x50] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [52,978 260x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [52,978 260x50] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Do you provide model fine-tuning?"
                      <div> [319,991 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [319,991 23x23] display:inline-block
              <div> [32,1054 326x90] position:relative
                <div name="Close"> [32,1054 326x90] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [32,1054 326x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [52,1074 286x50] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [52,1074 260x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [52,1074 260x50] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="How do you calculate ROI for automation?"
                      <div> [319,1088 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [319,1088 23x23] display:inline-block
              <div> [32,1150 326x90] position:relative
                <div name="Close"> [32,1150 326x90] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [32,1150 326x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [52,1170 286x50] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [52,1170 260x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [52,1170 260x50] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="Do we own the custom code you build?"
                      <div> [319,1184 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [319,1184 23x23] display:inline-block
              <div> [32,1247 326x90] position:relative
                <div name="Close"> [32,1247 326x90] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; alignItems:center; gap:10px
                  <div> [32,1247 326x90] display:flex; position:relative; flexDirection:column; justifyContent:center; alignItems:flex-start; gap:16px; padding:20px; backgroundColor:rgb(26, 26, 26); borderRadius:20px
                    <div> [52,1267 286x50] display:flex; position:relative; justifyContent:center; alignItems:center; gap:10px
                      <div name="How does it predict disasters?"> [52,1267 260x50] display:flex; position:relative; flexDirection:column; justifyContent:flex-start; opacity:0.9
                        <h4> [52,1267 260x50] fontFamily:"Inter Display"; fontSize:18px; fontWeight:500; lineHeight:25.2px; letterSpacing:-0.36px TEXT="What models do you specialize in?"
                      <div> [319,1281 23x23] position:relative; transform:matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)
                        <svg> [319,1281 23x23] display:inline-block
```

## SVG markup (inline these as React components)
### svg15
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(255, 255, 255); color: rgb(255, 255, 255); flex-shrink: 0;"><g color="rgb(255, 255, 255)" weight="bold"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></g></svg>
```
