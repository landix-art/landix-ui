import Hero from "@/components/docs/Hero";
import Features from "@/components/docs/Features";
import Pricing from "@/components/docs/Pricing";
import Introduction from "@/components/docs/Introduction";

export const categories = {
  introduction: {
    title: "Introduction",
    component: Introduction,
    group: "Getting Started",
  },
  hero: {
    title: "Hero Blocks",
    component: Hero,
    group: "Sections",
  },

  features: {
    title: "Feature Blocks",
    component: Features,
    group: "Sections",
  },

  pricing: {
    title: "Pricing Blocks",
    component: Pricing,
    group: "Sections",
  },
} as const;

export type CategoryKey = keyof typeof categories;
export const groupOrder = ["Getting Started", "Sections"] as const;
