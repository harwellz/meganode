"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  /** Duration in seconds (default 1.6). */
  duration?: number;
  className?: string;
};

/**
 * Integer count-up (0 → `to`, ease-out) that plays once when scrolled into view.
 * An invisible copy of the final value reserves the box so the width never jumps,
 * mirroring Framer's opacity:0 sizer + absolute overlay.
 */
export function CountUp({ to, prefix = "", suffix = "", duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / (duration * 1000));
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * to));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  const text = `${prefix}${to}${suffix}`;

  return (
    <div ref={ref} className="relative" aria-label={text}>
      <p aria-hidden="true" className={cn("text-center opacity-0", className)}>
        {text}
      </p>
      <p aria-hidden="true" className={cn("absolute inset-0 text-center", className)}>
        {prefix}
        {value}
        {suffix}
      </p>
    </div>
  );
}
