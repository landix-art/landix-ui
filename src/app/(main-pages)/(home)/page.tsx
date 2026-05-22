import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { Testimonials } from "./components/Testimonials";
import { CtaSection } from "./components/CtaSection";
import { AnimatedFeatureTimeline } from "./components/AnimatedFeatureTimeline";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <BentoGrid />
        <AnimatedFeatureTimeline />
        <Testimonials />
        <CtaSection />
      </main>
    </>
  );
}
