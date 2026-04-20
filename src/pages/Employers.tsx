import { useState } from 'react';
import { motion } from 'framer-motion';
import EmployerCard from '../components/EmployerCard';
import PostJob from './PostJob';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Employers() {
  const [showPostJob, setShowPostJob] = useState(false);

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {!showPostJob ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-3">For Employers</h1>
              <p className="text-lg text-slate-500">Find and hire the best talent for your organization</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div variants={itemVariants}>
                <EmployerCard
                  title="Post a Job"
                  description="Reach thousands of qualified candidates and find the perfect hire for your team."
                  buttonText="Get Started"
                  onClick={() => setShowPostJob(true)}
                  variant="primary"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <EmployerCard
                  title="Browse Candidates"
                  description="Search through our database of vetted professionals ready for their next opportunity."
                  buttonText="Search Now"
                  variant="secondary"
                />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <PostJob />
        )}
      </div>
    </section>
  );
}