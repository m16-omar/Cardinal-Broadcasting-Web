import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PortfolioCard } from '../components/ui/PortfolioCard';
import { InitiativeCard } from '../components/ui/InitiativeCard';
import { FinalCta } from '../sections/FinalCta';
import { portfolioBrands } from '../data/portfolio';
import { initiatives } from '../data/initiatives';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Brand Ecosystem"
        title="Our"
        highlightText="Portfolio & Platforms"
        description="Explore the broadcasting platforms, educational initiatives, and experiential brands powering the Cardinal Broadcasting ecosystem."
        breadcrumbs={[{ label: 'Our Portfolio' }]}
      />

      {/* Main Portfolio Brands Grid */}
      <section className="py-24 relative bg-[#08090E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <SectionHeader
              badge="Core Media Platforms"
              title="Broadcasting &"
              highlightText="Media Education"
              subtitle="Our distinct brands serve specialized audience demographics across urban lifestyle, grassroots community culture, and youth media development."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioBrands.map((brand, index) => (
              <PortfolioCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture Note */}
      <section className="py-16 bg-[#0B0D14] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1017] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block">
                Ecosystem Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Multi-Platform Synergy
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Each brand within the Cardinal Broadcasting portfolio functions as an autonomous, high-performing platform with dedicated programming, while drawing upon centralized broadcast engineering, commercial strategy, and institutional support.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://city1051fm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>city1051fm.com</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="https://935areafm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>935areafm.com</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="https://citymediaacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>citymediaacademy.com</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives & Events Section */}
      <section className="py-24 bg-[#08090E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Major Initiatives"
            title="Flagship"
            highlightText="Community Events"
            subtitle="Annual activations and experiential platforms that unite communities through faith, culture, and entertainment."
          />

          {initiatives.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} />
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
};
