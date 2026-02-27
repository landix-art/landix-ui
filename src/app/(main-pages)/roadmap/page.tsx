"use client";

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  CircleDashed, 
  Github, 
  Sparkles, 
  Code2, 
  Boxes, 
  Wind 
} from "lucide-react";

const CORE_PILLARS = [
  { icon: Code2, title: "100% Free & Open", desc: "No premium tiers. Everything is open-source and yours to own." },
  { icon: Boxes, title: "shadcn/ui Based", desc: "Seamlessly integrates with your existing shadcn architecture." },
  { icon: Wind, title: "Tailwind CSS v4", desc: "Built with the latest and fastest version of Tailwind CSS." },
  { icon: Sparkles, title: "Powered by Motion", desc: "Fluid, hardware-accelerated animations using motion/react." },
];

const ROADMAP_DATA = [
  {
    phase: "Phase 1",
    status: "in-progress",
    title: "Foundation & Page Sections",
    description: "The essential building blocks for modern landing pages.",
    items: ["Headers & Footers", "Hero Sections", "Social Proof & Testimonials", "Pricing & CTA", "Bento Grids"],
  },
  {
    phase: "Phase 2",
    status: "planned",
    title: "Typography & Micro-Interactions",
    description: "Bringing text and user interactions to life.",
    items: ["Text Reveal & Aurora Text", "Typing & Morphing Animations", "Smooth Cursors & Pointers", "Animated Buttons (Ripple, Rainbow)"],
  },
  {
    phase: "Phase 3",
    status: "planned",
    title: "Visual Effects & Backgrounds",
    description: "Immersive environments and eye-catching details.",
    items: ["Flickering & Retro Grids", "Particles & Meteors", "Animated Beams & Borders", "Interactive Background Patterns"],
  },
  {
    phase: "Phase 4",
    status: "planned",
    title: "Advanced Components & Community",
    description: "Complex UI elements and community-driven requests.",
    items: ["Device Mocks (Safari, iPhone)", "Dock & Globe Components", "Interactive File Trees", "Complex Chart Wrappers"],
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6"
          >
            The Road Ahead
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed"
          >
            We are building the ultimate collection of animated, copy-paste components. 
            Here is what we are working on and what is coming next.
          </motion.p>
        </div>

        <div className="grid grid-cols-1! sm:grid-cols-2! lg:grid-cols-4! gap-6 mb-24">
          {CORE_PILLARS.map((Pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center mb-4 text-violet-600 dark:text-violet-400">
                <Pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {Pillar.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {Pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 md:ml-4 space-y-16 max-w-3xl mx-auto">
          {ROADMAP_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.15), ease: "easeOut" }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[0.7rem] md:-left-4 top-1 bg-white dark:bg-zinc-950 rounded-4xl p-1">
                {item.status === "done" ? (
                  <CheckCircle2 className="w-6 h-6 text-violet-500" />
                ) : item.status === "in-progress" ? (
                  <CircleDashed className="w-6 h-6 text-fuchsia-500 animate-[spin_4s_linear_infinite]" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-zinc-200 dark:border-zinc-800" />
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-2 uppercase tracking-wider">
                  {item.phase}
                </span>
                <h3 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.items.map((subItem, i) => (
                    <div key={i} className="flex items-center text-sm text-zinc-600 dark:text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mr-2.5" />
                      {subItem}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32 p-10 rounded-3xl bg-violet-500/5 border border-violet-500/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-violet-500/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
              Want to see something else?
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-md mx-auto text-base">
              We prioritize components based on community feedback. Open an issue on GitHub and let us know.
            </p>
            <a
              href="https://github.com/landix-art/landix-ui/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 dark:bg-white px-8 text-sm font-medium text-white dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Github className="w-4 h-4 mr-2" />
              Request a Component
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
