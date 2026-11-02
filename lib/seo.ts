import { SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: 'RVCR | Rotary Variable Compression Ratio',
  shortName: 'RVCR',
  tagline: 'IP Owner & Commercialisation Lead for RVCR.',
  description:
    'A breakthrough in machine heart tech. The future physics of energy conversion, variable compression ratio rotary mechanics and zero-carbon primemovers.',
  url: 'https://rvcr.tech',
  ogImage: '/assets/images/hero-zero-carbon.jpg',
  creator: 'GYATK RVCR Apparatus Pvt Ltd',
  publisher: 'GYATK RVCR Apparatus Pvt Ltd',
  companyName: 'GYATK RVCR Apparatus Pvt Ltd',
  cin: 'U73100KL2005PTC017897',
  address: {
    street: 'Kochi',
    city: 'Kochi',
    state: 'Kerala',
    country: 'India',
  },
  contact: {
    email: 'info@gyatk.com',
    phone: '+91 7403008844',
    mapsUrl: 'https://goo.gl/maps/Q4nJaKCPBJxrGaJJA',
  },
  social: {
    facebook: 'https://www.facebook.com/gyatk.technologies',
    linkedin: 'https://www.linkedin.com/company/gyatk',
    instagram: 'https://www.instagram.com/gyatk.technologies/',
    youtube: 'https://www.youtube.com/@gyatk4479',
    twitter: 'https://twitter.com/gyatktech',
  },
};

/**
 * Returns strict, normalized canonical URL without trailing slash (except root)
 */
export function getCanonicalUrl(path = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.url}${cleanPath === '/' ? '' : cleanPath.replace(/\/+$/, '')}`;
}

/**
 * Schema.org Organization Structured Data
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.companyName,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/assets/images/gyatk-logo.png`,
      caption: SITE_CONFIG.companyName,
    },
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      addressCountry: SITE_CONFIG.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phone,
      contactType: 'technical support',
      email: SITE_CONFIG.contact.email,
      availableLanguage: ['English'],
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.twitter,
    ],
  };
}

/**
 * Schema.org WebSite Structured Data
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    inLanguage: 'en-US',
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Schema.org BreadcrumbList Structured Data
 * Directly reflects visible breadcrumbs on page heroes.
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export interface TechArticleSchemaProps {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

/**
 * Schema.org TechArticle Structured Data for engineering research pages
 */
export function generateTechArticleSchema({
  headline,
  description,
  path,
  image = SITE_CONFIG.ogImage,
  datePublished = '2024-01-01T00:00:00Z',
  dateModified = new Date().toISOString(),
}: TechArticleSchemaProps) {
  const canonical = getCanonicalUrl(path);
  const imageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${canonical}#article`,
    headline,
    description,
    url: canonical,
    image: imageUrl,
    datePublished,
    dateModified,
    inLanguage: 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    author: {
      '@type': 'Person',
      name: 'Er. Ajee Kamath',
      jobTitle: 'Chief Inventor & Mechanical Engineer',
      worksFor: {
        '@id': `${SITE_CONFIG.url}/#organization`,
      },
    },
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
  };
}
