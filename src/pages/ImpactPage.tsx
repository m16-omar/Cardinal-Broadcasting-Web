import React from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ImpactSection } from '../sections/ImpactSection';
import { InitiativeCard } from '../components/ui/InitiativeCard';
import { TalentSection } from '../sections/TalentSection';
import { FinalCta } from '../sections/FinalCta';
import { initiatives } from '../data/initiatives';
import { HeartHandshake, Award, Users2, Sparkles } from 'lucide-react';

export const ImpactPage: React.FC = () => {
  const impactStories = [
    {
      title: 'Grassroots Dialogue & Civic Trust',
      desc: 'Our radio platforms create safe, inclusive spaces for metropolitan and grassroots audiences to voice concerns, share stories, and access vital information.',
      icon: Users2,
    },
    {
      title: 'Next-Generation Media Talent',
      desc: 'Through City Media Academy, we provide emerging African youth with practical studio exposure, building career-ready skills in digital media and broadcasting.',
      icon: Award,
    },
    {
      title: 'Free Community Thanksgiving',
      desc: 'Praise in the City welcomes tens of thousands of worshippers without admission fees, embodying our commitment that praising God has no price tag.',
      icon: Sparkles,
    },
  ];

  return (
    <>
      <PageHeader
        badge="Community & Influence"
        title="Our"
        highlightText="Impact & Initiatives"
        description="Discover how Cardinal Broadcasting empowers communities, nurtures emerging media leaders, and creates meaningful cultural moments across Nigeria."
        breadcrumbs={[{ label: 'Our Impact' }]}
      />

      <ImpactSection />

      {/* Impact Dimensions */}
      <section className="py-24 bg-[#08090E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="Three Pillars of Impact"
            title="Empowering People,"
            highlightText="Uniting Communities"
            subtitle="Our institutional impact extends far beyond commercial broadcasting into youth empowerment and cultural fellowship."
            align="center"
            className="text-center mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story) => {
              const Icon = story.icon;
              return (
                <div
                  key={story.title}
                  className="p-8 rounded-3xl bg-[#0E1017] border border-white/10 hover:border-[#D92039]/30 transition-all shadow-xl space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center text-[#D92039]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{story.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {story.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flagship Initiative Feature */}
      <section className="py-20 bg-[#0B0D14] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge="Annual Flagship Event"
            title="Praise in"
            highlightText="the City"
            subtitle="Our annual gospel music concert and Thanksgiving festival on the Lagos mainland."
          />

          {initiatives.map((initiative) => (
            <InitiativeCard key={initiative.id} initiative={initiative} />
          ))}
        </div>
      </section>

      <TalentSection />
      <FinalCta />
    </>
  );
};
