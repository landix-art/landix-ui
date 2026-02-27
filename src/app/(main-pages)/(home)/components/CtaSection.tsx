"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative w-full px-4 py-40 overflow-hidden max-w-7xl mx-auto flex justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="absolute inset-0 " />
        <div className="relative  flex flex-col items-center p-12 text-center md:p-24 rounded-[2.4rem] bg-indigo-100/15 dark:bg-indigo-400/5 border border-zinc-200 dark:border-white/10 z-10 transition-colors">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 mb-6">
            Ship Premium Interfaces. <br className="hidden md:block" />
            <span className="text-indigo-500  dark:text-indigo-400">
              Without the Premium Cost.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Copy specific components from our registry to speed up development,
            or hire our team to build a complete, high-performance design system
            tailored to your brand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-zinc-900 dark:bg-white px-8 font-medium text-white dark:text-zinc-900 transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50"
            >
              <span className="mr-2">Explore Components</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-10 bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
            </Link>

            <Link
              href="mailto:contact@landix.art"
              className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-8 font-medium text-zinc-900 dark:text-zinc-300 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
