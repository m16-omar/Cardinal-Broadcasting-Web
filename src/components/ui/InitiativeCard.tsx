import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MapPin, Ticket } from 'lucide-react';
import type { Initiative } from '../../data/initiatives';

interface InitiativeCardProps {
  initiative: Initiative;
}

export const InitiativeCard: React.FC<InitiativeCardProps> = ({ initiative }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-[#D92039]/30 bg-white dark:bg-[#0E1017] p-6 sm:p-10 lg:p-12 shadow-xl dark:shadow-2xl transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Editorial Information Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B111E]/10 dark:bg-[#9B111E]/20 border border-[#9B111E]/30 dark:border-[#D92039]/40 text-[#D92039] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D92039]" />
              <span>{initiative.type}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium">
              <MapPin className="w-3 h-3 text-[#9B111E] dark:text-[#C5A880]" />
              <span>{initiative.location}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium">
              <Ticket className="w-3 h-3 text-[#9B111E] dark:text-[#C5A880]" />
              <span>{initiative.admission}</span>
            </div>
          </div>

          {/* Title & Philosophy Banner */}
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              {initiative.name}
            </h3>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#9B111E] dark:bg-gradient-to-r dark:from-[#C5A880] dark:via-[#E5D3B8] dark:to-white dark:bg-clip-text dark:text-transparent italic">
                "{initiative.philosophy}"
              </p>
            </div>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {initiative.description}
            </p>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {initiative.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-slate-200 font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Action Button & Link Note */}
          <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={initiative.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#9B111E] hover:bg-[#D92039] text-white font-semibold text-sm shadow-xl shadow-[#9B111E]/25 hover:shadow-[#D92039]/40 transition-all duration-300 group cursor-pointer"
            >
              <span>{initiative.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-xs text-slate-500 font-mono">
              Directs to dedicated festival portal: {initiative.websiteUrl}
            </span>
          </div>
        </div>

        {/* Full Image Presentation Column (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl bg-slate-100 dark:bg-[#08090E] group">
            <img
              src={initiative.backdropUrl}
              alt={`${initiative.name} live concert atmosphere`}
              className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Soft subtle bottom overlay with event label */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 inline-block">
                Annual Thanksgiving Festival • Live Atmosphere
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
