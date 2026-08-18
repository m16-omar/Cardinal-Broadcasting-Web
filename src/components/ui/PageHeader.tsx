import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlightText?: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlightText,
  description,
  breadcrumbs,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#08090E] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-72 bg-[#9B111E]/10 dark:bg-[#9B111E]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/40 dark:from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#D92039] font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl space-y-6">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B111E]/10 border border-[#9B111E]/30 text-[#D92039] text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D92039]" />
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]"
          >
            {title}{' '}
            {highlightText && (
              <span className="bg-gradient-to-r from-[#D92039] via-[#E0354E] to-[#C5A880] bg-clip-text text-transparent">
                {highlightText}
              </span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
