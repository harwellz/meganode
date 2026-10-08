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
