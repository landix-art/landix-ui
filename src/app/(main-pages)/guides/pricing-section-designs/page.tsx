import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DollarSign, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing Section Designs - Best Practices & Examples",
  description:
    "Learn how to design high-converting pricing sections. Explore pricing table examples, psychology strategies, and best practices for SaaS products.",
  keywords: [
    "pricing section design",
    "pricing table",
    "SaaS pricing",
    "pricing page",
    "pricing psychology",
    "pricing strategy",
    "React pricing component",
    "pricing table examples",
  ],
  openGraph: {
    title: "Pricing Section Designs - Best Practices & Examples",
    description:
      "Learn how to design high-converting pricing sections with examples and best practices.",
    type: "article",
    url: "https://landix.design/guides/pricing-section-designs",
  },
};

export default function PricingSectionDesignsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">
          Pricing Section Designs: Complete Guide for 2026
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Master pricing page design with psychology-backed strategies. Learn
          how to present pricing that converts visitors into paying customers.
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
          <div className="border rounded-lg p-6">
            <DollarSign className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Conversion Focused</h3>
            <p className="text-sm text-muted-foreground">
              Design patterns proven to increase signup rates
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <Users className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">User Psychology</h3>
            <p className="text-sm text-muted-foreground">
              Apply behavioral economics to pricing displays
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <TrendingUp className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">A/B Tested</h3>
            <p className="text-sm text-muted-foreground">
              Layouts tested by thousands of SaaS companies
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Pricing Design Matters
        </h2>

        <p>
          Your pricing page is where visitors become customers. Even small
          design changes can dramatically impact conversion rates. Studies show
          that optimized pricing pages can increase conversions by 20-40%.
        </p>

        <p>
          The challenge: present pricing clearly while reducing friction,
          addressing objections, and guiding users toward your preferred plan.
          Design plays a crucial role in this balance.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Popular Pricing Table Layouts
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          1. Classic Three-Column Layout
        </h3>
        <p>
          The standard for SaaS: three pricing tiers arranged horizontally. The
          middle tier (your target plan) is visually emphasized with a
          "Popular" badge, different color, or elevated card. This layout works
          because it presents clear choices without overwhelming users.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          2. Comparison Table
        </h3>
        <p>
          Detailed feature comparison across plans. Each row shows a feature,
          each column shows which plans include it (checkmarks vs. crosses).
          Best for complex products where feature differences matter. Can be
          combined with summary cards above the table.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          3. Toggle (Monthly/Yearly)
        </h3>
        <p>
          Add a toggle switch to let users switch between monthly and annual
          billing. Show the savings (e.g., "Save 20% with annual") to encourage
          longer commitments. This increases lifetime value while giving users
          control.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          4. Single Plan Focus
        </h3>
        <p>
          For products with one primary offering, present that plan prominently
          with optional add-ons below. Reduces decision paralysis and works well
          for straightforward products.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          5. Usage-Based Pricing
        </h3>
        <p>
          Display a calculator or slider where users can estimate their costs
          based on usage (API calls, seats, storage, etc.). Transparently shows
          how pricing scales and helps users budget.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Pricing Psychology Tactics
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          The Decoy Effect
        </h3>
        <p>
          Introduce a third option to make your target plan look more
          attractive. If you want users to choose the $49 plan, add a $29 plan
          (limited features) and a $99 plan (overkill). The middle option
          becomes the "smart choice."
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Charm Pricing ($99 vs $100)
        </h3>
        <p>
          Ending prices in 9 feels significantly cheaper than rounding up.
          $29.99 feels closer to $20 than $30 psychologically. This effect is
          well-documented in pricing research.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Anchoring
        </h3>
        <p>
          Show the most expensive plan first (or left-to-right if horizontal).
          This "anchors" the price expectation high, making other plans seem
          more affordable by comparison.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Social Proof
        </h3>
        <p>
          Add "Most Popular" or "95% of users choose this plan" badges. People
          follow the crowd, especially when uncertain. This guides decision-
          making toward your preferred tier.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Loss Aversion
        </h3>
        <p>
          Frame annual plans as saving money rather than costing more upfront.
          "Save $200/year" is more compelling than "Pay $1000 now." People are
          more motivated to avoid losses than to achieve gains.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Essential Pricing Section Elements
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Clear Plan Names
        </h3>
        <p>
          Use descriptive names that indicate who each plan is for: Starter,
          Professional, Enterprise. Avoid cute names that don't communicate
          value (Bronze, Silver, Gold tells users nothing).
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Price Display</h3>
        <p>
          Make prices large and prominent. Show the billing period clearly
          ($29/month not just $29). If you offer discounts for annual billing,
          show both prices with the savings highlighted.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Feature Lists
        </h3>
        <p>
          List 5-7 key features per plan. Focus on benefits users care about,
          not technical specifications. Use checkmarks for included features.
          Consider showing what's NOT included in lower tiers.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Call-to-Action Buttons
        </h3>
        <p>
          Each plan needs a clear CTA. Use action-oriented copy: "Start Free
          Trial," "Get Started," "Contact Sales." The primary plan's button
          should be more prominent (different color, larger size).
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">FAQ Section</h3>
        <p>
          Place an FAQ below your pricing table to address common questions:
          "Can I change plans?", "What payment methods?", "Is there a refund
          policy?" This reduces friction and support tickets.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Mobile Pricing Design
        </h2>

        <p>
          Over 60% of traffic is mobile, but pricing tables often break on small
          screens. Here's how to adapt:
        </p>

        <ul>
          <li>
            <strong>Stack Vertically:</strong> Display plans one above another
            instead of side-by-side
          </li>
          <li>
            <strong>Sticky CTA:</strong> Keep the primary CTA visible at the
            bottom of the screen
          </li>
          <li>
            <strong>Expandable Features:</strong> Hide detailed features behind
            "See all features" to reduce scrolling
          </li>
          <li>
            <strong>Touch-Friendly Toggles:</strong> Make billing toggles large
            enough for fingers (44x44px minimum)
          </li>
          <li>
            <strong>Reduce Comparison Tables:</strong> Show simplified versions
            or let users tap to compare specific plans
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Pricing Table Best Practices
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Highlight One Plan
        </h3>
        <p>
          Too many options paralyze users. Visually emphasize your recommended
          plan with a badge, different background, border, or shadow. Guide
          decision-making rather than presenting equal choices.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Show Value, Not Just Price
        </h3>
        <p>
          Don't just list features—explain benefits. Instead of "API Access,"
          say "Automate your workflow with API integrations." Help users
          understand what they're gaining.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Be Transparent
        </h3>
        <p>
          Hidden costs hurt trust. If there are setup fees, per-user charges, or
          usage limits, disclose them upfront. Surprises at checkout kill
          conversions.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Reduce Friction
        </h3>
        <p>
          Offer free trials or money-back guarantees. Make it easy to upgrade or
          downgrade. Remove barriers that prevent users from trying your
          product.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Test Everything
        </h3>
        <p>
          A/B test headlines, pricing displays, CTA copy, and layouts. Small
          changes can have big impacts. Use tools like Google Optimize or VWO to
          run experiments.
        </p>

        <div className="not-prose bg-muted/50 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold mb-4">
            Production-Ready Pricing Components
          </h3>
          <p className="text-muted-foreground mb-6">
            Landix provides conversion-optimized pricing sections with toggles,
            comparison tables, and mobile-responsive designs. Built with React,
            TypeScript, and Tailwind CSS.
          </p>
          <Link
            href="/docs/pricing"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View Pricing Components <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Common Pricing Page Mistakes
        </h2>

        <ul>
          <li>
            <strong>Too Many Options:</strong> More than 4 plans creates decision
            paralysis. Simplify.
          </li>
          <li>
            <strong>Unclear Differences:</strong> Users should instantly see why
            they'd pay more for higher tiers
          </li>
          <li>
            <strong>Buried CTAs:</strong> Every plan needs a visible, clickable
            button
          </li>
          <li>
            <strong>Feature Overload:</strong> Long lists overwhelm. Focus on
            top 5-7 differentiators
          </li>
          <li>
            <strong>No Social Proof:</strong> Add "Most Popular" badges or
            testimonials near pricing
          </li>
          <li>
            <strong>Ignoring Mobile:</strong> Test on real devices. Most users
            will view on phones
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Advanced Pricing Strategies
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Good-Better-Best
        </h3>
        <p>
          Three tiers work best for most products. The middle tier should be
          your target—designed to look like the best value. Lower tier handles
          price-sensitive users, upper tier captures high-value customers.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Freemium + Premium
        </h3>
        <p>
          Offer a free tier to reduce barrier to entry, then upsell to paid
          plans. The free tier should provide real value but have clear
          limitations that encourage upgrading.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Usage-Based Scaling
        </h3>
        <p>
          Charge based on consumption (API calls, storage, seats). This aligns
          cost with value received and scales naturally with customer growth.
          Provide a calculator so users can estimate costs.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Enterprise Custom Pricing
        </h3>
        <p>
          For large deals, hide pricing behind "Contact Sales." This lets you
          negotiate based on customer needs and prevents competitors from
          undercutting. Include a form to capture leads.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Accessibility in Pricing Tables
        </h2>

        <ul>
          <li>
            <strong>Semantic HTML:</strong> Use proper table elements or ARIA
            roles for screen readers
          </li>
          <li>
            <strong>Keyboard Navigation:</strong> All toggles and CTAs must be
            accessible via keyboard
          </li>
          <li>
            <strong>Color Contrast:</strong> Ensure text meets WCAG standards
            (4.5:1 minimum)
          </li>
          <li>
            <strong>Focus Indicators:</strong> Show clear focus rings when
            tabbing through elements
          </li>
          <li>
            <strong>Alt Text:</strong> If using icons, provide text alternatives
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">Next Steps</h2>

        <p>
          Ready to build conversion-focused pricing sections? Explore
          production-ready components or learn about other landing page
          sections:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
          <Link
            href="/docs/pricing"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">Browse Pricing Components →</h4>
            <p className="text-sm text-muted-foreground">
              Ready-to-use pricing table examples
            </p>
          </Link>
          <Link
            href="/guides/feature-section-templates"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">Feature Section Guide →</h4>
            <p className="text-sm text-muted-foreground">
              Learn to showcase product features effectively
            </p>
          </Link>
        </div>
      </article>
    </div>
  );
}
