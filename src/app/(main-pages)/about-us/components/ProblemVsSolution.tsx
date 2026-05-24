import { motion } from "framer-motion";
import Badge from "./Badge";

const ProblemVsSolution = () => {
  return (
    <section className="mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="p-10 rounded-3xl bg-secondary/40 border border-border">
          <Badge>The Problem</Badge>

          <h2 className="text-2xl font-bold mb-4 mt-4">
            Most startup websites feel stitched together.
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed">
            AI can generate sections. Component libraries can speed things up.
            But once you start mixing styles, spacing, and patterns, things stop
            feeling intentional. Your product starts to look inconsistent — even
            if the code works.
          </p>
        </div>

        <div className="p-10 rounded-3xl bg-[#615fff]/3 border border-[#615fff]/10">
          <Badge>Our Approach</Badge>

          <h2 className="text-2xl font-bold mb-4 mt-4">
            Sections designed to feel like one product.
          </h2>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Every Landix block is crafted to work naturally with the rest. Add a
            hero, pricing section, or testimonial — typography, spacing, and
            visual style stay consistent from start to finish.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemVsSolution;
