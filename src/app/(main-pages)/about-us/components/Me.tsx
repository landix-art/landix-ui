import Image from "next/image";
import { motion } from "framer-motion";
import { LucideLinkedin } from "lucide-react";

const Me = () => {
  return (
    <section className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12">
          Built in public by obsessed founder
        </h2>

        <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-card border border-border shadow-sm max-w-sm mx-auto">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-border relative mb-4">
            <Image
              src="/assets/img/salar-rismantab.jpg"
              alt="Salar - Founder of Landix"
              fill
              className="object-cover transition-all duration-500"
            />
          </div>
          <h3 className="text-xl font-bold mb-1">Salar</h3>
          <p className="text-sm font-medium text-[#7c86ff] mb-4">
            Founder, Designer & Engineer
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/salar-rismantab-33073b1b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-[#7c86ff] transition-colors"
            >
              <LucideLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/salarbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-[#7c86ff] transition-colors"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Me;
