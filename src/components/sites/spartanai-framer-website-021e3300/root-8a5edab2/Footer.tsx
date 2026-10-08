"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import type { FooterContent, LinkContent } from "@/content/schema";
import { cn } from "@/lib/utils";
import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";
import { LogoPill } from "@/components/sites/spartanai-framer-website-021e3300/shared/LogoPill";
import { PixelArrow } from "@/components/sites/spartanai-framer-website-021e3300/shared/PixelArrow";

const FOREST = spImg("v2cZIMtgjEII7EpDnUDGGgCyuiQ.png");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FooterColumn = FooterContent["columns"][number];
type Social = FooterContent["socials"][number];

/** "MEGANODE" wordmark, fitted to the original 1036×280 wordmark box. */
function Wordmark() {
  return (
    <svg viewBox="0 0 1036 280" aria-hidden="true" focusable="false" className="block size-full fill-white">
      <text
        x="0"
        y="226"
        textLength="1036"
        lengthAdjust="spacingAndGlyphs"
        className="font-sp-display"
        fontSize="260"
        fontWeight="700"
      >
        MEGANODE
      </text>
    </svg>
  );
}

function SocialSvg({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" focusable="false" className="block size-5 shrink-0 fill-white">
      <path d={d} />
    </svg>
  );
}

const SOCIAL_ICONS: Record<Social["platform"], ReactNode> = {
  x: (
    <SocialSvg d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" />
  ),
  linkedin: (
    <SocialSvg d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
  ),
  youtube: (
    <SocialSvg d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
  ),
  instagram: (
    <SocialSvg d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
  ),
};

function isExternal(href: string) {
  return href.startsWith("http");
}

/**
 * Framer "Menu" link: a 15×1 dash parked 35px left of the (clipped) link; on hover it
 * slides in at the start and the label shifts right by dash + gap (25px).
 */
function MenuLink({ label, href }: LinkContent) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group/menu relative flex cursor-pointer items-center overflow-clip py-[6px]"
    >
      <span
        aria-hidden="true"
        className="absolute top-[15.75px] left-[-35px] z-[1] h-px w-[15px] bg-white/50 transition-transform duration-300 ease-out group-hover/menu:translate-x-[35px]"
      />
      <span className="whitespace-pre text-[14px] leading-[21px] font-light tracking-[0.28px] text-white transition-transform duration-300 ease-out group-hover/menu:translate-x-[25px]">
        {label}
      </span>
    </a>
  );
}

function LinkColumn({ title, links }: FooterColumn) {
  return (
    <div className="flex w-[175px] flex-col items-start gap-[9px] border-l border-white/10 pl-4 tablet:w-[200px] tablet:gap-5">
      <p className="font-sp-geist text-[16px] leading-[22.4px] font-medium whitespace-pre text-white">{title}</p>
      <div className="flex w-full flex-col items-start">
        {links.map((l) => (
          <MenuLink key={l.label} {...l} />
        ))}
      </div>
    </div>
  );
}

function Newsletter({ copy }: { copy: FooterContent["newsletter"] }) {
  const [email, setEmail] = useState("");
  const valid = EMAIL_RE.test(email);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid) setEmail("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex w-full items-start gap-2 overflow-hidden rounded-[17px] bg-white/20 p-[6px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] tablet:w-[400px]"
    >
      <label className="flex min-w-0 flex-1 flex-col">
        <span className="sr-only">{copy.emailLabel}</span>
        <span className="flex h-10 items-center rounded-[10px] p-3">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.placeholder}
            autoComplete="email"
            className="w-full min-w-0 bg-transparent font-sp-inter text-[16px] leading-[19.2px] text-white outline-none placeholder:text-white/50"
          />
        </span>
      </label>
      <button
        type="submit"
        disabled={!valid}
        className={cn(
          "relative flex h-[42px] w-[150px] shrink-0 cursor-pointer items-center justify-center rounded-[10px] transition-opacity duration-200",
          valid ? "opacity-100" : "cursor-default opacity-70",
        )}
      >
        <span className="relative flex size-full items-center justify-center gap-[6px] overflow-clip rounded-[12px] bg-white py-[3px] pr-[10px] pl-[3px] shadow-[inset_0_0_0_1px_rgba(26,26,26,0.1)]">
          <span className="flex h-9 w-10 shrink-0 items-center justify-center overflow-clip rounded-[10px] bg-sp-ink">
            <PixelArrow variant="clip" color="#fff" />
          </span>
          <span className="flex h-[29px] w-[91px] items-center justify-center rounded-[14px]">
            <span className="text-[14px] leading-[19.6px] tracking-[0.28px] whitespace-pre text-sp-ink">
              {copy.submit}
            </span>
          </span>
        </span>
      </button>
    </form>
  );
}

