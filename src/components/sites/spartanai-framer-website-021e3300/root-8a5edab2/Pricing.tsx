"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnnouncementTicker } from "@/components/sites/spartanai-framer-website-021e3300/shared/AnnouncementTicker";
import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";
import { BigMarquee } from "@/components/sites/spartanai-framer-website-021e3300/shared/BigMarquee";
import { ExpandButton } from "@/components/sites/spartanai-framer-website-021e3300/shared/ExpandButton";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";

type Billing = "monthly" | "annually";

type Plan = {
  name: string;
  monthly: string;
  annually: string;
  tagline: string;
  features: string[];
  dark?: boolean;
  /** Corner radii of the card per breakpoint (phone stack / tablet 2×2 / desktop row). */
  radius: string;
};

const CTA_HREF = "https://contra.com/sirdelani/work?r=sirdelani";
const WAVES = spImg("lu9xdgbj7zB5GkewV6UCW9Y68.jpg");
const WAVES_ALT = "a close up of a white wall with wavy lines";

const PLANS: Plan[] = [
  {
    name: "Core",
    monthly: "$618",
    annually: "$495",
    tagline: "Automate your repetitive tasks.",
    features: ["3 Automation Flows", "Standard RAG Support", "1 Admin Seat", "Discord Support"],
    radius: "rounded-[20px_20px_0_0] tablet:rounded-[20px_0_0_0] desktop:rounded-[20px_0_0_20px]",
  },
  {
    name: "Growth",
    monthly: "$1,570",
    annually: "$1,250",
    tagline: "Advanced agentic workflows.",
    features: ["10 Automation Flows", "Vector DB Hosting", "5 Admin Seats", "Priority Email"],
    radius: "rounded-none tablet:rounded-[0_20px_0_0] desktop:rounded-none",
  },
  {
    name: "Pro",
    monthly: "$3,650",
    annually: "$2,900",
    tagline: "Custom neural architecture.",
    features: ["Unlimited Flows", "Custom Fine-Tuning", "15 Admin Seats", "24/7 Slack Connect"],
    dark: true,
    radius: "rounded-none tablet:rounded-[0_0_0_20px] desktop:rounded-none",
  },
  {
    name: "Scale",
    monthly: "$9,380",
    annually: "$7,500",
    tagline: "Enterprise infrastructure.",
    features: ["Full Neural Stack", "On-Premise LLMs", "Unlimited Seats", "Dedicated Engineer"],
    radius: "rounded-[0_0_20px_20px] tablet:rounded-[0_0_20px_0] desktop:rounded-[0_20px_20px_0]",
  },
];

const BODY_14 = "text-[14px] font-light leading-[21px] tracking-[0.28px]";

function CheckIcon() {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" focusable="false" className="block size-4 fill-white">
      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}

