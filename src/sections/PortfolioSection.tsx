import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PortfolioCard } from '../components/ui/PortfolioCard';
import { portfolioBrands } from '../data/portfolio';

export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative bg-[#08090E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            badge="Brand Ecosystem"
            title="Our"
            highlightText="Portfolio"
            subtitle="Building platforms and brands that connect people, ideas and communities across broadcasting and media education."
          />
        </div>

        {/* 3 Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioBrands.map((brand, index) => (
            <PortfolioCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