export function Footer({ content, homeLabel }: { content: FooterContent; homeLabel: string }) {
  return (
    <footer className="fixed inset-0 z-[1]">
      <div className="relative flex size-full flex-col items-start justify-end overflow-hidden bg-sp-ink px-5 pt-[130px] pb-10 tablet:bg-white tablet:px-10 tablet:pt-[160px] desktop:pt-[170px]">
        {/* Background forest photo */}
        <div className="absolute inset-y-0 left-0 right-[-1785px] z-[1] overflow-clip [mask-image:linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_57.8143%,rgb(0,0,0)_100%)] tablet:right-0 tablet:bottom-[-240px] tablet:[mask-image:linear-gradient(0deg,rgba(0,0,0,0)_8.63246%,rgb(0,0,0)_29.4341%)]">
          <Image src={FOREST} alt="" fill sizes="(max-width: 809px) 2175px, 100vw" className="object-cover object-top" />
        </div>

        {/* Main content */}
        <div className="relative z-[2] flex w-full flex-col items-start gap-10 tablet:flex-row tablet:gap-0 tablet:pb-[250px]">
          {/* Left: brand, newsletter, socials */}
          <div className="flex w-full flex-col items-start gap-5 tablet:w-1/2 tablet:gap-[30px] tablet:pr-[50px] desktop:pr-[70px]">
            <div className="flex w-full flex-col items-start justify-center gap-3 tablet:gap-[15px]">
              <a href="#" aria-label={homeLabel} className="flex cursor-pointer flex-col items-start gap-[13px] tablet:gap-4">
                <LogoPill width={50} height={28} border={6} color="#fff" className="tablet:hidden" />
                <LogoPill width={60} height={34} border={6} color="#fff" className="hidden tablet:block" />
                <span className="relative block h-[34px] w-[125px] tablet:h-[42px] tablet:w-[155px]">
                  <Wordmark />
                </span>
              </a>
              <div className="flex w-full flex-col items-start justify-center gap-5">
                <p className="w-full text-[15px] leading-[22.5px] font-light tracking-[0.3px] text-white tablet:w-[400px]">
                  {content.description}
                </p>
                <Newsletter copy={content.newsletter} />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-[10px]">
              <p className="font-sp-geist text-[12px] leading-[19.2px] font-light text-white uppercase">{content.followLabel}</p>
              <div className="flex items-center gap-[10px]">
                {content.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-[34px] cursor-pointer items-center justify-center overflow-clip rounded-[6px] bg-white/10 p-[7px] transition-colors duration-200 hover:bg-white/20"
                  >
                    {SOCIAL_ICONS[s.platform]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: link columns */}
          <div className="grid w-full grid-cols-[175px_175px] justify-center gap-x-0 gap-y-6 pb-[67px] tablet:w-1/2 tablet:grid-cols-[200px_200px] tablet:gap-x-[60px] tablet:gap-y-10 tablet:pb-0 desktop:flex desktop:items-start desktop:justify-start desktop:gap-0 desktop:pr-20">
            {content.columns.map((c) => (
              <LinkColumn key={c.title} {...c} />
            ))}
          </div>
        </div>

        {/* Giant bottom wordmark, cut off by the viewport */}
        <div className="absolute top-[98%] right-[-20px] left-[-14px] z-[2] aspect-[1036/280] -translate-y-1/2 tablet:top-[96%] desktop:top-[92%]">
          <Wordmark />
        </div>
      </div>
    </footer>
  );
}
