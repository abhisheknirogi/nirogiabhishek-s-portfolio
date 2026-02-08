import React from 'react';

// Standardized section title used across pages for consistent spacing
// and accessible heading structure.
export default function SectionTitle({ children, id }) {
  return (
    <h2 id={id} className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
      {children}
    </h2>
  );
}
