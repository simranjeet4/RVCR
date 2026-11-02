import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { constructPageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { RvcrTechLinks } from '@/components/sections/RvcrTechLinks';

export const metadata: Metadata = constructPageMetadata({
  title: 'RVCR Value | Economic Value Proposition & Technological Parameters',
  description:
    'RVCR value proposition across technological parameters, industrial manufacturers, end-user economics, and environmental regulators to achieve Zero Carbon objectives.',
  path: '/rvcr-value',
});

const TECH_PARAMETERS = [
  {
    title: 'Efficiency',
    icon: '/assets/images/clock.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
  {
    title: 'Efficacy',
    icon: '/assets/images/efficiency.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
  {
    title: 'Capacity range',
    icon: '/assets/images/production.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
  {
    title: 'Compactness',
    icon: '/assets/images/minimize.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
];

const INDUSTRIAL_PARAMETERS = [
  {
    title: 'Value to manufacturers',
    icon: '/assets/images/minimize.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
  {
    title: 'Value to system providers',
    icon: '/assets/images/efficiency.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
  {
    title: 'Value to system integrators',
    icon: '/assets/images/production.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
];

const END_USER_PARAMETERS = [
  {
    title: 'Cost',
    icon: '/assets/images/minimize.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
  {
    title: 'Ease of use',
    icon: '/assets/images/efficiency.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
  {
    title: 'Multi use',
    icon: '/assets/images/production.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
];

const REGULATOR_PARAMETERS = [
  {
    title: 'Stricter climate regulation',
    icon: '/assets/images/minimize.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
  {
    title: 'regulate pace of transition',
    icon: '/assets/images/efficiency.png',
    desc: 'This section is under construction. Till such time please refer below link',
    link: 'https://test.kgyat.com/repository/technologyValue.html',
  },
];

export default function RvcrValuePage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/tech-background-fvwtt878xhbn6lh6.jpg"
            alt="RVCR Value - Technology and High-Tech Kinematics"
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
            RVCR Value
          </h1>
          <div className="text-xs sm:text-sm md:text-base text-white font-normal max-w-3xl mx-auto leading-relaxed">
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              RVCR eases the pain of (and empowers) end users, industry players and policy makers alike to attain its ‘Zero Carbon’ objectives.
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
                alt="RVCR Value Checklist Overview"
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
                RVCR value evaluation needs deeper perspective on the innovation. Unlike incremental innovation where the value is determined by a simple comparison of one or few parameters (like efficiency improvement or cost reduction etc.) RVCR introduces newer enhancements in multiple disciplines and adds newer characteristics.
              </p>
              <p className="text-xs sm:text-sm text-[#414141] leading-relaxed">
                RVCR value is cumulation of all individual parameters discussed herein.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. TECHNOLOGICAL PARAMETERS SECTION */}
      <section id="technical" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">
              Technological parameters
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
              RVCR – the new physics affects value addtion at every level of the product’s value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {TECH_PARAMETERS.map((item, index) => (
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#c026d3] hover:underline"
                >
                  Click here.....
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. INDUSTRIAL PARAMETERS (Full Width Black Section) */}
      <section id="value" className="py-20 md:py-28 bg-black text-white">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
              Industrial parameters
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto" style={{ color: '#fff' }}>
              RVCR – the new physics affects value addtion at every level of the product’s value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {INDUSTRIAL_PARAMETERS.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-neutral-800 rounded-lg p-6 sm:p-8 flex flex-col items-center text-center shadow-lg transition-transform duration-200 hover:-translate-y-1"
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
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight" style={{ color: '#fff' }}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed" style={{ color: '#fff' }}>
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#d946ef] hover:underline"
                >
                  Click here.....
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. VALUE FOR END USERS SECTION */}
      <section id="enduser" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">
              Value for end users
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
              Machine mechanism overview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {END_USER_PARAMETERS.map((item, index) => (
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#c026d3] hover:underline"
                >
                  Click here.....
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. VALUE FOR REGULATORS SECTION */}
      <section id="regulators" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">
              Value for Regulators
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
              RVCR – the new physics affects value addtion at every level of the product’s value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {REGULATOR_PARAMETERS.map((item, index) => (
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#c026d3] hover:underline"
                >
                  Click here.....
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. SUMMARY SECTION */}
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
              The RVCR concept is an invention in the field of kinematic mechanism that seeds a new breed of highly energy efficient machines with possibilities of newer functionalities to effectively deal with 21st century market drivers.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. RVCR TECH LINKS */}
      <RvcrTechLinks />

    </div>
  );
}
