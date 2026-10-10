import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Layout } from '../../components/shared/Layout';
import { Button } from '../../components/shared/Button';
import { GlassCard } from '../../components/shared/GlassCard';
import { CRABLogo } from '../../components/shared/CRABLogo';
import { ShieldCheck, Users, BrainCircuit, Target, CheckCircle2, BarChart } from 'lucide-react';

const HandshakeIllustration = () => {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '300px' }}>
        {/* Left Hand SVG */}
        <svg 
          viewBox="0 0 100 100" 
          style={{ 
            position: 'absolute', 
            left: 'calc(50% - 150px)', 
            top: '50%',
            width: '150px',
            height: '150px',
            transformOrigin: 'right center',
            animation: 'handshake-left 4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards 1s',
            opacity: 0,
            fill: 'none',
            stroke: 'rgba(255,255,255,0.1)',
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          }}
        >
          {/* Simple abstracted hand shape pointing right */}
          <path d="M10,50 C30,50 60,30 80,45 C90,52 100,55 90,65 C70,80 40,70 10,70 Z" />
          <path d="M70,40 C80,35 90,40 85,50" />
          <path d="M65,30 C75,25 85,35 75,45" />
        </svg>

        {/* Right Hand SVG */}
        <svg 
          viewBox="0 0 100 100" 
          style={{ 
            position: 'absolute', 
            right: 'calc(50% - 150px)', 
            top: '50%',
            width: '150px',
            height: '150px',
            transformOrigin: 'left center',
            animation: 'handshake-right 4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards 1s',
            opacity: 0,
            fill: 'none',
            stroke: 'rgba(255,255,255,0.1)',
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          }}
        >
          {/* Simple abstracted hand shape pointing left */}
          <path d="M10,50 C30,50 60,30 80,45 C90,52 100,55 90,65 C70,80 40,70 10,70 Z" />
          <path d="M70,40 C80,35 90,40 85,50" />
          <path d="M65,30 C75,25 85,35 75,45" />
        </svg>
      </div>
    </div>
  );
};

const MulticolorLine = () => (
  <div style={{
    width: '120px',
    height: '2px',
    margin: '1rem auto 0',
    background: 'linear-gradient(90deg, #6485FF, #00D4FF, #A855F7, #FF7A1A)',
    backgroundSize: '200% 100%',
    borderRadius: '2px',
    animation: 'multicolor-line-sweep 2s ease-out forwards 0.5s, gradient-shift 4s linear infinite',
    opacity: 0
  }} />
);

