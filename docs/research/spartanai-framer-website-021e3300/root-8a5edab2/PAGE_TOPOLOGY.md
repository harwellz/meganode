# Page Topology — spartanai.framer.website (desktop 1440, total document height 15194px)

Stacking: `<main>` content wrapper (relative, z 2, background white) holds all flow sections. A fixed footer (z 1) sits behind it and is revealed by ~775px of trailing space. Fixed nav + top blur overlay float above everything.

| # | Section | Desktop y / h | Background | Interaction model | Component |
|---|---|---|---|---|---|
| — | Nav (pill links + Hire Team) | fixed top 30 | white pills | static + hover | `NavBar` |
| — | Top progressive blur | fixed 0–90 | backdrop blur | static | `NavBar` |
| 1 | Hero | 0 / 900 | white outer, rgb(240,240,240) inner card r20, bg photo | time (logo marquee, video) + hover | `Hero` |
| 2 | About / stats bento | 900 / 1067 | rgb(240,240,240) card r20 (joined to hero card) | scroll (char reveal) + fade-in; ticker | `AboutStats` |
| 3a | Our Works (big marquee + 5 project cards) | 1967 / 1574 | white, rounded bottom (dark section behind) | time + hover + fade-in | `Works` |
| 3b | Capabilities (text + 3-card horizontal accordion) | 3541 / 880 | rgb(26,26,26) | click | `Capabilities` |
| 3c | Vision (founder photo + reveal headline) + Tech features row | 4421 / 1618 | rgb(26,26,26) | scroll reveal + time icons | `VisionTech` |
| 4 | Experiences (big marquee + testimonial carousel + ticker) | 6039 / 1202 | white, dark 20px strip on top (continuation of rounded dark bottom) | click carousel + time | `Testimonials` |
| 5 | Video showcase "Intelligence by Design." | 7241 / 855 | full-bleed photo | click → YouTube modal | `VideoShowcase` |
| 6a | Our Process (heading + illustration + accordion + CTA row) | 8096 / 1108+250 | rgb(26,26,26) | click | `Process` |
| 6b | Collective statement + 4 team cards | ~9454 / 1137 | rgb(26,26,26), ends with white 30px strip | hover flip | `Team` |
| 7 | Pricing (big marquee + toggle + 4 plans + ticker) | 10791 / 1315 | white | click toggle | `Pricing` |
| 8a | FAQ | 12107 / 798 | rgb(240,240,240) card r20 (12px inset) | click accordion + hover | `Faq` |
| 8b | Insights (big marquee + 3-col article grid) | 13085 / 1311 | same rgb(240,240,240) card | hover | `Insights` |
| — | Footer (fixed, revealed) | fixed 0–900 | forest photo + giant "spartan" wordmark image | static + hover | `Footer` |

Dark sections join with rounded corners: the Works section (white) has a rounded bottom (radius ~40px) overlapping the dark Capabilities area; the dark Process/Team block ends in a rounded bottom over the white Pricing section (the 20/30px absolute strips in the dumps paint the matching color behind those corners).
