import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

/**
 * Production Robots.txt Generator
 * Sets strict crawler access directives and links directly to the canonical XML sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  const isStaging = process.env.VERCEL_ENV === 'preview' || process.env.IS_STAGING === 'true';

  if (isStaging) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/assets/documents/*.tmp',
        ],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
