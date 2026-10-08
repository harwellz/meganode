import { cn } from "@/lib/utils";
import { Asterisk } from "./Asterisk";
import { Marquee } from "./Marquee";

type BigMarqueeProps = {
  /** e.g. "Our Works", "Experiences", "Pricing", "Insights". */
  title: string;
  /** Title colour (default ink rgb(26,26,26)). */
  color?: string;
  /** Asterisk stroke colour (default rgb(240,240,240)). */
  asteriskColor?: string;
  className?: string;
};

/**
 * Giant section title marquee: [title][asterisk] repeated, gap 60px, ~30px/s leftwards.
 * Title type: Inter Display 700 — desktop 200px/220px/-8px, tablet 160px/176px/-6.4px, phone 128px/140.8px/-5.12px.
 */
export function BigMarquee({ title, color = "rgb(26, 26, 26)", asteriskColor, className }: BigMarqueeProps) {
  return (
    <Marquee speed={30} gap={60} className={cn("w-full", className)} copies={3}>
      <h2
        className={cn(
          "shrink-0 whitespace-pre font-bold",
          "text-[128px] leading-[140.8px] tracking-[-5.12px]",
          "tablet:text-[160px] tablet:leading-[176px] tablet:tracking-[-6.4px]",
          "desktop:text-[200px] desktop:leading-[220px] desktop:tracking-[-8px]",
        )}
        style={{ color }}
      >
        {title}
      </h2>
      <Asterisk color={asteriskColor} />
    </Marquee>
  );
}
