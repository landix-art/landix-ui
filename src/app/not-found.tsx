"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MoveLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-violet-500/10 dark:bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8">
            <Terminal className="w-5 h-5 text-zinc-500" />
          </div>

          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-4">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-800 dark:text-zinc-200 mb-4">
            Route not found in registry.
          </h2>

          <p className="text-zinc-500 dark:text-zinc-400 mb-10 text-base md:text-lg leading-relaxed max-w-md">
            The component or page you are looking for doesn't exist, has been
            moved, or you typed the URL incorrectly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/"
              className="group inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-100 px-8 text-sm font-medium text-white dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-white hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950 shadow-sm"
            >
              <MoveLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 opacity-70" />
              <span>Back to Index</span>
            </Link>

            <Link
              href="/docs"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-transparent border border-zinc-200 dark:border-zinc-800 px-8 text-sm font-medium text-zinc-900 dark:text-zinc-300 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Browse Docs
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
