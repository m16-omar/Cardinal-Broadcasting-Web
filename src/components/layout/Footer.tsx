import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { companyDetails } from '../../data/company';

export const Footer: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 0 0 1.4-1.4 1.4 1.4 0 0 0-1.4-1.4 1.4 1.4 0 0 0-1.4 1.4 1.4 1.4 0 0 0 1.4 1.4m1.4 9.74v-8.37H5.07v8.37h2.79Z" />
          </svg>
        );
      case 'Twitter':
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'Instagram':
        return (
          <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case 'Facebook':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'Youtube':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return <Radio className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#06070A] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-slate-200 dark:border-white/10">
          {/* Column 1: Institutional Identity (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none inline-flex"
              aria-label="Cardinal Broadcasting Limited Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9B111E] via-[#D92039] to-[#800A15] p-0.5 shadow-lg shadow-[#9B111E]/20 flex items-center justify-center">
                <div className="w-full h-full bg-[#08090E] rounded-[10px] flex items-center justify-center">
                  <Radio className="w-5 h-5 text-[#D92039]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                  CARDINAL
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase mt-0.5">
                  Broadcasting Limited
                </span>
              </div>
            </Link>

            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {companyDetails.footerStatement}
            </p>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
              {companyDetails.shortDescription}
            </p>

            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D92039] shrink-0" />
                <span>{companyDetails.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D92039] shrink-0" />
                <span>{companyDetails.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D92039] shrink-0" />
                <span>{companyDetails.contact.phone}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {companyDetails.social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-white/5 border border-slate-300/70 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-white hover:bg-[#9B111E] dark:hover:bg-[#9B111E] hover:border-[#9B111E] transition-all duration-300"
                >
                  {getSocialIcon(item.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyDetails.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Brands */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Our Brands
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyDetails.footerLinks.brands.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#D92039] transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Initiatives */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Initiatives
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyDetails.footerLinks.initiatives.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#D92039] hover:text-[#E0354E] font-medium transition-colors duration-200 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D92039] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-200 dark:border-white/5 space-y-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                Corporate Domain
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">
                cardinalbroadcasting.org
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Cardinal Broadcasting Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer">
              Editorial Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
