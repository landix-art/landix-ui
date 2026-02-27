'use client';

import { motion } from "motion/react";
import { Tweet } from "react-tweet";

const TWEET_IDS = [
  "1922708673933058341",
  "1945752091647001069",
  "1941056185509319150",
  "1940519324143530458"
];

export function Testimonials() {
  return (
    <section className="w-full py-24 transition-colors">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            What People Are Saying on X
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {TWEET_IDS.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid relative"
            >
              <div className="flex justify-center [&>.react-tweet-theme]:mt-0 [&>.react-tweet-theme]:mb-0">
                <Tweet id={id} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
