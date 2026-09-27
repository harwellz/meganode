import Image from "next/image";
import { cn } from "@/lib/utils";
import { BigMarquee } from "@/components/sites/spartanai-framer-website-021e3300/shared/BigMarquee";
import { ExpandButton } from "@/components/sites/spartanai-framer-website-021e3300/shared/ExpandButton";
import { FadeIn } from "@/components/sites/spartanai-framer-website-021e3300/shared/FadeIn";
import { spImg } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";

type Article = {
  image: string;
  alt: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  /** Text card above the image (tablet/desktop only; phone is always image-first). */
  reversed?: boolean;
};

const ARTICLES: Article[] = [
  {
    image: "862JbA3xEJjbdSDVyKEwOZ0f2g.jpeg",
    alt: "boy in front of computer monitor",
    category: "Transformation",
    title: "The Sovereign Cloud: Why On-Premise AI is the Future of Data Privacy",
    excerpt: "Explore how federated learning and private hosting are allowing firms to innovate without risking security.",
    author: "Frank Joel",
  },
  {
    image: "YKAEpvQFebP2OETEJDVNip8UTg.jpeg",
    alt: "people doing office works",
    category: "Architecture",
    title: "The Architecture of Autonomy: Scaling AI Within Legacy Frameworks",
    excerpt: "A comprehensive guide on integrating custom machine learning models into complex enterprise environments.",
    author: "Damilola Manuel",
    reversed: true,
  },
  {
    image: "egDVD5dc2AvUIZKG0seuGXtH0.jpeg",
    alt: "sittin people beside table inside room",
    category: "Privacy",
    title: "Human-Centric Automation: Designing AI That Empowers Your Workforce",
    excerpt: "Why the most successful AI implementations focus on augmenting human talent rather than simply replacing it.",
    author: "Deborah Reachie",
  },
];

/** Phosphor "ArrowRight" (svg17). */
function ArrowIcon() {
  return (
    <svg viewBox="0 0 256 256" focusable="false" aria-hidden="true" className="block size-full fill-current">
      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
  );
}

const EASE = "duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)]";

function ArticleCard({ article, delay }: { article: Article; delay: number }) {
  const { reversed } = article;
  return (
    <FadeIn
      delay={delay}
      className={cn(
        "relative w-full",
        // Framer inner bottom border on the column wrapper.
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[rgba(26,26,26,0.06)]",
      )}
    >
      <a href="#" className="group/card flex h-[650px] w-full cursor-pointer flex-col gap-5 overflow-hidden rounded-[20px]">
        {/* Image */}
        <div
          className={cn(
            "relative h-[260px] w-full shrink-0 overflow-hidden rounded-[20px]",
            reversed && "tablet:order-last",
          )}
        >
          <Image
            src={spImg(article.image)}
            alt={article.alt}
            fill
            sizes="(min-width: 1200px) 432px, (min-width: 810px) 438px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Text card */}
        <div
          className={cn(
            "flex h-[370px] w-full shrink-0 flex-col items-start justify-between overflow-hidden rounded-[20px] px-6 pt-10 pb-6",
            "bg-sp-stone text-sp-ink transition-colors group-hover/card:bg-sp-ink group-hover/card:text-white",
            EASE,
            reversed && "tablet:pt-6 tablet:pb-10",
          )}
        >
          <div className="flex w-full flex-col items-start justify-center gap-[22px]">
            <div className="flex w-full flex-col items-start justify-center gap-4">
              <p className="font-sp-geist text-[12px] leading-[19.2px] font-light uppercase">{article.category}</p>
              <h4
                className={cn(
                  "w-full text-[18px] leading-[25.2px] font-normal tracking-[-0.36px] tablet:max-w-[350px]",
                  "desktop:text-[20px] desktop:leading-[28px] desktop:tracking-[-0.4px]",
                )}
              >
                {article.title}
              </h4>
            </div>
            <p className="w-full text-[14px] leading-[21px] font-light tracking-[0.28px] opacity-80 tablet:max-w-[380px]">
              {article.excerpt}
            </p>
          </div>

          <div className="flex w-full items-center justify-center gap-[10px]">
            <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-[6px]">
              <p className="whitespace-pre text-[14px] leading-[19.6px] font-normal tracking-[0.28px]">Written by</p>
              <p className="whitespace-pre text-[12px] leading-[16.8px] font-light tracking-[0.12px]">{article.author}</p>
            </div>
            <div
              className={cn(
                "flex size-[49px] shrink-0 items-center justify-center overflow-hidden rounded-full",
                "bg-sp-ink text-white transition-colors group-hover/card:bg-white group-hover/card:text-sp-ink",
                EASE,
              )}
            >
              <span
                className={cn(
                  "block size-[25px] -rotate-45 transition-transform group-hover/card:rotate-0",
                  EASE,
                )}
              >
                <ArrowIcon />
              </span>
            </div>
          </div>
        </div>
      </a>
    </FadeIn>
  );
}

export function Insights() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-[50px] pb-[150px] desktop:pb-[180px]">
      {/* Header */}
      <div className="flex w-full flex-col items-center justify-center gap-10">
        <BigMarquee title="Insights" asteriskColor="#fff" className="rounded-[10px]" />

        <div className="flex w-full flex-col items-start desktop:flex-row desktop:items-end">
          <div className="hidden desktop:block desktop:flex-1" />
          <FadeIn className="flex w-full flex-col items-start justify-start gap-[34px] desktop:flex-1">
            <p className="w-full text-[16px] leading-[24px] font-light tracking-[0.32px] text-sp-ink tablet:max-w-[500px] desktop:max-w-[450px]">
              A curated repository of technical frameworks, model benchmarks, and strategic guides for leaders
              navigating the integration of custom neural architectures.
            </p>
            <ExpandButton label="All articles" href="#" size="md" tone="ink" />
          </FadeIn>
        </div>
      </div>

      {/* Blog grid */}
      <div className="grid w-full grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-3">
        {ARTICLES.map((article, i) => (
          <ArticleCard key={article.title} article={article} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}
