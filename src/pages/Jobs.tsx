import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import JobCard from '../components/JobCard';
import SidebarFilters from '../components/SidebarFilters';

interface Job {
  id: string;
  logo: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  category?: string;
  postedAt?: string;
}

const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    logo: 'SF',
    title: 'Senior Frontend Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    salary: '$180K - $220K',
    type: 'Full-time',
    category: 'Programming',
    postedAt: '10 min ago',
  },
  {
    id: '2',
    logo: 'LI',
    title: 'Product Manager',
    company: 'Linear',
    location: 'Remote',
    salary: '$150K - $190K',
    type: 'Full-time',
    category: 'Product',
    postedAt: '2 hours ago',
  },
  {
    id: '3',
    logo: 'WF',
    title: 'UI/UX Designer',
    company: 'Webflow',
    location: 'New York, NY',
    salary: '$130K - $170K',
    type: 'Full-time',
    category: 'Design',
    postedAt: '5 hours ago',
  },
  {
    id: '4',
    logo: 'LI',
    title: 'Full Stack Engineer',
    company: 'LinkedIn',
    location: 'London, UK',
    salary: '$160K - $200K',
    type: 'Full-time',
    category: 'Programming',
    postedAt: '1 day ago',
  },
  {
    id: '5',
    logo: 'SF',
    title: 'Data Scientist',
    company: 'Stripe',
    location: 'Remote',
    salary: '$170K - $210K',
    type: 'Full-time',
    category: 'Data',
    postedAt: '1 day ago',
  },
  {
    id: '6',
    logo: 'WF',
    title: 'DevOps Engineer',
    company: 'Webflow',
    location: 'San Francisco, CA',
    salary: '$155K - $195K',
    type: 'Contract',
    category: 'Programming',
    postedAt: '2 days ago',
  },
  {
    id: '7',
    logo: 'LI',
    title: 'Head of Design',
    company: 'Linear',
    location: 'Remote',
    salary: '$200K - $250K',
    type: 'Full-time',
    category: 'Design',
    postedAt: '3 days ago',
  },
  {
    id: '8',
    logo: 'SF',
    title: 'Software Engineer',
    company: 'Stripe',
    location: 'New York, NY',
    salary: '$175K - $215K',
    type: 'Full-time',
    category: 'Programming',
    postedAt: '1 week ago',
  },
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  const filteredJobs = useMemo(() => {
    return SAMPLE_JOBS.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation = !selectedLocation || job.location.includes(selectedLocation);

      return matchesSearch && matchesLocation;
    });
  }, [searchTerm, selectedLocation]);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Solid Black Navigation Bar */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white hover:text-slate-300 transition-colors font-medium"
            >
              <Home className="w-5 h-5" />
              Home
            </button>
            <span className="text-white font-bold text-lg">JobsHub</span>
          </div>
        </div>
      </div>

      {/* Black Sub-Header */}
      <motion.section
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-white">Jobs</h1>
              <p className="text-lg text-slate-300 mt-2">
                Discover amazing opportunities at top companies
              </p>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar Filters */}
            <div className="hidden lg:block">
              <SidebarFilters
                onSearchChange={setSearchTerm}
                onLocationChange={setSelectedLocation}
              />
            </div>

            {/* Job List */}
            <div>
              {/* Mobile Filters */}
              <div className="lg:hidden mb-8">
                <SidebarFilters
                  onSearchChange={setSearchTerm}
                  onLocationChange={setSelectedLocation}
                />
              </div>

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-slate-600">
                  Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
                </p>
              </div>

              {/* Job Cards */}
              <div className="space-y-5">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, idx) => (
                    <JobCard key={job.id} {...job} index={idx} />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <p className="text-slate-600 text-lg font-medium">No jobs found</p>
                    <p className="text-slate-500 text-sm mt-1">
                      Try adjusting your filters
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
