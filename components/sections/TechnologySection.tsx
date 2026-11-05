import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { ROUTES } from '@/lib/routes';

export const TechnologySection: React.FC = () => {
  return (
    <>
      {/* 2. RVCR SPECIFICS SECTION (SOLID BLACK BACKGROUND) */}
      <section id="RVCRS" className="py-16 md:py-24 bg-[#000000] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: 3D CAD Bevel Gear Assembly */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-md h-[300px] sm:h-[340px]">
                <Image
                  src="/assets/images/ASSEMBLY_1.jpg"
                  alt="RVCR Bevel Gear Rotary Piston Assembly"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column: Specifics Copy */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-wider text-[#cf3367] font-roboto block uppercase">
                RVCR specifics
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                A new configuration of rotary piston mechanics.
              </h2>
              
              <div className="space-y-3 text-white text-sm sm:text-base leading-relaxed">
                <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
                  Almost all machines today are based on either the ‘Slider-Crank’ or the ‘Rotary’ mechanism (known as kinematic mechanisms).
                </p>
                <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
                  The genesis of RVCR is novel component geometries and its configuration that simplifies conversion of energy within fluids like fuel or wind etc., into power. Fluids actuate motion of links which eventually rotate wheels or power generators. Key to RVCR is enhancing of efficacy of this energy conversion.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={ROUTES.rvcrSpecifics}
                  className="inline-block px-7 py-2.5 bg-white text-black font-semibold text-xs rounded-none hover:bg-gray-200 transition-colors shadow-md"
                >
                  Read more
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. HOW RVCR WORKS SECTION */}
      <section 
        id="Howworks" 
        className="relative py-16 md:py-24 bg-white border-b border-[#e8e7ef] overflow-hidden"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 xl:col-span-6 space-y-5 relative z-10">
              <span className="text-xs font-semibold tracking-wider text-[#cf3367] font-roboto block uppercase">
                How RVCR works
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">
                Perceive - Rotating curved piston with cam actuated shuttle valve
              </h2>
              
              <div className="space-y-4 text-[#414141] text-sm sm:text-base leading-relaxed max-w-2xl">
                <p>
                  Simply speaking there are two rotors on a single shaft wherein One rotor decouples and becomes a stator, while the other turns. They switch roles alternately as rotor and stator. Like in a steam engine the piston actuates a shuttle valve before it reaches the end position to allow reversing stem flow, RVCR rotary piston actuate adjacent rotor as it nears the end of its turning span. This is crux of RVCR RVCR’s new mechanism is that it eliminates the need of dedicated stationary link, by dynamic reorienting of a twin Rotor system, enabling a new physics of energy conversion.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={ROUTES.howRvcrWorks}
                  className="inline-block px-7 py-2.5 bg-black text-white font-semibold text-xs rounded-none hover:bg-neutral-800 transition-colors shadow-md"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* Mobile/Tablet Fallback Image */}
            <div className="lg:hidden flex justify-center pt-4">
              <div className="relative w-full max-w-md h-[260px] sm:h-[320px]">
                <Image
                  src="/assets/images/WORKS-min.png"
                  alt="RVCR Rotating Curved Piston with Cam Actuated Shuttle Valve"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Empty space in grid on desktop to ensure text wraps properly */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

          </div>
        </Container>

        {/* Desktop Image: Stuck flush to right of viewport and significantly larger */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-end w-[46vw] max-w-[680px] xl:max-w-[760px] 2xl:max-w-[850px] h-[380px] xl:h-[450px] 2xl:h-[500px] pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/WORKS-min.png"
              alt="RVCR Rotating Curved Piston with Cam Actuated Shuttle Valve"
              fill
              sizes="(min-width: 1280px) 760px, 46vw"
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};
