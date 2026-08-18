import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ServiceCard } from '../components/ui/ServiceCard';
import { corporateServices } from '../data/services';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-slate-50 dark:bg-[#08090E] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            badge="Institutional Capabilities"
            title="What"
            highlightText="We Do"
            subtitle="Creating comprehensive media ecosystems across broadcasting, creative content, digital streaming, talent development, and experiential activations."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {corporateServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
