# Landix UI

Beautiful startup sections and components for shadcn/ui with multiple design tastes.

## Features

- 🎨 **Three Design Tastes**: Apple, Linear, and AI-inspired design languages
- 🚀 **Production Ready**: Built with React 19, Next.js 16, and Tailwind CSS 4
- 📦 **Registry System**: Distributable components with preview versions
- 🎭 **Live Previews**: Interactive component playground in documentation
- ♿ **Accessible**: Semantic HTML and ARIA-compliant components
- 🤖 **AI-Friendly**: Machine-readable metadata for AI assistants

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000/docs` to browse components.

## Components

### Hero Sections

- **Hero 1**: Classic hero with navigation, intro, and partner logos
- **Hero 2**: Gradient-focused hero with badge and CTA
- **Hero 3**: Two-column layout with social proof and ratings
- **Hero 4**: Feature-focused hero with icon grid

Each component is available in three design tastes:

- **Apple taste**: Premium, glass-morphic, sophisticated
- **Linear taste**: Minimal, clean, functional
- **AI taste**: Gradient-heavy, animated, futuristic

## Project Structure

```
/registry               # Distributable source components
/src/app/preview        # UI-adapted preview versions
/src/app/(main-pages)/docs  # Interactive documentation
/src/contexts           # React contexts (taste management)
/src/components         # Shared components
```

## Using Components

Each component in `/registry` can be copied into your project:

```tsx
// Example: Using hero-02
import { Hero } from "@/components/hero";

export default function Page() {
  return <Hero />;
}
```

## Documentation

- `/public/llms.txt` - AI-friendly project overview
- `/registry-manifest.json` - Structured component metadata
- `/CONTRIBUTING.md` - Development guidelines

## Tech Stack

- React 19.2
- Next.js 16.1
- Tailwind CSS 4
- Motion (Framer Motion fork)
- Lucide React
- TypeScript 5

## License

MIT
