"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";

const YOUTUBE_SRC =
  "https://www.youtube.com/embed/8AHPXm9Y6mI?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1";

/** Phosphor "Timer" (regular) — svg10 in the spec. */
function StopwatchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      aria-hidden="true"
      className="block size-full shrink-0 fill-white"
    >
      <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z" />
    </svg>
  );
}

/** svg11 — upward triangle, rotated 90° by its wrapper so it points right. */
function PlayTriangle() {
  return (
    <svg viewBox="0 0 38 32" preserveAspectRatio="none" aria-hidden="true" className="block size-full overflow-visible">
      <path d="M 19 4 L 35.454 28 L 2.546 28 Z" fill="rgb(255, 255, 255)" />
    </svg>
  );
}

export function VideoShowcase() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="relative flex flex-col items-start justify-center gap-5">
      <div className="relative z-[4] w-full">
        <div className="relative flex h-[95vh] w-full items-center justify-center overflow-clip bg-sp-ink">
          {/* Background photo */}
          <div className="absolute inset-0 z-[6] overflow-clip rounded-b-[20px]">
            <Image
              src={spImg("Y43VBCJU98vH9ESfLTOmhYvVKjY.jpg")}
              alt="activity tracker reading 11 36 Mo 21"
              fill
              sizes="100vw"
              className="rounded-b-[20px] object-cover"
            />
          </div>

          {/* Bottom strip behind the rounded corners */}
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-[5] h-[30px] bg-sp-ink" />

          {/* Top white strip (continuation of the previous section's rounded bottom) */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-[12] h-5 overflow-clip rounded-b-[20px] bg-white"
          />

          {/* Content */}
          <div className="absolute inset-0 z-[8] flex flex-col items-center justify-between overflow-clip px-5 py-[100px] tablet:px-10">
            {/* Top row */}
            <div className="relative flex w-full flex-col-reverse items-start justify-start gap-[30px] overflow-clip tablet:flex-row tablet:justify-between tablet:gap-0">
              <p className="w-full whitespace-pre-wrap text-[16px] font-light leading-[24px] tracking-[0.32px] text-white tablet:w-[380px]">
                Exploring the intersection of human creativity and machine logic to redefine what&apos;s possible in the
                digital age.
              </p>
              <div className="relative flex h-9 shrink-0 items-center justify-center gap-1.5 overflow-clip rounded-[100px] bg-[rgba(255,255,255,0.06)] py-1.5 pl-1.5 pr-3.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] backdrop-blur-[10px]">
                <span className="relative block size-6">
                  <StopwatchIcon />
                </span>
                <p className="whitespace-pre text-[14px] font-normal leading-[19.6px] tracking-[0.28px] text-white">
                  2mins watch
                </p>
              </div>
            </div>

            {/* Bottom row */}
            <div className="relative flex w-full flex-col items-start justify-start gap-[30px] overflow-clip tablet:flex-row tablet:items-end tablet:justify-between tablet:gap-0">
              <h2 className="w-[300px] whitespace-pre-wrap text-[35px] font-medium leading-[38.5px] tracking-[-1.4px] text-white tablet:w-[400px] tablet:text-[43px] tablet:leading-[47.3px] tablet:tracking-[-1.72px] desktop:text-[54px] desktop:leading-[59.4px] desktop:tracking-[-2.16px]">
                Intelligence by Design.
              </h2>
              <span
                aria-hidden="true"
                className="relative block h-[49px] w-[86px] shrink-0 rounded-[100px] shadow-[inset_0_0_0_11px_rgb(255,255,255)] tablet:h-[77px] tablet:w-[136px] tablet:shadow-[inset_0_0_0_16px_rgb(255,255,255)]"
              />
            </div>
          </div>

          {/* Play button */}
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setOpen(true)}
            className="group absolute left-1/2 top-[calc(50%-79.5px)] z-10 size-[116px] -translate-x-1/2 cursor-pointer tablet:top-[calc(50%-58px)]"
          >
            <span className="absolute left-px top-0 flex size-[115px] items-center justify-center">
              {/* Ring */}
              <span
                aria-hidden="true"
                className="absolute inset-0 z-[1] rounded-full shadow-[inset_0_0_0_1px_rgb(255,255,255)] transition-[transform,opacity] duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:scale-[0.0087] group-hover:opacity-0 group-focus-visible:scale-[0.0087] group-focus-visible:opacity-0"
              />
              {/* Triangle (38×32 visual box, grows to 101×85 on hover) */}
              <span
                aria-hidden="true"
                className="absolute left-[58.64px] top-[57.5px] flex h-8 w-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-[width,height] duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:h-[85px] group-hover:w-[101px] group-focus-visible:h-[85px] group-focus-visible:w-[101px]"
              >
                <span className="relative block h-[118.75%] w-[84.21%] shrink-0 rotate-90">
                  <PlayTriangle />
                </span>
              </span>
            </span>
          </button>

          {/* Video overlay */}
          {open ? (
            <div className="absolute inset-0 z-[11] overflow-clip rounded-b-[20px] bg-black">
              <iframe
                src={YOUTUBE_SRC}
                title="Spartan AI showreel"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full border-0"
              />
              <button
                type="button"
                aria-label="Close video"
                onClick={() => setOpen(false)}
                className="absolute right-[40px] top-[100px] z-[1] block size-[56px] cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-[2px] w-[50px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-[2px] w-[50px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white"
                />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
