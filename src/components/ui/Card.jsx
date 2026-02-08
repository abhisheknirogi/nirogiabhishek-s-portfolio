import React from 'react';

// Simple Card wrapper to centralize the visual card surface.
// Uses existing `project-card` / `skill-card` helpers from `src/index.css`.
export default function Card({ variant = 'project', className = '', children, ...props }) {
  const base = variant === 'skill' ? 'skill-card' : 'project-card';
  return (
    <div className={`${base} ${className}`} {...props}>
      {children}
    </div>
  );
}
