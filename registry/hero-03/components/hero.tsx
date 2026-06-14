// registry/hero-03/components/hero.tsx
import { motion } from "motion/react";
import { Play, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <motion.section 
      className={cn("py-20 px-6")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-background" />
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm text-yellow-500">
                <Star className="size-4 fill-current" />
                <span className="font-semibold">4.9/5</span>
                <span className="text-gray-400">(2.3k reviews)</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold mb-6"
            >
              The future of web development
            </motion.h1>
            
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 mb-8"
            >
              Ship beautiful products faster with production-ready components and templates.
            </motion.p>
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                Start Building
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-600 text-gray-300 font-medium transition-colors">
                <Play className="size-4" />
                Watch Demo
              </button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
