import { Metadata } from 'next';
import { constructPageMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/sections/PageHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { RelatedPages } from '@/components/sections/RelatedPages';

export const metadata: Metadata = constructPageMetadata({
  title: 'Contact Us | Direct Consultation & Licensing Inquiries',
  description:
    'Connect directly with the GYATK RVCR Apparatus engineering and technology licensing desk for partnerships, joint R&D, and technical evaluation.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      <PageHero
        title="Contact RVCR & GYATK"
        subtitle="Direct technical consultation desk, technology licensing inquiries, and global headquarters location"
        category="Direct Consultation"
        bgImage="/assets/images/WhatsApp-Image-2023-08-22-at-5.30.04-PM.jpeg"
        currentPath="/contact"
      />

      <div className="py-12 bg-[#f8fafc] border-b border-[#e8e7ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm sm:text-base text-[#334155] max-w-3xl mx-auto">
            Whether exploring OEM prime mover adaptation, joint development agreements, or technology licensing for
            industrial fluid handling, our specialized engineering leadership is available for consultation.
          </p>
        </div>
      </div>

      <ContactSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RelatedPages currentPath="/contact" />
      </div>
    </div>
  );
}
