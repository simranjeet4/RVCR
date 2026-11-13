import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-[85vh] md:min-h-screen flex items-start md:items-center bg-black overflow-hidden pt-[125px] pb-16 md:pt-[145px] md:pb-0">
      {/* Desktop Background Image (hidden on mobile) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <Image
          src="/assets/images/new-banner2-3.jpg"
          alt="Zero Carbon Orbital Ring - RVCR"
          fill
          priority
          quality={88}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Mobile Background Image (only on mobile screens) */}
      <div className="block md:hidden absolute inset-0 pointer-events-none">
        <Image
          src="/assets/images/hero-mobile.jpg"
          alt="Zero Carbon Orbital Ring - RVCR Mobile"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Subtle overlay matching linear-gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="w-full md:w-1/2 md:max-w-[50%] text-left pt-[30px] pb-10 md:py-0 flex flex-col justify-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#cf3367] block mb-[5px] font-roboto uppercase">
            Reinventing Kinetics
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 md:mb-4 leading-tight !mt-0">
            A New Kinematic Architecture for Energy Conversion
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 font-normal leading-relaxed">
            RVCR.tech showcases the invention of the patented RVCR kinematics mechanism, being commercialized under the GYATK umbrella, with KGYAT leading engineering implementation.
          </p>
          <div>
            <Link
              href="#WisR"
              className="inline-block px-7 sm:px-8 py-2.5 bg-white text-black font-semibold text-xs rounded-none hover:bg-gray-200 transition-colors shadow-md"
            >
              Read more
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
