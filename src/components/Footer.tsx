import { Briefcase, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  'For Job Seekers': [
    { label: 'Browse Jobs', to: '/jobs' },
    { label: 'Browse Categories', to: '/jobs' },
    { label: 'Create Resume', to: '#' },
    { label: 'Job Alerts', to: '#' },
    { label: 'Salary Calculator', to: '#' },
  ],
  'For Employers': [
    { label: 'Post a Job', to: '/employers' },
    { label: 'Browse Candidates', to: '/employers' },
    { label: 'Employer Dashboard', to: '#' },
    { label: 'Pricing Plans', to: '#' },
    { label: 'Recruiting Tips', to: '#' },
  ],
  'Company': [
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '#' },
    { label: 'Blog', to: '#' },
    { label: 'Press Kit', to: '#' },
    { label: 'Contact', to: '/contact' },
  ],
  'Support': [
    { label: 'Help Center', to: '#' },
    { label: 'Privacy Policy', to: '#' },
    { label: 'Terms of Service', to: '#' },
    { label: 'Cookie Policy', to: '#' },
    { label: 'Report Issue', to: '#' },
  ],
};

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-[#6D00B5] rounded-lg flex items-center justify-center group-hover:bg-[#7d16d9] transition-colors">
                <Briefcase size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Jobs<span className="text-[#9d4edd]">Hub</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Connecting talent with opportunity. Your next career move starts here.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 hover:text-[#9d4edd] transition-colors cursor-pointer">
                <Mail size={14} className="text-[#6D00B5] shrink-0" />
                hello@jobshub.com
              </div>
              <div className="flex items-center gap-2 hover:text-[#9d4edd] transition-colors cursor-pointer">
                <Phone size={14} className="text-[#6D00B5] shrink-0" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 hover:text-[#9d4edd] transition-colors cursor-pointer">
                <MapPin size={14} className="text-[#6D00B5] shrink-0" />
                San Francisco, CA 94102
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  const isExternal = typeof link.to === 'string' && link.to.startsWith('#');
                  return isExternal ? (
                    <li key={link.label}>
                      <a
                        href={link.to}
                        className="text-sm hover:text-[#9d4edd] transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm hover:text-[#9d4edd] transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} JobsHub. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 bg-gray-800 hover:bg-[#6D00B5] rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
