export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  creator: string;
  publisher: string;
  companyName: string;
  cin: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
    mapsUrl: string;
  };
  social: {
    facebook: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    twitter: string;
  };
}

export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
  children?: NavItem[];
}

export interface PageMetadataConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export interface SectionContent {
  id: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  paragraphs?: string[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    caption?: string;
  };
  video?: {
    src: string;
    title: string;
    caption?: string;
  };
}
