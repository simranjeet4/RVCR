import React from 'react';

interface TwoColumnSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftSpan?: number;
  rightSpan?: number;
  className?: string;
  alignItems?: 'center' | 'start';
}

export const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  left,
  right,
  leftSpan = 7,
  rightSpan = 5,
  className = '',
  alignItems = 'center',
}) => {
  const alignClass = alignItems === 'center' ? 'items-center' : 'items-start';

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${alignClass} ${className}`}>
      <div className={`lg:col-span-${leftSpan}`}>{left}</div>
      <div className={`lg:col-span-${rightSpan}`}>{right}</div>
    </div>
  );
};
