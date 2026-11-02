import React from 'react';
import { PageHero } from '../components/PageHero';
import { VideoPlayer } from '../components/VideoPlayer';
import { ContactSection } from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const RvcrSpecificsPage: React.FC = () => {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      <PageHero
        title="RVCR SPECIFICS"
        subtitle="Novel component geometries, toroidal casing, bent-piston kinematics, and mechanism comparison"
        category="Engineering Architecture"
        bgImage="/assets/images/ASSEMBLY_1.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 01</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR Specifics</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>A mechanism of Energy Conversion invloving two bent pistons (sets) ind a toroidalchamber with a sequential opertion the combines features of positive displacement and rotary mechanisms.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/2section_cut-copy-e1696326226349.png" alt="RVCR Specifics" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR Specifics</p>
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
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 03</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Machine structure basics</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>A mechanism of rotating pistons that combines positive displacement and rotary mechnaisms.</p>
                <p>When the moving parts are forced, they actuate motion in their connected links. Like in case of flow energy in wind or in water from dams that turn the turbines or electromagnetic in case of motors – they eventually lead to rotation of power generators or wheels. For nearly 100 years now only 2 types of mechanisms are mostly used in Primemovers and utility machines. The ‘Slider-Crank’ used and rotary mechanism. RVCR mechanisms simplifies conversion of energy within fluids into mechanical work (and Vice Versa) whilst enhancing efficiency and miniaturization.</p>
                <p>The genesis of RVCR is the invention by Er. Ajee Kamath, which details a new configuration of components of novel geometry, into an assembly of ‘Moving elements’ (ME) and ‘Stationary Elements’ (SE). Improving efficacy of converting fluid forces to torque, is key to RVCR mechanism.</p>
                <p>RVCR is a superior alternative to the century old conventional ‘Slider Crank’ and ‘Rotary mechanisms’. It is a new addition in mechanisms that simplifies conversion of energy within fluids into mechanical work (and Vice Versa) that enhances efficiency and miniaturization.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Conventional-Slider-Crank-1.m4v"
                  title="Conventional Slider Crank 1"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Understanding RVCR</h2>
                <h3 className="text-lg sm:text-xl text-[#003461] mt-2 font-bold">MANUFACTURED-BENT-PISTON</h3>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <h4 className="text-lg text-[#003461] mt-4 font-bold">TOROIDAL CASING ONE HALF</h4>
                <h4 className="text-lg text-[#003461] mt-4 font-bold">PISTON-VANE & SLEEVE ASSEMBLY</h4>
                <h4 className="text-lg text-[#003461] mt-4 font-bold">Mechanism Comparison on a single shaft</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/097-765x1024-copy.jpg" alt="Understanding RVCR" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">Understanding RVCR</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/BOTTAM_LINER-copy.jpg" alt="Understanding RVCR" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">Understanding RVCR</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/SLEEVE_PISTON-copy.jpg" alt="Understanding RVCR" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">Understanding RVCR</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/Mechanism-Comparison-On-One-Shaft.jpg" alt="Understanding RVCR" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">Understanding RVCR</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/Sleeve-and-vane-piston-1024x765-1.jpg" alt="Sleeve-and-vane-piston-1024x765" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">Sleeve-and-vane-piston-1024x765</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/ASSEMBLY_1.jpg" alt="ASSEMBLY_1" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">ASSEMBLY_1</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 05</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR Design</h2>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 06</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR system uniqueness</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Power-Seq-Asm-Grey-1.m4v"
                  title="Power Seq Asm Grey 1"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR animations</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>RVCR enables sequential cyclic rotary motion of piston vanes</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-1-Translation-On-Shaft-0-1-1.m4v"
                  title="Seq Asm 1 Translation On Shaft 0 1 1"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">SLEEVE VANE PAIR MOUNTING ON SHAFT</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-3-Slv-Vane-Pair-On-Shaft-Isometric-1-2.m4v"
                  title="Seq Asm 3 Slv Vane Pair On Shaft Isometric 1 2"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 09</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR SLEEVE VANE ANIMATION</h2>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 10</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR attributes</h2>
              </div>
              <div className="mb-8 bg-[#f8fafc] p-6 rounded-2xl border border-[#e8e7ef]">
                <h4 className="text-sm uppercase tracking-wider font-bold text-[#96337b] mb-4">Key Observations & Parameters</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#334155] font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Attains Compression/ Expansion thermodynamic) gas processes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Achieves controlled variation of angular displacement of rotors.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Attains analogous Variation in Compression/Expansion Ratios.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>1st to attain ‘Constant Volume gas process’ between strokes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Deploys ‘Opposed Piston’ Principle within One Enclosed Chamber</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Deploys Double acting Piston’ with equal cross sectional areas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Packages two independent chains of Rotors in one chamber</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/1St-Motoring-1.m4v"
                  title="1St Motoring 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 11</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Summary</h2>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 12</span>
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
              <Link to="/how-rvcr-works" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>How RVCR works?</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/rvcr-applications" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>RVCR Applications</span>
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