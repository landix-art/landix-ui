import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Palette, Zap, Code } from "lucide-react";

export const metadata: Metadata = {
  title: "Tailwind UI Components - Modern Design System Guide",
  description:
    "Build beautiful UI components with Tailwind CSS. Learn utility-first design, component patterns, and get production-ready templates for your project.",
  keywords: [
    "Tailwind CSS components",
    "Tailwind UI",
    "utility-first CSS",
    "Tailwind design system",
    "React Tailwind",
    "Tailwind CSS examples",
    "responsive design",
    "Tailwind best practices",
  ],
  openGraph: {
    title: "Tailwind UI Components - Modern Design System Guide",
    description:
      "Build beautiful UI components with Tailwind CSS. Production-ready templates and best practices.",
    type: "article",
    url: "https://landix.design/guides/tailwind-ui-components",
  },
};

export default function TailwindUIComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">
          Tailwind UI Components: Complete Guide for 2026
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Master utility-first design with Tailwind CSS. Build consistent,
          maintainable UI components with modern best practices and design
          tokens.
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
          <div className="border rounded-lg p-6">
            <Palette className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Design Tokens</h3>
            <p className="text-sm text-muted-foreground">
              Consistent spacing, colors, and typography
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <Zap className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Rapid Development</h3>
            <p className="text-sm text-muted-foreground">
              Build components 10x faster with utilities
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <Code className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">No CSS Files</h3>
            <p className="text-sm text-muted-foreground">
              Style directly in JSX with type-safe utilities
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Why Tailwind CSS for UI Components?
        </h2>

        <p>
          Tailwind CSS has revolutionized how developers build user interfaces.
          Instead of writing custom CSS, you compose designs with utility
          classes. This approach offers several advantages:
        </p>

        <ul>
          <li>
            <strong>Consistency by Default:</strong> Design tokens ensure spacing,
            colors, and typography remain consistent
          </li>
          <li>
            <strong>Faster Development:</strong> No context switching between
            HTML/JSX and CSS files
          </li>
          <li>
            <strong>Smaller Bundle Size:</strong> Only the utilities you use are
            included in production
          </li>
          <li>
            <strong>Responsive Design:</strong> Mobile-first breakpoints built
            into every utility
          </li>
          <li>
            <strong>Dark Mode Support:</strong> Toggle color schemes with the
            dark: prefix
          </li>
          <li>
            <strong>TypeScript Integration:</strong> IntelliSense autocomplete for
            class names
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Essential Component Patterns
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Button Components</h3>
        <p>
          Buttons are the foundation of any UI. Create variant-based buttons
          using Tailwind with consistent padding, hover states, and focus
          rings. Use the group hover pattern for icon animations inside buttons.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Card Components</h3>
        <p>
          Cards group related content. Use border, rounded corners, shadow
          utilities, and proper padding hierarchy. Add hover effects with
          transition utilities for interactive cards.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Form Input Components
        </h3>
        <p>
          Accessible form inputs need focus rings, proper sizing, and error
          states. Tailwind's focus-visible and aria-invalid modifiers make
          this easy. Use peer utilities to style labels based on input state.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Navigation Components
        </h3>
        <p>
          Build responsive navigation with flexbox utilities. Mobile menus use
          hidden/block with responsive breakpoints. Active states can be styled
          conditionally with aria-current selectors.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Tailwind Configuration Best Practices
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Extend the Default Theme
        </h3>
        <p>
          Don't override Tailwind's defaults—extend them. Add custom colors,
          fonts, and spacing while preserving the built-in scale. This keeps
          your design system flexible and maintainable.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Use CSS Variables for Themes
        </h3>
        <p>
          Define colors as CSS variables in your config. This enables runtime
          theme switching (light/dark mode) without rebuilding. Modern
          approaches use hsl() color format for better control over lightness.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Configure Content Paths
        </h3>
        <p>
          Ensure your content array includes all files with Tailwind classes.
          Missing paths mean utilities won't be generated. Include component
          libraries if you're using external dependencies.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Component Library Integration
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Headless UI + Tailwind
        </h3>
        <p>
          Headless UI provides unstyled, accessible components (modals,
          dropdowns, tabs) that you style with Tailwind. This combination offers
          full design control while maintaining accessibility.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          shadcn/ui Components
        </h3>
        <p>
          shadcn/ui is a collection of copy-paste components built with Radix UI
          and Tailwind. Unlike traditional component libraries, you own the
          code—customize freely without fighting abstraction layers.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Building Custom Components
        </h3>
        <p>
          Create reusable components by extracting repeated utility patterns.
          Use component variants (via CVA or similar) to handle different
          styles. Keep components flexible with className prop forwarding.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Responsive Design Patterns
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Mobile-First Approach
        </h3>
        <p>
          Write base styles for mobile, then add md:, lg:, xl: prefixes for
          larger screens. This keeps your markup clean and follows progressive
          enhancement principles. Most classes should apply to mobile by
          default.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Container Queries</h3>
        <p>
          Tailwind 3.4+ supports container queries (@container). Style
          components based on parent size rather than viewport. This is
          perfect for reusable components that appear in different contexts.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Grid and Flexbox</h3>
        <p>
          Use CSS Grid for two-dimensional layouts (card grids, dashboards).
          Use Flexbox for one-dimensional layouts (navigation, button groups).
          Tailwind's gap utilities work with both.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Dark Mode Implementation
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Class-Based Strategy
        </h3>
        <p>
          Configure Tailwind with darkMode: 'class' for manual control.
          Toggle a dark class on the html element to switch themes. This
          gives users explicit control and remembers their preference.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Color Palette Planning
        </h3>
        <p>
          Design your color scale to work in both modes. Use semantic color
          names (primary, secondary, accent) rather than literal colors (blue,
          red). This makes swapping palettes easier.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Testing Both Modes
        </h3>
        <p>
          Always test components in both light and dark modes. Check contrast
          ratios for accessibility (WCAG AA requires 4.5:1 for text). Use
          browser DevTools to simulate color schemes.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Performance Optimization
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Purge Unused Classes
        </h3>
        <p>
          Tailwind's JIT (Just-In-Time) compiler only generates classes you
          use. Avoid dynamic class names—always use complete class strings.
          Don't concatenate utilities at runtime.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Extract Component Classes
        </h3>
        <p>
          For repeated patterns, use @apply in CSS or create React components.
          However, use this sparingly—utility composition in JSX is usually
          better for maintainability.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">CSS Bundle Size</h3>
        <p>
          Production builds typically generate 5-10KB of CSS (gzipped). Monitor
          your bundle with tools like Tailwind CSS IntelliSense. If your CSS
          exceeds 20KB, audit which utilities you're actually using.
        </p>

        <div className="not-prose bg-muted/50 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold mb-4">
            Production-Ready Tailwind Components
          </h3>
          <p className="text-muted-foreground mb-6">
            Landix provides battle-tested UI components built with Tailwind CSS,
            TypeScript, and modern React patterns. Copy-paste into your project
            and customize to match your brand.
          </p>
          <Link
            href="/docs/introduction"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Browse Components <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Accessibility Considerations
        </h2>

        <ul>
          <li>
            <strong>Focus Indicators:</strong> Use focus-visible: for keyboard
            navigation. Tailwind's ring utilities make this easy
          </li>
          <li>
            <strong>Color Contrast:</strong> Ensure text meets WCAG standards.
            Use contrast checkers for foreground/background combinations
          </li>
          <li>
            <strong>Screen Reader Support:</strong> Utilities don't replace
            semantic HTML. Use proper heading hierarchy and ARIA labels
          </li>
          <li>
            <strong>Touch Targets:</strong> Mobile buttons should be at least
            44x44px. Use p-3 or larger for interactive elements
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Common Pitfalls to Avoid
        </h2>

        <ul>
          <li>
            <strong>Over-Engineering:</strong> Don't abstract too early. Start
            with utilities, extract patterns only when truly repeated
          </li>
          <li>
            <strong>Inline Styles:</strong> Avoid mixing Tailwind with inline
            style attributes. Choose one approach
          </li>
          <li>
            <strong>Specificity Wars:</strong> Keep utility order consistent.
            Use editor extensions to sort classes automatically
          </li>
          <li>
            <strong>Dynamic Classes:</strong> Don't build class names at runtime.
            Use complete strings so PurgeCSS can detect them
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Tailwind Ecosystem Tools
        </h2>

        <ul>
          <li>
            <strong>Tailwind CSS IntelliSense:</strong> VSCode extension for
            autocomplete and linting
          </li>
          <li>
            <strong>Prettier Plugin:</strong> Automatically sort utility classes
            in a consistent order
          </li>
          <li>
            <strong>Tailwind UI:</strong> Official premium component library from
            Tailwind Labs
          </li>
          <li>
            <strong>Heroicons:</strong> Beautiful SVG icons designed by Tailwind
            creators
          </li>
          <li>
            <strong>Headless UI:</strong> Unstyled accessible components that pair
            perfectly with Tailwind
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">Next Steps</h2>

        <p>
          Ready to build with Tailwind? Explore production-ready components or
          learn about specific sections:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
          <Link
            href="/docs/introduction"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">View All Components →</h4>
            <p className="text-sm text-muted-foreground">
              Hero, features, pricing sections and more
            </p>
          </Link>
          <Link
            href="/guides/shadcn-ui-examples"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">shadcn/ui Guide →</h4>
            <p className="text-sm text-muted-foreground">
              Learn to build with shadcn/ui components
            </p>
          </Link>
        </div>
      </article>
    </div>
  );
}
