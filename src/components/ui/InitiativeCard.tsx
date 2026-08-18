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
      className="relative rounded-3xl overflow-hidden border border-[#D92039]/30 bg-[#0E1017] shadow-2xl"
    >
      {/* Background Graphic & Atmosphere Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={initiative.backdropUrl}
          alt={initiative.name}
          className="w-full h-full object-cover opacity-30 scale-105 filter brightness-90 contrast-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090E] via-[#08090E]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl space-y-8">
        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B111E]/20 border border-[#D92039]/40 text-[#D92039] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D92039]" />
            <span>{initiative.type}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
            <MapPin className="w-3 h-3 text-[#C5A880]" />
            <span>{initiative.location}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
            <Ticket className="w-3 h-3 text-[#C5A880]" />
            <span>{initiative.admission}</span>
          </div>
        </div>

        {/* Title & Philosophy Banner */}
        <div className="space-y-4">
          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
            {initiative.name}
          </h3>
          <div className="inline-block">
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#C5A880] via-[#E5D3B8] to-white bg-clip-text text-transparent italic">
              "{initiative.philosophy}"
            </p>
          </div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {initiative.description}
          </p>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {initiative.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href={initiative.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#9B111E] hover:bg-[#D92039] text-white font-semibold text-sm shadow-xl shadow-[#9B111E]/30 hover:shadow-[#D92039]/50 transition-all duration-300 group"
          >
            <span>{initiative.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <span className="text-xs text-slate-500 font-mono">
            Directs to dedicated festival portal: {initiative.websiteUrl}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
