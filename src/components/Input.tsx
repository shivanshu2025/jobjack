import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  name?: string;
  required?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required = false,
  className = '',
  children,
}: InputProps) {
  const inputClasses =
    'w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-[#6D00B5] hover:shadow-md focus:border-[#6D00B5] focus:ring-2 focus:ring-[#6D00B5]/30 focus:scale-[1.01]';

  const labelClasses =
    'block text-sm font-medium text-slate-700 mb-2 transition-colors duration-200';

  return (
    <motion.div
      className={className}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {label && <label className={labelClasses}>{label}</label>}
      {type === 'textarea' ? (
        <motion.textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${inputClasses} min-h-[160px] resize-none`}
          whileFocus={{ scale: 1.01 }}
        />
      ) : type === 'select' ? (
        <motion.select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${inputClasses} cursor-pointer appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")] bg-[length:1.5rem] bg-[right_0.75rem_center] bg-no-repeat`}
          whileFocus={{ scale: 1.01 }}
        >
          {children}
        </motion.select>
      ) : (
        <motion.input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
          whileFocus={{ scale: 1.01 }}
        />
      )}
    </motion.div>
  );
}