import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | RVCR',
  description: 'The requested page could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-md text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#cf3367] block font-roboto">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#003461] tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-[#334155] leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-md hover:shadow-lg transition-all"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
