import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { leadershipTeam } from '../data/leadership';
import { CheckCircle2, Award, Briefcase, Sparkles, Building2 } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-white dark:bg-[#08090E] border-t border-slate-200/80 dark:border-white/5 overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9B111E]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D92039]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Executive Leadership"
          title="The Visionary Minds Driving"
          highlightText="Our Mission"
          subtitle="Strategic leadership anchored in broadcast excellence, creative empowerment, and sustainable institutional growth across the African media landscape."
          align="center"
          className="text-center mx-auto mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {leadershipTeam.map((leader, idx) => (
            <motion.div
              key={leader.role}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-slate-50/80 dark:bg-[#0E1017] border border-slate-200/90 dark:border-white/10 hover:border-[#D92039]/40 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-black/40 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Header: Role Badge + Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9B111E]/10 dark:bg-[#9B111E]/20 border border-[#9B111E]/30 text-[#D92039] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>{leader.role}</span>
                    </div>
                    {leader.name ? (
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {leader.name}
                      </h3>
                    ) : (
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {leader.role}
                      </h3>
                    )}
                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#D92039] shrink-0" />
                      <span>{leader.department}</span>
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9B111E] to-[#D92039] p-0.5 shadow-md shadow-[#9B111E]/20 flex items-center justify-center shrink-0">
                    <div className="w-full h-full bg-[#08090E] rounded-[14px] flex items-center justify-center text-[#D92039]">
                      {idx === 0 ? <Award className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
                    </div>
                  </div>
                </div>

                {/* Bio Narrative */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {leader.bio}
                </p>

                {/* Key Strategic Pillars / Responsibilities */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 block">
                    Strategic Focus & Execution
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {leader.responsibilities.map((resp) => (
                      <div
                        key={resp}
                        className="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D92039] shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
