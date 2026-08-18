import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-24 md:py-36 relative bg-slate-50 dark:bg-[#08090E] overflow-hidden transition-colors duration-300">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-[#9B111E]/5 dark:bg-[#9B111E]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/60 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-xs font-semibold uppercase tracking-widest text-[#9B111E] dark:text-[#C5A880] mb-2">
            <span>Connect With Cardinal</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.05]">
            Let's Shape{' '}
            <span className="bg-gradient-to-r from-[#D92039] via-[#E0354E] to-[#C5A880] bg-clip-text text-transparent">
              What's Next.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Whether you're looking to partner with us, explore our media ecosystem, or join the Cardinal team, we'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Button href="/contact" variant="primary" size="lg" icon="arrow-right">
            Partner With Us
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Cardinal
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
