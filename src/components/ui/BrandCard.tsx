import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Radio, GraduationCap } from 'lucide-react';
import type { Brand } from '../../data/brands';

interface BrandCardProps {
  brand: Brand;
  index: number;
}

export const BrandCard: React.FC<BrandCardProps> = ({ brand, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#0E1017] border border-white/10 hover:border-[#D92039]/40 p-6 sm:p-8 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#9B111E]/10 overflow-hidden"
    >
      {/* Top Background Glow on Hover */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: brand.accentColor }}
      />

      <div>
        {/* Visual Media Header */}
        <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/5 bg-[#08090E]">
          <img
            src={brand.imageUrl}
            alt={brand.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1017] via-[#0E1017]/20 to-transparent" />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#08090E]/90 backdrop-blur-md border border-white/15 text-white shadow-md">
              {brand.category === 'Broadcasting' ? (
                <Radio className="w-3 h-3 text-[#D92039]" />
              ) : (
                <GraduationCap className="w-3 h-3 text-[#C5A880]" />
              )}
              <span>{brand.category}</span>
            </span>
          </div>
        </div>

        {/* Brand Information */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold tracking-widest text-[#D92039] uppercase">
            {brand.badge}
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-[#D92039] transition-colors">
            {brand.name}
          </h3>
          <p className="text-sm font-medium text-slate-300 italic">
            "{brand.tagline}"
          </p>
          <p className="text-sm text-slate-400 leading-relaxed pt-1 font-normal">
            {brand.description}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mt-6 pt-6 border-t border-white/5 space-y-2.5">
          {brand.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#D92039] shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* External Launch CTA */}
      <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
          Official Platform
        </span>
        <a
          href={brand.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#9B111E] text-white text-xs font-semibold border border-white/10 hover:border-[#D92039] transition-all duration-300 group/btn shadow-md"
        >
          <span>{brand.ctaText}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
};
