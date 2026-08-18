import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';

export const PartnersCta: React.FC = () => {
  const partnerCategories = [
    { title: 'Commercial Brands', desc: 'Custom campaigns & high-impact sponsorship integration' },
    { title: 'Content Creators & Agencies', desc: 'Syndication, co-production, and digital media' },
    { title: 'Institutional Bodies', desc: 'Public awareness & civic community engagement' },
    { title: 'Educational Partners', desc: 'Talent development pipelines and academy fellowships' },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-[#0B0D14] border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="Strategic Collaboration"
              title="Let's Build"
              highlightText="Something Together"
              subtitle="We work with forward-thinking brands, organisations, creatives, and partners to create meaningful media opportunities, experiences, and cultural connections."
            />

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/contact" variant="primary" size="lg" icon="arrow-right">
                Partner With Us
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Cardinal
              </Button>
            </div>
          </div>

          {/* Right Column: Collaboration Pillars (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {partnerCategories.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#0E1017] border border-white/10 hover:border-[#D92039]/30 transition-colors shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-[#D92039] mb-3" />
                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
