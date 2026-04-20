import { motion } from 'framer-motion';

interface SelectFieldProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function SelectField({
  label,
  name,
  value,
  onChange,
  required = false,
  className = '',
  children,
}: SelectFieldProps) {
  return (
    <div className={`group ${className}`}>
      <label className="block text-sm font-medium text-slate-700 mb-1.5 transition-colors duration-200 group-focus-within:text-[#6D00B5]">
        {label}
        {required && <span className="text-[#6D00B5] ml-1">*</span>}
      </label>
      <motion.select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200 hover:border-[#6D00B5]/50 hover:shadow-[0_2px_8px_rgba(109,0,181,0.08)] focus:border-[#6D00B5] focus:ring-2 focus:ring-[#6D00B5]/20 cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%236b7280%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat"
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.select>
    </div>
  );
}