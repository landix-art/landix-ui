// registry/hero-04/components/hero.tsx
import { motion } from "motion/react";
import { Zap, Shield, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <motion.section 
      className={cn("py-20 px-6")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          Ship products <br />
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            at lightning speed
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Everything you need to build modern web applications. From design to deployment.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button className="px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/30">
            Get Started Free
          </button>
          <button className="px-8 py-4 rounded-full border border-gray-700 hover:border-gray-600 text-gray-300 font-semibold transition-colors">
            View Pricing
          </button>
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, title: "Lightning Fast", desc: "Optimized for performance" },
            { icon: Shield, title: "Secure by Default", desc: "Built with security in mind" },
            { icon: Rocket, title: "Deploy Instantly", desc: "One-click deployments" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="p-6 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50">
              <Icon className="size-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
