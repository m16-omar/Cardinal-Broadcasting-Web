import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { WhatWeDoPage } from '../pages/WhatWeDoPage';
import { ImpactPage } from '../pages/ImpactPage';
import { NewsPage } from '../pages/NewsPage';
import { NewsDetailPage } from '../pages/NewsDetailPage';
import { CareersPage } from '../pages/CareersPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/what-we-do" element={<WhatWeDoPage />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:slug" element={<NewsDetailPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
