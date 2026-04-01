import React from 'react';
import { Smartphone, Globe, Cloud, FileText, Settings, Briefcase, CheckCircle, MessageCircle } from 'lucide-react';

const Services = () => {
  const financialServices = [
    { title: 'GST Registration & Filing', content: 'Complete support for GST registration, monthly filing, and audit assistance.', benefit: 'Accurate compliance, zero penalties' },
    { title: 'Income Tax Filing', content: 'Comprehensive income tax preparation and filing for individuals and small businesses.', benefit: 'Maximize tax savings' },
    { title: 'Accounting & Bookkeeping', content: 'Maintain daily ledger, balance sheets, and profit/loss statements.', benefit: 'Clear health check on finances' },
    { title: 'Business Compliance', content: 'Guidance and support for MCA filing, annual returns, and statutory requirements.', benefit: 'Peace of mind with legal formalities' },
    { title: 'Financial Consulting', content: 'Audit preparation, budgeting, and strategic financial planning.', benefit: 'Informed decision making' }
  ];

  const itServices = [
    { title: 'IT Support', icon: <Settings size={28} />, content: 'Remote and onsite maintenance for systems, network, and daily troubleshooting.', benefit: 'Minimum downtime' },
    { title: 'Infrastructure Setup', icon: <Briefcase size={28} />, content: 'Office cabling, Wi-Fi configuration, printer setup, and hardware procurement.', benefit: 'Turnkey office ready' },
    { title: 'Cloud Services', icon: <Cloud size={28} />, content: 'Cloud migration assistance using AWS and Linux-based server setup.', benefit: 'Scalable and secure infra' },
    { title: 'Website Development', icon: <Globe size={28} />, content: 'Modern, fast-loading, mobile-friendly websites to grow your digital presence.', benefit: 'Online visibility' },
    { title: 'Google Business Profile', icon: <Smartphone size={28} />, content: 'Setting up and optimizing Google Map listings for better local discoverability.', benefit: 'Get found locally' },
    { title: 'Local SEO', icon: <CheckCircle size={28} />, content: 'Specific strategies for better search ranking for small businesses across Tamil Nadu.', benefit: 'Targeted lead generation' }
  ];

  return (
    <div className="fade-in">
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-light)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title">Our Specialized Services</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>Professional services designed to give your business in Tamil Nadu the edge. We simplify the complex world of finance and IT.</p>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="section" id="finance">
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Primary: GST, Tax & Accounting Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
            {financialServices.map((service, idx) => (
              <div key={idx} style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '15px', border: '1px solid var(--accent)', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ backgroundColor: '#DBEAFE', padding: '0.8rem', borderRadius: '10px' }}><FileText size={24} style={{ color: 'var(--primary)' }} /></div>
                  <h3 style={{ fontSize: '1.25rem' }}>{service.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{service.content}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '500' }}>
                  <CheckCircle size={16} />
                  <span>Benefit: {service.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="section" style={{ backgroundColor: '#F3F4F6' }} id="it">
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Supporting: IT Support & Business Technology</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
            {itServices.map((service, idx) => (
              <div key={idx} style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '15px', border: '1px solid var(--accent)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ color: 'var(--primary)' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.25rem' }}>{service.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{service.content}</p>
                <p style={{ color: '#047857', fontSize: '0.85rem', fontWeight: 600 }}>{service.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to optimize your operations?</h2>
          <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)' }}>Contact us now for custom tailored packages.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="tel:+919498856100" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Call +91 98765 43210</a>
            <a href="https://wa.me/919498856100" className="btn btn-whatsapp" style={{ padding: '1rem 3rem' }}>
              <MessageCircle size={20} />
              WhatsApp for Quotes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
