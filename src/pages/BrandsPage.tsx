import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { BrandEditorialRow } from '../components/ui/BrandEditorialRow';
import { brandsList } from '../data/brands';
import { FinalCta } from '../sections/FinalCta';
import { PartnerMarquee } from '../components/ui/PartnerMarquee';

export const BrandsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Media Ecosystem"
        title="Our Brands &"
        highlightText="Platforms"
        description="Building media platforms and developing people who connect ideas, audiences and communities."
        breadcrumbs={[{ label: 'Our Brands' }]}
      />

      <section className="py-20 md:py-28 bg-[#08090E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          {brandsList.map((brand, index) => (
            <BrandEditorialRow key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      </section>

      <PartnerMarquee label="STRATEGIC BRAND & COMMERCIAL PARTNERS" />

      <FinalCta />
    </>
  );
};
