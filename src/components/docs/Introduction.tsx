export default function Introduction() {
  return (
    <article>
      <p className="text-lg italic text-muted-foreground">
        “No introduction needed but developers still ask{" "}
        <span className="font-semibold not-italic text-foreground">
          what Landix is.
        </span>
        ”
      </p>

      {/* Intro body */}
      <section className="mt-6 space-y-6 text-base leading-7 text-muted-foreground">
        <p>
          <span className="font-semibold text-foreground">Landix</span> is a
          curated section registry built on top of{" "}
          <span className="font-semibold text-foreground">shadcn/ui</span>,
          crafted for startup founders, indie hackers, and developers who want
          premium-looking landing pages without designing from scratch.
        </p>

        <p>
          Unlike traditional component libraries, Landix focuses on
          production-ready{" "}
          <span className="font-semibold text-foreground">
            landing page sections
          </span>{" "}
          — Hero, Pricing, Features, Bento, CTA, and more — that visually fit
          together and are optimized for startup websites.
        </p>

        <p>
          <span className="font-semibold text-foreground">
            Landix is not an AI website builder.
          </span>{" "}
          Instead, it’s an AI-ready section system where developers can quickly
          assemble beautiful startup UIs using carefully designed, consistent,
          and reusable sections.
        </p>
      </section>

      {/* The problem */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          The problem we solve
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Developers currently stitch together random UI sections from different
          sources — a Hero from one place, Pricing from a template, a CTA from
          somewhere else. The result is inconsistent design, spacing issues,
          animation mismatches, and generic-looking websites.
        </p>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Landix fixes this with curated{" "}
          <span className="font-semibold text-foreground">design families</span>{" "}
          — collections of sections engineered to work together out of the box.
        </p>
      </section>

      {/* What makes it different */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          What makes Landix different
        </h2>
        <ul className="mt-4 space-y-2 text-base grid grid-cols-2 gap-2 leading-7 text-muted-foreground">
          <li className="flex flex-wrap items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
            Section-first approach
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
            Startup-focused, not enterprise
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
            Design consistency across families
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
            Premium aesthetics by default
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
            AI-ready metadata
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
            Fully shadcn-compatible
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
            Production-ready code
          </li>
          <li className="flex flex-wrap items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
            Curated, never overwhelming
          </li>
        </ul>
      </section>

      {/* Core promise */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Core Promise
        </h2>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Beautiful startup sections that actually fit together.
        </p>
      </section>
    </article>
  );
}
