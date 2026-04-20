import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  DollarSign,
  Calendar,
  Users,
} from 'lucide-react';

interface JobOverviewCardProps {
  jobTitle: string;
  jobType: string;
  salary: string;
  company: string;
  location: string;
  applicants?: number;
  postedDate?: string;
}

export default function JobOverviewCard({
  jobTitle,
  jobType,
  salary,
  company,
  location,
  applicants = 0,
  postedDate = 'Recently posted',
}: JobOverviewCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const overviewItems = [
    {
      icon: Briefcase,
      label: 'Job Type',
      value: jobType,
    },
    {
      icon: DollarSign,
      label: 'Salary',
      value: salary,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: location,
    },
    {
      icon: Users,
      label: 'Applicants',
      value: `${applicants}+`,
    },
    {
      icon: Calendar,
      label: 'Posted',
      value: postedDate,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="rounded-2xl border border-slate-100 p-5 bg-white shadow-sm"
    >
      <h3 className="font-bold text-slate-900 mb-4">Job Overview</h3>

      <div className="space-y-4">
        {overviewItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-1">
                <Icon className="w-5 h-5 text-[#6D00B5]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-1">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
