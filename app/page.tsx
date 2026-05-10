import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Services from '@/components/sections/Services';
import Outsourcing from '@/components/sections/Outsourcing';
import Technologies from '@/components/sections/Technologies';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
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
