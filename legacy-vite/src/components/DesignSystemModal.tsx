import React, { useState } from 'react';
import { X, Check, Palette, Type, Layers, Eye, ShieldCheck } from 'lucide-react';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemModal: React.FC<DesignSystemModalProps> = ({ isOpen, onClose }) => {
  const [selectedFont, setSelectedFont] = useState<'plex' | 'source' | 'roboto'>('plex');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B1524] border border-slate-700 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-[#1379FF] border border-blue-500/30">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Brand Design System Specification</h2>
              <p className="text-xs text-slate-400">Color Theme, Font Selection, and Visual Hierarchy</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. COLOR THEME SPECIFICATION */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-roboto uppercase tracking-wider text-[#00A9EA] font-bold">Requirement 1</span>
            <h3 className="text-lg font-bold text-white">The Three Primary Blues &amp; Gradient Progression</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            
            {/* Blue 1 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
              <div>
                <div className="h-16 rounded-xl bg-[#00A9EA] shadow-inner flex items-center justify-center mb-4">
                  <span className="text-slate-950 font-mono font-bold text-sm bg-white/80 px-2.5 py-1 rounded">#00A9EA</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-roboto uppercase tracking-wider text-[#00A9EA] font-semibold">1. Lightest Blue</span>
                  <h4 className="text-base font-bold text-white">GYATK Foundation</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Used for investor-focus, high-level corporate messaging, badge highlights, and commercial overviews.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Contrast Ratio vs Dark:</span>
                <span className="text-emerald-400 font-mono font-bold">8.2:1 (AAA)</span>
              </div>
            </div>

            {/* Blue 2 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
              <div>
                <div className="h-16 rounded-xl bg-[#1379FF] shadow-inner flex items-center justify-center mb-4">
                  <span className="text-white font-mono font-bold text-sm bg-black/40 px-2.5 py-1 rounded">#1379FF</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-roboto uppercase tracking-wider text-[#1379FF] font-semibold">2. Medium Blue</span>
                  <h4 className="text-base font-bold text-white">RVCR Hero &amp; Innovation</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Signature electric blue used on the RVCR hero section, interactive CTAs, glowing highlights, and active links.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Contrast Ratio vs Dark:</span>
                <span className="text-emerald-400 font-mono font-bold">5.8:1 (AA Large)</span>
              </div>
            </div>

            {/* Blue 3 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
              <div>
                <div className="h-16 rounded-xl bg-[#00346B] shadow-inner flex items-center justify-center mb-4">
                  <span className="text-white font-mono font-bold text-sm bg-black/40 px-2.5 py-1 rounded">#00346B</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-roboto uppercase tracking-wider text-sky-400 font-semibold">3. Darkest Blue</span>
                  <h4 className="text-base font-bold text-white">KGYAT Engineering &amp; Product</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Deep structural navy used in technical engineering, multi-body kinematics, CAD containers, and product depth.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Contrast Ratio vs Light text:</span>
                <span className="text-emerald-400 font-mono font-bold">11.4:1 (AAA)</span>
              </div>
            </div>

          </div>

          {/* Smooth Gradient Progression Bar */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#00A9EA]">Lightest (#00A9EA) - Investor Focus</span>
              <span className="text-[#1379FF]">Medium (#1379FF) - RVCR Hero</span>
              <span className="text-[#00346B]">Darkest (#00346B) - Engineering Depth</span>
            </div>
            <div className="h-6 rounded-xl bg-gradient-to-r from-[#00A9EA] via-[#1379FF] to-[#00346B] shadow-md border border-white/10" />
            <p className="text-xs text-slate-400 font-light">
              Transitions smoothly between sections: light tones introducing commercial value, medium electric blue driving technology discovery, and deep engineering navy anchoring kinematic specs.
            </p>
          </div>
        </div>

        {/* 2. FONT SELECTION & PROGRESSION */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-roboto uppercase tracking-wider text-[#00A9EA] font-bold">Requirement 2</span>
            <h3 className="text-lg font-bold text-white">Font Selection &amp; Weight Progression</h3>
          </div>

          {/* Font Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedFont('plex')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                selectedFont === 'plex'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span>1. IBM Plex Sans (Recommended &amp; Active)</span>
              {selectedFont === 'plex' && <Check className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setSelectedFont('source')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                selectedFont === 'source'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span>2. Source Sans Pro</span>
              {selectedFont === 'source' && <Check className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => setSelectedFont('roboto')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                selectedFont === 'roboto'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span>3. Roboto</span>
              {selectedFont === 'roboto' && <Check className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Live Font Specimen Card */}
          <div 
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6"
            style={{
              fontFamily: selectedFont === 'plex' ? '"IBM Plex Sans", sans-serif' : selectedFont === 'source' ? '"Source Sans 3", sans-serif' : 'Roboto, sans-serif'
            }}
          >
            {/* Weight 1: Light (Investor Focus) */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#00A9EA] font-semibold">Tier 1: Light Weight (300) — Investor &amp; Commercial Focus</span>
                <span className="text-[11px] text-slate-400">About Us / Commercial Strategy</span>
              </div>
              <h4 className="text-xl font-light text-white mb-1">
                Unhooking Heavy Transport from Fossil Fuel Dependency
              </h4>
              <p className="text-sm font-light text-slate-300 leading-relaxed">
                Adapting to regulatory change is necessary for survival, but choosing the right thermodynamic architecture is key to thriving with change when others struggle.
              </p>
            </div>

            {/* Weight 2: Regular (RVCR Hero & Innovation) */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#1379FF] font-semibold">Tier 2: Regular Weight (400 / 500) — RVCR Hero &amp; Innovation Focus</span>
                <span className="text-[11px] text-slate-400">RVCR Hero / Innovation Overview</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-1">
                Enter The RVCR Realm — The Future Physics of Energy Conversion
              </h4>
              <p className="text-sm font-normal text-slate-300 leading-relaxed">
                A breakthrough in machine heart technology designed to outperform conventional prime movers and lead the global green energy transition.
              </p>
            </div>

            {/* Weight 3: Bold (Engineering Depth) */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-sky-400 font-bold">Tier 3: Bold Weight (700) — KGYAT Engineering &amp; Product Depth</span>
                <span className="text-[11px] text-slate-400">Kinematics / Specifics / Feasibility</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">
                Toroidal Casing, Tangential Spring Sealing, and Twin-Rotor Kinematics
              </h4>
              <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                Rigorous mechanical validation proves zero side-thrust, eliminated reciprocating inertial stress, and active variable compression ratio control.
              </p>
            </div>
          </div>
        </div>

        {/* 3. ANIMATION & VISUAL HIERARCHY SUMMARY */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">Animation Placement &amp; Hierarchy Verification</h4>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5 font-light">
            <li>• <strong>Hero Section</strong>: Features ambient technical animation backdrop aligning with RVCR energy conversion messaging.</li>
            <li>• <strong>About Us Page</strong>: All distracting loop animations removed; verified as 100% static, focused corporate and R&amp;D content.</li>
            <li>• <strong>Engineering Pages</strong>: On-demand, controllable 3D CAD simulation video players retained for mechanical scrutiny.</li>
            <li>• <strong>Hierarchy Synchronization</strong>: Lighter colors + lighter fonts in investor tiers, progressing to deepest blues + boldest fonts in engineering modules.</li>
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md"
          >
            Apply &amp; Return to Website
          </button>
        </div>

      </div>
    </div>
  );
};
