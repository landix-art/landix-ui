"use client";

import { motion } from "motion/react";
import { Zap, Shield, Rocket } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  description?: string;
}

const HeroSection = ({
  title = "",
  description = "",
}: HeroSectionProps) => {
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Optimized for performance" },
    { icon: Shield, title: "Secure by Default", desc: "Built with security in mind" },
    { icon: Rocket, title: "Deploy Instantly", desc: "One-click deployments" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          {title.split("at lightning speed")[0]}
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            at lightning speed
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg transition-all shadow-2xl shadow-blue-500/40 hover:scale-105">
            Get Started Free
          </button>
          <button className="px-10 py-5 rounded-full border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 text-gray-300 font-bold text-lg transition-all">
            View Pricing
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {features.map(({ icon: Icon, title: featureTitle, desc }, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all hover:scale-105"
            >
              <Icon className="size-10 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">{featureTitle}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
