import json
import os

with open('src/data/extracted_pages.json', 'r', encoding='utf-8') as f:
    pages_data = json.load(f)

PAGES_CONFIG = {
    'what-is-rvcr': {
        'component': 'WhatIsRvcrPage',
        'subtitle': 'A breakthrough in machine heart tech — The fundamental physics of mechanical energy conversion',
        'category': 'Fundamentals',
        'bgImage': '/assets/images/thought-experimenting-copy-e1696321537498.jpg'
    },
    'rvcr-specifics': {
        'component': 'RvcrSpecificsPage',
        'subtitle': 'Novel component geometries, toroidal casing, bent-piston kinematics, and mechanism comparison',
        'category': 'Architecture',
        'bgImage': '/assets/images/ASSEMBLY_1.jpg'
    },
    'how-rvcr-works': {
        'component': 'HowRvcrWorksPage',
        'subtitle': 'Dynamic twin-rotor sequence, shuttle valve mechanics, fluid control, and variable compression in action',
        'category': 'Mechanics & Dynamics',
        'bgImage': '/assets/images/CP05_casing-e1696327096244.png'
    },
    'rvcr-applications': {
        'component': 'RvcrApplicationsPage',
        'subtitle': 'Prime movers, high-volume fluid handling, hydrogen prime movers, and renewable energy conversion',
        'category': 'Applications',
        'bgImage': '/assets/images/engine4-300x200.jpg'
    },
    'rvcr-feasibility': {
        'component': 'RvcrFeasibilityPage',
        'subtitle': 'Overcoming classic rotary sealing and inertia faults through rigorous kinematic and thermodynamic feasibility',
        'category': 'Engineering Validation',
        'bgImage': '/assets/images/whatwedo-1-1.jpeg'
    },
    'rvcr-viability': {
        'component': 'RvcrViabilityPage',
        'subtitle': 'Techno-commercial viability, dual-level business cases, capital cost analysis, and product realization',
        'category': 'Commercial Strategy',
        'bgImage': '/assets/images/RVCR_hydro_motor.jpg'
    },
    'rvcr-value': {
        'component': 'RvcrValuePage',
        'subtitle': 'Multi-parameter value matrix for equipment OEMs, system integrators, and regulatory compliance',
        'category': 'Value Proposition',
        'bgImage': '/assets/images/green_industy.jpg'
    },
    'broader-impact': {
        'component': 'BroaderImpactPage',
        'subtitle': 'Catalyzing the green fuel economy, hydrogen transition, and drastic carbon footprint reduction',
        'category': 'Climate & Sustainability',
        'bgImage': '/assets/images/steam-engine-1.jpg'
    },
    'strategic-advantages': {
        'component': 'StrategicAdvantagesPage',
        'subtitle': 'Early adoption barriers, sustainable core competency, and leapfrogging incumbent machine manufacturers',
        'category': 'Strategic Roadmap',
        'bgImage': '/assets/images/1475971-popular-technics-wallpaper-1920x1080-1.jpg'
    },
    'about-us': {
        'component': 'AboutUsPage',
        'subtitle': 'GYATK RVCR Apparatus Pvt Ltd — Decades of pioneering R&D, IP generation, and technological innovation',
        'category': 'About GYATK',
        'bgImage': '/assets/images/robotic-vs-human-hand-system-depiction.jpg'
    }
}

