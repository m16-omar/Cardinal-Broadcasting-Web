import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { impactStatistics } from '../data/statistics';

export const ImpactSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-slate-50 dark:bg-[#0B0D14] border-t border-b border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#9B111E]/5 dark:bg-[#9B111E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader
            badge="Scale & Footprint"
            title="Creating Impact"
            highlightText="Through Media"
            subtitle="Our structured ecosystem drives deep cultural resonance, community empowerment, and media excellence across Nigeria."
            align="center"
          />
        </div>

        {/* Statistics Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {impactStatistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/10 hover:border-[#D92039]/40 transition-all duration-300 text-center shadow-sm dark:shadow-xl group"
            >
              <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-slate-900 via-slate-800 to-[#D92039] dark:from-white dark:via-slate-100 dark:to-[#D92039] bg-clip-text text-transparent mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{stat.label}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
