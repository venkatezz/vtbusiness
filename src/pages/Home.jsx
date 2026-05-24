import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Smartphone, Globe, Cloud, FileText, Settings, Briefcase, 
  Users, CheckCircle, ArrowRight, Phone, Zap, Star, AlertCircle, 
  ChevronDown, HelpCircle, HardDrive, Cpu, HeartHandshake, Award, Landmark
} from 'lucide-react';
import SEO from '../components/SEO';
import DynamicLeadForm from '../components/DynamicLeadForm';

// Reusable WhatsApp Icon for CTA integration
const WhatsAppIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.187 1.605 6.006L0 24l6.11-1.603a11.783 11.783 0 005.937 1.603h.005c6.635 0 12.03-5.393 12.034-12.031a11.813 11.813 0 00-3.528-8.503z" />
  </svg>
);

const Home = () => {
  // Pure Native IntersectionObserver Scroll Reveal Engine (Zero React re-renders)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Tab Selection state for Services Matrix
  const [activeTab, setActiveTab] = useState('compliance');

  // Bookkeeping Dynamic pricing calculator values
  const [turnoverSlider, setTurnoverSlider] = useState(20); // range 5 to 150 (Lakhs)
  
  // Dynamic FAQ Accordion state toggles
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Pricing calculation algorithms to establish upfront qualification
  const getEstimatedFee = () => {
    if (turnoverSlider <= 10) return "₹999 / mo";
    if (turnoverSlider <= 25) return "₹1,999 / mo";
    if (turnoverSlider <= 50) return "₹3,499 / mo";
    if (turnoverSlider <= 100) return "₹5,999 / mo";
    return "Custom Advisory";
  };

  const getCalculatorDeliverables = () => {
    if (turnoverSlider <= 25) {
      return ["Monthly GST Returns", "Quarterly Income Tax Filing", "Basic Accounting LEDGER", "WhatsApp Advisor Line"];
    }
    if (turnoverSlider <= 100) {
      return ["Dedicated Accountant Allocation", "Fortnightly Books reconciliation", "GST Filing & ROC audits", "Extended Phone / Email consultation"];
    }
    return ["Fractional CFO Support", "Complete Cloud Books Management", "Tax planning strategies", "Priority 24/7 dedicated support SLA"];
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VT Business Support",
    "image": "https://vtbusinesssupport.in/logo.png",
    "@id": "https://vtbusinesssupport.in/#organization",
    "url": "https://vtbusinesssupport.in",
    "telephone": "+918925063980",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Electronic City",
      "addressLocality": "Bengaluru",
      "addressRegion": "KA",
      "postalCode": "560100",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.85,
      "longitude": 77.67
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/vt-business-support"
    ]
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <SEO
        title="VT Business Support | Dual-Engine GST Tax & IT Infrastructure Platform"
        description="VT Business Support offers high-converting GST returns, income tax planning, custom server configurations, web coding, and office infrastructure setup across Tamil Nadu & Bengaluru."
        schema={localBusinessSchema}
      />

      {/* ─── HERO SECTION ──────────────────────────────────────────────────── */}
      <section className="hero-section">
        {/* Subtle ambient grid overlay */}
        <div className="hero-grid-overlay" aria-hidden="true" />

        <div className="container">
          <div className="hero-inner">

            {/* ── LEFT COLUMN ── */}
            <div className="hero-left">

              {/* Trust badge */}
              <div className="hero-badge hero-anim-1">
                <span className="hero-badge-dot" />
                <Users size={13} />
                <span>Trusted by 50+ Businesses</span>
              </div>

              {/* Heading */}
              <h1 className="hero-heading hero-anim-2">
                GST, Income Tax &amp;{' '}
                <span className="hero-heading-highlight">IT Support</span>{' '}
                for Small Businesses
              </h1>

              {/* Supporting paragraph */}
              <p className="hero-subtext hero-anim-3">
                Professional financial, compliance, and technical support for startups, freelancers, and growing businesses across{' '}
                <strong>Tamil Nadu &amp; Bengaluru</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-row hero-anim-4">
                {/* PRIMARY — WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send?phone=918925063980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-whatsapp"
                  id="hero-whatsapp-cta"
                >
                  <WhatsAppIcon size={20} color="white" />
                  <span>Chat on WhatsApp</span>
                </a>
                {/* SECONDARY */}
                <a href="#quote-funnel" className="hero-btn-secondary">
                  Get Free Consultation
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Trust points */}
              <div className="hero-trust-row hero-anim-5">
                {[
                  'Fast Response',
                  '5+ Years Experience',
                  'GST + IT Hybrid Support',
                ].map((t) => (
                  <span key={t} className="hero-trust-item">
                    <CheckCircle size={14} className="hero-trust-icon" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN — Visual Panel ── */}
            <div className="hero-right hero-anim-6">
              {/* Floating card */}
              <div className="hero-visual-card">
                {/* Browser topbar */}
                <div className="hero-visual-topbar">
                  <span className="hero-dot hero-dot-red" />
                  <span className="hero-dot hero-dot-yellow" />
                  <span className="hero-dot hero-dot-green" />
                  <div className="hero-url-bar">vtbusinesssupport.in</div>
                </div>

                {/* Stats row */}
                <div className="hero-stats-row">
                  {[
                    { value: '₹0', label: 'Penalty Risk', accent: 'var(--secondary)' },
                    { value: '4.9★', label: 'Google Rating', accent: 'var(--accent)' },
                    { value: '30 min', label: 'Response SLA', accent: 'var(--primary-hover)' },
                  ].map((s) => (
                    <div key={s.label} className="hero-stat-chip">
                      <span className="hero-stat-val" style={{ color: s.accent }}>{s.value}</span>
                      <span className="hero-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Service rows */}
                <div className="hero-service-list">
                  {[
                    { icon: <FileText size={16} />, title: 'GST & Income Tax Filing', sub: 'ITR · GSTR-1 · GSTR-3B', color: 'var(--primary)' },
                    { icon: <Shield size={16} />, title: 'Accounting & Compliance', sub: 'Bookkeeping · ROC · MCA', color: 'var(--secondary)' },
                    { icon: <HardDrive size={16} />, title: 'IT & Cloud Infrastructure', sub: 'AWS · Linux · Networking', color: 'var(--accent)' },
                  ].map((item) => (
                    <div key={item.title} className="hero-service-row">
                      <div className="hero-service-icon" style={{ background: `${item.color}18`, color: item.color }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="hero-service-title">{item.title}</div>
                        <div className="hero-service-sub">{item.sub}</div>
                      </div>
                      <div className="hero-service-check">
                        <CheckCircle size={14} style={{ color: 'var(--secondary)' }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA strip */}
                <a
                  href="https://api.whatsapp.com/send?phone=918925063980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-card-cta"
                >
                  <WhatsAppIcon size={16} color="white" />
                  <span>Message us now — free consultation</span>
                </a>
              </div>

              {/* Google rating badge — top-right only */}
              <div className="hero-float-badge hero-float-right">
                <Star size={14} fill="var(--accent)" stroke="var(--accent)" />
                <div>
                  <div className="hero-float-name">Google Rated 4.9</div>
                  <div className="hero-float-status">Verified Reviews</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ─── END HERO ──────────────────────────────────────────────────────── */}

      {/* Infinite Scrolling Ticker of Credentials & Social Proof */}
      <div 
        className="reveal-item"
        style={{ width: '100%' }}
      >
        <div className="marquee-ticker-container">
          <div className="marquee-ticker-track">
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <span className="marquee-ticker-item">
                  <CheckCircle size={16} style={{ color: 'var(--secondary)' }} />
                  GST Filing & Compliance
                </span>

                <span className="marquee-ticker-item">
                  <FileText size={16} style={{ color: 'var(--primary)' }} />
                  Income Tax Returns
                </span>

                <span className="marquee-ticker-item">
                  <Briefcase size={16} style={{ color: 'var(--accent)' }} />
                  Accounting & Bookkeeping
                </span>

                <span className="marquee-ticker-item">
                  <Cpu size={16} style={{ color: '#CBD5E1' }} />
                  IT Support & Office Setup
                </span>

                <span className="marquee-ticker-item">
                  <Cloud size={16} style={{ color: 'var(--secondary)' }} />
                  Cloud & Server Support
                </span>

                <span className="marquee-ticker-item">
                  <Globe size={16} style={{ color: 'var(--primary-hover)' }} />
                  Website Development
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Services Tabs Matrix */}
      <section 
        className="section reveal-item"
        style={{ backgroundColor: 'var(--bg-soft)', borderBottom: '1px solid var(--border-light)' }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-title">
            <h2>Expertise Segments</h2>
            <p>We combine elite business tax compliance with institutional-grade web/cloud infrastructure support.</p>
          </div>

          {/* Interactive tab control buttons */}
          <div className="tabs-header-container">
            <button 
              className={`tab-trigger-btn ${activeTab === 'compliance' ? 'active' : ''}`}
              onClick={() => setActiveTab('compliance')}
            >
              Tax & Corporate Compliance
            </button>
            <button 
              className={`tab-trigger-btn ${activeTab === 'technology' ? 'active' : ''}`}
              onClick={() => setActiveTab('technology')}
            >
              IT Support & Cloud setups
            </button>
          </div>

          {/* Tab contents with smooth React animation renders */}
          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem'
          }}>
            
            {activeTab === 'compliance' ? (
              <>
                <div className="card-premium fade-in">
                  <div style={{
                    backgroundColor: 'rgba(74, 63, 224, 0.1)',
                    width: '52px', height: '52px', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <FileText style={{ color: 'var(--primary)' }} size={24} />
                  </div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 800 }}>Income Tax / ITR Filing</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.92rem', lineHeight: 1.6, textAlign: 'left' }}>
                    Speedy individual, salaried, Capital Gains & professional IT returns. Avoid penalties and optimize your legal deductions with expert advisory checking.
                  </p>
                  <a href="#quote-funnel" style={{ fontWeight: 700, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginTop: 'auto' }}>
                    Get Quotation Now <ArrowRight size={16} />
                  </a>
                </div>

                <div className="card-premium fade-in">
                  <div style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    width: '52px', height: '52px', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Landmark style={{ color: 'var(--secondary)' }} size={24} />
                  </div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 800 }}>GST Returns & Reconciliation</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.92rem', lineHeight: 1.6, textAlign: 'left' }}>
                    Hassle-free GSTR-1, GSTR-3B filings, and continuous input tax credit matching. Perfect for e-commerce operators, manufacturers, and service hubs.
                  </p>
                  <a href="#quote-funnel" style={{ fontWeight: 700, color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginTop: 'auto' }}>
                    Manage Your GST <ArrowRight size={16} />
                  </a>
                </div>

                <div className="card-premium fade-in">
                  <div style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    width: '52px', height: '52px', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Briefcase style={{ color: 'var(--accent)' }} size={24} />
                  </div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 800 }}>Corporate Registry & Bookkeeping</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.92rem', lineHeight: 1.6, textAlign: 'left' }}>
                    Seamless Private Limited incorporation, LLP filings, ROC returns, and recurring professional accounts bookkeeping tailored to regional regulations.
                  </p>
                  <a href="#quote-funnel" style={{ fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginTop: 'auto' }}>
                    Incorporate SME <ArrowRight size={16} />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="card-premium fade-in">
                  <div style={{
                    backgroundColor: 'rgba(8, 16, 40, 0.1)',
                    width: '52px', height: '52px', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Cpu style={{ color: 'var(--dark)' }} size={24} />
                  </div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 800 }}>Office IT Support & setups</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.92rem', lineHeight: 1.6, textAlign: 'left' }}>
                    Laptop setup, networking, office systems, printer setup, and remote IT support for businesses.
                  </p>
                  <a href="#quote-funnel" style={{ fontWeight: 700, color: 'var(--dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginTop: 'auto' }}>
                    Configure Support <ArrowRight size={16} />
                  </a>
                </div>

                <div className="card-premium fade-in">
                  <div style={{
                    backgroundColor: 'rgba(74, 63, 224, 0.1)',
                    width: '52px', height: '52px', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Cloud style={{ color: 'var(--primary)' }} size={24} />
                  </div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 800 }}>Cloud administration (AWS/Linux)</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.92rem', lineHeight: 1.6, textAlign: 'left' }}>
                    AWS, Linux VPS, backups, domains, and cloud server support for growing businesses.
                  </p>
                  <a href="#quote-funnel" style={{ fontWeight: 700, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginTop: 'auto' }}>
                    Configure Cloud <ArrowRight size={16} />
                  </a>
                </div>

                <div className="card-premium fade-in">
                  <div style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    width: '52px', height: '52px', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Globe style={{ color: 'var(--secondary)' }} size={24} />
                  </div>
                  <h3 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 800 }}>Website Development & SEO</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.92rem', lineHeight: 1.6, textAlign: 'left' }}>
                    Business websites, SEO setup, speed optimization, and domain management support.
                  </p>
                  <a href="#quote-funnel" style={{ fontWeight: 700, color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginTop: 'auto' }}>
                    Develop Site <ArrowRight size={16} />
                  </a>
                </div>
              </>
            )}

          </div>
        </div>
      </section>

      <section
        className="section reveal-item"
        style={{
          background: 'var(--bg-soft)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">

          <div className="section-title">
            <h2>Why Businesses Choose VT</h2>
            <p>
              Practical GST, tax, and IT support designed for small businesses,
              freelancers, startups, and local companies.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >

            {[
              {
                icon: <Zap size={22} />,
                title: 'Fast WhatsApp Support',
                desc: 'Quick responses for GST, income tax, and IT-related issues.'
              },
              {
                icon: <Shield size={22} />,
                title: 'Finance + IT Expertise',
                desc: 'One place for compliance, websites, cloud, and technical support.'
              },
              {
                icon: <Briefcase size={22} />,
                title: 'Affordable for Small Businesses',
                desc: 'Professional support without enterprise-level pricing.'
              },
              {
                icon: <Users size={22} />,
                title: 'Tamil Nadu & Bengaluru Support',
                desc: 'Remote and local support for businesses across both regions.'
              }
            ].map((item) => (
              <div className="card-premium" key={item.title}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(30,58,138,0.06)',
                    border: '1px solid rgba(30,58,138,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '1rem'
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.05rem',
                    marginBottom: '0.65rem'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.92rem',
                    lineHeight: 1.65
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Step-by-Step Interactive Compliance Roadmap */}
      <section 
        className="section reveal-item"
        style={{ backgroundColor: 'var(--bg-soft)', borderBottom: '1px solid var(--border-light)' }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Seamless Integration Process</h2>
            <p>How we transition your financial records and IT support structure effortlessly.</p>
          </div>

          <div className="timeline-path">
            
            <div className="timeline-node-card">
              <div className="timeline-node-dot" />
              <div className="timeline-node-content">
                <span className="timeline-node-num">01</span>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 800 }}>Dynamic Inquiry Intake</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                  Submit details through our pre-qualifying funnel or message us via WhatsApp. We analyze your requirements in 15 minutes.
                </p>
              </div>
            </div>

            <div className="timeline-node-card">
              <div className="timeline-node-dot" />
              <div className="timeline-node-content">
                <span className="timeline-node-num">02</span>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 800 }}>Assigned Advisor Consult</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                  A specialized tax strategist or senior systems architect holds a discovery call to build your dynamic service blueprint.
                </p>
              </div>
            </div>

            <div className="timeline-node-card">
              <div className="timeline-node-dot" />
              <div className="timeline-node-content">
                <span className="timeline-node-num">03</span>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 800 }}>Seamless Active Delivery</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                  We set up ledger syncing, compile tax returns, or provision your server/networking systems. Your accounts are instantly secured.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Clients Choose VT Business Support */}
      <section 
        className="section reveal-item"
        style={{ background: 'var(--dark)', color: 'white' }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '2rem', fontWeight: 800 }}>
                Why Clients Partner With Us
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ color: 'var(--primary-hover)', flexShrink: 0 }}><Shield size={28} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.15rem', marginBottom: '0.4rem', fontWeight: 700 }}>Absolute Regulatory Security</h4>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Fully certified tax practitioners ensuring 100% compliance matching with state and central direct/indirect taxation databases.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ color: 'var(--secondary)', flexShrink: 0 }}><HeartHandshake size={28} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.15rem', marginBottom: '0.4rem', fontWeight: 700 }}>Dedicated SLA Response</h4>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      We do not keep you waiting. Active email, ticket, or phone callback response guarantees in under 30 minutes.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ color: 'var(--accent)', flexShrink: 0 }}><Award size={28} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.15rem', marginBottom: '0.4rem', fontWeight: 700 }}>Unified Tech + Finance Engine</h4>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Eliminate the headache of managing multiple agencies. One single professional partner handling your accounts and infrastructure setup.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="VT Business Support Professional Advisory Meeting"
                loading="lazy"
                style={{ width: '100%', borderRadius: '20px', position: 'relative', zIndex: 1, boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Multi-Step Pre-Qualifying Lead Funnel Section */}
      <section 
        id="quote-funnel"
        className="section reveal-item"
        style={{ borderBottom: '1px solid var(--border-light)' }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Tell Us Your Requirement</h2>
            <p>Select your service category and we’ll connect you with the right support team quickly.</p>
          </div>

          <DynamicLeadForm />
        </div>
      </section>

      {/* Accordion-Style Intent Mapped smart FAQs */}
      <section 
        className="section reveal-item"
        style={{ backgroundColor: 'var(--bg-soft)' }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-title">
            <h2>Common Questions Answered</h2>
            <p>Everything you need to know about our accounting compliance & IT setup service blueprints.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: "What documents do I need to prepare for basic ITR / Tax Filing?",
                a: "For salaried individuals, we need your Form 16, PAN card, Aadhaar card, and bank account statement. For freelancers or capital gains filers, our assigned advisor will share a secure Google Drive link to upload Form 26AS, trading ledgers, and expense reports safely."
              },
              {
                q: "How does the dynamic monthly GST bookkeeping sync work?",
                a: "We set up a secure cloud access system to your invoice ledgers (or fetch them periodically on WhatsApp). Our team compiles the invoices, matches the input tax credit (ITC) against GSTR-2B, and files your GSTR-1 and GSTR-3B before the statutory due dates."
              },
              {
                q: "Can you manage complex AWS setups and custom corporate networking?",
                a: "Yes! Our IT infrastructure division regularly provisions virtual cloud systems (AWS, DigitalOcean, Linux VPS), designs secure localized office networks, configures firewalls, and deploys high-performance custom React/Vite websites."
              },
              {
                q: "What are your statutory compliance fees and tax filing guarantees?",
                a: "Individual tax filings start at just ₹499. Business accounting and bookkeeping are custom-calculated based on scale, starting at ₹999/month (as shown in our interactive calculator above). All filings carry our 100% compliance error-free guarantee."
              }
            ].map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                onClick={() => toggleFaq(idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--dark)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <HelpCircle size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    {faq.q}
                  </h4>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      color: 'var(--text-muted)', 
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'var(--transition-fast)'
                    }} 
                  />
                </div>
                
                {activeFaq === idx && (
                  <div className="fade-in" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
