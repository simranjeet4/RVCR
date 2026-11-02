export interface RouteDefinition {
  path: string;
  legacyUrl: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  purpose: string;
  pageType: 'Landing' | 'Technical Article' | 'Engineering Architecture' | 'Corporate' | 'Utility';
  renderingStrategy: 'Static Site Generation' | 'ISR' | 'Dynamic Server Rendering';
  seoPriority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  mustRemainExact: boolean;
  notes?: string;
}

/**
 * Centralized Route Registry for RVCR.tech
 * Guarantees zero hardcoded link discrepancies across navigation, sitemap, and redirects.
 */
export const ROUTES = {
  home: '/',
  whatIsRvcr: '/what-is-rvcr',
  rvcrSpecifics: '/rvcr-specifics',
  howRvcrWorks: '/how-rvcr-works',
  rvcrApplications: '/rvcr-applications',
  rvcrFeasibility: '/rvcr-feasibility',
  rvcrViability: '/rvcr-viability',
  rvcrValue: '/rvcr-value',
  broaderImpact: '/broader-impact',
  strategicAdvantages: '/strategic-advantages',
  aboutUs: '/about-us',
  contact: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;

export const ROUTE_MAP: Record<string, RouteDefinition> = {
  [ROUTES.home]: {
    path: '/',
    legacyUrl: 'https://rvcr.tech/',
    title: 'RVCR | Rotary Variable Compression Ratio',
    shortTitle: 'Home',
    eyebrow: 'Enter The RVCR Realm',
    purpose: 'Core brand positioning, kinematics introduction, executive overview, and ecosystem portal.',
    pageType: 'Landing',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 1.0,
    changeFrequency: 'weekly',
    mustRemainExact: true,
    notes: 'Primary root index of the domain.',
  },
  [ROUTES.whatIsRvcr]: {
    path: '/what-is-rvcr',
    legacyUrl: 'https://rvcr.tech/what-is-rvcr/',
    title: 'What is RVCR',
    shortTitle: 'What is RVCR',
    eyebrow: 'Fundamentals',
    purpose: 'Theoretical and kinematic foundation of rotary variable compression ratio mechanisms.',
    pageType: 'Technical Article',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.9,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Preserves existing WordPress slug exactly.',
  },
  [ROUTES.rvcrSpecifics]: {
    path: '/rvcr-specifics',
    legacyUrl: 'https://rvcr.tech/rvcr-specifics/',
    title: 'RVCR Specifics',
    shortTitle: 'Specifics',
    eyebrow: 'Engineering Architecture',
    purpose: 'Toroidal chamber geometries, bent-piston kinematics, and CAD mechanical breakdown.',
    pageType: 'Engineering Architecture',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.9,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Preserves existing WordPress slug exactly.',
  },
  [ROUTES.howRvcrWorks]: {
    path: '/how-rvcr-works',
    legacyUrl: 'https://rvcr.tech/how-rvcr-works/',
    title: 'How RVCR Works',
    shortTitle: 'How It Works',
    eyebrow: 'Mechanics & Cycle',
    purpose: 'Dynamic twin-rotor sequence, positive displacement phases, and Adams simulation analysis.',
    pageType: 'Engineering Architecture',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.9,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Preserves existing WordPress slug exactly.',
  },
  [ROUTES.rvcrApplications]: {
    path: '/rvcr-applications',
    legacyUrl: 'https://rvcr.tech/rvcr-applications/',
    title: 'RVCR Applications',
    shortTitle: 'Applications',
    eyebrow: 'Applications',
    purpose: 'Prime mover deployment: Green I.C. engines, hydrogen combustion, and ocean/wind power motors.',
    pageType: 'Technical Article',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.8,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Existing WordPress URL uses plural "applications"; preserved exactly.',
  },
  [ROUTES.rvcrFeasibility]: {
    path: '/rvcr-feasibility',
    legacyUrl: 'https://rvcr.tech/rvcr-feasibility/',
    title: 'RVCR Feasibility',
    shortTitle: 'Feasibility',
    eyebrow: 'Engineering Validation',
    purpose: 'Technical validation solving Wankel sealing flaws, rotor inertia, and thermodynamic loss.',
    pageType: 'Engineering Architecture',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.8,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Preserves existing WordPress slug exactly.',
  },
  [ROUTES.rvcrViability]: {
    path: '/rvcr-viability',
    legacyUrl: 'https://rvcr.tech/rvcr-viability/',
    title: 'RVCR Viability',
    shortTitle: 'Viability',
    eyebrow: 'Commercial Viability',
    purpose: 'Commercialization economics, automotive tooling adaptability, and supply chain readiness.',
    pageType: 'Technical Article',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.8,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Preserves existing WordPress slug exactly.',
  },
  [ROUTES.rvcrValue]: {
    path: '/rvcr-value',
    legacyUrl: 'https://rvcr.tech/rvcr-value/',
    title: 'RVCR Value',
    shortTitle: 'Value Proposition',
    eyebrow: 'Economic Value',
    purpose: 'Efficiency metrics, power-to-weight ratio comparisons, and total cost of ownership ROI.',
    pageType: 'Technical Article',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.8,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Preserves existing WordPress slug exactly.',
  },
  [ROUTES.broaderImpact]: {
    path: '/broader-impact',
    legacyUrl: 'https://rvcr.tech/broader-impact/',
    title: 'Broader Impact',
    shortTitle: 'Broader Impact',
    eyebrow: 'Climate & Society',
    purpose: 'Climate recovery response, lower carbon footprint, and global decarbonization contribution.',
    pageType: 'Technical Article',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.8,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Preserves existing WordPress slug exactly.',
  },
  [ROUTES.strategicAdvantages]: {
    path: '/strategic-advantages',
    legacyUrl: 'https://rvcr.tech/strategic-advantages/',
    title: 'Strategic Advantages & R&D',
    shortTitle: 'Strategic Advantages',
    eyebrow: 'Strategic Advantages',
    purpose: 'Early adoption defensibility, patent barriers, post-entry protections, and licensing.',
    pageType: 'Corporate',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.8,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Existing WordPress URL is strategic-advantages; preserved exactly.',
  },
  [ROUTES.aboutUs]: {
    path: '/about-us',
    legacyUrl: 'https://rvcr.tech/about-us/',
    title: 'About Us / RVCR - Tech R & D',
    shortTitle: 'About Us',
    eyebrow: 'Corporate & Research',
    purpose: 'Company history, corporate governance, CIN registration, and engineering leadership.',
    pageType: 'Corporate',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.8,
    changeFrequency: 'monthly',
    mustRemainExact: true,
    notes: 'Preserves existing WordPress slug exactly.',
  },
  [ROUTES.contact]: {
    path: '/contact',
    legacyUrl: 'https://rvcr.tech/#Contact',
    title: 'Contact RVCR & GYATK',
    shortTitle: 'Contact',
    eyebrow: 'Direct Consultation',
    purpose: 'Direct technical consultation desk, technology licensing inquiries, and office location.',
    pageType: 'Utility',
    renderingStrategy: 'Static Site Generation',
    seoPriority: 0.7,
    changeFrequency: 'monthly',
    mustRemainExact: false,
    notes: 'Promoted to dedicated standalone URL while maintaining #Contact anchor on homepage.',
  },
};

/**
 * Global 301 Permanent Redirect Registry
 * Preserves all search engine equity from legacy WordPress URL variations.
 */
export const LEGACY_REDIRECTS = [
  { source: '/home', destination: '/', permanent: true },
  { source: '/home/', destination: '/', permanent: true },
  { source: '/RVCR%20feasibility', destination: '/rvcr-feasibility', permanent: true },
  { source: '/RVCR%20feasibility/', destination: '/rvcr-feasibility', permanent: true },
  { source: '/rvcr-application', destination: '/rvcr-applications', permanent: true },
  { source: '/rvcr-application/', destination: '/rvcr-applications', permanent: true },
  { source: '/research-development', destination: '/strategic-advantages', permanent: true },
  { source: '/research-development/', destination: '/strategic-advantages', permanent: true },
  { source: '/pricing-faq', destination: '/about-us', permanent: true },
  { source: '/pricing-faq/', destination: '/about-us', permanent: true },
  { source: '/wp-content/uploads/2022/11/RVCR-Mechanism-Schematic-representation.pdf', destination: '/assets/documents/RVCR-Mechanism-Schematic-representation.pdf', permanent: true },
];

/**
 * Reusable Navigation Structure for Header & Menus
 */
export const MAIN_NAV_ITEMS = [
  {
    title: 'Home',
    href: ROUTES.home,
    children: [
      { title: 'Kgyat Engine', href: 'https://kgyat.com/engine-subdirectory', isExternal: true },
      { title: 'KGYAT', href: 'https://kgyat.com', isExternal: true },
      { title: 'GYATK', href: 'https://gyatk.com/', isExternal: true },
      { title: 'Patents', href: 'https://gyatk.com/patents', isExternal: true },
    ],
  },
  { title: 'About', href: ROUTES.aboutUs },
  {
    title: 'Stay on Page',
    href: '#',
    children: [
      { title: 'What is RVCR', href: '/#WisR' },
      { title: 'RVCR Specifics', href: '/#specifics' },
      { title: 'How RVCR Works', href: '/#Howworks' },
      { title: 'Application', href: '/#application' },
      { title: 'Feasibility', href: '/#feasibility' },
      { title: 'Viability & Value', href: '/#viability' },
      { title: 'Broader Impact', href: '/#impact' },
      { title: 'Our R&D', href: '/#RVCR-R&D' },
    ],
  },
  { title: 'Blog', href: 'https://www.gyatk.com/blog/', isExternal: true },
  { title: 'Contact', href: '/#Contact' },
];

/**
 * Related Modules Grid for Deep-Dive Navigation on all subpages
 */
export const SUBPAGE_ORDER: RouteKey[] = [
  'whatIsRvcr',
  'rvcrSpecifics',
  'howRvcrWorks',
  'rvcrApplications',
  'rvcrFeasibility',
  'rvcrViability',
  'rvcrValue',
  'broaderImpact',
  'strategicAdvantages',
  'aboutUs',
];
