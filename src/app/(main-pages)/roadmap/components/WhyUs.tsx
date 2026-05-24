"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const WhyUs = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="relative rounded-[2.5rem] overflow-hidden border border-[#615fff]/30 bg-linear-to-b from-[#615fff]/5 to-background p-10 md:p-16 text-center shadow-2xl shadow-[#615fff]/5">
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3], width: ["40%", "60%", "40%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-transparent via-[#615fff] to-transparent"
        />

        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12">
          Why Landix?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <motion.div
            className="space-y-4 p-8 rounded-3xl bg-zinc-700/5 border border-zinc-700/10 transition-transform"
          >
            <div className="flex items-center gap-3 text-zinc-700 font-semibold text-lg">
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
  );
};

export default WhyUs;
