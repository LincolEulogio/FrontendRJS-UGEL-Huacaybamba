import React from 'react';

export const ClayButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`clay-button bg-primary text-white font-bold py-2 px-4 rounded-xl ${className}`} {...props}>
      {children}
    </button>
  );
};
