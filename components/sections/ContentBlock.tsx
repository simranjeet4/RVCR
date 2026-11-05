import React from 'react';

interface ContentBlockProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`bg-white border border-[#e8e7ef] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden ${className}`}
    >
      <div className="relative z-10">
        <header className="mb-6 border-b border-[#e8e7ef] pb-4">
          {eyebrow && (
            <span className="text-xs font-roboto uppercase tracking-widest text-[#cf3367] font-semibold block mb-1">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003461] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <h3 className="text-lg sm:text-xl text-[#003461] mt-2 font-bold">
              {subtitle}
            </h3>
          )}
        </header>

        {children}
      </div>
    </section>
  );
};
