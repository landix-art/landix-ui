import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { Testimonials } from "./components/Testimonials";
import { CtaSection } from "./components/CtaSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <BentoGrid />
        <Testimonials />
        <CtaSection />
      </main>
    </>
  );
}
