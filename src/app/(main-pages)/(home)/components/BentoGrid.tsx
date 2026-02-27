"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Copy,
  Zap,
  LayoutTemplate,
  Terminal,
  MousePointer2,
  Check,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export function BentoGrid() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "npx shadcn@latest add @landix/animated-button",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full px-4 py-32 max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-indigo-500"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-indigo-500"></span>
          </span>
          <span>Shadcn registry</span>
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-zinc-900 dark:text-white transition-colors">
          Premium UI sections <br className="hidden sm:block" />
          <span className="text-indigo-500  dark:text-indigo-400">shouldn't cost a premium.</span>
        </h2>

        <p className="max-w-2xl mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 transition-colors">
          A collection of animated website sections. Add them directly from our
          shadcn registry, customize the raw code, and build your Next.js
          landing page <b>for free</b>.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[24rem]"
      >
        <motion.div
          variants={fadeUpVariant}
          className="relative flex flex-col p-8 overflow-hidden border md:col-span-2 rounded-3xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-white/10 group hover:border-indigo-500/50 transition-colors"
        >
          <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 dark:from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 w-full max-w-sm pointer-events-auto">
            <div className="flex items-center justify-center w-12 h-12 mb-6 border rounded-2xl bg-indigo-50 border-indigo-100 text-indigo-500 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400">
              <LayoutTemplate className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white">
              Premium components
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Complex hero sections, dynamic bento grids, and interactive
              footers. Ready to drop into your Next.js app.
            </p>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-[55%] hidden md:flex! items-center justify-center pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full" />

            <div
              className="relative w-full h-full flex flex-col items-center justify-center gap-4"
              style={{
                perspective: "1000px",
                transform: "rotateX(50deg) rotateZ(-25deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                animate={{ z: [0, 40, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0,
                }}
                className="w-64 h-12 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center px-4"
              >
                <div className="w-5 h-5 rounded-md bg-indigo-500/20" />
                <div className="ml-auto flex gap-2">
                  <div className="w-8 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="w-8 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </motion.div>

              <motion.div
                animate={{ z: [0, 40, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="w-72 h-32 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col items-center justify-center gap-3 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-indigo-500/5 to-transparent" />
                <div className="w-3/4 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700 relative z-10" />
                <div className="w-1/2 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 relative z-10" />
                <div className="w-24 h-8 mt-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center relative z-10">
                  <div className="w-10 h-1.5 rounded-full bg-indigo-500/50" />
                </div>
              </motion.div>

              <motion.div
                animate={{ z: [0, 40, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="w-72 h-24 flex gap-3"
              >
                <div className="flex-1 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl p-3 flex flex-col gap-2">
                  <div className="w-6 h-6 rounded bg-indigo-500/10" />
                  <div className="w-full h-1.5 mt-auto rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="w-2/3 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
                <div className="flex-1 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl p-3 flex flex-col gap-2">
                  <div className="w-6 h-6 rounded bg-indigo-500/10" />
                  <div className="w-full h-1.5 mt-auto rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="w-2/3 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          className="relative flex flex-col p-8 overflow-hidden border rounded-3xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-white/10 group hover:border-indigo-500/50 transition-colors"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-center w-12 h-12 mb-6 border rounded-2xl bg-indigo-50 border-indigo-100 text-indigo-500 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
              Tailwind v4
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Engineered with the new Rust compiler. Native CSS variables,
              faster builds, and zero legacy bloat.
            </p>
          </div>

          <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between p-3 border rounded-xl bg-zinc-50/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 backdrop-blur-sm group-hover:border-indigo-500/30 transition-colors z-10">
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              text-indigo-500
            </span>
            <ArrowRight className="w-3 h-3 text-zinc-400" />
            <div className="w-4 h-4 rounded bg-indigo-500 shadow-sm" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          className="relative flex flex-col p-8 overflow-hidden border rounded-3xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-white/10 group hover:border-indigo-500/50 transition-colors"
        >
          <div className="relative z-10 pointer-events-none">
            <div className="flex items-center justify-center w-12 h-12 mb-6 border rounded-2xl bg-indigo-50 border-indigo-100 text-indigo-500 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400">
              <MousePointer2 className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
              Motion physics
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Natural, physics-based interactions. Grab and toss the element
              below to test the spring mechanic.
            </p>
          </div>

          <div className="absolute right-6 bottom-6 md:right-8 md:bottom-8 z-20">
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.4}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, cursor: "grabbing" }}
              className="w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center gap-2 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg cursor-grab active:cursor-grabbing group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/10 transition-colors"
            >
              <span className="text-[10px] font-bold tracking-widest text-zinc-400 group-hover:text-indigo-500 uppercase transition-colors">
                Drag
              </span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          className="relative flex flex-col md:flex-row gap-8 p-8 overflow-hidden border md:col-span-2 rounded-3xl bg-white dark:bg-zinc-950 border-zinc-200 dark:border-white/10 group hover:border-indigo-500/50 transition-colors group items-center justify-between"
        >
          <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col w-full md:w-1/2">
            <div className="flex items-center justify-center w-12 h-12 mb-6 border rounded-2xl bg-indigo-50 border-indigo-100 text-indigo-500 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
              CLI Powered. Own your code.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Native shadcn integration. No separate dependencies to install.
              Add components straight to your codebase via the shadcn CLI and
              maintain full ownership of the raw source code.{" "}
            </p>
          </div>

          <div className="relative z-10 w-full md:w-1/2 mt-6 md:mt-0">
            <div className="flex flex-col w-full overflow-hidden dark:bg-[#0d0d0d] border dark:border-zinc-800 rounded-xl shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b bg-zinc-100/30 dark:border-zinc-800 dark:bg-[#111]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 transition-colors rounded-md hover:bg-zinc-100 dark:text-zinc-500 dark:hover:text-white dark:hover:bg-zinc-800 cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="p-4 font-mono text-sm leading-relaxed dark:text-zinc-300 text-zinc-700">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 select-none">❯</span>
                  <span className="break-all">
                    npx shadcn@latest add{" "}
                    <span className="text-indigo-400">
                      @landix/animated-button
                    </span>
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 mt-3 dark:text-zinc-500 text-zinc-700"
                >
                  <span className="text-blue-500 select-none">ℹ</span>
                  <span>Installing dependencies...</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 mt-1 dark:text-zinc-500"
                >
                  <span className="text-green-500 select-none">✔</span>
                  <span>
                    Created{" "}
                    <span className="dark:text-zinc-400 text-zinc-700">
                      components/ui/animated-button.tsx
                    </span>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
