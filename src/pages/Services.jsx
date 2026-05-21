import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe, Cloud, FileText, Settings, Briefcase,
  CheckCircle, Phone, Calculator, BookText,
  ShieldCheck, Monitor, Server, Code, MapPin, Search, BarChart3,
  Building2, Store, Zap, ArrowRight, Star,
  MessageCircle, ClipboardList, Headphones
} from 'lucide-react';
import SEO from '../components/SEO';

const WhatsAppIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.187 1.605 6.006L0 24l6.11-1.603a11.783 11.783 0 005.937 1.603h.005c6.635 0 12.03-5.393 12.034-12.031a11.813 11.813 0 00-3.528-8.503z" />
  </svg>
);

/* ─── Premium Service Card ───────────────────────────────────────── */
const ServiceCard = ({ service }) => (
  <div className="svc-card">
    {/* Icon + Title header */}
    <div className="svc-card-header">
      <div className="svc-icon-wrap">
        {React.cloneElement(service.icon, { size: 22 })}
      </div>
      <h3 className="svc-card-title">{service.title}</h3>
    </div>

    {/* Body */}
    <div className="svc-card-body">
      <p className="svc-card-desc">{service.content}</p>
      <div className="svc-card-benefit">
        <CheckCircle size={13} />
        <span>{service.benefit}</span>
      </div>
    </div>
  </div>
);

