import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Find Jobs', to: '/jobs' },
  { label: 'Employers', to: '/employers' },
  { label: 'About Us', to: '/about' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
     <Link to="/" className="flex items-center gap-2 group">
  <div className="w-9 h-9 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-slate-200 group-hover:scale-105 transition">
    
<img
  src="/assets/img/logo.png"
  alt="JobJet Logo"
  className="w-6 h-6 object-contain"
/>
</Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-gray-600 hover:text-[#6D00B5] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6D00B5] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-medium text-[#6D00B5] border border-[#6D00B5] rounded-lg hover:bg-[#f5e6ff] transition-colors"
          >
            Contact Us
          </Link>
          <a
            href="#login"
            className="px-5 py-2 text-sm font-medium text-white bg-[#6D00B5] rounded-lg hover:bg-[#5a0096] transition-colors shadow-sm hover:shadow-md"
          >
            Login
          </a>
        </div>

        <button
          className="md:hidden text-gray-700 hover:text-[#6D00B5] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-gray-600 hover:text-[#6D00B5] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2 border-t border-gray-100">
            <Link to="/contact" className="flex-1 text-center px-4 py-2 text-sm font-medium text-[#6D00B5] border border-[#6D00B5] rounded-lg">
              Contact Us
            </Link>
            <a href="#login" className="flex-1 text-center px-4 py-2 text-sm font-medium text-white bg-[#6D00B5] rounded-lg">
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
