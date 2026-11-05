import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { ROUTES } from '@/lib/routes';

export const ViabilitySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f2f2f2]">
      <Container className="space-y-8">
        
        {/* Card 1: RVCR Viability */}
        <div id="viability" className="bg-white rounded-lg border border-gray-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#cf3367] font-roboto block uppercase">
                RVCR viability
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
                Viable green transition
              </h3>
              <h4 className="text-sm sm:text-base font-bold text-[#1e293b]">
                RVCR most advanced competitive Zero-Carbon Technologies
              </h4>
              <p className="text-[#414141] text-xs sm:text-sm leading-relaxed">
                RVCR is about enhancing efficacy of force and energy transfer. Furthermore, easy, and dynamic control over change of volume and the rate of change of volume allows newer ways in improving thermodynamic gas processes. Comparing capital cost components of total material, manufacture cost, and system’s needs, RVCR stands economical than all conventional Primemovers.
              </p>
              <p className="text-[#414141] text-xs sm:text-sm leading-relaxed">
                RVCR operational costs reduces from lesser strenuous operations demand, coupled with leap in efficiency and never before capabilities form VCR attributes. Slower speeds reduces frictional losses improving energy efficiency.
              </p>
              <div className="pt-2">
                <Link
                  href={ROUTES.rvcrViability}
                  className="inline-block px-7 py-2.5 bg-black text-white font-semibold text-xs rounded-none hover:bg-neutral-800 transition-colors shadow-md"
                >
                  Read more
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm h-[260px]">
                <Image
                  src="/assets/images/RVCR_hydro_motor.jpg"
                  alt="RVCR Hydro Motor Schematic Diagram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Card 2: RVCR Value */}
        <div id="value" className="bg-white rounded-lg border border-gray-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-sm h-[260px]">
                <Image
                  src="/assets/images/assmbly-pxg1z1nt0ubhjzy08auj71ysaa831op1qxub6gq64o.jpg"
                  alt="RVCR Transmission Assembly Hardware"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-contain rounded"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-wider text-[#cf3367] font-roboto block uppercase">
                RVCR value
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
                Cost effective climate regulation compliance
              </h3>
              <h4 className="text-sm sm:text-base font-bold text-[#1e293b]">
                RVCR technology products derive value for its inherent attributes.
              </h4>
              <p className="text-[#414141] text-xs sm:text-sm leading-relaxed">
                RVCR is a simplified system to combine features like double acting and opposed piston, making it a highly efficient, compact, and has low carbon footprint. It combines the system efficiency of ‘Positive Displacement Mechanism’, fine ‘VCR’ control, and gains from ‘Direct Torque Transfer’ characteristics of Rotary mechanism, into one highly advanced primemover tech.
              </p>
              <p className="text-[#414141] text-xs sm:text-sm leading-relaxed">
                It opens long-standing theoretical ceiling limits in machine energy conversion efficiencies and performance capabilities.
              </p>
              <div className="pt-2">
                <Link
                  href={ROUTES.rvcrValue}
                  className="inline-block px-7 py-2.5 bg-black text-white font-semibold text-xs rounded-none hover:bg-neutral-800 transition-colors shadow-md"
                >
                  Read more
                </Link>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};
