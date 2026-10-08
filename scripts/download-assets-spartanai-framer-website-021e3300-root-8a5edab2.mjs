// Downloads every asset used by https://spartanai.framer.website/ into the page's namespaced public folder.
// Local names keep the Framer content hash, so "https://framerusercontent.com/images/<hash>.<ext>"
// maps to "/sites/spartanai-framer-website-021e3300/root-8a5edab2/images/<hash>.<ext>".
import fs from "node:fs";
import path from "node:path";

const SITE = "spartanai-framer-website-021e3300";
const PAGE = "root-8a5edab2";
const ROOT = path.resolve("public/sites", SITE, PAGE);
const RESEARCH = path.resolve("docs/research", SITE, PAGE);

const raw = JSON.parse(fs.readFileSync(path.join(RESEARCH, "assets-raw.json"), "utf8"));
const jobs = new Map();
const add = (url, dir) => {
  const clean = url.split("?")[0];
  jobs.set(clean, path.join(ROOT, dir, path.basename(clean)));
};
for (const img of raw.images) if (img.src?.includes("framerusercontent.com/images/")) add(img.src, "images");
for (const v of raw.videos) if (v.src) add(v.src, "videos");
// Capability illustrations that only load when cards 002 / 003 are activated
add("https://framerusercontent.com/images/In0V7veBPGhnSUzXqR7lATUDvE.png", "images");
add("https://framerusercontent.com/images/T1zAekOylQHr0GPPBMBKhmpUeI.png", "images");
// Favicons (link[rel*=icon])
add("https://framerusercontent.com/images/d6IuUgB4OOUort0AccMgzEPUGw.png", "images");
add("https://framerusercontent.com/images/31fOyKvwCm72RWXbx38uLHt044.png", "images");

// Latin-subset font files (see DESIGN_TOKENS.md)
const FONTS = {
  "InterDisplay-300.woff2": "https://framerusercontent.com/assets/CnMzVKZxLPB68RITfNGUfLe65m4.woff2",
  "InterDisplay-400.woff2": "https://framerusercontent.com/assets/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2",
  "InterDisplay-500.woff2": "https://framerusercontent.com/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2",
  "InterDisplay-600.woff2": "https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2",
  "InterDisplay-700.woff2": "https://framerusercontent.com/assets/qITWJ2WdG0wrgQPDb8lvnYnTXDg.woff2",
};
for (const [name, url] of Object.entries(FONTS)) jobs.set(url, path.join("src/app/fonts", SITE, name));

const entries = [...jobs.entries()];
let ok = 0, failed = 0;
for (let i = 0; i < entries.length; i += 4) {
  await Promise.all(entries.slice(i, i + 4).map(async ([url, dest]) => {
    try {
      if (fs.existsSync(dest)) { ok++; return; }
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
      ok++;
    } catch (err) {
      failed++;
      console.error(`FAILED ${url}: ${err.message}`);
    }
  }));
}
console.log(`Downloaded ${ok}/${entries.length} assets (${failed} failed)`);
