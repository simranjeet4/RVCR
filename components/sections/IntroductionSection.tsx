import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { ROUTES } from '@/lib/routes';

export const IntroductionSection: React.FC = () => {
  return (
    <section id="WisR" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 6 Columns Width */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-[#CC00AA] font-roboto block uppercase">
              What is RVCR
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">
              A breakthrough in machine heart tech
            </h2>
            
            <div className="space-y-3 text-[#414141] text-sm sm:text-base leading-relaxed">
              <p>
                For 150 years machines catered to our transport and power needs, but little do many know of Primemovers – the heart of machines.
              </p>
              <p>
                Like our heart has various muscles and valves, primemovers have links. RVCR is a new science of primemovers
              </p>
            </div>

            {/* Side-by-Side: Left Heart Card + Right Primemovers Copy & Read More Button */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pt-2">
              
              {/* Left: White Elevated Heart Card */}
              <div className="w-[155px] sm:w-[165px] shrink-0 bg-white p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col items-start">
                <div className="w-[80px] h-[80px] bg-[#96337B] p-3 flex items-center justify-center mb-3">
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/images/heart.png"
                      alt="Biological Heart Metaphor"
                      fill
                      sizes="60px"
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                <h3 className="text-xs sm:text-[13px] font-bold text-black leading-snug">
                  To pump blood through our body for powering it
                </h3>
              </div>

              {/* Right: Explanatory Paragraph + Read More Button */}
              <div className="flex-1 space-y-4 pt-1">
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  Primemovers like engines, turbines and motors powered us into mechanized age. Today they are the polluters. We have developed RVCR technology- that delivers tomorrow’s  green primemovers.
                </p>
                <div>
                  <Link
                    href={ROUTES.whatIsRvcr}
                    className="inline-block px-7 py-2.5 bg-black text-white font-bold text-xs rounded-none hover:bg-neutral-800 transition-colors shadow"
                  >
                    Read more
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: 6 Columns Width */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-lg h-[340px] sm:h-[380px] lg:h-[420px]">
              <Image
                src="/assets/images/heart_engine.jpg"
                alt="Machine Heart Tech Prime Mover Engine Illustration"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
