import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';

interface TechLinkItem {
  label: string;
  href: string;
}

const TECH_LINKS: TechLinkItem[] = [
  { label: 'WHAT IS RVCR', href: '/what-is-rvcr' },
  { label: 'RVCR APPLICATION', href: '/rvcr-applications' },
  { label: 'RVCR VALUE', href: '/rvcr-value' },
  { label: 'RVCR SPECIFICS', href: '/rvcr-specifics' },
  { label: 'RVCR FEASIBILITY', href: '/rvcr-feasibility' },
  { label: 'STRATEGIC ADVANTAGES', href: '/strategic-advantages' },
  { label: 'HOW RVCR WORKS', href: '/how-rvcr-works' },
  { label: 'RVCR VIABILITY', href: '/rvcr-viability' },
  { label: 'BROADER IMPACT', href: '/broader-impact' },
];

export const RvcrTechLinks: React.FC = () => {
  return (
    <div className="relative z-10">
      {/* Overlapping Top Badge */}
      <div className="flex justify-center -mb-7 relative z-20 px-4">
        <div className="bg-[#242b35] text-white font-bold text-base sm:text-xl px-10 sm:px-14 py-3.5 sm:py-4 shadow-xl uppercase tracking-wider text-center">
          RVCR Tech Links
        </div>
      </div>

      {/* Purple Band with 3x3 Button Grid */}
      <section className="bg-[#96337b] pt-14 pb-12 sm:pt-16 sm:pb-16 text-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
            {TECH_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white hover:bg-neutral-100 text-[#1f242e] hover:text-[#96337b] font-semibold text-xs py-3 px-3 sm:px-4 text-center transition-all shadow-sm uppercase tracking-wider block"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
