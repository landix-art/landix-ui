import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rocket, Shield, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js Landing Pages - Build Fast, Convert Better",
  description:
    "Complete guide to building high-converting Next.js landing pages. Learn best practices, performance optimization, SEO, and get production-ready templates.",
  keywords: [
    "Next.js landing page",
    "React landing page",
    "landing page template",
    "Next.js 15",
    "landing page optimization",
    "conversion rate optimization",
    "Next.js SEO",
    "fast landing pages",
  ],
  openGraph: {
    title: "Next.js Landing Pages - Build Fast, Convert Better",
    description:
      "Complete guide to building high-converting Next.js landing pages with performance optimization and SEO.",
    type: "article",
    url: "https://landix.design/guides/nextjs-landing-pages",
  },
};

export default function NextjsLandingPagesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">
          Next.js Landing Pages: The Complete Guide for 2026
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Build lightning-fast, SEO-optimized landing pages with Next.js 15.
          Learn architecture patterns, performance tricks, and conversion
          optimization strategies.
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
          <div className="border rounded-lg p-6">
            <Rocket className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">
              Server-side rendering and static generation for instant loads
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <Shield className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">SEO Optimized</h3>
            <p className="text-sm text-muted-foreground">
              Built-in meta tags, sitemaps, and structured data support
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <TrendingUp className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">High Converting</h3>
            <p className="text-sm text-muted-foreground">
              Proven layouts and patterns that drive conversions
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Choose Next.js for Landing Pages?
        </h2>

        <p>
          Next.js has become the go-to framework for building modern landing
          pages, and for good reason. Here's why top companies choose Next.js:
        </p>

        <ul>
          <li>
            <strong>Server-Side Rendering (SSR):</strong> Perfect SEO with
            fully rendered HTML sent to crawlers
          </li>
          <li>
            <strong>Static Site Generation (SSG):</strong> Pre-render pages at
            build time for maximum performance
          </li>
          <li>
            <strong>Image Optimization:</strong> Automatic WebP conversion,
            lazy loading, and responsive images
          </li>
          <li>
            <strong>API Routes:</strong> Handle form submissions, analytics, and
            integrations without a separate backend
          </li>
          <li>
            <strong>Built-in Routing:</strong> File-based routing makes
            organizing pages intuitive
          </li>
          <li>
            <strong>TypeScript Support:</strong> Catch errors early with strong
            typing
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Essential Landing Page Sections
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">1. Hero Section</h3>
        <p>
          Your hero is make-or-break. It needs to communicate your value
          proposition in 5 seconds or less. Include a compelling headline,
          supporting copy, a strong CTA, and visual proof (product screenshot,
          demo video, or illustration).
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          2. Social Proof Section
        </h3>
        <p>
          Build trust immediately with customer logos, testimonials, or usage
          statistics. "Trusted by 10,000+ companies" or recognizable brand logos
          can increase conversions by 20-30%.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          3. Features/Benefits
        </h3>
        <p>
          Showcase your key features with icons, short descriptions, and
          visuals. Focus on benefits (what users gain) rather than features
          (what it does). Use a grid or bento layout for scanability.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          4. How It Works
        </h3>
        <p>
          Reduce friction by explaining your product in 3-4 simple steps.
          People need to understand how easy it is before they commit. Use
          numbers, icons, and concise copy.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">5. Pricing</h3>
        <p>
          Transparent pricing builds trust. Present clear tiers with feature
          comparisons. Highlight your most popular plan and include CTAs on each
          tier.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">6. FAQ Section</h3>
        <p>
          Address common objections and questions before they become barriers.
          This reduces support load and increases conversions by removing doubt.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          7. Final CTA Section
        </h3>
        <p>
          End with a strong call-to-action. Restate your value proposition and
          give visitors one last chance to convert. Keep it focused on a single
          action.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Next.js Landing Page Architecture
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          App Router vs Pages Router
        </h3>
        <p>
          Next.js 15 recommends the App Router for new projects. It offers
          better performance with React Server Components, improved data
          fetching, and built-in layouts. For landing pages, App Router's
          streaming and suspense features can dramatically improve perceived
          performance.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          File Structure Best Practices
        </h3>
        <p>Organize your landing page project like this:</p>

        <ul>
          <li>
            <code>/app</code> - Pages and layouts (App Router)
          </li>
          <li>
            <code>/components</code> - Reusable UI components
          </li>
          <li>
            <code>/lib</code> - Utilities, helpers, and configuration
          </li>
          <li>
            <code>/public</code> - Static assets (images, fonts)
          </li>
          <li>
            <code>/styles</code> - Global styles and Tailwind config
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Performance Optimization
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Core Web Vitals Matter
        </h3>
        <p>
          Google uses Core Web Vitals as a ranking factor. Your landing page
          should target:
        </p>

        <ul>
          <li>
            <strong>LCP (Largest Contentful Paint):</strong> Under 2.5s - Use
            Next.js Image component and prioritize hero images
          </li>
          <li>
            <strong>FID (First Input Delay):</strong> Under 100ms - Minimize
            JavaScript, use code splitting
          </li>
          <li>
            <strong>CLS (Cumulative Layout Shift):</strong> Under 0.1 - Set
            explicit image dimensions, avoid layout shifts
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Image Optimization
        </h3>
        <p>
          Next.js Image component automatically optimizes images. Always specify
          width and height, use priority prop for above-the-fold images, and
          leverage WebP format. For hero backgrounds, consider using CSS
          gradients instead of images when possible.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Code Splitting and Lazy Loading
        </h3>
        <p>
          Use dynamic imports for components below the fold. Animations, modal
          dialogs, and interactive features don't need to load immediately. This
          reduces initial bundle size and speeds up Time to Interactive.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          SEO Best Practices for Next.js Landing Pages
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Metadata and Open Graph
        </h3>
        <p>
          Next.js 15 offers the Metadata API for managing SEO tags. Always
          include title, description, Open Graph tags, and Twitter Card tags.
          Use dynamic metadata for personalized landing pages.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Structured Data (JSON-LD)
        </h3>
        <p>
          Add schema.org structured data to help search engines understand your
          content. For SaaS landing pages, use SoftwareApplication,
          Organization, and AggregateRating schemas.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Sitemap and Robots.txt
        </h3>
        <p>
          Next.js can generate sitemaps dynamically. Include all public pages
          and set appropriate priorities. Your robots.txt should allow crawlers
          and point to your sitemap.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Conversion Rate Optimization (CRO)
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          A/B Testing Integration
        </h3>
        <p>
          Integrate tools like Vercel Edge Middleware for A/B testing different
          headlines, CTAs, or layouts. Test one element at a time and let tests
          run until statistical significance.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Form Optimization
        </h3>
        <p>
          Keep forms short—every field reduces conversions. Use proper input
          types for mobile keyboards, add inline validation, and provide clear
          error messages. Consider multi-step forms for complex signups.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Trust Signals
        </h3>
        <p>
          Display security badges, certifications, privacy policies, and money-
          back guarantees. These reduce perceived risk and increase conversions,
          especially for B2B products.
        </p>

        <div className="not-prose bg-muted/50 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold mb-4">
            Production-Ready Landing Page Components
          </h3>
          <p className="text-muted-foreground mb-6">
            Stop building from scratch. Landix provides complete landing page
            sections built with Next.js 15, TypeScript, and Tailwind CSS.
            Copy-paste into your project and ship faster.
          </p>
          <Link
            href="/docs/introduction"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Components <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Deployment and Monitoring
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Deploy to Vercel
        </h3>
        <p>
          Vercel (created by Next.js creators) offers the best deployment
          experience. Edge network distribution, automatic HTTPS, and instant
          rollbacks. Connect your GitHub repo for automatic deployments on every
          push.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Analytics and Tracking
        </h3>
        <p>
          Implement analytics from day one. Use Vercel Analytics for Web Vitals
          monitoring, Google Analytics for traffic insights, and heat mapping
          tools like Hotjar to understand user behavior.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Common Mistakes to Avoid
        </h2>

        <ul>
          <li>
            <strong>Too Much Content:</strong> Landing pages should be focused.
            Remove distractions and guide visitors toward one action
          </li>
          <li>
            <strong>Slow Loading:</strong> Every 100ms delay costs you
            conversions. Optimize images, minimize JavaScript
          </li>
          <li>
            <strong>Generic Copy:</strong> Speak to your specific audience's
            pain points. Generic messaging doesn't convert
          </li>
          <li>
            <strong>Weak CTAs:</strong> Buttons should use action-oriented copy
            that communicates value
          </li>
          <li>
            <strong>No Mobile Optimization:</strong> Test on real mobile devices.
            Most traffic is mobile
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">Next Steps</h2>

        <p>
          Ready to build your Next.js landing page? Explore ready-to-use
          components or dive into specific section guides:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
          <Link
            href="/docs/introduction"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">Browse All Components →</h4>
            <p className="text-sm text-muted-foreground">
              Hero, features, pricing, and more
            </p>
          </Link>
          <Link
            href="/guides/react-hero-components"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">Hero Components Guide →</h4>
            <p className="text-sm text-muted-foreground">
              Build stunning hero sections that convert
            </p>
          </Link>
        </div>
      </article>
    </div>
  );
}
