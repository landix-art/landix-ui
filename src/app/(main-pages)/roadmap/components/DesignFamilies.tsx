"use client";

import { motion } from "framer-motion";
import { Palette, Box, Terminal, Sparkles } from "lucide-react";

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

const DesignFamilies = () => {
  return (
    <>
      <section className="w-full bg-[#615fff]/4 py-24 my-20  relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#615fff]/10 text-[#615fff] mb-6 border border-[#615fff]/20"
            >
              <Palette className="w-7 h-7" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
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
                className="group flex flex-col items-center text-center p-8 bg-background rounded-3xl border border-border hover:border-[#615fff]/30 transition-all duration-300"
              >
                <motion.div>
                  <family.icon
                    className="w-10 h-10 text-[#615fff] mb-6 transition-all"
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
    </>
  );
};

export default DesignFamilies;
