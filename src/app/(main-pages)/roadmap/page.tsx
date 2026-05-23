"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Layout,
  CreditCard,
  Grid,
  Palette,
  Box,
  Terminal,
  Sparkles,
  Blocks,
  PanelTop,
  MessageSquareHeart,
  Settings2,
  AlertCircle,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";

const currentlyBuilding = [
  {
    title: "Startup Hero Sections",
    description: "Beautiful hero sections designed for modern startups.",
    icon: Layout,
    tags: ["SaaS", "AI Startups", "Dev Tools", "Agencies"],
    planned: [
      "Apple-inspired UI",
      "Futuristic AI layouts",
      "Developer-focused pages",
    ],
  },
  {
    title: "Pricing Sections",
    description:
      "Clean, conversion-focused pricing layouts designed for startup websites.",
    icon: CreditCard,
    tags: ["High Conversion", "Clear ROI"],
    planned: [
      "SaaS pricing tables",
      "Modern pricing cards",
      "Founder-friendly layouts",
    ],
  },
  {
    title: "Features & Bento Sections",
    description: "Clear and modern layouts to explain products beautifully.",
    icon: Grid,
    tags: ["Visual Storytelling", "Bento Grid"],
    planned: ["Bento grids", "Product showcases", "Technical feature sections"],
  },
];

const designFamilies = [
  { title: "Apple Inspired", desc: "Minimal, premium, elegant.", icon: Box },
  {
    title: "Futuristic Startup",
    desc: "Modern, dark, premium startup feel.",
    icon: Sparkles,
  },
  {
    title: "Developer / Linear",
    desc: "Clean, serious, developer-focused UI.",
    icon: Terminal,
  },
];

const comingNext = [
  {
    title: "Startup Kits",
    desc: "Complete startup-ready experiences where sections visually fit together.",
    icon: Blocks,
  },
  {
    title: "Navigation & Footers",
    desc: "Matching navigation and footer blocks for every design family.",
    icon: PanelTop,
  },
  {
    title: "Testimonials & Social Proof",
    desc: "Startup trust sections designed to improve conversions.",
    icon: MessageSquareHeart,
  },
  {
    title: "Better Customization",
    desc: "Making every section easier to edit, adapt, and make your own.",
    icon: Settings2,
  },
];

export default function RoadmapPage() {
  return (
    <article className="min-h-screen bg-background text-foreground pb-24 selection:bg-[#615fff]/30 overflow-hidden">
      <section className="relative pt-32 pb-24 px-4 flex flex-col items-center text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[#615fff] rounded-full blur-[120px] pointer-events-none -z-10"
        />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#615fff]/10 text-[#615fff] text-sm font-medium border border-[#615fff]/20 mb-4 cursor-default shadow-[0_0_15px_rgba(97,95,255,0.2)]"
          >
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

      {/* CURRENTLY BUILDING SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-[#615fff]/10 flex items-center justify-center border border-[#615fff]/20 relative">
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-4 h-4 rounded-full bg-[#615fff]/30"
              />
              <span className="w-3 h-3 rounded-full bg-[#615fff] relative z-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Currently Building
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentlyBuilding.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative flex flex-col p-8 rounded-3xl border border-border bg-card shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(97,95,255,0.15)] hover:border-[#615fff]/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-14 h-14 rounded-xl bg-[#615fff]/5 flex items-center justify-center mb-6 group-hover:bg-[#615fff]/10 transition-colors"
                >
                  <item.icon className="w-7 h-7 text-[#615fff]" />
                </motion.div>

                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-widest mb-3">
                      Planned Styles
                    </h4>
                    <ul className="space-y-2.5">
                      {item.planned.map((plan, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#615fff]/50 group-hover:bg-[#615fff] transition-colors" />{" "}
                          {plan}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-border/50">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold px-2.5 py-1.5 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center border border-border">
              <CalendarDays className="w-6 h-6 text-foreground/70" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground/90">
              Coming Next
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingNext.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group p-6 rounded-3xl border border-border bg-card/50 shadow-sm hover:bg-card hover:shadow-[0_10px_30px_-15px_rgba(97,95,255,0.1)] hover:border-[#615fff]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-5 group-hover:bg-[#615fff]/10 transition-colors">
                  <item.icon className="w-6 h-6 text-foreground/70 group-hover:text-[#615fff] transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-secondary/20 py-24 my-20 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#615fff]/10 text-[#615fff] mb-6 border border-[#615fff]/20"
            >
              <Palette className="w-7 h-7" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Design Families
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Consistent UI families so your pages look cohesive instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {designFamilies.map((family, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="group flex flex-col items-center text-center p-8 bg-background rounded-3xl border border-border shadow-sm hover:border-[#615fff]/30 transition-all duration-300"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + index,
                    ease: "easeInOut",
                  }}
                >
                  <family.icon
                    className="w-10 h-10 text-[#615fff] mb-6 group-hover:drop-shadow-[0_0_10px_rgba(97,95,255,0.5)] transition-all"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{family.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {family.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-[#615fff]/30 bg-linear-to-b from-[#615fff]/5 to-background p-10 md:p-16 text-center shadow-2xl shadow-[#615fff]/5">
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], width: ["40%", "60%", "40%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-transparent via-[#615fff] to-transparent"
          />

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Why Landix?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div
              whileHover={{ x: -5 }}
              className="space-y-4 p-8 rounded-3xl bg-destructive/5 border border-destructive/10 transition-transform"
            >
              <div className="flex items-center gap-3 text-destructive font-semibold text-lg">
                <AlertCircle className="w-6 h-6" />
                <span>Without Landix</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                Mixing random sections from different UI libraries results in
                inconsistent design, broken spacing, and websites that feel
                disconnected.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="space-y-4 p-8 rounded-3xl bg-[#615fff]/10 border border-[#615fff]/20 transition-transform relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#615fff]/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 text-[#615fff] font-semibold text-lg relative z-10">
                <CheckCircle2 className="w-6 h-6" />
                <span>With Landix</span>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base relative z-10">
                Carefully curated startup sections that are designed to work
                together and look premium right out of the box.{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </article>
  );
}
