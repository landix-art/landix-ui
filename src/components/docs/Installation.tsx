"use client";

import { Check, Copy, Terminal, Package, FileCode, Rocket } from "lucide-react";
import { useState } from "react";

const CodeBlock = ({ code, language = "bash" }: { code: string; language?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group mt-4">
      <pre className="bg-muted/30 text-foreground rounded-lg p-4 overflow-x-auto border border-border">
        <code className="text-[13px] leading-relaxed font-mono">{code}</code>
      </pre>
      <button
        onClick={copyCode}
        className="absolute top-3 right-3 p-2 rounded-md bg-background border border-border hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-all opacity-0 group-hover:opacity-100"
        title="Copy code"
      >
        {copied ? (
          <Check className="size-3.5 text-foreground" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    </div>
  );
};

const Step = ({
  number,
  title,
  icon: Icon,
  children,
}: {
  number: number;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-6 pb-12 border-l border-border last:border-l-transparent pl-8 ml-3 relative">
      <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-foreground text-sm font-medium">
        {number}
      </div>
      
      <div className="flex-1 -mt-1">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="size-5 text-muted-foreground" />
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Installation() {
  return (
    <div className="pt-0 py-12 text-foreground">
      <div className="mb-16">
        <p className="text-lg text-muted-foreground font-light">
          Get started with Landix UI in minutes. Follow these simple steps to add beautiful components to your project.
        </p>
      </div>

      <div className="space-y-0">
        <Step number={1} title="Install Dependencies" icon={Package}>
          <p>
            First, make sure you have a Next.js project with Tailwind CSS set up. Then install the required dependencies:
          </p>
          <CodeBlock code="npm install motion lucide-react tailwind-merge class-variance-authority clsx" />
          <div className="bg-muted/40 border border-border rounded-lg p-4 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground font-medium">Note:</strong> Landix UI uses Motion (framer-motion fork) for animations. Make sure your project supports React 19+.
            </p>
          </div>
        </Step>

        <Step number={2} title="Configure Tailwind" icon={FileCode}>
          <p>
            Add the Landix UI paths to your Tailwind CSS configuration to ensure proper styling:
          </p>
          <CodeBlock
            language="typescript"
            code={`// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./registry/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          border: "hsl(var(--sidebar-border))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        },
      },
    },
  },
  plugins: [],
};

export default config;`}
          />
        </Step>

        <Step number={3} title="Add Utility Functions" icon={Terminal}>
          <p>
            Create a utility file for className merging (if you don't have one already):
          </p>
          <CodeBlock
            language="typescript"
            code={`// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
          />
        </Step>

        <Step number={4} title="Copy Components" icon={FileCode}>
          <p>
            Browse the documentation, find a component you like, and copy it into your project. 
            Each component in the <code className="px-1.5 py-0.5 bg-muted border border-border rounded-md text-[13px] text-foreground">/registry</code> folder can be copied directly:
          </p>
          <CodeBlock
            language="bash"
            code="# Example: Copy hero-02 into your project\ncp -r registry/hero-02/* src/"
          />
          <p className="mt-4">
            Or manually copy the component code from the docs playground into your project structure.
          </p>
        </Step>

        <Step number={5} title="Use the Component" icon={Rocket}>
          <p>
            Import and use the component in your pages:
          </p>
          <CodeBlock
            language="typescript"
            code={`// app/page.tsx
import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <main>
      <Hero />
    </main>
  );
}`}
          />
          <div className="bg-muted/40 border border-border rounded-lg p-4 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground font-medium">Success!</strong> Your component is now ready. Customize the props and styling to match your brand.
            </p>
          </div>
        </Step>
      </div>

      <div className="mt-8 p-6 rounded-xl border border-border bg-card">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Additional Resources</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <Check className="size-4 text-muted-foreground mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground">
              Browse all components in the <a href="/docs/hero" className="text-foreground hover:text-primary underline decoration-border underline-offset-4 transition-colors">Hero Blocks</a> section
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="size-4 text-muted-foreground mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground">
              Check out the <a href="https://github.com/yourusername/landix-ui" className="text-foreground hover:text-primary underline decoration-border underline-offset-4 transition-colors">GitHub repository</a> for examples
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="size-4 text-muted-foreground mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground">
              Read the <code className="px-1.5 py-0.5 bg-muted border border-border rounded-md text-[13px] text-foreground">registry-manifest.json</code> for detailed component specs
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
