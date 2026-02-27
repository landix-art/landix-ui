"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-zinc-950">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-violet-500/10 dark:bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Ready to ship?
          </h2>
          
          <p className="text-zinc-500 dark:text-zinc-400 mb-10 text-lg leading-relaxed">
            Add beautifully crafted components directly to your project via our registry. 
            You own the raw code, you shape the experience.
          </p>
          
          <Link
            href="/docs"
            className="group inline-flex h-12 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-medium text-white dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-white hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950 shadow-sm"
          >
            <Terminal className="mr-2 h-4 w-4 opacity-70" />
            <span>Read the Docs</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 opacity-70" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
