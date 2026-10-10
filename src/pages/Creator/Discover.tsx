import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Layout } from '../../components/shared/Layout';

const Discover = () => {
  const { setTheme } = useTheme();
  const { campaigns, getApplication, saveCampaign } = useData();
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterNiche, setFilterNiche] = useState('All');
  
  useEffect(() => {
    setTheme('creator');
  }, [setTheme]);

  const filteredCampaigns = campaigns.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.brand.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNiche = filterNiche === 'All' || c.niche === filterNiche;
    return matchesSearch && matchesNiche;
  });

  return (
    <Layout type="creator">
      <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Link to="/creator/dashboard" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          ← Back to Dashboard
        </Link>
        <h1 style={{ fontSize: '1.5rem' }}>Discover Brands</h1>
        <div style={{ width: '100px' }}></div> {/* Spacer for centering */}
      </header>
      
      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search campaigns or brands..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}>
          <Filter size={18} style={{ color: 'var(--text-muted)' }} />
          <select 
            value={filterNiche}
            onChange={(e) => setFilterNiche(e.target.value)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', cursor: 'pointer' }}
          >
            <option value="All">All Niches</option>
            <option value="Technology">Technology</option>
            <option value="Fitness">Fitness</option>
            <option value="Gaming">Gaming</option>
          </select>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {filteredCampaigns.map(campaign => {
          const app = getApplication(campaign.id);
          return (
            <div key={campaign.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{campaign.brand.name}</h3>
                {campaign.matchScore && <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{campaign.matchScore}% Match</span>}
              </div>
              <p style={{ color: 'var(--text-muted)' }}>{campaign.title}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--bg-primary)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>{campaign.niche}</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--bg-primary)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>{campaign.platform}</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--bg-primary)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>{campaign.compensation}</span>
              </div>
              
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button 
                  onClick={() => navigate(`/creator/campaigns/${campaign.id}`)} 
                  style={{ flex: 1, padding: '0.75rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 500, cursor: 'pointer' }}
                >
                  View Campaign
                </button>
                <button 
                  onClick={() => saveCampaign(campaign.id)}
                  disabled={!!app}
                  style={{ padding: '0.75rem', background: 'var(--bg-elevated)', color: app?.status === 'Saved' ? 'var(--accent-primary)' : 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
                >
                  {app?.status === 'Saved' ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      {filteredCampaigns.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          No campaigns found matching your criteria.
        </div>
      )}
      </div>
    </Layout>
  );
};

export default Discover;
