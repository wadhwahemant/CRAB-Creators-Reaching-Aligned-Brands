import { useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/shared/Layout';

const Applications = () => {
  const { setTheme } = useTheme();
  const { applications, campaigns } = useData();

  useEffect(() => {
    setTheme('creator');
  }, [setTheme]);

  return (
    <Layout type="creator">
      <div>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>My Campaigns</h1>
          <p style={{ color: 'var(--text-muted)' }}>Track your applications and ongoing collaborations.</p>
        </header>

        {applications.length === 0 ? (
          <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            You haven't applied to or saved any campaigns yet. <br/><br/>
            <Link to="/creator/discover" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Discover Brands</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {applications.map(app => {
              const campaign = campaigns.find(c => c.id === app.campaignId);
              if (!campaign) return null;
              
              const statusColor = app.status === 'Applied' ? '#3b82f6' : app.status === 'Saved' ? 'var(--text-muted)' : '#10b981';
              
              return (
                <div key={app.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}></div>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{campaign.title}</h3>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        <span>{campaign.brand.name}</span>
                        <span>•</span>
                        <span>{campaign.compensation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: statusColor, fontWeight: 600 }}>{app.status}</div>
                      {app.appliedAt && <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{new Date(app.appliedAt).toLocaleDateString()}</div>}
                    </div>
                    <Link to={`/creator/campaigns/${campaign.id}`} style={{ padding: '0.5rem 1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)' }}>
                      View
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Applications;
