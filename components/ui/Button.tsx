import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'navy' | 'outline' | 'crimson' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gradient',
  size = 'md',
  href,
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold uppercase tracking-wider rounded transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    gradient: 'text-white btn-gyatk-gradient shadow-md hover:shadow-lg focus:ring-[#753a88]',
    navy: 'text-white bg-[#003461] hover:bg-[#002242] shadow-md hover:shadow-lg focus:ring-[#003461]',
    outline: 'text-[#003461] border border-[#003461] hover:bg-[#003461] hover:text-white focus:ring-[#003461]',
    crimson: 'text-white bg-[#CF3367] hover:bg-[#B82357] shadow-sm hover:shadow focus:ring-[#CF3367]',
    ghost: 'text-[#334155] hover:text-[#003461] hover:bg-slate-100 focus:ring-slate-300',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-6 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-8 py-3.5 gap-2.5',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (isExternal || href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
