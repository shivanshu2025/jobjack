import { motion } from 'framer-motion';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
}

export default function InputField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
}: InputFieldProps) {
  return (
    <div className={`group ${className}`}>
      <label className="block text-sm font-medium text-slate-700 mb-1.5 transition-colors duration-200 group-focus-within:text-[#6D00B5]">
        {label}
        {required && <span className="text-[#6D00B5] ml-1">*</span>}
      </label>
      <motion.input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-[#6D00B5]/50 hover:shadow-[0_2px_8px_rgba(109,0,181,0.08)] focus:border-[#6D00B5] focus:ring-2 focus:ring-[#6D00B5]/20"
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}