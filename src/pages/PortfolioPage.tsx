import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Backward compatibility redirect:
 * Any legacy navigation to /portfolio redirects automatically to /brands
 */
export const PortfolioPage: React.FC = () => {
  return <Navigate to="/brands" replace />;
};
