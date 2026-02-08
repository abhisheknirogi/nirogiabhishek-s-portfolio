import React from 'react';

// Small presentational badge used for tech tags
export default function Badge({ children, className = '' }) {
  return (
    <span className={`px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30 ${className}`}>
      {children}
    </span>
  );
}
