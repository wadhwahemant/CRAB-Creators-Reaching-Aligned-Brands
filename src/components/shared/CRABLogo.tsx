import React, { useEffect, useState } from 'react';
import '../../styles/animations.css';
import creatorLogo from '../../assets/crab/crab-creator.png';
import businessLogo from '../../assets/crab/crab-business.png';

export type LogoVariant = 'creator' | 'business' | 'neutral';
export type LogoSize = 'nav' | 'hero' | 'transition' | 'compact';

interface CRABLogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  style?: React.CSSProperties;
  showText?: boolean;
}

export const CRABLogo: React.FC<CRABLogoProps> = ({
  variant = 'neutral',
  size = 'nav',
  className = '',
  style = {},
  showText = true,
}) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeMap = {
    compact: { width: '32px', height: '32px', fontSize: '1rem' },
    nav: { width: '40px', height: '40px', fontSize: '1.25rem' },
    hero: { width: '120px', height: '120px', fontSize: '3rem' },
    transition: { width: '160px', height: '160px', fontSize: '4rem' }
  };

  const currentSize = sizeMap[size];
  const isBusiness = variant === 'business';
  
  // Choose the asset. If neutral, we can default to creator or render both and crossfade.
  // We'll use the creator logo for neutral/creator and business for business.
  const src = isBusiness ? businessLogo : creatorLogo;
  const glowColor = 'var(--glow-color)';
  
  return (
    <div 
      className={`crab-logo crab-logo--${size} ${className} ${mounted ? 'is-mounted' : ''}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'hero' ? '1.5rem' : '0.75rem',
        cursor: 'pointer',
        position: 'relative',
        ...style
      }}
    >
      <div 
        className="crab-logo-icon-wrapper"
        style={{
          position: 'relative',
          width: currentSize.width,
          height: currentSize.height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Subtle orbital energy (only on hero/transition) */}
        {(size === 'hero' || size === 'transition') && (
          <div className="crab-orbital-ring" style={{
            position: 'absolute',
            inset: '-20%',
            borderRadius: '50%',
            border: `1px solid ${glowColor}`,
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
            opacity: 0.3,
            animation: 'spin-slow 20s linear infinite',
            pointerEvents: 'none'
          }} />
        )}

        {/* The Original Image Asset */}
        <img 
          src={src} 
          alt="CRAB Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: `drop-shadow(0 0 8px ${glowColor})`,
            transition: 'all var(--duration-normal) var(--ease-out)',
            animation: 'logo-breathe 4s infinite alternate ease-in-out',
            mixBlendMode: 'screen', // Helps eliminate remaining white edges
            position: 'relative',
            zIndex: 2
          }}
          className="crab-img-mark"
        />

        {/* Occasional Light Sweep Effect */}
        <div 
          style={{
            position: 'absolute',
            inset: '-20%',
            background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            transform: 'skewX(-20deg) translateX(-150%)',
            animation: 'light-sweep 15s ease-in-out infinite',
            pointerEvents: 'none',
            mixBlendMode: 'color-dodge',
            borderRadius: '50%',
            overflow: 'hidden',
            zIndex: 3
          }}
        />
      </div>

      {showText && (
        <div 
          className="crab-logo-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: currentSize.fontSize,
            fontWeight: 800,
            letterSpacing: '0.05em',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            position: 'relative',
            textShadow: `0 0 10px ${glowColor}`,
            animation: 'logo-breathe 4s infinite alternate ease-in-out',
          }}
        >
          CRAB
        </div>
      )}
    </div>
  );
};
