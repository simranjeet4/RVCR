import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { constructPageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { RvcrTechLinks } from '@/components/sections/RvcrTechLinks';
import { Check } from 'lucide-react';

export const metadata: Metadata = constructPageMetadata({
  title: 'RVCR Specifics | Toroidal Geometries & Bent-Piston Kinematics',
  description:
    'Detailed engineering architecture of RVCR: toroidal chamber geometry, bent-piston kinematics, sleeve-vane assemblies, and single-shaft mechanism comparison.',
  path: '/rvcr-specifics',
});

const ATTRIBUTES_LIST = [
  'Attains Compression/ Expansion thermodynamic) gas processes.',
  'Achieves controlled variation of angular displacement of rotors.',
  'Attains analogous Variation in Compression/Expansion Ratios.',
  '1st to attain ‘Constant Volume gas process’ between strokes.',
  'Deploys ‘Opposed Piston’ Principle within One Enclosed Chamber',
  'Deploys ‘Double acting Piston’ with equal cross sectional areas.',
  'Packages two independent chains of Rotors in one chamber',
];

const COMPONENT_GALLERY = [
  {
    image: '/assets/images/097-765x1024-copy.jpg',
    title: 'MANUFACTURED-BENT-PISTON',
    alt: 'Manufactured Bent Piston CAD Model',
  },
  {
    image: '/assets/images/BOTTAM_LINER-copy.jpg',
    title: 'TOROIDAL CASING ONE HALF',
    alt: 'Toroidal Casing One Half CAD Hardware',
  },
  {
    image: '/assets/images/SLEEVE_PISTON-copy.jpg',
    title: 'PISTON-VANE & SLEEVE ASSEMBLY',
    alt: 'Piston-Vane and Sleeve Assembly CAD View',
  },
  {
    image: '/assets/images/Mechanism-Comparison-On-One-Shaft.jpg',
    title: 'Mechanism Comparison on a single shaft',
    alt: 'RVCR Mechanism Comparison on Single Shaft',
  },
];

export default function RvcrSpecificsPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/Car2-58a568e1db4e5.webp"
            alt="RVCR Specifics - Toroidal Mechanism and Bent Pistons"
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
            RVCR Specifics
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-white font-normal max-w-3xl mx-auto leading-relaxed space-y-1">
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              A mechanism of Energy Conversion invloving two bent pistons (sets) ind a toroidal
            </p>
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              chamber with a sequential opertion the combines features of positive displacement and rotary mechanisms.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section id="overview" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: 2Section Cut Image on Elevated Card with Offset Purple Background */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md mx-auto w-full">
                {/* Purple offset accent background */}
                <div className="absolute -top-3.5 -left-3.5 w-[85%] h-[85%] bg-[#96337b] pointer-events-none" />
                {/* Foreground elevated card */}
                <div className="relative bg-white shadow-xl border border-gray-100 p-4 sm:p-6 z-10">
                  <div className="relative w-full h-[220px] sm:h-[260px]">
                    <Image
                      src="/assets/images/2section_cut-copy-e1696326226349.png"
                      alt="RVCR Section Cut Casing Architecture"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Overview Copy */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                Overview
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  RVCR is about rotating pistons (bent piston-vanes sliding inside a hollow toroidal chamber). Rotating pistons-vanes have existed for some time, but the novelty of RVCR is in the control over the sequential motion of a pair of rotating pistons-vanes. RVCR for the 1st time allows independent motion of each piston-Vane. That is, when one piston-vane rotates the other one remains stationary. RVCR allows complete control over when piston vanes can rotate independently and when to reconnect back for synchronous rotation of the Piston-vane pair.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. MACHINE STRUCTURE BASICS SECTION */}
      <section id="structure" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Machine Structure Basics Copy */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                Machine structure basics
              </h2>
              <p className="text-sm sm:text-base font-semibold text-black leading-relaxed">
                A mechanism of rotating pistons that combines positive displacement and rotary mechnaisms.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  Machines are made of components which are either moving or fixed type. The fixed remain stationary and support the moving parts that perform specific function. This is generic to all machines, be it household machines like fans, washing machines or complicate engines powering ships, planes, and rockets. The genesis of RVCR is the invention by Er. Ajee Kamath, which details a new configuration of ‘Moving elements’ (ME) and ‘Stationary Elements’ (SE) into an assembly that performs the functions of machines.
                </p>
                <p>
                  For nearly 100 years now only 2 types of mechanisms are mostly used in Primemovers and utility machines. The ‘Slider-Crank’ used and rotary mechanism.
                </p>
              </div>
            </div>

            {/* Right Column: Slider Crank Video */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md mx-auto w-full aspect-[16/10] bg-black shadow-xl flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/Conventional-Slider-Crank-1.m4v"
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

      {/* 4. CALLOUT CARD (Floating / Elevated White Box) */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-md p-6 sm:p-8 md:p-10 space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
            <p>
              When the moving parts are forced, they actuate motion in their connected links. Like in case of flow energy in wind or in water from dams that turn the turbines or electromagnetic in case of motors – they eventually lead to rotation of power generators or wheels. For nearly 100 years now only 2 types of mechanisms are mostly used in Primemovers and utility machines. The ‘Slider-Crank’ used and rotary mechanism. RVCR mechanisms simplifies conversion of energy within fluids into mechanical work (and Vice Versa) whilst enhancing efficiency and miniaturization.
            </p>
            <p>
              The genesis of RVCR is the invention by Er. Ajee Kamath, which details a new configuration of components of novel geometry, into an assembly of ‘Moving elements’ (ME) and ‘Stationary Elements’ (SE). Improving efficacy of converting fluid forces to torque, is key to RVCR mechanism.
            </p>
            <p>
              RVCR is a superior alternative to the century old conventional ‘Slider Crank’ and ‘Rotary mechanisms’. It is a new addition in mechanisms that simplifies conversion of energy within fluids into mechanical work (and Vice Versa) that enhances efficiency and miniaturization.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. UNDERSTANDING RVCR SECTION (Full Width Steam Train Locomotive Background) */}
      <section id="understanding" className="relative py-20 md:py-28 bg-black overflow-hidden">
        {/* Steam Locomotive Train Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/008-HALLS-RAILFANS.jpeg"
            alt="Understanding RVCR Kinematics"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/75 pointer-events-none" />

        <Container className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Understanding RVCR
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 font-normal">
              A mechanism of rotating pistons that combines positive displacement and rotary mechnaisms. Same pics at the bottom
            </p>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-center">
              <p className="font-semibold text-[#ffffff]" style={{ color: '#ffffff' }}>
                RVCR can be better understood with references to convention mechanism.
              </p>
              <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
                Beginning with conventional slider crank mechanism. It comprises of cylindrical piston sliding inside a Barrel (same as in a syringe used for injections to patients). While one side of the piston draws fluid, the other side is used pull and push it. The needle is fitted on top of syringe, and the fluid is sucked in and pushed out through it. In machines the barrel to is fitted with a covering called head that has valves for allowing the fluid and out of the barrel.
              </p>
              <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
                RVCR is about bending the barrel, into a toroid. The pistons are bent and a pair of bent pistons are placed within the toroidal space. When one bent piston slides the other one stays rigidly stationary.
              </p>
              <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
                The moving bent piston (referred as piston-vane) now has one side drawing fluid (the side moving away for the stationary vane-piston) while the other side is pushing fluid is against the stationary one. The stationary piston acts as the head. The vane-piston fits closely inside the toroid, and sealing arrangements to ensure the fluids on either side of the vane-piston do not leak past to the other side.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. 4-GRID COMPONENT GALLERY SECTION */}
      <section className="py-16 md:py-20 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPONENT_GALLERY.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative w-full aspect-[4/3] bg-gray-50 border border-gray-200 shadow-sm overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-[#0066cc] hover:underline uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. RVCR DESIGN SECTION */}
      <section id="design" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Torus Gear Illustration in Black Box */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md mx-auto w-full aspect-[4/3] bg-black shadow-xl flex items-center justify-center overflow-hidden">
                <div className="relative w-4/5 h-4/5">
                  <Image
                    src="/assets/images/ASSEMBLY_1.jpg"
                    alt="RVCR Toroidal Rotary Assembly Kinematics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: RVCR Design Copy */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#CC00AA] font-roboto block uppercase">
                Configuration &amp; Assembly
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                RVCR Design
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  The bent piston-vane fits rigidly at one end of a hollow sleeve (see figure). This fitting is called ‘Vane-sleeve’ set (VS). Two VS are placed facing each other, (angularly displaced) and mounted on a central shaft and cased inside a hollow toroidal liner.
                </p>
                <p>
                  Twisting the sleeve part extruding outward along shaft axis, turns the ‘Piston-vanes’ inside the torus. Each VS can individually couple and decouple with the shaft. the bottom pic shows manufactured subassembly of VS on Shaft.
                </p>
                <p>
                  The two Piston-vanes are cased inside a hollow toroidal liner. Lile a car wheel tyer fits over its rim. The casing is made in two halves – the upper and the lower half
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 8. RVCR SYSTEM UNIQUENESS SECTION */}
      <section id="sequence" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Uniqueness Copy */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                RVCR system uniqueness
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#8b4513] leading-relaxed">
                The ability to dynamically re-configure links during operation. rotating links switch from being moving to being stationary
              </p>
              <div className="space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  Kinematic Mechanism constitutes of a chain of links which are connected each other. Two connected links are called a pairs. One of the links of the chain is kept ‘Grounded’ and stationary while others are ‘Moving Links’. In conventional machanisms the grounded link is kept dedicatedly stationary all times.
                </p>
                <p>
                  RVCR mechanism allows dynamic reorienting of a part of Rotating links. This is achieved by decoupling a section of a moving link and grounding for a predefined time and then it is reverted to be moving link by re-coupling it. The uniqueness of RVCR lay in this intermittent use of a part of the stationary link as moving link.
                </p>
                <p>
                  RVCR elimenates the need for dedicated grounded link, rather the configuration of links changes dynamically during operation. This is a new dimension in Machine Methodology.
                </p>
              </div>
            </div>

            {/* Right Column: Power Sequence Video */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative max-w-md mx-auto w-full aspect-[4/3] bg-[#eef1f5] border border-gray-200 shadow-xl flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/Power-Seq-Asm-Grey-1.m4v"
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

      {/* 9. RVCR ANIMATIONS SECTION (Full Width Black Section) */}
      <section id="animations" className="py-20 md:py-28 bg-black text-white text-center">
        <Container>
          <div className="max-w-4xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              RVCR animations
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              RVCR enables sequential cyclic rotary motion of piston vanes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Animation 1 */}
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/9] bg-black border border-neutral-800 shadow-xl overflow-hidden flex items-center justify-center">
                <video
                  src="/assets/videos/Seq-Asm-1-Translation-On-Shaft-0-1-1.m4v"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                SLEEVE VANE PAIR MOUNTING ON SHAFT
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
                The animation depicts Sleeve and Piston vane mounting on the central shaft, that enables two separate bent pistons to chase each other.
              </p>
            </div>

            {/* Animation 2 */}
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/9] bg-black border border-neutral-800 shadow-xl overflow-hidden flex items-center justify-center">
                <video
                  src="/assets/videos/Seq-Asm-3-Slv-Vane-Pair-On-Shaft-Isometric-1-2.m4v"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                RVCR SLEEVE VANE ANIMATION
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto">
                The animation shows laymens depiction of increase and decrease of volume, and the gas process in one complete rotation of an RVCR piston Vane. a mechanism would not work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. RVCR ATTRIBUTES SECTION */}
      <section id="attributes" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Physical Prototype Motoring Video */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                RVCR attributes
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#8b4513] leading-relaxed">
                The ability to dynamically re-configure links during operation. rotating links switch from being moving to being stationary
              </p>
              <div className="relative max-w-md w-full aspect-[4/3] bg-black shadow-xl flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/1St-Motoring-1.m4v"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column: Attributes & Checklist */}
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs sm:text-sm text-[#414141] leading-relaxed">
                RVCR is a simplified ‘Rotary positive displacement mechanism’ where sequential operations of the piston vanes very similar to the reciprocating piston It attains all the gas processes enabled by the conventional slider-crank mechanism. It further adds newer gas process, enhances performance and efficacy of energy conversion.
              </p>
              
              <div>
                <h3 className="text-sm font-bold text-[#0066cc] mb-3">
                  The base list of RVCR attributes are
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#414141]">
                  {ATTRIBUTES_LIST.map((attr, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0066cc] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{attr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 11. SUMMARY SECTION */}
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
              The RVCR concept is an invention in the field of kinematic mechanism that seeds a new breed of highly energy efficient machines with possibilities of newer functionalities to effectively deal with 21st century market drivers.
            </p>
          </div>
        </Container>
      </section>

      {/* 12. RVCR TECH LINKS SECTION */}
      <RvcrTechLinks />

    </div>
  );
}
