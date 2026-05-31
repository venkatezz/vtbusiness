import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceHeroVisual from '../../components/ServiceHeroVisual';

import {
  Cloud,
  Server,
  Shield,
  Globe,
  Database,
  Activity,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Lock
} from 'lucide-react';

import '../../styles/cloud-server-setup.css';
import '../../styles/serviceHero.css';

const cloudSetupSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cloud Server Setup & Hosting Configuration",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VT Business Support",
    "telephone": "+918925063980"
  },
  "description": "VPS hosting configuration, digital ocean, Linode, AWS cloud servers, SSL installation, domain mapping, backup schedules, and cloud migration support."
};

const cloudServices = [
  {
    icon: <Cloud size={24} />,
    title: 'AWS EC2 Infrastructure',
    description:
      'Cloud server deployment, EC2 configuration, scalable hosting, and infrastructure setup.',
  },

  {
    icon: <Server size={24} />,
    title: 'Linux VPS Setup',
    description:
      'Ubuntu, CentOS, and Linux VPS deployment with security hardening and maintenance.',
  },

  {
    icon: <Globe size={24} />,
    title: 'Website Hosting Support',
    description:
      'Business website hosting, deployment, DNS connection, and server optimization.',
  },

  {
    icon: <Shield size={24} />,
    title: 'SSL & Security Setup',
    description:
      'SSL installation, firewall configuration, access security, and server protection.',
  },

  {
    icon: <Database size={24} />,
    title: 'Backup & Recovery Systems',
    description:
      'Automated backups, recovery planning, cloud storage integration, and business continuity.',
  },

  {
    icon: <Activity size={24} />,
    title: 'Monitoring & Maintenance',
    description:
      'Infrastructure monitoring, uptime tracking, troubleshooting, and operational maintenance.',
  },
];

const processSteps = [
  'Analyze Infrastructure Requirements',
  'Deploy & Configure Cloud Systems',
  'Monitor & Maintain Operations',
];

// Flat Professional Cloud Hosting / Secure Server SVG
const CloudServerSetupIllustration = () => (
  <svg viewBox="0 0 400 300" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Enclosing visual framework */}
    <rect x="30" y="30" width="340" height="240" rx="14" fill="rgba(74, 63, 224, 0.02)" stroke="rgba(74, 63, 224, 0.04)" strokeWidth="1.5" />
    
    {/* Physical Server Rack array */}
    <rect x="90" y="60" width="220" height="170" rx="12" fill="#0F172A" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
    
    {/* Hard drive Bay 1 */}
    <rect x="110" y="80" width="180" height="34" rx="6" fill="#1E293B" stroke="rgba(255,255,255,0.04)" />
    <circle cx="130" cy="97" r="4" fill="#10B981" />
    <line x1="150" y1="97" x2="250" y2="97" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
    <circle cx="270" cy="97" r="3" fill="#4A3FE0" />
    
    {/* Hard drive Bay 2 */}
    <rect x="110" y="128" width="180" height="34" rx="6" fill="#1E293B" stroke="rgba(255,255,255,0.04)" />
    <circle cx="130" cy="145" r="4" fill="#10B981" />
    <line x1="150" y1="145" x2="230" y2="145" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
    <circle cx="270" cy="145" r="3" fill="#10B981" />
    
    {/* Hard drive Bay 3 */}
    <rect x="110" y="176" width="180" height="34" rx="6" fill="#1E293B" stroke="rgba(255,255,255,0.04)" />
    <circle cx="130" cy="193" r="4" fill="#10B981" />
    <line x1="150" y1="193" x2="260" y2="193" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
    <circle cx="270" cy="193" r="3" fill="#EF4444" />
  </svg>
);

const CloudServerSetup = () => {
  return (
    <main className="cloud-page">
      <SEO 
        title="Cloud Server Setup & Hosting Configuration | VT Business Support"
        description="VPS hosting configuration, digital ocean, Linode, AWS cloud servers, SSL installation, domain mapping, backup schedules, and cloud migration support."
        schema={cloudSetupSchema}
      />

      {/* HERO */}
      <section className="service-hero">

        <div className="container">

          <div className="service-hero-grid">

            {/* LEFT COLUMN */}
            <div className="service-hero-content">

              <div className="service-badge">
                <ShieldCheck size={14} />
                <span>Business Cloud Infrastructure Support</span>
              </div>

              <h1 className="service-title">
                Cloud & Server
                <span> Infrastructure Setup</span>
              </h1>

              <p className="service-desc">
                Professional cloud infrastructure setup for
                AWS, Linux VPS, website hosting, server security,
                backup systems, and reliable business operations.
              </p>

              <div className="service-buttons">

                <a
                  href="https://api.whatsapp.com/send?phone=918925063980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-btn-primary"
                >
                  Discuss Infrastructure Setup
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
                  <span>AWS Infrastructure</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Linux VPS Support</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Secure Hosting</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <ServiceHeroVisual
              svgIllustration={CloudServerSetupIllustration}
              trustLabel="SSL Active"
              trustValue="BACKUP ENABLED"
              trustIcon={Lock}
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="cloud-section">

        <div className="container">

          <div className="cloud-section-head">

            <h2>Cloud Infrastructure Services</h2>

            <p>
              Reliable infrastructure support solutions
              for startups, SMEs, websites, and growing businesses.
            </p>

          </div>

          <div className="cloud-grid">

            {cloudServices.map((item, index) => (

              <div
                className="cloud-card"
                key={index}
              >

                <div className="cloud-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CLOUD */}
      <section className="cloud-section cloud-light-section">

        <div className="container">

          <div className="cloud-section-head">

            <h2>Why Businesses Need Cloud Infrastructure</h2>

            <p>
              Stable cloud systems improve reliability,
              scalability, security, and operational continuity.
            </p>

          </div>

          <div className="cloud-why-grid">

            {[
              'Reliable Business Uptime',
              'Secure Infrastructure',
              'Remote Accessibility',
              'Scalable Operations',
              'Backup & Disaster Recovery',
              'Long-term Infrastructure Stability',
            ].map((item, index) => (

              <div
                className="cloud-why-item"
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
      <section className="cloud-section">

        <div className="container">

          <div className="cloud-section-head">

            <h2>Our Infrastructure Process</h2>

            <p>
              Structured cloud deployment workflow
              for stable and secure business systems.
            </p>

          </div>

          <div className="cloud-process-grid">

            {processSteps.map((step, index) => (

              <div
                className="cloud-process-card"
                key={index}
              >

                <div className="cloud-process-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cloud-cta-section">

        <div className="container">

          <div className="cloud-cta-box">

            <h2>
              Need Reliable Cloud Infrastructure?
            </h2>

            <p>
              Talk with VT Business Support for
              AWS setup, Linux servers, secure hosting,
              backup systems, and infrastructure support.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="cloud-btn-primary"
            >
              Get Infrastructure Support
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default CloudServerSetup;