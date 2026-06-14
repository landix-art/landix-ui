import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landix.design"),
  title: {
    default: "Landix - Beautiful startup sections for shadcn/ui",
    template: "%s | Landix UI",
  },
  description:
    "A premium library of copy-and-paste sections designed for maximum customizability. Fully typed and engineered with Next.js, Typescript, Tailwind CSS, Shadcn, and Motion.",
  keywords: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI Blocks",
    "Framer Motion",
    "Shadcn UI",
    "Frontend",
    "Web Development",
    "Design System",
    "UI Components",
    "React Components",
    "Landing Page",
    "Hero Section",
    "Pricing Section",
    "Feature Section",
    "Open Source",
  ],
  authors: [{ name: "Salar", url: "https://x.com/salarbuilds" }],
  creator: "Salar - Landix",
  publisher: "Landix UI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://landix.design",
    title: "Landix - Beautiful startup sections for shadcn/ui",
    description:
      "Fluid Blocks that you actually own. Engineered with Next.js, Tailwind CSS, Shadcn, and Motion.",
    siteName: "Landix UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Landix UI - Premium React Blocks",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landix - Beautiful startup sections for shadcn/ui",
    description:
      "Fluid Blocks that you actually own. Engineered with Next.js, Tailwind CSS, Shadcn, and Motion.",
    creator: "@salarbuilds",
    site: "@salarbuilds",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://landix.design",
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Landix UI",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Salar",
      "url": "https://x.com/salarbuilds"
    },
    "description": "A premium library of copy-and-paste sections designed for maximum customizability. Fully typed and engineered with Next.js, Typescript, Tailwind CSS, Shadcn, and Motion.",
    "url": "https://landix.design",
    "image": "https://landix.design/og-image.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color={'#7c86ff'}   template='<div class="bar" role="bar"><div class="peg"></div></div>'/>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
