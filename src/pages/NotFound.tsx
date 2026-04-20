import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="text-center">
        <div className="text-9xl font-bold text-[#6D00B5] mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          to="/"
          className="inline-block bg-[#6D00B5] hover:bg-[#5a0096] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
