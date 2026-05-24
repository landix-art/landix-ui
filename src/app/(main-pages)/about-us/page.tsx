"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  PenTool,
  Code2,
  LucideLinkedin,
  Twitter,
  Info,
} from "lucide-react";
import Image from "next/image";
import Hero from "./components/Hero";
import Badge from "./components/Badge";
import ProblemVsSolution from "./components/ProblemVsSolution";
import BuiltFor from "./components/BuiltFor";
import Me from "./components/Me";
import { CtaSection } from "../(home)/components/CtaSection";

export default function AboutPage() {
  return (
    <>
      <div className="relative z-10 overflow-hidden max-w-5xl mx-auto px-6 pt-30">
        <Hero />
        <ProblemVsSolution />
        <BuiltFor />
        <Me />
      </div>
      <CtaSection />
    </>
  );
}
