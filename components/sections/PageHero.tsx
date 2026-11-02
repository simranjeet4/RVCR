import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/seo';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  category?: string;
  bgImage?: string;
  currentPath?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  category = 'RVCR Technology',
  bgImage = '/assets/images/tech-background-fvwtt878xhbn6lh6.jpg',
  currentPath = '',
}) => {
  // Breadcrumb schema matching visible breadcrumbs
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: category, url: currentPath || '/' },
    { name: title, url: currentPath || '/' },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden border-b border-[#e8e7ef]">
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Background Image with LCP priority */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
        </div>
      )}

      {/* Light Black Overlay for optimal text readability */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Semantic Crawlable Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-300 mb-6 font-roboto">
          <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-slate-300" aria-hidden="true" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          <span className="text-[#96337b] font-medium">{category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
            {title}
          </span>
        </nav>

        {/* Category Eyebrow & Primary H1 */}
        <div className="max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-roboto font-semibold uppercase tracking-widest text-[#96337b] bg-[#96337b]/20 border border-[#96337b]/40 mb-4 backdrop-blur-sm">
            {category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base sm:text-xl text-[#d9d9d9] leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
