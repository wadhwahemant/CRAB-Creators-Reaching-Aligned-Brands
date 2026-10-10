import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { PlayCircle, Camera, Check } from 'lucide-react';
import { Layout } from '../../components/shared/Layout';

const Profile = () => {
  const { setTheme } = useTheme();
  const { creatorNiche } = useData();
  
  const [youtubeConnected] = useState(true);
  const [instagramConnected, setInstagramConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    setTheme('creator');
  }, [setTheme]);

  const connectPlatform = (platform: string) => {
    setIsConnecting(true);
    setTimeout(() => {
      if (platform === 'instagram') setInstagramConnected(true);
      setIsConnecting(false);
    }, 1500);
  };

  return (
    <Layout type="creator">
      <div>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Creator Profile</h1>
          <p style={{ color: 'var(--text-muted)' }}>Manage your portfolio and connected accounts.</p>
        </header>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Profile Information</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Display Name</label>
                    <input type="text" defaultValue="Alex River" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Primary Niche</label>
                    <input type="text" readOnly value={creatorNiche} style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', color: 'var(--text-muted)', outline: 'none' }} />
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Bio</label>
                  <textarea rows={4} defaultValue="Tech reviewer and mechanical keyboard enthusiast. Creating content to help developers find the best gear." style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }} />
                </div>
                
                <button type="button" style={{ alignSelf: 'flex-end', padding: '0.75rem 1.5rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>Save Changes</button>
              </form>
            </div>
          </div>
          
          <div style={{ flex: 1 }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Social Accounts</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <PlayCircle size={24} color="#ff0000" />
                    <div>
                      <div style={{ fontWeight: 500 }}>YouTube</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>@alexriver • 124K subs</div>
                    </div>
                  </div>
                  {youtubeConnected ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#10b981', fontSize: '0.875rem' }}><Check size={16} /> Connected</span>
                  ) : (
                    <button style={{ padding: '0.5rem 1rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', cursor: 'pointer' }}>Connect</button>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Camera size={24} color="#e1306c" />
                    <div>
                      <div style={{ fontWeight: 500 }}>Instagram</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Not connected</div>
                    </div>
                  </div>
                  {instagramConnected ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#10b981', fontSize: '0.875rem' }}><Check size={16} /> Connected</span>
                  ) : (
                    <button onClick={() => connectPlatform('instagram')} disabled={isConnecting} style={{ padding: '0.5rem 1rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', cursor: isConnecting ? 'wait' : 'pointer' }}>
                      {isConnecting ? 'Connecting...' : 'Connect'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
