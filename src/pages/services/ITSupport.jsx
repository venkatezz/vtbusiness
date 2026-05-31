import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceHeroVisual from '../../components/ServiceHeroVisual';

import {
  Server,
  Cloud,
  Shield,
  Globe,
  Mail,
  Network,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Clock
} from 'lucide-react';

import '../../styles/it-support.css';
import '../../styles/serviceHero.css';

const itSupportSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IT Support & Office Infrastructure Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VT Business Support",
    "telephone": "+918925063980"
  },
  "description": "Managed IT support, office network setup, computer hardware maintenance, antivirus, firewall configuration, and IT outsourcing solutions for businesses."
};

const supportAreas = [
  {
    icon: <Server size={24} />,
    title: 'Linux System Support',
    description:
      'Linux server setup, maintenance, troubleshooting, and security hardening for business operations.',
  },

  {
    icon: <Cloud size={24} />,
    title: 'AWS & Cloud Infrastructure',
    description:
      'Cloud setup, EC2 management, backups, storage, and scalable business infrastructure support.',
  },

  {
    icon: <Network size={24} />,
    title: 'Networking & Office IT',
    description:
      'Router setup, office networking, printers, system configuration, and infrastructure support.',
  },

  {
    icon: <Mail size={24} />,
    title: 'Business Email Setup',
    description:
      'Professional email setup using Google Workspace and Microsoft 365 for businesses.',
  },

  {
    icon: <Globe size={24} />,
    title: 'Website Hosting Support',
    description:
      'Hosting setup, VPS deployment, SSL configuration, domain connection, and maintenance.',
  },

  {
    icon: <Shield size={24} />,
    title: 'Security & Backup',
    description:
      'Business data protection, server hardening, backup setup, and operational continuity.',
  },
];

const processSteps = [
  'Analyze Your Current Setup',
  'Implement Business IT Solutions',
  'Provide Ongoing Technical Support',
];

// Premium Custom Flat SVG illustration for business non-technical audience
const ITSupportIllustration = () => (
  <svg viewBox="0 0 400 300" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Base Laptop */}
    <rect x="70" y="80" width="260" height="150" rx="12" fill="#0F172A" />
    <rect x="80" y="90" width="240" height="130" rx="6" fill="#1E293B" />
    <rect x="40" y="230" width="320" height="14" rx="7" fill="#64748B" />
    
    {/* Laptop Keyboard Groove */}
    <rect x="180" y="232" width="40" height="4" rx="2" fill="#475569" />
    
    {/* Clean Business Dashboard Mockup inside Screen */}
    <rect x="96" y="106" width="90" height="42" rx="4" fill="#334155" />
    <line x1="106" y1="118" x2="156" y2="118" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
    <line x1="106" y1="128" x2="176" y2="128" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
    <circle cx="216" cy="127" r="16" fill="rgba(74, 63, 224, 0.15)" stroke="#5B4DFF" strokeWidth="2" />
    
    {/* Active Live Uptime Status Path */}
    <rect x="96" y="160" width="208" height="46" rx="6" fill="#0F172A" stroke="rgba(255,255,255,0.06)" />
    <circle cx="116" cy="183" r="6" fill="#10B981" />
    <line x1="132" y1="183" x2="280" y2="183" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
    
    {/* Customer Support Floating Shield */}
    <circle cx="300" cy="100" r="32" fill="#ffffff" filter="drop-shadow(0 10px 20px rgba(8,16,40,0.12))" />
    <path d="M300 86 C296 88 290 88 288 88 L288 100 C288 108 296 114 300 116 C304 114 312 108 312 100 L312 88 C310 88 304 88 300 86 Z" fill="#4A3FE0" />
    <path d="M295 101 L298 104 L305 97" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ITSupport = () => {
  return (
    <main className="it-support-page">
      <SEO 
        title="IT Support & Office Infrastructure Services | VT Business Support"
        description="Managed IT support, office network setup, computer hardware maintenance, antivirus, firewall configuration, and IT outsourcing solutions for businesses."
        schema={itSupportSchema}
      />

      {/* HERO */}
      <section className="service-hero">

        <div className="container">

          <div className="service-hero-grid">

            {/* LEFT COLUMN */}
            <div className="service-hero-content">

              <div className="service-badge">
                <ShieldCheck size={14} />
                <span>Business IT Operations Support</span>
              </div>

              <h1 className="service-title">
                IT Infrastructure &
                <span> Technical Support</span>
              </h1>

              <p className="service-desc">
                Reliable business IT support for Linux systems,
                cloud infrastructure, networking, website hosting,
                and office operations across Tamil Nadu and Bengaluru.
              </p>

              <div className="service-buttons">

                <a
                  href="https://api.whatsapp.com/send?phone=918925063980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-btn-primary"
                >
                  Chat on WhatsApp
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
                  <span>Linux Systems</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Office IT</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>24/7 Monitoring</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <ServiceHeroVisual
              svgIllustration={ITSupportIllustration}
              trustLabel="Fast Response"
              trustValue="ACTIVE SUPPORT"
              trustIcon={Clock}
            />

          </div>

        </div>

      </section>

      {/* SUPPORT AREAS */}
      <section className="it-section">

        <div className="container">

          <div className="it-section-head">

            <h2>Business IT Support Areas</h2>

            <p>
              Practical infrastructure and technical support
              services for startups, SMEs, and growing businesses.
            </p>

          </div>

          <div className="it-grid">

            {supportAreas.map((item, index) => (

              <div
                className="it-card"
                key={index}
              >

                <div className="it-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="it-section it-light-section">

        <div className="container">

          <div className="it-section-head">

            <h2>Why Businesses Choose VT Support</h2>

            <p>
              Focused on practical solutions, fast troubleshooting,
              and stable business operations.
            </p>

          </div>

          <div className="it-why-grid">

            {[
              'Remote & On-site Support',
              'Business-focused IT Solutions',
              'Linux & Cloud Experience',
              'Fast Issue Resolution',
              'Secure Infrastructure Approach',
              'Practical Technical Guidance'
            ].map((point, index) => (

              <div
                className="it-why-item"
                key={index}
              >

                <CheckCircle size={18} />

                <span>{point}</span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="it-section">

        <div className="container">

          <div className="it-section-head">

            <h2>Our Support Process</h2>

            <p>
              Simple and reliable workflow for business IT support.
            </p>

          </div>

          <div className="it-process-grid">

            {processSteps.map((step, index) => (

              <div
                className="it-process-card"
                key={index}
              >

                <div className="it-process-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="it-cta-section">

        <div className="container">

          <div className="it-cta-box">

            <h2>
              Need Reliable Business IT Support?
            </h2>

            <p>
              Talk with VT Business Support for cloud setup,
              Linux systems, networking, hosting, and
              infrastructure support.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="it-btn-primary"
            >
              Get Technical Support
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ITSupport;