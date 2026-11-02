import { Metadata } from 'next';
import { SITE_CONFIG, getCanonicalUrl } from './seo';
import { PageMetadataConfig } from '@/types';

/**
 * Production-Grade Next.js Metadata Generator
 * Enforces canonical consistency, Open Graph, Twitter cards, and robots indexing rules.
 */
export function constructPageMetadata({
  title,
  description,
  path,
  image = SITE_CONFIG.ogImage,
  publishedTime,
  modifiedTime,
  noIndex = false,
}: PageMetadataConfig): Metadata {
  const canonical = getCanonicalUrl(path);
  
  // Format clean title without redundant layout template duplication
  const cleanTitle = path === '/' ? SITE_CONFIG.name : `${title} | ${SITE_CONFIG.shortName}`;

  const isStaging = process.env.VERCEL_ENV === 'preview' || process.env.IS_STAGING === 'true';
  const shouldIndex = !noIndex && !isStaging;

  return {
    title: {
      absolute: cleanTitle,
    },
    description: description || SITE_CONFIG.description,
    alternates: {
      canonical,
    },
    robots: {
      index: shouldIndex,
      follow: shouldIndex,
      googleBot: {
        index: shouldIndex,
        follow: shouldIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical,
      title: cleanTitle,
      description: description || SITE_CONFIG.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.shortName,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: cleanTitle,
      description: description || SITE_CONFIG.description,
      images: [image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`],
      creator: '@gyatktech',
    },
  };
}
