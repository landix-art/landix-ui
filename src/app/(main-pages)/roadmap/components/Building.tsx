"use client";

import { motion } from "framer-motion";
import {
  Layout,
  CreditCard,
  Grid,
  Blocks,
  PanelTop,
  MessageSquareHeart,
  Settings2,
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

const Building = () => {
  return (
    <>
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
                className="group relative flex flex-col p-8 rounded-3xl border border-border bg-card  hover:shadow-[0_20px_40px_-15px_rgba(97,95,255,0.15)] hover:border-[#615fff]/40 transition-all duration-300"
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
                className="group p-6 rounded-3xl border border-border bg-card/50  hover:bg-card hover:shadow-[0_10px_30px_-15px_rgba(97,95,255,0.1)] hover:border-[#615fff]/30 transition-all duration-300"
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
    </>
  );
};

export default Building;
