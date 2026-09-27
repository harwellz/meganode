"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

// A 10×5 grid of 3px cells showing a ">>" double chevron that scrolls right,
// 14 frames at ~100ms. All instances share one clock so they stay in sync.
const FRAMES = 14;
const ROW_OFFSETS = [0, 1, 2, 1, 0];
const ON = new Set([2, 3, 6, 7]);

let frame = 0;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | null = null;

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!timer) {
    timer = setInterval(() => {
      frame = (frame + 1) % FRAMES;
      listeners.forEach((l) => l());
    }, 100);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
}

const getFrame = () => frame;
const getServerFrame = () => 0;

export function isPixelOn(f: number, row: number, col: number) {
  return ON.has((((col - f - ROW_OFFSETS[row]) % FRAMES) + FRAMES) % FRAMES);
}

type PixelArrowProps = {
  /** Fill of the "on" cells. */
  color?: string;
  /**
   * `full` renders the whole 30×15 grid; `clip` renders a 16×15 window centred on it
   * (used by the small 42px buttons).
   */
  variant?: "full" | "clip";
  className?: string;
};

export function PixelArrow({ color = "#fff", variant = "full", className }: PixelArrowProps) {
  const f = useSyncExternalStore(subscribe, getFrame, getServerFrame);
  const cells = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 10; c++) {
      if (isPixelOn(f, r, c)) {
        cells.push(<rect key={`${r}-${c}`} x={c * 3} y={r * 3} width={3} height={3} fill={color} />);
      }
    }
  }
  const svg = (
    <svg
      viewBox="0 0 30 15"
      width={30}
      height={15}
      aria-hidden="true"
      className="block shrink-0"
      style={{ imageRendering: "pixelated", shapeRendering: "crispEdges" }}
    >
      {cells}
    </svg>
  );
  if (variant === "clip") {
    return (
      <span className={cn("relative flex h-[15px] w-4 shrink-0 items-center justify-center overflow-hidden", className)}>
        {svg}
      </span>
    );
  }
  return <span className={cn("flex h-[15px] w-[30px] shrink-0", className)}>{svg}</span>;
}
