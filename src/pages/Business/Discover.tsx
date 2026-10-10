import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Layout } from '../../components/shared/Layout';

const DiscoverCreators = () => {
  const { setTheme } = useTheme();
  const { creators } = useData();
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterNiche, setFilterNiche] = useState('All');
  
  useEffect(() => {
    setTheme('business');
  }, [setTheme]);

  const filteredCreators = creators.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNiche = filterNiche === 'All' || c.niche === filterNiche;
    return matchesSearch && matchesNiche;
  });

  return (
    <Layout type="business">
      <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <Link to="/business/dashboard" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          ← Back to Dashboard
        </Link>
        <h1 style={{ fontSize: '1.5rem' }}>Discover Creators</h1>
        <div style={{ width: '100px' }}></div>
      </header>
      
      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search by name or keywords..." 
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
        {filteredCreators.map(creator => (
          <div key={creator.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}></div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.125rem' }}>{creator.name}</h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{creator.location}</div>
                </div>
              </div>
              {creator.matchScore && (
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.875rem' }}>{creator.matchScore}% Match</span>
              )}
            </div>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{creator.bio}</p>
            
            <div style={{ display: 'flex', gap: '1rem', padding: '0.75rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)' }}>
              {creator.platforms.map(p => (
                <div key={p.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.name}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{p.followers}</span>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
              <button 
                onClick={() => navigate(`/business/creators/${creator.id}`)} 
                style={{ flex: 1, padding: '0.75rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 500, cursor: 'pointer' }}
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCreators.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
          No creators found matching your criteria.
        </div>
      )}
      </div>
    </Layout>
  );
};

export default DiscoverCreators;
