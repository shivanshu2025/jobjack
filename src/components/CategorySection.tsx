import { Wheat, Factory, ShoppingBag, HardHat, Hotel, GraduationCap, DollarSign, Truck, Code2, Stethoscope, Palette, BarChart3 } from 'lucide-react';

const categories = [
  { icon: Code2, label: 'Technology', count: 3240, color: 'bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white' },
  { icon: Stethoscope, label: 'Healthcare', count: 1892, color: 'bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white' },
  { icon: Palette, label: 'Design & Creative', count: 958, color: 'bg-[#f5e6ff] text-[#6D00B5] group-hover:bg-[#6D00B5] group-hover:text-white' },
  { icon: ShoppingBag, label: 'Commerce', count: 2082, color: 'bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white' },
  { icon: HardHat, label: 'Construction', count: 1520, color: 'bg-yellow-50 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white' },
  { icon: Hotel, label: 'Hotels & Tourism', count: 1022, color: 'bg-[#f5e6ff] text-[#6D00B5] group-hover:bg-[#6D00B5] group-hover:text-white' },
  { icon: GraduationCap, label: 'Education', count: 1498, color: 'bg-green-50 text-green-500 group-hover:bg-green-500 group-hover:text-white' },
  { icon: DollarSign, label: 'Finance', count: 1529, color: 'bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white' },
  { icon: Truck, label: 'Transport', count: 1244, color: 'bg-sky-50 text-sky-500 group-hover:bg-sky-500 group-hover:text-white' },
  { icon: BarChart3, label: 'Marketing', count: 867, color: 'bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white' },
  { icon: Factory, label: 'Manufacturing', count: 816, color: 'bg-gray-100 text-gray-600 group-hover:bg-gray-600 group-hover:text-white' },
  { icon: Wheat, label: 'Agriculture', count: 1254, color: 'bg-lime-50 text-lime-600 group-hover:bg-lime-500 group-hover:text-white' },
];

export default function CategorySection() {
  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore thousands of job opportunities across all the leading industries and find the perfect fit for your skills.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, label, count, color }) => (
            <button
              key={label}
              className="group p-5 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl bg-white hover:bg-gray-50 transition-all duration-300 text-left hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${color}`}>
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-gray-900">{label}</h3>
              <p className="text-xs text-[#6D00B5] font-medium">{count.toLocaleString()} jobs</p>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 border-[#6D00B5] text-[#6D00B5] font-semibold rounded-xl hover:bg-[#6D00B5] hover:text-white transition-all duration-200">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
