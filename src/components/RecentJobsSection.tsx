import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  DollarSign,
  Bookmark,
  Code,
  Palette,
  BarChart3,
  Zap,
} from 'lucide-react';

interface JobListing {
  id: number;
  title: string;
  company: string;
  category: string;
  jobType: string;
  salary: string;
  location: string;
  postedTime: string;
  icon: React.ReactNode;
  iconBg: string;
}

const jobListings: JobListing[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc',
    category: 'Engineering',
    jobType: 'Full-time',
    salary: '$120k - $160k',
    location: 'San Francisco, CA',
    postedTime: '2 days ago',
    icon: <Code className="w-4 h-4" />,
    iconBg: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Creative Studio Co',
    category: 'Design',
    jobType: 'Full-time',
    salary: '$90k - $130k',
    location: 'New York, NY',
    postedTime: '1 day ago',
    icon: <Palette className="w-4 h-4" />,
    iconBg: 'bg-pink-100',
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'Global Tech Solutions',
    category: 'Management',
    jobType: 'Full-time',
    salary: '$110k - $150k',
    location: 'Remote',
    postedTime: '3 days ago',
    icon: <BarChart3 className="w-4 h-4" />,
    iconBg: 'bg-green-100',
  },
  {
    id: 4,
    title: 'Backend Engineer',
    company: 'Cloud Systems Ltd',
    category: 'Engineering',
    jobType: 'Full-time',
    salary: '$130k - $170k',
    location: 'Austin, TX',
    postedTime: '5 days ago',
    icon: <Zap className="w-4 h-4" />,
    iconBg: 'bg-yellow-100',
  },
];

const RecentJobsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
            >
              Recent Jobs Available
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-sm md:text-base text-gray-600"
            >
              Explore latest opportunities from leading companies
            </motion.p>
          </div>

          {/* View All Button */}
          <motion.button
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6D00B5] text-white text-sm font-semibold hover:bg-[#5a0096] transition-colors duration-300"
          >
            View All
            <span>→</span>
          </motion.button>
        </div>

        {/* Job Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="space-y-3"
        >
          {jobListings.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="group bg-white border border-slate-100 rounded-xl p-4 hover:shadow-md hover:border-slate-200 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Left: Icon & Basic Info */}
                <div className="flex gap-3 flex-1 min-w-0">
                  <div
                    className={`${job.iconBg} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-[#6D00B5]`}
                  >
                    {job.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#6D00B5] transition-colors duration-300 truncate">
                      {job.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-0.5 truncate">
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Middle: Job Details */}
                <div className="hidden md:flex gap-6 flex-1 px-4 border-l border-slate-100">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">Type</p>
                    <p className="text-sm font-semibold text-gray-900">{job.jobType}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">Salary</p>
                    <p className="text-sm font-semibold text-gray-900">{job.salary.split(' - ')[0]}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-0.5">Location</p>
                      <p className="text-sm font-semibold text-gray-900">{job.location}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Time Badge & Actions */}
                <div className="flex items-center justify-between md:justify-end gap-3 flex-shrink-0">
                  <span className="text-xs text-gray-500 flex items-center gap-1 md:order-first">
                    <Clock className="w-3 h-3" />
                    {job.postedTime}
                  </span>
                  
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg border border-slate-200 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all duration-300"
                    aria-label="Bookmark"
                  >
                    <Bookmark className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 bg-[#6D00B5] text-white text-sm font-semibold rounded-lg hover:bg-[#5a0096] transition-colors duration-300 whitespace-nowrap"
                  >
                    Apply
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentJobsSection;
