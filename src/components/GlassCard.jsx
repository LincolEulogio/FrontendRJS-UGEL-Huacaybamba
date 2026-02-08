import React from 'react';

export const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`glass-card rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};
