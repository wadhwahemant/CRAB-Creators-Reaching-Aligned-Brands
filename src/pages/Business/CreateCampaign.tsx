import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

import { Layout } from '../../components/shared/Layout';

const CreateCampaign = () => {
  const { setTheme } = useTheme();
  const { addCampaign } = useData();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    niche: 'Technology',
    platform: 'YouTube',
    compensation: '',
    deadline: '',
    audienceRequirements: '',
    deliverables: ''
  });

  useEffect(() => {
    setTheme('business');
  }, [setTheme]);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCampaign({
      title: formData.title,
      description: formData.description,
      niche: formData.niche,
      platform: formData.platform,
      compensation: formData.compensation,
      deadline: formData.deadline,
      audienceRequirements: formData.audienceRequirements,
      deliverables: formData.deliverables.split('\n').filter(d => d.trim()),
      brand: { id: 'b1', name: 'NOVA Audio', industry: 'Consumer Tech', logo: '' } // Mock current brand
    });
    setStep(4); // Success step
  };

  return (
    <Layout type="business">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/business/dashboard')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '2rem' }}>
        <ArrowLeft size={18} /> Cancel
      </button>

      <div className="glass-panel" style={{ padding: '3rem' }}>
        {step < 4 && (
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{ flex: 1, height: '4px', background: s <= step ? 'var(--accent-primary)' : 'var(--bg-elevated)', borderRadius: '2px' }} />
            ))}
          </div>
        )}

        {step === 1 && (
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Campaign Basics</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Start with the core details of your collaboration.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: 'var(--text-muted)' }}>Campaign Title</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g. Summer Launch Video Review"
                  style={{ padding: '1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: 'var(--text-muted)' }}>Description</label>
                <textarea 
                  rows={4}
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe the product and what you expect from the creator..."
                  style={{ padding: '1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none', resize: 'vertical' }}
                />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ color: 'var(--text-muted)' }}>Primary Niche</label>
                  <select 
                    value={formData.niche}
                    onChange={e => setFormData({...formData, niche: e.target.value})}
                    style={{ padding: '1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none' }}
                  >
                    <option>Technology</option>
                    <option>Fitness</option>
                    <option>Gaming</option>
                    <option>Beauty</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ color: 'var(--text-muted)' }}>Primary Platform</label>
                  <select 
                    value={formData.platform}
                    onChange={e => setFormData({...formData, platform: e.target.value})}
                    style={{ padding: '1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none' }}
                  >
                    <option>YouTube</option>
                    <option>Instagram</option>
                    <option>TikTok</option>
                  </select>
                </div>
              </div>
            </div>
            
            <button onClick={handleNext} disabled={!formData.title} style={{ marginTop: '2rem', float: 'right', padding: '0.75rem 2rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>
              Next Step
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Requirements & Deliverables</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>What are the expectations for this collaboration?</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: 'var(--text-muted)' }}>Deliverables (One per line)</label>
                <textarea 
                  rows={4}
                  value={formData.deliverables}
                  onChange={e => setFormData({...formData, deliverables: e.target.value})}
                  placeholder="1x YouTube Video (10 mins)&#10;3x High-res photos"
                  style={{ padding: '1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none', resize: 'vertical' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: 'var(--text-muted)' }}>Audience Requirements (for AI matching)</label>
                <input 
                  type="text" 
                  value={formData.audienceRequirements}
                  onChange={e => setFormData({...formData, audienceRequirements: e.target.value})}
                  placeholder="e.g. 50k+ followers, US demographic, interested in tech"
                  style={{ padding: '1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none' }}
                />
              </div>
            </div>
            
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={handleBack} style={{ padding: '0.75rem 2rem', background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>
                Back
              </button>
              <button onClick={handleNext} disabled={!formData.deliverables} style={{ padding: '0.75rem 2rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Logistics</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Final details before publishing.</p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: 'var(--text-muted)' }}>Compensation Budget</label>
                <input 
                  type="text" 
                  value={formData.compensation}
                  onChange={e => setFormData({...formData, compensation: e.target.value})}
                  placeholder="e.g. $1,000 - $2,000 or Product Exchange"
                  style={{ padding: '1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ color: 'var(--text-muted)' }}>Application Deadline</label>
                <input 
                  type="date" 
                  value={formData.deadline}
                  onChange={e => setFormData({...formData, deadline: e.target.value})}
                  style={{ padding: '1rem', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: '#fff', outline: 'none', WebkitAppearance: 'none' }}
                />
              </div>
            
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <button type="button" onClick={handleBack} style={{ padding: '0.75rem 2rem', background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>
                  Back
                </button>
                <button type="submit" disabled={!formData.compensation || !formData.deadline} style={{ padding: '0.75rem 2rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>
                  Publish Campaign
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div style={{ textAlign: 'center', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <CheckCircle size={64} color="var(--accent-primary)" />
            <h1 style={{ fontSize: '2rem' }}>Campaign Published</h1>
            <p style={{ color: 'var(--text-muted)' }}>Your campaign is now live and creators can start applying.</p>
            <button onClick={() => navigate('/business/dashboard')} style={{ marginTop: '1rem', padding: '0.75rem 2rem', background: 'var(--bg-elevated)', color: '#fff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontWeight: 600, cursor: 'pointer' }}>
              Return to Dashboard
            </button>
          </div>
        )}
      </div>
      </div>
    </Layout>
  );
};

export default CreateCampaign;
