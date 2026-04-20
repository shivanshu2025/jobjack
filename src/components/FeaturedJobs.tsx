import { MapPin, Clock, DollarSign, Bookmark, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Frontend Developer',
    company: 'Stripe Inc.',
    companyLetter: 'S',
    companyColor: 'bg-[#f5e6ff] text-[#6D00B5]',
    location: 'San Francisco, USA',
    type: 'Full Time',
    salary: '$110k–$140k',
    category: 'Technology',
    posted: '2 days ago',
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=40&h=40&fit=crop',
  },
  {
    title: 'Product Designer',
    company: 'Figma',
    companyLetter: 'F',
    companyColor: 'bg-rose-100 text-rose-600',
    location: 'Remote',
    type: 'Remote',
    salary: '$90k–$120k',
    category: 'Design',
    posted: '1 day ago',
  },
  {
    title: 'Data Scientist',
    company: 'Netflix',
    companyLetter: 'N',
    companyColor: 'bg-red-100 text-red-600',
    location: 'Los Angeles, USA',
    type: 'Full Time',
    salary: '$130k–$160k',
    category: 'Data',
    posted: '3 days ago',
  },
  {
    title: 'DevOps Engineer',
    company: 'Slack',
    companyLetter: 'S',
    companyColor: 'bg-blue-100 text-blue-600',
    location: 'New York, USA',
    type: 'Hybrid',
    salary: '$100k–$130k',
    category: 'Technology',
    posted: '5 hours ago',
  },
  {
    title: 'Marketing Manager',
    company: 'Asana',
    companyLetter: 'A',
    companyColor: 'bg-pink-100 text-pink-600',
    location: 'Austin, USA',
    type: 'Full Time',
    salary: '$80k–$100k',
    category: 'Marketing',
    posted: '1 week ago',
  },
  {
    title: 'UX Researcher',
    company: 'Notion',
    companyLetter: 'N',
    companyColor: 'bg-gray-100 text-gray-700',
    location: 'Remote',
    type: 'Contract',
    salary: '$70k–$90k',
    category: 'Design',
    posted: '2 days ago',
  },
];

const typeColors: Record<string, string> = {
  'Full Time': 'bg-[#f5e6ff] text-[#6D00B5]',
  'Remote': 'bg-blue-50 text-blue-600',
  'Hybrid': 'bg-orange-50 text-orange-600',
  'Contract': 'bg-gray-100 text-gray-600',
};

export default function FeaturedJobs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Jobs</h2>
            <p className="text-gray-500">Hand-picked opportunities from top companies</p>
          </div>
          <button className="flex items-center gap-2 text-[#6D00B5] font-semibold hover:gap-3 transition-all">
            Browse All Jobs <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#dab3ff] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shrink-0 ${job.companyColor}`}>
                  {job.companyLetter}
                </div>
                <button className="w-8 h-8 rounded-lg text-gray-300 hover:text-[#6D00B5] hover:bg-[#f5e6ff] flex items-center justify-center transition-colors">
                  <Bookmark size={16} />
                </button>
              </div>

              <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-[#6D00B5] transition-colors">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{job.company}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg ${typeColors[job.type] || 'bg-gray-100 text-gray-600'}`}>
                  <Clock size={11} /> {job.type}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600">
                  <MapPin size={11} /> {job.location}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-green-50 text-green-600">
                  <DollarSign size={11} /> {job.salary}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">{job.posted}</span>
                <button className="text-xs font-semibold text-[#6D00B5] hover:text-[#5a0096] transition-colors">
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
