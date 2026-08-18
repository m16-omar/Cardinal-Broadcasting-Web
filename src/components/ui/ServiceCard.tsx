import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Clapperboard, Globe, TrendingUp, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ServiceCapability } from '../../data/services';

interface ServiceCardProps {
  service: ServiceCapability;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: 'w-6 h-6 text-[#D92039]' };
    switch (iconName) {
      case 'Radio':
        return <Radio {...iconProps} />;
      case 'Clapperboard':
        return <Clapperboard {...iconProps} />;
      case 'Globe':
        return <Globe {...iconProps} />;
      case 'TrendingUp':
        return <TrendingUp {...iconProps} />;
      case 'GraduationCap':
        return <GraduationCap {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/10 hover:border-[#D92039]/40 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-xl hover:shadow-[#9B111E]/10"
    >
      <div>
        {/* Top Number & Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center group-hover:bg-[#9B111E] group-hover:border-[#D92039] transition-all duration-300">
            <div className="group-hover:text-white transition-colors duration-300">
              {getIcon(service.iconName)}
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 group-hover:text-[#D92039] transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#D92039] transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {service.shortDescription}
        </p>

        {/* Offerings snippet */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5">
          {service.offerings.slice(0, 2).map((offering, idx) => (
            <div key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#D92039]" />
              <span>{offering}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Link to /what-we-do */}
      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/10">
        <Link
          to="/what-we-do"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#9B111E] dark:hover:text-white group/link transition-colors"
        >
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D92039] transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
