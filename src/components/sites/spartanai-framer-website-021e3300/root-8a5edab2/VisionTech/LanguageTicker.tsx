"use client";

import { useEffect, useState } from "react";

/** Language codes and their horizontal centres inside the 200px row (from the live Jaini layout). */
const CODES = [
  { code: "ZH", c: 7 },
  { code: "HI", c: 27 },
  { code: "ES", c: 46.5 },
  { code: "FR", c: 66.5 },
  { code: "AR", c: 87 },
  { code: "BN", c: 108.5 },
  { code: "PT", c: 129.5 },
  { code: "RU", c: 151.5 },
  { code: "EN", c: 172 },
  { code: "DE", c: 194 },
];

/** Row is placed at left −71.97px; the ▼ marker's centre sits at x=16.5 of the 34px window. */
const ROW_LEFT = -71.97;
const MARKER_CENTER = 16.5;
const STEP_MS = 1600;

/**
 * 4. Language ticker: a 34×43 window (1px side borders) showing ~2 codes of the row; the row
 * slides in steps so each code in turn lands under the ▼ marker.
 */
export function LanguageTicker() {
  const [index, setIndex] = useState(4); // "AR" — Framer's resting variant

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % CODES.length), STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  const tx = -ROW_LEFT + MARKER_CENTER - CODES[index].c;

  return (
    <div className="relative h-[55px] w-[34px]" aria-hidden="true">
      <div className="absolute inset-x-0 top-[12px] bottom-0 overflow-hidden shadow-[inset_1px_0_0_0_rgba(255,255,255,0.4),inset_-1px_0_0_0_rgba(255,255,255,0.4)]">
        <div
          className="absolute top-[11.46px] left-[-71.97px] flex h-[19.2px] w-[200px] items-center justify-center gap-[7px] transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateX(${tx}px)` }}
        >
          {CODES.map(({ code }) => (
            <p key={code} className="font-sp-jaini text-[16px] leading-[19.2px] whitespace-pre text-white">
              {code}
            </p>
          ))}
        </div>
        <svg className="absolute top-0 left-[12.03px] h-[9px] w-[9px] rotate-180 overflow-visible" viewBox="0 0 9 9">
          <path d="M 4.5 1.125 L 8.397 7.875 L 0.603 7.875 Z" fill="#fff" />
        </svg>
      </div>
    </div>
  );
}
