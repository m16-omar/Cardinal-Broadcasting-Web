import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeader } from '../components/ui/SectionHeader';
import { PartnerMarquee } from '../components/ui/PartnerMarquee';
import { ApproachSection } from '../sections/ApproachSection';
import { TalentSection } from '../sections/TalentSection';
import { FinalCta } from '../sections/FinalCta';
import { Radio, Eye, Heart, Compass, ShieldCheck, Zap } from 'lucide-react';



export const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Institutional Integrity',
      desc: 'We uphold the highest ethical standards in broadcast journalism, factual storytelling, and corporate governance.',
      icon: ShieldCheck,
    },
    {
      title: 'Audience-Centricity',
      desc: 'Our programming and digital platforms are intentionally crafted to reflect the authentic realities of the people we serve.',
      icon: Heart,
    },
    {
      title: 'Creative Courage',
      desc: 'We encourage bold thinking, unconventional formats, and fresh cultural perspectives across our media brands.',
      icon: Zap,
    },
    {
      title: 'Future-Focused Innovation',
      desc: 'We invest continuously in modern broadcast engineering, digital streaming technologies, and media training.',
      icon: Compass,
    },
  ];

  return (
    <>
      <PageHeader
        badge="Corporate Profile"
        title="About"
        highlightText="Cardinal Broadcasting"
        description="A dynamic Nigerian media organisation creating meaningful experiences through broadcasting, digital media, content, education, and community engagement."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Main Corporate Positioning Section */}
      <section className="py-24 relative bg-[#08090E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                badge="Who We Are"
                title="Shaping Relevant &"
                highlightText="Impactful Media"
              />
              <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                <p>
                  Cardinal Broadcasting Limited is a Nigerian media organisation focused on creating relevant, engaging, and impactful media experiences while developing the people and platforms that will shape the future of the industry.
                </p>
                <p className="text-slate-400 text-base">
                  Through its growing ecosystem of broadcasting, media education, digital content, and audience-focused initiatives, Cardinal creates opportunities for people, brands, and communities to connect.
                </p>
                <p className="text-slate-400 text-base">
                  We operate with a forward-looking mindset, recognizing that modern media is not merely about transmission — it is about emotional resonance, shared culture, and human empowerment across Africa.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
                  alt="Cardinal Broadcasting Media Operations"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090E] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0E1017]/90 backdrop-blur-md border border-white/10 space-y-1">
                  <span className="text-xs font-mono font-bold text-[#D92039] uppercase tracking-wider block">
                    Institutional Presence
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Broadcasting Ideas. Building Platforms. Empowering People.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee label="STRATEGIC ALLIANCES & ECOSYSTEM PLATFORMS" />

      {/* Mission & Vision Matrix */}

      <section className="py-20 bg-[#0B0D14] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0E1017] border border-white/10 hover:border-[#D92039]/30 transition-all shadow-xl space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center text-[#D92039]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                To be a benchmark African media institution recognized for pioneering platforms, cultural authenticity, talent development, and enduring social impact.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0E1017] border border-white/10 hover:border-[#D92039]/30 transition-all shadow-xl space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center text-[#D92039]">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                To create high-quality, engaging broadcast and digital content, nurture world-class creative talent, and build sustainable platforms that enrich audience lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#08090E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Guiding Values"
            title="What Drives"
            highlightText="Our Work"
            subtitle="Our institutional principles guide our programming choices, commercial partnerships, and talent incubation."
            align="center"
            className="text-center mx-auto mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-7 rounded-2xl bg-[#0E1017] border border-white/10 hover:border-[#D92039]/30 transition-all shadow-md space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D92039]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{v.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ApproachSection />
      <TalentSection />
      <FinalCta />
    </>
  );
};
