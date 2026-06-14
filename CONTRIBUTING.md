# Contributing to Landix UI

## Project Structure

### Registry Components (`/registry`)

Registry components are the distributable source code. Each component follows this structure:

```
/registry/{component-name}/
├── app/
│   └── page.tsx          # Page entry point
├── components/
│   └── {component}.tsx   # Main component implementation
└── lib/
    └── data.ts           # Component data and configuration
```

### Preview Components (`/src/app/preview`)

Preview components are UI-adapted versions for live documentation:

```
/src/app/preview/{component-name}/
├── components/
│   └── {Component}.tsx   # Enhanced component with full styling
├── page.tsx              # Preview page
└── index.css             # Preview-specific styles
```

### Documentation (`/src/app/(main-pages)/docs`)

Documentation uses the ComponentPlayground to display live previews with code.

## Adding a New Component

1. **Create registry structure:**
   ```bash
   mkdir -p registry/{component-name}/{app,components,lib}
   ```

2. **Create preview structure:**
   ```bash
   mkdir -p src/app/preview/{component-name}/components
   ```

3. **Implement registry version** (minimal, distributable)

4. **Implement preview version** (full styling, props interface)

5. **Add to registry manifest** (`registry-manifest.json`)

6. **Update documentation component** (`src/components/docs/{Category}.tsx`)

7. **Support all three tastes** (Apple, Linear, AI design languages)

## Taste Guidelines

### Apple Taste
- Premium, sophisticated aesthetic
- Glass-morphic effects
- Smooth, subtle animations
- Rounded corners, soft shadows

### Linear Taste
- Minimal, clean design
- Functional, no-frills
- Sharp corners, thin borders
- Subtle or no animations

### AI Taste
- Bold gradients
- Futuristic effects
- Animated, dynamic
- Vibrant colors, strong shadows

## Code Standards

- TypeScript for all components
- Proper prop interfaces
- Responsive design (mobile-first)
- Accessible markup (semantic HTML, ARIA labels)
- Motion/React animations where appropriate
- Tailwind CSS for styling

## Testing

Run the dev server to preview changes:

```bash
npm run dev
```

Visit `http://localhost:3000/docs/{category}` to see your component in the docs.

## AI-Friendly Documentation

When adding components, update:
- `/public/llms.txt` - Human-readable component guide
- `/registry-manifest.json` - Structured component metadata
- Component prop interfaces and JSDoc comments
