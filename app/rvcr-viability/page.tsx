import { Metadata } from 'next';
import { constructPageMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/sections/PageHero';
import { ContentBlock } from '@/components/sections/ContentBlock';
import { ImageContentBlock } from '@/components/sections/ImageContentBlock';
import { RelatedPages } from '@/components/sections/RelatedPages';
import { ContactSection } from '@/components/sections/ContactSection';
import { CheckCircle2, TrendingUp, Layers, Award, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = constructPageMetadata({
  title: 'RVCR Viability | Techno-Commercial Assessment & Dual-Level Business Cases',
  description:
    'Techno-commercial viability analysis for RVCR commercialization: IP licensing economics, EU Horizon 2020 validation, capital cost reduction, and manufacturing readiness.',
  path: '/rvcr-viability',
});

export default function RvcrViabilityPage() {
  return (
    <div className="bg-white text-[#334155] min-h-screen font-sans">
      <PageHero
        title="RVCR viability"
        subtitle="Techno-commercial viability, dual-level business cases, capital cost analysis, and product realization"
        category="Commercial Strategy"
        bgImage="/assets/images/RVCR_hydro_motor.jpg"
        currentPath="/rvcr-viability"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">
          {/* Section 01 */}
          <ContentBlock
            eyebrow="Section 01"
            title="RVCR Viability"
            subtitle="Multi-layered decision making across technological, industrial, financial, and regulatory domains"
          >
            <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
              <p>
                Adopting next-generation mechanical architecture requires rigorous multi-disciplinary decision making. We
                assist corporate partners, OEMs, and policy makers with detailed techno-commercial viability assessments
                and capability analyses across the complete lifecycle of RVCR technology products.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ImageContentBlock
                src="/assets/images/rvcr-1.png"
                alt="RVCR Commercialization Strategy"
                caption="RVCR Commercialization & Viability Roadmap"
              />
            </div>
          </ContentBlock>

          {/* Section 02: Overview & Global Mentoring */}
          <ContentBlock
            eyebrow="Section 02"
            title="Overview & Techno-Commercial Assessment"
            subtitle="Validated through global commercialization programs and EU Horizon 2020 funding"
          >
            <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
              <p>
                Deep-tech innovation viability centers on a comprehensive cost-benefit analysis comparing R&amp;D investment
                against lifetime operational savings and regulatory compliance margins. We benchmark individual RVCR cost
                components directly against incumbent slider-crank and rotary machinery.
              </p>
              <p>
                Our commercialization competency was honed through premier global mentoring programs, including the{' '}
                <strong>IC2 Institute of the University of Texas at Austin</strong> and <strong>Stanford Graduate School of
                Business</strong>, following international innovation award victories (Lockheed Martin, CleanTech Open).
              </p>
              <p>
                We formalized the business case for our green-fuel engine technology under a funded European Commission
                initiative (<strong>Horizon 2020 SME Instrument Phase 1</strong>), creating an auditable financial and
                operational blueprint for industry partners.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm">
                <Award className="w-6 h-6 text-[#96337b] mb-3" aria-hidden="true" />
                <h4 className="text-sm font-bold text-[#003461] mb-1">Global Award Winner</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Recognized by Lockheed Martin, CleanTech Open, and Stanford GSB commercialization tracks.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#003461] mb-3" aria-hidden="true" />
                <h4 className="text-sm font-bold text-[#003461] mb-1">EU Horizon 2020</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Rigorous techno-commercial viability study funded under EU SME Instrument Phase 1.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm">
                <TrendingUp className="w-6 h-6 text-[#96337b] mb-3" aria-hidden="true" />
                <h4 className="text-sm font-bold text-[#003461] mb-1">OEM Licensing Track</h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Proven precedent executing commercial IP licenses with major automotive manufacturers (Tata Motors).
                </p>
              </div>
            </div>
          </ContentBlock>

          {/* Section 03 & 04: Prelude & Industrial Precedents */}
          <ContentBlock
            eyebrow="Section 03 & 04"
            title="Industrial Precedents & Capital Cost Efficiency"
            subtitle="Demonstrated commercial execution with automotive major Tata Motors"
          >
            <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
              <p>
                Our commercial engagement model is founded on real-world industrial contracts. We successfully executed a
                technology licensing agreement and specialized engineering services contract with automotive major{' '}
                <strong>Tata Motors</strong>, demonstrating that RVCR IP can integrate smoothly within OEM development
                pipelines.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ImageContentBlock
                src="/assets/images/Lower-Costs-more-value-for-money.jpg"
                alt="Capital Cost Reduction & Economic ROI"
                caption="Lower Capital Costs & Higher Lifetime ROI"
              />
            </div>
          </ContentBlock>

          {/* Section 05: Background & Innovation Engineering */}
          <ContentBlock
            eyebrow="Section 05"
            title="Background & Innovation Engineering"
            subtitle="A phased, top-down assessment process for application-specific verticals"
          >
            <div className="space-y-4 text-[#334155] leading-relaxed text-sm sm:text-base max-w-4xl mb-8">
              <p>
                Moving from proof-of-concept hardware to high-volume commercial production requires intense multi-disciplinary
                specialization. We employ a phased top-down assessment methodology: analyzing macro-economic drivers first,
                then drilling down into specific bills of materials, tooling requirements, and supply-chain readiness.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ImageContentBlock
                src="/assets/images/Innov.jpg"
                alt="Innovation Pipeline and Technology Integration"
                caption="Structured Technology Readiness & Innovation Pipeline"
              />
            </div>
          </ContentBlock>

          {/* Section 07 & 08: Dual-Level Business Cases */}
          <ContentBlock
            eyebrow="Section 07 & 08"
            title="The Business Case at Two Strategic Levels"
            subtitle="Segregating commercial R&D risk from high-volume market execution"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm">
                <Layers className="w-6 h-6 text-[#96337b] mb-3" aria-hidden="true" />
                <h4 className="text-lg font-bold text-[#003461] mb-2">
                  Level 1: The Commercial R&amp;D Business Case
                </h4>
                <p className="text-sm text-[#334155] leading-relaxed">
                  Covers targeted technology innovation services contracts for pilot RVCR demonstrators. Execution
                  structures include in-house joint ventures, standalone prototype contracts, and downstream tooling
                  training for engineering teams.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef] shadow-sm">
                <TrendingUp className="w-6 h-6 text-[#003461] mb-3" aria-hidden="true" />
                <h4 className="text-lg font-bold text-[#003461] mb-2">
                  Level 2: The High-Volume Product Market Case
                </h4>
                <p className="text-sm text-[#334155] leading-relaxed">
                  Evaluates specific product economics: total cost of ownership (TCO) advantages over incumbent machines,
                  global IP exclusivity barriers, supply-chain resilience, and seamless compliance with zero-carbon mandates.
                </p>
              </div>
            </div>
          </ContentBlock>

          {/* Section 09 - 14: Four-Step Assessment Methodology */}
          <ContentBlock
            eyebrow="Section 09 - 14"
            title="Four-Step Assessment Methodology"
            subtitle="How we evaluate techno-commercial feasibility for prospective licensee partners"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef]">
                <span className="text-xs font-mono font-bold text-[#96337b] uppercase block mb-1">Step 01</span>
                <h4 className="text-base font-bold text-[#003461] mb-2">Feature Ease &amp; Simplification</h4>
                <p className="text-sm text-[#334155] leading-relaxed">
                  Comparing the mechanical simplification of RVCR against complex incumbent systems (e.g. eliminating
                  connecting rods, multi-valve pushrods, and external VCR linkages).
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef]">
                <span className="text-xs font-mono font-bold text-[#96337b] uppercase block mb-1">Step 02</span>
                <h4 className="text-base font-bold text-[#003461] mb-2">Root-Cause Engineering Leverage</h4>
                <p className="text-sm text-[#334155] leading-relaxed">
                  Quantifying fundamental thermodynamic benefits: higher expansion ratios, dwell-time combustion,
                  lower thermal rejection, and reduced parasitic frictional drag.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef]">
                <span className="text-xs font-mono font-bold text-[#96337b] uppercase block mb-1">Step 03</span>
                <h4 className="text-base font-bold text-[#003461] mb-2">Cost-Benefit Transition Analysis</h4>
                <p className="text-sm text-[#334155] leading-relaxed">
                  Modeling the complete financial ledger: pilot development capital, CNC tooling amortisation, unit bill of
                  materials (BOM), and operational life-cycle energy savings.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e8e7ef]">
                <span className="text-xs font-mono font-bold text-[#96337b] uppercase block mb-1">Step 04</span>
                <h4 className="text-base font-bold text-[#003461] mb-2">Strategic Ring-Fencing</h4>
                <p className="text-sm text-[#334155] leading-relaxed">
                  Structuring dedicated business verticals to insulate core legacy cash-flows while aggressively capturing
                  early-mover market share in green transport and power.
                </p>
              </div>
            </div>
          </ContentBlock>

          {/* Related Modules */}
          <RelatedPages currentPath="/rvcr-viability" />
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
