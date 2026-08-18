import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { InitiativeCard } from '../components/ui/InitiativeCard';
import { initiatives } from '../data/initiatives';

export const InitiativesSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-slate-100/60 dark:bg-[#06070B] border-t border-b border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            badge="Audience Experiences & Initiatives"
            title="Our Initiatives &"
            highlightText="Experiences"
            subtitle="Beyond broadcasting, we create experiences and initiatives that bring people together and make meaningful connections possible."
          />
        </div>

        {initiatives.map((initiative) => (
          <InitiativeCard key={initiative.id} initiative={initiative} />
        ))}
      </div>
    </section>
  );
};
