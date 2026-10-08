import { cn } from "@/lib/utils";
import { PixelArrow } from "./PixelArrow";

/**
 * Spartan CTA button. The icon box (pixel arrow) sits at the left; on hover it
 * expands to fill the whole button and shows the label followed by the arrow.
 *
 * Sizes (computed styles from the live site):
 * - `md`: 65px tall, padding 3/24/3/3, gap 16, radius 16, icon box 65×59 r14, label 16px/24px 400.
 * - `sm`: 42px tall, padding 3/10/3/3, gap 6,  radius 12, icon box 40×36 r10, label 14px/19.6px 400 +0.28px.
 *
 * Tones:
 * - `ink`   (Primary):          bg rgb(26,26,26), icon box #fff, dark pixels, white label.
 * - `coal`  (Secondary):        bg rgb(36,36,36), icon box rgb(26,26,26), white pixels, white label.
 * - `white` (Primary small/nav): bg #fff, icon box rgb(26,26,26), white pixels, ink label.
 */
type Size = "md" | "sm";
type Tone = "ink" | "coal" | "white";

const TONES: Record<Tone, { bg: string; box: string; pixel: string; label: string; boxLabel: string }> = {
  ink: { bg: "rgb(26, 26, 26)", box: "#fff", pixel: "rgb(31, 31, 31)", label: "#fff", boxLabel: "rgb(26, 26, 26)" },
  coal: { bg: "rgb(36, 36, 36)", box: "rgb(26, 26, 26)", pixel: "#fff", label: "#fff", boxLabel: "#fff" },
  white: { bg: "#fff", box: "rgb(26, 26, 26)", pixel: "#fff", label: "rgb(26, 26, 26)", boxLabel: "#fff" },
};

type ExpandButtonProps = {
  label: string;
  href?: string;
  size?: Size;
  tone?: Tone;
  /** Optional 1px inner border colour, e.g. "rgba(255,255,255,0.2)" or "rgba(26,26,26,0.1)". */
  borderColor?: string;
  className?: string;
  external?: boolean;
};

export function ExpandButton({
  label,
  href = "#",
  size = "md",
  tone = "ink",
  borderColor,
  className,
  external,
}: ExpandButtonProps) {
  const t = TONES[tone];
  const md = size === "md";
  const boxW = md ? 65 : 40;
  const pad = 3;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group/expand relative inline-flex shrink-0 cursor-pointer items-center overflow-hidden",
        md ? "h-[65px] rounded-[16px] pr-6" : "h-[42px] rounded-[12px] pr-[10px]",
        className,
      )}
      style={{
        backgroundColor: t.bg,
        paddingLeft: pad + boxW + (md ? 16 : 6),
        boxShadow: borderColor ? `inset 0 0 0 1px ${borderColor}` : undefined,
      }}
    >
      {/* Expanding icon box */}
      <span
        className={cn(
          "absolute top-[3px] bottom-[3px] left-[3px] z-[1] flex items-center justify-center overflow-hidden",
          "transition-[width] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "w-[var(--sp-box-w)] group-hover/expand:w-[calc(100%-6px)]",
          md ? "rounded-[14px]" : "rounded-[10px]",
        )}
        style={{ backgroundColor: t.box, ["--sp-box-w" as string]: `${boxW}px` }}
      >
        <span
          className={cn(
            "max-w-0 overflow-hidden whitespace-pre opacity-0 transition-[max-width,opacity,margin] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover/expand:max-w-[240px] group-hover/expand:opacity-100",
            md
              ? "text-[16px] leading-[24px] group-hover/expand:mr-4"
              : "text-[14px] leading-[19.6px] tracking-[0.28px] group-hover/expand:mr-[13px]",
          )}
          style={{ color: t.boxLabel }}
        >
          {label}
        </span>
        <PixelArrow color={t.pixel} variant={md ? "full" : "clip"} />
      </span>
      {/* Resting label */}
      <span
        className={cn(
          "relative whitespace-pre font-normal",
          md ? "px-[10px] text-[16px] leading-[24px]" : "px-[3px] text-[14px] leading-[19.6px] tracking-[0.28px]",
        )}
        style={{ color: t.label }}
      >
        {label}
      </span>
    </a>
  );
}
