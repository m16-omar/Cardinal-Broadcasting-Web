import React from 'react';
import { Hero } from '../sections/Hero';
import { PartnerMarquee } from '../components/ui/PartnerMarquee';
import { Introduction } from '../sections/Introduction';
import { BrandsSection } from '../sections/BrandsSection';
import { CapabilitiesSection } from '../sections/CapabilitiesSection';
import { InitiativesSection } from '../sections/InitiativesSection';
import { ImpactSection } from '../sections/ImpactSection';
import { ApproachSection } from '../sections/ApproachSection';
import { TalentSection } from '../sections/TalentSection';
import { PartnersCta } from '../sections/PartnersCta';
import { CareersBanner } from '../sections/CareersBanner';
import { FinalCta } from '../sections/FinalCta';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 01. Hero */}
      <Hero />

      {/* Commercial Partner Marquee */}
      <PartnerMarquee />

      {/* 02. Corporate Introduction */}
      <Introduction />

      {/* 03. Our Brands & Platforms */}
      <BrandsSection />

      {/* 04. What We Do */}
      <CapabilitiesSection />

      {/* 05. Our Initiatives & Experiences */}
      <InitiativesSection />

      {/* 06. Our Impact */}
      <ImpactSection />

      {/* 07. Approach & Guiding Principles */}
      <ApproachSection />

      {/* 08. People & Talent */}
      <TalentSection />

      {/* 09. Partnerships */}
      <PartnersCta />

      {/* Careers Banner & Final CTA */}
      <CareersBanner />
      <FinalCta />
    </>
  );
};
