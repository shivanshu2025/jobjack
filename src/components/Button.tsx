import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseClasses =
    'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-[#6D00B5] text-white hover:bg-[#5a0096] disabled:opacity-50',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-50',
    outline: 'border border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
    >
      {children}
    </motion.button>
  );
}
