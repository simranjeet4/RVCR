import React from 'react';
import { PageHero } from '../components/PageHero';
import { ContactSection } from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Award, Shield, Target, Users, MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/navigation';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      <PageHero
        title="About Us / RVCR - Tech R & D"
        subtitle="Pioneering seed technologies and next-generation zero-carbon mechanical architectures."
        category="Corporate & Research"
        bgImage="/assets/images/robotic-vs-human-hand-system-depiction.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">

          {/* Section 1: The Strategy */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">
                  Corporate Focus 01
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">
                  The Strategy
                </h2>
                <h3 className="text-lg text-[#003461] font-bold mt-1">
                  Long-term intellectual property genesis and technology commercialization
                </h3>
              </div>

              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl">
                <p>
                  At GYATK RVCR Apparatus, our strategy centers on fundamental breakthroughs in thermodynamics and kinematics. Rather than incremental improvements to 150-year-old slider-crank designs, we invent, patent, and validate brand new kinematic topologies that solve mechanical conversion inefficiencies at their source.
                </p>
                <p>
                  We collaborate with automotive OEMs, industrial compressor manufacturers, and renewable energy providers through technology licensing, joint R&amp;D development agreements, and targeted prototype demonstrations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm hover:border-[#003461]/30 transition-all">
                  <Target className="w-6 h-6 text-[#96337b] mb-3" />
                  <h4 className="text-base font-bold text-[#003461] mb-1">Targeted IP Portfolio</h4>
                  <p className="text-xs text-[#334155] text-xs leading-relaxed">
                    Over two decades of patents protecting the toroidal casing, bent-piston geometries, and twin-rotor sequence.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm hover:border-[#003461]/30 transition-all">
                  <Shield className="w-6 h-6 text-[#003461] mb-3" />
                  <h4 className="text-base font-bold text-[#003461] mb-1">Defensible Barriers</h4>
                  <p className="text-xs text-[#334155] text-xs leading-relaxed">
                    Substantial technological and geometric patent protections preventing simple workarounds by competitors.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm hover:border-[#003461]/30 transition-all">
                  <Award className="w-6 h-6 text-[#cc2b5e] mb-3" />
                  <h4 className="text-base font-bold text-[#003461] mb-1">TRL Advancement</h4>
                  <p className="text-xs text-[#334155] text-xs leading-relaxed">
                    Progressing through comprehensive FEA, multi-body kinematics, CFD, and physical test bench realization.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: The Background & Initial Stage (Static, Focused Content) */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">
                  Corporate Focus 02
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">
                  The Background &amp; Initial Stage
                </h2>
                <h3 className="text-lg text-[#003461] font-bold mt-1">
                  From mathematical thought experiments to verified physical hardware
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                <div className="lg:col-span-7 space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base">
                  <p>
                    The genesis of the RVCR apparatus began with fundamental questions regarding why conventional reciprocating engines lose significant thermodynamic efficacy to side-wall friction, high angular velocities, and fixed compression ratios.
                  </p>
                  <p>
                    Early development stages were undertaken in the UK and India, building rigorous 3D mathematical kinematic models to prove that a twin-rotor system sharing a single toroidal space could alternate roles without dedicated stator links, solving classic Wankel sealing issues while delivering continuous tangential torque.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                    <img 
                      src="/assets/images/rd1.jpg" 
                      alt="Early Stage R&D Modeling" 
                      className="w-full h-56 object-cover rounded-xl"
                    />
                    <div className="p-3">
                      <p className="text-xs text-slate-400 font-mono">Archive: Initial Kinematic &amp; Stress Analysis Workstations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/70 p-6 rounded-2xl border border-[#e8e7ef]">
                <h4 className="text-sm uppercase tracking-wider font-bold text-[#96337b] mb-4">Milestone Evolution</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#334155] font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Mathematical proof of alternating rotor-stator sequential kinematics</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Labyrinth and tangential spring-loaded seal geometry design</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Multi-body dynamic simulations (ADAMS) verifying bearing and inertial loads</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>Global patent grants across key manufacturing jurisdictions</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Technology Structure & IP Governance */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">
                  Corporate Focus 03
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">
                  Technology Structure &amp; Corporate Identity
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4 text-[#334155] text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-[#003461] font-semibold">GYATK RVCR Apparatus Pvt Ltd, India</strong> serves as the central technological research entity for the RVCR system architecture, coordinating cross-border patent prosecution, engineering validations, and licensing agreements.
                  </p>
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] text-xs font-roboto space-y-1">
                    <p className="text-slate-400">Corporate Identity Number (CIN): <span className="text-[#003461] font-semibold">{CONTACT_INFO.cin}</span></p>
                    <p className="text-slate-400">Incorporation: <span className="text-[#334155] font-medium">Registered under the Companies Act, India</span></p>
                    <p className="text-slate-400">Registered Office: <span className="text-[#334155] font-medium">Kochi, Kerala, India</span></p>
                  </div>
                </div>

                <div className="space-y-4 text-[#334155] text-sm sm:text-base leading-relaxed">
                  <p>
                    Our multidisciplinary team spans mechanical design, computational fluid dynamics (CFD), finite element modeling, patent law, and strategic manufacturing partnerships.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm hover:border-[#003461]/30 transition-all">
                      <Users className="w-5 h-5 text-[#96337b] mb-2" />
                      <h5 className="text-sm font-bold text-[#003461]">Engineering Leadership</h5>
                      <p className="text-xs text-[#334155] text-xs mt-1">Decades of cumulative R&amp;D experience in prime mover kinematics.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm hover:border-[#003461]/30 transition-all">
                      <MapPin className="w-5 h-5 text-[#003461] mb-2" />
                      <h5 className="text-sm font-bold text-[#003461]">Global Presence</h5>
                      <p className="text-xs text-[#334155] text-xs mt-1">Connecting testing labs and design facilities in the UK and India.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Technology Modules */}
          <div className="pt-12 border-t border-[#e8e7ef]">
            <h3 className="text-xl font-bold text-[#003461] mb-6">Explore RVCR Technology Modules</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/what-is-rvcr" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>What is RVCR</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/rvcr-specifics" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>RVCR Specifics</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </Link>
              <Link to="/how-rvcr-works" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>How RVCR Works</span>
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
