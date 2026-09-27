"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnnouncementTicker } from "@/components/sites/spartanai-framer-website-021e3300/shared/AnnouncementTicker";
import { BigMarquee } from "@/components/sites/spartanai-framer-website-021e3300/shared/BigMarquee";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";
import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";

const CARD_HREF = "https://contra.com/sirdelani/work?r=sirdelani";

type Testimonial = {
  avatar: string;
  avatarAlt: string;
  logo: string;
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    avatar: "w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg",
    avatarAlt: "A cartoon character with a weird haircut",
    logo: "3EwtMm1CTn3V13Xu2ufZVUnW4.png",
    quote:
      "The custom agentic workflows they built reduced our manual data entry by 90%, saving us hundreds of hours weekly.",
    name: "MARCUS CHENG",
    role: "Head of AI, Aetna",
  },
  {
    avatar: "rLkyXpp1TSaADDj0EYjy9c8uw.jpg",
    avatarAlt: "A glass sculpture of a woman's head and shoulders",
    logo: "yV2zGDqTwUzGafOnvA53MLQkM.png",
    quote:
      "Their team didn't just provide tools; they provided a roadmap for AI integration that actually makes sense for ROI.",
    name: "DAVID ROSSI",
    role: "Lead Dev, Cigna",
  },
  {
    avatar: "IIK9uqdpvVqpPgAHuhf8s9r4Ee4.jpg",
    avatarAlt: "man in white crew neck shirt wearing black sunglasses",
    logo: "RlGLod5QkyznR4SBy9PQw3raa80.png",
    quote:
      "A game-changer for our R&D. The neural infrastructure is robust, secure, and perfectly tailored to our niche stack.",
    name: "SARAH JENKINS",
    role: "CTO, Anthem Group",
  },
  {
    avatar: "QHChEEbpWFuUCrhS6zqN5BK4Rr0.jpg",
    avatarAlt: "",
    logo: "qA80rXn5OyEhaPlYKJ8gIEE6Ds.png",
    quote:
      "Incredible technical depth. They handled our complex RAG implementation with ease and delivered ahead of schedule.",
    name: "ELENA VANCE",
    role: "VP Eng, UnitedHealth",
  },
];

/** Card width 285 + gap 16. */
const STEP = 301;
/** Number of repeated copies of the 4 cards in the track. */
const COPIES = 6;
/** Card index (in the repeated track) that sits at the carousel origin when idx = 0. */
const BASE = 8;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const DURATION_MS = 600;

