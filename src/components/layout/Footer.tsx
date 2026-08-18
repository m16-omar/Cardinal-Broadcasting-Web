import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Radio, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import { companyDetails } from '../../data/company';

export const Footer: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'Facebook':
        return <Facebook className="w-4 h-4" />;
      case 'Youtube':
        return <Youtube className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-[#05060A] text-slate-400 border-t border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#9B111E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9B111E] via-[#D92039] to-[#800A15] p-0.5 shadow-lg shadow-[#9B111E]/30 flex items-center justify-center">
                <div className="w-full h-full bg-[#08090E] rounded-[10px] flex items-center justify-center">
                  <Radio className="w-5 h-5 text-[#D92039]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  CARDINAL
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
                  Broadcasting Limited
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {companyDetails.shortDescription}
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D92039]" />
                <span>{companyDetails.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D92039]" />
                <span>{companyDetails.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D92039]" />
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
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#9B111E] hover:border-[#D92039] transition-all duration-300"
                >
                  {getSocialIcon(item.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyDetails.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portfolio Brands */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Portfolio Brands
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyDetails.footerLinks.portfolio.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#D92039] transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Initiatives & Institutional */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Initiatives & Events
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

            <div className="pt-4 border-t border-white/5 space-y-2">
              <span className="text-xs font-semibold text-slate-300 block">
                Institutional Domain
              </span>
              <span className="text-xs font-mono text-slate-500 block">
                cardinalbroadcasting.org
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Cardinal Broadcasting Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-400 transition-colors">
              About Cardinal
            </Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Contact Us
            </Link>
            <Link to="/careers" className="hover:text-slate-400 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
