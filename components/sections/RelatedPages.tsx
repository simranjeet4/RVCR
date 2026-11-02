import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface RelatedPagesProps {
  currentPath: string;
  title?: string;
  className?: string;
}

interface PageLinkItem {
  href: string;
  label: string;
  eyebrow?: string;
}

const ALL_CORE_PAGES: PageLinkItem[] = [
  { href: '/what-is-rvcr', label: 'What is RVCR', eyebrow: 'Fundamentals' },
  { href: '/rvcr-specifics', label: 'RVCR Specifics', eyebrow: 'Architecture' },
  { href: '/how-rvcr-works', label: 'How RVCR Works', eyebrow: 'Kinematics' },
  { href: '/rvcr-applications', label: 'RVCR Applications', eyebrow: 'Prime Movers' },
  { href: '/rvcr-feasibility', label: 'RVCR Feasibility', eyebrow: 'Validation' },
  { href: '/rvcr-viability', label: 'RVCR Viability', eyebrow: 'Commercial' },
  { href: '/rvcr-value', label: 'RVCR Value', eyebrow: 'Proposition' },
  { href: '/broader-impact', label: 'Broader Impact', eyebrow: 'Decarbonization' },
  { href: '/strategic-advantages', label: 'Strategic Advantages', eyebrow: 'R&D Roadmap' },
  { href: '/about-us', label: 'About Us', eyebrow: 'Corporate' },
];

export const RelatedPages: React.FC<RelatedPagesProps> = ({
  currentPath,
  title = 'Explore Other RVCR Technology Modules',
  className = '',
}) => {
  // Filter out the current active page
  const filteredPages = ALL_CORE_PAGES.filter((page) => page.href !== currentPath);

  return (
    <nav aria-label="Related RVCR modules" className={`pt-12 border-t border-[#e8e7ef] ${className}`}>
      <h3 className="text-xl sm:text-2xl font-bold text-[#003461] mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group p-4 rounded-xl bg-[#f8fafc] border border-[#e8e7ef] hover:border-[#003461] text-[#334155] hover:text-[#003461] hover:bg-white shadow-sm flex items-center justify-between transition-all"
          >
            <div>
              {page.eyebrow && (
                <span className="block text-[10px] font-roboto uppercase tracking-wider text-[#96337b] font-semibold mb-0.5">
                  {page.eyebrow}
                </span>
              )}
              <span className="text-sm font-semibold tracking-tight">{page.label}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#003461] group-hover:translate-x-1 transition-all" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </nav>
  );
};
