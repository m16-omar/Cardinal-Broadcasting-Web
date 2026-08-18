import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Radio } from 'lucide-react';
import { navLinks, companyDetails } from '../../data/company';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#08090E]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
            : 'py-6 bg-gradient-to-b from-[#08090E]/80 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Cardinal Broadcasting Limited Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9B111E] via-[#D92039] to-[#800A15] p-0.5 shadow-lg shadow-[#9B111E]/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#08090E] rounded-[10px] flex items-center justify-center">
                <Radio className="w-5 h-5 text-[#D92039] transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none group-hover:text-[#D92039] transition-colors">
                CARDINAL
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
                Broadcasting Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#9B111E]/15 border border-[#9B111E]/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" variant="primary" size="sm" icon="arrow-up-right">
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#08090E]/90 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#0E1017] border-l border-white/10 p-6 pt-24 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-3">
                  Navigation
                </div>
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <Link
                          to={link.href}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                            isActive
                              ? 'bg-[#9B111E]/15 border border-[#9B111E]/30 text-white font-semibold'
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span>{link.label}</span>
                          {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#D92039]" />}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-3 mb-3">
                    Brands & Initiatives
                  </div>

                  <div className="space-y-1.5">
                    <a
                      href="https://city1051fm.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5"
                    >
                      <span>City 105.1 FM</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </a>
                    <a
                      href="https://935areafm.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5"
                    >
                      <span>93.5 Area FM</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </a>
                    <a
                      href="https://citymediaacademy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5"
                    >
                      <span>City Media Academy</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </a>
                    <a
                      href="https://praiseinthecity.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm text-[#D92039] hover:bg-[#9B111E]/10"
                    >
                      <span>Praise in the City</span>
                      <ArrowUpRight className="w-4 h-4 text-[#D92039]" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <Button href="/contact" variant="primary" size="md" className="w-full" icon="arrow-right">
                  Partner With Us
                </Button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  {companyDetails.domain}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
