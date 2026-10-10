import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { ArrowLeft, Check, X, Clock, PlayCircle, Camera } from 'lucide-react';
import type { Application } from '../../types';

import { Layout } from '../../components/shared/Layout';

const CampaignReview = () => {
  const { campaignId } = useParams<{ campaignId: string }>();
  const { setTheme } = useTheme();
  const { campaigns, getApplicationsForCampaign, updateApplicationStatus } = useData();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'Applied' | 'Under Review' | 'Shortlisted'>('Applied');

  useEffect(() => {
    setTheme('business');
  }, [setTheme]);

  const campaign = campaigns.find(c => c.id === campaignId);
  const applications = campaign ? getApplicationsForCampaign(campaign.id) : [];

  if (!campaign) {
    return <div style={{ padding: '4rem', textAlign: 'center', color: '#fff' }}>Campaign not found. <Link to="/business/dashboard" style={{ color: 'var(--accent-primary)' }}>Go back</Link></div>;
  }

  const handleStatusChange = (appId: string, newStatus: Application['status']) => {
    updateApplicationStatus(appId, newStatus);
  };

  const filteredApps = applications.filter(a => a.status === activeTab);

  return (
    <Layout type="business">
      <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <button onClick={() => navigate('/business/dashboard')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <ArrowLeft size={18} /> Back to Dashboard
        </button>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ color: 'var(--text-muted)' }}>Viewing applications for:</span>
          <span className="glass-panel" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>{campaign.title}</span>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Sidebar Filters */}
        <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Application Stages</div>
          
          {(['Applied', 'Under Review', 'Shortlisted'] as const).map(tab => {
            const count = applications.filter(a => a.status === tab).length;
            return (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.75rem 1rem', background: activeTab === tab ? 'var(--bg-elevated)' : 'transparent',
                  color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-muted)',
                  border: activeTab === tab ? '1px solid var(--border-color)' : '1px solid transparent',
                  borderRadius: 'var(--radius-md)', cursor: 'pointer', textAlign: 'left', fontWeight: activeTab === tab ? 600 : 400
                }}
              >
                <span>{tab}</span>
                <span style={{ padding: '0.125rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem' }}>{count}</span>
              </button>
            )
          })}
        </div>

        {/* Applications List */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredApps.length === 0 ? (
            <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No applications in this stage.
            </div>
          ) : (
            filteredApps.map(app => {
              if (!app.creator) return null;
              const { creator } = app;
              return (
                <div key={app.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}></div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{creator.name}</h3>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{creator.location} • {creator.niche}</div>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
                          {creator.platforms.map(p => (
                            <span key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                              {p.name === 'YouTube' ? <PlayCircle size={14} color="#ff0000" /> : <Camera size={14} color="#e1306c" />}
                              <strong>{p.followers}</strong> followers
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {creator.matchScore && (
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'var(--accent-soft)', color: 'var(--accent-primary)', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '0.875rem' }}>
                          {creator.matchScore}% Match
                        </div>
                      </div>
                    )}
                  </div>

                  <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
                    <p style={{ color: 'var(--text-primary)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                      "I would love to be part of this campaign! {creator.matchReason}"
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      Applied {app.appliedAt ? new Date(app.appliedAt).toLocaleDateString() : 'recently'}
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {app.status === 'Applied' && (
                        <button onClick={() => handleStatusChange(app.id, 'Under Review')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                          <Clock size={16} /> Mark Under Review
                        </button>
                      )}
                      
                      {(app.status === 'Applied' || app.status === 'Under Review') && (
                        <>
                          <button onClick={() => handleStatusChange(app.id, 'Rejected')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-muted)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                            <X size={16} /> Reject
                          </button>
                          <button onClick={() => handleStatusChange(app.id, 'Shortlisted')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--accent-primary)', border: 'none', color: '#fff', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: 500 }}>
                            <Check size={16} /> Shortlist
                          </button>
                        </>
                      )}

                      {app.status === 'Shortlisted' && (
                        <>
                          <button onClick={() => handleStatusChange(app.id, 'Under Review')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-muted)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                            <ArrowLeft size={16} /> Back to Review
                          </button>
                          <button onClick={() => alert('Contract and messaging system not yet implemented in MVP.')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#10b981', border: 'none', color: '#fff', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: 500 }}>
                            <Check size={16} /> Approve & Hire
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default CampaignReview;
