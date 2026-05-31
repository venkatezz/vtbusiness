import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceHeroVisual from '../../components/ServiceHeroVisual';

import {
  Mail,
  Shield,
  Globe,
  Server,
  Smartphone,
  Settings,
  ArrowRight,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

import '../../styles/business-email-setup.css';
import '../../styles/serviceHero.css';

const emailSetupSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Email Setup & Google Workspace",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VT Business Support",
    "telephone": "+918925063980"
  },
  "description": "Professional custom business email setup, Google Workspace, Microsoft 365, DNS configuration, MX records, and domain email configuration."
};

const emailServices = [
  {
    icon: <Mail size={24} />,
    title: 'Google Workspace Setup',
    description:
      'Professional Gmail-based business email setup with domain integration and user configuration.',
  },

  {
    icon: <Server size={24} />,
    title: 'Microsoft 365 Setup',
    description:
      'Business Outlook email configuration for secure communication and organizational workflows.',
  },

  {
    icon: <Globe size={24} />,
    title: 'Domain Email Configuration',
    description:
      'Professional domain email setup with DNS records, MX configuration, and secure routing.',
  },

  {
    icon: <Settings size={24} />,
    title: 'DNS & Email Routing',
    description:
      'SPF, DKIM, DMARC, and DNS configuration for reliable and secure email delivery.',
  },

  {
    icon: <Smartphone size={24} />,
    title: 'Mobile & Outlook Setup',
    description:
      'Email configuration for Android, iPhone, Outlook, and multi-device business access.',
  },

  {
    icon: <Shield size={24} />,
    title: 'Email Security & Backup',
    description:
      'Business email protection, recovery setup, spam filtering, and account security configuration.',
  },
];

const processSteps = [
  'Connect Domain & Email Provider',
  'Configure Business Accounts',
  'Setup Devices & Security',
];

// Flat Professional Corporate Email Communication SVG
const BusinessEmailSetupIllustration = () => (
  <svg viewBox="0 0 400 300" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Grid & Envelope paths */}
    <rect x="30" y="30" width="340" height="240" rx="14" fill="rgba(74, 63, 224, 0.02)" stroke="rgba(74, 63, 224, 0.04)" strokeWidth="1.5" />
    
    {/* Floating Secure Envelope */}
    <rect x="80" y="70" width="240" height="150" rx="12" fill="#0F172A" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
    
    {/* Envelope fold paths */}
    <path d="M80 72 L200 160 L320 72" stroke="#5B4DFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M82 218 L170 140" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeLinecap="round" />
    <path d="M318 218 L230 140" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeLinecap="round" />
    
    {/* Floating Security Checkmarks */}
    <circle cx="200" cy="180" r="28" fill="#ffffff" filter="drop-shadow(0 8px 16px rgba(8,16,40,0.1))" />
    <circle cx="200" cy="180" r="20" fill="rgba(16, 185, 129, 0.1)" stroke="#10B981" strokeWidth="2" />
    <path d="M193 180 L198 185 L208 175" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Miniature status signals */}
    <circle cx="270" cy="110" r="14" fill="#1E293B" stroke="rgba(255,255,255,0.1)" />
    <circle cx="270" cy="110" r="4" fill="#10B981" />
  </svg>
);

const BusinessEmailSetup = () => {
  return (
    <main className="email-page">
      <SEO 
        title="Business Email Setup & Google Workspace | VT Business Support"
        description="Professional custom business email setup, Google Workspace, Microsoft 365, DNS configuration, MX records, and domain email configuration."
        schema={emailSetupSchema}
      />

      {/* HERO */}
      <section className="service-hero">

        <div className="container">

          <div className="service-hero-grid">

            {/* LEFT COLUMN */}
            <div className="service-hero-content">

              <div className="service-badge">
                <ShieldCheck size={14} />
                <span>Professional Business Communication</span>
              </div>

              <h1 className="service-title">
                Business Email
                <span> Setup Services</span>
              </h1>

              <p className="service-desc">
                Professional email setup using Google Workspace,
                Microsoft 365, and domain-based business communication
                solutions for startups and growing companies.
              </p>

              <div className="service-buttons">

                <a
                  href="https://api.whatsapp.com/send?phone=918925063980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-btn-primary"
                >
                  Setup Business Email
                </a>

                <Link
                  to="/contact"
                  className="service-btn-secondary"
                >
                  Talk to Us
                </Link>

              </div>

              <div className="service-trust-strip">
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Google Workspace</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Microsoft 365</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Secure Setup</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <ServiceHeroVisual
              svgIllustration={BusinessEmailSetupIllustration}
              trustLabel="SPF Verified"
              trustValue="DKIM ENABLED"
              trustIcon={ShieldCheck}
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="email-section">

        <div className="container">

          <div className="email-section-head">

            <h2>Email Setup Services</h2>

            <p>
              Professional business email configuration
              for reliable communication and secure operations.
            </p>

          </div>

          <div className="email-grid">

            {emailServices.map((item, index) => (

              <div
                className="email-card"
                key={index}
              >

                <div className="email-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY EMAIL */}
      <section className="email-section email-light-section">

        <div className="container">

          <div className="email-section-head">

            <h2>Why Professional Business Email Matters</h2>

            <p>
              Improve trust, communication reliability,
              branding, and operational professionalism.
            </p>

          </div>

          <div className="email-why-grid">

            {[
              'Professional Business Identity',
              'Trusted Customer Communication',
              'Secure Email Infrastructure',
              'Reliable Team Collaboration',
              'Better Brand Credibility',
              'Multi-device Business Access',
            ].map((item, index) => (

              <div
                className="email-why-item"
                key={index}
              >

                <CheckCircle size={18} />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="email-section">

        <div className="container">

          <div className="email-section-head">

            <h2>Our Email Setup Process</h2>

            <p>
              Simple and secure setup workflow for
              business communication systems.
            </p>

          </div>

          <div className="email-process-grid">

            {processSteps.map((step, index) => (

              <div
                className="email-process-card"
                key={index}
              >

                <div className="email-process-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="email-cta-section">

        <div className="container">

          <div className="email-cta-box">

            <h2>
              Need Professional Business Email Setup?
            </h2>

            <p>
              Talk with VT Business Support for
              Google Workspace, Microsoft 365,
              domain email configuration, and secure
              business communication setup.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="email-btn-primary"
            >
              Get Email Setup Support
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default BusinessEmailSetup;