import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-color)', padding: '4rem 4rem 2rem', marginTop: 'auto', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px', color: 'var(--text-primary)' }}>CRAB</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
            The AI-powered creator-brand collaboration platform. We make partnerships more relevant, transparent, and easier to manage.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ fontWeight: 600, color: 'var(--text-primary)' }}>For Creators</h4>
          <Link to="/features/creators" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Discover Brands</Link>
          <Link to="/features/creators" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Manage Applications</Link>
          <Link to="/features/creators" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Analytics & Insights</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ fontWeight: 600, color: 'var(--text-primary)' }}>For Businesses</h4>
          <Link to="/features/businesses" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Find Creators</Link>
          <Link to="/features/businesses" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Launch Campaigns</Link>
          <Link to="/features/businesses" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Review Applications</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Company</h4>
          <Link to="/about" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>About Us</Link>
          <Link to="/contact" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Contact</Link>
          <Link to="/privacy" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Privacy Policy</Link>
          <Link to="/terms" className="hover-lift" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Terms of Service</Link>
        </div>

      </div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <div>&copy; {new Date().getFullYear()} CRAB Platform. All rights reserved.</div>
      </div>
    </footer>
  );
};
