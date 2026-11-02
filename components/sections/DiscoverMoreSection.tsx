import React from 'react';
import { Container } from '../ui/Container';

export const DiscoverMoreSection: React.FC = () => {
  return (
    <section 
      id="research" 
      className="py-20 md:py-28 bg-white relative overflow-hidden flex items-center justify-center border-t border-gray-100"
    >
      {/* Giant RVCR Watermark in background */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.09] pointer-events-none select-none"
        style={{ backgroundImage: `url('/assets/images/rvcr.png')` }}
      />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#CC00AA] tracking-tight">
            Discover more of RVCR
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-normal">
            Witness the seeding of newer unconventional climate tech
          </p>
          <div className="pt-2">
            <a
              href="https://gyatk.com/landing-page/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-2.5 bg-black text-white font-semibold text-xs rounded-none hover:bg-neutral-800 transition-colors shadow-md"
            >
              Delve in
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
