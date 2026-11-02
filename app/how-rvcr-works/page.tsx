import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { constructPageMetadata } from '@/lib/metadata';
import { Container } from '@/components/ui/Container';
import { RvcrTechLinks } from '@/components/sections/RvcrTechLinks';

export const metadata: Metadata = constructPageMetadata({
  title: 'How RVCR Works | Mechanics, Sequence Control & Gas Dynamics',
  description:
    'Explore the dynamic twin-rotor sequence, shuttle valve trigger principle, fluid control, and real-time variable compression ratio kinematics of RVCR.',
  path: '/how-rvcr-works',
});

const WORKINGS_VIDEOS = [
  {
    video: '/assets/videos/Seq-Asm-Cut-Section-Air-Flow-Thru-Put-Without-Shaft-1.m4v',
    title: 'CUT SECTION RVCR ANIMATION',
    description: 'The animation depicts cut section through the transverse plane and the one of the various possible air through put.',
  },
  {
    video: '/assets/videos/Seq-Asm-No-Csg-0-Only-Exh-Vv-Driv-Chain-Without-Csg-Left-Iso-Lq-1-2.m4v',
    title: 'RVCR MECHANISM AND VALVE OPERATION',
    description: 'The animation depicts animation of exhaust valve, cam and drive train for exhausting gases after expansion of gases.',
  },
  {
    video: '/assets/videos/Gas-Process-Stroke-Rollers-Not-Moving-Iso-1.m4v',
    title: 'GAS PROCESS WITH SLEEVE VANE STROKE',
    description: 'The animation shows laymens depiction of one Vane rotation and the compression and expansion within transparent chamber.',
  },
];

