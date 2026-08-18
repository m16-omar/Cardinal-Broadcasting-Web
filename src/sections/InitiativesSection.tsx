import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { InitiativeCard } from '../components/ui/InitiativeCard';
import { initiatives } from '../data/initiatives';

export const InitiativesSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#06070B] border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            badge="Audience Experiences & Community"
            title="Our Initiatives &"
            highlightText="Events"
            subtitle="Beyond broadcasting, Cardinal creates experiences that bring people together, develop talent and create meaningful connections across communities."
          />
        </div>

        {initiatives.map((initiative) => (
          <InitiativeCard key={initiative.id} initiative={initiative} />
        ))}
      </div>
    </section>
  );
};
