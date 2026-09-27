"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ExpandButton } from "@/components/sites/spartanai-framer-website-021e3300/shared/ExpandButton";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";
import { SectionLabel } from "@/components/sites/spartanai-framer-website-021e3300/shared/SectionLabel";
import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";

const STEPS = [
  {
    num: "// 01",
    title: "Comprehensive Strategic Audit",
    tag: "Audit",
    body: "We perform a deep-layer analysis of your current technical stack and fragmented data silos to identify high-impact AI opportunities that align with your core business objectives and ROI targets.",
  },
  {
    num: "// 02",
    title: "Custom Architecture Design",
    tag: "Design",
    body: "Our engineers architect bespoke neural model topologies and advanced RAG pipelines, ensuring every piece of the infrastructure is tailored to your unique data security needs and operational logic.",
  },
  {
    num: "// 03",
    title: "Rapid Prototype Development",
    tag: "Build",
    body: "We transition from blueprints to functional MVPs within weeks, utilizing iterative sprints to validate model performance, optimize token latency, and refine the end-user interaction experience.",
  },
  {
    num: "// 04",
    title: "Enterprise Scale Deployment",
    tag: "Scale",
    body: "We harden the validated system for full-scale production, ensuring seamless integration across your enterprise with robust monitoring, dedicated compute clusters, and strict SOC2 compliance layers.",
  },
] as const;

type Step = (typeof STEPS)[number];

const EASE = "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";
const NUM = "shrink-0 whitespace-pre text-[14px] leading-[21px] font-light tracking-[0.28px] text-white/40";
const TITLE = "text-[18px] leading-[19.8px] font-medium tracking-[-0.72px] text-white";
const BODY = "text-[15px] leading-[22.5px] font-light tracking-[0.3px] text-white";

/** Height-animating wrapper (grid-rows 0fr ↔ 1fr) with content fade. */
function Collapse({ open, children, className }: { open: boolean; children: ReactNode; className?: string }) {
  return (
    <div
      className={cn("grid transition-[grid-template-rows,opacity]", EASE, open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0", className)}
      aria-hidden={!open}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

function AccordionItem({ step, open, onSelect, id }: { step: Step; open: boolean; onSelect: () => void; id: string }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-controls={id}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-[20px] p-[30px] text-left outline-none transition-[background-color,box-shadow]",
        "focus-visible:ring-1 focus-visible:ring-white/40",
        EASE,
        open
          ? "bg-white/[0.04] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]"
          : "bg-white/0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",
      )}
    >
      {/* Phone (<810): open variant stacks [num … tag] / title / body; closed variant = num + title row. */}
      <div className="tablet:hidden">
        <div className={cn("flex items-center", open ? "justify-between" : "gap-[30px]")}>
          <p className={NUM}>{step.num}</p>
          {open ? (
            <span className="flex shrink-0 items-center rounded-full bg-white px-3 py-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]">
              <span className="whitespace-pre text-[12px] leading-[16.8px] font-light tracking-[0.12px] text-sp-ink">{step.tag}</span>
            </span>
          ) : (
            <p className={cn(TITLE, "min-w-0 flex-1")}>{step.title}</p>
          )}
        </div>
        <Collapse open={open}>
          <div className="flex flex-col gap-4 pt-5">
            <p className={TITLE}>{step.title}</p>
            <p className={BODY}>{step.body}</p>
          </div>
        </Collapse>
      </div>

      {/* Tablet / desktop: num | [title … tag] / body */}
      <div className="hidden items-start gap-[30px] tablet:flex">
        <p className={NUM}>{step.num}</p>
        <div className="flex min-w-0 flex-1 flex-col" id={id}>
          <div className={cn("flex items-start gap-[10px] transition-[height]", EASE, open ? "h-6" : "h-[21px]")}>
            <p className={cn(TITLE, "min-w-0 flex-1")}>{step.title}</p>
            <span
              className={cn(
                "flex shrink-0 items-center rounded-full bg-white px-3 py-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] transition-opacity",
                EASE,
                open ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <span className="whitespace-pre font-sp-geist text-[10px] leading-4 uppercase text-sp-ink">{step.tag}</span>
            </span>
          </div>
          <Collapse open={open}>
            <p className={cn(BODY, "max-w-[600px] pt-5")}>{step.body}</p>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex w-full flex-col items-start gap-[50px]">
      <FadeIn className="w-full">
        <SectionLabel label="OUR PROCESS" order="label-first" color="#fff" lineColor="rgba(255,255,255,0.1)" />
      </FadeIn>

      <FadeIn className="w-full max-w-[800px]" delay={0.05}>
        <h2
          className={cn(
            "text-[35px] leading-[38.5px] font-medium tracking-[-1.4px] text-white",
            "tablet:text-[43px] tablet:leading-[47.3px] tablet:tracking-[-1.72px]",
            "desktop:max-w-[580px] desktop:text-[54px] desktop:leading-[59.4px] desktop:tracking-[-2.16px]",
          )}
        >
          From raw data to refined intelligence. Our iterative deployment cycle.
        </h2>
      </FadeIn>

      <div className="flex w-full flex-col items-stretch gap-[10px] desktop:flex-row desktop:items-center">
        {/* Illustration card */}
        <FadeIn className="relative flex h-[400px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[20px] p-[30px] desktop:h-[445px] desktop:w-[400px]">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.17]">
            <Image src={spImg("QRyW2z7jtn8Iu8Ohz7dYmwxFJo.png")} alt="" fill sizes="(min-width: 1200px) 400px, 100vw" className="object-cover" />
          </div>
          <div
            className="sp-motion relative z-[2] h-[300px] w-full max-w-[300px]"
            style={{ animation: "sp-bob 4s ease-in-out infinite" }}
          >
            <Image src={spImg("liXydHdt7Kdt6VKUzzjSZwFJ4FA.png")} alt="" fill sizes="300px" className="object-cover" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[3] rounded-[20px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" />
        </FadeIn>

        {/* Accordion (click-driven, single open) */}
        <FadeIn className="flex min-w-0 flex-1 flex-col gap-[10px]" delay={0.1}>
          {STEPS.map((step, i) => (
            <AccordionItem key={step.num} id={`sp-process-${i}`} step={step} open={active === i} onSelect={() => setActive(i)} />
          ))}
        </FadeIn>
      </div>

      {/* CTA row */}
      <FadeIn className="flex w-full flex-col items-start gap-10 desktop:h-[65px] desktop:flex-row desktop:items-center desktop:justify-between desktop:gap-[10px]">
        <p className="w-full max-w-[600px] font-sp-geist text-[12px] leading-[20.4px] font-extralight uppercase text-white">
          WE DON&apos;T JUST SHIP CODE; WE SHIP COMPETITIVE ADVANTAGES. EVERY STEP IS DESIGNED TO ENSURE YOUR AI INFRASTRUCTURE IS FUTURE-PROOF AND SCALABLE.
        </p>
        <ExpandButton label="Build Now" size="md" tone="coal" className="w-[232px] justify-center" />
      </FadeIn>
    </div>
  );
}
