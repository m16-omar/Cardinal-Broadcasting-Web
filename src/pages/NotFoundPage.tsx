import React from 'react';
import { Button } from '../components/ui/Button';
import { Radio } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-50 dark:bg-[#08090E] transition-colors duration-300">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#9B111E]/10 border border-[#9B111E]/30 flex items-center justify-center text-[#D92039] mx-auto">
          <Radio className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#D92039] uppercase tracking-widest block">
            404 Error
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The page you are seeking does not exist or may have been relocated within the Cardinal Broadcasting portal.
          </p>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <Button href="/" variant="primary" size="md" icon="arrow-right">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
