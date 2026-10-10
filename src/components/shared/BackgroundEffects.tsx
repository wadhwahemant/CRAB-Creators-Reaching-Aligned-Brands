import React, { useEffect, useState, useMemo } from 'react';
import '../../styles/backgrounds.css';

export const BackgroundEffects = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize particle generation so it doesn't recalculate on re-renders, preventing layout thrashing
  const stars = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1 + 'px',
    opacity: Math.random() * 0.5 + 0.1,
    animationDuration: `${Math.random() * 10 + 10}s`,
    animationDelay: `${Math.random() * 5}s`,
  })), []);

  const particles = useMemo(() => Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2 + 'px',
    animationDuration: `${Math.random() * 20 + 20}s`,
    animationDelay: `${Math.random() * 10}s`,
    tx: (Math.random() - 0.5) * 100,
    ty: (Math.random() - 0.5) * 100,
  })), []);

  const energyTraces = useMemo(() => Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    angle: Math.random() * 360,
    animationDelay: `${Math.random() * 15}s`,
    animationDuration: '8s'
  })), []);

  if (!mounted) return null;

  return (
    <div 
      className="crab-background-system"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-background)',
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        transition: 'background-color var(--duration-cinematic) var(--ease-out)',
      }}
    >
      {/* Layer 2: Ambient Light */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'var(--ambient-light)',
          opacity: 0.8,
          transition: 'background-image var(--duration-cinematic) var(--ease-out)',
        }}
      />

      {/* Layer 3: Sparse Tiny Stars (Static Depth) */}
      {stars.map(star => (
        <div 
          key={`star-${star.id}`}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            opacity: star.opacity,
            animation: `pulse-opacity ${star.animationDuration} infinite ease-in-out ${star.animationDelay}`,
          }}
        />
      ))}

      {/* Layer 4: Slow Particles */}
      {particles.map(p => (
        <div 
          key={`particle-${p.id}`}
          className="crab-particle"
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: 'var(--accent-primary)',
            borderRadius: '50%',
            opacity: 0,
            filter: 'blur(1px)',
            boxShadow: '0 0 10px var(--glow-color)',
            animation: `drift-particle ${p.animationDuration} infinite linear ${p.animationDelay}`,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`
          } as React.CSSProperties}
        />
      ))}

      {/* Layer 5: Subtle Orbital Geometry */}
      <div 
        className="crab-orbital-layer"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150vmax',
          height: '150vmax',
          border: '1px solid var(--glow-color)',
          borderRadius: '50%',
          opacity: 0.05,
          animation: 'spin-slow 150s linear infinite',
        }}
      />
      <div 
        className="crab-orbital-layer"
        style={{
          position: 'absolute',
          top: '40%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          width: '100vmax',
          height: '100vmax',
          border: '1px dashed var(--glow-color)',
          borderRadius: '50%',
          opacity: 0.03,
          animation: 'spin-slow 100s linear infinite reverse',
        }}
      />

      {/* Layer 6: Occasional Energy Traces */}
      {energyTraces.map(trace => (
        <div 
          key={`trace-${trace.id}`}
          style={{
            position: 'absolute',
            top: trace.top,
            left: trace.left,
            width: '200px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
            transform: `rotate(${trace.angle}deg)`,
            opacity: 0,
            animation: `trace-flash ${trace.animationDuration} infinite ease-out ${trace.animationDelay}`,
          }}
        />
      ))}
    </div>
  );
};
