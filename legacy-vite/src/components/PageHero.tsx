import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  category?: string;
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  category = "RVCR Technology",
  bgImage = "/assets/images/tech-background-fvwtt878xhbn6lh6.jpg"
}) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden border-b border-[#e8e7ef]">
      {/* Background Image with Light Black Overlay (matching Homepage Hero) */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Light Black Overlay for optimal text readability */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-slate-300 mb-6 font-roboto">
          <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-slate-300" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#96337b] font-medium">{category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{title}</span>
        </nav>

        {/* Title & Tag */}
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
