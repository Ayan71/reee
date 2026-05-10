import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Codentrixa | Enterprise Software Studio',
    template: '%s | Codentrixa',
  },
  description:
    'Codentrixa is an enterprise software studio building production web, mobile, and AI products. Senior engineers, monthly engagement models, and long-term outsourcing partnerships.',
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
  authors: [{ name: 'Codentrixa' }],
  creator: 'Codentrixa',
  publisher: 'Codentrixa',
  robots: 'index, follow',
  metadataBase: new URL('https://codentrixa.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codentrixa.com',
    title: 'Codentrixa | Enterprise Software Studio',
    description:
      'Senior engineers building production web, mobile, and AI products. Outsourcing, dedicated teams, and long-term technical partnerships.',
    siteName: 'Codentrixa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codentrixa | Enterprise Software Studio',
    description:
      'Senior engineers building production web, mobile, and AI products. Outsourcing, dedicated teams, and long-term partnerships.',
    creator: '@codentrixa',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Codentrixa',
              url: 'https://codentrixa.com',
              description:
                'Enterprise software studio building production web, mobile, and AI products.',
              foundingDate: '2024',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'contact@codentrixa.com',
              },
            }),
          }}
        />
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