/* ─── Main Component ─────────────────────────────────────────────── */
const Services = () => {
  const [activeCategory, setActiveCategory] = useState('finance');

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
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const financialServices = [
    { title: 'GST Registration & Filing', icon: <FileText />, content: 'We handle monthly and yearly GST filing to keep your business fully compliant — GSTR-1, GSTR-3B, ITC reconciliation.', benefit: 'Accurate compliance, zero penalties' },
    { title: 'Income Tax Filing (ITR)', icon: <Calculator />, content: 'Plan and file your IT returns accurately to maximize legal tax savings. Salaried, capital gains, and business income covered.', benefit: 'Maximize deductions & savings' },
    { title: 'Accounting & Bookkeeping', icon: <BookText />, content: 'Stay on top of your finances with clean digital ledgers, monthly P&L, and professional balance sheet management.', benefit: 'Clear financial health visibility' },
    { title: 'Business Compliance', icon: <ShieldCheck />, content: 'All your legal ROC and MCA filings handled without the headache. Annual returns, board resolutions, and secretarial compliance.', benefit: 'Peace of mind with legal formalities' },
    { title: 'Financial Advisory', icon: <BarChart3 />, content: 'Expert advice to grow your profit margins, manage business audits smoothly, and build sound financial reporting structures.', benefit: 'Data-driven decision making' }
  ];

  const registrationServices = [
    { title: 'Company Registration', icon: <Building2 />, content: 'Private Limited, LLP, and Partnership firm registration assistance with MCA filings and digital signature setup.', benefit: 'Get your business legally incorporated' },
    { title: 'GST Registration', icon: <FileText />, content: 'New GST registration for businesses crossing the threshold or voluntarily registering for formal tax compliance.', benefit: 'Tax compliance ready from Day 1' },
    { title: 'MSME Registration', icon: <Store />, content: 'Udyam registration support to help small businesses access government benefits, priority lending, and subsidies.', benefit: 'Access MSME benefits & priority support' },
    { title: 'Trademark Registration', icon: <ShieldCheck />, content: 'Brand name and logo trademark filing, attorney coordination, and status tracking for your unique business identity.', benefit: 'Protect your brand legally' },
    { title: 'Shop Act Registration', icon: <MapPin />, content: 'Local business license setup assistance for physical shop and establishment locations across Tamil Nadu.', benefit: 'Trade license simplified' },
    { title: 'PAN & TAN Registration', icon: <Briefcase />, content: 'Business tax identity setup support for new entities to manage official banking, TDS, and government transactions.', benefit: 'Ready for all tax banking needs' }
  ];

  const itServices = [
    { title: 'Network & Router Setup', icon: <Settings />, content: 'High-speed business Wi-Fi, secure router configuration, VPN tunnels, and complete office networking architecture.', benefit: 'Stable, secure & fast connections' },
    { title: 'Server Setup & Maintenance', icon: <Server />, content: 'Set up and manage on-premise servers with automated backup, 24/7 monitoring, and remote support SLA.', benefit: 'Enterprise-grade secure systems' },
    { title: 'Website & App Development', icon: <Globe />, content: 'Custom React websites, dynamic booking portals, and high-performance landing pages with SEO-optimized architecture.', benefit: 'Premium modern online presence' },
    { title: 'Google Business & Local SEO', icon: <Search />, content: 'Google Business profile setup, G-Maps integration, and targeted local city SEO to drive organic search traffic.', benefit: 'Get found by local customers' },
    { title: 'Cloud Setup (AWS/Azure)', icon: <Cloud />, content: 'Scalable cloud infrastructure design, VPS provisioning, secure Linux administration, and application deployments.', benefit: 'Scale without hardware constraints' },
    { title: 'Linux Support', icon: <Monitor />, content: 'Ubuntu, CentOS, and Debian desktop and server administration, troubleshooting, shell scripting, and security hardening.', benefit: 'Open-source stability & control' },
    { title: 'Automation Scripts (Python)', icon: <Code />, content: 'Custom Python scripts to automate repetitive daily operations — invoice generation, data pipelines, email workflows.', benefit: 'Save hours of manual daily work' },
    { title: 'AI-based Automations', icon: <Zap />, content: 'Smart AI tools for auto-replying, intelligent document parsing, lead classification, and WhatsApp workflow automation.', benefit: 'Save time with smart AI systems' }
  ];

  const categories = [
    { key: 'finance',      label: 'GST & Tax',    services: financialServices },
    { key: 'registration', label: 'Registration', services: registrationServices },
    { key: 'it',           label: 'IT & Cloud',   services: itServices }
  ];

  const current = categories.find(c => c.key === activeCategory);

  const howItWorks = [
    { step: '01', icon: <MessageCircle size={22} />, title: 'Contact Us', desc: 'Reach out via WhatsApp or phone — our advisor responds within 30 minutes on any business day.' },
    { step: '02', icon: <ClipboardList size={22} />, title: 'Share Your Requirement', desc: 'Tell us your specific need — GST filing, IT setup, registration, or any business challenge you face.' },
    { step: '03', icon: <Headphones size={22} />, title: 'Get Fast Professional Support', desc: 'We assign a dedicated expert and deliver a precise, affordable solution with complete follow-through.' },
  ];

  return (
    <div>
      <SEO
        title="Professional Business Services | GST, IT & Web | VT Business Support"
        description="Comprehensive business solutions including GST filing, income tax, accounting, IT support, website development, and cloud services in Tamil Nadu & Bengaluru."
      />

      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="svc-hero">
        {/* Top accent line */}
        <div className="svc-hero-line" />
        {/* Subtle dot-grid overlay */}
        <div className="svc-hero-grid" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="svc-hero-badge">
            <Star size={13} fill="var(--accent)" stroke="var(--accent)" />
            <span>20+ Services Across Finance &amp; Technology</span>
          </div>

          <h1 className="svc-hero-heading">Professional Services</h1>

          <p className="svc-hero-sub">
            Practical financial compliance and high-performance IT infrastructure — engineered to scale your business across{' '}
            <strong style={{ color: 'var(--primary-hover)', fontWeight: 700 }}>Tamil Nadu &amp; Bengaluru</strong>.
          </p>

          <a href="#services-grid" className="btn btn-primary" style={{ height: '50px', fontSize: '0.95rem' }}>
            Explore All Services <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────── */}
      <div className="svc-stats-strip">
        <div className="container">
          <div className="svc-stats-row">
            {[
              { value: '50+',    label: 'Active Clients' },
              { value: '5+',     label: 'Years Experience' },
              { value: '100%',   label: 'Compliance Rate' },
              { value: '30 min', label: 'Response SLA' },
            ].map((stat, i) => (
              <div key={i} className="svc-stat-item">
                <div className="svc-stat-val">{stat.value}</div>
                <div className="svc-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Grid with Category Tabs ────────────────────── */}
      <section id="services-grid" className="section reveal-item">
        <div className="container">
          <div className="section-title">
            <h2>All Service Categories</h2>
            <p>Select a vertical below to explore our full service portfolio in detail.</p>
          </div>

          {/* Category Tabs */}
          <div className="svc-tabs-wrapper">
            <div className="svc-tabs-track">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`svc-tab-btn ${activeCategory === cat.key ? 'svc-tab-btn--active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="svc-cards-grid">
            {current.services.map((service, idx) => (
              <ServiceCard key={`${activeCategory}-${idx}`} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Content Block ────────────────────────────────────── */}
      <section className="section reveal-item svc-seo-block">
        <div className="container">
          <div className="svc-seo-inner">
            <h2 className="svc-seo-heading">End-to-End Business Support Across TN &amp; Bengaluru</h2>
            <div className="svc-seo-body">
              <p>
                From <strong>GST registration</strong> to <strong>AWS cloud infrastructure</strong>, VT Business Support offers end-to-end solutions for growing enterprises — significantly reducing the operational burden on small business owners managing both compliance and technology.
              </p>
              <p>
                Whether you need a trusted <strong>tax consultant in Tamil Nadu</strong> or reliable <strong>IT support in Bengaluru</strong>, we deliver professional, fast, and affordable solutions — just a message away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section className="section reveal-item svc-how-section">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
            <p>Three simple steps to get expert support for your business.</p>
          </div>
          <div className="svc-how-grid">
            {howItWorks.map((item, i) => (
              <div key={i} className="svc-how-card">
                <div className="svc-how-step-num">{item.step}</div>
                <div className="svc-how-icon-wrap">{item.icon}</div>
                <div>
                  <h4 className="svc-how-title">{item.title}</h4>
                  <p className="svc-how-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────── */}
      <section className="section reveal-item svc-cta-section">
        <div className="container">
          <div className="svc-cta-inner">
            <h2 className="svc-cta-heading">Ready to optimize your operations?</h2>
            <p className="svc-cta-sub">
              Contact us for a free consultation. Our experts will respond within 30 minutes with a tailored plan for your business.
            </p>

            {/* Trust micro row — Fix 7 */}
            <div className="svc-trust-row">
              {['GST Experts', 'Fast WhatsApp Support', 'Tamil Nadu & Bengaluru'].map(t => (
                <span key={t} className="svc-trust-item">
                  <CheckCircle size={13} />
                  {t}
                </span>
              ))}
            </div>

            <div className="svc-cta-btns">
              <a href="https://api.whatsapp.com/send?phone=918925063980" className="btn btn-whatsapp" style={{ padding: '0 2.5rem', height: '52px', fontSize: '1rem' }}>
                <WhatsAppIcon size={20} />
                <span>WhatsApp Us</span>
              </a>
              <a href="tel:+918925063980" className="btn" style={{ backgroundColor: 'var(--dark)', color: 'white', padding: '0 2.5rem', height: '52px', fontSize: '1rem' }}>
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
