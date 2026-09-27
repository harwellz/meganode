import type { AnnouncementContent } from "@/content/schema";
import { cn } from "@/lib/utils";
import { LogoPill } from "./LogoPill";
import { Marquee } from "./Marquee";

type AnnouncementTickerProps = {
  content: AnnouncementContent;
  color?: string;
  className?: string;
};

/**
 * "//SPARTAN" ticker: [pill 36×20 ring 4px + "//SPARTAN"] then the announcement sentence,
 * gap 100px, ~70px/s leftwards, 20px tall, edges masked 0→4% / 96→100%.
 * Text: Inter Display 400 14px/19.6px +0.28px.
 */
export function AnnouncementTicker({ content, color = "rgb(26, 26, 26)", className }: AnnouncementTickerProps) {
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
          {content.tag}
        </p>
      </div>
      <p className="whitespace-pre text-[14px] leading-[19.6px] tracking-[0.28px]" style={{ color }}>
        {content.message}
      </p>
    </Marquee>
  );
}
