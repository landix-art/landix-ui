"use client";

import { motion } from "motion/react";
import { Play, Star } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  description?: string;
  rating?: string;
  reviews?: string;
}

const HeroSection = ({
  title = "",
  description = "",
  rating = "",
  reviews = "",
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-purple-500 border-2 border-background flex items-center justify-center text-white font-semibold text-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Star className="size-5 fill-yellow-500 text-yellow-500" />
                <span className="font-bold text-white">{rating}</span>
                <span className="text-gray-400">({reviews})</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                Start Building
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 text-gray-300 font-semibold transition-all duration-300">
                <Play className="size-5" />
                Watch Demo
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-linear-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 animate-pulse" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
