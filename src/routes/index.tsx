import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { BrandsPage } from '../pages/BrandsPage';
import { WhatWeDoPage } from '../pages/WhatWeDoPage';
import { ImpactPage } from '../pages/ImpactPage';
import { CareersPage } from '../pages/CareersPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/brands" element={<BrandsPage />} />
      {/* Backward-compatibility redirect from /portfolio to /brands */}
      <Route path="/portfolio" element={<Navigate to="/brands" replace />} />
      <Route path="/what-we-do" element={<WhatWeDoPage />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
