import { motion, type Variants } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import Button from './Button';
import { useState } from 'react';

interface SidebarFiltersProps {
  onSearchChange?: (value: string) => void;
  onLocationChange?: (value: string) => void;
}

export default function SidebarFilters({
  onSearchChange,
  onLocationChange,
}: SidebarFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedJobType, setSelectedJobType] = useState<string>('');
  const [selectedExperience, setSelectedExperience] = useState<string>('');
  const [salaryRange, setSalaryRange] = useState(100);

  const locations = ['All Locations', 'Remote', 'San Francisco', 'New York', 'London'];
  const categories = [
    { name: 'UI/UX Design', count: 234 },
    { name: 'Programming', count: 567 },
    { name: 'Digital Marketing', count: 189 },
    { name: 'Data Analyst', count: 145 },
    { name: 'Product Manager', count: 321 },
  ];
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];
  const experienceLevels = ['Entry Level', 'Mid Level', 'Senior', 'Lead'];

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const toggleCategory = (name: string) => {
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="rounded-[2rem] border border-slate-100 p-5 bg-white shadow-sm h-fit sticky top-24"
    >
      {/* Search Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 mb-2">Search Jobs</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Job title, keyword..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onSearchChange?.(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Location Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 mb-2">Location</label>
        <div className="relative">
          <select
            value={selectedLocation}
            onChange={(e) => {
              setSelectedLocation(e.target.value);
              onLocationChange?.(e.target.value);
            }}
            className="w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc === 'All Locations' ? '' : loc}>
                {loc}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Category Checkboxes */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 mb-3">Category</label>
        <div className="space-y-2">
          {categories.map((cat) => (
            <motion.label
              key={cat.name}
              whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
              className="flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.name)}
                  onChange={() => toggleCategory(cat.name)}
                  className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-slate-700">{cat.name}</span>
              </div>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                {cat.count}
              </span>
            </motion.label>
          ))}
        </div>
      </div>

      {/* Job Type */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 mb-2">Job Type</label>
        <div className="relative">
          <select
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
            className="w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
          >
            <option value="">All Types</option>
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Experience Level */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 mb-2">Experience Level</label>
        <div className="relative">
          <select
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
          >
            <option value="">All Levels</option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Salary Range Slider */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-900 mb-3">Salary Range</label>
        <div className="px-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-slate-500">$0k</span>
            <span className="text-xs text-slate-500 ml-auto">$200k+</span>
          </div>
          <input
            type="range"
            min={0}
            max={200}
            value={salaryRange}
            onChange={(e) => setSalaryRange(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="mt-2 text-sm font-semibold text-slate-900 text-center">
            ${salaryRange}k+
          </div>
        </div>
      </div>

      {/* Show More Button */}
      <Button
        variant="secondary"
        size="md"
        fullWidth
        className="w-full"
      >
        Show More Filters
      </Button>
    </motion.div>
  );
}
