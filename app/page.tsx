import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Services from '@/components/sections/Services';
import Outsourcing from '@/components/sections/Outsourcing';
import Technologies from '@/components/sections/Technologies';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import FAQAI from '@/components/sections/FAQAI';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/seo/JsonLd';
import { buildMetadata, faqLd } from '@/lib/seo';
import { HOME_FAQS } from '@/lib/faqs';

export const metadata: Metadata = buildMetadata({
  title:
    'AI Development & Custom Software Company | MERN, React, Cross-Platform Mobile | Codentrixa',
  description:
    'Codentrixa is a global AI development and custom software company building AI-powered backends, MERN stack web apps, React platforms, and cross-platform mobile apps for clients in the USA, UK, Germany, Switzerland, Netherlands, Dubai, Singapore, and across Europe.',
  path: '/',
  keywords: [
    'AI development company',
    'custom software development company',
    'MERN stack development company',
    'React JS development company',
    'cross-platform mobile app development',
    'AI-powered backend',
    'full stack web development USA',
    'SaaS development company Europe',
    'AI development company Switzerland',
    'AI automation agency Luxembourg',
    'OpenAI integration services',
    'generative AI development company',
    'enterprise software company Europe',
    'offshore software development company',
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Codentrixa',
            serviceType:
              'AI development, custom software development, MERN stack, React, cross-platform mobile, SaaS, OpenAI integration',
            areaServed: [
              'United States',
              'United Kingdom',
              'Germany',
              'Switzerland',
              'Luxembourg',
              'Netherlands',
              'France',
              'Canada',
              'Australia',
              'United Arab Emirates',
              'Singapore',
              'European Union',
            ],
            priceRange: '$$',
          },
          faqLd(HOME_FAQS.map(({ q, a }) => ({ q, a }))),
        ]}
      />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services limit={8} showSeeAll title="Services we deliver, end to end." />
      <Outsourcing compact />
      <Technologies />
      <CaseStudies preview />
      <Testimonials />
      <FAQAI items={HOME_FAQS} />
      <CTA />
    </>
  );
}
