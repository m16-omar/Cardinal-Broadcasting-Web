import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import pitcImg from '../assets/PITC.png';


export const EditorialBanner: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#08090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden border border-[#D92039]/30 bg-gradient-to-r from-[#180509] via-[#0E1017] to-[#12050A] shadow-2xl text-center flex flex-col items-center"
        >
          {/* Atmospheric Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={pitcImg}
              alt="Praise in the City Atmosphere"
              className="w-full h-full object-cover opacity-60 filter brightness-90 contrast-105 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090E]/90 via-[#08090E]/65 to-[#08090E]/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090E]/80 via-transparent to-[#08090E]/50" />
          </div>


          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9B111E]/20 rounded-full blur-3xl pointer-events-none z-0" />


          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Community & Thanksgiving</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Praise Has{' '}
            <span className="bg-gradient-to-r from-[#C5A880] via-[#E5D3B8] to-white bg-clip-text text-transparent italic font-serif">
              No Price Tag.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            Celebrating faith, music, thanksgiving, and community through Praise in the City — Cardinal’s annual gift of praise to Lagos and Nigeria.
          </p>

          {/* Action CTA */}
          <div className="mt-8">
            <a
              href="https://praiseinthecity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#08090E] font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <span>Visit Praise in the City</span>
              <ArrowUpRight className="w-4 h-4 text-[#08090E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
