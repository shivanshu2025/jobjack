import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Senior UX Designer at Adobe',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    text: 'JobsHub completely transformed my career search. Within two weeks of signing up, I had three interviews and landed my dream job at Adobe. The platform is intuitive and the job matching is spot on.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Developer at Stripe',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    text: "I was skeptical at first, but JobsHub proved me wrong. The AI matching connected me with Stripe before they even posted publicly. I couldn't be happier with the outcome.",
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager at Google',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    text: "The best job portal I've used in my 10 years of career. The salary insights and company culture reviews helped me make an informed decision. Found my perfect role at Google in record time.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#6D00B5] font-semibold text-sm uppercase tracking-widest mb-3">Success Stories</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials from Our Customers</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hear from thousands of professionals who found their dream jobs through our platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 cursor-default ${
                i === 1
                  ? 'bg-[#6D00B5] border-[#6D00B5] hover:bg-[#5a0096] hover:border-[#5a0096]'
                  : 'bg-white border-gray-100 hover:border-[#dab3ff] hover:shadow-xl'
              }`}
            >
              <Quote
                size={32}
                className={`mb-4 ${i === 1 ? 'text-[#c77dff]' : 'text-[#e6ccff]'}`}
              />
              <p className={`text-sm leading-relaxed mb-6 ${i === 1 ? 'text-white/90' : 'text-gray-600'}`}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white"
                />
                <div>
                  <div className={`font-semibold text-sm ${i === 1 ? 'text-white' : 'text-gray-900'}`}>{t.name}</div>
                  <div className={`text-xs ${i === 1 ? 'text-[#e6ccff]' : 'text-gray-500'}`}>{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className={`fill-current ${i === 1 ? 'text-yellow-300' : 'text-yellow-400'}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-[#6D00B5]' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
