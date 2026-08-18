import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/ui/PageHeader';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { companyDetails } from '../data/company';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Building, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organisation: '',
    department: 'General Inquiries',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const departments = [
    { name: 'Corporate & General Inquiries', email: companyDetails.contact.email },
    { name: 'Advertising & Commercial Partnerships', email: companyDetails.contact.businessEmail },
    { name: 'Careers & Talent Acquisition', email: companyDetails.contact.careersEmail },
    { name: 'Press & Media Relations', email: companyDetails.contact.pressEmail },
  ];

  return (
    <>
      <PageHeader
        badge="Institutional Contact"
        title="Connect With"
        highlightText="Cardinal"
        description="Reach out to our corporate headquarters, explore commercial partnerships, or connect with our specialized media divisions."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-24 relative bg-[#08090E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Corporate Directory & Addresses (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionHeader
                  badge="Corporate Headquarters"
                  title="Official"
                  highlightText="Contact Details"
                  subtitle="Please direct your inquiry to the relevant corporate division below for prompt assistance."
                />
              </div>

              {/* Main Contact Card */}
              <div className="p-8 rounded-3xl bg-[#0E1017] border border-white/10 space-y-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center text-[#D92039] shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Corporate Office
                    </span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {companyDetails.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center text-[#D92039] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Telephone
                    </span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {companyDetails.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center text-[#D92039] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Office Hours
                    </span>
                    <p className="text-sm text-slate-300 mt-0.5">
                      {companyDetails.contact.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Departmental Desks */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block px-1">
                  Departmental Inquiries
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {departments.map((dept) => (
                    <div
                      key={dept.name}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                    >
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {dept.name}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {dept.email}
                        </span>
                      </div>
                      <Mail className="w-4 h-4 text-[#D92039]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Professional Contact Form (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#0E1017] border border-white/10 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Cardinal Broadcasting Limited. Your message has been routed to the appropriate corporate desk and our team will respond promptly.
                  </p>
                  <div className="pt-4">
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          organisation: '',
                          department: 'General Inquiries',
                          subject: '',
                          message: '',
                        });
                      }}
                      variant="outline"
                      size="sm"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      Send a Corporate Inquiry
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete the form below and our institutional affairs team will be in touch.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Oluwaseun Adeyemi"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Work / Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="oluwaseun@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Organisation / Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="Company or Brand Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Inquiry Department *
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0E1017] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors"
                      >
                        <option value="General Inquiries">General Corporate Inquiries</option>
                        <option value="Commercial Partnerships">Commercial & Advertising Partnerships</option>
                        <option value="Careers">Careers & HR</option>
                        <option value="Media & Press">Media & Press Relations</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Summary of your inquiry or proposal"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide details regarding your inquiry, partnership proposal, or institutional question..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#D92039] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      icon="arrow-right"
                    >
                      {isSubmitting ? 'Transmitting...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
