import React from 'react';
import Image from 'next/image';

interface ImageContentBlockProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  heightClass?: string;
}

export const ImageContentBlock: React.FC<ImageContentBlockProps> = ({
  src,
  alt,
  caption,
  className = '',
  heightClass = 'h-48 sm:h-56',
}) => {
  return (
    <figure
      className={`rounded-2xl overflow-hidden bg-[#f8fafc] border border-[#e8e7ef] p-2 shadow-sm group hover:border-[#003461]/30 transition-all ${className}`}
    >
      <div className={`relative w-full ${heightClass} overflow-hidden rounded-xl bg-slate-100`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="p-3">
          <p className="text-xs text-[#334155] font-roboto truncate">{caption}</p>
        </figcaption>
      )}
    </figure>
  );
};
