import React from 'react';
import { motion } from 'framer-motion';
import { companyDetails } from '../data/company';

export const Introduction: React.FC = () => {
  const pillars = [
    { label: 'Media', desc: 'Audio, visual, and digital storytelling' },
    { label: 'Technology', desc: 'Modern broadcast and digital infrastructure' },
    { label: 'People', desc: 'Empowering talent and serving audiences' },
    { label: 'Culture', desc: 'Authentic African expression & heritage' },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#08090E] border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#C5A880]"
            >
              <span>Our Philosophy</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              More Than Media.{' '}
              <span className="bg-gradient-to-r from-[#D92039] via-[#E0354E] to-[#C5A880] bg-clip-text text-transparent">
                We're Building Possibilities.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-normal"
            >
              {companyDetails.editorialIntro.narrative}
            </motion.p>

            {/* Keyword Badges: Inform, Entertain, Educate, Connect, Empower */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 pt-4"
            >
              {companyDetails.editorialIntro.keywords.map((word, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white hover:border-[#D92039]/50 hover:bg-[#9B111E]/10 transition-all duration-300 shadow-sm"
                >
                  {word}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 4 Intersecting Pillars Matrix (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#0E1017] border border-white/10 hover:border-[#D92039]/30 transition-all duration-300 group shadow-md"
              >
                <div className="text-xs font-mono font-bold text-[#D92039] mb-2">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#D92039] transition-colors">
                  {pillar.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
