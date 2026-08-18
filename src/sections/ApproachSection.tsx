import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { approachPrinciples } from '../data/approach';

export const ApproachSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-[#D92039]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#D92039]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#D92039]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#D92039]" />;
      default:
        return <Target className="w-5 h-5 text-[#D92039]" />;
    }
  };

  return (
    <section className="py-24 md:py-32 relative bg-[#08090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Editorial Perspective (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <SectionHeader
              badge="Our Core Principles"
              title="How We Think About"
              highlightText="Media"
              subtitle="We view media as an instrument of empowerment, cultural expression, and collective progress across African communities."
            />

            <div className="p-6 rounded-2xl bg-[#0E1017] border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block">
                Editorial Conviction
              </span>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "In an era of rapid technological acceleration, true media leadership requires balancing innovative distribution with unyielding human empathy and cultural relevance."
              </p>
            </div>
          </div>

          {/* Right Column: 4 Principle Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {approachPrinciples.map((principle, index) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-7 rounded-2xl bg-[#0E1017] border border-white/10 hover:border-[#D92039]/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center group-hover:bg-[#9B111E] transition-colors duration-300">
                      {getIcon(principle.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {principle.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D92039] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
