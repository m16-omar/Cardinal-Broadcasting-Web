import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/ui/ScrollToTop';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#08090E] text-slate-100 selection:bg-[#9B111E] selection:text-white relative overflow-x-hidden">
      <ScrollToTop />
      
      {/* Background ambient lighting */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#9B111E]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-1/4 w-[500px] h-[500px] bg-[#D92039]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-1/3 w-[700px] h-[500px] bg-[#0E1017]/80 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow pt-24">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
