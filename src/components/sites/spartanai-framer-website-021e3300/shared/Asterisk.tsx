import { cn } from "@/lib/utils";

type AsteriskProps = {
  /** Stroke colour. Light sections use rgb(240,240,240); dark sections use #fff. */
  color?: string;
  size?: number;
  /** Seconds per full turn; 0 disables rotation. */
  spinSeconds?: number;
  className?: string;
};

/** Six-stroke asterisk (151×151 viewBox, stroke-width 17) that rotates continuously (~15°/s). */
export function Asterisk({ color = "rgb(240, 240, 240)", size = 151, spinSeconds = 24, className }: AsteriskProps) {
  return (
    <svg
      viewBox="0 0 151 151"
      width={size}
      height={size}
      aria-hidden="true"
      className={cn("sp-motion shrink-0 overflow-visible", className)}
      style={spinSeconds ? { animation: `sp-spin ${spinSeconds}s linear infinite` } : undefined}
    >
      <g fill="none" stroke={color} strokeWidth={17}>
        <path d="M 75.102 0 L 75.102 151" />
        <path d="M 0 0 L 0 151" transform="translate(75 0.102) rotate(90 0.5 75.5)" />
        <path d="M 0 0 L 0 151" transform="translate(75.088 0.051) rotate(30 0.5 75.5)" />
        <path d="M 0 0 L 0 151" transform="translate(75.051 0.088) rotate(60 0.5 75.5)" />
        <path d="M 0 0 L 0 151" transform="translate(74.949 0.088) rotate(120 0.5 75.5)" />
        <path d="M 0 0 L 0 151" transform="translate(74.912 0.051) rotate(150 0.5 75.5)" />
      </g>
    </svg>
  );
}
