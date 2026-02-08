import React from 'react';

// Reusable input/textarea styling to avoid repeating class strings
export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors ${className}`}
      {...props}
    />
  );
}

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none ${className}`}
      {...props}
    />
  );
}
