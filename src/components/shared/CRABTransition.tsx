import { useEffect, useState } from 'react';
import { CRABLogo, type LogoVariant } from './CRABLogo';
import '../../styles/animations.css';

export type TransitionType = 'cosmic-convergence' | 'orbital-energy' | 'simple-fade';

interface CRABTransitionProps {
  type?: TransitionType;
  variant?: LogoVariant;
  onComplete?: () => void;
  isActive: boolean;
}

/**
 * CRABTransition
 * Foundation for the cinematic logo transitions.
 * Currently establishes the architecture for future implementation.
 */
export const CRABTransition: React.FC<CRABTransitionProps> = ({
  type = 'simple-fade',
  variant = 'neutral',
  onComplete,
  isActive,
}) => {
  const [stage, setStage] = useState<'idle' | 'animating' | 'done'>('idle');

  useEffect(() => {
    if (isActive && stage === 'idle') {
      setStage('animating');
      
      // Determine duration based on transition type
      let duration = 300; // simple-fade
      if (type === 'cosmic-convergence') duration = 2000; // 1.5 - 2.5s
      if (type === 'orbital-energy') duration = 700; // 500 - 900ms

      // Check reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        duration = 300; // Fallback to simple fast fade
      }

      const timer = setTimeout(() => {
        setStage('done');
        if (onComplete) onComplete();
      }, duration);

      return () => clearTimeout(timer);
    } else if (!isActive) {
      setStage('idle');
    }
  }, [isActive, type, stage, onComplete]);

  if (!isActive && stage === 'idle') return null;

  return (
    <div 
      className={`crab-transition-overlay ${stage === 'animating' ? 'fade-in' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999, // Explicit high z-index for full-screen transitions
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-primary)',
        opacity: stage === 'animating' ? 1 : 0,
        pointerEvents: stage === 'animating' ? 'all' : 'none',
        transition: 'opacity var(--duration-normal) var(--ease-standard)'
      }}
    >
      <div 
        className="crab-transition-content"
        style={{
          animation: stage === 'animating' && type !== 'simple-fade' 
            ? `cosmicConvergence var(--duration-cinematic) var(--ease-cinematic) forwards`
            : 'none'
        }}
      >
        <CRABLogo variant={variant} size="hero" />
        
        {/* Foundation for particle/light layers */}
        {type === 'cosmic-convergence' && (
          <div className="light-trace" style={{ animation: 'lightTrace var(--duration-cinematic) forwards' }} />
        )}
      </div>
    </div>
  );
};
