import { useState } from 'react';
import { motion } from 'framer-motion';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';

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

export default function PostJob() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    tags: '',
    jobRole: '',
    minSalary: '',
    maxSalary: '',
    currency: 'USD',
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
      className="max-w-5xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Post a Job</h1>
        <p className="text-slate-500">Find the best talent for your company</p>
      </motion.div>

      <motion.form
        variants={itemVariants}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
      >
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <InputField
              label="Job Title"
              name="jobTitle"
              placeholder="e.g. Senior React Developer"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <InputField
                label="Tags"
                name="tags"
                placeholder="e.g. React, TypeScript, Node.js"
                value={formData.tags}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SelectField
                label="Job Role"
                name="jobRole"
                value={formData.jobRole}
                onChange={handleChange}
                required
              >
                <option value="">Select job role</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="designer">UI/UX Designer</option>
                <option value="manager">Product Manager</option>
                <option value="devops">DevOps Engineer</option>
              </SelectField>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants}>
              <InputField
                label="Min Salary"
                name="minSalary"
                type="number"
                placeholder="Min"
                value={formData.minSalary}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <InputField
                label="Max Salary"
                name="maxSalary"
                type="number"
                placeholder="Max"
                value={formData.maxSalary}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SelectField
                label="Currency"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </SelectField>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <SelectField
                label="Vacancies"
                name="vacancies"
                value={formData.vacancies}
                onChange={handleChange}
                required
              >
                <option value="">Select vacancies</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10+</option>
              </SelectField>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SelectField
                label="Job Level"
                name="jobLevel"
                value={formData.jobLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select job level</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
                <option value="lead">Lead</option>
                <option value="manager">Manager</option>
                <option value="director">Director</option>
              </SelectField>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <SelectField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="in">India</option>
              </SelectField>
            </motion.div>

            <motion.div variants={itemVariants}>
              <InputField
                label="City"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <TextAreaField
              label="Job Description"
              name="jobDescription"
              placeholder="Describe the job responsibilities, requirements, and benefits..."
              value={formData.jobDescription}
              onChange={handleChange}
              required
              rows={6}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2">
            <motion.button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#6D00B5] text-white font-semibold rounded-xl hover:bg-purple-700"
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(109, 0, 181, 0.3)' }}
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