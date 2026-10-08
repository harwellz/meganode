import Image from "next/image";
import type { WorksContent } from "@/content/schema";
import { cn } from "@/lib/utils";
import { BigMarquee } from "@/components/sites/spartanai-framer-website-021e3300/shared/BigMarquee";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";

type Work = WorksContent["items"][number];
type StatLabels = WorksContent["statLabels"];

const HAIRLINE = "rgba(26,26,26,0.06)";
const EASE = "duration-[400ms] ease-out";

/**
 * Project card. Phone/tablet rest in the "active" (dark, image visible) look; desktop rests light
 * and switches to the dark look on hover.
 */
function WorkCard({ work, statLabels }: { work: Work; statLabels: StatLabels }) {
  return (
    <a
      href={work.href}
      className={cn(
        "group relative flex h-[482px] w-full cursor-pointer flex-col items-center justify-center overflow-clip p-4 no-underline",
        "shadow-[inset_1px_0_0_rgba(26,26,26,0.06),inset_-1px_0_0_rgba(26,26,26,0.06)]",
      )}
    >
      <div
        className={cn(
          "relative flex h-[450px] w-full flex-col items-center gap-px overflow-clip rounded-[20px] p-px",
          "bg-[rgb(26,26,26)] desktop:bg-[rgba(26,26,26,0.03)] desktop:group-hover:bg-[rgba(26,26,26,0.8)]",
          "transition-[background-color]",
          EASE,
        )}
      >
        {/* Top panel */}
        <div
          className={cn(
            "relative flex h-[302px] w-full shrink-0 flex-col items-start gap-2.5 overflow-clip rounded-[19px_19px_10px_10px] p-2.5",
            "bg-[rgba(255,255,255,0)] desktop:bg-white desktop:group-hover:bg-[rgba(255,255,255,0)]",
            "transition-[background-color]",
            EASE,
          )}
        >
          <div className="relative z-[2] flex h-8 items-center justify-center overflow-clip rounded-[100px] bg-white px-4 pt-[9px] pb-[7px] shadow-[inset_0_0_0_1px_rgb(219,219,219)]">
            <p className="font-sp-geist whitespace-pre text-[10px] leading-4 text-sp-ink uppercase">{work.tag}</p>
          </div>

          {/* Logo (white PNG; inverted grey at desktop rest) */}
          <div
            className={cn(
              "absolute top-1/2 left-1/2 z-[1] h-[57.03px] w-[189px] -translate-x-1/2 -translate-y-1/2",
              "invert-0 desktop:invert-[0.73] desktop:group-hover:h-[60.05px] desktop:group-hover:w-[199px] desktop:group-hover:invert-0",
              "transition-[width,height,filter]",
              EASE,
            )}
          >
            <Image src={work.logo} alt="" fill sizes="199px" className="object-cover" />
          </div>

          {/* Background image */}
          <div
            className={cn(
              "absolute top-0 right-[-17px] bottom-[-28.4px] left-[-17px] z-0 overflow-clip opacity-[0.54]",
              "desktop:opacity-0 desktop:group-hover:right-[-37px] desktop:group-hover:bottom-[-61px] desktop:group-hover:left-[-37px] desktop:group-hover:opacity-[0.54]",
              "transition-[opacity,left,right,bottom]",
              EASE,
            )}
          >
            <Image
              src={work.image}
              alt={work.imageAlt}
              fill
              sizes="(min-width: 1200px) 480px, (min-width: 810px) 500px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="relative grid h-[145px] w-full shrink-0 grid-cols-2 gap-px overflow-clip rounded-[10px_10px_19px_19px]">
          {work.stats.map((value, i) => (
            <div
              key={statLabels[i]}
              className="relative flex flex-col items-start justify-center gap-1 overflow-clip rounded-[10px] bg-white pt-[14px] pr-[11px] pb-[15px] pl-[15px]"
            >
              <p className="font-sp-geist text-[16px] leading-[22.4px] font-medium text-[rgba(26,26,26,0.7)]">{value}</p>
              <p className="text-[12px] leading-[16.8px] font-light tracking-[0.12px] text-[rgba(26,26,26,0.7)]">
                {statLabels[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

function WorkRow({
  works,
  statLabels,
  hairline,
  className,
}: {
  works: Work[];
  statLabels: StatLabels;
  hairline?: boolean;
  className?: string;
}) {
  return (
    <FadeIn
      className={cn(
        "relative w-full flex-col items-center gap-x-5 overflow-clip",
        "tablet:grid-cols-2 desktop:grid-cols-3",
        hairline && "shadow-[inset_0_-1px_0_rgba(26,26,26,0.06)]",
        className,
      )}
    >
      {works.map((w) => (
        <div key={w.logo} className="relative w-full">
          <WorkCard work={w} statLabels={statLabels} />
        </div>
      ))}
    </FadeIn>
  );
}

export function Works({ content }: { content: WorksContent }) {
  const { items, statLabels } = content;

  return (
    <div
      className={cn(
        "relative z-[2] flex w-full flex-col items-center overflow-clip rounded-b-[20px] bg-white",
        "pb-[120px] desktop:pb-[180px]",
      )}
      style={{ boxShadow: `inset 0 -1px 0 ${HAIRLINE}` }}
    >
      <div className="relative flex w-full items-start pt-[120px] pb-[30px] desktop:pt-[180px]">
        <BigMarquee title={content.title} />
      </div>

      <div
        className="relative flex w-full flex-col items-start overflow-clip px-3 tablet:px-[30px] desktop:px-10"
        style={{ boxShadow: `inset 0 1px 0 ${HAIRLINE}, inset 0 -1px 0 ${HAIRLINE}` }}
      >
        {/* Phone + desktop: rows of 3 then 2 (phone stacks each row into a column). */}
        <WorkRow works={items.slice(0, 3)} statLabels={statLabels} hairline className="flex tablet:hidden desktop:grid" />
        <WorkRow works={items.slice(3, 5)} statLabels={statLabels} className="flex tablet:hidden desktop:grid" />
        {/* Tablet: 2 × 2, fifth project not shown (as on the live site at 1000px). */}
        <WorkRow works={items.slice(0, 2)} statLabels={statLabels} hairline className="hidden tablet:grid desktop:hidden" />
        <WorkRow works={items.slice(2, 4)} statLabels={statLabels} className="hidden tablet:grid desktop:hidden" />
      </div>
    </div>
  );
}
