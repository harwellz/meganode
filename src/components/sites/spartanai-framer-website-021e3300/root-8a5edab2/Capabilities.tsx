"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import type { CapabilitiesContent } from "@/content/schema";
import { cn } from "@/lib/utils";
import { ExpandButton } from "@/components/sites/spartanai-framer-website-021e3300/shared/ExpandButton";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";
import { SectionLabel } from "@/components/sites/spartanai-framer-website-021e3300/shared/SectionLabel";

type Capability = CapabilitiesContent["items"][number];

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const PATTERN_MASK = "linear-gradient(0deg, rgb(0, 0, 0) 70.1471%, rgba(0, 0, 0, 0) 100%)";

/** Framer's inner 1px border, drawn as an overlay so it sits above the card content. */
function Border({ color, radius }: { color: string; radius: number }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[6] transition-[box-shadow] duration-500"
      style={{ borderRadius: radius, boxShadow: `inset 0 0 0 1px ${color}` }}
    />
  );
}

function NumberPill({ num, active }: { num: string; active: boolean }) {
  return (
    <span
      className="relative flex h-10 w-[62px] shrink-0 items-center justify-center rounded-[100px] px-5 py-[10px]"
      style={{ boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.06)" }}
    >
      <span
        className="font-sp-geist text-[12px] leading-[20.4px] font-extralight whitespace-pre uppercase transition-colors duration-500"
        style={{ color: active ? "#fff" : "rgba(255, 255, 255, 0.8)" }}
      >
        {num}
      </span>
    </span>
  );
}

function Pattern({ file, active, sizes }: { file: string; active: boolean; sizes: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute top-[130px] right-0 bottom-0 left-0 z-[1] overflow-hidden transition-opacity duration-500", EASE)}
      style={{ opacity: active ? 0.18 : 0, maskImage: PATTERN_MASK, WebkitMaskImage: PATTERN_MASK }}
    >
      <Image src={file} alt="" fill sizes={sizes} className="object-cover" />
    </div>
  );
}

function Illustration({ file, active, className }: { file: string; active: boolean; className: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute z-[5] size-[270px] transition-opacity duration-500", EASE, className)}
      style={{ opacity: active ? 1 : 0 }}
    >
      <div
        className="sp-motion relative size-full"
        style={{ animation: "sp-bob 3s ease-in-out infinite" }}
      >
        <Image src={file} alt="" width={270} height={270} sizes="270px" className="size-full object-cover" />
      </div>
    </div>
  );
}

function activateOnKey(e: KeyboardEvent, activate: () => void) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    activate();
  }
}