function QuoteIcon() {
  const d =
    "M 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 9.5 C 8 10.052 7.552 10.5 7 10.5 L 4.5 10.5 C 4.224 10.5 4 10.724 4 11 L 4 12 C 4 13.105 4.895 14 6 14 L 7 14 C 7.552 14 8 14.448 8 15 L 8 17 C 8 17.552 7.552 18 7 18 L 6 18 C 2.686 18 0 15.314 0 12 L 0 1 C 0 0.448 0.448 0 1 0 Z";
  return (
    <svg
      role="presentation"
      viewBox="0 0 24 24"
      className="absolute left-[10px] top-[1.5px] z-0 size-6 -translate-y-1/2 overflow-hidden stroke-[rgba(26,26,26,0.2)] transition-[stroke] duration-300 group-hover:stroke-[rgba(255,255,255,0.2)]"
    >
      <path d={d} fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} transform="translate(14 3)" />
      <path d={d} fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} transform="translate(2 3)" />
    </svg>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <a
      href={CARD_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-[394px] w-[285px] shrink-0 cursor-default flex-col items-start justify-between overflow-clip rounded-[20px] bg-sp-mist p-[10px]"
    >
      {/* Dark hover overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] rounded-[20px] bg-sp-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header chip: avatar + company logo */}
      <div className="relative z-[2] flex h-11 items-center justify-center overflow-clip rounded-[100px] p-[6px] shadow-[inset_0_0_0_1px_rgba(26,26,26,0.1)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
        <div className="relative size-8 overflow-clip rounded-full">
          <Image src={spImg(t.avatar)} alt={t.avatarAlt} fill sizes="32px" className="rounded-full object-cover" />
        </div>
        <div className="relative h-6 w-20 opacity-[0.67] invert transition-[filter] duration-300 group-hover:invert-0">
          <Image src={spImg(t.logo)} alt="" fill sizes="80px" className="object-cover" />
        </div>
      </div>

      {/* Quote */}
      <div className="relative z-[2] flex w-[265px] items-center justify-center px-[10px] pb-[10px] pt-5">
        <p className="relative z-[2] w-full whitespace-pre-wrap text-[21px] leading-[25.2px] tracking-[-0.21px] text-sp-ink transition-colors duration-300 group-hover:text-white">
          {t.quote}
        </p>
        <QuoteIcon />
      </div>

      {/* Footer: rule + name + role */}
      <div className="relative z-[2] flex w-[265px] items-start gap-[10px] overflow-clip px-[10px] pb-5 pt-[10px]">
        <div className="h-[42px] w-[3px] shrink-0 rounded-[10px] bg-[rgba(26,26,26,0.1)] transition-colors duration-300 group-hover:bg-[rgba(255,255,255,0.1)]" />
        <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-1">
          <h5 className="font-sp-plex text-[13px] font-medium uppercase leading-[20.8px] text-sp-ink transition-colors duration-300 group-hover:text-white">
            {t.name}
          </h5>
          <p className="text-[12px] font-light leading-[16.8px] tracking-[0.12px] text-[rgba(26,26,26,0.7)] transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.7)]">
            {t.role}
          </p>
        </div>
      </div>
    </a>
  );
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [perStep, setPerStep] = useState(3);
  const busy = useRef(false);
  const fallback = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Phone (<810px) moves one card per click; tablet/desktop move three.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 810px)");
    const update = () => setPerStep(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(
    () => () => {
      if (fallback.current) clearTimeout(fallback.current);
    },
    [],
  );

  // After a slide finishes, jump (without animation) to the equivalent position in [0, 3].
  const settle = useCallback(() => {
    if (fallback.current) clearTimeout(fallback.current);
    fallback.current = null;
    busy.current = false;
    setAnimate(false);
    setIdx((i) => ((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const go = (dir: 1 | -1) => {
    if (busy.current) return;
    busy.current = true;
    setAnimate(true);
    setIdx((i) => i + dir * perStep);
    fallback.current = setTimeout(settle, DURATION_MS + 100);
  };

  const cards = Array.from({ length: COPIES }, (_, c) => TESTIMONIALS.map((t, i) => ({ t, key: `${c}-${i}` }))).flat();

  return (
    <section id="test-2" className="relative z-[4] flex w-full flex-col items-center justify-center overflow-clip bg-white">
      {/* Continues the dark section's rounded bottom */}
      <div className="absolute inset-x-0 top-0 z-[9] h-5 overflow-clip rounded-b-[20px] bg-sp-ink" />

      {/* Header */}
      <div className="relative z-[2] flex w-full flex-col items-start gap-5 pb-[120px] pt-[140px] desktop:pt-[170px]">
        <div className="flex w-full flex-col items-center gap-10">
          <BigMarquee title="Experiences" />

          <div className="relative flex w-full flex-col items-start justify-center px-5 tablet:px-10 desktop:flex-row desktop:items-center desktop:px-0">
            <div className="hidden h-px w-1/2 bg-[rgba(26,26,26,0.1)] desktop:block" />
            <div className="relative w-full tablet:w-[400px] desktop:w-1/2">
              <FadeIn>
                <p className="w-full whitespace-pre-wrap text-[16px] font-light leading-[24px] tracking-[0.32px] text-sp-ink desktop:w-[440px]">
                  Empowering global enterprises through bespoke neural architectures and autonomous agentic workflows.
                </p>
              </FadeIn>
              <div className="absolute left-0 top-[calc(100%+35px)] flex gap-[10px]">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={() => go(-1)}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-sp-ink text-white"
                >
                  <Chevron dir="left" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={() => go(1)}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-sp-ink text-white"
                >
                  <Chevron dir="right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel + ticker */}
      <div className="relative flex w-full flex-col items-center justify-center gap-[120px] pb-[30px] desktop:gap-[180px]">
        <div className="relative z-[2] w-full px-5 tablet:px-[30px]">
          <div className="relative h-[394px] w-full">
            <ul
              className="absolute left-0 top-0 flex items-center gap-4 desktop:left-1/2"
              style={{
                transform: `translateX(${-(BASE + idx) * STEP}px)`,
                transition: animate ? `transform ${DURATION_MS}ms ${EASE}` : "none",
              }}
              onTransitionEnd={(e) => {
                if (e.target === e.currentTarget && e.propertyName === "transform") settle();
              }}
            >
              {cards.map(({ t, key }) => (
                <li key={key} className="relative shrink-0">
                  <TestimonialCard t={t} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative h-0 w-full">
          <AnnouncementTicker className="absolute inset-x-0 top-0" />
        </div>
      </div>
    </section>
  );
}
