import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { ContactForm } from './ContactForm';
import { SITE_CONFIG } from '@/lib/seo';

export const ContactSection: React.FC = () => {
  return (
    <section 
      id="Contact" 
      className="py-20 md:py-28 relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/images/9cd53aafe21505d44d31dea2f10704a6.jpeg')`,
        backgroundColor: '#96337b'
      }}
    >
      {/* Magenta/Purple Color Overlay */}
      <div className="absolute inset-0 bg-[#96337b]/80 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: White Card with Google Map Background */}
          <div 
            className="lg:col-span-5 bg-white rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between bg-cover bg-center relative overflow-hidden border border-[#e8e7ef]"
            style={{
              backgroundImage: `url('/assets/images/WhatsApp-Image-2023-08-22-at-5.30.04-PM.jpeg')`
            }}
          >
            <div className="absolute inset-0 bg-white/88 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003461] border-b-2 border-[#96337b] pb-2 inline-block">
                  Info
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#334155]">
                <a 
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`} 
                  className="flex items-center gap-3 font-medium hover:text-[#cc2b5e] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#96337b] shrink-0" aria-hidden="true" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>

                <a 
                  href={`mailto:${SITE_CONFIG.contact.email}`} 
                  className="flex items-center gap-3 font-medium hover:text-[#cc2b5e] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#96337b] shrink-0" aria-hidden="true" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>

                <a 
                  href={SITE_CONFIG.contact.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#cc2b5e] transition-colors pt-2"
                >
                  <MapPin className="w-5 h-5 text-[#96337b] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>GYATK RVCR Apparatus Pvt Ltd, India, CIN : {SITE_CONFIG.cin}</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 pt-10">
              <a 
                href={SITE_CONFIG.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#003461] font-semibold uppercase hover:text-[#cc2b5e] transition-colors"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Right Column: Contact Us Form (Client Component) */}
          <div className="lg:col-span-7 text-white">
            <ContactForm />
          </div>

        </div>
      </Container>
    </section>
  );
};
