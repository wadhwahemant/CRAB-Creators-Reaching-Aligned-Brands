import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Compass, Megaphone, MessageSquare, BarChart, Users } from 'lucide-react';
import { CRABLogo } from './CRABLogo';

interface SidebarProps {
  type: 'creator' | 'business';
}

export const Sidebar: React.FC<SidebarProps> = ({ type }) => {
  const location = useLocation();

  const getLinkStyle = (path: string) => {
    const isActive = location.pathname.startsWith(path);
    if (isActive) {
      return { 
        background: 'var(--accent-soft)', 
        color: 'var(--accent-primary)', 
        fontWeight: 500,
        boxShadow: 'inset 4px 0 0 var(--accent-primary)'
      };
    }
    return { color: 'var(--text-muted)' };
  };

  const navItems = type === 'creator' ? [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/creator/dashboard' },
    { icon: Compass, label: 'Discover Brands', path: '/creator/discover' },
    { icon: MessageSquare, label: 'Applications', path: '/creator/applications' },
    { icon: BarChart, label: 'My Profile', path: '/creator/profile' },
  ] : [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/business/dashboard' },
    { icon: Users, label: 'Creator Network', path: '/business/discover' },
    { icon: Megaphone, label: 'Campaigns', path: '/business/campaigns/new' },
    { icon: BarChart, label: 'Performance', path: '/business/performance' },
  ];

  return (
    <aside 
      style={{
        width: '260px',
        borderRight: '1px solid var(--border-color)',
        background: 'var(--bg-surface-glass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        zIndex: 'var(--z-drawer)',
        boxShadow: 'var(--shadow-ambient)'
      }}
    >
      <div style={{ paddingLeft: '0.5rem' }}>
        <CRABLogo variant={type} size="nav" />
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem', paddingLeft: '1rem' }}>
          Menu
        </div>
        
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="sidebar-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              transition: 'all 0.2s var(--ease-out)',
              ...getLinkStyle(item.path)
            }}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <div style={{ marginTop: 'auto' }}>
        <Link 
          to="/" 
          style={{
            display: 'block',
            padding: '0.75rem 1rem',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.875rem',
            borderTop: '1px solid var(--border-color)',
            transition: 'color 0.2s'
          }}
        >
          Sign Out
        </Link>
      </div>
    </aside>
  );
};