def escape_str(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')

for slug, cfg in PAGES_CONFIG.items():
    if slug not in pages_data:
        continue
    page = pages_data[slug]
    blocks = page['blocks']
    
    parts = []
    parts.append("import React from 'react';")
    parts.append("import { PageHero } from '../components/PageHero';")
    parts.append("import { VideoPlayer } from '../components/VideoPlayer';")
    parts.append("import { ContactSection } from '../components/ContactSection';")
    parts.append("import { Link } from 'react-router-dom';")
    parts.append("import { CheckCircle2, ChevronRight } from 'lucide-react';\n")
    parts.append(f"export const {cfg['component']}: React.FC = () => {{")
    parts.append("  return (")
    parts.append('    <div className="bg-slate-950 text-slate-100 min-h-screen">')
    parts.append(f'      <PageHero')
    parts.append(f'        title="{escape_str(page["title"])}"')
    parts.append(f'        subtitle="{escape_str(cfg["subtitle"])}"')
    parts.append(f'        category="{escape_str(cfg["category"])}"')
    parts.append(f'        bgImage="{cfg["bgImage"]}"')
    parts.append('      />\n')
    parts.append('      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">')
    parts.append('        <div className="space-y-16">\n')

    for idx, b in enumerate(blocks):
        heading = b.get('heading', '')
        subheading = b.get('subheading', '')
        paras = b.get('paragraphs', [])
        imgs = b.get('images', [])
        vids = b.get('videos', [])
        list_items = b.get('list', [])

        if not heading and not paras and not imgs and not vids and not list_items:
            continue

        parts.append('          {/* Section Block */}')
        parts.append('          <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">')
        parts.append('            <div className="relative z-10">')

        if heading:
            parts.append('              <div className="mb-6 border-b border-slate-800 pb-4">')
            parts.append(f'                <span className="text-xs font-mono uppercase tracking-widest text-rvcr-blue font-bold">Section {idx + 1:02d}</span>')
            parts.append(f'                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-white mt-1">{escape_str(heading)}</h2>')
            if subheading:
                parts.append(f'                <h3 className="text-lg sm:text-xl text-rvcr-cyan font-medium mt-2">{escape_str(subheading)}</h3>')
            parts.append('              </div>')

        if paras:
            parts.append('              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base max-w-4xl mb-8">')
            for p in paras:
                if p.startswith('###'):
                    st = p.replace('###', '').strip()
                    parts.append(f'                <h4 className="text-lg font-heading text-white mt-4 text-rvcr-cyan">{escape_str(st)}</h4>')
                else:
                    parts.append(f'                <p>{escape_str(p)}</p>')
            parts.append('              </div>')

        if list_items:
            parts.append('              <div className="mb-8 bg-slate-950/70 p-6 rounded-2xl border border-slate-800">')
            parts.append('                <h4 className="text-sm uppercase tracking-wider font-semibold text-rvcr-cyan mb-4">Key Observations & Parameters</h4>')
            parts.append('                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">')
            for li in list_items:
                parts.append(f'                  <li className="flex items-start gap-2.5">')
                parts.append(f'                    <CheckCircle2 className="w-4 h-4 text-rvcr-blue shrink-0 mt-0.5" />')
                parts.append(f'                    <span>{escape_str(li)}</span>')
                parts.append('                  </li>')
            parts.append('                </ul>')
            parts.append('              </div>')

        if vids:
            parts.append('              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">')
            for vid in vids:
                vid_name = vid.split('/')[-1].replace('-', ' ').replace('.m4v', '').replace('.mp4', '').title()
                parts.append('                <VideoPlayer')
                parts.append(f'                  src="{vid}"')
                parts.append(f'                  title="{escape_str(vid_name)}"')
                parts.append('                  caption="Simulation demonstration of mechanical kinematics and gas flow characteristics."')
                parts.append('                />')
            parts.append('              </div>')

        if imgs:
            parts.append('              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">')
            for img in imgs:
                img_src = img['src']
                img_alt = img.get('alt') or heading or "RVCR Schematic"
                parts.append('                <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-2 shadow-xl group">')
                parts.append(f'                  <img src="{img_src}" alt="{escape_str(img_alt)}" className="w-full h-48 sm:h-56 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />')
                parts.append('                  <div className="p-3">')
                parts.append(f'                    <p className="text-xs text-slate-400 font-mono truncate">{escape_str(img_alt)}</p>')
                parts.append('                  </div>')
                parts.append('                </div>')
            parts.append('              </div>')

        parts.append('            </div>')
        parts.append('          </section>\n')

    # Footer navigation
    parts.append('          {/* Related Technology Modules */}')
    parts.append('          <div className="pt-12 border-t border-slate-800">')
    parts.append('            <h3 className="text-xl font-heading text-white mb-6">Explore Other RVCR Technology Modules</h3>')
    parts.append('            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">')
    for p_slug, p_cfg in PAGES_CONFIG.items():
        if p_slug != slug:
            p_title = pages_data.get(p_slug, {}).get('title', p_slug.replace('-', ' ').title())
            parts.append(f'              <Link to="/{p_slug}" className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 text-sm text-slate-300 hover:text-white flex items-center justify-between transition-colors">')
            parts.append(f'                <span>{escape_str(p_title)}</span>')
            parts.append('                <ChevronRight className="w-4 h-4 text-slate-500" />')
            parts.append('              </Link>')
    parts.append('            </div>')
    parts.append('          </div>')

    parts.append('        </div>')
    parts.append('      </div>\n')
    parts.append('      <ContactSection />')
    parts.append('    </div>')
    parts.append('  );')
    parts.append('};')

    out_file = f"src/pages/{cfg['component']}.tsx"
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(parts))
    print(f"Generated {out_file}")

print("All subpages successfully generated!")
