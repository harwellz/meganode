"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExpandButton } from "@/components/sites/spartanai-framer-website-021e3300/shared/ExpandButton";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";
import { LogoPill } from "@/components/sites/spartanai-framer-website-021e3300/shared/LogoPill";
import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";

type Member = { name: string; role: string; photo: string; quote: string };

const TEAM: Member[] = [
  {
    name: "SARAH JENKINS",
    role: "Head of Machine Learning",
    photo: "OrsgMbvM0AZiEvhgHFZUJM2g.png",
    quote:
      "Our focus remains on the ethical deployment of large-scale models. We don't just optimize for performance; we ensure every neural architecture we build is interpretable, secure, and ready for enterprise-grade scrutiny.",
  },
  {
    name: "MARCUS CHENG",
    role: "Principal Design Director",
    photo: "BbqpJjnldDFDulJFBarqs7wJpFk.png",
    quote:
      "AI shouldn't feel like a black box. My goal is to design intuitive interfaces that make complex data actionable, ensuring that the human-machine collaboration is seamless, visually stunning, and highly efficient for users.",
  },
  {
    name: "ELENA VANCE",
    role: "Lead Cognitive Scientist",
    photo: "8k7FcfFSjgocOslFu94p0ih1UY.png",
    quote:
      "We study the cognitive friction between AI output and human decision-making. By applying behavioral science to our agentic workflows, we create tools that naturally align with how your best employees actually think and work.",
  },
  {
    name: "DAVID ROSSI",
    role: "Infrastructure Architect",
    photo: "FnCj7jgTvcpKSt0CUVIqbyiS9o.png",
    quote:
      "Latency is the enemy of adoption. I architect the backbone of our solutions to ensure that even the most complex RAG systems deliver sub-second responses, maintaining 99.9% uptime across distributed global compute clusters.",
  },
];

function XIcon() {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" focusable="false" className="block size-full fill-white">
      <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" focusable="false" className="block size-full fill-white">
      <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "X", href: "https://x.com/sirdelani", Icon: XIcon },
  { label: "GitHub", href: "https://github.com", Icon: GithubIcon },
];

const CARD_RADIUS = "rounded-[0px_20px_20px]";

function TeamCard({ member, index }: { member: Member; index: number }) {
  const [active, setActive] = useState(false);

  return (
    <FadeIn delay={index * 0.1} className="relative w-full">
      <div
        className={cn("relative flex w-full cursor-default flex-col items-start gap-[10px] overflow-clip", CARD_RADIUS)}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => setActive((v) => !v)}
      >
        {/* Photo */}
        <div
          className={cn(
            "relative h-[432px] w-full shrink-0 overflow-clip tablet:h-[583px] desktop:h-[402px]",
            CARD_RADIUS,
          )}
        >
          <Image
            src={spImg(member.photo)}
            alt=""
            fill
            sizes="(min-width: 1200px) 330px, (min-width: 810px) 50vw, 100vw"
            className={cn("object-cover", CARD_RADIUS)}
          />
          <LogoPill
            width={36}
            height={20}
            border={4}
            color="rgba(255, 255, 255, 0.2)"
            className="absolute top-5 right-5"
          />
        </div>

        {/* Caption */}
        <div className="relative z-[1] flex w-full items-start gap-[10px] overflow-clip px-[10px] pt-[10px] pb-5">
          <div className="h-[42px] w-[3px] shrink-0 rounded-[10px] bg-[rgba(255,255,255,0.1)]" />
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
            <h5 className="font-sp-plex text-[13px] leading-[20.8px] font-medium text-white uppercase">{member.name}</h5>
            <p className="text-[12px] leading-[16.8px] font-light tracking-[0.12px] text-[rgba(255,255,255,0.5)]">
              {member.role}
            </p>
          </div>
        </div>

        {/* Hover "glass" card — slides in from the left and covers photo + caption */}
        <div
          aria-hidden={!active}
          className={cn(
            "absolute inset-0 z-[2] flex flex-col items-start justify-between overflow-clip bg-white pt-6 pr-5 pb-5 pl-5",
            "transition-[transform,opacity] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            CARD_RADIUS,
            active ? "pointer-events-auto translate-x-0 opacity-100" : "pointer-events-none -translate-x-[110%] opacity-0",
          )}
        >
          <div className="pointer-events-none absolute inset-0 z-[1] overflow-clip opacity-30 grayscale [mask-image:linear-gradient(0deg,rgb(0,0,0)_45.7225%,rgba(0,0,0,0)_100%)]">
            <Image
              src={spImg("ssKw1Uch7OIVz4Suw9U15iwfys.jpg")}
              alt="purple and green light gradient"
              fill
              sizes="(min-width: 1200px) 330px, (min-width: 810px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative z-[2] flex w-full flex-col items-start justify-center gap-8">
            <div className="flex w-full items-start justify-between">
              <div className="flex items-center gap-1">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    tabIndex={active ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                    className="flex size-7 cursor-pointer items-center justify-center overflow-clip rounded-full bg-sp-ink"
                  >
                    <span className="block size-[15px]">
                      <Icon />
                    </span>
                  </a>
                ))}
              </div>
              <LogoPill width={36} height={20} border={4} color="rgb(0, 0, 0)" />
            </div>
            <p className="text-[18px] leading-[25.2px] font-normal text-sp-ink">{member.quote}</p>
          </div>

          <div className="relative z-[2] flex w-full items-start gap-[10px] overflow-clip">
            <div className="h-[41px] w-[3px] shrink-0 rounded-[10px] bg-[rgba(0,0,0,0.1)]" />
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
              <p className="font-sp-plex text-[13px] leading-[20.8px] font-medium text-[rgba(0,0,0,0.81)] uppercase">
                {member.name}
              </p>
              <p className="font-sp-plex text-[11px] leading-[16.5px] font-normal tracking-[-0.33px] text-[rgba(0,0,0,0.7)]">
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function Team() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-[60px] desktop:gap-[50px]">
      {/* Statement + intro row */}
      <div className="relative flex w-full flex-col items-start justify-center gap-10 desktop:gap-[50px]">
        <FadeIn className="w-full desktop:max-w-[1200px]">
          <h6 className="text-left text-[64px] leading-[64px] font-medium tracking-[-2.56px] whitespace-pre-wrap text-white tablet:text-[80px] tablet:leading-[80px] tablet:tracking-[-3.2px] desktop:text-[100px] desktop:leading-[100px] desktop:tracking-[-4px]">
            We are a collective of engineers, designers, and researchers dedicated to the frontier of AI.
          </h6>
        </FadeIn>

        <div className="relative flex w-full flex-col items-start justify-center desktop:flex-row desktop:items-center">
          <div className="hidden h-px flex-1 desktop:block" />
          <FadeIn
            delay={0.1}
            className="flex w-full flex-col items-start justify-start gap-10 tablet:gap-[50px] desktop:flex-1 desktop:gap-10"
          >
            <p className="w-full text-left text-[16px] leading-[24px] font-light tracking-[0.32px] text-white tablet:max-w-[500px] desktop:max-w-[380px]">
              Bridging the gap between academic research and commercial deployment with precision engineering.
            </p>
            <div className="relative z-[4]">
              <ExpandButton label="Our Story" size="md" tone="coal" href="#" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Team grid */}
      <div className="grid w-full grid-cols-1 gap-[14px] tablet:grid-cols-2 desktop:grid-cols-4">
        {TEAM.map((m, i) => (
          <TeamCard key={m.name} member={m} index={i} />
        ))}
      </div>
    </div>
  );
}
