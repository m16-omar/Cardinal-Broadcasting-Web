import React from 'react';
import { partnersList } from '../../data/partners';
import { Building2 } from 'lucide-react';

interface PartnerMarqueeProps {
  label?: string;
}

export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({
  label = 'STRATEGIC BRAND & COMMERCIAL PARTNERS',
}) => {
  // Double the list for seamless continuous infinite looping
  const marqueeItems = [...partnersList, ...partnersList, ...partnersList];

  return (
    <div className="relative py-7 bg-slate-50 dark:bg-[#06070A] border-y border-slate-200 dark:border-white/10 overflow-hidden select-none transition-colors duration-300">
      {/* Small Minimalist Label */}
      {label && (
        <div className="text-center mb-5">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {label}
          </span>
        </div>
      )}

      {/* Gradient Fade Masks on Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent dark:from-[#06070A] dark:via-[#06070A]/90 dark:to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent dark:from-[#06070A] dark:via-[#06070A]/90 dark:to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group cursor-default shadow-sm dark:shadow-none"
            >
              {/* Brand Monogram Badge */}
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black tracking-wider transition-transform group-hover:scale-105 border border-slate-200/80 dark:border-white/10 shadow-xs"
                style={{
                  backgroundColor: `${item.accentColor}18`,
                  color: item.accentColor || '#D92039',
                }}
              >
                {item.shortCode ? (
                  item.shortCode.slice(0, 3).toUpperCase()
                ) : (
                  <Building2 className="w-4 h-4" />
                )}
              </div>

              {/* Brand Details */}
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-slate-950 dark:group-hover:text-white transition-colors whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
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
