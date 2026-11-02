'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [stayDropdownOpen, setStayDropdownOpen] = useState(false);

  const homeMenuRef = useRef<HTMLDivElement>(null);
  const stayMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (homeMenuRef.current && !homeMenuRef.current.contains(event.target as Node)) {
        setHomeDropdownOpen(false);
      }
      if (stayMenuRef.current && !stayMenuRef.current.contains(event.target as Node)) {
        setStayDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setHomeDropdownOpen(false);
        setStayDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const HOME_DROPDOWN_ITEMS = [
    { label: 'Kgyat Engine', href: 'https://kgyat.com/engine-subdirectory', isExternal: true },
    { label: 'KGYAT', href: 'https://kgyat.com', isExternal: true },
    { label: 'GYATK', href: 'https://gyatk.com/', isExternal: true },
    { label: 'Patents', href: 'https://gyatk.com/patents', isExternal: true },
  ];

  const STAY_ON_PAGE_ITEMS = [
    { label: 'What is RVCR', href: '/#WisR' },
    { label: 'RVCR Specifics', href: '/#specifics' },
    { label: 'How RVCR Works', href: '/#Howworks' },
    { label: 'Application', href: '/#application' },
    { label: 'Feasibility', href: '/#feasibility' },
    { label: 'Viability & Value', href: '/#viability' },
    { label: 'Broader Impact', href: '/#impact' },
    { label: 'Our R&D', href: '/#RVCR-R&D' },
  ];

  const isHomeActive = pathname === '/';
  const isAboutActive = pathname === '/about-us';

  return (
    <nav className="hidden md:flex items-center space-x-6" aria-label="Main Navigation">
      {/* 1. Home with Dropdown Menu */}
      <div
        ref={homeMenuRef}
        className="relative"
        onMouseEnter={() => setHomeDropdownOpen(true)}
        onMouseLeave={() => setHomeDropdownOpen(false)}
      >
        <button
          type="button"
          onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
          aria-expanded={homeDropdownOpen}
          aria-haspopup="true"
          aria-label="Home menu"
          className={`flex items-center gap-1 font-semibold transition-colors py-1 ${
            isHomeActive ? 'text-[#CF3367]' : 'text-gray-800 hover:text-[#CF3367]'
          }`}
        >
          <span>Home</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              homeDropdownOpen ? 'rotate-180 text-[#CF3367]' : 'text-gray-500'
            }`}
          />
        </button>

        {homeDropdownOpen && (
          <div
            role="menu"
            aria-label="Ecosystem Websites"
            className="absolute left-0 mt-1 w-52 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in duration-150"
          >
            {HOME_DROPDOWN_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-800 hover:text-[#CF3367] hover:bg-gray-50 transition-colors"
              >
                <span>{item.label}</span>
                <ExternalLink className="w-4 h-4 text-[#7B92A8]" aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* 2. About Link */}
      <Link
        href={ROUTES.aboutUs}
        className={`font-medium transition-colors ${
          isAboutActive ? 'text-[#CF3367] font-semibold' : 'text-gray-800 hover:text-[#CF3367]'
        }`}
      >
        About
      </Link>

      {/* 3. Stay on Page Dropdown with Anchor Links */}
      <div
        ref={stayMenuRef}
        className="relative"
        onMouseEnter={() => setStayDropdownOpen(true)}
        onMouseLeave={() => setStayDropdownOpen(false)}
      >
        <button
          type="button"
          onClick={() => setStayDropdownOpen(!stayDropdownOpen)}
          aria-expanded={stayDropdownOpen}
          aria-haspopup="true"
          aria-label="Section shortcuts"
          className="flex items-center gap-1 text-gray-800 hover:text-[#CF3367] font-medium transition-colors py-1"
        >
          <span>Stay on Page</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
              stayDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {stayDropdownOpen && (
          <div
            role="menu"
            aria-label="Homepage Sections"
            className="absolute right-0 mt-1 w-56 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 z-50"
          >
            {STAY_ON_PAGE_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setStayDropdownOpen(false)}
                role="menuitem"
                className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CF3367] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* 4. External Blog Link */}
      <a
        href="https://www.gyatk.com/blog/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-[#CF3367] font-medium transition-colors"
      >
        Blog
      </a>

      {/* 5. Crimson Pill Contact Button */}
      <Link
        href="/#Contact"
        className="px-5 py-1.5 rounded-md text-xs font-semibold text-white bg-[#CF3367] hover:bg-[#B82357] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#CF3367] focus:ring-offset-2"
      >
        Contact
      </Link>
    </nav>
  );
};
