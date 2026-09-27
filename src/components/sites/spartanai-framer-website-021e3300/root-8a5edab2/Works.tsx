import Image from "next/image";
import { cn } from "@/lib/utils";
import { BigMarquee } from "@/components/sites/spartanai-framer-website-021e3300/shared/BigMarquee";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";
import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";

type Work = {
  tag: string;
  logo: string;
  image: string;
  imageAlt: string;
  stats: [string, string, string, string];
};

const STAT_LABELS = ["Funds raised", "Social growth", "ATH ROI", "Partnerships"] as const;

const WORKS: Work[] = [
  {
    tag: "Healthcare AI",
    logo: "yV2zGDqTwUzGafOnvA53MLQkM.png",
    image: "sZxYLpvH56E3RznKPcnAPYlPvo.jpg",
    imageAlt: "gray concrete illustration",
    stats: ["$45M+", "700%", "41x", "84"],
  },
  {
    tag: "Healthcare",
    logo: "CLpXi6HupcG6YYxVylXG8rj7eo4.png",
    image: "4GMiBYbu9SI4dXo9ENcqlNA.jpg",
    imageAlt: "a black and white photo of a couch",
    stats: ["$62M+", "450%", "32x", "91"],
  },
  {
    tag: "Healthcare",
    logo: "RlGLod5QkyznR4SBy9PQw3raa80.png",
    image: "0g3E5eja3ueYAXkITtsy9quyYo.jpg",
    imageAlt: "a black and white photo of wavy lines",
    stats: ["$82M+", "340%", "19x", "56"],
  },
  {
    tag: "Retail & Logistics",
    logo: "3ICxPpL7nA6WiDyreZSZlU70E8.png",
    image: "ZK0k9kMGgE21P7r3puSMYZ8548.jpg",
    imageAlt: "grayscale photo of a flower",
    stats: ["$59M+", "215%", "73x", "28"],
  },
  {
    tag: "Cybersecurity",
    logo: "qA80rXn5OyEhaPlYKJ8gIEE6Ds.png",
    image: "LYQLqywSoqlHG7KLRJM70MIk.png",
    imageAlt: "gray digital wallpaper",
    stats: ["$94M+", "120%", "66x", "12"],
  },
];

const HAIRLINE = "rgba(26,26,26,0.06)";
const EASE = "duration-[400ms] ease-out";

/**
 * Project card. Phone/tablet rest in the "active" (dark, image visible) look; desktop rests light
 * and switches to the dark look on hover.
 */
function WorkCard({ work }: { work: Work }) {
  return (
    <a
      href="#"
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
            <Image src={spImg(work.logo)} alt="" fill sizes="199px" className="object-cover" />
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
              src={spImg(work.image)}
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
              key={STAT_LABELS[i]}
              className="relative flex flex-col items-start justify-center gap-1 overflow-clip rounded-[10px] bg-white pt-[14px] pr-[11px] pb-[15px] pl-[15px]"
            >
              <p className="font-sp-geist text-[16px] leading-[22.4px] font-medium text-[rgba(26,26,26,0.7)]">{value}</p>
              <p className="text-[12px] leading-[16.8px] font-light tracking-[0.12px] text-[rgba(26,26,26,0.7)]">
                {STAT_LABELS[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

function WorkRow({ works, hairline, className }: { works: Work[]; hairline?: boolean; className?: string }) {
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
          <WorkCard work={w} />
        </div>
      ))}
    </FadeIn>
  );
}

export function Works() {
  return (
    <div
      className={cn(
        "relative z-[2] flex w-full flex-col items-center overflow-clip rounded-b-[20px] bg-white",
        "pb-[120px] desktop:pb-[180px]",
      )}
      style={{ boxShadow: `inset 0 -1px 0 ${HAIRLINE}` }}
    >
      <div className="relative flex w-full items-start pt-[120px] pb-[30px] desktop:pt-[180px]">
        <BigMarquee title="Our Works" />
      </div>

      <div
        className="relative flex w-full flex-col items-start overflow-clip px-3 tablet:px-[30px] desktop:px-10"
        style={{ boxShadow: `inset 0 1px 0 ${HAIRLINE}, inset 0 -1px 0 ${HAIRLINE}` }}
      >
        {/* Phone + desktop: rows of 3 then 2 (phone stacks each row into a column). */}
        <WorkRow works={WORKS.slice(0, 3)} hairline className="flex tablet:hidden desktop:grid" />
        <WorkRow works={WORKS.slice(3, 5)} className="flex tablet:hidden desktop:grid" />
        {/* Tablet: rows of 2, 2, 1. */}
        <WorkRow works={WORKS.slice(0, 2)} hairline className="hidden tablet:grid desktop:hidden" />
        <WorkRow works={WORKS.slice(2, 4)} hairline className="hidden tablet:grid desktop:hidden" />
        <WorkRow works={WORKS.slice(4, 5)} className="hidden tablet:grid desktop:hidden" />
      </div>
    </div>
  );
}
