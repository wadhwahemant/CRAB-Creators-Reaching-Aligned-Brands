import { useEffect, useState } from 'react';
/**
 * CRABCursor
 * Foundation for the custom cursor system.
 * Not active globally yet, as per Phase 2 instructions.
 */
export const CRABCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Disable on reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Determine if hovering over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                          target.tagName.toLowerCase() === 'button' || 
                          target.tagName.toLowerCase() === 'a';
      
      setIsPointer(isClickable);
      if (!isActive) setIsActive(true);
    };

    const handleMouseLeave = () => setIsActive(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [isActive]);

  if (!isActive) return null;

  const glowColor = 'var(--glow-color)';

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
      }}
    >
      <div 
        style={{
          width: isPointer ? '32px' : '12px',
          height: isPointer ? '32px' : '12px',
          backgroundColor: isPointer ? 'transparent' : glowColor,
          border: isPointer ? `1px solid ${glowColor}` : 'none',
          borderRadius: '50%',
          boxShadow: isPointer ? `0 0 10px ${glowColor} inset, 0 0 10px ${glowColor}` : `0 0 15px ${glowColor}`,
          transition: 'all 0.15s ease-out'
        }}
      />
    </div>
  );
};
