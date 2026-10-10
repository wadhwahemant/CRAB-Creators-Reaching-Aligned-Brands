import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { ArrowLeft, CheckCircle } from 'lucide-react';

import { Layout } from '../../components/shared/Layout';

const CampaignDetail = () => {
  const { campaignId } = useParams<{ campaignId: string }>();
  const { setTheme } = useTheme();
  const { campaigns, getApplication, applyToCampaign } = useData();
  const navigate = useNavigate();
  
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    setTheme('creator');
  }, [setTheme]);

  const campaign = campaigns.find(c => c.id === campaignId);
  const application = campaign ? getApplication(campaign.id) : undefined;

  if (!campaign) {
    return <div style={{ padding: '4rem', textAlign: 'center', color: '#fff' }}>Campaign not found. <Link to="/creator/dashboard" style={{ color: 'var(--accent-primary)' }}>Go back</Link></div>;
  }

  const handleApply = () => {
    setIsApplying(true);
    setTimeout(() => {
      applyToCampaign(campaign.id);
      setIsApplying(false);
    }, 1000); // Simulate network delay
  };

  return (
    <Layout type="creator">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Back
      </button>

      <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}></div>
              <div>
                <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{campaign.title}</h1>
                <span style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>{campaign.brand.name} • {campaign.brand.industry}</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            {campaign.matchScore && (
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(100,133,255,0.1)', color: 'var(--accent-primary)', borderRadius: 'var(--radius-full)', fontWeight: 600, marginBottom: '1rem' }}>
                {campaign.matchScore}% AI Match Score
              </div>
            )}
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{campaign.compensation}</div>
          </div>
        </header>

        {campaign.matchReason && (
          <div style={{ padding: '1rem 1.5rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-primary)' }}>
            <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Why you match:</strong>
            <span style={{ color: 'var(--text-muted)' }}>{campaign.matchReason}</span>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Campaign Description</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{campaign.description}</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Deliverables</h3>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {campaign.deliverables.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid var(--border-color)', background: 'var(--bg-elevated)' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Requirements</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Platform</div>
                  <div>{campaign.platform}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Niche</div>
                  <div>{campaign.niche}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Audience</div>
                  <div>{campaign.audienceRequirements}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Deadline</div>
                  <div>{new Date(campaign.deadline).toLocaleDateString()}</div>
                </div>
              </div>
            </div>

            {application?.status === 'Applied' ? (
              <div style={{ padding: '1rem', background: 'rgba(100,133,255,0.1)', color: 'var(--accent-primary)', borderRadius: 'var(--radius-md)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                <CheckCircle size={24} />
                <span style={{ fontWeight: 600 }}>Application Submitted</span>
                <span style={{ fontSize: '0.875rem' }}>on {new Date(application.appliedAt!).toLocaleDateString()}</span>
              </div>
            ) : (
              <button 
                onClick={handleApply}
                disabled={isApplying || application?.status === 'Saved'}
                style={{ width: '100%', padding: '1rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer', fontSize: '1.125rem' }}
              >
                {isApplying ? 'Submitting...' : 'Apply for Campaign'}
              </button>
            )}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default CampaignDetail;
