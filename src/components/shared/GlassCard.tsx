import * as React from 'react';

export type GlassCardVariant = 'normal' | 'glass' | 'elevated';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GlassCardVariant;
  interactive?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(({
  children,
  variant = 'glass',
  interactive = false,
  className = '',
  ...props
}, ref) => {
  
  const getVariantClass = () => {
    switch (variant) {
      case 'normal':
        return 'glass-subtle';
      case 'elevated':
        return 'glass-elevated';
      case 'glass':
      default:
        return 'glass'; // Using the standard glass class defined in theme.css
    }
  };

  const interactiveClass = interactive ? 'hover-lift' : '';

  return (
    <div
      ref={ref}
      className={`glass-card ${getVariantClass()} ${interactiveClass} ${className}`}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        transition: 'all var(--duration-normal) var(--ease-standard)',
      }}
      {...props}
    >
      {children}
    </div>
  );
});

GlassCard.displayName = 'GlassCard';
