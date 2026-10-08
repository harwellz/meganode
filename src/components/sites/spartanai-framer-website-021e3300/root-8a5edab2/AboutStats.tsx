import Image from "next/image";
import type { AboutContent, AnnouncementContent } from "@/content/schema";
import { cn } from "@/lib/utils";
import { AnnouncementTicker } from "@/components/sites/spartanai-framer-website-021e3300/shared/AnnouncementTicker";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";
import { ScrollRevealText } from "@/components/sites/spartanai-framer-website-021e3300/shared/ScrollRevealText";
import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";
import { CountUp } from "./AboutStats/CountUp";
import { QuoteIcon, RocketIcon, TickDial, TrendUpIcon } from "./AboutStats/icons";

// 52px discs, 39px apart (13px overlap); later avatars stack on top.
const AVATAR_POS = ["left-[3px]", "left-[42px]", "left-[81px]", "left-[120px]"] as const;

const SMALL = "text-[14px] leading-[19.6px] tracking-[0.28px]";
const BIG_NUMBER = "font-sp-inter text-[43px] font-normal leading-[43px] tracking-[-2px]";

export function AboutStats({ content, announcement }: { content: AboutContent; announcement: AnnouncementContent }) {
  return (
    <section className="relative z-[4] flex justify-center overflow-clip bg-white px-3">
      <div className="flex w-full overflow-clip rounded-[20px] bg-sp-mist px-5 py-3 tablet:px-10">
        <div className="flex w-full flex-col items-center gap-[140px] pt-[140px] pb-[30px] desktop:gap-[200px] desktop:pt-[200px]">
          <div className="flex w-full flex-col items-center gap-10 overflow-clip">
            {/* Text block */}
            <div className="flex w-full flex-col items-start gap-6 tablet:gap-[30px]">
              <ScrollRevealText
                text={content.headline}
                dimColor="rgba(26, 26, 26, 0.1)"
                color="rgb(26, 26, 26)"
                className="relative z-[1] w-full text-[35px] font-medium leading-[37px] tracking-[-2px] text-sp-ink tablet:text-[43px] tablet:leading-[45px] desktop:max-w-[1042px] desktop:text-[56px] desktop:leading-[60px]"
              />
              <FadeIn className="w-[600px] max-w-full">
                <p className="text-[16px] font-light leading-[24px] tracking-[0.32px] text-sp-ink">
                  {content.intro}
                </p>
              </FadeIn>
            </div>

            {/* Bento */}
            <div className="grid w-full grid-cols-1 gap-[10px] tablet:grid-cols-2 desktop:grid-cols-[339fr_291fr_339fr_339fr] desktop:items-center">
              {/* Card A — revenue */}
              <FadeIn className="flex h-[315px] flex-col items-start justify-between overflow-clip rounded-[30px] bg-sp-ink p-6">
                <div className="flex flex-col items-start justify-center gap-[14px]">
                  <div className="relative size-[60px] overflow-clip rounded-[16px] bg-white">
                    <div className="absolute inset-[15px]">
                      <TrendUpIcon />
                    </div>
                  </div>
                  <CountUp to={content.revenue.value} prefix={content.revenue.prefix} suffix={content.revenue.suffix} className={`${BIG_NUMBER} text-white`} />
                </div>
                <p className={`${SMALL} w-full text-white`}>
                  {content.revenue.caption}
                </p>
              </FadeIn>

              {/* Card B — agents + 5x */}
              <FadeIn className="flex h-[315px] flex-col items-center justify-center gap-[10px]">
                <div className="relative flex h-[210px] w-full flex-col items-center justify-center gap-[22px] overflow-clip rounded-[30px] p-6">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[30px] border border-dashed border-[rgba(26,26,26,0.6)]"
                  />
                  <div className="relative h-[60px] w-[176px]">
                    {content.agents.avatars.map((a, i) => (
                      <div
                        key={a.image}
                        className={cn(
                          "absolute top-1 z-[1] size-[52px] overflow-hidden rounded-full shadow-[0_0_0_5px_rgb(255,255,255)]",
                          AVATAR_POS[i],
                        )}
                      >
                        <Image src={a.image} alt={a.alt} fill sizes="52px" className="rounded-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className={`${SMALL} text-[rgba(26,26,26,0.8)]`}>
                    <strong className="font-bold">{content.agents.count}</strong> {content.agents.label}
                  </p>
                </div>
                <div className="flex h-[95px] w-full items-center justify-center gap-[26px] overflow-clip rounded-[30px] bg-[rgba(26,26,26,0.06)] px-[27px] py-5">
                  <CountUp to={content.speed.value} prefix={content.speed.prefix} suffix={content.speed.suffix} className={`${BIG_NUMBER} text-[rgb(41,40,40)]`} />
                  <p className={`${SMALL} whitespace-nowrap text-[rgba(26,26,26,0.6)]`}>{content.speed.caption}</p>
                </div>
              </FadeIn>

              {/* Card C — inference speed dial */}
              <FadeIn className="flex h-[315px] flex-col items-center justify-center overflow-clip rounded-[30px] bg-[rgba(26,26,26,0.06)] p-6">
                <div className="relative w-full flex-1 overflow-clip">
                  <div className="absolute top-[calc(44.32%-78.08px)] left-1/2 h-[153px] w-[149px] -translate-x-1/2">
                    <TickDial />
                  </div>
                  <div className="absolute top-[calc(44.32%-31.58px)] left-1/2 z-[1] size-[60px] -translate-x-1/2 overflow-clip rounded-full bg-sp-ink">
                    <div className="absolute inset-[18px]">
                      <RocketIcon />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-2">
                  <h4 className="text-[18px] font-normal leading-[25.2px] tracking-[-0.36px] text-[rgba(26,26,26,0.8)] desktop:text-[20px] desktop:leading-[28px] desktop:tracking-[-0.4px]">
                    {content.inference.title}
                  </h4>
                  <p className={`${SMALL} text-[rgba(26,26,26,0.6)]`}>
                    {content.inference.caption}
                  </p>
                </div>
              </FadeIn>

              {/* Card D — testimonial */}
              <FadeIn className="flex h-[315px] flex-col items-start justify-between overflow-clip rounded-[30px] bg-white p-6">
                <div className="flex w-full items-center justify-between">
                  <div className="relative z-[1] size-10">
                    <QuoteIcon />
                  </div>
                  <div className="relative h-[38px] w-[63px] invert">
                    <Image src={spImg("C7otSLQhZagCjkAC4M6MX1Ns.png")} alt="" fill sizes="63px" className="object-cover" />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-5">
                  <p className="text-[18px] leading-[25.2px] text-[rgba(26,26,26,0.8)]">
                    {content.quote.text}
                  </p>
                  <ul className={`${SMALL} w-full list-disc text-[rgba(26,26,26,0.6)]`}>
                    <li className="pl-[17.1719px]">
                      <p>{content.quote.author}</p>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Announcement ticker, sitting in the bottom padding */}
          <div className="relative h-0 w-full">
            <div className="absolute inset-x-0 top-0">
              <AnnouncementTicker content={announcement} color="rgb(26, 26, 26)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
