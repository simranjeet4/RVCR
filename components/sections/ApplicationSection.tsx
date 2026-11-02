import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { ROUTES } from '@/lib/routes';

export const ApplicationSection: React.FC = () => {
  return (
    <>
      {/* 4. RVCR APPLICATION SECTION */}
      <section id="application" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Title & Action */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#CC00AA] font-roboto block uppercase">
                RVCR application
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
                Primemovers and FHM
              </h2>
              <div className="pt-2">
                <Link
                  href={ROUTES.rvcrApplications}
                  className="inline-block px-7 py-2.5 bg-black text-white font-semibold text-xs rounded-none hover:bg-neutral-800 transition-colors shadow-md"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* Right Column: Paragraph with Vertical Purple/Crimson Accent Border */}
            <div className="lg:col-span-7 border-l-2 border-[#CC00AA] pl-6 sm:pl-8 py-2">
              <p className="text-[#414141] text-sm sm:text-base leading-relaxed">
                RVCR kinematics applies to all Fluid Handling machines RVCR kinematics is a replacement for both positive displacement (Reciprocatory &amp; rotary) and rotary centrifugal kinematic system. The Variable displacement characteristic adds to the versatility of the mechanism. The component elements and their parameters can be customized for both high pressure and high-volume applications. The tangential piston force dynamics can be adapted to cover both +ve displacement and the rotary centrifugal applications. The RVCR product projects are covered separately.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* 5. RVCR FEASIBILITY SECTION */}
      <section 
        id="feasibility" 
        className="py-24 md:py-32 bg-black relative text-center overflow-hidden"
      >
        {/* Fixed or Cover Background via Next/Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/AS4-pxg1zlef0d2mf4m6w946uu5gu57msi9nccn2nv7wb4.jpg"
            alt="RVCR Manufacturing Feasibility Machinery"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <Container className="relative z-10 space-y-6">
          <div className="max-w-4xl mx-auto space-y-5">
            <span className="text-xs font-semibold tracking-wider text-[#CC00AA] font-roboto block uppercase">
              RVCR feasibility
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Solving rotary system faults
            </h2>
            
            <div className="space-y-4 text-white text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
                RVCR overcomes issues with sealing and inertia common in rotary kinematic systems. Unlike previous Wankel system RVCR has no (straight-line edge or large-flat-side surfaces) sealing issues, RVCR employs a combination of tangential spring force and labyrinth sealing methodology for across rotary piston vane sealing and side-sealing respectively.
              </p>
              <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
                RVCR allows large rapid expansion at low speeds hence solving inertia issues are ,. The alternate Stopping and Starting of RVCR rotors is made easy by slower speeds and by cushioning of rotors by gas forces.
              </p>
            </div>

            <div className="pt-3">
              <Link
                href={ROUTES.rvcrFeasibility}
                className="inline-block px-8 py-2.5 bg-white text-black font-semibold text-xs rounded-none hover:bg-gray-200 transition-colors shadow-md"
              >
                Read more
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
