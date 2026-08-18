import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Radio, GraduationCap, Globe } from 'lucide-react';
import type { Brand } from '../../data/brands';

interface BrandEditorialRowProps {
  brand: Brand;
  index: number;
}

export const BrandEditorialRow: React.FC<BrandEditorialRowProps> = ({ brand, index }) => {
  const isImageRight = index === 1;
  const isSpecialComposition = index === 2;

  if (isSpecialComposition) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl overflow-hidden border border-purple-300/40 dark:border-[#7C3AED]/30 bg-gradient-to-br from-purple-50 via-white to-slate-50 dark:from-[#120B1F] dark:via-[#0E1017] dark:to-[#0A0713] p-8 sm:p-12 lg:p-16 shadow-xl dark:shadow-2xl transition-colors duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-[#7C3AED]/20 border border-purple-200 dark:border-[#7C3AED]/40 text-purple-700 dark:text-[#A78BFA]">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{brand.category}</span>
              </span>
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                {brand.badge}
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {brand.name}
              </h2>
              <p className="text-lg font-bold text-[#9B111E] dark:text-[#C5A880] italic">
                "{brand.tagline}"
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {brand.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {brand.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-white/[0.03] border border-purple-100 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200 shadow-xs dark:shadow-none"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-[#A78BFA] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={brand.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm shadow-xl shadow-[#7C3AED]/25 hover:shadow-[#7C3AED]/40 transition-all duration-300 group cursor-pointer"
              >
                <span>{brand.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                {brand.websiteUrl}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl bg-slate-100 dark:bg-[#08090E] group">
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0E1017] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 shadow-md dark:shadow-2xl"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${isImageRight ? 'lg:flex-row-reverse' : ''}`}>
        {/* Visual Media Column */}
        <div className={`lg:col-span-6 ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-xl bg-slate-100 dark:bg-[#08090E] group">
            <img
              src={brand.imageUrl}
              alt={brand.name}
              className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0E1017]/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900/85 backdrop-blur-md border border-white/20 text-white shadow-md">
                <Radio className="w-3 h-3 text-[#D92039]" />
                <span>{brand.category}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className={`lg:col-span-6 space-y-6 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold tracking-widest text-[#D92039] uppercase">
              {brand.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              {brand.name}
            </h2>
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300 italic">
              "{brand.tagline}"
            </p>
          </div>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {brand.description}
          </p>

          <div className="space-y-2.5 pt-1">
            {brand.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#D92039] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={brand.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#9B111E] hover:bg-[#D92039] text-white font-bold text-sm shadow-xl shadow-[#9B111E]/30 hover:shadow-[#D92039]/50 transition-all duration-300 group cursor-pointer"
            >
              <span>{brand.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <Globe className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
              <span>{brand.websiteUrl}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
