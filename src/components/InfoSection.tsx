import { Users, FileText, Building2, Award, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Building2, value: '12k+', label: 'Clients Worldwide', desc: 'Trusted by companies across 50+ countries globally' },
  { icon: FileText, value: '20k+', label: 'Active Resumes', desc: 'Professionals actively seeking new opportunities' },
  { icon: Users, value: '18k+', label: 'Companies Hiring', desc: 'Top companies looking for talented individuals' },
];

export default function InfoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team at work"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 w-44">
              <div className="flex items-center gap-2 mb-2">
                <Award size={18} className="text-[#6D00B5]" />
                <span className="text-xs font-semibold text-gray-700">Top Rated</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-xs text-gray-500">Placement Rate</div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-[#6D00B5] font-semibold text-sm uppercase tracking-wide mb-3">Why Choose Us</p>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-5">
                Good Life Begins With<br />A Good Company
              </h2>
              <p className="text-gray-500 leading-relaxed">
                We connect ambitious professionals with industry-leading companies. Our platform is built to make job searching faster, smarter, and more effective. Find your dream role today.
              </p>
            </div>

            <div className="grid gap-6">
              {stats.map(({ icon: Icon, value, label, desc }) => (
                <div key={label} className="flex items-start gap-5 group p-4 rounded-2xl hover:bg-[#f5e6ff] transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-[#f5e6ff] group-hover:bg-[#6D00B5] rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon size={22} className="text-[#6D00B5] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-0.5">{value} <span className="text-base font-semibold text-[#6D00B5]">{label}</span></div>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="px-7 py-3 bg-[#6D00B5] hover:bg-[#5a0096] text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-[#6D00B5]/25 flex items-center gap-2">
                Search Jobs <ArrowRight size={16} />
              </button>
              <button className="px-7 py-3 border border-gray-200 hover:border-[#dab3ff] text-gray-700 font-semibold rounded-xl transition-colors hover:text-[#6D00B5]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
