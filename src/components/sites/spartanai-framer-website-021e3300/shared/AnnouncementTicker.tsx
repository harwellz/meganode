import { cn } from "@/lib/utils";
import { LogoPill } from "./LogoPill";
import { Marquee } from "./Marquee";

const MESSAGE =
  "We are officially expanding our neural compute clusters to three new global regions, providing sub-50ms inference speeds for our enterprise partners across EMEA, APAC, and North America.";

type AnnouncementTickerProps = {
  color?: string;
  className?: string;
};

/**
 * "//SPARTAN" ticker: [pill 36×20 ring 4px + "//SPARTAN"] then the announcement sentence,
 * gap 100px, ~70px/s leftwards, 20px tall, edges masked 0→4% / 96→100%.
 * Text: Inter Display 400 14px/19.6px +0.28px.
 */
export function AnnouncementTicker({ color = "rgb(26, 26, 26)", className }: AnnouncementTickerProps) {
  return (
    <Marquee
      speed={70}
      gap={100}
      className={cn("h-5 w-full rounded-[10px]", className)}
      mask="linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 4%, #000 96%, rgba(0,0,0,0) 100%)"
    >
      <div className="flex shrink-0 items-center gap-[10px]">
        <LogoPill color={color} />
        <p className="whitespace-pre text-[14px] leading-[19.6px] tracking-[0.28px]" style={{ color }}>
          {"//SPARTAN"}
        </p>
      </div>
      <p className="whitespace-pre text-[14px] leading-[19.6px] tracking-[0.28px]" style={{ color }}>
        {MESSAGE}
      </p>
    </Marquee>
  );
}
