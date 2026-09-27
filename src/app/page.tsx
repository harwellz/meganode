import { AboutStats } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/AboutStats";
import { Capabilities } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Capabilities";
import { Faq } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Faq";
import { Footer } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Footer";
import { Hero } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Hero";
import { Insights } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Insights";
import { NavBar } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/NavBar";
import { Pricing } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Pricing";
import { Process } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Process";
import { Team } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Team";
import { Testimonials } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Testimonials";
import { VideoShowcase } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/VideoShowcase";
import { VisionTech } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/VisionTech";
import { Works } from "@/components/sites/spartanai-framer-website-021e3300/root-8a5edab2/Works";

// Clone of https://spartanai.framer.website/ (see docs/research/spartanai-framer-website-021e3300/root-8a5edab2/).
export default function Home() {
  return (
    <div className="sp-site relative w-full overflow-x-clip">
      <NavBar />

      {/* Page content sits above the fixed footer (z-1); the trailing spacer reveals it. */}
      <main className="pointer-events-none relative z-[2] [&>*]:pointer-events-auto">
        <Hero />
        <AboutStats />

        {/* Dark section: white Works block with rounded bottom, then Capabilities + Vision/Tech on ink. */}
        <section className="relative z-[4] flex flex-col items-center overflow-clip bg-sp-ink">
          <Works />
          <div className="relative z-[1] flex w-full flex-col items-center">
            <Capabilities />
            <VisionTech />
          </div>
        </section>

        <Testimonials />
        <VideoShowcase />

        {/* Dark Process + Team block with rounded bottom over a white strip. */}
        <section className="relative z-[4] overflow-clip bg-sp-ink">
          <div className="relative z-[3] flex flex-col gap-[160px] rounded-b-[20px] bg-sp-ink px-5 pt-[150px] pb-[150px] tablet:px-10 desktop:gap-[250px] desktop:pt-[250px] desktop:pb-[200px]">
            <Process />
            <Team />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-0 h-[30px] bg-white" />
        </section>

        <Pricing />

        {/* Light card holding FAQ + Insights; the last section has rounded bottom corners. */}
        <section className="relative z-[4] rounded-b-[20px] bg-white px-3 pb-3">
          <div className="flex flex-col items-center overflow-clip rounded-[20px] bg-sp-mist px-5 py-3 tablet:px-10">
            <Faq />
            <Insights />
          </div>
        </section>

        <div aria-hidden="true" className="pointer-events-none! h-[791px] tablet:h-[774px]" />
      </main>

      <Footer />
    </div>
  );
}
