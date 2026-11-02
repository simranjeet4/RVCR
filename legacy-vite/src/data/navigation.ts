export interface NavItem {
  title: string;
  path: string;
  isExternal?: boolean;
  description?: string;
}

export const TECH_PAGES: NavItem[] = [
  {
    title: 'What is RVCR',
    path: '/what-is-rvcr',
    description: 'A breakthrough in machine heart tech and future physics of energy conversion.'
  },
  {
    title: 'RVCR Specifics',
    path: '/rvcr-specifics',
    description: 'A new configuration of rotary piston mechanics with toroidal casing & bent-piston.'
  },
  {
    title: 'How RVCR Works',
    path: '/how-rvcr-works',
    description: 'Perceive rotating curved piston with cam-actuated shuttle valve & variable compression.'
  },
  {
    title: 'RVCR Applications',
    path: '/rvcr-applications',
    description: 'Prime movers, Fluid Handling Machines, and renewable energy motor systems.'
  },
  {
    title: 'RVCR Feasibility',
    path: '/rvcr-feasibility',
    description: 'Comprehensive kinematic, thermodynamic, and mechanical engineering validations.'
  },
  {
    title: 'RVCR Viability',
    path: '/rvcr-viability',
    description: 'Techno-commercial viability, 2-level business cases, and product realization.'
  },
  {
    title: 'RVCR Value',
    path: '/rvcr-value',
    description: 'Unmatched technological & industrial parameters for manufacturers and regulators.'
  },
  {
    title: 'Broader Impact',
    path: '/broader-impact',
    description: 'Shaping green transport, zero-carbon fuel transitions, and climate recovery.'
  },
  {
    title: 'Strategic Advantages',
    path: '/strategic-advantages',
    description: 'Early adoption leverage, core competency development, and market leapfrogging.'
  },
];

export const MAIN_NAV: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'About Us / R&D', path: '/about-us' },
  { title: 'Gallery', path: 'https://www.gyatk.com/gallery/', isExternal: true },
  { title: 'Blog', path: 'https://www.gyatk.com/blog/', isExternal: true },
  { title: 'FAQ', path: 'https://test.kgyat.com/repository/FAQ.html', isExternal: true },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/gyatk.technologies', icon: 'Facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/gyatk.technologies/', icon: 'Instagram' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/gyatk', icon: 'Linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/gyatktech', icon: 'Twitter' },
  { name: 'YouTube', url: 'https://www.youtube.com/@gyatk4479', icon: 'Youtube' },
];

export const CONTACT_INFO = {
  phone: '+91 74030 08844',
  phoneHref: 'tel:+917403008844',
  email: 'info@gyatk.com',
  emailHref: 'mailto:info@gyatk.com',
  company: 'GYATK RVCR Apparatus Pvt Ltd, India',
  cin: 'U73100KL2005PTC017897',
  mapUrl: 'https://goo.gl/maps/Q4nJaKCPBJxrGaJJA',
  address: 'Kochi, Kerala, India'
};