/** Desktop (≥1200): horizontal accordion — active card 480 wide, others 90. */
function DesktopCard({ item, active, onActivate }: { item: Capability; active: boolean; onActivate: () => void }) {
  return (
    <div
      role={active ? undefined : "button"}
      tabIndex={active ? undefined : 0}
      aria-expanded={active}
      aria-label={active ? undefined : item.title}
      onClick={active ? undefined : onActivate}
      onKeyDown={active ? undefined : (e) => activateOnKey(e, onActivate)}
      className={cn(
        "relative h-full min-w-0 overflow-hidden rounded-[20px] transition-[flex-grow,flex-basis,background-color] duration-500",
        EASE,
        active ? "grow basis-0 cursor-default" : "shrink-0 grow-0 basis-[90px] cursor-pointer",
      )}
      style={{ backgroundColor: active ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.04)" }}
    >
      <Border color={active ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.03)"} radius={20} />

      {/* Content laid out at the full 480px width so it never reflows while the card animates. */}
      <div className="absolute top-0 bottom-0 left-0 w-[480px]">
        <div
          className={cn("relative z-[2] flex flex-col gap-5 pt-[30px] pr-[70px] pl-[30px] transition-opacity duration-500", EASE)}
          style={{ opacity: active ? 1 : 0 }}
        >
          <h3 className="text-[28px] leading-[39.2px] font-medium tracking-[-0.28px] text-white">{item.title}</h3>
          <p className="w-[380px] text-[14px] leading-[21px] font-light tracking-[0.28px] text-white">{item.description}</p>
        </div>
        <Illustration file={item.illustration} active={active} className="top-[273.5px] left-[105px]" />
      </div>

      <Pattern file={item.pattern} active={active} sizes="480px" />

      {/* Number pill: top-right when open, centred when closed. */}
      <div
        className={cn("absolute top-[14px] z-[3] transition-[left] duration-500", EASE)}
        style={{ left: active ? "calc(100% - 76px)" : "calc(50% - 31px)" }}
      >
        <NumberPill num={item.num} active={active} />
      </div>

      {/* Vertical title (reads bottom → top), visible when closed. */}
      <div
        aria-hidden={active}
        className={cn(
          "absolute bottom-[30px] left-1/2 z-[3] -translate-x-1/2 transition-opacity duration-500",
          EASE,
          active ? "opacity-0 delay-0" : "opacity-100 delay-200",
        )}
      >
        <div
          className="rotate-180 p-[10px] text-center font-sp-geist text-[13px] whitespace-nowrap uppercase [writing-mode:vertical-rl]"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          {item.title}
        </div>
      </div>
    </div>
  );
}

/** Tablet / phone (<1200): vertical accordion — open card 510 tall, closed rows 80 tall. */
function StackedCard({ item, active, onActivate }: { item: Capability; active: boolean; onActivate: () => void }) {
  return (
    <div
      role={active ? undefined : "button"}
      tabIndex={active ? undefined : 0}
      aria-expanded={active}
      aria-label={active ? undefined : item.title}
      onClick={active ? undefined : onActivate}
      onKeyDown={active ? undefined : (e) => activateOnKey(e, onActivate)}
      className={cn(
        "relative w-full overflow-hidden rounded-[20px] transition-[height,background-color] duration-500",
        EASE,
        active ? "h-[510px] cursor-default" : "h-20 cursor-pointer",
      )}
      style={{ backgroundColor: active ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.04)" }}
    >
      <Border color={active ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.03)"} radius={20} />

      {/* Open state */}
      <div
        aria-hidden={!active}
        className={cn("absolute inset-x-0 top-0 h-[510px] transition-opacity duration-500", EASE)}
        style={{ opacity: active ? 1 : 0 }}
      >
        <div className="relative z-[2] flex flex-col gap-5 pt-[30px] pr-[70px] pl-[30px]">
          <h3 className="max-w-[350px] text-[26px] leading-[36.4px] font-medium tracking-[-0.26px] text-white">
            {item.title}
          </h3>
          <p className="max-w-[600px] text-[14px] leading-[21px] font-light tracking-[0.28px] text-white">
            {item.description}
          </p>
        </div>
        <Illustration file={item.illustration} active={active} className="top-[213.5px] left-[calc(50%-135px)]" />
        <Pattern file={item.pattern} active={active} sizes="(min-width: 810px) 920px, 350px" />
        <div className="absolute top-[14px] right-[14px] z-[3]">
          <NumberPill num={item.num} active />
        </div>
      </div>

      {/* Closed row: pill + title on one line */}
      <div
        aria-hidden={active}
        className={cn(
          "absolute inset-x-0 top-0 z-[3] flex h-20 items-center gap-[14px] p-5 transition-opacity duration-500",
          EASE,
          active ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <NumberPill num={item.num} active={false} />
        <p className="min-w-0 flex-1 font-sp-geist text-[12px] leading-[19.2px] font-light text-white uppercase">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export function Capabilities({ content }: { content: CapabilitiesContent }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="capabilities"
      className="relative z-[3] flex w-full flex-col items-start gap-[54px] overflow-clip px-5 pt-[150px] tablet:gap-[60px] tablet:px-10 desktop:flex-row desktop:gap-0 desktop:pt-[250px]"
    >
      {/* Left column */}
      <div className="flex w-full flex-col items-start gap-[30px] tablet:gap-[50px] desktop:h-[70vh] desktop:min-w-0 desktop:flex-1 desktop:justify-between desktop:gap-0 desktop:pr-[70px]">
        <div className="flex w-full flex-col items-start justify-center gap-[50px] desktop:w-[500px] desktop:max-w-full">
          <FadeIn className="w-full">
            <SectionLabel
              label={content.label}
              order="pill-first"
              color="#fff"
              lineColor="rgba(255, 255, 255, 0.1)"
            />
          </FadeIn>
          <FadeIn className="w-full tablet:max-w-[600px]" delay={0.1}>
            <p className="text-[16px] leading-[24px] font-light tracking-[0.32px] text-white">
              {content.intro}
            </p>
          </FadeIn>
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-10">
          <FadeIn className="w-full max-w-[600px]">
            <h2 className="text-[35px] leading-[38.5px] font-medium tracking-[-1.4px] text-white tablet:text-[43px] tablet:leading-[47.3px] tablet:tracking-[-1.72px] desktop:text-[54px] desktop:leading-[59.4px] desktop:tracking-[-2.16px]">
              {content.heading}
            </h2>
          </FadeIn>
          <FadeIn className="relative z-[4]" delay={0.1}>
            <ExpandButton label={content.cta.label} size="md" tone="coal" href={content.cta.href} />
          </FadeIn>
        </div>
      </div>

      {/* Right column: cards */}
      <FadeIn className="relative w-full desktop:min-w-0 desktop:flex-1" delay={0.15}>
        <div className="hidden h-[70vh] w-full gap-[10px] overflow-clip desktop:flex">
          {content.items.map((item, i) => (
            <DesktopCard key={item.num} item={item} active={i === activeIndex} onActivate={() => setActiveIndex(i)} />
          ))}
        </div>
        <div className="flex w-full flex-col gap-[10px] desktop:hidden">
          {content.items.map((item, i) => (
            <StackedCard key={item.num} item={item} active={i === activeIndex} onActivate={() => setActiveIndex(i)} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
