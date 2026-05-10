import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Services from '@/components/sections/Services';
import Outsourcing from '@/components/sections/Outsourcing';
import Technologies from '@/components/sections/Technologies';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Codentrixa | Enterprise Software Studio',
  description:
    'We design, engineer, and operate web, mobile, and AI products for startups and enterprises — shipped on time, on scope, and built to scale for years.',
  path: '/',
  keywords: [
    'enterprise software development',
    'software development company',
    'IT outsourcing',
    'dedicated developers',
    'Flutter, React, Node, AI development',
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Codentrixa',
          serviceType: 'Custom software development and IT outsourcing',
          areaServed: 'Worldwide',
          priceRange: '$$',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '24',
          },
        }}
      />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services limit={8} showSeeAll title="Services we deliver, end to end." />
      <Outsourcing compact />
      <Technologies />
      <CaseStudies preview />
      <Testimonials />
      <CTA />
    </>
  );
}
