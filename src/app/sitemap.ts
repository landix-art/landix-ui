import { MetadataRoute } from 'next';
import { categories } from '@/data/category';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://landix.design';
  
  // Static pages
  const staticRoutes = [
    '',
    '/about-us',
    '/roadmap',
    '/contact-us',
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : 0.7,
  }));

  // Documentation pages from categories
  const docRoutes = Object.keys(categories).map((key) => ({
    url: `${baseUrl}/docs/${key}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Component preview pages (hero-01 through hero-04)
  const componentRoutes = [
    '/preview/hero-1',
    '/preview/hero-2',
    '/preview/hero-3',
    '/preview/hero-4',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Programmatic SEO pages (we'll add these)
  const pseoRoutes = [
    '/guides/react-hero-components',
    '/guides/nextjs-landing-pages',
    '/guides/tailwind-ui-components',
    '/guides/shadcn-ui-examples',
    '/guides/pricing-section-designs',
    '/guides/feature-section-templates',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...docRoutes, ...componentRoutes, ...pseoRoutes];
}
