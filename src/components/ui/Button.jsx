import React from 'react';

// Small helper to centralize button styles so we don't repeat class strings.
// Keeps existing visual design by reusing the project's Tailwind helpers
// (`btn-primary` / `btn-secondary`) defined in `src/index.css`.
export const btnClass = (variant = 'primary') => {
  if (variant === 'secondary') return 'btn-secondary inline-flex items-center justify-center';
  return 'btn-primary inline-flex items-center justify-center';
};

export default function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  const classes = `${btnClass(variant)} ${className}`.trim();
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
