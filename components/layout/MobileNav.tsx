'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';
import { ROUTES } from '@/lib/routes';

export const MobileNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const HOME_DROPDOWN_ITEMS = [
    { label: 'Kgyat Engine', href: 'https://kgyat.com/engine-subdirectory' },
    { label: 'KGYAT', href: 'https://kgyat.com' },
    { label: 'GYATK', href: 'https://gyatk.com/' },
    { label: 'Patents', href: 'https://gyatk.com/patents' },
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

  return (
    <div className="md:hidden">
      {/* Hamburger / Close Toggle Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-1.5 text-gray-700 hover:text-[#CF3367] focus:outline-none focus:ring-2 focus:ring-[#CF3367] rounded"
        aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Mobile Navigation"
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl z-50 animate-in slide-in-from-top-2 duration-150"
        >
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-[#CF3367] bg-pink-50/50 rounded"
            >
              Home
            </Link>
            <div className="pl-4 py-1 space-y-1 border-l-2 border-pink-100 ml-2">
              {HOME_DROPDOWN_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1.5 text-xs text-gray-700 hover:text-[#CF3367]"
                >
                  <span>• {item.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7B92A8]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <Link
            href={ROUTES.aboutUs}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded"
          >
            About
          </Link>

          {/* Section shortcuts */}
          <div className="space-y-1">
            <span className="block px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Sections
            </span>
            <div className="grid grid-cols-2 gap-1 px-3">
              {STAY_ON_PAGE_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs text-gray-700 hover:text-[#CF3367]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <a
            href="https://www.gyatk.com/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded"
          >
            Blog
          </a>

          <div className="pt-2">
            <Link
              href="/#Contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white bg-[#CF3367] hover:bg-[#B82357] shadow-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
