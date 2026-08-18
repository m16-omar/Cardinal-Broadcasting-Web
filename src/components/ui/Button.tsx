import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: 'arrow-right' | 'arrow-up-right' | 'none';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  icon = 'none',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer select-none group relative overflow-hidden active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#9B111E] hover:bg-[#D92039] text-white shadow-lg shadow-[#9B111E]/25 hover:shadow-[#D92039]/40 border border-[#D92039]/40',
    secondary:
      'bg-[#131722] hover:bg-[#1C2233] text-white border border-white/10 hover:border-white/25 shadow-md',
    outline:
      'bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-[#D92039] hover:text-[#D92039]',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white',
    gold:
      'bg-gradient-to-r from-[#C5A880] to-[#E5D3B8] text-[#08090E] hover:opacity-90 font-semibold shadow-lg shadow-[#C5A880]/20',
  };

  const iconElement = (
    <>
      {icon === 'arrow-right' && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {icon === 'arrow-up-right' && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          <span>{children}</span>
          {iconElement}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedStyles}>
        <span>{children}</span>
        {iconElement}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      <span>{children}</span>
      {iconElement}
    </button>
  );
};
