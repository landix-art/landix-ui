import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Badge from "./Badge";

const Hero = () => {
  return (
    <>
      <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[#615fff] rounded-full blur-[190px] pointer-events-none -z-10 opacity-5" />
      <section className="text-center max-w-3xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge>
            <motion.div>
              <Info className="w-4 h-4" />
            </motion.div>
            About Landix
          </Badge>
          <h1 className="text-4xl md:text-6xl mt-4 font-extrabold tracking-tight mb-8 leading-tight">
            Stop building Frankensteins. <br className="hidden md:block" />
            Build with{" "}
            <span className="relative inline-block highlight-marker">
              Unified Taste.
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Landix provides copy-paste React blocks designed with a singular,
            cohesive aesthetic. Get the pixel-perfect quality of a premium Figma
            file, straight into your codebase.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
