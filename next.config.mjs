/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Normalized URLs: Next.js standard is trailingSlash: false (canonical without trailing slash)
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days image cache
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gyatk.com',
      },
      {
        protocol: 'https',
        hostname: 'kgyat.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/RVCR%20feasibility',
        destination: '/rvcr-feasibility',
        permanent: true,
      },
      {
        source: '/RVCR%20feasibility/',
        destination: '/rvcr-feasibility',
        permanent: true,
      },
      // Ensure both singular and plural forms resolve to canonical /rvcr-applications
      {
        source: '/rvcr-application',
        destination: '/rvcr-applications',
        permanent: true,
      },
      {
        source: '/rvcr-application/',
        destination: '/rvcr-applications',
        permanent: true,
      },
      // Ensure research-development resolves to canonical /strategic-advantages
      {
        source: '/research-development',
        destination: '/strategic-advantages',
        permanent: true,
      },
      {
        source: '/research-development/',
        destination: '/strategic-advantages',
        permanent: true,
      },
      // Legacy WordPress pricing-faq
      {
        source: '/pricing-faq',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/pricing-faq/',
        destination: '/about-us',
        permanent: true,
      },
      // Legacy WordPress media upload path for mechanism schematic
      {
        source: '/wp-content/uploads/2022/11/RVCR-Mechanism-Schematic-representation.pdf',
        destination: '/assets/documents/RVCR-Mechanism-Schematic-representation.pdf',
        permanent: true,
      },
    ];
  },
  async headers() {
    const isStaging = process.env.VERCEL_ENV === 'preview' || process.env.IS_STAGING === 'true';
    const securityHeaders = [
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      ...(isStaging
        ? [
            {
              key: 'X-Robots-Tag',
              value: 'noindex, nofollow',
            },
          ]
        : []),
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
