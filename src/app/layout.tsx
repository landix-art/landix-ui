import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import "fumadocs-ui/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landix.art"),
  title: {
    default: "Landix - UI Library for Engineers",
    template: "%s | Landix UI",
  },
  description:
    "Fluid components that you actually own. A premium library of copy-and-paste elements built with Next.js, Typescript, Tailwind CSS, Shadcn, and Motion.",
  keywords: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI Components",
    "Framer Motion",
    "Shadcn UI",
    "Frontend",
    "Web Development",
    "Design System",
  ],
  authors: [{ name: "Salar", url: "https://x.com/salarbuilds" }],
  creator: "Salar - Landix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://landix.art",
    title: "Landix - UI Library for Engineers",
    description:
      "Fluid components that you actually own. Engineered with Next.js, Tailwind CSS, Shadcn, and Motion.",
    siteName: "Landix UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Landix UI - Premium React Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landix - UI Library for Engineers",
    description:
      "Fluid components that you actually own. Engineered with Next.js, Tailwind CSS, Shadcn, and Motion.",
    creator: "@salarbuilds",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
