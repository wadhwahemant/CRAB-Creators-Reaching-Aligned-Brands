import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { ArrowLeft, PlayCircle, Camera } from 'lucide-react';

import { Layout } from '../../components/shared/Layout';

const CreatorProfileView = () => {
  const { creatorId } = useParams<{ creatorId: string }>();
  const { setTheme } = useTheme();
  const { creators } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    setTheme('business');
  }, [setTheme]);

  const creator = creators.find(c => c.id === creatorId);

  if (!creator) {
    return <div style={{ padding: '4rem', textAlign: 'center', color: '#fff' }}>Creator not found. <Link to="/business/discover" style={{ color: 'var(--accent-primary)' }}>Go back</Link></div>;
  }

  return (
    <Layout type="business">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Back
      </button>

      <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ width: '96px', height: '96px', borderRadius: '50%', background: 'var(--bg-elevated)', border: '2px solid var(--border-color)' }}></div>
            <div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>{creator.name}</h1>
              <span style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>{creator.location} • {creator.niche}</span>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <button style={{ padding: '0.75rem 2rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>
              Invite to Campaign
            </button>
          </div>
        </header>

        {creator.matchReason && (
          <div style={{ padding: '1.5rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-primary)' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1.125rem' }}>AI Audience Match: {creator.matchScore}%</strong>
            <span style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{creator.matchReason}</span>
          </div>
        )}

        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>About</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.125rem' }}>{creator.bio}</p>
        </div>

        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Connected Platforms</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {creator.platforms.map(p => (
              <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                {p.name === 'YouTube' ? <PlayCircle size={32} color="#ff0000" /> : <Camera size={32} color="#e1306c" />}
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.125rem' }}>{p.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{p.handle}</div>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
                    <span><strong>{p.followers}</strong> followers</span>
                    <span style={{ color: 'var(--accent-primary)' }}><strong>{p.engagement}</strong> ER</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default CreatorProfileView;
