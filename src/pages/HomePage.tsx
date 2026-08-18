import React from 'react';
import { Hero } from '../sections/Hero';
import { Introduction } from '../sections/Introduction';
import { PortfolioSection } from '../sections/PortfolioSection';
import { InitiativesSection } from '../sections/InitiativesSection';
import { CapabilitiesSection } from '../sections/CapabilitiesSection';
import { ImpactSection } from '../sections/ImpactSection';
import { ApproachSection } from '../sections/ApproachSection';
import { TalentSection } from '../sections/TalentSection';
import { EditorialBanner } from '../sections/EditorialBanner';
import { PartnersCta } from '../sections/PartnersCta';
import { NewsPreview } from '../sections/NewsPreview';
import { CareersBanner } from '../sections/CareersBanner';
import { FinalCta } from '../sections/FinalCta';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <PortfolioSection />
      <InitiativesSection />
      <CapabilitiesSection />
      <ImpactSection />
      <ApproachSection />
      <TalentSection />
      <EditorialBanner />
      <PartnersCta />
      <NewsPreview />
      <CareersBanner />
      <FinalCta />
    </>
  );
};
