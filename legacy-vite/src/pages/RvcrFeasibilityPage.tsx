import React from 'react';
import { PageHero } from '../components/PageHero';
import { VideoPlayer } from '../components/VideoPlayer';
import { ContactSection } from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const RvcrFeasibilityPage: React.FC = () => {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      <PageHero
        title="RVCR feasibility"
        subtitle="Overcoming classic rotary sealing and inertia faults through rigorous kinematic and thermodynamic feasibility"
        category="Engineering Validation"
        bgImage="/assets/images/whatwedo-1-1.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 01</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR feasibility</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The RVCR concept systems are designed, manufactured, assembled,kinematic function tested and feasibility demonstrated.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/rvcr-1.png" alt="RVCR feasibility" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR feasibility</p>
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
                <h3 className="text-lg sm:text-xl text-[#003461] mt-2 font-bold">Individual Engineering assesments</h3>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The RVCR concept-based product realization is proven through technology and engineering feasibility assessment. This process for a deep tech innovation is involves complex and an specialized expertise. It covers entire spectrum of aspects ranging from rudimentary base geometry feasibilities to complex final product mass production feasibilities. These assessment were part of the design and development and includes multilayered and interdependent processes and listed out under various heads.</p>
                <p>RVCR has traversed the entire path from conception to demonstration to prove feasibility of RVCR for adaptation needs for varying applications.</p>
                <p>To ensure that the scrutiny is complete we got the RVCR to go through patenting offices globally. The 1st gen RVCR concept secured granted patents in about 49 countries worldwide.</p>
                <p>The next step in the validation were covered in Kinematic synthesis and further D&D process. The various relationships and system requirement were perfected the system was virtually modeled and animated. The functional aspect was further deliberated mathematically, and these were latter verified with physical models after realization of the Physical model.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Adams-Skeletal-hybrid-animation-1.m4v"
                  title="Adams Skeletal Hybrid Animation 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 03</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Kinematic feasibilities</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>Like any other concept, the 1st level of validation of the RVCR concept was to crosscheck it’s constituents for conformity within the confines of the laws of physics. Next was the verification of its novelty and originality.</p>
                <p>This was confirmed through national and international patenting process.</p>
                <p>To ensure that the scrutiny is complete we got the RVCR to go through patenting offices globally. The 1st gen RVCR concept secured granted patents in about 49 countries worldwide.</p>
                <p>The next step in the validation were covered in Kinematic synthesis and further D&D process. The various relationships and system requirement were perfected the system was virtually modeled and animated. The functional aspect was further deliberated mathematically, and these were latter verified with physical models after realization of the Physical model.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Adams-Skeletal-hybrid-animation-1.m4v"
                  title="Adams Skeletal Hybrid Animation 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 04</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Thermodynamic feasibilities</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The modelling and animation processes lay the basis for the modulating the components motion and its relationship with the gas Volumes trapped within. This began with outlining of sequence of compressions, expansion, and gas exchange processes. The duration control of these processes was verified for range for possibilities.</p>
                <p>All conventional systems like valve, ports and timing control and accessory systems for head addition and removal processes are easily integrated with RVCR.</p>
                <p>Sealing systems for gas process integrity has remained major challenge for rotary systems like Wankel and MYT systems. This is essential for RVCR concept-based Fluid Handling machines including, Engines, Wind/Hydro motors, variable delivery Pumps and compressors etc. RVCR overcomes the main flaws of predecessor vane systems.</p>
                <p>The modelling and animation processes lay the basis for the modulating the components motion and its relationship with the gas Volumes trapped within. This began with outlining of sequence of compressions, expansion, and gas exchange processes. The duration control of these processes was verified for range for possibilities.</p>
                <p>All conventional systems like valve, ports and timing control and accessory systems for head addition and removal processes are easily integrated with RVCR.</p>
                <p>Sealing systems for gas process integrity has remained major challenge for rotary systems like Wankel and MYT systems. This is essential for RVCR concept-based Fluid Handling machines including, Engines, Wind/Hydro motors, variable delivery Pumps and compressors etc. RVCR overcomes the main flaws of predecessor vane systems.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/CFD-simulation.m4v"
                  title="Cfd Simulation"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Physical Engineering feasibilities</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>Like any other concept, the physics should be engineered into physical proto. We refined the feasibility of components for manufacturing by varying methods and processes. These include casting, forging, machining etc. and metallurgical processes.</p>
                <p>All prototype parts since the 1st design and the latter iterations were manufactured. The capability to produce prototype components in a production relevant environment and the industrial base has been assessed and potential manufacturing sources are identified.</p>
                <p>the various manufacturing strategy options have been refinedexplored, and materials, tooling, critical systems, test equipment, as well as personnel skills is demonstrated on components in production relevant environment. Producibility assessments of key technologies pose no feasibility challenges and cost model for projected manufacturing cost is constructed.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 06</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Assembly feasibilities</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The assembly of components of unique novel geometries were part of the initial thought process of configuring bent vanes in a toroid chamber. This core subassemblies along with all its critical systems and their mounting methodologies are established. The special tools, jigs, mandrels for individual systems handling, assembling, and mounting are tested and tried.</p>
                <p>Accessory systems required for developing applications based on RVCR are assessed. High level systems integration strategies are formulated. standard off-the-shelf systems of conventional products (Prime-mover engines, compressors, and pumps etc.) do not pose adaptability challenges.</p>
                <p>The standard systems (Fluid exchange, fuel injection, ignition, cooling, turbocharger, tribological, Exhaust) compatibility of system with RVCR and re-engineering systems to suit RVCR have been worked.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 07</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Functional feasibilities</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>Each of RVCR’s constituent system functionalities cumulates to the success of RVCR the RVCR assemblies. Through the concept, design, and development stage, to the physical realization and testing of each individual system it is explored probable failure modes.</p>
                <p>The systems are classed based on their criticalities and newer solutions are innovated to solve critical functional needs.</p>
                <p>The Individual systems have various levels of interdependence other systems they are assembled with. These are essential for bringing together all essential processes. The system are optimized for best workings and efficiency.</p>
                <p>Each of RVCR’s constituent system functionalities cumulates to the success of RVCR the RVCR assemblies. Through the concept, design, and development stage, to the physical realization and testing of each individual system it is explored probable failure modes. The systems are classed based on their criticalities and newer solutions are innovated to solve critical functional needs.</p>
                <p>The Individual systems have various levels of interdependence other systems they are assembled with. These are essential for bringing together all essential processes. The system are optimized for best workings and efficiency. These Systems include, Sealing, Rapidly alternating positive clutching, torsional vibration handling, gas exchange process accessories.</p>
                <p>These Systems include, Sealing, Rapidly alternating positive clutching, torsional vibration handling, gas exchange process accessories.</p>
                <p>The nuances of RVCR systems and its fine tuning for deriving customized products in various engineering applications is compiled. This knowhow is the key to enabling the feasibilities of the various down stream applications of RVCR technology.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/2-Motoring-2.m4v"
                  title="2 Motoring 2"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
                <VideoPlayer
                  src="/assets/videos/2-Motoring-2.m4v"
                  title="2 Motoring 2"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 08</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR proto system, assembly and testing</h2>
                <h3 className="text-lg sm:text-xl text-[#003461] mt-2 font-bold">Proto Model CP02</h3>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <h4 className="text-lg text-[#003461] mt-4 font-bold">Proto Test Ring</h4>
                <h4 className="text-lg text-[#003461] mt-4 font-bold">CAD Model CP02</h4>
                <h4 className="text-lg text-[#003461] mt-4 font-bold">TITLE 1</h4>
                <h4 className="text-lg text-[#003461] mt-4 font-bold">TITLE 2</h4>
                <h4 className="text-lg text-[#003461] mt-4 font-bold">TITLE 3</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/Phy-proto-Assm-Gulf-news-pic-300x225-1.jpg" alt="RVCR proto system, assembly and testing" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR proto system, assembly and testing</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/Phy-Proto-CP05-casing-on-test-rig-300x224-1.jpg" alt="RVCR proto system, assembly and testing" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR proto system, assembly and testing</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/New-Project-7-e1693317558479.jpg" alt="RVCR proto system, assembly and testing" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR proto system, assembly and testing</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/RVCR-02.jpg" alt="RVCR proto system, assembly and testing" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR proto system, assembly and testing</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/RVCR-01.jpg" alt="RVCR proto system, assembly and testing" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR proto system, assembly and testing</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/RVCR-03.jpg" alt="RVCR proto system, assembly and testing" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR proto system, assembly and testing</p>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Summary</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The newer functionalities of RVCR products to effectively deal with 21st century market drivers is thoroughly assessed and proven very much feasible.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 10</span>
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
              <Link to="/rvcr-applications" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>RVCR Applications</span>
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