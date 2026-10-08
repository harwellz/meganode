"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Colour of characters not yet revealed, e.g. "rgba(26,26,26,0.1)". */
  dimColor: string;
  /** Colour of revealed characters, e.g. "rgb(26,26,26)". */
  color: string;
  /** Reveal starts when the block's top reaches this fraction of the viewport height. */
  start?: number;
  /** Reveal completes when the block's bottom reaches this fraction of the viewport height. */
  end?: number;
};

/**
 * Per-character colour reveal driven by scroll position (no time-based animation):
 * characters switch from `dimColor` to `color` left→right as the block scrolls up.
 */
export function ScrollRevealText({
  text,
  as: Tag = "p",
  className,
  dimColor,
  color,
  start = 0.85,
  end = 0.4,
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const from = r.top - vh * start; // 0 when top hits `start`
      const span = r.height + vh * (start - end); // distance until bottom hits `end`
      const p = Math.min(1, Math.max(0, -from / span));
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [start, end]);

  const total = text.length;
  const revealed = Math.round(progress * total);
  const words = text.trim().split(/\s+/);
  // Index of each word's first character in `text` (words are separated by one space).
  const offsets = words.map((_, wi) => words.slice(0, wi).reduce((n, w) => n + w.length + 1, 0));

  // Mirrors Framer's markup: a flex-wrap row of word items, each ending in a non-breaking
  // space. The trailing space counts toward the item width, so lines wrap exactly as on the
  // original (an inline layout would let the space hang and fit one more word per line).
  return (
    <Tag ref={ref} className={cn("flex flex-wrap justify-start", className)} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true">
          {Array.from(word).map((ch, ci) => (
            <span key={ci} style={{ color: offsets[wi] + ci < revealed ? color : dimColor }}>
              {ch}
            </span>
          ))}
          {" "}
        </span>
      ))}
    </Tag>
  );
}
