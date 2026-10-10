import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackgroundEffects } from './BackgroundEffects';
import { CRABCursor } from './CRABCursor';
import { PageTransition } from './PageTransition';

interface LayoutProps {
  children: ReactNode;
  type?: 'creator' | 'business' | 'public';
  hideFooter?: boolean;
}

export const Layout = ({ children, type = 'public', hideFooter = false }: LayoutProps) => {
  if (type === 'public') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <BackgroundEffects />
        <CRABCursor />
        <Navbar />
        <PageTransition>
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
        </PageTransition>
        {!hideFooter && <Footer />}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <BackgroundEffects />
      <CRABCursor />
      <Sidebar type={type} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Navbar />
        <PageTransition>
          <main style={{ flex: 1, padding: '2rem' }}>
            {children}
          </main>
        </PageTransition>
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
};
