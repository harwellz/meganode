import Image from "next/image";
import { ExpandButton } from "@/components/sites/spartanai-framer-website-021e3300/shared/ExpandButton";
import { Marquee } from "@/components/sites/spartanai-framer-website-021e3300/shared/Marquee";
import { spImg, spVideo } from "@/components/sites/spartanai-framer-website-021e3300/shared/assets";

const LOGOS = [
  "FIkeNB0CMpKHgxqL0a3aPHKlAyQ.png",
  "nJbNnh8E8FlHfzjwzNY6HTfjGnE.png",
  "3EwtMm1CTn3V13Xu2ufZVUnW4.png",
  "C7otSLQhZagCjkAC4M6MX1Ns.png",
  "PNxA5d1umCQiNSezotkgCnArwqU.png",
];

const LOGO_MASK =
  "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 8.03421%, #000 92.0098%, rgba(0,0,0,0) 100%)";

// Framer's 8-layer progressive blur: each layer doubles the blur and is masked
// to a 37.5%-tall band that steps down by 12.5%.
const BLUR_LAYERS = [0.0390625, 0.078125, 0.15625, 0.3125, 0.625, 1.25, 2.5, 5].map((blur, i) => {
  const s = i * 12.5;
  return {
    blur,
    mask: `linear-gradient(rgba(0,0,0,0) ${s}%, #000 ${s + 12.5}%, #000 ${s + 25}%, rgba(0,0,0,0) ${s + 37.5}%)`,
  };
});

function ArrowRightLight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
    </svg>
  );
}

function DigitalBrainCard() {
  return (
    <a
      href="#"
      className="group/brain relative z-[5] flex w-full shrink-0 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[24px] bg-sp-ink p-[6px] tablet:w-[320px]"
    >
      {/* Video */}
      <div className="relative z-[3] h-[220px] w-full overflow-hidden rounded-[20px] bg-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={spVideo("2WO0ZC7yTbYNkxdTbPKkcOs30s.mp4")}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Caption */}
      <div className="relative z-[3] flex h-[71px] w-full items-center justify-center p-[14px]">
        <div className="flex w-full flex-col items-start justify-center gap-[5px]">
          <p className="text-[15px] leading-[21px] font-normal text-sp-ink transition-colors duration-[400ms] ease-out group-hover/brain:text-white">
            Digital Brain
          </p>
          <p className="text-[12px] leading-[16.8px] font-light tracking-[0.12px] text-[rgba(26,26,26,0.7)] transition-colors duration-[400ms] ease-out group-hover/brain:text-[rgba(255,255,255,0.5)]">
            {"// Model v4.0.2"}
          </p>
        </div>
        <span className="absolute top-1/2 right-[24px] z-[1] size-[26px] -translate-y-1/2 text-sp-pixel transition-[right,color] duration-[400ms] ease-out group-hover/brain:right-[14px] group-hover/brain:text-white">
          <ArrowRightLight className="block size-full" />
        </span>
      </div>

      {/* Light overlay — fades out on hover to reveal the dark card body */}
      <div className="absolute inset-0 z-[2] overflow-hidden transition-opacity duration-[400ms] ease-out group-hover/brain:opacity-0">
        <Image
          src={spImg("i8M81i0PeB8FDxgPt1GPDik2kA.jpg")}
          alt="a blurry image of a green and yellow background"
          fill
          sizes="(max-width: 809px) 100vw, 320px"
          className="object-cover"
        />
      </div>

      {/* 1px inner border */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[6] rounded-[24px] shadow-[inset_0_0_0_1px_rgba(26,26,26,0.1)]"
      />
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative z-[4] flex flex-col items-center justify-center overflow-clip bg-white p-3 tablet:flex-row">
      <div className="relative flex w-full flex-col items-start justify-center gap-[76px] overflow-clip rounded-[20px] bg-sp-mist pt-[130px] pb-10 tablet:pt-[150px] desktop:h-[calc(100vh-24px)] desktop:flex-row desktop:gap-[26px] desktop:pt-[190px] desktop:pb-[160px]">
        {/* Background */}
        <div className="absolute top-[-158px] right-0 bottom-[-10px] left-0 z-[1] overflow-clip tablet:top-0">
          <Image
            src={spImg("PXNhr4LbXoJRWLAHfzNTYjvdR5Y.png")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute right-0 bottom-0 left-0 h-[405px] overflow-clip bg-[linear-gradient(rgba(31,31,31,0)_0%,rgba(26,26,26,0.6)_100%)]">
            <div className="absolute inset-0 overflow-hidden">
              {BLUR_LAYERS.map(({ blur, mask }, i) => (
                <div
                  key={blur}
                  className="absolute inset-0"
                  style={{
                    zIndex: i + 1,
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                    maskImage: mask,
                    WebkitMaskImage: mask,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-[4] flex w-full flex-col items-start justify-center gap-10 overflow-clip px-5 tablet:gap-[70px] tablet:px-10 desktop:flex-row desktop:items-center desktop:gap-[10px]">
          <div className="flex w-full flex-col items-start justify-center gap-[26px] desktop:min-w-0 desktop:flex-1">
            <div className="flex w-full flex-col items-start justify-center gap-[14px]">
              <h1 className="w-full text-[45px] leading-[49.5px] font-medium tracking-[-1.8px] whitespace-pre-wrap text-[rgba(26,26,26,0.4)] tablet:w-[500px] tablet:text-[56px] tablet:leading-[61.6px] tablet:tracking-[-2.24px] desktop:text-[70px] desktop:leading-[77px] desktop:tracking-[-2.8px]">
                Scale your ideas.
                <br />
                <span className="text-sp-ink">Build with AI.</span>
              </h1>
              <p className="w-full text-[16px] leading-[24px] font-light tracking-[0.32px] text-sp-ink tablet:w-[390px]">
                Deploy custom neural agents, LLMs, and automation in one seamless flow.
              </p>
            </div>
            <ExpandButton label="Start Build" href="#" size="md" tone="ink" />
          </div>
          <DigitalBrainCard />
        </div>

        {/* Caption + logo marquee */}
        <div className="relative z-[3] flex w-full flex-col items-start justify-center gap-[10px] overflow-clip px-5 tablet:px-10 desktop:absolute desktop:right-0 desktop:bottom-[-10px] desktop:left-0 desktop:pb-[50px]">
          <p className="w-[300px] text-[14px] leading-[19.6px] font-normal tracking-[0.28px] text-white">
            +2,400 active deployments and 8,200 brands trust our high-performance architecture.
          </p>
          <Marquee speed={25} gap={10} mask={LOGO_MASK} copies={3} className="h-[57px] w-full rounded-[10px]">
            {LOGOS.map((file) => (
              <div key={file} className="relative h-[57px] w-[189px] shrink-0">
                <Image src={spImg(file)} alt="" fill sizes="189px" className="object-cover" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
