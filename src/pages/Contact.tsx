export default function Contact() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you. Get in touch with our team.</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6D00B5] focus:ring-2 focus:ring-[#6D00B5]/10 outline-none transition"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6D00B5] focus:ring-2 focus:ring-[#6D00B5]/10 outline-none transition"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6D00B5] focus:ring-2 focus:ring-[#6D00B5]/10 outline-none transition"
              placeholder="Tell us how we can help..."
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-[#6D00B5] hover:bg-[#5a0096] text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-12 pt-8 border-t border-gray-200 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">hello@jobshub.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">San Francisco, CA 94102</p>
          </div>
        </div>
      </div>
    </section>
  );
}
