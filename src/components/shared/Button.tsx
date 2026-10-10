import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glass' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  style,
  ...props
}, ref) => {
  
  // Map variants to CSS styles (could also use utility classes)
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'var(--font-button)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled || isLoading ? 0.6 : 1,
    transition: 'all var(--duration-fast) var(--ease-standard)',
    ...style,
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--accent-primary)',
          color: '#ffffff',
          boxShadow: 'var(--shadow-md)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--bg-surface-elevated)',
          color: 'var(--text-primary)',
          borderColor: 'var(--border-color)',
        };
      case 'glass':
        return {
          backgroundColor: 'var(--bg-surface-glass)',
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-primary)',
        };
      case 'danger':
        return {
          backgroundColor: 'var(--error)',
          color: '#ffffff',
        };
      default:
        return {};
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { padding: 'var(--space-xs) var(--space-sm)', fontSize: 'var(--font-body-sm)' };
      case 'md':
        return { padding: '0.6rem var(--space-lg)', fontSize: '1rem' };
      case 'lg':
        return { padding: '1rem var(--space-xl)', fontSize: '1.125rem' };
      default:
        return {};
    }
  };

  const combinedStyle = { ...baseStyle, ...getVariantStyles(), ...getSizeStyles() };

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={`crab-button hover-lift ${className}`}
      style={combinedStyle}
      {...props}
    >
      {isLoading ? (
        <span className="spinner" style={{ width: '1em', height: '1em', border: '2px solid currentColor', borderRightColor: 'transparent', borderRadius: '50%', animation: 'spin-slow 1s linear infinite' }} />
      ) : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
});

Button.displayName = 'Button';
