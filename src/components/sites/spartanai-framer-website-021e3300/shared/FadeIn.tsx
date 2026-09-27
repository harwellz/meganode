"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Delay in seconds before the fade starts once in view. */
  delay?: number;
  /** Duration in seconds (default 0.8). */
  duration?: number;
  /** Optional starting translateX in px (e.g. 45 for the staggered logo circles). */
  x?: number;
  /** Optional starting translateY in px. */
  y?: number;
};

/**
 * Scroll-triggered appear: opacity 0 → 1 (and optional translate → 0) once the element's top
 * enters the viewport (rootMargin bottom −10%). Plays once.
 */
export function FadeIn({ children, as: Tag = "div", className, style, delay = 0, duration = 0.8, x = 0, y = 0 }: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown || (!x && !y) ? style?.transform : `translate(${x}px, ${y}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}
