import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { constructPageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { RvcrTechLinks } from '@/components/sections/RvcrTechLinks';

export const metadata: Metadata = constructPageMetadata({
  title: 'Strategic Advantages | Market Defensibility & Technology Leadership',
  description:
    'Adapting to change is necessary for survival, but choosing the right solution is key to thriving with change. Early adoption advantages and competitive market strategies of RVCR.',
  path: '/strategic-advantages',
});

const EARLY_ADOPTION_ITEMS = [
  {
    title: 'Market entry ease',
    icon: '/assets/images/clock.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: '#',
  },
  {
    title: 'Post entry barriers',
    icon: '/assets/images/efficiency.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: '#',
  },
  {
    title: 'Core Competency',
    icon: '/assets/images/production.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: '#',
  },
];

export default function StrategicAdvantagesPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/Digital-Leadership-What-Is-It.jpg"
            alt="Strategic Advantages - Digital Leadership and Chess Strategy"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <Container className="relative z-10 text-center py-16 sm:py-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Strategic Advantages
          </h1>
          <div className="text-xs sm:text-sm md:text-base text-white font-normal max-w-3xl mx-auto leading-relaxed space-y-1">
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              Adapting to change is necessary for survival,
            </p>
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              but choosing right solution is key to thriving with change, when others struggle.
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
                alt="RVCR Strategic Advantages Checklist Overview"
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
                Preparedness towards newer stricter climate regulation has seen companies investing in newer green product verticals. The disruption of conventional product line by the pandemic, has further caused companies to move completely towards the new verticals. However, the transition is not easy as the green product solutions are neither mature nor sustainable to be the mainstay of businesses. In this scenario RVCR technology is a long-term strategic option for leading the ‘Zero Carbon’ transition
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. EARLY ADOPTION ADVANTAGES SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">
              Early adoption advantages
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Early adoption of superior RVCR technology has long term implications on business RVCR help you lead the change needed to cater to ‘Zero Carbon’ market drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {EARLY_ADOPTION_ITEMS.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-12 h-12 mb-4 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-black mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-[#555] mb-3 leading-relaxed">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="text-xs font-semibold text-[#c026d3] hover:underline"
                >
                  Read More.....
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. THE COMPETETIVE ADVANTAGE (Full Width Black Section) */}
      <section className="py-20 md:py-28 bg-black text-white">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              The competetive advantage
            </h2>
          </div>

          {/* Row 1: Cards 01, 02, 03 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {/* Card 01 */}
            <div className="bg-black border border-neutral-800 rounded-lg p-6 flex flex-col items-start text-left shadow-lg transition-transform duration-200 hover:-translate-y-1">
              <span className="text-xl sm:text-2xl font-bold text-[#c026d3] mb-2 block">
                01
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight" style={{ color: '#fff' }}>
                Influence the competition
              </h3>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed flex-grow" style={{ color: '#fff' }}>
                This section is under construction. Till such time please refer below link
              </p>
              <Link
                href="#"
                className="text-xs font-semibold text-[#d946ef] hover:underline mt-auto"
              >
                Read More.....
              </Link>
            </div>

            {/* Card 02 */}
            <div className="bg-black border border-neutral-800 rounded-lg p-6 flex flex-col items-start text-left shadow-lg transition-transform duration-200 hover:-translate-y-1">
              <span className="text-xl sm:text-2xl font-bold text-[#c026d3] mb-2 block">
                02
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight" style={{ color: '#fff' }}>
                Influence the supplychain
              </h3>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed flex-grow" style={{ color: '#fff' }}>
                This section is under construction. Till such time please refer below link
              </p>
              <Link
                href="#"
                className="text-xs font-semibold text-[#d946ef] hover:underline mt-auto"
              >
                Read More.....
              </Link>
            </div>

            {/* Card 03 */}
            <div className="bg-black border border-neutral-800 rounded-lg p-6 flex flex-col items-start text-left shadow-lg transition-transform duration-200 hover:-translate-y-1">
              <span className="text-xl sm:text-2xl font-bold text-[#c026d3] mb-2 block">
                03
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight" style={{ color: '#fff' }}>
                Prepemptive product preparedness
              </h3>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed flex-grow" style={{ color: '#fff' }}>
                This section is under construction. Till such time please refer below link
              </p>
              <Link
                href="#"
                className="text-xs font-semibold text-[#d946ef] hover:underline mt-auto"
              >
                Read More.....
              </Link>
            </div>
          </div>

          {/* Row 2: Card 03 + Leapfrogging Market Leaders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-center">
            {/* Left Box: 03 Prepemptive product preparedness */}
            <div className="bg-black border border-neutral-800 rounded-lg p-6 flex flex-col items-start text-left shadow-lg transition-transform duration-200 hover:-translate-y-1">
              <span className="text-xl sm:text-2xl font-bold text-[#c026d3] mb-2 block">
                03
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight" style={{ color: '#fff' }}>
                Prepemptive product preparedness
              </h3>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed" style={{ color: '#fff' }}>
                This section is under construction. Till such time please refer below link
              </p>
              <Link
                href="#"
                className="text-xs font-semibold text-[#d946ef] hover:underline mt-auto"
              >
                Read More.....
              </Link>
            </div>

            {/* Right Box: Leapfrogging market leaders */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ color: '#fff' }}>
                Leapfrogging market leaders
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed" style={{ color: '#fff' }}>
                RVCR – the new physics affects value addtion at every level of the product’s value chain.
              </p>
            </div>
          </div>

        </Container>
      </section>

      {/* 5. SUMMARY SECTION */}
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
              AAA
            </p>
          </div>
        </Container>
      </section>

      {/* 6. RVCR TECH LINKS */}
      <RvcrTechLinks />

    </div>
  );
}
