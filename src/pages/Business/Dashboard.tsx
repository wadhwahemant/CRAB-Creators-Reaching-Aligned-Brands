import { useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/shared/Layout';
import { GlassCard } from '../../components/shared/GlassCard';
import { Button } from '../../components/shared/Button';

const Dashboard = () => {
  const { setTheme } = useTheme();
  const { campaigns, applications, creators, businessOnboardingDismissed, setBusinessOnboardingDismissed } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    setTheme('business');
  }, [setTheme]);

  const activeCampaigns = campaigns.filter(c => c.brand.id === 'b1'); // Mocking our logged-in business as b1 (NOVA Audio)
  const pendingApplications = applications.filter(a => activeCampaigns.some(c => c.id === a.campaignId) && a.status === 'Under Review');

  return (
    <Layout type="business">
      <div>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', animation: 'fade-in 0.6s var(--ease-out) 0.08s both' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Welcome back, NOVA Audio.</h1>
            <p style={{ color: 'var(--text-muted)' }}>Here's your campaign and creator intelligence overview.</p>
          </div>
        </header>

        {/* Onboarding Panel */}
        {!businessOnboardingDismissed && (
          <GlassCard style={{ padding: '2rem', marginBottom: '3rem', position: 'relative', borderLeft: '4px solid var(--accent-primary)', animation: 'fade-in 0.6s var(--ease-out) 0.14s both' }}>
            <button onClick={() => setBusinessOnboardingDismissed(true)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.25rem' }}>&times;</button>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome to CRAB for Business</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Follow these steps to launch your first influencer marketing campaign.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>✓</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Complete Profile</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Business info added</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>2</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Create Campaign</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Publish your first brief</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>3</div>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Review Applicants</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Shortlist top creators</p>
                </div>
              </div>
            </div>
          </GlassCard>
        )}

        {/* Metrics Grid */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem', animation: 'fade-in 0.6s var(--ease-out) 0.22s both' }}>
          {[
            { label: 'Active Campaigns', value: activeCampaigns.length.toString(), trend: 'Ongoing' },
            { label: 'Total Creators', value: creators.length.toString(), trend: 'In network' },
            { label: 'Pending Applications', value: pendingApplications.length.toString(), trend: 'Requires review' },
            { label: 'Total Campaign Spend', value: '$12.5K', trend: 'Year to date' },
          ].map((metric, i) => (
            <GlassCard key={i} interactive style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{metric.label}</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{metric.value}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{metric.trend}</div>
            </GlassCard>
          ))}
        </section>

        {/* Active Campaigns */}
        <section style={{ animation: 'fade-in 0.6s var(--ease-out) 0.3s both' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Active Campaigns</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Manage your ongoing creator collaborations.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {activeCampaigns.map(campaign => {
              const campApps = applications.filter(a => a.campaignId === campaign.id);
              return (
                <GlassCard key={campaign.id} interactive style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}></div>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{campaign.title}</h3>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        <span>{campaign.niche}</span>
                        <span>•</span>
                        <span>{campaign.compensation}</span>
                        <span>•</span>
                        <span style={{ color: 'var(--accent-primary)' }}>{campApps.length} Applicants</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ padding: '0.25rem 0.75rem', background: 'var(--accent-soft)', color: 'var(--accent-primary)', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 500 }}>Active</span>
                    <Button variant="primary" onClick={() => navigate(`/business/campaigns/${campaign.id}/review`)}>
                      Review Applications
                    </Button>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
