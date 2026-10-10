import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { GlassCard } from '../../components/shared/GlassCard';
import { Button } from '../../components/shared/Button';
import { CRABLogo } from '../../components/shared/CRABLogo';

const Signup: React.FC = () => {
  const [role, setLocalRole] = useState<'creator' | 'business' | null>(null);
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  const handleRoleSelect = (selectedRole: 'creator' | 'business') => {
    setLocalRole(selectedRole);
    setTheme(selectedRole);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'creator') navigate('/creator/dashboard');
    else navigate('/business/dashboard');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
      <GlassCard style={{ padding: '3rem', width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fade-in 0.6s var(--ease-out) both' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
          <CRABLogo size="hero" style={{ transform: 'scale(0.7)' }} variant={role || 'neutral'} />
        </div>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>Join CRAB</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Choose how you want to use the platform.</p>

        {!role ? (
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <div data-theme="creator" style={{ flex: 1 }}>
              <GlassCard 
                interactive
                style={{ height: '100%', padding: '2rem', textAlign: 'center', cursor: 'pointer', border: '1px solid var(--glow-color)' }}
                onClick={() => handleRoleSelect('creator')}
              >
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>I'm a Creator</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Discover brands and manage partnerships.</p>
              </GlassCard>
            </div>
            
            <div data-theme="business" style={{ flex: 1 }}>
              <GlassCard 
                interactive
                style={{ height: '100%', padding: '2rem', textAlign: 'center', cursor: 'pointer', border: '1px solid var(--glow-color)' }}
                onClick={() => handleRoleSelect('business')}
              >
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>I'm a Business</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Find creators and launch campaigns.</p>
              </GlassCard>
            </div>
          </div>
        ) : (
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSignup}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Signing up as {role}</span>
              <button type="button" onClick={() => setLocalRole(null)} style={{ background: 'transparent', border: 'none', color: 'var(--accent-primary)', cursor: 'pointer' }}>Change</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Full Name</label>
              <input type="text" required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }} placeholder="Alex River" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email Address</label>
              <input type="email" required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }} placeholder="alex@example.com" />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Password</label>
              <input type="password" required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }} placeholder="••••••••" />
            </div>

            <Button variant="primary" type="submit" style={{ marginTop: '1rem', padding: '0.75rem' }}>
              Create Account
            </Button>
          </form>
        )}

        <div style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--text-primary)' }}>Sign in</Link>
        </div>
      </GlassCard>
    </div>
  );
};

export default Signup;
