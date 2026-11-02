import React from 'react';
import { PageHero } from '../components/PageHero';
import { VideoPlayer } from '../components/VideoPlayer';
import { ContactSection } from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const RvcrApplicationsPage: React.FC = () => {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      <PageHero
        title="RVCR Applications"
        subtitle="Prime movers, high-volume fluid handling, hydrogen prime movers, and renewable energy conversion"
        category="Industrial Applications"
        bgImage="/assets/images/engine4-300x200.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 01</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR Applications</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>Green fuel & Renewable energy Prime-moversMotors and drive systemsUtilities : – Compressors/ Pumps; Hydraulic, Metering and Dosing devices</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/rvcr-1.png" alt="RVCR Applications" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR Applications</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 02</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Overview</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>RVCR principle opens an entire new dimension in machine systems especially FHM (Fluid Handling Machines). They include Primemovers like engines powering land transport, maritime propulsion, power-generation; Wind and Hydro motors for renewable energy; motors, compressor, variable delivery pumps, metering devices etc.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 03</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">I.C.Engine Primemover Application</h2>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 04</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">I.C.Engine Primemover Application</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>RVCR is all about high enhancement in efficiencyIt attains VCR with easy ease with external controls and hence attaining better combustion control. The combustion of different fuels in an I.C. Engine is one of the most challenging aspects. However, RVCR provides for constant volume which makes large residence time possible for combustion. RVCR Engines shall facilitate green-fuel enforceability without being in conflict with fossil-fuel economic structures, for a greener Industry ecosystem.</p>
                <p>RVCR is all about high enhancement in efficiencyIt attains VCR with easy ease with external controls and hence attaining better combustion control. The combustion of different fuels in an I.C. Engine is one of the most challenging aspects. However, RVCR provides for constant volume which makes large residence time possible for combustion. RVCR Engines shall facilitate green-fuel enforceability without being in conflict with fossil-fuel economic structures, for a greener Industry ecosystem.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Concept-Vimal-Seq-Combustion-1-Hq-1.m4v"
                  title="Concept Vimal Seq Combustion 1 Hq 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
                <VideoPlayer
                  src="/assets/videos/Concept-Vimal-Seq-Combustion-1-Hq-1.m4v"
                  title="Concept Vimal Seq Combustion 1 Hq 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 05</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">The Application Segments</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>We understand the RVCR technology best and how to customize it into segment specific technologies. The shift in the industry is towards greener options to reduce GHG emissions in engine Exhaust. The trend is in automotive sector is consistently moving towards electrification and hybrids. In the maritime and many land based applications we see the shift if towards clean fuels like LNG, CNG, Biofuels and Hydrogen etc.</p>
                <p>RVCR shall facilitate green-fuel enforceability without being in conflict with fossil-fuel economic structures, for a greener Industry ecosystem.</p>
                <p>RVCR I.C. Engine project is covered in the dedicated page under the opportunities section.</p>
                <p>We have prioritized the customization of RVCR knowhow for developing the technology for 450 to 600 Hp applications. This specification is deduced as the MVP ‘minimum viable product’. This is with consideration to the wide range of applications it suffices.</p>
                <p>This section contains technical details for those skilled in the art.</p>
                <p>The reduction and increase in volume trapped between the piston vanes is used for compression and expansion. These are the essential thermodynamic gas processes in I.C.Engine. The other two processes are the heat addition and removal. All these processes can be explicitly achieved with RVCR kinematics. The animation depicts the Piston-vane sequence and the gas process. The gas forces are always directly transferred to the central output shaft through the sleeves.</p>
                <p>This section contains technical details for those skilled in the art.</p>
                <p>The reduction and increase in volume trapped between the piston vanes is used for compression and expansion. These are the essential thermodynamic gas processes in I.C.Engine. The other two processes are the heat addition and removal. All these processes can be explicitly achieved with RVCR kinematics. The animation depicts the Piston-vane sequence and the gas process. The gas forces are always directly transferred to the central output shaft through the sleeves.</p>
                <p>RVCR combines the efficiency gains from ‘Positive Displacement’ and the Compactness of the rotary Mechanism. This new methodology is capable of delivering many new features and functionalities. The most important of them is VCR ‘Variable Compression Ratio’. VCR feature has been pursued for almost a 100 years by almost every global major, but it has remained elusive. VCR is key to gaining quantum leap in efficiency and multi-fuel adaptability (real-time switching from fossil to green-fuels).</p>
                <p>RVCR combines the efficiency gains from ‘Positive Displacement’ and the Compactness of the rotary Mechanism. This new methodology is capable of delivering many new features and functionalities. The most important of them is VCR ‘Variable Compression Ratio’. VCR feature has been pursued for almost a 100 years by almost every global major, but it has remained elusive. VCR is key to gaining quantum leap in efficiency and multi-fuel adaptability (real-time switching from fossil to green-fuels).</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-No-Top-Csg-Fuel-Inj-Vv-Rocker-0-No-Air-Thru-Arrow-Isometric-1.m4v"
                  title="Seq Asm No Top Csg Fuel Inj Vv Rocker 0 No Air Thru Arrow Isometric 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/CAD-model-CP05-with-fuel-manifold-rotated-copy.png" alt="The Application Segments" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">The Application Segments</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 06</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Process depiction</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>This CAD model animation depicts operation of exhaust valve, its drive chain and fuel injection.The RVCR concept-based engine was conceived, and its technology knowhow is developed. The sequential motion of piston requisite for Gas Processes in I.C. Engines is achieved in a smarter, compacter way with piston-vane pair. While one piston-vane set is rotating, it’s counterpart performs the equivalent of an Cylinder head.</p>
                <p>The conventional reciprocating motion of cylindrical piston is a source of major limitations and RVCR eliminates it. The RVCR piston-vane is radially fitted on the sleeve and eliminates linear reciprocating motion. The connecting rod, top end bearing (Gudgeon pin) and bottom end bearings are not present.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-No-Top-Csg-Fuel-Inj-Vv-Rocker-With-Air-Thru-Arrow-Grey-Rotat-360-Orient-1.m4v"
                  title="Seq Asm No Top Csg Fuel Inj Vv Rocker With Air Thru Arrow Grey Rotat 360 Orient 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 07</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Salient attributes</h2>
              </div>
              <div className="mb-8 bg-[#f8fafc] p-6 rounded-2xl border border-[#e8e7ef]">
                <h4 className="text-sm uppercase tracking-wider font-bold text-[#96337b] mb-4">Key Observations & Parameters</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#334155] font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>thermodynamic prosses called Constant Volume Heat exchange (CVHE);</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Direct torque transfer through the entire expansion process.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Real time wide range Variable compression ratio (VRC).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Multi fuel flexibility (Switching of fuels during operation).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>uniform peak efficiency under all load conditions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Miniaturization by warping of gas volume around shaft; Reduced operations costs by minimizing of component wear. Etc.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 08</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">The Implications</h2>
              </div>
              <div className="mb-8 bg-[#f8fafc] p-6 rounded-2xl border border-[#e8e7ef]">
                <h4 className="text-sm uppercase tracking-wider font-bold text-[#96337b] mb-4">Key Observations & Parameters</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#334155] font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>(RVCR Mechanism Schematic Representation)</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Mugur-1.m4v"
                  title="Mugur 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/wind-motor.png" alt="The Implications" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">The Implications</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 09</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Renewable energy motors</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>Tapping of renewable wind energy leads to only one picture – The 3-blade wind turbine. Same is the case with hydro-energy where we see Kaplan and Francis turbines. There are many more vertical turbine types.</p>
                <p>Tapping of renewable wind energy leads to only one picture – The 3-blade wind turbine. Same is the case with hydro-energy where we see Kaplan and Francis turbines. There are many more vertical turbine types.</p>
                <p>We introduce a new concept of utilizing Positive displacement mechanism for making next generation High efficiency wind motors. the methodology applied is about Converting flow energy in wind/hydro (Rivers, tidal) to pressure differential for driving RVCR +ve displacement motors</p>
                <p>We introduce a new concept of utilizing Positive displacement mechanism for making next generation High efficiency wind motors. the methodology applied is about Converting flow energy in wind/hydro (Rivers, tidal) to pressure differential for driving RVCR +ve displacement motors</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 10</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Turbine vs RVCR tech overview</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The section contains technical details for those skilled in the art.The axial flow FLUID turbines are rotary machines converting Wind energy into Power. The root principal differentiator between rotary and RVCR methods is in the wind force tapping method. Conventional wind turbines are driven by lift, achieved by aerofoiled profile of turbine blades. RVCR uses pressure differential between high wind velocity zone and ground level stagnant air conditions.</p>
                <p>RVCR is the 1st in basing a FLUID motor on a rotary positive displacement mechanism. The RVCR system deploys a Convergent divergent nozzle in the flow path of air rather than a turbine. This creates low pressure at throat of the Nozzle. An air stack connects the low pressure at nozzle throat to the RVCR wind motor exhaust.</p>
                <p>The high pressure at lower altitude region is connected to the intake side. The air flow induced from the high to low pressure point passes through the wind motor by turning the piston vanes which seal any air leak past its sides. This methodology cannot be deployed in turbines for air slip between blades. Even placing reaction turbines with closely packed blades has issues with air varying differential pressures and flow . The complexities of conventional positive displacement system make it difficult.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 11</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Superior attributes</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>RVCR wind motors can be installed at ground level as it is easy to communicate the air pressure differential without losses. evaluated in terms of its implication on increment in efficiency of Power take-off, indicates towards the gain in Value. The simplified geometry of the technology component systems when compared to conventional turbines complements further gains in value</p>
                <p>RVCR enables multi-fold increase in energy capture efficiency compared to modern wind turbines. The RVCR principal simplifies the mechanics of Prime-Mover to reduce the Capital Cost drastically and the engineering involved reduces operations cost.</p>
                <p>RVCR wind motors can be installed at ground level as it is easy to communicate the air pressure differential without losses. evaluated in terms of its implication on increment in efficiency of Power take-off, indicates towards the gain in Value. The simplified geometry of the technology component systems when compared to conventional turbines complements further gains in value</p>
                <p>RVCR enables multi-fold increase in energy capture efficiency compared to modern wind turbines. The RVCR principal simplifies the mechanics of Prime-Mover to reduce the Capital Cost drastically and the engineering involved reduces operations cost.</p>
                <p>The Topic is covered on the RVCR wind project page.</p>
                <p>The Topic is covered on the RVCR wind project page.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Wind-Motor-1.m4v"
                  title="Wind Motor 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
                <VideoPlayer
                  src="/assets/videos/Wind-Motor-1.m4v"
                  title="Wind Motor 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 12</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Summary</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The entire range of applications of RVCR is an exhaustive list and covers almost every fluid handling machine based on conventional kinematic mechanisms.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 13</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR Tech Links</h2>
              </div>
            </div>
          </section>

          {/* Related Technology Modules */}
          <div className="pt-12 border-t border-[#e8e7ef]">
            <h3 className="text-xl font-bold text-[#003461] mb-6">Explore Other RVCR Technology Modules</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/what-is-rvcr" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>What is RVCR</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/rvcr-specifics" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>RVCR SPECIFICS</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/how-rvcr-works" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>How RVCR works?</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/rvcr-feasibility" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>RVCR feasibility</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/rvcr-viability" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>RVCR viability</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/rvcr-value" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>RVCR value</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/broader-impact" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>Broader Impact</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/strategic-advantages" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>Strategic Advantages</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};