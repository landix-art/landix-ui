import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://landix.design';
  
  const staticRoutes = [
    '',
    '/about-us',
    '/roadmap',
    '/docs/introduction',
    '/docs/installation',
    '/docs/hero',
    '/docs/features',
    '/docs/pricing',
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/docs') ? 0.8 : 0.5,
  }));
}
