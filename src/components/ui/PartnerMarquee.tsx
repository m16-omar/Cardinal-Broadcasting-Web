import React from 'react';
import { partnersList } from '../../data/partners';
import { Radio, Sparkles, GraduationCap, Mic, Building2, Tv, Film } from 'lucide-react';

interface PartnerMarqueeProps {
  label?: string;
}

export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({
  label = 'ECOSYSTEM PLATFORMS & STRATEGIC COLLABORATORS',
}) => {
  // Double the list for infinite continuous looping
  const marqueeItems = [...partnersList, ...partnersList];

  const getIcon = (name: string) => {
    switch (name) {
      case 'City 105.1 FM':
        return <Radio className="w-4 h-4 text-[#D92039]" />;
      case '93.5 Area FM':
        return <Mic className="w-4 h-4 text-[#D92039]" />;
      case 'City Media Academy':
        return <GraduationCap className="w-4 h-4 text-[#C5A880]" />;
      case 'Praise in the City':
        return <Sparkles className="w-4 h-4 text-[#C5A880]" />;
      case 'Commercial Brands':
        return <Building2 className="w-4 h-4 text-slate-400" />;
      case 'Broadcast Tech':
        return <Tv className="w-4 h-4 text-slate-400" />;
      default:
        return <Film className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="relative py-8 bg-[#06070A] border-y border-white/10 overflow-hidden select-none">
      {/* Label / Heading */}
      {label && (
        <div className="text-center mb-6">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            {label}
          </span>
        </div>
      )}

      {/* Gradient Fade Masks on Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#06070A] via-[#06070A]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#06070A] via-[#06070A]/80 to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
            >
              <div className="p-1 rounded-full bg-white/5 group-hover:scale-110 transition-transform">
                {getIcon(item.name)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
