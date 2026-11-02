import React from 'react';
import { PageHero } from '../components/PageHero';
import { VideoPlayer } from '../components/VideoPlayer';
import { ContactSection } from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const HowRvcrWorksPage: React.FC = () => {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      <PageHero
        title="How RVCR works?"
        subtitle="Dynamic twin-rotor sequence, shuttle valve mechanics, fluid control, and variable compression in action"
        category="Mechanics & Kinematics"
        bgImage="/assets/images/CP05_casing-e1696327096244.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 01</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">How RVCR works?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/CP05_casing-e1696327096244.png" alt="How RVCR works?" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">How RVCR works?</p>
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
                <p>The rotating piston-vanes inside the toroidal casing is is not allowed to collide with the stationary piston-vanes. As the rotating piston approaches a set distance (angle) from the stationary one, the latter one is released and allowed to rotate along with rotating piston synchronously and subsequently the approaching piston is stopped and held stationary It works in the same fashion as the shuttle valve used in the invention of steam engine by James watt. The moving piston triggers an action ahead of it before reaching its end point in travel.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 03</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Rotor sequence control</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-2-Opr-On-Shaft-Ajee-Lq-1.m4v"
                  title="Seq Asm 2 Opr On Shaft Ajee Lq 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-2-Opr-On-Shaft-Ajee-Lq-1.m4v"
                  title="Seq Asm 2 Opr On Shaft Ajee Lq 1"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Handling fluids</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The RVCR is about the volume inside a toroidal casing which is parted by the Piston Vanes. The volume trapped between the piston vanes is the fluid area. As the piston-vane rotates inside the toroidal chamber the volume between the Piston-Vanes changes. The volume ahead of the piston-vane reduces and behind it increases.</p>
                <p>The rotating piston-vane compresses air ahead of it, against the stationary Piston-vane. The increasing volume behind it rarifies the air. The fluids spaces communicate with the outside air through conventional valves and ports. Valves are operated in relation to piston-vane position by cams mounted on sleeves and its associated drive chain. The choice of ports and valve are made to suit the application.</p>
                <p>This sequential gas volume change across the rotating piston-vane during operation is used for the various thermodynamic processes. Insert cut section animation.</p>
                <p>The RVCR is about the volume inside a toroidal casing which is parted by the Piston Vanes. The volume trapped between the piston vanes is the fluid area. As the piston-vane rotates inside the toroidal chamber the volume between the Piston-Vanes changes. The volume ahead of the piston-vane reduces and behind it increases.</p>
                <p>The RVCR is about the volume inside a toroidal casing which is parted by the Piston Vanes. The volume trapped between the piston vanes is the fluid area. As the piston-vane rotates inside the toroidal chamber the volume between the Piston-Vanes changes. The volume ahead of the piston-vane reduces and behind it increases.</p>
                <p>The rotating piston-vane compresses air ahead of it, against the stationary Piston-vane. The increasing volume behind it rarifies the air. The fluids spaces communicate with the outside air through conventional valves and ports. Valves are operated in relation to piston-vane position by cams mounted on sleeves and its associated drive chain. The choice of ports and valve are made to suit the application.</p>
                <p>This sequential gas volume change across the rotating piston-vane during operation is used for the various thermodynamic processes. Insert cut section animation.</p>
                <p>The rotating piston-vane compresses air ahead of it, against the stationary Piston-vane. The increasing volume behind it rarifies the air. The fluids spaces communicate with the outside air through conventional valves and ports. Valves are operated in relation to piston-vane position by cams mounted on sleeves and its associated drive chain. The choice of ports and valve are made to suit the application.</p>
                <p>This sequential gas volume change across the rotating piston-vane during operation is used for the various thermodynamic processes. Insert cut section animation.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Compression-And-Expansion-Process-1.m4v"
                  title="Compression And Expansion Process 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
                <VideoPlayer
                  src="/assets/videos/Compression-And-Expansion-Process-1.m4v"
                  title="Compression And Expansion Process 1"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Variable compression</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-Cut-Section-Exh-Vv-Air-Thru-Put-Isometric-1.m4v"
                  title="Seq Asm Cut Section Exh Vv Air Thru Put Isometric 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-Cut-Section-Exh-Vv-Air-Thru-Put-Isometric-1.m4v"
                  title="Seq Asm Cut Section Exh Vv Air Thru Put Isometric 1"
                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."
                />
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 06</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR workings</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-Cut-Section-Air-Flow-Thru-Put-Without-Shaft-1.m4v"
                  title="Seq Asm Cut Section Air Flow Thru Put Without Shaft 1"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">CUT SECTION RVCR ANIMATION</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Seq-Asm-No-Csg-0-Only-Exh-Vv-Driv-Chain-Without-Csg-Left-Iso-Lq-1-2.m4v"
                  title="Seq Asm No Csg 0 Only Exh Vv Driv Chain Without Csg Left Iso Lq 1 2"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR MECHANISM AND VALVE OPERATION</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <VideoPlayer
                  src="/assets/videos/Gas-Process-Stroke-Rollers-Not-Moving-Iso-1.m4v"
                  title="Gas Process Stroke Rollers Not Moving Iso 1"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">GAS PROCESS WITH SLEEVE VANE STROKE</h2>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 10</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Summary</h2>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 11</span>
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