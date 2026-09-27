import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";
import { ExpandButton } from "@/components/sites/spartanai-framer-website-021e3300/shared/ExpandButton";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";
import { ScrollRevealText } from "@/components/sites/spartanai-framer-website-021e3300/shared/ScrollRevealText";
import { SectionLabel } from "@/components/sites/spartanai-framer-website-021e3300/shared/SectionLabel";
import { MagnifierIcon, OrbitIcon, SlidersIcon, VisionTechKeyframes } from "./VisionTech/icons";
import { LanguageTicker } from "./VisionTech/LanguageTicker";

const HEADLINE =
  "We believe that AI should not just automate tasks, but amplify the creative and strategic potential of every human.";

/** Photo-frame corner tick: an 11px line (svg07 horizontal → "\", svg08 vertical → "/") rotated 45°. */
function CornerTick({ dir, className }: { dir: "back" | "fwd"; className: string }) {
  const [x1, x2] = dir === "back" ? [3.11, 10.89] : [10.89, 3.11];
  return (
    <svg className={cn("absolute h-[14px] w-[14px]", className)} viewBox="0 0 14 14" aria-hidden="true">
      <line x1={x1} y1={3.11} x2={x2} y2={10.89} stroke="rgba(255, 255, 255, 0.3)" strokeWidth={0.786} />
    </svg>
  );
}

const LOGOS = [
  { file: "SMyO8DDP1JPIhoq2Ak1dNFDpGIo.png", w: 22, h: 21, shadow: "shadow-[-7px_0_5px_1px_rgba(0,0,0,0.08)]", x: 45 },
  { file: "ss2Osfd5P1AGF1NpgQhGgyGabA.png", w: 21, h: 21, shadow: "shadow-[-7px_0_5px_1px_rgba(0,0,0,0.12)]", x: 23 },
  { file: "fQ71Xa5nLv0lmW62RjPI68rMDcU.png", w: 19, h: 19, shadow: "shadow-[-7px_0_5px_1px_rgba(0,0,0,0.12)]", x: 12 },
  { file: "Yhx5rRmY8EDv8iMIG0L554Xx3k.png", w: 17, h: 20, shadow: "shadow-[-7px_0_5px_1px_rgba(0,0,0,0.12)]", x: 6 },
];

const FEATURES: { icon: ReactNode; text: string }[] = [
  { icon: <MagnifierIcon />, text: "Semantic vector search for hyper-accurate retrieval" },
  { icon: <OrbitIcon />, text: "Unified data lakes for expansive model context." },
  { icon: <SlidersIcon />, text: "Token-optimized flows for high speed processing" },
  { icon: <LanguageTicker />, text: "Global LLM deployment. Support for 95+ languages." },
];

