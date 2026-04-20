import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, TrendingUp, Users, Building2 } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

const suggestions = ['UI/UX', 'Programming', 'Digital Marketing', 'Data Analyst', 'Product Manager'];

const stats = [
  { icon: TrendingUp, value: '12k+', label: 'Live Jobs' },
  { icon: Users, value: '50k+', label: 'Job Seekers' },
  { icon: Building2, value: '8k+', label: 'Companies' },
];

export default function HeroSection() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-[#f5e6ff]/30 to-[#e6ccff]/20">
      <ThreeCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#f5e6ff] border border-[#dab3ff] rounded-full px-4 py-1.5 text-sm text-[#5a0096] font-medium">
              <span className="w-2 h-2 bg-[#6D00B5] rounded-full animate-pulse" />
              2,000+ New Jobs Added This Week
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find a Job That
              <span className="block text-[#6D00B5]">Aligns With Your</span>
              Interests & Skills
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              Thousands of jobs in all the leading sectors are waiting for you. Start your career journey today.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-2 flex flex-col sm:flex-row gap-2"
            >
              <motion.div
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group"
              >
                <Search size={18} className="text-gray-400 group-hover:text-[#6D00B5] transition-colors shrink-0" />
                <input
                  type="text"
                  placeholder="Job Title or Keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
                />
              </motion.div>
              <div className="w-px bg-gray-200 hidden sm:block" />
              <motion.div
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group"
              >
                <MapPin size={18} className="text-gray-400 group-hover:text-[#6D00B5] transition-colors shrink-0" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#6D00B5] hover:bg-[#5a0096] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#6D00B5]/25"
              >
                Find Job
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
            >
              <span>Popular:</span>
              {suggestions.map((s, idx) => (
                <motion.button
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(109, 0, 181, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setKeyword(s)}
                  className="text-[#6D00B5] hover:text-[#5a0096] font-medium px-3 py-1 rounded-full bg-[#f5e6ff]/50 hover:bg-[#f5e6ff] transition-all"
                >
                  {s}
                </motion.button>
              ))}
            </motion.div>

            <div className="flex items-center gap-8 pt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#f5e6ff] rounded-xl flex items-center justify-center group-hover:bg-[#6D00B5] transition-colors">
                    <Icon size={18} className="text-[#6D00B5] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-500">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[520px]">
              <div className="absolute top-8 right-8 w-72 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm">G</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Senior UX Designer</div>
                    <div className="text-xs text-gray-400">Google Inc.</div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-[#f5e6ff] text-[#6D00B5] px-2 py-1 rounded-lg">Full Time</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">Remote</span>
                  <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-lg">$120k/yr</span>
                </div>
              </div>

              <div className="absolute top-40 left-0 w-64 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#f5e6ff] rounded-xl flex items-center justify-center text-[#6D00B5] font-bold text-sm">M</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">React Developer</div>
                    <div className="text-xs text-gray-400">Microsoft</div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-[#f5e6ff] text-[#6D00B5] px-2 py-1 rounded-lg">Full Time</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">Hybrid</span>
                </div>
              </div>

              <div className="absolute bottom-16 right-4 w-72 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600 font-bold text-sm">A</div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Product Manager</div>
                    <div className="text-xs text-gray-400">Amazon</div>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                  <div className="bg-[#6D00B5] h-1.5 rounded-full w-3/4" />
                </div>
                <div className="text-xs text-gray-400">48 applicants / 65 slots</div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#6D00B5]/10 rounded-full animate-ping opacity-30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#6D00B5] rounded-full flex items-center justify-center shadow-lg shadow-[#6D00B5]/40">
                <Search size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
