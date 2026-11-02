import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { constructPageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { RvcrTechLinks } from '@/components/sections/RvcrTechLinks';

export const metadata: Metadata = constructPageMetadata({
  title: 'RVCR Feasibility | Engineering Validation, Kinematics & Testing',
  description:
    'Comprehensive engineering validation of RVCR: kinematic feasibilities, thermodynamic CFD modeling, physical proto manufacturing, assembly, and test rigs.',
  path: '/rvcr-feasibility',
});

const PROTO_GALLERY = [
  {
    title: 'Proto Model CP02',
    image: '/assets/images/Phy-proto-Assm-Gulf-news-pic-300x225-1.jpg',
    alt: 'RVCR Proto Model CP02 Physical Assembly',
  },
  {
    title: 'Proto Test Ring',
    image: '/assets/images/Phy-Proto-CP05-casing-on-test-rig-300x224-1.jpg',
    alt: 'RVCR Proto Test Rig with CP05 Casing',
  },
  {
    title: 'CAD Model CP02',
    image: '/assets/images/New-Project-7-e1693317558479.jpg',
    alt: 'RVCR CAD Model CP02 Component Geometry',
  },
  {
    title: 'TITLE 1',
    image: '/assets/images/RVCR-02.jpg',
    alt: 'RVCR Prototype Component 1',
  },
  {
    title: 'TITLE 2',
    image: '/assets/images/RVCR-01.jpg',
    alt: 'RVCR Prototype Component 2',
  },
  {
    title: 'TITLE 3',
    image: '/assets/images/RVCR-03.jpg',
    alt: 'RVCR Prototype Component 3',
  },
];

export default function RvcrFeasibilityPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/gears-wallpaper-2.jpg"
            alt="RVCR Feasibility - Machine Gears and Engineering Kinematics"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Dark contrast overlay */}
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />

        <Container className="relative z-10 text-center py-16 sm:py-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            RVCR Feasibility
          </h1>
          <div className="text-xs sm:text-sm md:text-base text-white font-normal max-w-3xl mx-auto leading-relaxed">
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              The RVCR concept systems are designed, manufactured, assembled, kinematic function tested and feasibility demonstrated.
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
                alt="RVCR Feasibility Checklist Overview"
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
                The RVCR concept-based product realization is proven through technology and engineering feasibility assessment. This process for a deep tech innovation is involves complex and an specialized expertise. It covers entire spectrum of aspects ranging from rudimentary base geometry feasibilities to complex final product mass production feasibilities. These assessment were part of the design and development and includes multilayered and interdependent processes and listed out under various heads.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. KINEMATIC FEASIBILITIES SECTION */}
      <section id="kinematic" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Dark callout box + text */}
            <div className="lg:col-span-6 space-y-6">
              {/* Dark Box */}
              <div className="bg-black text-white p-6 sm:p-8 rounded-lg shadow-xl space-y-3 border border-neutral-800">
                <h3 className="text-base sm:text-lg font-bold tracking-tight">
                  <span className="text-white">Individual </span>
                  <span className="text-[#d946ef]">Engineering assesments</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#ffffff] leading-relaxed font-normal" style={{ color: '#ffffff' }}>
                  RVCR has traversed the entire path from conception to demonstration to prove feasibility of RVCR for adaptation needs for varying applications.
                </p>
              </div>

              {/* Text paragraphs below dark box */}
              <div className="space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  To ensure that the scrutiny is complete we got the RVCR to go through patenting offices globally. The 1st gen RVCR concept secured granted patents in about 49 countries worldwide.
                </p>
                <p>
                  The next step in the validation were covered in Kinematic synthesis and further D&amp;D process. The various relationships and system requirement were perfected the system was virtually modeled and animated. The functional aspect was further deliberated mathematically, and these were latter verified with physical models after realization of the Physical model.
                </p>
              </div>
            </div>

            {/* Right Column: Title + text + CAD Video */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  Kinematic feasibilities
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                  <p>
                    Like any other concept, the 1st level of validation of the RVCR concept was to crosscheck it’s constituents for conformity within the confines of the laws of physics. Next was the verification of its novelty and originality.
                  </p>
                  <p>
                    This was confirmed through national and international patenting process.
                  </p>
                </div>
              </div>

              {/* Video: Adams Skeletal Hybrid Animation */}
              <div className="relative w-full max-w-lg aspect-[4/3] bg-black shadow-xl border border-gray-200 flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/Adams-Skeletal-hybrid-animation-1.m4v"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. THERMODYNAMIC FEASIBILITIES (Full Width Black Section) */}
      <section id="thermodynamic" className="py-20 md:py-28 bg-black text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            
            {/* Left Column: CFD Simulation Video */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] bg-black shadow-2xl border border-neutral-800 flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/CFD-simulation.m4v"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column: Heading & Pure White Technical Text */}
            <div className="lg:col-span-6 space-y-5 text-xs sm:text-sm text-[#fff] leading-relaxed" style={{ color: '#fff' }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Thermodynamic feasibilities
              </h2>
              <div className="space-y-4" style={{ color: '#fff' }}>
                <p style={{ color: '#fff' }}>
                  The modelling and animation processes lay the basis for the modulating the components motion and its relationship with the gas Volumes trapped within. This began with outlining of sequence of compressions, expansion, and gas exchange processes. The duration control of these processes was verified for range for possibilities.
                </p>
                <p style={{ color: '#fff' }}>
                  All conventional systems like valve, ports and timing control and accessory systems for head addition and removal processes are easily integrated with RVCR.
                </p>
                <p style={{ color: '#fff' }}>
                  Sealing systems for gas process integrity has remained major challenge for rotary systems like Wankel and MYT systems. This is essential for RVCR concept-based Fluid Handling machines including, Engines, Wind/Hydro motors, variable delivery Pumps and compressors etc. RVCR overcomes the main flaws of predecessor vane systems.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 5. PHYSICAL ENGINEERING FEASIBILITIES SECTION */}
      <section id="physical" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Physical Engineering Text */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Physical Engineering feasibilities
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  Like any other concept, the physics should be engineered into physical proto. We refined the feasibility of components for manufacturing by varying methods and processes. These include casting, forging, machining etc. and metallurgical processes.
                </p>
                <p>
                  All prototype parts since the 1st design and the latter iterations were manufactured. The capability to produce prototype components in a production relevant environment and the industrial base has been assessed and potential manufacturing sources are identified.
                </p>
                <p>
                  the various manufacturing strategy options have been refinedexplored, and materials, tooling, critical systems, test equipment, as well as personnel skills is demonstrated on components in production relevant environment. Producibility assessments of key technologies pose no feasibility challenges and cost model for projected manufacturing cost is constructed.
                </p>
              </div>
            </div>

            {/* Right Column: Physical Assembly Image on rubber workstation */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md h-[260px] sm:h-[320px] rounded-sm overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/assets/images/Phy-Proto_assembly-on-table-top-rubber-TML-Work-station.jpg"
                  alt="RVCR Physical Prototype Assembly on Workstation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 6. ASSEMBLY FEASIBILITIES SECTION (Pale Lilac Background) */}
      <section id="assembly" className="py-16 md:py-24 bg-[#f6eff5] border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Assembly Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md h-[260px] sm:h-[320px] rounded-sm overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/assets/images/Phy-Proto-CP02-iso-plan-no-clutch.jpg"
                  alt="RVCR Assembly Feasibilities - CP02 Casing Subassembly"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Assembly Text */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Assembly feasibilities
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  The assembly of components of unique novel geometries were part of the initial thought process of configuring bent vanes in a toroid chamber. This core subassemblies along with all its critical systems and their mounting methodologies are established. The special tools, jigs, mandrels for individual systems handling, assembling, and mounting are tested and tried.
                </p>
                <p>
                  Accessory systems required for developing applications based on RVCR are assessed. High level systems integration strategies are formulated. standard off-the-shelf systems of conventional products (Prime-mover engines, compressors, and pumps etc.) do not pose adaptability challenges.
                </p>
                <p>
                  The standard systems (Fluid exchange, fuel injection, ignition, cooling, turbocharger, tribological, Exhaust) compatibility of system with RVCR and re-engineering systems to suit RVCR have been worked.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 7. FUNCTIONAL FEASIBILITIES SECTION */}
      <section id="functional" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Motoring Test Rig Video */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] bg-black shadow-xl border border-gray-200 flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/2-Motoring-2.m4v"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column: Functional Copy */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Functional feasibilities
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  Each of RVCR’s constituent system functionalities cumulates to the success of RVCR the RVCR assemblies. Through the concept, design, and development stage, to the physical realization and testing of each individual system it is explored probable failure modes.
                </p>
                <p>
                  The systems are classed based on their criticalities and newer solutions are innovated to solve critical functional needs.
                </p>
                <p>
                  The Individual systems have various levels of interdependence other systems they are assembled with. These are essential for bringing together all essential processes. The system are optimized for best workings and efficiency. These Systems include, Sealing, Rapidly alternating positive clutching, torsional vibration handling, gas exchange process accessories.
                </p>
                <p>
                  The nuances of RVCR systems and its fine tuning for deriving customized products in various engineering applications is compiled. This knowhow is the key to enabling the feasibilities of the various down stream applications of RVCR technology.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 8. PROTO SYSTEM, ASSEMBLY AND TESTING GALLERY */}
      <section id="proto" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
              RVCR proto system, assembly and testing
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PROTO_GALLERY.map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center group transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative w-full h-[200px] sm:h-[220px] rounded border border-gray-200 overflow-hidden shadow-sm bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-xs sm:text-sm font-semibold tracking-wider text-[#2563eb] uppercase text-center">
                  {item.title}
                </h3>
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
              The newer functionalities of RVCR products to effectively deal with 21st century market drivers is thoroughly assessed and proven very much feasible.
            </p>
          </div>
        </Container>
      </section>

      {/* 10. RVCR TECH LINKS */}
      <RvcrTechLinks />

    </div>
  );
}