const Home = () => {
  const { setTheme } = useTheme();

  // Reset to creator theme (default public theme) when on homepage
  useEffect(() => {
    setTheme('creator');
  }, [setTheme]);

  return (
    <Layout type="public">
      <div style={{ overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
        
        {/* Section A & B: Cinematic Hero Section */}
        <section style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          padding: '6rem 2rem 4rem', 
          position: 'relative',
          paddingTop: '8rem',
          zIndex: 1
        }}>
          
          <HandshakeIllustration />

          {/* Central Logo & Reveal */}
          <div style={{ marginBottom: '2rem', animation: 'cinematic-logo-reveal 1.5s var(--ease-cinematic) forwards', position: 'relative', zIndex: 10 }}>
            <CRABLogo variant="neutral" size="hero" showText={false} />
            <MulticolorLine />
          </div>
          
          <div style={{ position: 'relative', zIndex: 10, animation: 'fade-in 1s var(--ease-out) 1.2s both' }}>
            <p style={{ 
              fontSize: '1rem', 
              fontWeight: 600, 
              color: 'var(--text-muted)', 
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Creators Reaching Aligned Brands
            </p>

            <h1 style={{ 
              maxWidth: '900px', 
              font: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              marginBottom: '1.5rem', 
              color: 'var(--text-primary)'
            }}>
              Where the right creators<br />meet the right brands.
            </h1>
            
            <p style={{ 
              maxWidth: '650px',
              margin: '0 auto',
              font: 'var(--font-body)', 
              fontSize: '1.25rem', 
              color: 'var(--text-muted)', 
              marginBottom: '3.5rem',
              lineHeight: 1.6
            }}>
              CRAB helps creators discover brands aligned with their niche, audience, and collaboration goals, while helping businesses discover suitable creators and manage brand collaborations end-to-end.
            </p>
            
            {/* Actions */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '1.5rem', 
              justifyContent: 'center', 
              alignItems: 'center',
              width: '100%'
            }}>
              <Link to="/login">
                <Button size="lg" style={{ 
                  background: 'rgba(100, 133, 255, 0.1)', 
                  color: '#6485FF', 
                  border: '1px solid rgba(100, 133, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.875rem 2rem',
                  fontSize: '1.125rem'
                }}>
                  Enter as Creator
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" style={{ 
                  background: 'rgba(255, 122, 26, 0.1)', 
                  color: '#FF7A1A', 
                  border: '1px solid rgba(255, 122, 26, 0.3)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.875rem 2rem',
                  fontSize: '1.125rem'
                }}>
                  Enter as Business
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section C: How CRAB Works */}
        <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How it works</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
              A structured workflow for finding, securing, and managing professional collaborations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {/* Creator Journey */}
            <div data-theme="creator">
              <GlassCard style={{ padding: '3rem', height: '100%', borderTop: '2px solid var(--accent-primary)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={24} /> The Creator Journey
                </h3>
                <ol style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '1rem', color: 'var(--text-muted)' }}>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Create a profile:</strong> Detail your niche, audience, and collaboration preferences.</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Discover brands:</strong> Find highly relevant campaigns aligned with your content.</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Apply to opportunities:</strong> Review deliverables and submit targeted applications.</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Manage collaborations:</strong> Track approvals, deliverables, and status in one dashboard.</li>
                </ol>
              </GlassCard>
            </div>

            {/* Business Journey */}
            <div data-theme="business">
              <GlassCard style={{ padding: '3rem', height: '100%', borderTop: '2px solid var(--accent-primary)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Target size={24} /> The Business Journey
                </h3>
                <ol style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '1rem', color: 'var(--text-muted)' }}>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Define a campaign:</strong> Set goals, niche, audience requirements, and budget.</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Discover creators:</strong> Find creators whose audience matches your brand.</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Review applications:</strong> Evaluate suitability and manage the selection process.</li>
                  <li><strong style={{ color: 'var(--text-primary)' }}>Coordinate:</strong> Track collaboration status and deliverables centrally.</li>
                </ol>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section D & E: Workspace Previews */}
        <section style={{ padding: '4rem 2rem', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Purpose-built workspaces</h2>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <GlassCard style={{ flex: '1 1 500px', padding: '1rem', textAlign: 'left' }}>
                <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '12px', padding: '2rem', minHeight: '300px', border: '1px solid rgba(100, 133, 255, 0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#6485FF' }} />
                      <div>
                        <h4 style={{ color: '#fff', margin: 0 }}>Creator Dashboard</h4>
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Tech & Software Niche</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Active Applications</span>
                      <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff' }}>4</div>
                    </div>
                    <div style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Relevant Campaigns</span>
                      <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff' }}>12</div>
                    </div>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #6485FF' }}>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Illustrative preview of the Creator environment.</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard style={{ flex: '1 1 500px', padding: '1rem', textAlign: 'left' }}>
                <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '12px', padding: '2rem', minHeight: '300px', border: '1px solid rgba(255, 122, 26, 0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#FF7A1A' }} />
                      <div>
                        <h4 style={{ color: '#fff', margin: 0 }}>Business Workspace</h4>
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Acme Corp Campaigns</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Applicants to Review</span>
                      <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff' }}>8</div>
                    </div>
                    <div style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Active Collaborations</span>
                      <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff' }}>2</div>
                    </div>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid #FF7A1A' }}>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Illustrative preview of the Business environment.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section F: Matching Explained */}
        <section style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <BrainCircuit size={48} color="var(--text-primary)" style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Intelligent Alignment</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '3rem' }}>
            CRAB helps surface the best opportunities by evaluating structural alignment: comparing a creator's stated niche, audience demographics, and content category against a brand's specific campaign requirements, deliverable needs, and target audience.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.875rem' }}><CheckCircle2 size={16} /> Niche & Category</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.875rem' }}><CheckCircle2 size={16} /> Deliverable Needs</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.875rem' }}><CheckCircle2 size={16} /> Audience Alignment</span>
          </div>
        </section>

        {/* Section G: Lifecycle */}
        <section style={{ padding: '6rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '4rem' }}>The Collaboration Lifecycle</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', position: 'relative' }}>
              {/* Connector line for desktop */}
              <div style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0, display: 'none' }} className="lifecycle-line" />
              
              <div style={{ flex: 1, minWidth: '150px', textAlign: 'center', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>1</div>
                <h4 style={{ marginBottom: '0.5rem' }}>Discovery</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Find aligned opportunities.</p>
              </div>
              
              <div style={{ flex: 1, minWidth: '150px', textAlign: 'center', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>2</div>
                <h4 style={{ marginBottom: '0.5rem' }}>Application</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Review terms and apply.</p>
              </div>

              <div style={{ flex: 1, minWidth: '150px', textAlign: 'center', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>3</div>
                <h4 style={{ marginBottom: '0.5rem' }}>Selection</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Brands evaluate and choose.</p>
              </div>

              <div style={{ flex: 1, minWidth: '150px', textAlign: 'center', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>4</div>
                <h4 style={{ marginBottom: '0.5rem' }}>Deliverables</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Produce and track content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section H: Why CRAB */}
        <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Why use CRAB?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <GlassCard style={{ padding: '2.5rem' }}>
              <ShieldCheck size={32} style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Structured Process</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>Escape messy email threads. Clear campaign briefs, transparent requirements, and centralized tracking for both sides.</p>
            </GlassCard>
            <GlassCard style={{ padding: '2.5rem' }}>
              <Target size={32} style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Better Alignment</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>Spend less time searching. Discover partners that actually match your specific niche and audience demographic.</p>
            </GlassCard>
            <GlassCard style={{ padding: '2.5rem' }}>
              <BarChart size={32} style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Organized Workspaces</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>Dedicated dashboards designed specifically for the distinct needs of creators managing applications, or brands reviewing talent.</p>
            </GlassCard>
          </div>
        </section>

        {/* Section I: Final CTA */}
        <section style={{ padding: '8rem 2rem', textAlign: 'center', background: 'radial-gradient(circle at top, rgba(255,255,255,0.05) 0%, transparent 50%)' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to connect?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join the platform that puts professional alignment first.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/signup">
              <Button size="lg" style={{ background: '#fff', color: '#000', fontWeight: 600 }}>Create an Account</Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '4rem 2rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <div>
            <CRABLogo size="compact" showText={true} />
            <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>Creators Reaching Aligned Brands.</p>
          </div>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <strong style={{ color: '#fff' }}>Platform</strong>
              <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>For Creators</Link>
              <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>For Businesses</Link>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Sign In</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <strong style={{ color: '#fff' }}>Legal</strong>
              <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
              <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;
