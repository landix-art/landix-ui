import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layout, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Feature Section Templates - Showcase Your Product",
  description:
    "Learn how to design effective feature sections for landing pages. Explore templates, layouts, and best practices to showcase your product's benefits.",
  keywords: [
    "feature section",
    "feature templates",
    "product features",
    "landing page features",
    "React feature component",
    "feature showcase",
    "benefit section",
    "SaaS features",
  ],
  openGraph: {
    title: "Feature Section Templates - Showcase Your Product",
    description:
      "Learn how to design effective feature sections with templates and best practices.",
    type: "article",
    url: "https://landix.design/guides/feature-section-templates",
  },
};

export default function FeatureSectionTemplatesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">
          Feature Section Templates: Complete Guide for 2026
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Design feature sections that sell your product's value. Learn proven
          layouts, copywriting strategies, and visual patterns that convert
          visitors.
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
          <div className="border rounded-lg p-6">
            <Layout className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Proven Layouts</h3>
            <p className="text-sm text-muted-foreground">
              Grid, bento, and split designs that guide attention
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <CheckCircle className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Benefits-Focused</h3>
            <p className="text-sm text-muted-foreground">
              Communicate value, not just technical features
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <Star className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Visual Hierarchy</h3>
            <p className="text-sm text-muted-foreground">
              Icons, images, and typography that enhance clarity
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Feature Sections Matter
        </h2>

        <p>
          After your hero grabs attention, your feature section closes the deal.
          This is where you answer "Why should I choose your product?" Effective
          feature sections:
        </p>

        <ul>
          <li>
            <strong>Communicate Value:</strong> Show how your product solves
            specific problems
          </li>
          <li>
            <strong>Build Trust:</strong> Demonstrate capabilities with visuals
            and proof
          </li>
          <li>
            <strong>Address Objections:</strong> Answer "Can it do X?" before
            users ask
          </li>
          <li>
            <strong>Guide Decision-Making:</strong> Highlight differentiators vs.
            competitors
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Popular Feature Section Layouts
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          1. Grid Layout (3-Column)
        </h3>
        <p>
          The most common pattern: features arranged in a 3-column grid. Each
          cell contains an icon, headline, and description. Works well for
          showcasing 6-9 features with equal importance. Clean, scannable, and
          mobile-responsive.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          2. Bento Grid Layout
        </h3>
        <p>
          Modern, asymmetric grid where feature cards have different sizes.
          Important features get larger cards with more visual weight. This
          creates visual interest while maintaining hierarchy. Popular in 2026
          for SaaS landing pages.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          3. Split (Image + Text)
        </h3>
        <p>
          Alternating left/right layout. Each feature gets a full section with
          text on one side, visual (screenshot, illustration, diagram) on the
          other. Best for explaining complex features or showing the product in
          action.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          4. Icon Grid with Tabs
        </h3>
        <p>
          Display feature categories as tabs, clicking each tab reveals relevant
          features below. Reduces vertical scroll while organizing features by
          theme (e.g., Collaboration, Security, Analytics).
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          5. Timeline/Process
        </h3>
        <p>
          Show features as steps in a workflow. Perfect for products with
          sequential processes (e.g., "1. Import → 2. Analyze → 3. Export").
          Uses numbered steps with connecting lines or arrows.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Features vs. Benefits: The Critical Difference
        </h2>

        <p>
          Users don't care about features—they care about what those features do
          for them. Always frame features as benefits:
        </p>

        <ul>
          <li>
            <strong>Feature:</strong> "Real-time collaboration" →{" "}
            <strong>Benefit:</strong> "Work together without waiting for updates"
          </li>
          <li>
            <strong>Feature:</strong> "256-bit encryption" →{" "}
            <strong>Benefit:</strong> "Your data stays private and secure"
          </li>
          <li>
            <strong>Feature:</strong> "API integrations" →{" "}
            <strong>Benefit:</strong> "Connect your existing tools in minutes"
          </li>
          <li>
            <strong>Feature:</strong> "Automated backups" →{" "}
            <strong>Benefit:</strong> "Never lose your work again"
          </li>
        </ul>

        <p>
          Start with the benefit in your headline, then explain the feature in
          supporting copy.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Visual Elements That Work
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Icons</h3>
        <p>
          Icons help users scan content quickly. Use a consistent icon style
          (outline, filled, or duotone—don't mix). Choose icons that clearly
          represent the feature. Libraries like Lucide, Heroicons, or Phosphor
          work well.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Product Screenshots
        </h3>
        <p>
          Show your product in action. Use annotated screenshots to highlight
          specific features. Add browser chrome or device frames for context.
          Ensure screenshots are high-resolution and up-to-date.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Illustrations</h3>
        <p>
          Custom illustrations communicate concepts that screenshots can't.
          Useful for abstract features (security, speed, scalability). Keep
          style consistent with your brand. Tools like Figma or Blush offer
          customizable illustration systems.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Animations</h3>
        <p>
          Subtle animations draw attention and demonstrate functionality. Animate
          on scroll with Framer Motion or CSS. Don't overdo it—animations should
          enhance, not distract.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Copywriting Best Practices
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Lead with Benefits
        </h3>
        <p>
          Your headline should communicate the outcome, not the mechanism. "Save
          10 Hours Per Week" is more compelling than "Automated Workflow
          Management."
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Keep It Concise</h3>
        <p>
          Feature descriptions should be 1-2 sentences maximum. Users scan, they
          don't read. Focus on the core value proposition. If you need more
          detail, link to documentation.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Use Active Voice</h3>
        <p>
          "Automate your workflows" is stronger than "Workflows can be
          automated." Active voice feels direct and actionable.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Address User Pain Points
        </h3>
        <p>
          Frame features as solutions to problems. "Tired of manual data entry?"
          creates immediate relevance. Then show how your feature solves it.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          How Many Features to Show?
        </h2>

        <p>
          There's no magic number, but guidelines exist based on product
          complexity:
        </p>

        <ul>
          <li>
            <strong>Simple Products (3-6 features):</strong> Mobile apps, single-
            purpose tools. Focus on core differentiators only.
          </li>
          <li>
            <strong>Mid-Complexity (6-9 features):</strong> SaaS products,
            productivity tools. Cover main capabilities without overwhelming.
          </li>
          <li>
            <strong>Complex Products (9-12+ features):</strong> Enterprise
            software, platforms. Use tabs or categories to organize.
          </li>
        </ul>

        <p>
          Remember: your landing page should highlight top features, not
          exhaustively list everything. Link to a features page for complete
          details.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Mobile Feature Sections
        </h2>

        <p>
          Feature grids often break on mobile. Adapt your design:
        </p>

        <ul>
          <li>
            <strong>Stack Vertically:</strong> Convert multi-column grids to
            single column on mobile
          </li>
          <li>
            <strong>Reduce Text:</strong> Mobile descriptions should be even more
            concise
          </li>
          <li>
            <strong>Touch-Friendly:</strong> If using tabs or interactive
            elements, ensure tap targets are 44x44px minimum
          </li>
          <li>
            <strong>Optimize Images:</strong> Use Next.js Image for responsive
            images that adapt to screen size
          </li>
          <li>
            <strong>Progressive Disclosure:</strong> Consider "Read more" links
            instead of showing all details upfront
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Accessibility Considerations
        </h2>

        <ul>
          <li>
            <strong>Semantic HTML:</strong> Use proper heading hierarchy (h2 for
            section title, h3 for feature titles)
          </li>
          <li>
            <strong>Alt Text for Icons:</strong> If icons are decorative, use
            aria-hidden. If meaningful, provide alt text
          </li>
          <li>
            <strong>Color Contrast:</strong> Ensure text meets WCAG AA standards
            (4.5:1 for body text)
          </li>
          <li>
            <strong>Focus Indicators:</strong> If features are interactive, show
            clear focus states
          </li>
          <li>
            <strong>Screen Reader Friendly:</strong> Test with VoiceOver or NVDA
            to ensure content makes sense
          </li>
        </ul>

        <div className="not-prose bg-muted/50 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold mb-4">
            Ready-to-Use Feature Components
          </h3>
          <p className="text-muted-foreground mb-6">
            Landix provides production-ready feature sections with grid, bento,
            and split layouts. Built with React, TypeScript, Tailwind CSS, and
            Framer Motion animations.
          </p>
          <Link
            href="/docs/features"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Browse Feature Components <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Advanced Feature Section Patterns
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Feature Comparison Table
        </h3>
        <p>
          For competitive differentiation, add a comparison table showing "Us
          vs. Competitors." Use checkmarks and crosses to highlight your
          advantages. Be fair but strategic.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Interactive Demos
        </h3>
        <p>
          Embed interactive elements that let users try features. Examples:
          color picker for design tools, calculator for pricing tools, live
          preview for code editors. Increases engagement dramatically.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Video Demos
        </h3>
        <p>
          Short (15-30 second) videos showing features in action. Autoplay on
          mute with captions. Videos communicate more than static images,
          especially for complex interactions.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Metrics and Proof Points
        </h3>
        <p>
          Include specific numbers: "10x faster," "99.9% uptime," "Save 15 hours
          per week." Quantified benefits are more credible than vague claims.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Common Mistakes to Avoid
        </h2>

        <ul>
          <li>
            <strong>Feature Dumping:</strong> Listing everything overwhelms
            users. Prioritize ruthlessly.
          </li>
          <li>
            <strong>Jargon Overload:</strong> Technical terms alienate
            non-technical buyers. Use plain language.
          </li>
          <li>
            <strong>No Visuals:</strong> Text-only features are hard to scan.
            Always include icons or images.
          </li>
          <li>
            <strong>Ignoring Competitors:</strong> Show why you're better than
            alternatives, don't just list features.
          </li>
          <li>
            <strong>Inconsistent Formatting:</strong> Keep icon style, text
            length, and card sizing consistent across all features.
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Testing and Optimization
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">A/B Test Layout</h3>
        <p>
          Try grid vs. bento vs. split layouts to see which resonates with your
          audience. Track time on page and scroll depth.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Heatmap Analysis
        </h3>
        <p>
          Use tools like Hotjar to see where users look and click. Adjust
          feature order based on attention patterns.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">User Feedback</h3>
        <p>
          Ask customers which features convinced them to buy. Highlight those
          more prominently. Remove features that don't resonate.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Feature Section Psychology
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          The Rule of Three
        </h3>
        <p>
          Three items feel complete and balanced. If listing more than 3, use
          multiples of 3 (6, 9) for visual harmony.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          F-Pattern Scanning
        </h3>
        <p>
          Users scan in an F-pattern (top to bottom, left to right). Place your
          strongest features in the top-left positions.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Progressive Disclosure
        </h3>
        <p>
          Show high-level benefits first, offer "Learn more" links for details.
          This respects users' time while satisfying the detail-hungry.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">Next Steps</h2>

        <p>
          Ready to build feature sections that convert? Explore production-ready
          components or learn about other landing page sections:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
          <Link
            href="/docs/features"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">Browse Feature Components →</h4>
            <p className="text-sm text-muted-foreground">
              Production-ready feature section templates
            </p>
          </Link>
          <Link
            href="/guides/react-hero-components"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">Hero Components Guide →</h4>
            <p className="text-sm text-muted-foreground">
              Learn to build compelling hero sections
            </p>
          </Link>
        </div>
      </article>
    </div>
  );
}
