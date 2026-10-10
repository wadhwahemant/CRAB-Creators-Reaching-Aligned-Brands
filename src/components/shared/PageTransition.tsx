import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CRABLogo } from './CRABLogo';
import { useTheme } from '../../contexts/ThemeContext';

interface PageTransitionProps {
  children: React.ReactNode;
}

const MulticolorLine = ({ duration = '2s' }: { duration?: string }) => (
  <div style={{
    width: '100px',
    height: '2px',
    margin: '1rem auto 0',
    background: 'linear-gradient(90deg, #6485FF, #00D4FF, #A855F7, #FF7A1A)',
    backgroundSize: '200% 100%',
    borderRadius: '2px',
    animation: `multicolor-line-sweep ${duration} ease-out forwards, gradient-shift 4s linear infinite`,
    opacity: 0
  }} />
);

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const { theme } = useTheme();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Cinematic Entry on first load
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2000); // 2s initial cinematic reveal
    return () => clearTimeout(timer);
  }, []);

  const [transitionMode, setTransitionMode] = useState<'none' | 'internal' | 'environment'>('none');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      
      const isLocCreator = location.pathname.startsWith('/creator');
      const isDispCreator = displayLocation.pathname.startsWith('/creator');
      const isLocBusiness = location.pathname.startsWith('/business');
      const isDispBusiness = displayLocation.pathname.startsWith('/business');
      
      const isInternalCreator = isLocCreator && isDispCreator;
      const isInternalBusiness = isLocBusiness && isDispBusiness;
      
      const mode = (isInternalCreator || isInternalBusiness) ? 'internal' : 'environment';
      setTransitionMode(mode);
      setIsTransitioning(true);
      
      const midpoint = mode === 'internal' ? 150 : 500;
      const total = mode === 'internal' ? 300 : 1000;
      
      // Defocus current page
      const timer1 = setTimeout(() => {
        setDisplayLocation(location); // Swap content
      }, midpoint);

      // Reveal new page
      const timer2 = setTimeout(() => {
        setIsTransitioning(false);
        setTransitionMode('none');
      }, total);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [location, displayLocation]);

  return (
    <>
      {/* 1. First Load Cinematic Reveal Overlay */}
      {isFirstLoad && (
        <div 
          className="cinematic-entry-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'cinematic-fade-out 1s var(--ease-cinematic) 2.5s forwards',
            pointerEvents: 'none', // Allow clicks behind it as it fades
          }}
        >
          <div style={{ animation: 'cinematic-logo-reveal 1.5s var(--ease-cinematic) forwards' }}>
            <CRABLogo size="transition" showText={false} variant={theme} />
            <MulticolorLine duration="1.5s" />
          </div>
        </div>
      )}

      {/* 2. Environment Transition Overlay (Only for type B) */}
      {transitionMode === 'environment' && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99998,
            backgroundColor: 'var(--bg-primary)',
            opacity: isTransitioning ? 0.9 : 0,
            pointerEvents: 'none',
            transition: 'opacity 0.4s var(--ease-cinematic)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div 
            style={{
              opacity: isTransitioning ? 1 : 0,
              transform: isTransitioning ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.4s var(--ease-cinematic)',
            }}
          >
            {isTransitioning && (
              <>
                <CRABLogo size="hero" showText={false} variant={theme} />
                <MulticolorLine duration="0.4s" />
              </>
            )}
          </div>
        </div>
      )}

      {/* 3. Page Content */}
      <div 
        style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          opacity: isTransitioning ? (transitionMode === 'internal' ? 0.3 : 0) : 1,
          transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
          filter: isTransitioning ? 'blur(5px)' : 'blur(0px)',
          transition: transitionMode === 'internal' ? 'all 0.15s ease-out' : 'all 0.5s var(--ease-cinematic)'
        }}
      >
        {displayLocation === location ? children : null}
      </div>
    </>
  );
};
