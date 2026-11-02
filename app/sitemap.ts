import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';
import { ROUTE_MAP } from '@/lib/routes';

/**
 * Dynamic Next.js Sitemap Generator (sitemap.xml)
 * 
 * Inclusions:
 * - All canonical, indexable public landing and technology pages.
 * 
 * Strict Exclusions:
 * - 404 / error routes (_not-found)
 * - Internal API routes (/api/*)
 * - Static build trace directories (/_next/*)
 * - 301 legacy redirect aliases (/home, /research-development, /rvcr-application)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(ROUTE_MAP).map((route) => ({
    url: `${SITE_CONFIG.url}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.seoPriority,
  }));
}
