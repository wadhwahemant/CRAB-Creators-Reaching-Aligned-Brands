import { Link, useLocation } from 'react-router-dom';
import { CRABLogo } from './CRABLogo';
import { Button } from './Button';

export const Navbar = () => {
  const location = useLocation();

  const isPublic = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';
  
  if (!isPublic) return null; // Only show top navbar on public/auth pages

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-sticky)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--bg-surface-glass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-ambient)',
        transition: 'all var(--duration-normal) var(--ease-standard)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link 
          to="/" 
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        >
          <CRABLogo variant="neutral" size="nav" showText={true} />
        </Link>
        
        <nav style={{ display: 'flex', gap: '2rem', marginLeft: '2rem' }}>
          <Link to="/#how-it-works" className="nav-link">How it Works</Link>
          <Link to="/#ai-matching" className="nav-link">AI Matching</Link>
          <Link to="/#features" className="nav-link">Features</Link>
        </nav>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to="/login" className="nav-link-login">
          Sign In
        </Link>
        <Link to="/signup">
          <Button variant="primary">Get Started</Button>
        </Link>
      </div>
    </header>
  );
};
