import { cn } from "@/lib/utils";
import { LogoPill } from "./LogoPill";

type SectionLabelProps = {
  label: string;
  /** `pill-first`: [pill][line][LABEL] (Capabilities, Common Queries). `label-first`: [LABEL][line][pill] (Our Vision, Our Process). */
  order?: "pill-first" | "label-first";
  /** Foreground colour: white on dark sections, rgb(26,26,26) on light. */
  color?: string;
  /** Hairline colour, e.g. rgba(255,255,255,0.1) on dark, rgba(26,26,26,0.1) on light. */
  lineColor?: string;
  className?: string;
};

/**
 * Row: 36×20 pill (4px ring) + 1px hairline (flex-1) + label in Geist Mono 300 12px/19.2px uppercase, gap 20px.
 */
export function SectionLabel({
  label,
  order = "pill-first",
  color = "rgb(26, 26, 26)",
  lineColor = "rgba(26, 26, 26, 0.1)",
  className,
}: SectionLabelProps) {
  const pill = <LogoPill color={color} />;
  const line = <span className="h-px min-w-0 flex-1" style={{ backgroundColor: lineColor }} />;
  const text = (
    <p className="shrink-0 font-sp-geist text-[12px] leading-[19.2px] font-light uppercase" style={{ color }}>
      {label}
    </p>
  );
  return (
    <div className={cn("flex w-full items-center gap-5", className)}>
      {order === "pill-first" ? (
        <>
          {pill}
          {line}
          {text}
        </>
      ) : (
        <>
          {text}
          {line}
          {pill}
        </>
      )}
    </div>
  );
}
