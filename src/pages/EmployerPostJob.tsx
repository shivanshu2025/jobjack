import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/Input';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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
    transition: { duration: 0.4 },
  },
};

export default function EmployerPostJob() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    tags: '',
    jobRole: '',
    minSalary: '',
    maxSalary: '',
    currency: 'USD',
    salaryType: 'yearly',
    vacancies: '',
    jobLevel: '',
    country: '',
    city: '',
    jobDescription: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posted:', formData);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Post a Job</h1>
        <p className="text-slate-600">Find the best talent for your company</p>
      </motion.div>

      <motion.form
        variants={itemVariants}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
      >
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <Input
              label="Job Title"
              name="jobTitle"
              placeholder="e.g. Senior React Developer"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Input
                label="Tags"
                name="tags"
                placeholder="e.g. React, TypeScript, Node.js"
                value={formData.tags}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label="Job Role"
                name="jobRole"
                placeholder="Select job role"
                type="select"
                value={formData.jobRole}
                onChange={handleChange}
              >
                <option value="">Select job role</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="designer">UI/UX Designer</option>
                <option value="manager">Product Manager</option>
                <option value="devops">DevOps Engineer</option>
              </Input>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants}>
              <Input
                label="Min Salary"
                name="minSalary"
                type="number"
                placeholder="Min"
                value={formData.minSalary}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label="Max Salary"
                name="maxSalary"
                type="number"
                placeholder="Max"
                value={formData.maxSalary}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label="Currency"
                name="currency"
                type="select"
                value={formData.currency}
                onChange={handleChange}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </Input>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Input
                label="Vacancies"
                name="vacancies"
                type="select"
                placeholder="Select vacancies"
                value={formData.vacancies}
                onChange={handleChange}
              >
                <option value="">Select vacancies</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10+</option>
              </Input>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label="Job Level"
                name="jobLevel"
                type="select"
                placeholder="Select job level"
                value={formData.jobLevel}
                onChange={handleChange}
              >
                <option value="">Select job level</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
                <option value="lead">Lead</option>
                <option value="manager">Manager</option>
                <option value="director">Director</option>
              </Input>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Input
                label="Country"
                name="country"
                type="select"
                placeholder="Select country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="in">India</option>
              </Input>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label="City"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <Input
              label="Job Description"
              name="jobDescription"
              type="textarea"
              placeholder="Describe the job responsibilities, requirements, and benefits..."
              value={formData.jobDescription}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <motion.button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#6D00B5] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Post Job
            </motion.button>
          </motion.div>
        </div>
      </motion.form>
    </motion.div>
  );
}