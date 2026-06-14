// registry/hero-01/components/hero.tsx
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <motion.section className={cn("py-20")}>
      <h1></h1>
      <button>
        Start <ArrowRight className="size-4" />
      </button>
    </motion.section>
  );
}
