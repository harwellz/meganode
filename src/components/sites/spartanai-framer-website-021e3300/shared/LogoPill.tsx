import { cn } from "@/lib/utils";

type LogoPillProps = {
  /** Outer width/height in px. Nav logo 60×34 (border 6); section labels & ticker 36×20 (border 4). */
  width?: number;
  height?: number;
  border?: number;
  color?: string;
  className?: string;
};

/** The Spartan mark: an empty stadium/pill outline. */
export function LogoPill({ width = 36, height = 20, border = 4, color = "rgb(26, 26, 26)", className }: LogoPillProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("block shrink-0 rounded-full", className)}
      style={{ width, height, boxShadow: `inset 0 0 0 ${border}px ${color}` }}
    />
  );
}
