import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle, ArrowRight, Zap, Sparkles, Globe } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-white text-[#334155] font-sans">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-black bg-cover bg-center overflow-hidden pt-36 pb-28 md:pt-48 md:pb-44"
        style={{ backgroundImage: `url('/assets/images/hero-zero-carbon.jpg')` }}
      >
        {/* Light black overlay for optimal text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl text-left py-20 md:py-32">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#96337b] block mb-2 font-roboto">
              Enter The
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight uppercase mb-4 leading-none">
              RVCR realm
            </h1>
            <p className="text-base sm:text-xl text-slate-200 mb-8 font-light leading-relaxed">
              The future physics of energy conversion
            </p>
            <a
              href="#Contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-medium text-white btn-gyatk-gradient shadow-lg uppercase tracking-wider"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS RVCR SECTION */}
      <section id="WisR" className="py-20 md:py-28 bg-white border-b border-[#e8e7ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & Heart Box */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
                What is RVCR
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003461] tracking-tight leading-tight">
                A breakthrough in machine heart tech
              </h2>
              
              <div className="space-y-4 text-[#334155] text-sm sm:text-base leading-relaxed">
                <p>
                  For 150 years machines catered to our transport and power needs, but little do many know of Primemovers – the heart of machines.
                </p>
                <p>
                  Like our heart has various muscles and valves, primemovers have links. RVCR is a new science of primemovers
                </p>
              </div>

              {/* Heart Box matching original */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#eef7ff] border border-[#e0f2fe] flex items-center gap-4 max-w-lg shadow-sm">
                <div className="p-3 bg-[#96337b] rounded-lg text-white shrink-0 shadow">
                  <img 
                    src="/assets/images/heart.png" 
                    alt="Heart Icon" 
                    className="w-7 h-7 object-contain brightness-0 invert" 
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#003461] leading-snug">
                  To pump blood through our body for powering it
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/what-is-rvcr"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-md"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Engine Line Drawing */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src="/assets/images/heart_engine.jpg" 
                alt="Machine Heart Tech Engine" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. RVCR SPECIFICS SECTION (SOLID BLACK BACKGROUND) */}
      <section id="RVCRS" className="py-20 md:py-28 bg-[#000000] text-white border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: 3D CAD Bevel Gear Mechanism on Black */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <img 
                src="/assets/images/ASSEMBLY_1.jpg" 
                alt="RVCR Bevel Gear Assembly" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* Right Column: Specifics Copy */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
                RVCR specifics
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                A new configuration of rotary piston mechanics.
              </h2>
              
              <div className="space-y-4 text-[#d9d9d9] text-sm sm:text-base leading-relaxed">
                <p>
                  Almost all machines today are based on either the ‘Slider-Crank’ or the ‘Rotary’ mechanism (known as kinematic mechanisms).
                </p>
                <p>
                  The genesis of RVCR is novel component geometries and its configuration that simplifies conversion of energy within fluids like fuel or wind etc., into power. Fluids actuate motion of links which eventually rotate wheels or power generators. Key to RVCR is enhancing of efficacy of this energy conversion.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/rvcr-specifics"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-[#003461] bg-white hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#003461]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HOW RVCR WORKS SECTION */}
      <section 
        id="Howworks" 
        className="py-20 md:py-28 bg-white border-b border-[#e8e7ef] bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/WORKS-min.png')`,
          backgroundPosition: 'calc(100% - 20px) center',
          backgroundSize: '400px auto'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
                How RVCR works
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003461] tracking-tight leading-tight">
                Perceive - Rotating curved piston with cam actuated shuttle valve
              </h2>
              
              <div className="space-y-4 text-[#334155] text-sm sm:text-base leading-relaxed max-w-2xl">
                <p>
                  Simply speaking  there are two rotors on a single shaft wherein One rotor decouples and becomes a stator, while the other turns. They switch roles alternately as rotor and stator. Like in a steam engine the piston actuates a shuttle valve before it reaches the end position to allow reversing stem flow, RVCR rotary piston actuate adjacent rotor as it nears the end of its turning span. This is crux of RVCR RVCR’s new mechanism is that it eliminates the need of dedicated stationary link, by dynamic reorienting of a twin Rotor system, enabling a new physics of energy conversion.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/how-rvcr-works"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-md"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5 h-80" />

          </div>
        </div>
      </section>

      {/* 5. RVCR APPLICATION SECTION */}
      <section id="application" className="py-20 md:py-24 bg-white border-b border-[#e8e7ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Title & Button */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
                RVCR application
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003461] tracking-tight">
                Primemovers and FHM
              </h2>
              <div className="pt-2">
                <Link
                  to="/rvcr-applications"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-md"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Paragraph with Vertical Pink Border */}
            <div className="lg:col-span-7 border-l-4 border-[#96337b] pl-6 sm:pl-8 py-2">
              <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                RVCR kinematics applies to all Fluid Handling machines RVCR kinematics is a replacement for both positive displacement (Reciprocatory &amp; rotary) and rotary centrifugal kinematic system. The Variable displacement characteristic adds to the versatility of the mechanism. The component elements and their parameters can be customized for both high pressure and high-volume applications. The tangential piston force dynamics can be adapted to cover both +ve displacement and the rotary centrifugal applications. The RVCR product projects are covered separately.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. RVCR FEASIBILITY SECTION */}
      <section 
        id="feasibility" 
        className="py-24 md:py-32 bg-black bg-cover bg-center text-white relative text-center"
        style={{ 
          backgroundImage: `url('/assets/images/AS4-pxg1zlef0d2mf4m6w946uu5gu57msi9nccn2nv7wb4.jpg')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
            RVCR feasibility
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Solving rotary system faults
          </h2>
          
          <div className="space-y-4 text-[#d9d9d9] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            <p>
              RVCR overcomes issues with sealing and inertia common in rotary kinematic systems. Unlike previous Wankel system RVCR has no (straight-line edge or large-flat-side surfaces) sealing issues, RVCR employs a combination of tangential spring force and labyrinth sealing methodology for across rotary piston vane sealing and side-sealing respectively.
            </p>
            <p>
              RVCR allows large rapid expansion at low speeds hence solving inertia issues are ,. The alternate Stopping and Starting  of RVCR rotors is made easy by slower speeds and by cushioning of rotors by gas forces.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/rvcr-feasibility"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-[#003461] bg-white hover:bg-slate-100 transition-all shadow-md"
            >
              <span>Read more</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#003461]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. RVCR VIABILITY & RVCR VALUE (LIGHT GYATK BACKGROUND #eef7ff WITH CARDS) */}
      <section className="py-20 md:py-28 bg-[#eef7ff] border-b border-[#e8e7ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Card 1: RVCR Viability */}
          <div id="viability" className="bg-white rounded-2xl border border-[#e8e7ef] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
                  RVCR viability
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] leading-tight">
                  Viable green transition
                </h3>
                <h4 className="text-base sm:text-lg font-bold text-[#1e293b]">
                  RVCR most advanced competitive Zero-Carbon Technologies
                </h4>
                <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                  RVCR is about enhancing efficacy of force and energy transfer. Furthermore, easy, and dynamic control over change of volume and the rate of change of volume allows newer ways in improving thermodynamic gas processes. Comparing capital cost components of total material, manufacture cost, and system’s needs, RVCR stands economical than all conventional Primemovers.
                </p>
                <div className="pt-2">
                  <Link
                    to="/rvcr-viability"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-md"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <img 
                  src="/assets/images/RVCR_hydro_motor.jpg" 
                  alt="RVCR Hydro Motor Schematic" 
                  className="w-full max-w-sm h-auto object-contain"
                />
              </div>

            </div>
          </div>

          {/* Card 2: RVCR Value */}
          <div id="value" className="bg-white rounded-2xl border border-[#e8e7ef] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <img 
                  src="/assets/images/assmbly-pxg1z1nt0ubhjzy08auj71ysaa831op1qxub6gq64o.jpg" 
                  alt="RVCR Transmission Assembly" 
                  className="w-full max-w-sm h-auto object-contain rounded-lg"
                />
              </div>

              <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
                  RVCR value
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] leading-tight">
                  Cost effective climate regulation compliance
                </h3>
                <h4 className="text-base sm:text-lg font-bold text-[#1e293b]">
                  RVCR technology products derive value for its inherent attributes.
                </h4>
                <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                  RVCR is a simplified system to combine features like double acting and opposed piston, making it a highly efficient, compact, and has low carbon footprint. It combines the system efficiency of ‘Positive Displacement Mechanism’, fine ‘VCR’ control, and gains from ‘Direct Torque Transfer’ characteristics of Rotary mechanism, into one highly advanced primemover tech.
                </p>
                <div className="pt-2">
                  <Link
                    to="/rvcr-value"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-md"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. BROADER IMPACT SECTION */}
      <section 
        id="impact" 
        className="py-20 md:py-28 relative"
        style={{
          background: 'linear-gradient(90deg, #96337b 36%, #ffffff 35%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#e8e7ef] p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 flex justify-center">
                <img 
                  src="/assets/images/green_industy.jpg" 
                  alt="Green Eco Earth Illustration" 
                  className="w-full max-w-sm h-auto object-contain"
                />
              </div>

              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
                  Broader impact
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] leading-tight">
                  Redefining - climate recovery response
                </h3>
                <h4 className="text-base sm:text-lg font-bold text-[#1e293b]">
                  Enabling an comprehensive alternate industrial strategy for Climate Change Mitigation to fix global warming.
                </h4>
                <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                  RVCR ensures Unhooking from fossil fuel dependency. It enables a smooth transition to green fuel in the heavy transport sector. In doing so RVCR carves newer markets of green fuels. The onset of RVCR leads to lowering of Levelized cost of power from renewable energy.
                </p>
                <div className="pt-2">
                  <Link
                    to="/broader-impact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-md"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR R&D SECTION */}
      <section id="RVCR-R&D" className="py-20 md:py-28 bg-white border-b border-[#e8e7ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
                Our R&amp;D
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003461] tracking-tight leading-tight">
                R&amp;D on newer “Zero Carbon” technologies
              </h2>
              
              <div className="space-y-4 text-[#334155] text-sm sm:text-base leading-relaxed">
                <p>
                  We conduct research, and development of to create newer seed technologies based on the breakthrough RVCR concept. We then design new breed of primemovers, and systems based on the developed technology capable of outperforming future climate regulations of transport and energy industry.We generate global IP of products based on the developed RVCR technologies
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-md"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <img 
                src="/assets/images/whatwedo-1-1.jpeg" 
                alt="RVCR Kinematic Linkage Graph" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 10. DISCOVER MORE OF RVCR (RECREATED PREMIUM SHOWCASE) */}
      <section 
        id="research" 
        className="py-24 md:py-32 bg-gradient-to-b from-white via-[#f0f7ff]/70 to-white relative overflow-hidden border-t border-[#e8e7ef]"
      >
        {/* Ambient watermark & subtle glow */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.04] pointer-events-none select-none"
          style={{ backgroundImage: `url('/assets/images/rvcr.png')` }}
        />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#96337b]/10 via-[#00a9ea]/10 to-[#003461]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#96337b] font-roboto block">
              Ecosystem &amp; Innovations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003461] tracking-tight leading-tight">
              Discover more of RVCR
            </h2>
            <p className="text-base sm:text-lg text-[#334155] font-light leading-relaxed">
              Witness the seeding of newer unconventional climate tech, advanced rotary primemovers, and high-efficiency thermodynamic systems.
            </p>
          </div>

          {/* 3 Interactive Highlight Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-[#e8e7ef] shadow-sm hover:shadow-md hover:border-[#003461]/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#003461]/10 text-[#003461] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#003461] mb-2">
                Unconventional Kinematics
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Variable compression ratio rotary mechanics eliminating conventional reciprocating friction, piston slap, and straight-line sealing faults.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-[#e8e7ef] shadow-sm hover:shadow-md hover:border-[#96337b]/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#96337b]/10 text-[#96337b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#003461] mb-2">
                Zero Carbon Transition
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Engineered for hydrogen combustion, ammonia, low-calorific gases, and industrial waste-heat capture with unprecedented expansion ratios.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-[#e8e7ef] shadow-sm hover:shadow-md hover:border-[#00a9ea]/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00a9ea]/10 text-[#00a9ea] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#003461] mb-2">
                Global IP &amp; Licensing
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Extensive patent portfolio governed by GYATK across US, Europe, and Asian industrial hubs for cross-sector powertrain adoption.
              </p>
            </div>

          </div>

          {/* Action CTA Bar */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e8e7ef] shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#003461]">
                Ready to explore the technology deep-dive?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Access technical whitepapers, patents, and commercialization programs.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://gyatk.com/landing-page/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-md hover:shadow-lg transition-all"
              >
                <span>Delve in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#003461] hover:bg-slate-100 transition-colors"
              >
                <span>About us</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 11. INFO & CONTACT US SECTION */}
      <section 
        id="Contact" 
        className="py-20 md:py-28 relative bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/9cd53aafe21505d44d31dea2f10704a6.jpeg')`,
          backgroundColor: '#96337b'
        }}
      >
        {/* Magenta/Purple Color Overlay */}
        <div className="absolute inset-0 bg-[#96337b]/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: White Card with Google Map Background */}
            <div 
              className="lg:col-span-5 bg-white rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between bg-cover bg-center relative overflow-hidden border border-[#e8e7ef]"
              style={{
                backgroundImage: `url('/assets/images/WhatsApp-Image-2023-08-22-at-5.30.04-PM.jpeg')`
              }}
            >
              <div className="absolute inset-0 bg-white/88 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#003461] border-b-2 border-[#96337b] pb-2 inline-block">
                    Info
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-[#334155]">
                  <a 
                    href="tel:+917403008844" 
                    className="flex items-center gap-3 font-medium hover:text-[#cc2b5e] transition-colors"
                  >
                    <Phone className="w-5 h-5 text-[#96337b] shrink-0" />
                    <span>+91 7403008844</span>
                  </a>

                  <a 
                    href="mailto:info@gyatk.com" 
                    className="flex items-center gap-3 font-medium hover:text-[#cc2b5e] transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#96337b] shrink-0" />
                    <span>info@gyatk.com</span>
                  </a>

                  <a 
                    href="https://goo.gl/maps/Q4nJaKCPBJxrGaJJA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-[#cc2b5e] transition-colors pt-2"
                  >
                    <MapPin className="w-5 h-5 text-[#96337b] shrink-0 mt-0.5" />
                    <span>GYATK RVCR Apparatus Pvt Ltd, India, CIN : U73100KL2005PTC017897</span>
                  </a>
                </div>
              </div>

              <div className="relative z-10 pt-10">
                <a 
                  href="https://goo.gl/maps/Q4nJaKCPBJxrGaJJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#003461] font-semibold uppercase hover:text-[#cc2b5e]"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* Right Column: Contact Us Form */}
            <div className="lg:col-span-7 text-white space-y-6 py-4">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white">
                  Contact us
                </h3>
                <p className="text-sm text-pink-100 mt-2 max-w-xl font-light">
                  We operate from our base in UK and India. For more information, please drop us a mail or use the form.
                </p>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-white text-emerald-800 flex items-center gap-3 shadow">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="text-sm font-semibold">Thank you for your message! An engineer will be in touch shortly.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-900/80 text-white flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-300 shrink-0" />
                  <p className="text-sm">Please fill in your name and email.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white font-semibold mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-[#00a9ea] shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white font-semibold mb-1">
                    Your email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-[#00a9ea] shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white font-semibold mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-[#00a9ea] shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white font-semibold mb-1">
                    Your message (optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-[#00a9ea] shadow-inner resize-none font-light"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="px-8 py-3 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-lg active:scale-95 transition-all"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Message'}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
