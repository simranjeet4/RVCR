import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-black overflow-hidden pt-16 pb-24 md:pt-24 md:pb-36">
      {/* Primary LCP Image matching WordPress new-banner2-3.jpg */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/images/new-banner2-3.jpg"
          alt="Zero Carbon Orbital Ring - RVCR Realm"
          fill
          priority
          quality={88}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Subtle overlay matching WordPress linear-gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="max-w-xl text-left py-16 md:py-28">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#CC00AA] block mb-2 font-roboto">
            credo:&nbsp; Reinventing Kinetics
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-3 leading-tight">
            RVCR
          </h1>
          <p className="text-base sm:text-xl text-white mb-8 font-normal leading-relaxed">
            The future physics of primemovers
          </p>
          <div>
            <Link
              href="#WisR"
              className="inline-block px-8 py-2.5 bg-white text-black font-semibold text-xs rounded-none hover:bg-gray-200 transition-colors shadow-md"
            >
              Read more
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
