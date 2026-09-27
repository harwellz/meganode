"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExpandButton } from "@/components/sites/spartanai-framer-website-021e3300/shared/ExpandButton";
import { LogoPill } from "@/components/sites/spartanai-framer-website-021e3300/shared/LogoPill";

const LINKS = [
  { label: "Works", href: "#" },
  { label: "Services", href: "#capabilities" },
  { label: "Insights", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#" },
] as const;

/** Framer's 8-layer progressive blur (exact blur radii + mask bands from the live page). */
const BLUR_LAYERS = [
  { blur: "0.0390625px", mask: "rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 25%, rgba(0,0,0,0) 37.5%" },
  { blur: "0.078125px", mask: "rgba(0,0,0,0) 12.5%, rgb(0,0,0) 25%, rgb(0,0,0) 37.5%, rgba(0,0,0,0) 50%" },
  { blur: "0.15625px", mask: "rgba(0,0,0,0) 25%, rgb(0,0,0) 37.5%, rgb(0,0,0) 50%, rgba(0,0,0,0) 62.5%" },
  { blur: "0.3125px", mask: "rgba(0,0,0,0) 37.5%, rgb(0,0,0) 50%, rgb(0,0,0) 62.5%, rgba(0,0,0,0) 75%" },
  { blur: "0.625px", mask: "rgba(0,0,0,0) 50%, rgb(0,0,0) 62.5%, rgb(0,0,0) 75%, rgba(0,0,0,0) 87.5%" },
  { blur: "1.25px", mask: "rgba(0,0,0,0) 62.5%, rgb(0,0,0) 75%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%" },
  { blur: "2.5px", mask: "rgba(0,0,0,0) 75%, rgb(0,0,0) 87.5%, rgb(0,0,0) 100%" },
  { blur: "5px", mask: "rgba(0,0,0,0) 87.5%, rgb(0,0,0) 100%" },
];

const INNER_BORDER = "shadow-[inset_0_0_0_1px_rgba(26,26,26,0.1)]";

function ProgressiveBlur() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[7] h-[90px]">
      <div className="absolute inset-0 overflow-hidden">
        {BLUR_LAYERS.map((layer, i) => {
          const mask = `linear-gradient(to top, ${layer.mask})`;
          return (
            <div
              key={layer.blur}
              className="absolute inset-0"
              style={{
                zIndex: i + 1,
                backdropFilter: `blur(${layer.blur})`,
                WebkitBackdropFilter: `blur(${layer.blur})`,
                maskImage: mask,
                WebkitMaskImage: mask,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <>
      <div className="fixed top-[30px] left-[30px] z-10 hidden tablet:block">
        <nav
          className={cn(
            "relative flex h-[44px] items-center justify-center gap-6 overflow-clip rounded-full bg-white py-[5px] pr-[26px] pl-[5px]",
            INNER_BORDER,
          )}
        >
          <a href="#" aria-label="Spartan home" className="relative block cursor-pointer rounded-full">
            <LogoPill width={60} height={34} border={6} color="rgb(26, 26, 26)" />
          </a>
          <div className="flex items-center gap-0">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex cursor-pointer items-center justify-center px-4 py-[7px] opacity-65 transition-[opacity,transform] duration-300 ease-out hover:scale-110 hover:opacity-100"
              >
                <span className="whitespace-pre text-[14px] leading-[19.6px] font-normal tracking-[0.28px] text-sp-ink">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className="fixed top-[30px] right-[30px] z-10 hidden tablet:block">
        <ExpandButton label="Hire Team" size="sm" tone="white" borderColor="rgba(26, 26, 26, 0.1)" />
      </div>
    </>
  );
}

function PhoneNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="fixed top-5 right-5 left-5 z-10 tablet:hidden">
      <nav
        className={cn(
          "relative flex flex-col items-start rounded-[20px] bg-white py-[5px] pr-4 pl-[5px]",
          INNER_BORDER,
        )}
      >
        <div className="flex w-full items-center justify-between">
          <a href="#" aria-label="Spartan home" className="relative block rounded-full" onClick={close}>
            <LogoPill width={60} height={34} border={6} color="rgb(26, 26, 26)" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="sp-phone-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative h-[33px] w-[40px] cursor-pointer"
          >
            <span
              className={cn(
                "absolute inset-x-0 h-[6px] rounded-full bg-sp-ink transition-[top,transform] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "top-[13.5px] rotate-45" : "top-[8px] rotate-0",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 h-[6px] rounded-full bg-sp-ink transition-[top,transform] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "top-[13.5px] -rotate-45" : "top-[19px] rotate-0",
              )}
            />
          </button>
        </div>

        {/* Collapsible menu: grid-rows 0fr → 1fr animates the height to its natural size. */}
        <div
          id="sp-phone-menu"
          className={cn(
            "grid w-full transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
          aria-hidden={!open}
          inert={!open}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="flex flex-col pt-5 pr-1 pb-[15px] pl-4">
              <ul className="flex flex-col gap-[19.25px]">
                {LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={close}
                      className="flex h-10 items-center text-[18px] leading-[21.6px] font-light text-sp-ink opacity-65 transition-opacity duration-300 ease-out hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5" onClick={close}>
                <ExpandButton label="Hire Team" size="md" tone="coal" className="w-full justify-center" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export function NavBar() {
  return (
    <>
      <ProgressiveBlur />
      <DesktopNav />
      <PhoneNav />
    </>
  );
}
