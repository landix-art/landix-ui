import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Landix UI - Component Library',
    short_name: 'Landix UI',
    description: 'Beautiful startup sections and components for shadcn/ui with multiple design tastes',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#7c86ff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
