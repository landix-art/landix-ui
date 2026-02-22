"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function LandixButton({ className }: { className?: string }) { 
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn("bg-black text-white px-4 py-2 rounded-md font-medium", className)}
    >
      Landix Button
    </motion.button>
  );
}