export default function HowRvcrWorksPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[400px] sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/images/how-rvcr-works-hero.jpg"
            alt="How RVCR Works - Digital Twin Jet Engine Mechanics"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Subtle overlay so the blue wireframe jet engine is vividly visible while text is clear */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />

        <Container className="relative z-10 text-center py-16 sm:py-20">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4 drop-shadow-md">
            How RVCR works?
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-white font-normal max-w-3xl mx-auto leading-relaxed space-y-1 drop-shadow-sm">
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              Dynamic reorienting of a twin Rotors acting as a Joint rotor system,
            </p>
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              where-
            </p>
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              one rotor decouples from joint rotor system to be a stator temporarily,
            </p>
            <p className="text-[#ffffff]" style={{ color: '#ffffff' }}>
              while the other acts as rotor.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section id="overview" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: CP05 Casing Image on Elevated Card with Offset Purple Background */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md mx-auto w-full">
                {/* Purple offset accent background */}
                <div className="absolute -top-3.5 -left-3.5 w-[85%] h-[85%] bg-[#96337b] pointer-events-none" />
                {/* Foreground elevated card */}
                <div className="relative bg-white shadow-xl border border-gray-100 p-4 sm:p-6 z-10">
                  <div className="relative w-full h-[220px] sm:h-[260px]">
                    <Image
                      src="/assets/images/CP05_casing-e1696327096244.png"
                      alt="RVCR CP05 Toroidal Housing with Precision Ports"
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
                  The rotating piston-vanes inside the toroidal casing is is not allowed to collide with the stationary piston-vanes. As the rotating piston approaches a set distance (angle) from the stationary one, the latter one is released and allowed to rotate along with rotating piston synchronously and subsequently the approaching piston is stopped and held stationary It works in the same fashion as the shuttle valve used in the invention of steam engine by James watt. The moving piston triggers an action ahead of it before reaching its end point in travel.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. ROTOR SEQUENCE CONTROL SECTION */}
      <section id="rotor" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Rotor Sequence Copy */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                Rotor sequence control
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-black leading-relaxed">
                A free to rotate central shaft with flexibility to be coupled of decoupled with sleeves fitted with piston-vanes.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  RVCR component sequence begins with twisting of the sleeve mounted which leads to the rotation of the piston inside the torous. At this point the second ‘piston-vane and sleeve’ assembly is held stationary. While rotating the sleeve is engaged with the central shaft. The rotating piston vane (within the toroid) would ultimately collide with the stationary Piston vane. The RVCR technique is to avoid the collision by ensuring the stationary piston-vane starts to rotate syncronously with the rotating piston. This hapens when the rotating pistion vane reaches a predetermined position at the proximity of the stationary one.
                </p>
                <p>
                  The position of the rotating piston-vane within the toroid, is determined externally. This is done by referencing a point on the sleeve on which the piston-vane is rigidly fitted to. This is done by a cam filled on the sleeve.
                </p>
                <p>
                  As the rotating piston-vane reaches the proximity of stationary ‘piston-vane, at a certain predetermined point, the profile of the cam on the sleeve actuates a follower.
                </p>
                <p>
                  This actuation is then used to release the stationary ‘VS’ (from being rigidly held to ground) and couples it with the central shaft. As it Couples with central shaft, both ‘VS’ synchronously rotate.
                </p>
                <p>
                  Subsequently when the previously rotating piston-vane reaches the point where its counterpart was held stationary. Now this position is referenced by cam and follower of its counterpart, which decouples it from shaft (and makes it stationary by holding it to ground). The pattern is repeated wherein each ‘VS’ rotates alternately with its counterpart being stationery and role reversal happens after a short period of both VS rotating synchronously.
                </p>
              </div>
            </div>

            {/* Right Column: Rotor Sequence Video */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md mx-auto w-full aspect-[4/3] bg-black shadow-xl flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/Seq-Asm-2-Opr-On-Shaft-Ajee-Lq-1.m4v"
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

      {/* 4. HANDLING FLUIDS SECTION */}
      <section id="handling" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Compression and Expansion Video */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative max-w-md mx-auto w-full aspect-[4/3] bg-black shadow-xl flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/Compression-And-Expansion-Process-1.m4v"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Column: Handling Fluids Copy */}
            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                Handling fluids
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-black leading-relaxed">
                The space within the hollow toroid -parted and trapped between piston vanes varies as the piston-vanes rotate.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  The RVCR is about the volume inside a toroidal casing which is parted by the Piston Vanes. The volume trapped between the piston vanes is the fluid area. As the piston-vane rotates inside the toroidal chamber the volume between the Piston-Vanes changes. The volume ahead of the piston-vane reduces and behind it increases.
                </p>
                <p>
                  The rotating piston-vane compresses air ahead of it, against the stationary Piston-vane. The increasing volume behind it rarifies the air. The fluids spaces communicate with the outside air through conventional valves and ports. Valves are operated in relation to piston-vane position by cams mounted on sleeves and its associated drive chain. The choice of ports and valve are made to suit the application.
                </p>
                <p>
                  This sequential gas volume change across the rotating piston-vane during operation is used for the various thermodynamic processes.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 5. VARIABLE COMPRESSION SECTION */}
      <section id="variable" className="py-16 md:py-24 bg-white border-b border-[#e8e7ef]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Variable Compression Copy */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                Variable compression
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-black leading-relaxed">
                The space within the hollow toroid -parted and trapped between piston vanes varies as the piston-vanes rotate.
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-[#414141] leading-relaxed">
                <p>
                  During operation (RVCR sequence control), the position of rotating piston-vane within the toroid determines the action of its paring piston-vane. The positional point where the rotating piston-vane actuates the stationary one, can be varied. The closer the Point gets to the stationary piston-vane the lesser the volume ahead of it.
                </p>
                <p>
                  In thermodynamics this lowering of volume converts to higher pressure. The varying of the point of actuation varies the volume reduction ahead of piston-Vane. This translates to varying of compression ratio and hence the pressure ratios.
                </p>
                <p>
                  RVCR allows real-time varying of the said point of actuation of synchronous rotation of piston-vane with ease. This is done by manipulating follower position along varying cam dwell angle.
                </p>
                <p>
                  The volume sandwiched between the two piston vanes remains constant during synchronous rotation. In thermodynamic terms this translates to ‘Constant Volume Process’.
                </p>
              </div>
            </div>

            {/* Right Column: Variable Compression Video */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md mx-auto w-full aspect-[4/3] bg-black shadow-xl flex items-center justify-center overflow-hidden">
                <video
                  src="/assets/videos/Seq-Asm-Cut-Section-Exh-Vv-Air-Thru-Put-Isometric-1.m4v"
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

      {/* 6. RVCR WORKINGS SECTION (Full Width Black Section) */}
      <section id="working" className="py-20 md:py-28 bg-black text-white text-center">
        <Container>
          <div className="max-w-4xl mx-auto space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              RVCR workings
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              The space within the hollow toroid -parted and trapped between piston vanes varies as the piston-vanes rotate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {WORKINGS_VIDEOS.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="relative w-full aspect-[4/3] bg-black border border-neutral-800 shadow-xl overflow-hidden flex items-center justify-center">
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. SUMMARY SECTION */}
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
              RVCR is about sequential motion of alternately rotating piston-vanes with a period of both rotating synchronously before role reversal. This is attained by referencing the position of piston-vanes externally. The point of initiation and end of said synchronous rotation defines the compression ratio.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. RVCR TECH LINKS SECTION */}
      <RvcrTechLinks />

    </div>
  );
}
