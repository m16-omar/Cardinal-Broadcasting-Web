import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';

export const TalentSection: React.FC = () => {
  const benefits = [
    'Direct studio immersion and live broadcast exposure',
    'Practical training across audio, visual, and social media production',
    'Mentorship by seasoned African broadcast professionals',
    'Structured pipeline to industry careers and fellowships',
  ];

  return (
    <section className="py-24 md:py-32 relative bg-[#07080D] border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Media (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="Media Education & Talent Development"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] via-transparent to-transparent" />

              {/* Floating Academy Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0E1017]/90 backdrop-blur-xl border border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[#A78BFA] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    City Media Academy (CMA)
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Cardinal's Flagship Media Training Arm
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge="Human Capital & Education"
              title="Investing in the People"
              highlightText="Behind the Media"
              subtitle="The future of media depends on talented, creative, and adaptable people. Cardinal supports the development of emerging talent through practical exposure, real-world broadcast platforms, and initiatives such as City Media Academy."
            />

            <div className="space-y-3 pt-2">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#D92039] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="https://citymediaacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#9B111E] hover:bg-[#D92039] text-white font-semibold text-sm shadow-xl shadow-[#9B111E]/25 transition-all duration-300 group"
              >
                <span>Explore City Media Academy</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-xs text-slate-500 font-mono">
                Opens citymediaacademy.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
