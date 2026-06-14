import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Zap, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "React Hero Components - Beautiful Landing Page Sections",
  description:
    "Discover production-ready React hero components built with Next.js, TypeScript, and Tailwind CSS. Copy-paste hero sections with animations for your landing page.",
  keywords: [
    "React hero components",
    "Next.js hero section",
    "landing page hero",
    "React landing page",
    "hero section examples",
    "Tailwind CSS hero",
    "animated hero section",
    "TypeScript hero component",
  ],
  openGraph: {
    title: "React Hero Components - Beautiful Landing Page Sections",
    description:
      "Production-ready React hero components with animations. Built with Next.js, TypeScript, and Tailwind CSS.",
    type: "article",
    url: "https://landix.design/guides/react-hero-components",
  },
};

export default function ReactHeroComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">
          React Hero Components: Complete Guide for 2026
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Learn how to build stunning hero sections for your React applications
          with modern best practices, animations, and responsive design.
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
          <div className="border rounded-lg p-6">
            <Code2 className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">TypeScript Ready</h3>
            <p className="text-sm text-muted-foreground">
              Fully typed components with IntelliSense support
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <Zap className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Performance First</h3>
            <p className="text-sm text-muted-foreground">
              Optimized for Core Web Vitals and SEO
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <Layers className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Fully Customizable</h3>
            <p className="text-sm text-muted-foreground">
              Easy to adapt to your brand and design system
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          What Makes a Great Hero Component?
        </h2>

        <p>
          A hero component is the first thing visitors see on your landing
          page. It needs to capture attention, communicate value, and drive
          action—all within seconds. Here's what makes a React hero component
          truly effective:
        </p>

        <ul>
          <li>
            <strong>Clear Value Proposition:</strong> Immediately communicate
            what your product does and who it's for
          </li>
          <li>
            <strong>Visual Hierarchy:</strong> Guide the eye through headline,
            subheading, and call-to-action
          </li>
          <li>
            <strong>Responsive Design:</strong> Perfect layout on mobile,
            tablet, and desktop
          </li>
          <li>
            <strong>Performance:</strong> Fast loading with optimized images and
            minimal JavaScript
          </li>
          <li>
            <strong>Accessibility:</strong> Semantic HTML and ARIA labels for
            screen readers
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Popular Hero Component Patterns
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          1. Center-Aligned Hero
        </h3>
        <p>
          The classic center-aligned hero focuses all attention on your main
          message. Perfect for SaaS products, apps, and services where the copy
          is king. Typically includes a headline, supporting text, CTA buttons,
          and social proof elements like customer logos.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          2. Split Hero (50/50)
        </h3>
        <p>
          Split heroes divide the screen between text content and a visual
          element (product screenshot, illustration, or video). This pattern
          works well when you have strong visual assets that demonstrate your
          product's value.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          3. Full-Width Background Hero
        </h3>
        <p>
          Using a full-width image or gradient background creates an immersive
          first impression. This pattern is popular for creative agencies,
          portfolios, and brands with strong visual identities.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          4. Animated Hero with Motion
        </h3>
        <p>
          Adding subtle animations with Framer Motion or similar libraries can
          make your hero more engaging. Fade-ins, slide-ups, and parallax
          effects draw attention without being distracting.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Building Hero Components with Modern Tools
        </h2>

        <p>
          The React ecosystem offers powerful tools for building hero
          components:
        </p>

        <ul>
          <li>
            <strong>Next.js:</strong> Server-side rendering and Image
            optimization for better performance
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Utility-first styling for rapid
            development and consistency
          </li>
          <li>
            <strong>Framer Motion:</strong> Production-ready animations that
            enhance user experience
          </li>
          <li>
            <strong>TypeScript:</strong> Type safety prevents bugs and improves
            developer experience
          </li>
          <li>
            <strong>shadcn/ui:</strong> Accessible component primitives that you
            can customize
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Hero Component Best Practices
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Optimize for Performance
        </h3>
        <p>
          Use Next.js Image component for automatic optimization, lazy loading,
          and modern formats like WebP. Keep hero animations lightweight—prefer
          CSS transforms and opacity over layout-shifting properties.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Mobile-First Design
        </h3>
        <p>
          Over 60% of web traffic is mobile. Design your hero component for
          small screens first, then enhance for larger viewports. Test on real
          devices to ensure touch targets are accessible and text is readable.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Clear Call-to-Action
        </h3>
        <p>
          Your primary CTA button should stand out visually and communicate
          clear value. Use action-oriented copy like "Start Free Trial" instead
          of generic "Learn More." Consider adding a secondary, lower-commitment
          CTA.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Social Proof
        </h3>
        <p>
          Including customer logos, testimonials, or usage statistics in your
          hero builds trust immediately. "Trusted by 10,000+ companies" or
          showing recognizable brand logos can significantly boost conversions.
        </p>

        <div className="not-prose bg-muted/50 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold mb-4">
            Ready-to-Use Hero Components
          </h3>
          <p className="text-muted-foreground mb-6">
            Landix offers production-ready hero sections built with Next.js,
            TypeScript, Tailwind CSS, and Framer Motion. Copy-paste into your
            project and customize to match your brand.
          </p>
          <Link
            href="/docs/hero"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Browse Hero Components <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Common Hero Component Mistakes to Avoid
        </h2>

        <ul>
          <li>
            <strong>Too Much Text:</strong> Keep your hero concise. Visitors
            should understand your value in 3-5 seconds
          </li>
          <li>
            <strong>Weak Headlines:</strong> Generic headlines like "Welcome"
            waste valuable space. Be specific about your value
          </li>
          <li>
            <strong>Slow Loading:</strong> Heavy images or animations hurt your
            conversion rate. Optimize everything
          </li>
          <li>
            <strong>Buried CTA:</strong> Your primary button should be
            immediately visible without scrolling
          </li>
          <li>
            <strong>Poor Contrast:</strong> Ensure text is readable over
            background images or gradients
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Hero Component Trends in 2026
        </h2>

        <p>Modern hero sections are embracing:</p>

        <ul>
          <li>
            <strong>Bento Grid Layouts:</strong> Organized content blocks for
            showcasing multiple features
          </li>
          <li>
            <strong>3D Elements:</strong> Subtle 3D graphics and interactive
            visuals (when performance allows)
          </li>
          <li>
            <strong>Glassmorphism:</strong> Frosted glass effects for modern,
            premium aesthetics
          </li>
          <li>
            <strong>Micro-interactions:</strong> Small animations that respond
            to user behavior
          </li>
          <li>
            <strong>Video Backgrounds:</strong> Short, looping videos that
            showcase products in action
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">Next Steps</h2>

        <p>
          Ready to build amazing hero sections for your React application?
          Explore our collection of production-ready hero components, or learn
          about other landing page sections:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
          <Link
            href="/docs/hero"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">View Hero Components →</h4>
            <p className="text-sm text-muted-foreground">
              Browse 4+ ready-to-use hero section variants
            </p>
          </Link>
          <Link
            href="/guides/pricing-section-designs"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">Pricing Section Guide →</h4>
            <p className="text-sm text-muted-foreground">
              Learn how to build effective pricing tables
            </p>
          </Link>
        </div>
      </article>
    </div>
  );
}
