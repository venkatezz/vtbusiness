import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Smartphone, Globe, Cloud, FileText, Settings, Briefcase, 
  Users, CheckCircle, ArrowRight, Phone, Zap, Star, AlertCircle, 
  ChevronDown, HelpCircle, HardDrive, Cpu, HeartHandshake, Award
} from 'lucide-react';
import SEO from '../components/SEO';
import DynamicLeadForm from '../components/DynamicLeadForm';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Reusable WhatsApp Icon for CTA integration
const WhatsAppIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.187 1.605 6.006L0 24l6.11-1.603a11.783 11.783 0 005.937 1.603h.005c6.635 0 12.03-5.393 12.034-12.031a11.813 11.813 0 00-3.528-8.503z" />
  </svg>
);

const Home = () => {
  // Dynamic Hooks for Scroll Reveal states to build premium smooth fade-ins
  const [heroRef, heroActive] = useScrollReveal();
  const [tickerRef, tickerActive] = useScrollReveal();
  const [tabsRef, tabsActive] = useScrollReveal();
  const [calcRef, calcActive] = useScrollReveal();
  const [timelineRef, timelineActive] = useScrollReveal();
  const [whyRef, whyActive] = useScrollReveal();
  const [funnelRef, funnelActive] = useScrollReveal();
  const [faqRef, faqActive] = useScrollReveal();

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

      {/* Dual-Engine Splitted Hero Section */}
      <section 
        ref={heroRef}
        className={`section reveal-item ${heroActive ? 'active' : ''}`}
        style={{
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          background: `radial-gradient(circle at top right, rgba(74, 63, 224, 0.12), transparent), linear-gradient(180deg, hsl(224, 71%, 5%), var(--dark))`,
          padding: '100px 0 80px',
          color: 'white'
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Split Hero Left: Authority Headline & Pitch */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                backgroundColor: 'rgba(74, 63, 224, 0.15)',
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                border: '1px solid rgba(74, 63, 224, 0.3)',
                alignSelf: 'flex-start'
              }}>
                <Zap size={15} style={{ color: 'var(--primary-hover)' }} />
                <span style={{ fontWeight: 700, fontSize: '0.8rem', color: 'white', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Serving Tamil Nadu & Bengaluru
                </span>
              </div>

              <h1 style={{
                color: 'white',
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: '-0.03em'
              }}>
                Simplify Compliance. <br />
                <span style={{ background: 'linear-gradient(to right, #6C63FF, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Scale Your Tech.
                </span>
              </h1>

              <p style={{
                color: 'rgba(255, 255, 255, 0.78)',
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.55,
                fontWeight: 400
              }}>
                Unified elite solutions for individual tax compliance, monthly corporate bookkeeping, and resilient web/cloud setup. Zero friction, total accuracy.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                <a href="#quote-funnel" className="btn btn-primary" style={{ height: '50px', fontSize: '0.95rem' }}>
                  Get Free Consultation <ArrowRight size={18} />
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=918925063980" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp" 
                  style={{ height: '50px', fontSize: '0.95rem' }}
                >
                  <WhatsAppIcon size={20} />
                  <span>Instant WhatsApp Connect</span>
                </a>
              </div>
            </div>

            {/* Split Hero Right: Interactive Visual Engine Router */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem'
            }}>
              <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1rem' }}>
                <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.25rem' }}>Select Your Engine</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Where should we direct you today?</p>
              </div>

              {/* Engine 1: B2C Salaried/Filer */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1.5px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'var(--transition-fast)',
                cursor: 'pointer'
              }}
              className="card-premium-hover"
              onClick={() => {
                const element = document.getElementById("quote-funnel");
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.25rem' }}>
                    <FileText size={18} style={{ color: 'var(--primary-hover)' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>Individual Tax Filer (B2C)</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>ITR filing, capital gains returns & deductions starting ₹499.</p>
                </div>
                <ArrowRight size={18} style={{ color: 'var(--primary-hover)' }} />
              </div>

              {/* Engine 2: B2B Enterprise Setup */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1.5px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'var(--transition-fast)',
                cursor: 'pointer'
              }}
              className="card-premium-hover"
              onClick={() => {
                const element = document.getElementById("tax-calculator");
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.25rem' }}>
                    <Landmark size={18} style={{ color: 'var(--secondary)' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>Corporate SME Support (B2B)</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>Monthly books, GST filing, cloud web setup & fractional CFO advisory.</p>
                </div>
                <ArrowRight size={18} style={{ color: 'var(--secondary)' }} />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Infinite Scrolling Ticker of Credentials & Social Proof */}
      <div 
        ref={tickerRef}
        className={`reveal-item ${tickerActive ? 'active' : ''}`}
        style={{ width: '100%' }}
      >
        <div className="marquee-ticker-container">
          <div className="marquee-ticker-track">
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <span className="marquee-ticker-item">
                  <Star size={16} fill="var(--accent)" stroke="var(--accent)" /> GOOGLE BUSINESS RATED 4.9★
                </span>
                <span className="marquee-ticker-item">
                  <Shield size={16} style={{ color: 'var(--primary-hover)' }} /> 100% SECURE DIRECT COMPLIANCE
                </span>
                <span className="marquee-ticker-item">
                  <Landmark size={16} style={{ color: 'var(--secondary)' }} /> 50+ REGISTERED CORPS IN TN & BENGALURU
                </span>
                <span className="marquee-ticker-item">
                  <HardDrive size={16} style={{ color: 'white' }} /> CLOUD LINUX AWS NETWORKING
                </span>
                <span className="marquee-ticker-item">
                  <Briefcase size={16} style={{ color: 'var(--accent)' }} /> FRACTIONAL BOOKKEEPING SOLUTIONS
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Services Tabs Matrix */}
      <section 
        ref={tabsRef}
        className={`section reveal-item ${tabsActive ? 'active' : ''}`}
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
                    Complete corporate laptop deployment, operating system setups, firewall installations, local networks routing, and recurring remote tech support SLA.
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
                    Institutional AWS, Linode & VPS configuration, secure Linux administration, automated backup setups, shell scripting, and web app deployments.
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
                    Beautiful custom React website engineering, robust search engine optimization (SEO) configurations, speed optimizations, and dynamic domain administration.
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

      {/* Dynamic Bookkeeping Pricing Calculator Section */}
      <section 
        id="tax-calculator"
        ref={calcRef}
        className={`section reveal-item ${calcActive ? 'active' : ''}`}
        style={{ borderBottom: '1px solid var(--border-light)' }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Bookkeeping Calculator</h2>
            <p>Move the range selector to estimate your business's monthly accounts management rate instantly.</p>
          </div>

          <div className="pricing-calculator-card">
            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-muted)', fontWeight: 600 }}>Estimated Annual Corporate Turnover</h4>
            <div style={{ fontSize: '2.5rem', color: 'var(--dark)', fontWeight: 800, marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              ₹{turnoverSlider} Lakhs
            </div>

            {/* Translucent premium range slider */}
            <input 
              type="range"
              min="5"
              max="150"
              step="5"
              value={turnoverSlider}
              onChange={(e) => setTurnoverSlider(parseInt(e.target.value))}
              className="slider-input-premium"
            />

            <div style={{
              backgroundColor: 'rgba(74, 63, 224, 0.05)',
              border: '1px dashed var(--primary)',
              borderRadius: '12px',
              padding: '1.5rem',
              margin: '1.5rem 0 2rem'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Estimated Service Fee
              </span>
              <div style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 800, marginTop: '0.25rem' }}>
                {getEstimatedFee()}
              </div>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h5 style={{ fontSize: '0.95rem', color: 'var(--dark)', fontWeight: 700, marginBottom: '0.75rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                Included Deliverables:
              </h5>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {getCalculatorDeliverables().map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 500 }}>
                    <CheckCircle size={16} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '2.25rem' }}>
              <a 
                href="#quote-funnel"
                className="btn btn-primary"
                style={{ width: '100%', height: '48px', borderRadius: '10px' }}
              >
                Claim This Plan Package
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Step-by-Step Interactive Compliance Roadmap */}
      <section 
        ref={timelineRef}
        className={`section reveal-item ${timelineActive ? 'active' : ''}`}
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
        ref={whyRef}
        className={`section reveal-item ${whyActive ? 'active' : ''}`}
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
        ref={funnelRef}
        className={`section reveal-item ${funnelActive ? 'active' : ''}`}
        style={{ borderBottom: '1px solid var(--border-light)' }}
      >
        <div className="container">
          <div className="section-title">
            <h2>Get an Instant Service Quote</h2>
            <p>Complete our pre-qualifying micro-funnel. We will match you with a specialized strategist immediately.</p>
          </div>

          <DynamicLeadForm />
        </div>
      </section>

      {/* Accordion-Style Intent Mapped smart FAQs */}
      <section 
        ref={faqRef}
        className={`section reveal-item ${faqActive ? 'active' : ''}`}
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
