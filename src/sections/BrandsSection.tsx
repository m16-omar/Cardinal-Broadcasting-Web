import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { BrandCard } from '../components/ui/BrandCard';
import { brandsList } from '../data/brands';
import { Button } from '../components/ui/Button';

export const BrandsSection: React.FC = () => {
  return (
    <section id="brands" className="py-24 md:py-32 relative bg-slate-50 dark:bg-[#08090E] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            badge="Ecosystem Platforms"
            title="Our Brands &"
            highlightText="Platforms"
            subtitle="Creating media platforms and developing people who shape conversations, communities and the future of media."
          />
        </div>

        {/* 3 Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandsList.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>

        {/* Bottom CTA to /brands */}
        <div className="mt-14 text-center">
          <Button href="/brands" variant="secondary" size="lg" icon="arrow-right">
            Explore Our Brands
          </Button>
        </div>
      </div>
    </section>
  );
};
