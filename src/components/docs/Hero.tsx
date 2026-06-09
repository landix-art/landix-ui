import { ComponentPlayground } from "../playground/ComponentPlayground";

const demo = {
  title: 'Hero Section',
  previewUrl: 'https://seomode.co',
  files: [
    {
      fileName: 'app/components/Hero.tsx',
      language: 'tsx',
      code: `export const Hero = () => {\n  return <h1>Hello World</h1>;\n};`,
    },
    {
      fileName: 'app/components/Button.tsx',
      language: 'tsx',
      code: `export const Button = ({ label }: { label: string }) => (\n  <button className="btn">{label}</button>\n);`,
    },
    {
      fileName: 'tailwind.config.ts',
      language: 'ts',
      code: `const config = { content: ['./app/**/*.tsx'] };\nexport default config;`,
    },
  ],
};

export default function Hero() {
  return <ComponentPlayground data={demo} />;
}
