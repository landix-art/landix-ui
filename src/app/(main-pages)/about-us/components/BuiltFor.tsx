import { motion } from "framer-motion";
import Badge from "./Badge";
import { Code2, PenTool, Sparkles } from "lucide-react";

const BuiltFor = () => {
  return (
    <section className="mb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Badge>Built to work together</Badge>

        <h2 className="text-3xl font-bold mb-4 mt-4">
          Every section feels like part of the same product
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Startup websites often feel stitched together. Landix sections are
          designed to match — so your site feels intentional from the first
          scroll to the last.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-[#615fff]/10 flex items-center justify-center mb-6">
              <Sparkles className="w-5 h-5 text-[#615fff]" />
            </div>

            <h3 className="text-lg font-bold mb-3">Consistent by default</h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Typography, spacing, and visual rhythm stay aligned across every
              section — no mismatched styles or awkward combinations.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-[#615fff]/10 flex items-center justify-center mb-6">
              <PenTool className="w-5 h-5 text-[#615fff]" />
            </div>

            <h3 className="text-lg font-bold mb-3">Designed with taste</h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Every block is crafted to feel premium out of the box — clean,
              modern, and made for ambitious startup brands.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-[#615fff]/10 flex items-center justify-center mb-6">
              <Code2 className="w-5 h-5 text-[#615fff]" />
            </div>

            <h3 className="text-lg font-bold mb-3">Fully customizable</h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Built with shadcn/ui and Tailwind, so you can tweak, extend, and
              make everything yours without fighting messy abstractions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BuiltFor;
