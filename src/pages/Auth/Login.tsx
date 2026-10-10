import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { CRABLogo } from '../../components/shared/CRABLogo';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  const handleLogin = (e: React.FormEvent, role: 'creator' | 'business') => {
    e.preventDefault();
    setTheme(role);
    if (role === 'creator') navigate('/creator/dashboard');
    else navigate('/business/dashboard');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
      <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fade-in 0.6s var(--ease-out) both' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
          <CRABLogo size="hero" style={{ transform: 'scale(0.7)' }} />
        </div>
        <h1 style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1rem' }}>Welcome Back</h1>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email Address</label>
            <input type="email" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }} placeholder="alex@example.com" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Password</label>
            <input type="password" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }} placeholder="••••••••" />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" style={{ fontSize: '0.875rem', color: 'var(--accent-primary)' }}>Forgot password?</a>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={(e) => handleLogin(e, 'creator')} style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', background: '#6485FF', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
              Log in as Creator
            </button>
            <button onClick={(e) => handleLogin(e, 'business')} style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--radius-md)', background: '#FF7A1A', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
              Log in as Business
            </button>
          </div>
        </form>

        <div style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--text-primary)' }}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
