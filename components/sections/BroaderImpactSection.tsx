import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { ROUTES } from '@/lib/routes';

export const BroaderImpactSection: React.FC = () => {
  return (
    <>
      {/* 8. BROADER IMPACT SECTION */}
      <section 
        id="impact" 
        className="py-16 md:py-24 relative"
        style={{
          background: 'linear-gradient(90deg, #96337b 36%, #ffffff 35%)'
        }}
      >
        <Container>
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm h-[260px] sm:h-[300px]">
                  <Image
                    src="/assets/images/green_industy.jpg"
                    alt="Green Eco Earth Clean Industry Illustration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#cf3367] font-roboto block uppercase">
                  Broader impact
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
                  Redefining - climate recovery response
                </h3>
                <h4 className="text-sm sm:text-base font-bold text-[#1e293b]">
                  Enabling an comprehensive alternate industrial strategy for Climate Change Mitigation to fix global warming.
                </h4>
                <p className="text-[#414141] text-xs sm:text-sm leading-relaxed">
                  RVCR ensures Unhooking from fossil fuel dependency. It enables a smooth transition to green fuel in the heavy transport sector. In doing so RVCR carves newer markets of green fuels. The onset of RVCR leads to lowering of Levelized cost of power from renewable energy.
                </p>
                <p className="text-[#414141] text-xs sm:text-sm leading-relaxed">
                  RVCR seeds an entire breed on next gen green machines and stands as a unified solution to shape the 21st century green industry ecosystem.
                </p>
                <div className="pt-2">
                  <Link
                    href={ROUTES.broaderImpact}
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

      {/* 9. OUR R&D SECTION */}
      <section id="RVCR-R&D" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#cf3367] font-roboto block uppercase">
                Our R&amp;D
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">
                R&amp;D on newer “Zero Carbon” technologies
              </h2>
              
              <div className="space-y-4 text-[#414141] text-sm sm:text-base leading-relaxed">
                <p>
                  We conduct research, and development of to create newer seed technologies based on the breakthrough RVCR concept. We then design new breed of primemovers, and systems based on the developed technology capable of outperforming future climate regulations of transport and energy industry. We generate global IP of products based on the developed RVCR technologies
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={ROUTES.aboutUs}
                  className="inline-block px-7 py-2.5 bg-black text-white font-semibold text-xs rounded-none hover:bg-neutral-800 transition-colors shadow-md"
                >
                  Read more
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md h-[280px]">
                <Image
                  src="/assets/images/whatwedo-1-1.jpeg"
                  alt="RVCR Kinematic Linkage Graph"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
};
