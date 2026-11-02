import React from 'react';
import { PageHero } from '../components/PageHero';
import { VideoPlayer } from '../components/VideoPlayer';
import { ContactSection } from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const RvcrViabilityPage: React.FC = () => {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      <PageHero
        title="RVCR viability"
        subtitle="Techno-commercial viability, dual-level business cases, capital cost analysis, and product realization"
        category="Commercial Strategy"
        bgImage="/assets/images/RVCR_hydro_motor.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 01</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR viability</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>New technology adoption involves multi layered decision making in technological, Industrial, financial, legal, and market processes. We help you with viability assessment and capability analysis of ‘RVCR technology product’ business case.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/rvcr-1.png" alt="RVCR viability" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">RVCR viability</p>
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
                <h3 className="text-lg sm:text-xl text-[#003461] mt-2 font-bold">Techno-commercial assessment</h3>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>RVCR deep tech innovation viability assessment is as complex and a specialized competency. It’s about ‘Cost benefit analysis’ of the RVCR technology D&D and the various product cost through its life cycle. The detailed fine print of busines case viability for individual products, includes benchmarking cost components and features with existing products.Viability reports of RVCR product realization is carried out on demand. We facilitate this through our innovation and D&D services business.</p>
                <p>RVCR viability covers the entire tech life cycle beginning with for product concept, its development and to the market.</p>
                <p>Since then we have built our capability over the years we gained from mentoring programs for global commercialization by I.C.2 Institute of UT at Austin; GSB-Stanford. This was facilitated for RVCR being winner in international competitions. (by Lockheed martin, Clean Tech International etc.)</p>
                <p>We firmed up our ‘RVCR green fuel Engines technology’ business case with European Commission funded project.(SME Inst Ph1 Horizon 2020). We have developed the competency in formulating viable business case for RVCR application specific product technologies.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 03</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Prelude</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>Our experience in the RVCR technology business viability analysis process has roots in the successful executing IP licensing agreement and innovation services contract by Auto Major Tata Motors.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 04</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Prelude</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>Our experience in the RVCR technology business viability analysis process has roots in the successful executing IP licensing agreement and innovation services contract by Auto Major Tata Motors.</p>
                <p>Since then we have built our capability over the years we gained from mentoring programs for global commercialization by I.C.2 Institute of UT at Austin; GSB-Stanford. This was facilitated for RVCR being winner in international competitions. (by Lockheed martin, Clean Tech International etc.)</p>
                <p>We firmed up our ‘RVCR green fuel Engines technology’ business case with European Commission funded project.(SME Inst Ph1 Horizon 2020). We have developed the competency in formulating viable business case for RVCR application specific product technologies.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/Lower-Costs-more-value-for-money.jpg" alt="Prelude" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">Prelude</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/Lower-Costs-more-value-for-money.jpg" alt="Prelude" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">Prelude</p>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Background</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>When the moving parts are forced, they actuate motion in their connected links. Like in case of flow energy in wind or in water from dams that turn the turbines or electromagnetic in case of motors – they eventually lead to rotation of power generators or wheels. For nearly 100 years now only 2 types of mechanisms are mostly used in Primemovers and utility machines. The ‘Slider-Crank’ used and rotary mechanism. RVCR mechanisms simplifies conversion of energy within fluids into mechanical work (and Vice Versa) whilst enhancing efficiency and miniaturization.</p>
                <p>The product process involves developing of machine hardware with industrial processes and the engineering of integrating customized high-end engineering systems. This extreme multi-disciplinary engineering competency is a super-specialization, and the process is highly cost and time intensive.</p>
                <p>We have developed a phased top-down assessment process for RVCR technology business case for specific market segment application. This begins with larger economic overview and funnels down to fine print for specific products. We walk your through the entire process for your specific need.</p>
                <p>The product process involves developing of machine hardware with industrial processes and the engineering of integrating customized high-end engineering systems. This extreme multi-disciplinary engineering competency is a super-specialization, and the process is highly cost and time intensive.</p>
                <p>We have developed a phased top-down assessment process for RVCR technology business case for specific market segment application. This begins with larger economic overview and funnels down to fine print for specific products. We walk your through the entire process for your specific need.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/Innov.jpg" alt="Background" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">Background</p>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">How we do it</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>We find most business professionals seek product performance data, however we clarify that we RVCR is not about a finished product. RVCR is a solution for developing core competency in superior technology for future product line derived from a newer working principle.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 07</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">THE BUSINESS CASE IS PRESENT AT 2 MAIN LEVELS</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The commercial R&D business case. This component covers individual ‘technology and innovation services’ contract, for ‘RVCR pilot product’ project in a particular industry vertical. The structure for project execution (inhouse JV; standalone contract; outsourced contracts etc.) and downstream support of skill, training and tool expertise need for the new technology is accounted here.</p>
                <p>The RVCR product in the specific market space.This accounts for the entire mix of parameters of the specific product. The valuation would include the impact on conventional product market landscape; its existing competition; alternative solutions and innovation, mass producibility, geo-political stability, long term statutory and regulatory environment, its natural progression and growth, commercial exclusivity (background / background IP), global market domination and technology leadership potential, pre-emptive product launch capability etc.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 08</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">THE BUSINESS CASE IS PRESENT AT 2 MAIN LEVELS</h2>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 09</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">01</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The 1st level of viability is arrived at by the ‘degree of overall ease’ enabled by key technology features. (those listed out in attributes). Comparing these with conventional feature capabilities of existing technologies and latest innovations.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 10</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">02</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The root cause of the comparative advantage from individual characteristics influence and its cumulative effect is charted. (This is an engineering level comparison for processes like thermodynamic processes and efficiencies; force and thermal balance; mechanical leverage etc.) .</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 11</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">03</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The next level is to evaluate the cost benefit analysis of breaking of an existing proven business and process cycle. The components include Pilot product D&D project cost; product mass manufacture and life cycle and business operations cost.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 12</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">04</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>This is about valuating the change. The bigger the change, more cost and time intensive it gets. The RVCR products are completely new beings and we strongly prefer it in a new business vertical to segregate it from risk and liabilities from integrating it with existing business.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 13</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">01</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The 1st level of viability is arrived at by the ‘degree of overall ease’ enabled by key technology features. (those listed out in attributes). Comparing these with conventional feature capabilities of existing technologies and latest innovations.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 14</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">02</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The root cause of the comparative advantage from individual characteristics influence and its cumulative effect is charted. (This is an engineering level comparison for processes like thermodynamic processes and efficiencies; force and thermal balance; mechanical leverage etc.) .</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 15</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">03</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The next level is to evaluate the cost benefit analysis of breaking of an existing proven business and process cycle. The components include Pilot product D&D project cost; product mass manufacture and life cycle and business operations cost.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 16</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">04</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>This is about valuating the change. The bigger the change, more cost and time intensive it gets. The RVCR products are completely new beings and we strongly prefer it in a new business vertical to segregate it from risk and liabilities from integrating it with existing business.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 17</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">The broader picture</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The business mix of commercial exclusivity IP right, and tech knowhow and D&D business and segment specific RVCR product application.</p>
                <p>Considering the degree of change and difficulty of implementation RVCR stands as a Deep/ tough tech based gamechanger innovation.It converges a new concept in physics, engineering design and innovation, and Pilot product project execution capability.</p>
                <p>The techno-prudence to assess a new concept invention’s potential comes from in-depth knowledge of the product domain in : –</p>
                <p>Over the years of dealing with RVCR innovation and its commercialization we have deep insight of its engineering flow-process, industry dynamics and the business ecosystem.</p>
              </div>
              <div className="mb-8 bg-[#f8fafc] p-6 rounded-2xl border border-[#e8e7ef]">
                <h4 className="text-sm uppercase tracking-wider font-bold text-[#96337b] mb-4">Key Observations & Parameters</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#334155] font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>the constituting thermodynamics gas processes, Kinematics and its influence on the various process performance parameters.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>the product’s design, development and engineering, manufacturing, systems requirements supply and value chain, regulatory environment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#96337b] shrink-0 mt-0.5" />
                    <span>the product business life cycle, industry stakeholders and future market landscape.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 18</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">RVCR System viability</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>RVCR stands out as a viable technology devoid of constructional complexities of Slider-crank Mechanism and turbines.</p>
                <p>The Slider-crank mechanism require complex set of borings and machining of casing, A-frame, ensure entablature alignment, its close tolerances, collinearity, straightness, concentricity, main bearing inline boring, the drive accessories and drive chain needs. Additionally, the crank overhang, web & balancer construction and complexity of CAM-shafts, its support, placement, and drives are completely eliminated in RVCR). 90% of RVCR manufacture uses single point cutting tools including the toroidal curved surfaces.The rotary mechanism in turbojet system require high speed for large through put for thrust, pose extreme design and dynamic balancing challenges.</p>
                <p>RVCR is a realistic, higher efficiency and lower cost solution to deal with 21st century market drivers.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 19</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">The market and industry scenario</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The global regulatory scenarios projections till 2035 to 2050 on emissions shall drive the RVCR demand for its capability to reorient green technology strategies globally.The ease or difficulty of innovation and new technology adoption by Industry players is an important aspect of the viability of the venture.</p>
                <p>We undertake a initial engagement with a business to assess various parameters: The include their preparedness, plans, strategies for newer regulations; current Technologies; technology evaluations capability; familiarity and acceptance level of internal change. Their leadership, key influencers & strategic decision-making platforms, current investment and long-term plans, Customer-profiles, their emerging competitors, and threats etc.</p>
                <p>This helps us to devise optimal strategic partial dilution of the RVCR IPR and offer a mix of commercial exclusivity and technology services support. A vital part of the offer is the business structure for the project. (We prefer a Special Purpose Entity, funded through Project finance model). Client specific offering is devised based on various criterion of client’s business (and porters 5 forces analysis – pre and post RVCR adoption).</p>
                <p>This helps us to devise optimal strategic partial dilution of the RVCR IPR and offer a mix of commercial exclusivity and technology services support. A vital part of the offer is the business structure for the project. (We prefer a Special Purpose Entity, funded through Project finance model). Client specific offering is devised based on various criterion of client’s business (and porters 5 forces analysis – pre and post RVCR adoption).</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/shutterstock_654670969-scaled-1.jpg" alt="The market and industry scenario" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">The market and industry scenario</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 20</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">PRODUCT RELIZATION</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>The existing Industrial Technological base; Engineering competencies; Technical management skills and product customer support, training, and Distribution structures, suffice for and can be easily channeled for RVCR. RVCR Product Assembling, Testing, Calibrations and Validation integration process into OEM’s products is similar and in-line with existing industrial practices.</p>
                <p>The integration and Suiting of RVCR Primemovers into End Products do not see any issues as RVCR Primemovers are smaller and easy to configure into all kinds of volume envelope.</p>
                <p>With regard to accessory systems required for RVCR, standard off-the-shelf systems (fuel, ignition, cooling, turbocharger, tribological, Exhaust) are compatible with RVCR and do not pose adaptability challenges.</p>
                <p>RVCR does-not require any End User behavior change or new learning.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 21</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Cost benefit analysis</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>Detailed cost benefit comparison of each individual application and specific product is carried out for each business case.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <div className="rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all">
                  <img src="/assets/images/PRODUCT-RELIZATION-768x1024.jpg" alt="Cost benefit analysis" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs text-[#334155] font-roboto truncate">Cost benefit analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 22</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Cost benefit analysis</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>Detailed cost benefit comparison of each individual application and specific product is carried out for each business case.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 23</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] mt-1 tracking-tight">Summary</h2>
              </div>
              <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
                <p>RVCR viability is well researched and we have evolved an elaborate process to mitigate all its risks. Engage us for joint assessment of RVCR product projects and ensure long term sustained profitability with RVCR. The commercial viability of a segment specific RVCR product application is part of our innovation services business.</p>
              </div>
            </div>
          </section>

          {/* Section Block */}
          <section className="bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 border-b border-[#e8e7ef] pb-4">
                <span className="text-xs font-roboto uppercase tracking-widest text-[#96337b] font-semibold">Section 24</span>
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
              <Link to="/rvcr-feasibility" className="p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#1379FF] text-sm text-[#334155] hover:text-white flex items-center justify-between transition-colors">
                <span>RVCR feasibility</span>
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