"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  /** Scroll speed in px per second (leftwards). */
  speed?: number;
  /** Gap in px between items and between repeated copies. */
  gap?: number;
  /** Optional CSS mask for faded edges, e.g. "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)". */
  mask?: string;
  className?: string;
  trackClassName?: string;
  style?: CSSProperties;
  /** Number of copies rendered (≥2). Increase when one copy is narrower than the viewport. */
  copies?: number;
};

/** Infinite horizontal marquee: copies of `children` translate left at a constant px/s speed. */
export function Marquee({
  children,
  speed = 30,
  gap = 60,
  mask,
  className,
  trackClassName,
  style,
  copies = 2,
}: MarqueeProps) {
  const firstRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const el = firstRef.current;
    if (!el) return;
    const measure = () => setDistance(el.getBoundingClientRect().width + gap);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [gap]);

  const count = Math.max(2, copies);
  return (
    <div
      className={cn("relative flex overflow-hidden", className)}
      style={{ maskImage: mask, WebkitMaskImage: mask, ...style }}
    >
      <div
        className={cn("sp-motion flex w-max shrink-0 items-center", trackClassName)}
        style={{
          gap,
          ["--sp-marquee-distance" as string]: `-${distance}px`,
          animation: distance ? `sp-marquee ${distance / speed}s linear infinite` : undefined,
        }}
      >
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            ref={i === 0 ? firstRef : undefined}
            aria-hidden={i > 0 ? true : undefined}
            className="flex shrink-0 items-center"
            style={{ gap }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
