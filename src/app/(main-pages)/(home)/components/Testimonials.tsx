"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Testimonials() {
  return (
    <section className="w-full py-24 transition-colors relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold! tracking-tight mt-10 mb-8 sm:text-5xl text-zinc-900 dark:text-white transition-colors"
          >
            What People Are{" "}
            <span className="text-indigo-500  dark:text-indigo-400">
              Saying
            </span>
          </motion.h3>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-12 rounded-3xl border-2 border-dashed border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm overflow-hidden group cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-cyan-500/5 dark:from-indigo-500/10 dark:to-cyan-500/10 pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" />

            <div className="flex flex-col items-center text-center gap-6 relative z-10">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shadow-inner border border-zinc-200 dark:border-zinc-800"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-8 h-8 fill-zinc-900 dark:fill-white"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z" />
                </svg>
              </motion.div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  SPOT AVAILABLE
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  We refuse to use fake testimonials.
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
                  Landix is brand new. Instead of writing dummy text, we saved
                  this premium spot for our first true believers. Build
                  something amazing, share your honest feedback on X, and claim
                  this space.
                </p>
              </div>

              <motion.a
                href="https://x.com/intent/tweet?text=I'm%20building%20my%20next%20project%20with%20Landix!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <span>Tweet your review</span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
