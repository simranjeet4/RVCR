import { Metadata } from 'next';
import { constructPageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { IntroductionSection } from '@/components/sections/IntroductionSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { ApplicationSection } from '@/components/sections/ApplicationSection';
import { ViabilitySection } from '@/components/sections/ViabilitySection';
import { BroaderImpactSection } from '@/components/sections/BroaderImpactSection';
import { DiscoverMoreSection } from '@/components/sections/DiscoverMoreSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = constructPageMetadata({
  title: 'RVCR | Rotary Variable Compression Ratio',
  description:
    'A breakthrough in machine heart tech. The future physics of energy conversion, variable compression ratio rotary mechanics and zero-carbon primemovers.',
  path: '/',
});

export default function HomePage() {
  return (
    <article className="bg-white text-[#334155] font-sans selection:bg-[#003461] selection:text-white">
      {/* 1. Hero Section (LCP Optimized) */}
      <Hero />

      {/* 2. What is RVCR Section */}
      <IntroductionSection />

      {/* 3 & 4. Specifics & How RVCR Works Sections */}
      <TechnologySection />

      {/* 5 & 6. Application & Feasibility Sections */}
      <ApplicationSection />

      {/* 7. Viability & Value Section */}
      <ViabilitySection />

      {/* 8 & 9. Broader Impact & Our R&D Sections */}
      <BroaderImpactSection />

      {/* 10. Discover More Showcase Section */}
      <DiscoverMoreSection />

      {/* 11. Info & Contact Section */}
      <ContactSection />
    </article>
  );
}
