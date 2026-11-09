import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home as HomeIcon } from 'lucide-react';
import { Navigation } from './Navigation';
import { MobileNav } from './MobileNav';
import { Container } from '../ui/Container';

export const Header: React.FC = () => {
  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300"
    >
      {/* 1. TOP BAR: Exactly matching uploaded screenshot (Logo on Left, 4 Purple Social Icons on Right) */}
      <div className="border-b border-gray-100 bg-white">
        <Container className="py-2.5 sm:py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="GYATK Beyond Innovation RVCR Logo">
            <div className="relative w-[165px] sm:w-[205px] h-[65px] sm:h-[80px]">
              <Image
                src="/assets/images/gyatk-logo.png"
                alt="GYATK Beyond Innovation Logo"
                fill
                priority
                sizes="(max-width: 640px) 165px, 205px"
                className="object-contain object-left"
                style={{ maxWidth: '205px', maxHeight: '80px' }}
              />
            </div>
          </Link>

          {/* Social Icons (Facebook, LinkedIn, Instagram, YouTube in Brand Purple #95347c) */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-[#95347c]">
            <a
              href="https://www.facebook.com/gyatk.technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#95347c] hover:text-[#cf3367] transition-colors p-1"
              title="Facebook"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/gyatk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#95347c] hover:text-[#cf3367] transition-colors p-1"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/gyatk.technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#95347c] hover:text-[#cf3367] transition-colors p-1"
              title="Instagram"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@gyatk4479"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#95347c] hover:text-[#cf3367] transition-colors p-1"
              title="YouTube"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </Container>
      </div>

      {/* 2. NAVBAR ROW: Home icon + Tagline on Left, Navigation Links on Right */}
      <div className="bg-white">
        <Container className="py-2 flex items-center justify-between text-xs sm:text-sm font-sans">
          {/* Left: Home icon + Tagline */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[#003461] hover:text-[#cf3367] transition-colors flex items-center"
              aria-label="Home"
            >
              <HomeIcon className="w-4 h-4 text-[#003461]" aria-hidden="true" />
            </Link>
            <span className="text-[#cf3367] font-medium tracking-tight truncate max-w-[260px] sm:max-w-none text-sm sm:text-[16px]" style={{ fontSize: '16px' }}>
              Knowledge Platform for RVCR
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center">
            <Navigation />
          </div>

          {/* Mobile Navigation Toggle */}
          <MobileNav />
        </Container>
      </div>
    </header>
  );
};
