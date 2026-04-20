import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Access 20,000+ job listings',
  'Get matched by AI',
  'One-click apply',
  'Resume builder included',
];

export default function BannerSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-10 py-16 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4a0074]/50 via-gray-900 to-gray-900" />
          <div className="absolute top-0 right-0 w-[600px] h-full opacity-20">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team"
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#9d4edd] font-semibold text-sm uppercase tracking-widest mb-4">For Job Seekers</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Create A Better<br />Future For Yourself
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Join millions of professionals who found their dream job through JobsHub. Sign up free and start your journey today.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-[#9d4edd] shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="px-7 py-3 bg-[#6D00B5] hover:bg-[#7d16d9] text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-[#6D00B5]/30 flex items-center gap-2">
                  Search Jobs <ArrowRight size={16} />
                </button>
                <button className="px-7 py-3 border border-white/20 hover:border-white/50 text-white font-semibold rounded-xl transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Professionals"
                  className="w-full h-72 object-cover rounded-2xl opacity-80"
                />
                <div className="absolute -top-4 -left-4 bg-[#6D00B5] text-white rounded-2xl px-5 py-3 shadow-xl">
                  <div className="text-2xl font-bold">50k+</div>
                  <div className="text-xs opacity-90">Jobs Available Now</div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#6D00B5] to-[#9d4edd] px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Are You an Employer?</h3>
            <p className="text-[#e6ccff] text-sm">Post a job and find the best talent in minutes. No hidden fees.</p>
          </div>
          <button className="shrink-0 px-8 py-3 bg-white text-[#6D00B5] font-bold rounded-xl hover:shadow-xl transition-all hover:-translate-y-0.5">
            Post a Job Free
          </button>
        </div>
      </div>
    </section>
  );
}
