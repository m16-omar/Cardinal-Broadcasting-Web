import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/ui/PageHeader';
import { FinalCta } from '../sections/FinalCta';

import { corporateServices } from '../data/services';
import { Radio, Clapperboard, Globe, TrendingUp, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const WhatWeDoPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: 'w-7 h-7 text-[#D92039]' };
    switch (iconName) {
      case 'Radio':
        return <Radio {...iconProps} />;
      case 'Clapperboard':
        return <Clapperboard {...iconProps} />;
      case 'Globe':
        return <Globe {...iconProps} />;
      case 'TrendingUp':
        return <TrendingUp {...iconProps} />;
      case 'GraduationCap':
        return <GraduationCap {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <>
      <PageHeader
        badge="Corporate Capabilities"
        title="What"
        highlightText="We Do"
        description="Comprehensive media infrastructure, digital content production, advertising partnerships, and talent education tailored for Africa’s dynamic media landscape."
        breadcrumbs={[{ label: 'What We Do' }]}
      />

      {/* Capabilities Deep Dive */}
      <section className="py-24 relative bg-[#08090E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {corporateServices.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 rounded-3xl bg-[#0E1017] border border-white/10 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual / Icon Box (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="p-8 sm:p-10 rounded-2xl bg-[#08090E] border border-white/10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center">
                        {getIcon(service.iconName)}
                      </div>
                      <span className="text-sm font-mono font-bold text-[#D92039]">
                        PILLAR {service.number}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white">
                      Core Offerings & Deliverables
                    </h4>

                    <div className="space-y-3">
                      {service.offerings.map((offering, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#D92039] shrink-0 mt-0.5" />
                          <span>{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Narrative Description (7 cols) */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider">
                    Capability {service.number}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  <div className="pt-2">
                    <Button href="/contact" variant="outline" size="sm" icon="arrow-right">
                      Discuss Capability
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <FinalCta />
    </>
  );
};