export function VisionTech() {
  return (
    <div className="relative flex w-full flex-col items-center overflow-clip bg-sp-ink">
      <VisionTechKeyframes />

      {/* ── Vision ─────────────────────────────────────────── */}
      <div className="relative z-10 flex w-full flex-col items-start overflow-clip rounded-b-[20px] bg-sp-ink px-5 pt-[150px] pb-[130px] tablet:px-10 desktop:pt-[250px] desktop:pb-[160px]">
        <div className="flex w-full flex-col-reverse gap-[50px] tablet:gap-[60px] desktop:flex-row desktop:items-start desktop:gap-0">
          {/* Founder card + caption */}
          <div className="flex w-full flex-col items-start gap-5 tablet:gap-[30px] desktop:w-1/2">
            <div className="relative aspect-square w-full overflow-clip rounded-[20px] tablet:h-[320px] tablet:w-[320px]">
              <Image
                src={spImg("jnIpVvHAXWiAGa8gLEmWtRuDwQ.png")}
                alt=""
                fill
                sizes="(max-width: 809px) 100vw, 320px"
                className="object-cover"
              />
              <div className="absolute inset-[10px] overflow-clip rounded-[14px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]">
                <CornerTick dir="back" className="top-[11px] left-[11px]" />
                <CornerTick dir="fwd" className="top-[11px] right-[11px]" />
                <CornerTick dir="back" className="right-[11px] bottom-[11px]" />
                <CornerTick dir="fwd" className="bottom-[11px] left-[11px]" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[6px]">
              <p className="font-sp-geist text-[12px] leading-[19.2px] font-light whitespace-pre text-white uppercase">
                ALEXANDER VACCA
              </p>
              <p className="text-[12px] leading-[16.8px] font-light tracking-[0.12px] whitespace-pre text-white/70">
                Founder &amp; Lead Engineer
              </p>
            </div>
          </div>

          {/* Vision copy */}
          <div className="flex w-full flex-col items-start desktop:w-1/2">
            <div className="flex w-full flex-col items-start gap-[50px] desktop:w-[500px]">
              <SectionLabel label="OUR VISION" order="label-first" color="#fff" lineColor="rgba(255,255,255,0.1)" />
              <div className="flex w-full flex-col items-start gap-10">
                <ScrollRevealText
                  text={HEADLINE}
                  dimColor="rgba(255, 255, 255, 0.1)"
                  color="#fff"
                  className="relative z-[1] w-full text-[35px] leading-[37px] font-medium tracking-[-3px] tablet:text-[43px] tablet:leading-[45px] desktop:text-[56px] desktop:leading-[60px]"
                />
                <p className="w-full text-[16px] leading-[24px] font-light tracking-[0.32px] text-white tablet:w-[600px] desktop:w-full">
                  By merging technical rigor with intuitive design, we build systems that don&apos;t just solve
                  problems—they create entirely new opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tech row ───────────────────────────────────────── */}
      <div className="relative z-[6] flex w-full flex-col items-start gap-y-[60px] bg-sp-ink px-[30px] py-[130px] tablet:px-[60px] desktop:gap-y-20 desktop:py-[180px]">
        {/* Coal ledge peeking out 30px below the vision block's rounded bottom */}
        <div className="absolute inset-x-0 top-[-40px] z-[1] h-[70px] overflow-clip rounded-b-[20px] bg-sp-coal" />

        {/* Top row */}
        <div className="relative z-[2] flex w-full flex-col items-start gap-[30px] desktop:flex-row desktop:gap-0">
          <div className="flex w-full items-center tablet:pr-[70px] desktop:w-1/2">
            <p className="w-full font-sp-geist text-[12px] leading-[20.4px] font-extralight text-white uppercase desktop:w-[380px]">
              ENGINEERING SYSTEMS THAT SCALE WITH YOUR AMBITION. WE LEVERAGE INDUSTRY-LEADING MODELS TO DEPLOY
              CUSTOM NEURAL SOLUTIONS TAILORED TO YOUR STACK.
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-10 tablet:gap-12 desktop:w-1/2 desktop:flex-row desktop:justify-between desktop:gap-0 desktop:pl-[22px]">
            <div className="relative ml-5 h-11 w-[94px] shrink-0 tablet:ml-0">
              {LOGOS.map((logo, i) => (
                <FadeIn
                  key={logo.file}
                  x={logo.x}
                  delay={i * 0.08}
                  className="absolute top-0"
                  style={{ left: -19 + i * 30 }}
                >
                  <div
                    className={cn(
                      "relative flex h-11 w-11 items-center justify-center overflow-clip rounded-full bg-white",
                      logo.shadow,
                    )}
                  >
                    <Image
                      src={spImg(logo.file)}
                      alt=""
                      width={logo.w}
                      height={logo.h}
                      className="object-cover opacity-90 invert"
                      style={{ width: logo.w, height: logo.h }}
                    />
                    <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
                  </div>
                </FadeIn>
              ))}
            </div>
            <ExpandButton label="Digital Brain v4.0.2" size="md" tone="coal" href="#" />
          </div>
        </div>

        {/* Feature columns */}
        <div className="relative z-[2] flex w-full flex-col gap-[50px] tablet:grid tablet:grid-cols-2 tablet:gap-x-[70px] tablet:gap-y-[50px] desktop:flex desktop:flex-row desktop:items-center desktop:gap-0">
          {FEATURES.map((f, i) => (
            <div
              key={f.text}
              className={cn(
                "flex flex-col items-start justify-center gap-5 tablet:gap-[30px] desktop:flex-1",
                i > 0 && "desktop:pl-[50px]",
              )}
            >
              {f.icon}
              <div className="relative z-[1] h-px w-full bg-white/10" />
              <p className="w-[250px] text-[15px] leading-[22.5px] font-light tracking-[0.3px] text-white tablet:w-[210px]">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
