import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { constructPageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { RvcrTechLinks } from '@/components/sections/RvcrTechLinks';

export const metadata: Metadata = constructPageMetadata({
  title: 'What is RVCR | Fundamentals of Rotary Variable Compression Ratio',
  description:
    'An invention in mechanisms of energy conversion based on a new concept in kinematics. Discover the fundamentals of Rotary Variable Compression Ratio (RVCR).',
  path: '/what-is-rvcr',
});

export default function WhatIsRvcrPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/Stock-graphic-of-car-driving-1.png"
            alt="What is RVCR - Future of Primemovers and Mobility"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Dark subtle overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <Container className="relative z-10 text-center py-16 sm:py-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            What Is RVCR ?
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-white font-normal max-w-3xl mx-auto leading-relaxed space-y-1">
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>An invention in ‘Mechanisms of Energy Conversion’</p>
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>based on a new concept in ‘Kinematics’ (skeleton base) of machines</p>
          </div>
        </Container>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section id="whatover" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Exploded 3D Image on Elevated Card with Offset Purple Background */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md mx-auto w-full">
                {/* Purple offset accent background */}
                <div className="absolute -top-3.5 -left-3.5 w-[85%] h-[85%] bg-[#96337b] pointer-events-none" />
                {/* Foreground elevated card */}
                <div className="relative bg-white shadow-xl border border-gray-100 p-4 sm:p-6 z-10">
                  <div className="relative w-full h-[220px] sm:h-[260px]">
                    <Image
                      src="/assets/images/temp1-copy-e1696321228356.png"
                      alt="RVCR Exploded Assembly Components"
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
              <div className="space-y-4 text-sm sm:text-base text-[#414141] leading-relaxed">
                <p>
                  RVCR is about an unique arrangement of set of component of novel geometry that outputs new breed of compact and super-efficient machines.
                </p>
                <p>
                  RVCR configuration of links attains newer type of sequential movements in machine parts, enabling never before possible features and possibilities.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section id="intro" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Introduction Copy */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                Introduction
              </h2>
              <p className="text-sm sm:text-base font-semibold text-black leading-relaxed">
                This section makes comparison of Skeletal system with machine mechanism for layman’s understanding of the subject.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  Like the skeleton in humans and animals’ machines have kinematic chain that defines its structure and movements.
                </p>
                <p>
                  The skeletal system has bones that support movement of limbs, but they are constrained to a certain degree. for e.g. We can rotate our arms and the shoulder joint allows arms to be stretched sideways but cannot be folded backwards. The toe joint supports the body on ground but cannot turn backwards. Similarly, machines have links are allowed for certain motions, but are also constrained . All movements are dependent on the type of Joints.
                </p>
                <p>
                  For e.g., wind turbines with 3 blades attached to the central shaft are allowed to rotate but the shaft cannot Similarly move out of its place.
                </p>
              </div>
            </div>

            {/* Right Column: Robot Hand vs Human Hand Card with Offset Purple Background */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative max-w-md mx-auto w-full">
                {/* Purple offset accent background */}
                <div className="absolute -top-3.5 -right-3.5 w-[85%] h-[85%] bg-[#96337b] pointer-events-none" />
                {/* Foreground elevated card */}
                <div className="relative bg-white shadow-xl border border-gray-100 p-4 sm:p-6 z-10">
                  <div className="relative w-full h-[220px] sm:h-[260px]">
                    <Image
                      src="/assets/images/robotic-vs-human-hand-system-depiction-copy-e1696321450367.jpg"
                      alt="Robotic vs Human Hand Skeletal System Depiction"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>
                </div>
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
              The most important of machines of the 20th century are primemovers like engines and turbines. And then there are utility machines, motors, pumps, compressors etc. These machines are used in Industrial and domestic purposes. The current generation of these machines use either the slider crank or the rotary mechanism.
            </p>
            <p>
              Engines that powers cars, trains and ships are mostly based on the slider crank mechanism while wind turbines, and jet engines used in aviation are based on rotary mechanism. Even the electric motor used in battery driven cars are based on rotary mechanism.
            </p>
            <p>
              The application of RVCR is numerous ranging from Primemovers to all kinds of fluid handling machines. This includes not just Primemovers and utility, but in dosing devices in Agro, food and pharma industries. We are currently focused on two applications namely RVCR Green I.C.Engines and RVCR wind motors.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. HISTORY SECTION (Full Width Steam Train Locomotive Background) */}
      <section id="history" className="relative py-20 md:py-28 bg-black overflow-hidden">
        {/* Steam Locomotive Train Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/008-HALLS-RAILFANS.jpeg"
            alt="History of Steam Primemovers Locomotive"
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
              History
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 font-normal">
              A prelude to the evolution process that led to modern Machines
            </p>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-center">
              <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
                Humans have used tools even before the dawn of civilization. Th ability to devise newer improved means help us better compete in the fight for survival. The Initial stone tools graduated to projectiles, and latter ability to create fire at will, helped securing life among the dangers to life from stronger and fiercer predators. Incremental advancement in tools empowered humankind with better means to dominate the less equipped ones. The dependence on ever more complicated tools and the ability to innovate became self-complementing to our life system. The tools evolved into early machines allowing efficient utilization of resources on a larger scale.
              </p>
              <p className="font-medium text-[#ffffff]" style={{ color: '#ffffff' }}>
                As the machines got sophisticated through time and so did it propel us to be the most successful species on earth.
              </p>
              <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
                The mid-19th century saw the invention of steam engines and marked the beginning of modern industrial age. Through the 20th century our society got increasingly got mechanized with newer inventions. The use of Primemovers became universal and formed the backbone of the industrial economy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. THE BACKGROUND SECTION */}
      <section id="background" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Machine Kinematics Video */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md mx-auto w-full aspect-[4/3] bg-black shadow-xl flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/A-Machine-Skeletal-Systems-1-2.m4v"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column: Background Copy */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#CC00AA] font-roboto block uppercase">
                Machine mechanism overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                The background
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  The various components and parts of a machine, called links or elements are connected with each other and form a chain (of elements). Modern machine mechanisms have complex chains and are capable of performing various functions like excavating, lifting, pumping fluids etc.
                </p>
                <p>
                  Many machines have fluids interacting with its elements. Like wind interacts with blades to wind turbine to rotate it. A celling fan has a reverse function where rotating blades create artificial wind. In a compressor fluids get trapped between machine elements and gets pushed much harder compared to a fan.
                </p>
                <p>
                  RVCR is about an entirely new set of components of novel geometry in a unique arrangement highly enhances the interaction with fluids.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 7. HOW AND WHEN SECTION */}
      <section id="howwhen" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Inventors Spark Copy */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <span className="text-xs font-semibold tracking-wider text-[#CC00AA] font-roboto block uppercase">
                Inventors spark
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                How and when
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  They say necessity is the mother of all inventions, but RVCR wasn’t so. It is an invention by thought experimenting with possibilities. Hence it is by the power of his imagination and perspective by Inventor engineer Mr. Ajee Kamath. The question that occurred to him was, ‘Why does the piston need to oscillate’, why not use two vanes to produce the required compression and expansion of gases, required in Engines and compressors etc.?
                </p>
                <p>
                  He visualized the mechanism and further through time devised solutions to various feasibility issues encountered while exploring the possibilities with his novel idea. He could never find any reason why such a mechanism would not work.
                </p>
                <p>
                  The invention is verified for ‘novelty’, ‘inventive step’ and ‘industrial’ but almost 49 nations which granted patents for the invention of RVCR.
                </p>
              </div>
            </div>

            {/* Right Column: Thought Experimenting Photo with Offset Purple Background */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative max-w-md mx-auto w-full">
                {/* Purple offset accent background */}
                <div className="absolute -top-3.5 -right-3.5 w-[85%] h-[85%] bg-[#96337b] pointer-events-none" />
                {/* Foreground elevated card */}
                <div className="relative bg-white shadow-xl border border-gray-100 p-4 sm:p-5 z-10">
                  <div className="relative w-full h-[220px] sm:h-[260px]">
                    <Image
                      src="/assets/images/Thought-experimenting-copy-e1696321537498.jpg"
                      alt="Thought Experimenting Genesis of RVCR"
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 8. SUMMARY SECTION */}
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

      {/* 9. RVCR TECH LINKS SECTION */}
      <RvcrTechLinks />

    </div>
  );
}
