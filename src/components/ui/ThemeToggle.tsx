import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D92039] cursor-pointer ${
        isDark
          ? 'bg-white/5 hover:bg-white/10 text-amber-300 border border-white/10 hover:border-white/20'
          : 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 border border-slate-200/90 hover:border-slate-300 shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 hover:text-amber-300 transition-colors" strokeWidth={2.2} />
        ) : (
          <Moon className="w-5 h-5 text-slate-800 hover:text-slate-950 transition-colors" strokeWidth={2.2} />
        )}
      </motion.div>
    </button>
  );
};
