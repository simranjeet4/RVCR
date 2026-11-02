import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { constructPageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { RvcrTechLinks } from '@/components/sections/RvcrTechLinks';

export const metadata: Metadata = constructPageMetadata({
  title: 'RVCR Applications | Clean Primemovers, Renewable Energy & Fluid Machinery',
  description:
    'Commercial applications of RVCR: fuel-agnostic I.C. engines, ground-level wind motors, high-efficiency compressors, and precision fluid-handling machinery.',
  path: '/rvcr-applications',
});

const SALIENT_ATTRIBUTES = [
  'Thermodynamic processes called Constant Volume Heat exchange (CVHE);',
  'Direct torque transfer through the entire expansion process.',
  'Real time wide range Variable compression ratio (VCR).',
  'Multi fuel flexibility (Switching of fuels during operation).',
  'Uniform peak efficiency under all load conditions.',
  'Miniaturization by warping of gas volume around shaft; Reduced operations costs by minimizing of component wear. Etc.',
];

export default function RvcrApplicationsPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/3556b6719a17c2ff4adee4732dc0ee1c.jpg"
            alt="RVCR Applications - Gears and Kinematics"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Dark subtle overlay for contrast */}
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />

        <Container className="relative z-10 text-center py-16 sm:py-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            RVCR Applications
          </h1>
          <div className="text-xs sm:text-sm md:text-base text-white font-normal max-w-3xl mx-auto leading-relaxed space-y-1">
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              Green fuel &amp; Renewable energy Prime-movers
            </p>
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              Motors and drive systems
            </p>
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              Utilities : – Compressors/ Pumps; Hydraulic, Metering and Dosing devices
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
                alt="RVCR Applications Checklist Overview"
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
                RVCR principle opens an entire new dimension in machine systems especially FHM (Fluid Handling Machines). They include Primemovers like engines powering land transport, maritime propulsion, power-generation; Wind and Hydro motors for renewable energy; motors, compressor, variable delivery pumps, metering devices etc.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. I.C. ENGINE PRIMEMOVER APPLICATION SECTION */}
      <section id="green" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-left">
              <h2 className="text-xs font-semibold tracking-wider text-black font-roboto uppercase block mb-1">
                I.C.Engine Primemover Application
              </h2>
            </div>

            {/* Centered Transparent Rotor Combustion Video */}
            <div className="relative w-full max-w-xl mx-auto aspect-[4/3] bg-black shadow-2xl flex items-center justify-center overflow-hidden border border-gray-200">
              <video
                src="/assets/videos/Concept-Vimal-Seq-Combustion-1-Hq-1.m4v"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Detailed Explanatory Copy */}
            <div className="space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
              <p>
                If we hear of engines, we generally see two types. Those used in Cars vs those used in Planes. The former are I.C.Engines based on slider crank mechanism and the later are Jet or Turbojet engines based on rotary mechanism. RVCR introduces the 3rd kind based on rotary system. No it isn’t anything like Wankel engine.
              </p>
              <p>
                Rvcr is tangential piston rotary engine that produces VCR. Its not as complicated as it sounds.
              </p>
              <p>
                RVCR I.C. Engine implications: – It opens up a new world of fuel agnostic engines. Owing to wide range VCR that it enables RVCR engines allows real time switching from fossil fuel use to green-fuels and vice versa. It allows OEMs in transport and energy sector to device newer long-term strategies for dealing with ever stricter emission regulations and achieve Zero Carbon goals.
              </p>
              <p>
                RVCR is all about high enhancement in efficiency It attains VCR with easy ease with external controls and hence attaining better combustion control. The combustion of different fuels in an I.C. Engine is one of the most challenging aspects. However, RVCR provides for constant volume which makes large residence time possible for combustion. RVCR Engines shall facilitate green-fuel enforceability without being in conflict with fossil-fuel economic structures, for a greener Industry ecosystem.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. THE APPLICATION SEGMENTS (Full Width Black Section) */}
      <section className="py-20 md:py-28 bg-black text-white">
        <Container>
          {/* Section Heading with Underline */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight inline-block border-b-2 border-white pb-2">
              The Application Segments
            </h2>
          </div>

          <div className="space-y-20 max-w-6xl mx-auto">
            {/* Block 1: Application Segments + Rocker CAD Video */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#fff] leading-relaxed" style={{ color: '#fff' }}>
                <p style={{ color: '#fff' }}>
                  We understand the RVCR technology best and how to customize it into segment specific technologies. The shift in the industry is towards greener options to reduce GHG emissions in engine Exhaust. The trend is in automotive sector is consistently moving towards electrification and hybrids. In the maritime and many land based applications we see the shift if towards clean fuels like LNG, CNG, Biofuels and Hydrogen etc.
                </p>
                <p style={{ color: '#fff' }}>
                  RVCR shall facilitate green-fuel enforceability without being in conflict with fossil-fuel economic structures, for a greener Industry ecosystem.
                </p>
                <p style={{ color: '#fff' }}>
                  RVCR I.C. Engine project is covered in the dedicated page under the opportunities section.
                </p>
                <p style={{ color: '#fff' }}>
                  We have prioritized the customization of RVCR knowhow for developing the technology for 450 to 600 Hp applications. This specification is deduced as the MVP ‘minimum viable product’. This is with consideration to the wide range of applications it suffices.
                </p>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-black shadow-2xl border border-neutral-800 flex items-center justify-center overflow-hidden">
                  <video
                    src="/assets/videos/Seq-Asm-No-Top-Csg-Fuel-Inj-Vv-Rocker-0-No-Air-Thru-Arrow-Isometric-1.m4v"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Block 2: CP05 CAD Model Image + Skilled in Art Copy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-md h-[260px] sm:h-[300px]">
                  <Image
                    src="/assets/images/CAD-model-CP05-with-fuel-manifold-rotated-copy.png"
                    alt="RVCR CP05 CAD Model with Fuel Manifold"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#fff] leading-relaxed order-1 lg:order-2" style={{ color: '#fff' }}>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider" style={{ color: '#fff' }}>
                  This section contains technical details for those skilled in the art.
                </h3>
                <p style={{ color: '#fff' }}>
                  The reduction and increase in volume trapped between the piston vanes is used for compression and expansion. These are the essential thermodynamic gas processes in I.C.Engine. The other two processes are the heat addition and removal. All these processes can be explicitly achieved with RVCR kinematics. The animation depicts the Piston-vane sequence and the gas process. The gas forces are always directly transferred to the central output shaft through the sleeves.
                </p>
                <p style={{ color: '#fff' }}>
                  RVCR combines the efficiency gains from ‘Positive Displacement’ and the Compactness of the rotary Mechanism. This new methodology is capable of delivering many new features and functionalities. The most important of them is VCR ‘Variable Compression Ratio’. VCR feature has been pursued for almost a 100 years by almost every global major, but it has remained elusive. VCR is key to gaining quantum leap in efficiency and multi-fuel adaptability (real-time switching from fossil to green-fuels).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. PROCESS DEPICTION SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Process Copy */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Process depiction
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-black leading-relaxed">
                This CAD model animation depicts operation of exhaust valve, its drive chain and fuel injection.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  The RVCR concept-based engine was conceived, and its technology knowhow is developed. The sequential motion of piston requisite for Gas Processes in I.C. Engines is achieved in a smarter, compacter way with piston-vane pair. While one piston-vane set is rotating, it’s counterpart performs the equivalent of an Cylinder head.
                </p>
                <p>
                  The conventional reciprocating motion of cylindrical piston is a source of major limitations and RVCR eliminates it. The RVCR piston-vane is radially fitted on the sleeve and eliminates linear reciprocating motion. The connecting rod, top end bearing (Gudgeon pin) and bottom end bearings are not present.
                </p>
              </div>
            </div>

            {/* Right Column: Exhaust Valve & Injector 360 Video */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] bg-black shadow-xl border border-gray-200 flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/Seq-Asm-No-Top-Csg-Fuel-Inj-Vv-Rocker-With-Air-Thru-Arrow-Grey-Rotat-360-Orient-1.m4v"
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

      {/* 6. SALIENT ATTRIBUTES SECTION (Pale Lilac Background) */}
      <section className="py-16 md:py-24 bg-[#f6eff5] border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Salient Attributes List */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Salient attributes
              </h2>
              <p className="text-xs sm:text-sm text-[#414141] leading-relaxed">
                RVCR is an entirely new way of warping the gas volume around as central shaft. RVCR opens possibilities for never before features and functionalities. A few are listed below
              </p>
              <ul className="space-y-2.5 pt-2">
                {SALIENT_ATTRIBUTES.map((attr, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#414141]">
                    <span className="w-2 h-2 rounded-full bg-[#0066cc] shrink-0 mt-1.5" />
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: The Implications Card with Multi-Engine Comparison Video */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-white border border-gray-200 shadow-md p-5 sm:p-6 space-y-4">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-black uppercase tracking-wider">
                    The Implications
                  </h3>
                  <p className="text-xs text-[#414141] mt-1">
                    RVCR I.C. Engine project is covered in the dedicated page under the ‘Current projects’ section.
                  </p>
                </div>
                <div className="relative w-full aspect-[4/3] bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
                  <video
                    src="/assets/videos/Mugur-1.m4v"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 7. RENEWABLE ENERGY MOTORS SECTION */}
      <section id="renewable" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Wind Motor Schematic Drawing */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md h-[260px] sm:h-[320px]">
                <Image
                  src="/assets/images/wind-motor.png"
                  alt="RVCR Renewable Energy Wind Motor Line Drawing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column: Renewable Copy */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Renewable energy motors
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  Tapping of renewable wind energy leads to only one picture – The 3-blade wind turbine. Same is the case with hydro-energy where we see Kaplan and Francis turbines. There are many more vertical turbine types.
                </p>
                <p>
                  We introduce a new concept of utilizing Positive displacement mechanism for making next generation High efficiency wind motors. the methodology applied is about Converting flow energy in wind/hydro (Rivers, tidal) to pressure differential for driving RVCR +ve displacement motors
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 8. TURBINE VS RVCR TECH OVERVIEW SECTION */}
      <section className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Top Text Block */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                Turbine vs RVCR tech overview
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-black leading-relaxed">
                The section contains technical details for those skilled in the art.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  The axial flow FLUID turbines are rotary machines converting Wind energy into Power. The root principal differentiator between rotary and RVCR methods is in the wind force tapping method. Conventional wind turbines are driven by lift, achieved by aerofoiled profile of turbine blades. RVCR uses pressure differential between high wind velocity zone and ground level stagnant air conditions.
                </p>
                <p>
                  RVCR is the 1st in basing a FLUID motor on a rotary positive displacement mechanism. The RVCR system deploys a Convergent divergent nozzle in the flow path of air rather than a turbine. This creates low pressure at throat of the Nozzle. An air stack connects the low pressure at nozzle throat to the RVCR wind motor exhaust.
                </p>
                <p>
                  The high pressure at lower altitude region is connected to the intake side. The air flow induced from the high to low pressure point passes through the wind motor by turning the piston vanes which seal any air leak past its sides. This methodology cannot be deployed in turbines for air slip between blades. Even placing reaction turbines with closely packed blades has issues with air varying differential pressures and flow . The complexities of conventional positive displacement system make it difficult.
                </p>
              </div>
            </div>

            {/* Bottom 2 Columns: Superior Attributes + Wind Motor Video */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
                  Superior attributes
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                  <p>
                    RVCR wind motors can be installed at ground level as it is easy to communicate the air pressure differential without losses. evaluated in terms of its implication on increment in efficiency of Power take-off, indicates towards the gain in Value. The simplified geometry of the technology component systems when compared to conventional turbines complements further gains in value
                  </p>
                  <p>
                    RVCR enables multi-fold increase in energy capture efficiency compared to modern wind turbines. The RVCR principal simplifies the mechanics of Prime-Mover to reduce the Capital Cost drastically and the engineering involved reduces operations cost.
                  </p>
                  <p className="font-semibold text-[#0066cc]">
                    The Topic is covered on the RVCR wind project page.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-md aspect-[16/10] bg-black shadow-xl flex items-center justify-center overflow-hidden border border-gray-200">
                  <video
                    src="/assets/videos/Wind-Motor-1.m4v"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. SUMMARY SECTION */}
      <section id="summary" className="py-20 md:py-28 bg-white relative overflow-hidden flex items-center border-b border-gray-100">
        {/* Giant RVCR Watermark in background */}
        <div 
          className="absolute inset-0 bg-contain bg-right bg-no-repeat opacity-[0.09] pointer-events-none select-none"
          style={{ backgroundImage: `url('/assets/images/rvcr.png')` }}
        />

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
              Summary
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              The entire range of applications of RVCR is an exhaustive list and covers almost every fluid handling machine based on conventional kinematic mechanisms.
            </p>
          </div>
        </Container>
      </section>

      {/* 10. RVCR TECH LINKS SECTION */}
      <RvcrTechLinks />

    </div>
  );
}
