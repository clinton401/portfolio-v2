import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseClasses = 'px-3 py-1 rounded-full text-xs font-medium';
  const variantClasses = variant === 'accent' 
    ? 'bg-[var(--accent-1)]/10 text-[var(--accent-1)] border border-[var(--accent-1)]/20'
    : 'bg-white/5 text-[var(--muted)] border border-white/10';

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};