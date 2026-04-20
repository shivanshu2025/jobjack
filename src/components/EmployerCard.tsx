import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

interface EmployerCardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const iconMap = {
  primary: Briefcase,
  secondary: Users,
};

export default function EmployerCard({
  title,
  description,
  buttonText,
  onClick,
  variant = 'primary',
}: EmployerCardProps) {
  const Icon = iconMap[variant];

  return (
    <motion.div
      className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-hidden group cursor-pointer"
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(109, 0, 181, 0.12)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Subtle gradient accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6D00B5]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6D00B5] to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="relative w-12 h-12 rounded-xl bg-[#6D00B5]/10 flex items-center justify-center mb-4 group-hover:bg-[#6D00B5]/15 transition-colors duration-300">
        <Icon className="w-6 h-6 text-[#6D00B5]" />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 mb-6 leading-relaxed text-sm">
          {description}
        </p>

        <motion.button
          onClick={onClick}
          className="bg-[#6D00B5] text-white font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-purple-700 transition-colors duration-200"
          whileHover={{
            scale: 1.03,
            boxShadow: '0 8px 24px rgba(109, 0, 181, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
}