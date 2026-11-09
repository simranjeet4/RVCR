import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Home as HomeIcon, ExternalLink } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [stayDropdownOpen, setStayDropdownOpen] = useState(false);
  const location = useLocation();

  const HOME_DROPDOWN_ITEMS = [
    { label: 'Kgyat Engine', href: 'https://kgyat.com/engine-subdirectory', isExternal: true },
    { label: 'KGYAT', href: 'https://kgyat.com', isExternal: true },
    { label: 'GYATK', href: 'https://gyatk.com/', isExternal: true },
    { label: 'Patents', href: 'https://gyatk.com/patents', isExternal: true },
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#Contact';
    } else {
      const el = document.getElementById('Contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setStayDropdownOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 transition-all duration-300">
      
      {/* 1. TOP ROW: GYATK Logo on Left, Social Icons on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between border-b border-gray-100">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/assets/images/gyatk-logo.png" 
            alt="GYATK Beyond Innovation Logo" 
            className="w-full object-contain"
            style={{ maxWidth: '205px' }}
          />
        </Link>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center space-x-4 text-[#1B365D]">
          <a
            href="https://www.facebook.com/gyatk.technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] hover:text-[#CF3367] transition-colors"
            title="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/gyatk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] hover:text-[#CF3367] transition-colors"
            title="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/gyatk.technologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] hover:text-[#CF3367] transition-colors"
            title="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/@gyatk4479"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] hover:text-[#CF3367] transition-colors"
            title="YouTube"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/gyatktech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B365D] hover:text-[#CF3367] transition-colors"
            title="X (Twitter)"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-700 hover:text-[#CF3367]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 2. BOTTOM ROW: Tagline on Left, Navigation Links + Contact Button on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs sm:text-sm font-sans">
        
        {/* Left Side: Home Icon + Tagline */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-[#1B365D] hover:text-[#CF3367] transition-colors flex items-center">
            <HomeIcon className="w-4 h-4 text-[#1B365D]" />
          </Link>
          <span 
            className="text-[#CF3367] font-medium tracking-tight truncate max-w-[280px] sm:max-w-none text-[16px]"
            style={{ fontSize: '16px' }}
          >
            Knowledge Platform for RVCR
          </span>
        </div>

        {/* Right Side: Navigation Links & Crimson Contact Button */}
        <div className="hidden md:flex items-center space-x-6">
          
          {/* Home with Dropdown Menu matching uploaded screenshot */}
          <div 
            className="relative"
            onMouseEnter={() => setHomeDropdownOpen(true)}
            onMouseLeave={() => setHomeDropdownOpen(false)}
          >
            <button
              onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
              className="flex items-center gap-1 text-[#CF3367] font-semibold hover:opacity-80 transition-colors py-1"
            >
              <span>Home</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#CF3367] transition-transform ${homeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu matching screenshot */}
            {homeDropdownOpen && (
              <div className="absolute left-0 mt-1 w-52 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in duration-150">
                {HOME_DROPDOWN_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-800 hover:text-[#CF3367] hover:bg-gray-50 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ExternalLink className="w-4 h-4 text-[#7B92A8]" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/about-us" 
            className="text-gray-800 hover:text-[#CF3367] font-medium transition-colors"
          >
            About
          </Link>

          {/* Stay on Page Dropdown with Anchor Links */}
          <div 
            className="relative"
            onMouseEnter={() => setStayDropdownOpen(true)}
            onMouseLeave={() => setStayDropdownOpen(false)}
          >
            <button 
              onClick={() => setStayDropdownOpen(!stayDropdownOpen)}
              className="flex items-center gap-1 text-gray-800 hover:text-[#CF3367] font-medium transition-colors py-1"
            >
              <span>Stay on Page</span>
              <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform ${stayDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {stayDropdownOpen && (
              <div className="absolute right-0 mt-1 w-56 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 z-50">
                <a 
                  href="#WisR" 
                  onClick={(e) => scrollToSection(e, 'WisR')} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CF3367]"
                >
                  What is RVCR
                </a>
                <a 
                  href="#RVCRS" 
                  onClick={(e) => scrollToSection(e, 'RVCRS')} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CF3367]"
                >
                  RVCR Specifics
                </a>
                <a 
                  href="#Howworks" 
                  onClick={(e) => scrollToSection(e, 'Howworks')} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CF3367]"
                >
                  How RVCR Works
                </a>
                <a 
                  href="#application" 
                  onClick={(e) => scrollToSection(e, 'application')} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CF3367]"
                >
                  Application
                </a>
                <a 
                  href="#feasibility" 
                  onClick={(e) => scrollToSection(e, 'feasibility')} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CF3367]"
                >
                  Feasibility
                </a>
                <a 
                  href="#viability" 
                  onClick={(e) => scrollToSection(e, 'viability')} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CF3367]"
                >
                  Viability &amp; Value
                </a>
                <a 
                  href="#impact" 
                  onClick={(e) => scrollToSection(e, 'impact')} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CF3367]"
                >
                  Broader Impact
                </a>
                <a 
                  href="#RVCR-R&D" 
                  onClick={(e) => scrollToSection(e, 'RVCR-R&D')} 
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-[#CF3367]"
                >
                  Our R&amp;D
                </a>
              </div>
            )}
          </div>

          <a 
            href="https://www.gyatk.com/blog/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#CF3367] font-medium transition-colors"
          >
            Blog
          </a>

          {/* Crimson Pill Contact Button */}
          <a
            href="#Contact"
            onClick={scrollToContact}
            className="px-5 py-1.5 rounded-md text-xs font-semibold text-white bg-[#CF3367] hover:bg-[#B82357] shadow-sm transition-all"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2 text-sm font-semibold text-[#CF3367] bg-pink-50/50 rounded"
          >
            Home
          </Link>
          <div className="pl-3 py-1 space-y-1">
            {HOME_DROPDOWN_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-1.5 text-xs text-gray-700 hover:text-[#CF3367]"
              >
                <span>• {item.label}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#7B92A8]" />
              </a>
            ))}
          </div>
          <Link 
            to="/about-us" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded"
          >
            About
          </Link>
          <a 
            href="https://www.gyatk.com/blog/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded"
          >
            Blog
          </a>
          <a
            href="#Contact"
            onClick={scrollToContact}
            className="block w-full py-2.5 text-center text-xs font-semibold text-white bg-[#CF3367] rounded-md shadow-sm"
          >
            Contact
          </a>
        </div>
      )}

    </header>
  );
};
