import './globals.css';
import '../css/imports.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeConfig from '@/lib/ThemeConfig';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import NavigationMenu from '@/components/NavigationMenu';
import Background from '@/components/Background';
import Canvas from '@/components/canvas';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://usmandev.vercel.app'),
  icons: {
    icon: '/favicon.png',
  },
  title: {
    default: "Full Stack MERN Developer | Real-Time Apps & SEO Websites | Muhammad Usman",
    template: "%s | Muhammad Usman | Software Engineer"
  },
  description: "Experienced Full Stack Developer specializing in MERN stack, mobile apps, real-time systems, and SEO-optimized websites. 3+ years of building high-performance digital products.",
  keywords: [
    "MERN stack developer",
    "Full stack developer Pakistan",
    "React developer portfolio",
    "Real-time app developer",
    "SEO website developer",
    "Mobile app developer",
    "Software Engineer",
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "TypeScript"
  ],
  authors: [{ name: "Muhammad Usman" }],
  creator: "Muhammad Usman",
  publisher: "Muhammad Usman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usmandev.vercel.app',
    title: "Full Stack MERN Developer | Muhammad Usman",
    description: "Experienced Full Stack Developer specializing in MERN stack, mobile apps, real-time systems, and SEO websites.",
    siteName: "Muhammad Usman Portfolio",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Full Stack MERN Developer | Muhammad Usman",
    description: "Experienced Full Stack Developer specializing in MERN stack, mobile apps, real-time systems, and SEO websites.",
    images: ['/twitter-image.jpg']
  }, verification: {
    google: 'gbkf_s8PmKqJTnD6BwRo2q4lwtWelCbVgqBfanbv3oc',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
        <ThemeConfig>
          <Background />
          {/* Full-page layout */}
          <div id="root" className="flex flex-col min-h-screen">
            {/* Header with some height */}
            <header className="flex-none h-16 lg:h-20 ">
              <Header />
            </header>

            {/* Main content area */}
            <main className="flex-1 flex items-center justify-center px-2 sm:px-4 lg:px-16">
              {children}
            </main>
            <span className="hidden lg:block">
              <NavigationMenu />
            </span>
            {/* Footer with some height */}
            <footer className="flex-none h-16 lg:h-20 ">
              <Footer />
            </footer>
          </div>
          <Canvas />
          <Analytics />
        </ThemeConfig>
      </body>
    </html>
  );
}