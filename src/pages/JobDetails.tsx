import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Share2, Home, Send, MapPin } from 'lucide-react';
import Button from '../components/Button';
import JobOverviewCard from '../components/JobOverviewCard';

export default function JobDetails() {
  const { id: _id } = useParams();
  const navigate = useNavigate();

  const jobData = {
    title: 'Senior Frontend Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    salary: '$180K - $220K',
    type: 'Full-time',
    logo: 'SF',
    applicants: 245,
    postedDate: '2 days ago',
    description:
      'We\'re looking for an experienced Frontend Engineer to join our design systems team. You\'ll work on building scalable, accessible UI components used by thousands of developers worldwide. You should have a strong foundation in React, TypeScript, and web performance optimization.',
    responsibilities: [
      'Design and implement scalable React components and design systems',
      'Collaborate with designers and product managers on feature specifications',
      'Optimize application performance and bundle size',
      'Mentor junior engineers and conduct code reviews',
      'Contribute to open-source projects and technical documentation',
      'Participate in architecture discussions and technical planning',
    ],
    requirements: [
      '5+ years of professional Frontend development experience',
      'Expert proficiency with React and TypeScript',
      'Strong understanding of web APIs, HTML5, and CSS',
      'Experience with performance monitoring and optimization',
      'Excellent communication and problem-solving skills',
      'Experience with design systems and component libraries',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health insurance',
      'Unlimited PTO and flexible work arrangements',
      'Professional development budget',
      'Collaborative team environment',
      'Cutting-edge tech stack',
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white"
    >

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Header */}
              <motion.div variants={itemVariants}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7D2FC2] to-[#6D00B5] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {jobData.logo}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">
                      {jobData.title}
                    </h1>
                    <p className="text-lg text-slate-600">{jobData.company}</p>
                  </div>
                </div>
              </motion.div>

              {/* Job Description */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">
                  About the Role
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  {jobData.description}
                </p>
              </motion.div>

              {/* Key Responsibilities */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {jobData.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#6D00B5] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">
                  What We're Looking For
                </h2>
                <ul className="space-y-3">
                  {jobData.requirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#6D00B5] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">
                  What We Offer
                </h2>
                <ul className="space-y-3">
                  {jobData.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#6D00B5] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-5">
              {/* Apply Button - Sticky */}
              <motion.div
                variants={itemVariants}
                className="sticky top-24"
              >
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={() => alert('Apply flow would open here')}
                >
                  Apply Now
                </Button>
              </motion.div>

              {/* Job Overview Card */}
              <motion.div variants={itemVariants}>
                <JobOverviewCard
                  jobTitle={jobData.title}
                  jobType={jobData.type}
                  salary={jobData.salary}
                  company={jobData.company}
                  location={jobData.location}
                  applicants={jobData.applicants}
                  postedDate={jobData.postedDate}
                />
              </motion.div>

              {/* Share Button */}
              <motion.div variants={itemVariants}>
                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  onClick={() => alert('Share functionality would go here')}
                >
                  <Share2 className="w-4 h-4" />
                  Share Job
                </Button>
              </motion.div>

              {/* Map Preview */}
              <motion.div variants={itemVariants} className="rounded-2xl overflow-hidden border border-slate-100">
                <div className="h-32 bg-slate-100 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-slate-400" />
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-slate-500 font-medium">{jobData.location}</p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-100 p-5 bg-white shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">Send Us Message</h3>
                <form
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Message sent!');
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                  <textarea
                    placeholder="Cover Letter"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  />
                  <Button variant="primary" size="md" fullWidth onClick={() => {}}>
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
