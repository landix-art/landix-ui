"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Blocks, LayoutTemplate, FileCode2, Palette } from "lucide-react";

const features = [
  {
    id: "feature-1",
    title: "Premium Shadcn UI Blocks",
    description:
      "Access a comprehensive library of UI blocks built on top of the Shadcn architecture. Pure React components styled with Tailwind CSS.",
    icon: Blocks,
    highlightText: "Copy. Paste. Ship.",
    highlightDesc:
      "No npm install required for components. Just copy the code directly into your Next.js project and maintain complete ownership of your UI.",
  },
  {
    id: "feature-2",
    title: "Complete Landing Page Sections",
    description:
      "Everything you need to build high-converting landing pages. From Hero headers and Feature grids to Logo clouds and Footers.",
    icon: LayoutTemplate,
    highlightText: "Modular Architecture",
    highlightDesc:
      "Mix and match independent sections. Need a Pricing block or a Testimonial slider? Drop them in and they work flawlessly together.",
  },
  {
    id: "feature-3",
    title: "Native React & Tailwind CSS",
    description:
      "Written in strict TypeScript. Our blocks leverage modern Tailwind utility classes, perfectly aligned with Next.js App Router and Server Components.",
    icon: FileCode2,
    highlightText: "Zero Vendor Lock-in",
    highlightDesc:
      "You're not tied to any proprietary library. It's just clean, semantic code that naturally extends your existing tailwind configuration.",
  },
  {
    id: "feature-4",
    title: "Seamless Theme Integration",
    description:
      "Designed to inherit your global CSS variables instantly. Switch between dark and light modes without writing a single line of extra styling.",
    icon: Palette,
    highlightText: "Your Brand, Your Rules",
    highlightDesc:
      "Because it uses standard Shadcn design tokens, changing primary colors, border radiuses, and typography across all blocks takes seconds.",
  },
];

const AUTO_PLAY_INTERVAL = 10000;

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -10,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function AnimatedFeatureTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const percentage = (activeIndex / (features.length - 1)) * 100;
    setProgress(percentage);
  }, [activeIndex]);

  return (
    <section className="w-full px-4 py-16 max-w-6xl mx-auto overflow-hidden">
      <div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold tracking-tight mt-10 mb-7 sm:text-5xl text-zinc-900 dark:text-white transition-colors">
          Production-Ready UI{" "}
          <span className="text-indigo-500  dark:text-indigo-400">Blocks</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Build stunning Next.js landing pages in minutes with our
          copy-and-paste Shadcn UI sections, Tailwind components, and modular
          layouts.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center relative">
        <div className="w-full lg:w-1/2 relative px-0">
          <div className="absolute top-6 bottom-6 left-4.5 md:left-6 w-px -translate-x-1/2 bg-black/5 dark:bg-white/10 z-0" />

          <div className="absolute top-6 bottom-6 left-4.5 md:left-6 w-px -translate-x-1/2 z-0 flex flex-col justify-start">
            <motion.div
              className="w-full bg-[#6361ff] origin-top"
              initial={{ height: "0%" }}
              animate={{ height: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col space-y-8 relative z-10">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={feature.id}
                  className="relative flex items-start gap-5 md:gap-6 cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.div
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`relative z-10 w-9 h-9 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center border shadow-sm bg-background transition-colors duration-500 ${
                      isActive
                        ? "border-[#6361ff] bg-[#6361ff]/5"
                        : "border-border group-hover:border-[#6361ff]/30"
                    }`}
                  >
                    <feature.icon
                      className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${
                        isActive
                          ? "text-[#6361ff]"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                      strokeWidth={isActive ? 2 : 1.5}
                    />
                  </motion.div>

                  <div className="pt-0.5 md:pt-2 flex-1">
                    <h3
                      className={`text-base md:text-lg font-medium tracking-tight transition-colors duration-300 mb-1.5 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground/80"
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed pb-3">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-1/2 aspect-4/3 md:aspect-auto md:min-h-100 relative flex items-center justify-center p-1 md:p-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-md p-6 md:p-10 rounded-3xl border border-border bg-background/50 backdrop-blur-2xl shadow-sm overflow-hidden flex flex-col justify-center items-start"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#6361ff]/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 w-full">
                <motion.div
                  variants={itemVariants}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-background shadow-sm border border-border flex items-center justify-center mb-6"
                >
                  {(() => {
                    const ActiveIcon = features[activeIndex].icon;
                    return (
                      <ActiveIcon
                        className="w-6 h-6 md:w-8 md:h-8 text-[#6361ff]"
                        strokeWidth={1.5}
                      />
                    );
                  })()}
                </motion.div>

                <motion.h4
                  variants={itemVariants}
                  className="text-lg md:text-2xl font-semibold text-foreground mb-3 leading-tight tracking-tight"
                >
                  {features[activeIndex].highlightText}
                </motion.h4>

                <motion.p
                  variants={itemVariants}
                  className="text-xs md:text-sm text-muted-foreground leading-relaxed"
                >
                  {features[activeIndex].highlightDesc}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
