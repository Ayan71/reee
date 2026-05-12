import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, organizationLd, websiteLd } from '@/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Enterprise Software Studio`,
    template: `%s | ${SITE_NAME}`,
  },
    icons: {
    icon: '/codentrixa_logo_black_bg.png',
    shortcut: '/codentrixa_logo_black_bg.png',
    apple: '/codentrixa_logo_black_bg.png',
  },

  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'technology',
  keywords: [
    'software development company',
    'IT outsourcing',
    'dedicated developers',
    'Flutter development',
    'React development',
    'Node.js backend',
    'AI solutions',
    'enterprise software',
    'SaaS development',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Enterprise Software Studio`,
    description: SITE_DESCRIPTION,
    creator: '@codentrixa',
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
        <Toaster />
      </body>
    </html>
  );
}
