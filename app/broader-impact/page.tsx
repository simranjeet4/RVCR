import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { constructPageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { RvcrTechLinks } from '@/components/sections/RvcrTechLinks';

export const metadata: Metadata = constructPageMetadata({
  title: 'Broader Impact | Green Energy Transition, Climate Recovery & Zero Carbon',
  description:
    'RVCR is a unified solution for a comprehensive alternate industrial strategy to create new green transport and energy systems for a Zero carbon Industry ecosystem.',
  path: '/broader-impact',
});

const GREEN_ENERGY_ITEMS = [
  {
    title: 'Enter climate energy',
    icon: '/assets/images/minimize.png',
    desc: 'RVCR new age highly efficient Fluid motor will enable rapid diversification into Renewable Energy sources.',
    link: '#',
  },
  {
    title: 'Enter ocean energy',
    icon: '/assets/images/efficiency.png',
    desc: 'This section is under construction.',
    link: '#',
  },
  {
    title: 'Efficient power use (Kamators)',
    icon: '/assets/images/production.png',
    desc: 'This section is under construction.',
    link: '#',
  },
];

const TRANSITION_IMAGES = [
  {
    src: '/assets/images/horse-cart-1.jpg',
    alt: 'Historical Transportation - Horse Cart',
    caption: 'Horse-drawn era',
  },
  {
    src: '/assets/images/steam-engine-1.jpg',
    alt: 'Industrial Revolution - Steam Engine Locomotive',
    caption: 'Steam locomotive era',
  },
  {
    src: '/assets/images/engine4.jpg',
    alt: 'Next Generation - RVCR Green Primemover',
    caption: 'RVCR green transition',
  },
];

export default function BroaderImpactPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/1475971-popular-technics-wallpaper-1920x1080-1.jpg"
            alt="Broader Impact - Technology & Green Transition"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Dark subtle overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <Container className="relative z-10 text-center py-16 sm:py-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Broader Impact
          </h1>
          <div className="text-xs sm:text-sm md:text-base text-white font-normal max-w-3xl mx-auto leading-relaxed">
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              RVCR is a unified solution for an comprehensive alternate industrial strategy to create new green transport and energy systems for a Zero carbon Industry ecosystem
            </p>
          </div>
        </Container>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section id="overview" className="py-16 md:py-20 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-md p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8">
            <div className="relative w-[130px] h-[130px] shrink-0 flex items-center justify-center">
              <Image
                src="/assets/images/rvcr-1.png"
                alt="RVCR Broader Impact Checklist Overview"
                fill
                sizes="130px"
                className="object-contain"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Overview
              </h2>
              <p className="text-xs sm:text-sm text-[#414141] leading-relaxed">
                RVCR technology availability ends the long-wait for viable smarter energy conversion system. It supersedes the conventional machine systems which are now at the end of their technological lifecycle.
              </p>
              <p className="text-xs sm:text-sm text-[#414141] leading-relaxed">
                The entire spread of RVCR application for green fuel usage and renewable energy power generation systems marks the begining of end of the era of fossil fuel machnies.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SHAPING GREEN TRANSPORT / GREEN FUEL / HYDROGEN TRANSITION */}
      <section id="shaping" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Text copy */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#d946ef] uppercase block">
                Shaping Green transport
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Green fuel / Hydrogen fuel transition
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  RVCR provides a platform for green fuels to compete with fossil fuel without added investments.
                </p>
                <p>
                  Fuel agnostic Primemover engines relieves for instability due to disruption in supply logistics form current fuel sources by enabling use of newer green fuels. RVCR eases pain of ‘End user’ and Industry to adapt to changing environmental regulation requiring new investment in product upgrades for compliance.
                </p>
                <p className="text-gray-500 italic">
                  This section is under construction.
                </p>
              </div>
              <Link
                href="https://test.kgyat.com/repository/greensol.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#c026d3] hover:underline inline-block mt-2"
              >
                Click here.....
              </Link>
            </div>

            {/* Right Column: CAD Engine photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md h-[240px] sm:h-[280px] rounded overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/assets/images/EqTGN1rXcAMmOlA-scaled.jpeg"
                  alt="RVCR Green Fuel Hydrogen Engine Transition"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. STRICTER EMISSION CONTROL & LOWER CARBON FOOTPRINT */}
      <section id="stricter" className="py-16 md:py-20 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            
            {/* Card 1: Stricter Emission Control */}
            <div className="flex flex-col items-start space-y-3 p-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/assets/images/Value-to-manufacturers.png"
                  alt="Stricter Emission control"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
                Stricter Emission control
              </h3>
              <p className="text-xs sm:text-sm text-[#414141] leading-relaxed">
                RVCR empowers industry to devise better product strategies for compliance to newer stricter emission regulations with-out conflicting with existing petroleum economy which is averse to any drastic change.
              </p>
              <p className="text-xs text-gray-500 italic">
                This section is under construction.
              </p>
              <Link
                href="https://test.kgyat.com/repository/greensol.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#c026d3] hover:underline inline-block"
              >
                Click here.....
              </Link>
            </div>

            {/* Card 2: Lower Carbon Footprint */}
            <div className="flex flex-col items-start space-y-3 p-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/assets/images/efficiency.png"
                  alt="lower carbon foot print"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
                lower carbon foot print
              </h3>
              <p className="text-xs sm:text-sm text-[#414141] leading-relaxed">
                This section is under construction.
              </p>
              <Link
                href="https://test.kgyat.com/repository/greensol.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#c026d3] hover:underline inline-block mt-auto"
              >
                Click here.....
              </Link>
            </div>

          </div>
        </Container>
      </section>

      {/* 5. GREEN ENERGY TRANSFORMATION (Full Width Black Section) */}
      <section id="greenene" className="py-20 md:py-28 bg-black text-white">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Green energy transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {GREEN_ENERGY_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-neutral-800 rounded-lg p-6 sm:p-8 flex flex-col items-start text-left shadow-lg transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight" style={{ color: '#fff' }}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed flex-grow" style={{ color: '#fff' }}>
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="text-xs font-semibold text-[#d946ef] hover:underline mt-auto"
                >
                  Read more.....
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. EFFICIENT UTILITIES / GREEN ECONOMY SECTION */}
      <section id="greeneco" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Efficient utilities */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Efficient utilities
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  RVCR will alleviates the Industry pain of costly Incremental enhancement strategies shall see emergence of next gen green-tech Primemover unicorns invigorating a new economy based on recovery from the climate catastrophe and providing direct employment at all levels. RVCR technology template for newer generation superior drive motors based on the Mechanism for wind, Hydro and solar Thermal energy conversion and even in electric motors.
                </p>
                <p className="text-gray-500 italic">
                  This section is under construction.
                </p>
              </div>

              {/* Sub-block: Easy adaption */}
              <div className="pt-4 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-black tracking-tight">
                  Easy adaption
                </h3>
                <p className="text-xs text-gray-500 italic">
                  This section is under construction.
                </p>
                <Link
                  href="https://test.kgyat.com/repository/greensol.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#c026d3] hover:underline inline-block"
                >
                  Click here.....
                </Link>
              </div>
            </div>

            {/* Right Column: Green economy Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl border border-gray-200 flex flex-col">
                <div className="bg-[#2b5c8f] text-white p-6 text-center space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Green economy
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 font-normal">
                    Reinvigoration of a new age green machine economy.
                  </p>
                </div>
                <div className="relative w-full h-[220px] sm:h-[260px] bg-neutral-100">
                  <Image
                    src="/assets/images/factory-work.jpg"
                    alt="Green Economy Machine Assembly Factory Workers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 7. NEW LIFE CYCLE SECTION (Pale Lilac Background) */}
      <section className="py-16 md:py-24 bg-[#f6eff5] border-b border-[#e8e7ef]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              New Life cycle
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
              <p>
                RVCR lays the foundation of transition to Next-Gen Green Prime-movers that leads to wider industry turnaround and reinvigoration. Furthermore, RVCR will open new technological alternatives to formulate long-term clean tech strategies in wide range of sectors for dealing with climate change regulations and achieve Net Zero Carbon 2050 goals with ease.
              </p>
              <p className="text-gray-500 italic">
                This section is under construction.
              </p>
            </div>
            <Link
              href="https://test.kgyat.com/repository/greensol.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#c026d3] hover:underline inline-block mt-2"
            >
              Click here.....
            </Link>
          </div>
        </Container>
      </section>

      {/* 8. GLOBAL GREEN TRANSITIONING (3-IMAGE SEQUENCE) */}
      <section id="global" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
              Global green Transitioning
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TRANSITION_IMAGES.map((item, index) => (
              <div
                key={index}
                className="relative h-[200px] sm:h-[220px] rounded overflow-hidden shadow-md border border-gray-200 group bg-neutral-100"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. SUMMARY SECTION */}
      <section id="summary" className="relative py-20 md:py-28 bg-white border-b border-[#e8e7ef] overflow-hidden">
        {/* Subtle Watermark RVCR Text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none text-[120px] sm:text-[180px] md:text-[240px] font-black text-rose-950/[0.04] leading-none tracking-tighter">
          RVCR
        </div>

        <Container className="relative z-10 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#414141] leading-relaxed max-w-3xl">
              RVCR – makes unhooking from fossil fuel vaible.
            </p>
          </div>
        </Container>
      </section>

      {/* 10. RVCR TECH LINKS */}
      <RvcrTechLinks />

    </div>
  );
}
