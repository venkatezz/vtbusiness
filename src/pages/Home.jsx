import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Globe, Cloud, FileText, Settings, Briefcase, Users, CheckCircle, MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.7)), url('/vt_consulting_hero_banner_1775059979390.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8rem 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>Complete Business Support for Finance and IT</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem', color: '#E2E8F0' }}>
            We help small businesses with GST, accounting, IT support, cloud, and websites.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>Contact Us</Link>
            <a href="https://wa.me/919876543210" className="btn btn-whatsapp">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Comprehensive Business Solutions</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ padding: '2rem', border: '1px solid var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#DBEAFE', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <FileText style={{ color: 'var(--primary)' }} size={32} />
              </div>
              <h3>Financial & CA Services</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>GST Registration, Income Tax filing, and complete business compliance for small businesses.</p>
              <Link to="/services" style={{ fontWeight: 600, color: 'var(--primary)' }}>Read More →</Link>
            </div>

            <div style={{ padding: '2rem', border: '1px solid var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#DBEAFE', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Settings style={{ color: 'var(--primary)' }} size={32} />
              </div>
              <h3>Integrated IT Support</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Systems setup, infrastructure, cloud migration (AWS/Linux), and ongoing technical troubleshooting.</p>
              <Link to="/services" style={{ fontWeight: 600, color: 'var(--primary)' }}>Read More →</Link>
            </div>
            
            <div style={{ padding: '2rem', border: '1px solid var(--accent)', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#DBEAFE', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <Globe style={{ color: 'var(--primary)' }} size={32} />
              </div>
              <h3>Digital Growth</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Website development, Google Business Profile management, and local SEO for small businesses.</p>
              <Link to="/services" style={{ fontWeight: 600, color: 'var(--primary)' }}>Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Why Choose VT Consulting?</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We combine financial expertise with deep technical knowledge to provide one-stop business solutions.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}><CheckCircle size={24} /></div>
                  <div>
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.2rem' }}>Simple and Practical</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We provide working solutions without unnecessary complexity.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}><CheckCircle size={24} /></div>
                  <div>
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.2rem' }}>Fast Response</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We know your time is valuable. Get support when you need it.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}><CheckCircle size={24} /></div>
                  <div>
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.2rem' }}>One Place for Finance + IT</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Manage your compliance and infrastructure with a single trusted partner.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1454165833767-0a7008a03971?auto=format&fit=crop&q=80&w=600"
                alt="Business meeting"
                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Who We Help</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
             <div style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid var(--accent)', borderRadius: '15px' }}>
                <Smartphone size={40} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h4>Small Businesses</h4>
             </div>
             <div style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid var(--accent)', borderRadius: '15px' }}>
                <Globe size={40} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h4>Travel Agencies</h4>
             </div>
             <div style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid var(--accent)', borderRadius: '15px' }}>
                <Briefcase size={40} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h4>Modern Offices</h4>
             </div>
             <div style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid var(--accent)', borderRadius: '15px' }}>
                <Shield size={40} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h4>Tech Startups</h4>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Need help with your business?</h2>
          <p style={{ color: '#E2E8F0', fontSize: '1.2rem', marginBottom: '2.5rem' }}>Message us on WhatsApp now for expert support.</p>
          <a href="https://wa.me/919876543210" className="btn btn-whatsapp" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            <MessageCircle size={24} />
            Message us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
