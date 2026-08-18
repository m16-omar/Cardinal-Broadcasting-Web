import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { CheckCircle2 } from 'lucide-react';


export const CareersBanner: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsCvModalOpen(false);
    }, 2500);
  };

  return (
    <>
      <section className="py-24 md:py-32 relative bg-[#0B0D14] border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <SectionHeader
                badge="Join Cardinal"
                title="Build the Future"
                highlightText="With Us"
                subtitle="We're looking for passionate people who believe in the power of media, creativity, technology, and meaningful storytelling across African platforms."
              />

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/careers" variant="primary" size="lg" icon="arrow-right">
                  View Opportunities
                </Button>
                <Button
                  onClick={() => setIsCvModalOpen(true)}
                  variant="secondary"
                  size="lg"
                >
                  Send Your CV
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#0E1017] border border-white/10 space-y-4">
              <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block">
                Talent Community
              </span>
              <h3 className="text-xl font-bold text-white leading-snug">
                Passionate about media, engineering, or storytelling?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Even if there is no current opening matching your profile, we welcome general talent inquiries from exceptional professionals.
              </p>
              <button
                onClick={() => setIsCvModalOpen(true)}
                className="text-xs font-bold text-[#D92039] hover:text-[#E0354E] transition-colors underline underline-offset-4 cursor-pointer"
              >
                Submit General Profile →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CV Submission Modal */}
      <Modal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        title="Submit Your CV / Portfolio"
        subtitle="Share your background with Cardinal Broadcasting's talent acquisition team."
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Application Received</h4>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              Thank you for your interest in Cardinal Broadcasting. Our team will review your submission.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Amina Bello"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="amina@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Area of Interest / Expertise
              </label>
              <select
                required
                className="w-full px-4 py-2.5 rounded-xl bg-[#0E1017] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors"
              >
                <option value="Broadcast Operations">Broadcast Operations & Production</option>
                <option value="Digital Media">Digital Media & Content Creation</option>
                <option value="Technical Engineering">Broadcast Engineering & IT</option>
                <option value="Commercial & Sales">Commercial, Sales & Partnerships</option>
                <option value="Media Education">Media Education & CMA Fellowship</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Portfolio / LinkedIn URL
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Short Introduction / Note
              </label>
              <textarea
                rows={3}
                placeholder="Briefly tell us what drives your passion for media..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" size="md" className="w-full" icon="arrow-right">
                Submit Profile
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
};
