"use client";

import { motion } from "framer-motion";
import {
  Rocket,
} from "lucide-react";


const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-4 flex flex-col items-center text-center">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[#615fff] rounded-full blur-[190px] pointer-events-none -z-10 opacity-5"
      />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <motion.div className="inline-flex items-center h-6 gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wide">
          <motion.div>
            <Rocket className="w-4 h-4" />
          </motion.div>
          <span>Public Roadmap</span>
        </motion.div>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl text-zinc-900 dark:text-white mb-6 text-balance transition-colors">
          The{" "}
          <span className="relative inline-block highlight-marker">Road</span>{" "}
          Ahead
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Landix is being built to become a curated startup section ecosystem
          for <strong className="text-foreground">shadcn/ui</strong> — focused
          on beautiful, production-ready sections.
        </p>
      </div>
    </section>
  );
};

export default Hero;
