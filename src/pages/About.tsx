export default function About() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About JobsHub</h1>
          <p className="text-xl text-gray-600">Building the future of work</p>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              JobsHub is dedicated to connecting talented professionals with opportunities that align with their skills, values, and aspirations. We believe in empowering both job seekers and employers to build meaningful career connections.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="space-y-3 text-lg text-gray-600">
              <li className="flex items-center gap-3">
                <span className="text-[#6D00B5] font-bold">✓</span>
                Transparency and trust in all relationships
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#6D00B5] font-bold">✓</span>
                Equal opportunity for all candidates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#6D00B5] font-bold">✓</span>
                Continuous innovation and improvement
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#6D00B5] font-bold">✓</span>
                Community-driven growth
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
