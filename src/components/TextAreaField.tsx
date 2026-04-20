import { motion } from 'framer-motion';

interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  rows?: number;
}

export default function TextAreaField({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  rows = 5,
}: TextAreaFieldProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
        {required && <span className="text-[#6D00B5] ml-1">*</span>}
      </label>
      <motion.textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-[#6D00B5] hover:shadow-md focus:border-[#6D00B5] focus:ring-2 focus:ring-purple-300 focus:scale-[1.01] resize-none"
        whileFocus={{ scale: 1.01 }}
      />
    </div>
  );
}