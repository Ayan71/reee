import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import CookieBanner from '@/components/layout/CookieBanner';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, DEFAULT_OG_IMAGE, organizationLd, websiteLd } from '@/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Enterprise Software Studio`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'technology',
  keywords: [
    // ── Core service intent
    'AI development company',
    'AI development services',
    'custom software development company',
    'MERN stack development company',
    'MERN stack developers',
    'React JS development company',
    'React Native development company',
    'cross-platform mobile app development',
    'Flutter app development company',
    'AI-powered backend development',
    'Node.js backend development',
    'full stack web development services',
    'SaaS product development company',
    'enterprise software development company',
    'OpenAI integration services',
    'generative AI development company',
    'AI agent development services',
    'AI chatbot development company',
    'AI automation agency',
    'cloud solutions company',
    'DevOps services company',
    'API development and integration',
    'CRM and ERP development',
    'startup MVP development',
    // ── International intent
    'AI development company USA',
    'software development company UK',
    'AI development company Europe',
    'web development company Germany',
    'best software company in Switzerland',
    'AI automation agency Luxembourg',
    'IT services company Netherlands',
    'software development company Dubai',
    'AI development company Singapore',
    'offshore software development company',
    'Codentrixa',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Enterprise Software Studio`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Enterprise Software Studio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Enterprise Software Studio`,
    description: SITE_DESCRIPTION,
    creator: '@codentrixa',
    images: [DEFAULT_OG_IMAGE],
  },
  verification: {
    // Replace with real values when issued.
    // google: 'XXXX',
    // yandex: 'XXXX',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#FAFAF8" />
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Toaster />
      </body>
    </html>
  );
}
