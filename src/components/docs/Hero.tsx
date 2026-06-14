"use client";

import { ComponentPlayground } from "../playground/ComponentPlayground";
import { useTaste } from "@/contexts/TasteContext";

const heroData = [
  {
    id: "hero-1",
    apple: {
      title: 'Hero 1 - Apple taste',
      previewUrl: 'http://localhost:3000/preview/hero-1',
      files: [
        {
          fileName: 'components/IntroSection.tsx',
          language: 'tsx',
          code: `import Image from "next/image";

interface Logo {
  imgSrc: string;
  alt: string;
}

interface IntroSectionProps {
  title?: string;
  description?: string;
  logos?: Logo[];
}

export default function IntroSection({ title, description, logos }: IntroSectionProps) {
  return (
    <section className="relative z-10 overflow-hidden">
      <div className="container mt-48 mb-24 flex flex-col flex-wrap justify-center relative z-10">
        <h1 className="text-center lg:text-left lg:w-212.5">{title}</h1>
        <p className="text-center lg:w-187.5 lg:text-left lg:text-lg lg:mt-5 text-gray-300">
          {description}
        </p>
        <ul className="flex gap-10 items-center my-7">
          {logos?.map((e, i) => (
            <li key={i}>
              <Image src={e.imgSrc} alt={e.alt} width={100} height={100} />
            </li>
          ))}
        </ul>
        <button className="btn glass text-white mt-5 w-max rounded-xl">
          Call to action
        </button>
      </div>
    </section>
  );
}`,
        },
      ],
    },
    linear: {
      title: 'Hero 1 - Linear taste',
      previewUrl: 'http://localhost:3000/preview/hero-1',
      files: [
        {
          fileName: 'components/IntroSection.tsx',
          language: 'tsx',
          code: `interface IntroSectionProps {
  title?: string;
  description?: string;
}

export default function IntroSection({ title, description }: IntroSectionProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-semibold mb-6 tracking-tight">{title}</h1>
        <p className="text-xl text-gray-600 mb-8">{description}</p>
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </section>
  );
}`,
        },
      ],
    },
    ai: {
      title: 'Hero 1 - AI taste',
      previewUrl: 'http://localhost:3000/preview/hero-1',
      files: [
        {
          fileName: 'components/IntroSection.tsx',
          language: 'tsx',
          code: `import { motion } from "motion/react";

interface IntroSectionProps {
  title?: string;
  description?: string;
}

export default function IntroSection({ title, description }: IntroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-32 px-6 bg-gradient-to-b from-purple-900/20 to-transparent"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl text-gray-400 mb-8">{description}</p>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl">
          Launch
        </button>
      </div>
    </motion.section>
  );
}`,
        },
      ],
    },
  },
  {
    id: "hero-2",
    apple: {
      title: 'Hero 2 - Apple taste',
      previewUrl: 'http://localhost:3000/preview/hero-2',
      files: [
        {
          fileName: 'components/HeroSection.tsx',
          language: 'tsx',
          code: `import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 mb-6">
          <Sparkles className="size-4" />
          <span>Now available</span>
        </div>
        <h1 className="text-6xl font-bold mb-6">
          Build faster with <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            modern components
          </span>
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          A collection of beautifully designed components.
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}`,
        },
      ],
    },
    linear: {
      title: 'Hero 2 - Linear taste',
      previewUrl: 'http://localhost:3000/preview/hero-2',
      files: [
        {
          fileName: 'components/HeroSection.tsx',
          language: 'tsx',
          code: `export default function HeroSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 text-sm border border-gray-200 rounded-full mb-6">
          Now available
        </div>
        <h1 className="text-7xl font-semibold mb-6 tracking-tight">
          Build faster with modern components
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A collection of beautifully designed components.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}`,
        },
      ],
    },
    ai: {
      title: 'Hero 2 - AI taste',
      previewUrl: 'http://localhost:3000/preview/hero-2',
      files: [
        {
          fileName: 'components/HeroSection.tsx',
          language: 'tsx',
          code: `import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-950/20"
    >
      <div className="text-center px-6">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6"
        >
          <Sparkles className="size-4" />
          <span>Now available</span>
        </motion.div>
        <h1 className="text-7xl font-bold mb-6">
          Build faster with <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            modern components
          </span>
        </h1>
      </div>
    </motion.section>
  );
}`,
        },
      ],
    },
  },
  {
    id: "hero-3",
    apple: {
      title: 'Hero 3 - Apple taste',
      previewUrl: 'http://localhost:3000/preview/hero-3',
      files: [
        {
          fileName: 'components/HeroSection.tsx',
          language: 'tsx',
          code: `import { Play, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-background" />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="size-5 fill-yellow-500 text-yellow-500" />
                <span className="font-bold">4.9/5</span>
                <span className="text-gray-400">(2.3k reviews)</span>
              </div>
            </div>
            <h1 className="text-7xl font-bold mb-6">The future of web development</h1>
            <p className="text-xl text-gray-400 mb-8">
              Ship beautiful products faster with production-ready components.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl">
                Start Building
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 rounded-xl">
                <Play className="size-5" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        </div>
      </div>
    </section>
  );
}`,
        },
      ],
    },
    linear: {
      title: 'Hero 3 - Linear taste',
      previewUrl: 'http://localhost:3000/preview/hero-3',
      files: [
        {
          fileName: 'components/HeroSection.tsx',
          language: 'tsx',
          code: `import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <span className="font-semibold">★ 4.9/5</span>
          <span>·</span>
          <span>2.3k reviews</span>
        </div>
        <h1 className="text-7xl font-semibold mb-6 tracking-tight">
          The future of web development
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Ship beautiful products faster with production-ready components.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            Start Building
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg">
            <Play className="size-4" />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}`,
        },
      ],
    },
    ai: {
      title: 'Hero 3 - AI taste',
      previewUrl: 'http://localhost:3000/preview/hero-3',
      files: [
        {
          fileName: 'components/HeroSection.tsx',
          language: 'tsx',
          code: `import { motion } from "motion/react";
import { Play, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ x: -20 }} animate={{ x: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="size-5 fill-yellow-500 text-yellow-500" />
                <span className="font-bold">4.9/5</span>
              </div>
            </div>
            <h1 className="text-7xl font-bold mb-6">The future of web development</h1>
            <p className="text-xl text-gray-400 mb-8">
              Ship beautiful products faster.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/25">
              Start Building
            </button>
          </motion.div>
          <motion.div initial={{ x: 20 }} animate={{ x: 0 }}>
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}`,
        },
      ],
    },
  },
  {
    id: "hero-4",
    apple: {
      title: 'Hero 4 - Apple taste',
      previewUrl: 'http://localhost:3000/preview/hero-4',
      files: [
        {
          fileName: 'components/HeroSection.tsx',
          language: 'tsx',
          code: `import { Zap, Shield, Rocket } from "lucide-react";

export default function HeroSection() {
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Optimized for performance" },
    { icon: Shield, title: "Secure by Default", desc: "Built with security in mind" },
    { icon: Rocket, title: "Deploy Instantly", desc: "One-click deployments" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-8xl font-bold mb-6">
          Ship products <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            at lightning speed
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Everything you need to build modern web applications.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
            Get Started Free
          </button>
          <button className="px-8 py-4 rounded-full border border-gray-700 text-gray-300 font-semibold">
            View Pricing
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50">
              <Icon className="size-10 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
        },
      ],
    },
    linear: {
      title: 'Hero 4 - Linear taste',
      previewUrl: 'http://localhost:3000/preview/hero-4',
      files: [
        {
          fileName: 'components/HeroSection.tsx',
          language: 'tsx',
          code: `import { Zap, Shield, Rocket } from "lucide-react";

export default function HeroSection() {
  const features = [
    { icon: Zap, title: "Lightning Fast" },
    { icon: Shield, title: "Secure by Default" },
    { icon: Rocket, title: "Deploy Instantly" },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-8xl font-semibold mb-6 tracking-tight">
          Ship products at lightning speed
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Everything you need to build modern web applications.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <button className="px-8 py-4 bg-black text-white rounded-lg font-semibold">
            Get Started Free
          </button>
          <button className="px-8 py-4 border border-gray-300 rounded-lg font-semibold">
            View Pricing
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map(({ icon: Icon, title }, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-xl">
              <Icon className="size-8 mb-3 mx-auto text-gray-800" />
              <h3 className="font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
        },
      ],
    },
    ai: {
      title: 'Hero 4 - AI taste',
      previewUrl: 'http://localhost:3000/preview/hero-4',
      files: [
        {
          fileName: 'components/HeroSection.tsx',
          language: 'tsx',
          code: `import { motion } from "motion/react";
import { Zap, Shield, Rocket } from "lucide-react";

export default function HeroSection() {
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Optimized for performance" },
    { icon: Shield, title: "Secure by Default", desc: "Built with security in mind" },
    { icon: Rocket, title: "Deploy Instantly", desc: "One-click deployments" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center px-6">
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="text-8xl font-bold mb-6"
        >
          Ship products <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            at lightning speed
          </span>
        </motion.h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Everything you need to build modern web applications.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-2xl shadow-blue-500/40">
            Get Started Free
          </button>
          <button className="px-10 py-5 rounded-full border-2 border-gray-700 text-gray-300 font-bold">
            View Pricing
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:scale-105 transition"
            >
              <Icon className="size-10 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}`,
        },
      ],
    },
  },
];

export default function Hero() {
  const { taste } = useTaste();

  return (
    <div className="space-y-12">
      {heroData.map((hero) => {
        const demo = hero[taste];
        return (
          <div key={hero.id}>
            <ComponentPlayground data={demo} />
          </div>
        );
      })}
    </div>
  );
}
