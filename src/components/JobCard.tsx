import { motion } from 'framer-motion';
import { MapPin, DollarSign, Bookmark, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

interface JobCardProps {
  id: string;
  logo?: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  category?: string;
  postedAt?: string;
  index?: number;
}

export default function JobCard({
  id,
  logo,
  title,
  company,
  location,
  salary,
  type,
  category,
  postedAt,
  index = 0,
}: JobCardProps) {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -4 }}
      className="rounded-[2rem] border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white group"
      onClick={() => navigate(`/jobs/${id}`)}
    >
      {/* Top row: Time badge + Bookmark */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-1.5 text-slate-500 text-sm">
          <Clock className="w-4 h-4" />
          {postedAt || 'Recently posted'}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-slate-400 hover:text-[#6D00B5] transition-colors p-1"
          onClick={(e) => e.stopPropagation()}
        >
          <Bookmark className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start gap-5">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7D2FC2] to-[#6D00B5] flex items-center justify-center text-white font-bold text-xl">
            {logo || company.charAt(0)}
          </div>
        </div>

        {/* Job Title & Company */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#6D00B5] transition-colors">{title}</h3>
          <p className="text-slate-600 font-medium">{company}</p>
        </div>

        {/* Metadata Row */}
        <div className="flex flex-wrap gap-3 items-center">
          {category && (
            <span className="px-3 py-1.5 bg-teal-50 text-teal-700 text-sm font-medium rounded-lg">
              {category}
            </span>
          )}
          <span className="px-3 py-1.5 bg-purple-100 text-[#6D00B5] text-sm font-medium rounded-lg">
            {type}
          </span>
          <span className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg">
            {salary}
          </span>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <MapPin className="w-4 h-4" />
            {location}
          </div>
        </div>

        {/* View Details Button - Teal */}
        <div className="lg:w-auto">
          <Button
            variant="teal"
            size="md"
            className="w-full lg:w-auto whitespace-nowrap"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/jobs/${id}`);
            }}
          >
            Job Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
