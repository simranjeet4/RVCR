import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { constructPageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { RvcrTechLinks } from '@/components/sections/RvcrTechLinks';

export const metadata: Metadata = constructPageMetadata({
  title: 'RVCR - Tech R & D | About Us, History & Engineering Genesis',
  description:
    'RVCR technology is developed by GYATK through years of Research & Development. Discover the background, genesis, bottom-up R&D strategy, and technology structure of RVCR.',
  path: '/about-us',
});

export default function AboutUsPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-start bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/rd.jpg"
            alt="RVCR - Tech R & D - Engineers working on engine rig"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />

        <Container className="relative z-10 py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            RVCR - Tech R &amp; D
          </h1>
        </Container>
      </section>

      {/* 2. R&D ORIGIN & IPER ACKNOWLEDGEMENT */}
      <section className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: CAD Drawing with circuits */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm h-[220px] sm:h-[260px] rounded overflow-hidden">
                  <Image
                    src="/assets/images/rd1.jpg"
                    alt="RVCR Technology Ideation and R&D Genesis"
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p className="font-semibold text-black">
                  RVCR technology is developed by GYATK through years of Research &amp; Development.
                </p>
                <p>
                  They say necessity is the mother of invention, however this wasn’t the case here. RVCR was a result of the ability to thought experimenting with geometries, it assembly feasibility and design solutions. The idea was to develop a possible I.C. engine by using rotary pistons. This entire journey of ideating and conceptualization of the geometry and sequence of base components; were conceived by the inventor at the early stage. Later the timing methodology with cams for attaining the sequence and integration of gas and exchange accessories with their timing cams followed.
                </p>
                <p>
                  Once the concept was acknowledged in the IPER (International Preliminary Examination Report) by the EPO (European Patent office) against the PCT (Patent Corporation Treaty) application as true to Novelty, Inventive step, and Industrial applicability, the inventor initiated the project for the development of a prototype based on the RVCR concept.
                </p>
              </div>

            </div>

            {/* Bottom Full Width Paragraph */}
            <div className="pt-4 border-t border-gray-100 text-xs sm:text-sm text-[#414141] leading-relaxed">
              <p>
                This project lead to the development of the RVCR technology and the know-how and know-why for synthesizing kinetics for customized applications. The technology comprises, but not limited to, methodologies; techniques; formulas; information; designs; virtual &amp; Analysis Methods and data; algorithms; manufacturing &amp; QC processes; materials; testing; assembly &amp; sub-assembly; strategies required for developing products based on the Principal of RVCR Mechanism.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. THE STRATEGY SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Robotic Hand vs Human Hand */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm h-[220px] sm:h-[260px] rounded overflow-hidden shadow-md border border-gray-200">
                  <Image
                    src="/assets/images/robotic-vs-human-hand-system-depiction.jpg"
                    alt="RVCR R&D Strategy - Robotic System Depiction"
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Strategy Narrative & Bullets */}
              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  The strategy
                </h2>
                <p>
                  The approach to R&amp;D project was a bottom-up one. It was the only way, as there didn’t exist design precedence of equivalent mechanism in use. Hence each individual component had to be designed from scratch which became the base of the pyramid and then build upwards to realize higher assemblies.
                </p>
                <p>
                  The engineering application selected for developing the 1st prototype was for an ‘I.C. Engine’, using the invented mechanism. The main reasons for the choice being: –
                </p>
                <ul className="space-y-2 list-disc list-outside pl-4 text-xs sm:text-sm text-[#414141]">
                  <li>
                    The complexity and sophistication of ‘I.C. Engine Design’ process covers almost all subsystems used in other applications. Other products can be arrived by removing Sub-Systems for adapting the design for fast development of alternative products.
                  </li>
                  <li>
                    I.C. Engines withstand extreme stress conditions and hence covers design sturdiness requirements of all other application Products.
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Section: MVP Criteria */}
            <div className="pt-4 border-t border-gray-100 space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
              <p>
                A minimum viable proto specification was arrived at, and the criterions were
              </p>
              <ul className="space-y-2 list-disc list-outside pl-4">
                <li>
                  To minimize the designing of components by using of standard ‘Of the Shelf’ accessories systems where-ever possible.
                </li>
                <li>
                  The cubic capacity to match with a small size engine of a motorbike, for easy of handling, manufacture, and availability of operational data.
                </li>
              </ul>
              <p className="pt-2">
                The Technology Constituent Modules are segregated for ease of design process management and customization for varying applications.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. THE BACKGROUND (Full Bleed Windmill Section) */}
      <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
        {/* Full-width Windmill Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/bg-2.png"
            alt="The Background - Windmill and Kinematic Historical Heritage"
            fill
            sizes="100vw"
            className="object-cover object-right md:object-center"
            priority
          />
        </div>
        {/* Dark gradient overlay on the left for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent pointer-events-none" />

        <Container className="relative z-10 max-w-5xl mx-auto">
          <div className="max-w-xl space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight inline-block border-b-2 border-white pb-2 mb-2">
              The Background
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-white leading-relaxed font-normal" style={{ color: '#ffffff' }}>
              <p style={{ color: '#ffffff' }}>
                The spark moment happened to the inventor in his undergrade days while attending class on I.C.Engines. The slider-crank mechanism seemed cumbersome and the moment of ‘why not a rotating piston working against a stationary one’ happened.
              </p>
              <p style={{ color: '#ffffff' }}>
                The idea of getting two vanes, assembled in a concentric toroid was conceived. Slowly and steadily additional requirements were solved. The feasibilities of functionalities of 1st vane rotating and holding its counterpart the 2nd stationary till the 1st is to collide; the sequential turning, fitment of sealings and clutching etc.
              </p>
              <p style={{ color: '#ffffff' }}>
                These happened over a period of and was the result of inventor’s ability to perceive for 3D shapes and thought experimenting with it. The 1st wooden model was fabricated but the whole idea went into a cold box for a decade, though it always remained in the back of his mind.
              </p>
              <p style={{ color: '#ffffff' }}>
                Later the inventor by now employed on merchant ships marine engineer over the years, gained exposure to various engineering systems. The mercantile system inventor conceptualised newer possible geometries of parts, refining and modifying them to overcome assembling constraints and desired sequential motion etc. These exist in the schematic sketches of the 1st patent application made in India.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. THE INITIAL STAGE SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                The Initial stage
              </h2>
              <p className="text-xs sm:text-sm text-[#414141] leading-relaxed">
                This stage was self-financed and carried out inhouse. Each component virtual model was made in ideas software and assembled. These were checked for initial manufacture feasibility and feedback beginning with foundry (mould pattern makers), and later machining process tolerance were accommodated. Similar rounds of corrective iteration were made to improvise assembly, QC, testing concern.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: pic.png collage of circular parts */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm h-[240px] sm:h-[280px]">
                  <Image
                    src="/assets/images/pic.png"
                    alt="RVCR Prototype Components and Subsystems"
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Column: Physical validation details */}
              <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  GYATK has perfected the root algorithms of the various critical sub-systems and their interdependencies that define the functional integrity of the RVCR Mechanism as a Fluid Handling Machine. The validation of these subsystems was carried out by physical manufacture of component systems and establishing the RVCR assembly to test the configuration.
                </p>
                <p>
                  The functional integrity of the Prototype assembly and essential sub-systems is validated through physical simulation of the thermodynamic gas process like compression, expansion, gas exchange, and air flow throughput. The mass manufacturability and longevity of components mainly the seals which have been a major issue for rotary Wankel engine is solved.
                </p>
                <p>
                  This saw the technological know-how for deriving pilot products for capability demonstration getting formulated. The project graduated into the phase of customising the knowhow for products.
                </p>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 6. TECHNOLOGY STRUCTURE SECTION (Pale Lilac Background `#f6eff5`) */}
      <section className="py-16 md:py-24 bg-[#f6eff5] border-b border-[#e8e7ef]">
        <Container>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Technology structure
              </h2>
              <p className="text-xs sm:text-sm text-[#414141] leading-relaxed">
                The technology developed is structured in a ‘Tree table form’ where invented method is the ‘Root’ and core formulas form the ‘Trunk’, which are further customised for several ‘branches’ of applications. The genetic code of RVCR is in the patent which seeds ‘RVCR Ecosystem’.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Inflection Chart Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm h-[220px] sm:h-[260px] rounded overflow-hidden shadow-md border border-gray-200 bg-neutral-900">
                  <Image
                    src="/assets/images/rvcr-market-img.jpg"
                    alt="RVCR Technology and Market Inflection Structure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Column: White Card with FHM and VCR Advantages */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  RVCR Rotary positive displacement machine mechanism upgrades performance &amp; efficiency parameters of all generic FHM including, I.C. engines, Pumps, Compressors &amp; Motors at the same time reduces overall footprint, leading to new generation machines &amp; fluid handling devices to shape future Energy Ecosystem.
                </p>
                <p>
                  The main Advantages of RVCR Mechanism originate from the ‘Variable Compression Ratio’ (VCR) feature (ability to vary the Compression and Expansion Ratio).
                </p>
                <p>
                  ‘Fluids are sucked-in and then pushed out of ‘FHM’ and used for Pumping or compressing them in Pumps and Compressors. In engines fluids (Fuel or Fuel/Air Mix) are sucked and compressed and burnt for powering other Machines, before it’s pushed out. Fluid flow Energy of wind or water is converted to rotational Power, when forced through FHM’
                </p>
                <p>
                  RVCR combines efficiency of ‘Positive Displacement’ in a compact of ‘Rotary’ unit and delivers VCR, which Crack-Opens Efficiency and Performance ceilings considered impossible with conventional mechanisms.
                </p>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 7. SUMMARY WATERMARK SECTION */}
      <section className="relative py-20 md:py-28 bg-white border-b border-[#e8e7ef] overflow-hidden">
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
              The newer functionalities of RVCR products to effectively deal with 21st century market drivers is thoroughly assessed and proven very much feasible.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. RVCR TECH LINKS */}
      <RvcrTechLinks />

    </div>
  );
}
