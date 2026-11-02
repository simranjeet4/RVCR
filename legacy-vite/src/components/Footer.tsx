import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EFEFEF] text-gray-700 border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Column 1: Logo & Company Description & Socials */}
          <div className="space-y-4">
            <img 
              src="/assets/images/try-1-150x51-1.png" 
              alt="RVCR Logo" 
              className="h-11 w-auto object-contain"
            />
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md font-sans">
              We design, develop, and deliver systems with the coveted VCR feature that out-perform conventional systems with newer functionalities and capabilities.
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">
                SOCIAL MEDIA
              </h4>
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.facebook.com/gyatk.technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center bg-[#3b5998] text-white rounded text-xs font-bold hover:opacity-90 transition-opacity"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com/gyatk.technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded text-xs font-bold hover:opacity-90 transition-opacity"
                  title="Instagram"
                >
                  in
                </a>
                <a
                  href="https://www.linkedin.com/company/gyatk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center bg-[#0077b5] text-white rounded text-xs font-bold hover:opacity-90 transition-opacity"
                  title="LinkedIn"
                >
                  li
                </a>
                <a
                  href="https://twitter.com/gyatktech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center bg-[#1da1f2] text-white rounded text-xs font-bold hover:opacity-90 transition-opacity"
                  title="Twitter"
                >
                  tw
                </a>
                <a
                  href="https://www.youtube.com/@gyatk4479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center bg-[#cd201f] text-white rounded text-xs font-bold hover:opacity-90 transition-opacity"
                  title="YouTube"
                >
                  yt
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Address Info with Flags */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b-2 border-[#96337B] pb-1 inline-block mb-3">
                Address info
              </h4>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-600 font-sans">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/images/Flag_of_India.png" 
                  alt="India Flag" 
                  className="w-6 h-4 object-cover shadow-sm rounded-sm shrink-0" 
                />
                <span className="font-medium text-gray-800">
                  GYATK RVCR Apparatus Pvt Ltd, India, CIN : U73100KL2005PTC017897
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img 
                  src="/assets/images/8a741f8bba3b468f90099d3c602edb13.png" 
                  alt="UK Flag" 
                  className="w-6 h-4 object-cover shadow-sm rounded-sm shrink-0" 
                />
                <span className="font-medium text-gray-800">
                  KGYAT Wind Power Ltd, United Kingdom
                </span>
              </div>

              <div className="pt-2 space-y-1">
                <a 
                  href="tel:+917403008844" 
                  className="flex items-center gap-2 text-gray-700 hover:text-[#96337B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#96337B]" />
                  <span>+91 74030 08844</span>
                </a>
                <a 
                  href="mailto:info@gyatk.com" 
                  className="flex items-center gap-2 text-gray-700 hover:text-[#96337B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#96337B]" />
                  <span>info@gyatk.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
          <p>© 2024 RVCR Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
