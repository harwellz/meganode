"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExpandButton } from "@/components/sites/spartanai-framer-website-021e3300/shared/ExpandButton";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";
import { SectionLabel } from "@/components/sites/spartanai-framer-website-021e3300/shared/SectionLabel";

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do you ensure our data remains secure?",
    a: "We utilize SOC2-compliant local vector databases and on-premise LLM hosting to ensure your proprietary data never leaves your infrastructure.",
  },
  {
    q: "What is the typical deployment timeline?",
    a: "Initial neural audits take 1 week, followed by a 4-week rapid prototyping phase before full-scale production deployment.",
  },
  {
    q: "Can we integrate with our existing CRM?",
    a: "Yes, our cognitive pipelines are built with native API connectors for Salesforce, HubSpot, and custom enterprise ERP systems.",
  },
  {
    q: "Do you provide model fine-tuning?",
    a: "Absolutely. We offer bespoke fine-tuning services to align open-source models (like Llama 3) with your specific industry terminology and logic.",
  },
  {
    q: "How do you calculate ROI for automation?",
    a: "We track \"Inference-to-Impact\" metrics, measuring hours saved and accuracy gains against your previous baseline manual workflows.",
  },
  {
    q: "Do we own the custom code you build?",
    a: "Yes. All custom neural architectures and integration code developed for your firm are 100% owned by you upon project completion.",
  },
  {
    q: "What models do you specialize in?",
    a: "We are model-agnostic, specializing in OpenAI, Anthropic, and Mistral, as well as local deployments of high-performance open-source LLMs.",
  },
];

/** Phosphor "X" (bold) — shown as × when open, rotated 45° into a + when closed. */
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      aria-hidden="true"
      className={cn("block size-4 shrink-0 fill-white", className)}
    >
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
    </svg>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      className={cn(
        "relative flex w-full cursor-pointer flex-col items-start overflow-clip rounded-[20px] bg-sp-ink p-5 outline-none",
        "shadow-[rgba(0,0,0,0)_0px_8px_13px_3px] transition-[transform,box-shadow] duration-300 ease-out",
        "hover:z-[1] hover:scale-[1.05] hover:shadow-[rgba(0,0,0,0.25)_0px_16px_13px_-5px]",
        "focus-visible:ring-2 focus-visible:ring-white/40",
      )}
    >
      <div className="flex w-full items-center gap-[10px]">
        <h4 className="min-w-0 flex-1 text-left text-[18px] leading-[25.2px] font-medium tracking-[-0.36px] text-white opacity-90 desktop:text-[20px] desktop:leading-[28px] desktop:tracking-[-0.4px]">
          {q}
        </h4>
        <CloseIcon
          className={cn(
            "transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "rotate-0" : "rotate-45",
          )}
        />
      </div>
      <div
        className={cn(
          "grid w-full transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={cn(
              "pt-4 text-left text-[16px] leading-[24px] font-light tracking-[0.32px] text-white/80 transition-opacity duration-[400ms]",
              open ? "opacity-100 delay-100" : "opacity-0",
            )}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex w-full flex-col items-center pt-[140px] pb-[30px] desktop:pt-[180px]">
      <div className="flex w-full flex-col gap-[50px] desktop:flex-row desktop:items-stretch desktop:gap-0">
        {/* Left: label + intro, heading + CTA */}
        <div className="flex w-full flex-col items-start justify-center gap-[30px] desktop:w-1/2 desktop:justify-between desktop:gap-0 desktop:pr-[70px]">
          <FadeIn className="flex w-full flex-col items-start gap-[50px] desktop:w-[500px]">
            <SectionLabel label="COMMON QUERIES" order="pill-first" lineColor="rgba(26, 26, 26, 0.2)" />
            <p className="w-full text-left text-[16px] leading-[24px] font-light tracking-[0.32px] text-sp-ink tablet:max-w-[600px]">
              Find answers to technical specifications, deployment timelines, and our data security protocols.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="flex w-full flex-col items-start gap-10">
            <h2 className="w-full text-left text-[35px] leading-[38.5px] font-medium tracking-[-1.4px] text-sp-ink tablet:max-w-[600px] tablet:text-[43px] tablet:leading-[47.3px] tablet:tracking-[-1.72px] desktop:text-[54px] desktop:leading-[59.4px] desktop:tracking-[-2.16px]">
              Everything you need to know about our AI.
            </h2>
            <div className="relative z-[4]">
              <ExpandButton label="Contact Support" href="#" size="md" tone="ink" />
            </div>
          </FadeIn>
        </div>

        {/* Right: accordion */}
        <FadeIn delay={0.15} className="flex w-full flex-col gap-[6px] desktop:w-1/2">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
            />
          ))}
        </FadeIn>
      </div>
    </div>
  );
}
