import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Codentrixa | Building Future-Ready Digital Solutions',
  description: 'Codentrixa is a premium software development company specializing in MERN Stack, Flutter, React Native, Java, AI/ML, Full Stack Web, Mobile App Development, API Integration, and Cloud Deployment.',
  keywords: 'software development, MERN stack, Flutter development, React Native, AI solutions, web development, mobile app development, IT company, Codentrixa',
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
    title: 'Codentrixa | Building Future-Ready Digital Solutions',
    description: 'Premium software development company specializing in MERN Stack, Flutter, React Native, Java, AI/ML, and Cloud solutions.',
    siteName: 'Codentrixa',
    images: [{ url: '/codentrixa_logo.png', width: 1200, height: 630, alt: 'Codentrixa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codentrixa | Building Future-Ready Digital Solutions',
    description: 'Premium software development company specializing in MERN Stack, Flutter, React Native, Java, AI/ML, and Cloud solutions.',
    images: ['/codentrixa_logo.png'],
    creator: '@codentrixa',
  },
  icons: { icon: '/codentrixa_logo.png', apple: '/codentrixa_logo.png' },
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
              logo: 'https://codentrixa.com/codentrixa_logo.png',
              description: 'Premium software development company.',
              foundingDate: '2019',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-0100',
                contactType: 'customer service',
                email: 'sales@codentrixa.com',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
