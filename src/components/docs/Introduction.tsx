import { Check } from "lucide-react";

export default function Introduction() {
  const features = [
    "Section-first approach",
    "Startup-focused, not enterprise",
    "Design consistency across families",
    "Premium aesthetics by default",
    "AI-ready metadata",
    "Fully shadcn-compatible",
    "Production-ready code",
    "Curated, never overwhelming",
  ];

  return (
    <article className="pt-0 mx-auto py-12 text-foreground">
      {/* Intro Quote */}
      <div className="mb-12 border-l-2 border-border pl-6">
        <p className="text-xl italic text-muted-foreground font-light leading-relaxed">
          “No introduction needed but developers still ask{" "}
          <span className="font-medium not-italic text-foreground">
            what Landix is.
          </span>
          ”
        </p>
      </div>

      {/* Intro body */}
      <section className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          <strong className="font-medium text-foreground">Landix</strong> is a
          curated section registry built on top of{" "}
          <strong className="font-medium text-foreground">shadcn/ui</strong>,
          crafted for startup founders, indie hackers, and developers who want
          premium-looking landing pages without designing from scratch.
        </p>

        <p>
          Unlike traditional component libraries, Landix focuses on
          production-ready{" "}
          <strong className="font-medium text-foreground">
            landing page sections
          </strong>{" "}
          — Hero, Pricing, Features, Bento, CTA, and more — that visually fit
          together and are optimized for startup websites.
        </p>

        <div className="bg-muted/40 border border-border rounded-lg p-5 mt-8">
          <p className="text-sm leading-relaxed">
            <strong className="font-semibold text-foreground">
              Landix is not an AI website builder.
            </strong>{" "}
            Instead, it’s an AI-ready section system where developers can quickly
            assemble beautiful startup UIs using carefully designed, consistent,
            and reusable sections.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
          The problem we solve
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Developers currently stitch together random UI sections from different
            sources — a Hero from one place, Pricing from a template, a CTA from
            somewhere else. The result is inconsistent design, spacing issues,
            animation mismatches, and generic-looking websites.
          </p>
          <p>
            Landix fixes this with curated{" "}
            <strong className="font-medium text-foreground">design families</strong>{" "}
            — collections of sections engineered to work together out of the box.
          </p>
        </div>
      </section>

      {/* What makes it different */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
          What makes Landix different
        </h2>
        <div className="p-6 rounded-xl border border-border bg-card">
          <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="size-4 text-muted-foreground mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core promise */}
      <section className="mt-12 pt-8 border-t border-border/50">
        <h2 className="text-xl font-semibold tracking-tight text-foreground mb-3">
          Core Promise
        </h2>
        <p className="text-base text-muted-foreground">
          Beautiful startup sections that actually fit together.
        </p>
      </section>
    </article>
  );
}
