import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { companyDetails } from '../data/company';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-36 overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Statements (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Top Institutional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9B111E]/15 border border-[#D92039]/30 text-[#D92039] text-xs font-bold uppercase tracking-wider"
            >
              <Radio className="w-3.5 h-3.5 text-[#D92039] animate-pulse" />
              <span>Nigerian Media Conglomerate & Ecosystem</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05]">
                Shaping the{' '}
                <span className="bg-gradient-to-r from-[#D92039] via-[#E0354E] to-[#C5A880] bg-clip-text text-transparent">
                  Future of Media.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {companyDetails.supportingStatement}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-normal"
            >
              {companyDetails.shortDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button href="/about" variant="primary" size="lg" icon="arrow-right">
                Discover Cardinal
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg" icon="arrow-up-right">
                Explore Our Portfolio
              </Button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex items-center gap-8 text-xs text-slate-400"
            >
              <div>
                <span className="block text-white font-bold text-base">3 Platforms</span>
                <span>Broadcasting & Education</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="block text-white font-bold text-base">Annual Flagship</span>
                <span>Praise in the City</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block">
                <span className="block text-white font-bold text-base">100% African</span>
                <span>Next-Gen Media Talent</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sophisticated Composite Media Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Mosaic Composition */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual: Studio Production & Broadcasting */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0E1017] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
                  alt="Cardinal Broadcasting Studio Production"
                  className="w-full h-80 sm:h-96 object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0E1017]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      Broadcasting & Audio Engineering
                    </span>
                    <span className="text-[10px] text-slate-400">
                      City 105.1 FM & 93.5 Area FM
                    </span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>

              {/* Floating Card: City Media Academy & Talent */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -right-4 sm:-right-6 w-48 sm:w-56 p-3.5 rounded-2xl bg-[#0E1017]/90 backdrop-blur-xl border border-white/15 shadow-2xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop"
                    alt="City Media Academy"
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      City Media Academy
                    </span>
                    <span className="text-[10px] text-[#D92039] font-medium">
                      Talent Development
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card: Praise in the City */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 w-52 sm:w-60 p-3.5 rounded-2xl bg-[#0E1017]/90 backdrop-blur-xl border border-[#D92039]/30 shadow-2xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#9B111E]/20 flex items-center justify-center text-[#D92039]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Praise in the City
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Flagship Annual Festival
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
