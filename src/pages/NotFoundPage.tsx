import React from 'react';
import { Button } from '../components/ui/Button';
import logoImg from '../assets/cardinal-logo.jpeg';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-50 dark:bg-[#08090E] transition-colors duration-300">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#08090E] p-1 border border-slate-200 dark:border-white/10 shadow-lg mx-auto flex items-center justify-center">
          <img
            src={logoImg}
            alt="Cardinal Broadcasting Limited"
            className="w-full h-full object-contain rounded-xl"
          />
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