function BillingToggle({ billing, onChange }: { billing: Billing; onChange: (b: Billing) => void }) {
  const annual = billing === "annually";
  return (
    <div className="absolute top-[-74px] left-0 z-[1] flex h-[22px] items-center justify-center gap-4 desktop:top-[-84px]">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={cn("cursor-pointer whitespace-pre text-sp-ink", BODY_14)}
      >
        Monthly
      </button>
      <button
        type="button"
        role="switch"
        aria-checked={annual}
        aria-label="Bill annually"
        onClick={() => onChange(annual ? "monthly" : "annually")}
        className="relative h-[22px] w-[50px] cursor-pointer rounded-[100px] shadow-[inset_0_0_0_1px_rgba(26,26,26,0.2)]"
      >
        <span
          className={cn(
            "absolute top-[-3px] bottom-[-3px] flex w-[29px] items-center justify-center overflow-hidden rounded-full bg-sp-ink",
            "transition-[left] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)]",
            annual ? "left-[21.0156px]" : "left-0",
          )}
        >
          <CheckIcon />
        </span>
      </button>
      <button
        type="button"
        onClick={() => onChange("annually")}
        className="flex cursor-pointer items-center justify-center gap-[10px] overflow-hidden"
      >
        <span className={cn("whitespace-pre text-sp-ink", BODY_14)}>Annually</span>
        <span className="whitespace-pre text-[12px] font-light leading-[16.8px] tracking-[0.12px] text-[rgba(26,26,26,0.6)]">
          (Save 20%)
        </span>
      </button>
    </div>
  );
}

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const dark = !!plan.dark;
  const ink = dark ? "text-white" : "text-sp-ink";
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-start justify-center overflow-clip bg-white",
        plan.radius,
      )}
    >
      {/* Top block: name + price */}
      <div className="relative z-[2] flex w-full flex-col items-start justify-center gap-[30px] py-[30px] pl-6">
        <h6
          className={cn(
            "whitespace-pre text-[28px] font-semibold leading-[33.6px] desktop:text-[30px] desktop:leading-[36px]",
            ink,
          )}
        >
          {plan.name}
        </h6>
        <div className="flex flex-col items-start justify-center gap-[10px]">
          <div className="relative">
            <h2
              className={cn(
                "whitespace-pre text-[35px] font-light leading-[38.5px] tracking-[-1.4px]",
                "tablet:text-[43px] tablet:leading-[47.3px] tablet:tracking-[-1.72px]",
                "desktop:text-[54px] desktop:leading-[59.4px] desktop:tracking-[-2.16px]",
                ink,
              )}
            >
              {billing === "annually" ? plan.annually : plan.monthly}
            </h2>
            <p
              className={cn(
                "absolute left-[calc(100%+7px)] z-[1] whitespace-pre",
                "top-[12.98px] tablet:top-[18.34px] desktop:top-[25.73px]",
                BODY_14,
                dark ? "text-white" : "text-[rgba(26,26,26,0.6)]",
              )}
            >
              /mo
            </p>
          </div>
          <p className={cn("relative z-[1] whitespace-pre", BODY_14, ink)}>
            {billing === "annually" ? "USD Billed Annually" : "USD Billed Monthly"}
          </p>
        </div>
      </div>

      {/* Middle block: tagline + CTA (grey panel stops 20px above the bottom so the button overhangs) */}
      <div className="relative z-[2] flex w-full flex-col items-start justify-center gap-[25px] pt-5 pr-5 pl-6">
        <div
          aria-hidden="true"
          className={cn(
            "absolute top-0 right-0 bottom-5 left-0 shadow-[inset_1px_1px_0_0_rgba(26,26,26,0.06),inset_0_-1px_0_0_rgba(26,26,26,0.06)]",
            dark ? "bg-[rgb(41,40,40)]" : "bg-sp-mist",
          )}
        />
        <p
          className={cn(
            "relative z-[4] w-[170px] text-[16px] font-normal leading-[24px]",
            dark ? "text-[rgba(255,255,255,0.8)]" : "text-sp-ink",
          )}
        >
          {plan.tagline}
        </p>
        <div className="relative z-[4]">
          {dark ? (
            <ExpandButton label="Get started" href={CTA_HREF} external size="sm" tone="white" borderColor="rgba(26, 26, 26, 0.1)" />
          ) : (
            <ExpandButton label="Get started" href={CTA_HREF} external size="sm" tone="coal" borderColor="rgba(255, 255, 255, 0.2)" />
          )}
        </div>
      </div>

      {/* Features block */}
      <div
        className={cn(
          "relative flex w-full flex-col items-start justify-center gap-[30px] pt-[46px] pr-[30px] pb-10 pl-6",
          dark && "z-[3]",
        )}
      >
        <ul className="flex w-full flex-col items-start justify-center gap-[10px]">
          {plan.features.map((f) => (
            <li key={f} className={cn("relative z-[1] w-full", BODY_14, ink)}>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Wave image: faded + masked on light cards, inverted full-bleed on the dark card */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-[1] overflow-clip",
          dark
            ? "invert"
            : "opacity-[0.29] [mask-image:linear-gradient(148deg,rgba(0,0,0,0)_0%,#000_39.9599%)]",
        )}
      >
        <Image
          src={WAVES}
          alt={WAVES_ALT}
          fill
          sizes="(min-width: 1200px) 340px, (min-width: 810px) 460px, 350px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("annually");

  return (
    <section
      id="pricing"
      className="relative z-[4] flex w-full flex-col items-center justify-center overflow-clip bg-white"
    >
      {/* Header */}
      <div className="relative z-[2] flex w-full flex-col items-start gap-5 pt-[120px] pb-[110px] tablet:pb-[120px] desktop:pt-[150px] desktop:pb-[60px]">
        <div className="relative flex w-full flex-col items-center gap-10">
          <BigMarquee title="Pricing" />
          <div className="relative flex w-full flex-col items-start px-5 tablet:px-10 desktop:h-[72px] desktop:flex-row desktop:items-end">
            <div className="hidden desktop:block desktop:flex-1" />
            <div className="flex w-full flex-col items-start desktop:flex-1">
              <p className="w-full text-[16px] font-light leading-[24px] tracking-[0.32px] text-sp-ink tablet:w-[500px] desktop:w-[380px]">
                Flexible intelligence tiers designed to scale alongside your business. No hidden costs, just
                high-performance results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans + ticker */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-[120px] pb-10 desktop:gap-[180px]">
        <div className="relative z-10 w-full px-5 tablet:px-10">
          <div className="relative grid grid-cols-1 gap-px rounded-[21px] bg-[rgba(26,26,26,0.1)] p-px grayscale tablet:grid-cols-2 desktop:grid-cols-4">
            {PLANS.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1} className="relative">
                <PlanCard plan={plan} billing={billing} />
              </FadeIn>
            ))}
            <BillingToggle billing={billing} onChange={setBilling} />
          </div>
        </div>
        <div className="relative h-0 w-full">
          <div className="absolute top-0 right-0 left-0">
            <AnnouncementTicker />
          </div>
        </div>
      </div>
    </section>
  );
}
