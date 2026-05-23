"use client";

import Hero from "./components/Hero";
import DesignFamilies from "./components/DesignFamilies";
import Building from "./components/Building";
import WhyUs from "./components/WhyUs";
import { CtaSection } from "../(home)/components/CtaSection";

export default function RoadmapPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Building />
      <DesignFamilies />
      <WhyUs />
      <CtaSection />
    </main>
  );
}
