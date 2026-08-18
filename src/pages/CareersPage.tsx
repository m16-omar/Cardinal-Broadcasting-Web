import React, { useState } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { careerOpenings, careerValues } from '../data/careers';
import { MapPin, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('General Application');
  const [submitted, setSubmitted] = useState(false);

  const handleOpenApplication = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
    }, 2500);
  };

  return (
    <>
      <PageHeader
        badge="Join Our Team"
        title="Build the Future"
        highlightText="With Us"
        description="We're looking for passionate people who believe in the power of media, creativity, technology, and meaningful storytelling across Africa."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Culture & Values */}
      <section className="py-24 relative bg-slate-50 dark:bg-[#08090E] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="Workplace Philosophy"
            title="Why Build Your"
            highlightText="Career at Cardinal?"
            subtitle="We cultivate an environment where creative excellence, continuous learning, and human empowerment flourish together."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerValues.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded-2xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/10 space-y-3 shadow-sm dark:shadow-none"
              >
                <div className="w-10 h-10 rounded-xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center text-[#D92039]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{v.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities Listing */}
      <section className="py-24 bg-slate-100/70 dark:bg-[#0B0D14] border-t border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeader
              badge="Open Roles"
              title="Current"
              highlightText="Opportunities"
              subtitle="Explore active openings across broadcasting, digital production, commercial partnerships, and media education."
            />
            <Button
              onClick={() => handleOpenApplication('General Talent Pool')}
              variant="outline"
              size="md"
            >
              General Application
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerOpenings.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-3xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/10 hover:border-[#D92039]/40 transition-all duration-300 shadow-sm dark:shadow-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#9B111E]/10 dark:bg-[#9B111E]/15 border border-[#9B111E]/30 text-[#D92039]">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 ml-auto">
                      <MapPin className="w-3.5 h-3.5 text-[#D92039] dark:text-[#C5A880]" />
                      {job.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {job.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {job.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                      Key Competencies:
                    </span>
                    {job.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D92039] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Cardinal Broadcasting</span>
                  <button
                    onClick={() => handleOpenApplication(job.title)}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#9B111E] hover:bg-[#D92039] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Apply for Position"
        subtitle={`Position: ${selectedJob}`}
      >
        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Application Submitted</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
              Your profile has been forwarded to the Cardinal People & Talent team. We will be in touch if your background matches our requirements.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Samuel Okafor"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D92039] transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="samuel@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D92039] transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+234 800 000 0000"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D92039] transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Portfolio / LinkedIn / GitHub URL
              </label>
              <input
                type="url"
                required
                placeholder="https://..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D92039] transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Cover Note / Relevant Experience
              </label>
              <textarea
                rows={3}
                placeholder="Highlight your key achievements and why you want to join Cardinal Broadcasting..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#D92039] transition-colors resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" size="md" className="w-full" icon="arrow-right">
                Submit Application
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
};
