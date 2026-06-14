import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, Sparkles, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "shadcn/ui Examples - Copy-Paste Component Library Guide",
  description:
    "Complete guide to shadcn/ui components. Learn how to use, customize, and build with this revolutionary copy-paste component library for React and Next.js.",
  keywords: [
    "shadcn/ui",
    "shadcn ui examples",
    "radix ui",
    "react components",
    "accessible components",
    "tailwind components",
    "copy paste components",
    "ui component library",
  ],
  openGraph: {
    title: "shadcn/ui Examples - Copy-Paste Component Library Guide",
    description:
      "Complete guide to shadcn/ui components. Learn how to build with accessible, customizable React components.",
    type: "article",
    url: "https://landix.design/guides/shadcn-ui-examples",
  },
};

export default function ShadcnUIExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">
          shadcn/ui: The Complete Guide for 2026
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Master shadcn/ui, the revolutionary component library that gives you
          full ownership. Build accessible, customizable React components with
          Radix UI and Tailwind CSS.
        </p>

        <div className="not-prose grid md:grid-cols-3 gap-6 my-12">
          <div className="border rounded-lg p-6">
            <Copy className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">You Own the Code</h3>
            <p className="text-sm text-muted-foreground">
              Copy-paste components into your project—no npm install
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <Package className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Built on Radix UI</h3>
            <p className="text-sm text-muted-foreground">
              Accessible primitives following WAI-ARIA guidelines
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <Sparkles className="w-10 h-10 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Fully Customizable</h3>
            <p className="text-sm text-muted-foreground">
              Styled with Tailwind CSS—modify anything
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          What Makes shadcn/ui Different?
        </h2>

        <p>
          shadcn/ui isn't a traditional component library. Instead of installing
          a package, you copy components directly into your project. This
          approach offers unique advantages:
        </p>

        <ul>
          <li>
            <strong>Full Ownership:</strong> The code lives in your repo. Modify
            anything without fighting abstraction layers
          </li>
          <li>
            <strong>No Dependencies Lock-In:</strong> Pick and choose components.
            No bloated node_modules
          </li>
          <li>
            <strong>Built on Standards:</strong> Uses Radix UI primitives and
            Tailwind CSS—both industry standards
          </li>
          <li>
            <strong>Accessible by Default:</strong> Every component follows WCAG
            guidelines and supports keyboard navigation
          </li>
          <li>
            <strong>TypeScript Native:</strong> Full type safety and autocomplete
            in your editor
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Getting Started with shadcn/ui
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Installation</h3>
        <p>
          Initialize shadcn/ui in your Next.js or React project with one
          command. This sets up your components folder, configures Tailwind, and
          adds necessary utilities:
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code>npx shadcn-ui@latest init</code>
        </pre>

        <p>
          Answer the prompts to customize your setup—choose your preferred style
          (default, new-york), base color, and CSS variables approach.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Adding Components
        </h3>
        <p>
          Add components one at a time. Each component is copied into your
          project with full source code:
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code>npx shadcn-ui@latest add button</code>
        </pre>

        <p>
          The CLI automatically installs peer dependencies (like Radix UI
          primitives) and adds the component to your components/ui folder.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Essential shadcn/ui Components
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Button Component
        </h3>
        <p>
          The Button component supports variants (default, destructive, outline,
          ghost, link) and sizes (sm, default, lg, icon). Built with class
          variance authority (cva) for clean variant management.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Dialog Component</h3>
        <p>
          Accessible modal dialogs built on Radix Dialog. Includes overlay,
          content, header, footer, and close button. Handles focus trap, scroll
          lock, and escape key automatically.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Form Components</h3>
        <p>
          Form components integrate with React Hook Form and Zod validation.
          Includes Input, Textarea, Select, Checkbox, Radio, and more. Error
          states and labels are accessible by default.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Dropdown Menu Component
        </h3>
        <p>
          Built on Radix Dropdown Menu with keyboard navigation, nested menus,
          separators, and labels. Perfect for user menus, actions, and context
          menus.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Card Component</h3>
        <p>
          Simple but flexible Card with Header, Title, Description, Content, and
          Footer sub-components. Great for dashboard layouts and content
          grouping.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Sheet Component</h3>
        <p>
          Slide-out panels (sidebars) that can appear from any edge. Perfect for
          mobile navigation, filters, or settings panels. Built on Radix Dialog
          with positioning logic.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Customization Strategies
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Modifying Existing Components
        </h3>
        <p>
          Since components live in your project, you can modify them directly.
          Change Tailwind classes, add new variants, or adjust behavior. Your
          changes won't be overwritten by updates.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Theme Variables</h3>
        <p>
          shadcn/ui uses CSS variables for theming. Define colors in your
          globals.css—all components automatically adapt. This makes light/dark
          mode implementation trivial.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Creating Custom Variants
        </h3>
        <p>
          Use class-variance-authority (cva) to add new variants to components.
          For example, add a "premium" button variant with gradient backgrounds
          and animations.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Advanced Patterns
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Composition Over Props
        </h3>
        <p>
          shadcn/ui favors composition. Instead of passing 20 props to a Card,
          you compose it with Card.Header, Card.Title, Card.Content, etc. This
          gives you more flexibility and clearer code.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Form Validation with Zod
        </h3>
        <p>
          Combine shadcn/ui Form components with Zod schemas for type-safe
          validation. React Hook Form handles form state while Zod validates
          inputs. Errors display automatically.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Server Components Integration
        </h3>
        <p>
          Many shadcn/ui components work as React Server Components. For
          interactive components (Dialog, Dropdown), add 'use client' directive.
          Static components render server-side by default.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Accessibility Features
        </h2>

        <ul>
          <li>
            <strong>Keyboard Navigation:</strong> All interactive components
            support Tab, Enter, Space, Arrow keys
          </li>
          <li>
            <strong>Screen Reader Support:</strong> ARIA labels, roles, and live
            regions where appropriate
          </li>
          <li>
            <strong>Focus Management:</strong> Dialogs trap focus, dropdowns
            manage focus on open/close
          </li>
          <li>
            <strong>Color Contrast:</strong> Default themes meet WCAG AA
            standards (4.5:1 for text)
          </li>
          <li>
            <strong>Semantic HTML:</strong> Components use proper HTML elements
            (button, nav, dialog)
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Performance Considerations
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Bundle Size</h3>
        <p>
          Since you only copy components you use, bundle size stays small.
          Radix UI primitives are tree-shakeable. Typical shadcn/ui setup adds
          10-20KB (gzipped) for common components.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Code Splitting
        </h3>
        <p>
          Heavy components (like Dialog or Command) can be lazy-loaded with
          React.lazy or Next.js dynamic imports. This keeps initial page loads
          fast.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Server Components</h3>
        <p>
          Use server components for static UI when possible. Only add 'use
          client' to components that need interactivity. This reduces JavaScript
          shipped to the browser.
        </p>

        <div className="not-prose bg-muted/50 rounded-lg p-8 my-12">
          <h3 className="text-2xl font-bold mb-4">
            shadcn/ui + Landix Components
          </h3>
          <p className="text-muted-foreground mb-6">
            Landix builds on top of shadcn/ui, providing complete landing page
            sections (hero, features, pricing) using shadcn/ui primitives. Get
            the best of both worlds—solid foundations plus production-ready
            layouts.
          </p>
          <Link
            href="/docs/introduction"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Landix Components <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Common Use Cases
        </h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Dashboard Interfaces
        </h3>
        <p>
          Combine Card, Table, Dialog, and Dropdown Menu components to build
          admin dashboards. The data-table template provides sorting, filtering,
          and pagination.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          Marketing Landing Pages
        </h3>
        <p>
          Use Button, Dialog, and Form components for CTAs and lead capture.
          Sheet component works great for mobile navigation. Pair with Landix
          sections for complete layouts.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">
          E-commerce Applications
        </h3>
        <p>
          Dialog for product quick-view, Sheet for shopping cart, Select for
          product options, and Command for search. All accessible and mobile-
          friendly.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          Troubleshooting Common Issues
        </h2>

        <ul>
          <li>
            <strong>Styles Not Applying:</strong> Check that Tailwind content
            paths include your components folder
          </li>
          <li>
            <strong>Radix Import Errors:</strong> Run the shadcn CLI again to
            ensure all peer dependencies are installed
          </li>
          <li>
            <strong>CSS Variable Conflicts:</strong> Ensure globals.css is
            imported in your layout file
          </li>
          <li>
            <strong>Server Component Errors:</strong> Add 'use client' to
            interactive components
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">
          shadcn/ui Ecosystem
        </h2>

        <ul>
          <li>
            <strong>shadcn/ui CLI:</strong> Official CLI for adding and managing
            components
          </li>
          <li>
            <strong>Radix UI:</strong> The accessible primitives powering
            shadcn/ui
          </li>
          <li>
            <strong>class-variance-authority:</strong> Manage component variants
            elegantly
          </li>
          <li>
            <strong>React Hook Form:</strong> Recommended form state management
            library
          </li>
          <li>
            <strong>Zod:</strong> TypeScript-first schema validation for forms
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-4">Next Steps</h2>

        <p>
          Ready to build with shadcn/ui? Explore complete landing page sections
          built on top of shadcn/ui:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
          <Link
            href="/docs/introduction"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">Browse Landix Components →</h4>
            <p className="text-sm text-muted-foreground">
              Production-ready sections using shadcn/ui
            </p>
          </Link>
          <Link
            href="/guides/tailwind-ui-components"
            className="border rounded-lg p-6 hover:border-primary transition-colors"
          >
            <h4 className="font-semibold mb-2">Tailwind CSS Guide →</h4>
            <p className="text-sm text-muted-foreground">
              Master utility-first styling
            </p>
          </Link>
        </div>
      </article>
    </div>
  );
}
