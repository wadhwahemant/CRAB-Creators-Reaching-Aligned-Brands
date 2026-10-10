import { useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/shared/Layout';
import { GlassCard } from '../../components/shared/GlassCard';
import { Button } from '../../components/shared/Button';

const niches = ['Technology', 'Beauty', 'Fitness', 'Gaming', 'Lifestyle', 'Travel'];

const Dashboard = () => {
  const { setTheme } = useTheme();
  const { campaigns, creatorNiche, setCreatorNiche, getApplication, creatorOnboardingDismissed, setCreatorOnboardingDismissed } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    setTheme('creator');
  }, [setTheme]);

  const nicheCampaigns = campaigns.filter(c => c.niche === creatorNiche);

  return (
    <Layout type="creator">
      <div>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', animation: 'fade-in 0.6s var(--ease-out) 0.08s both' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Welcome back, Alex.</h1>
            <p style={{ color: 'var(--text-muted)' }}>Here's what's happening with your creator journey.</p>
          </div>
        </header>

        {/* Onboarding Panel */}
        {!creatorOnboardingDismissed && (
          <GlassCard style={{ padding: '2rem', marginBottom: '3rem', position: 'relative', animation: 'fade-in 0.6s var(--ease-out) 0.14s both' }}>
            <button onClick={() => setCreatorOnboardingDismissed(true)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.25rem' }}>&times;</button>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Getting Started with CRAB</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Complete these steps to unlock AI matching and find the perfect brand partnerships.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>✓</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Complete Profile</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Basic info added</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>✓</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Connect Socials</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>YouTube connected</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>3</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Set Preferences</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Select your primary niche below</p>
                </div>
              </div>
            </div>
          </GlassCard>
        )}

        {/* Metrics Grid */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem', animation: 'fade-in 0.6s var(--ease-out) 0.22s both' }}>
          {[
            { label: 'Profile Views', value: '12.4K', trend: '+14%' },
            { label: 'Engagement Rate', value: '4.8%', trend: '+2.1%' },
            { label: 'Active Collaborations', value: '3', trend: '0%' },
            { label: 'Pending Applications', value: '5', trend: '+1' },
          ].map((metric, i) => (
            <GlassCard key={i} interactive style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{metric.label}</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{metric.value}</div>
              <div style={{ color: 'var(--accent-secondary)', fontSize: '0.875rem' }}>{metric.trend} this week</div>
            </GlassCard>
          ))}
        </section>

        {/* Featured Brands */}
        <section style={{ animation: 'fade-in 0.6s var(--ease-out) 0.3s both' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Brands for Your Niche</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Discover brands that fit your audience and style.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Select Niche:</span>
              <select 
                value={creatorNiche}
                onChange={(e) => setCreatorNiche(e.target.value)}
                style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-elevated)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', outline: 'none' }}
              >
                {niches.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
          
          {nicheCampaigns.length === 0 ? (
            <GlassCard style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No campaigns found for this niche currently. Try discovering other opportunities.
            </GlassCard>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {nicheCampaigns.map(campaign => {
                const app = getApplication(campaign.id);
                return (
                  <GlassCard key={campaign.id} interactive style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}></div>
                      {campaign.matchScore && (
                        <span style={{ padding: '0.25rem 0.5rem', background: 'var(--accent-soft)', color: 'var(--accent-primary)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>
                          {campaign.matchScore}% Match
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{campaign.brand.name}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{campaign.title}</p>
                    </div>
                    
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)', fontStyle: 'italic', marginTop: '0.5rem' }}>
                      " {campaign.matchReason} "
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--bg-primary)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>{campaign.platform}</span>
                      <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--bg-primary)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>{campaign.compensation}</span>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <Button variant="secondary" onClick={() => navigate(`/creator/campaigns/${campaign.id}`)} style={{ flex: 1 }}>
                        Details
                      </Button>
                      <Button 
                        variant={app ? "secondary" : "primary"}
                        onClick={() => navigate(`/creator/campaigns/${campaign.id}`)}
                        disabled={!!app}
                        style={{ flex: 1 }}
                      >
                        {app ? app.status : 'Apply'}
                      </Button>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
