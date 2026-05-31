import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceHeroVisual from '../../components/ServiceHeroVisual';

import {
  Server,
  Cloud,
  Shield,
  Database,
  Activity,
  HardDrive,
  ArrowRight,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

import '../../styles/aws-linux-support.css';
import '../../styles/serviceHero.css';

const awsSupportSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AWS & Linux Server Administration Support",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VT Business Support",
    "telephone": "+918925063980"
  },
  "description": "Professional AWS cloud support, EC2 instance setup, Linux server administration, database backups, shell scripting, and server migration services."
};

const supportServices = [
  {
    icon: <Cloud size={24} />,
    title: 'AWS EC2 Infrastructure',
    description:
      'AWS EC2 deployment, cloud server setup, scalable hosting, and infrastructure configuration.',
  },

  {
    icon: <Server size={24} />,
    title: 'Linux Server Administration',
    description:
      'Linux server setup, troubleshooting, maintenance, updates, and operational management.',
  },

  {
    icon: <HardDrive size={24} />,
    title: 'VPS Deployment & Hosting',
    description:
      'Business VPS setup, website deployment, migration support, and hosting configuration.',
  },

  {
    icon: <Shield size={24} />,
    title: 'Security & Hardening',
    description:
      'Firewall setup, SSL installation, access protection, and server security optimization.',
  },

  {
    icon: <Database size={24} />,
    title: 'Backup & Recovery',
    description:
      'Automated backups, disaster recovery planning, and infrastructure continuity support.',
  },

  {
    icon: <Activity size={24} />,
    title: 'Monitoring & Maintenance',
    description:
      'Infrastructure monitoring, uptime checks, troubleshooting, and business continuity support.',
  },
];

const processSteps = [
  'Analyze Infrastructure Requirements',
  'Deploy & Optimize Cloud Systems',
  'Monitor & Maintain Operations',
];

// Flat Professional Cloud Infrastructure / Server Management SVG
const AWSLinuxSupportIllustration = () => (
  <svg viewBox="0 0 400 300" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cloud Background Rings */}
    <circle cx="200" cy="150" r="110" stroke="rgba(74, 63, 224, 0.05)" strokeWidth="4" strokeDasharray="10 10" />
    <circle cx="200" cy="150" r="80" stroke="rgba(74, 63, 224, 0.08)" strokeWidth="2" />
    
    {/* Main Central Cloud Icon representation */}
    <path d="M245 130 C245 105 225 85 200 85 C180 85 163 98 157 117 C153 115 149 114 145 114 C128 114 115 127 115 144 C115 160 128 173 145 173 L245 173 C261 173 275 160 275 144 C275 128 261 130 245 130 Z" fill="#1E293B" stroke="#4A3FE0" strokeWidth="2" />
    
    {/* Physical Server Rack inside Cloud */}
    <rect x="150" y="125" width="100" height="36" rx="4" fill="#0F172A" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
    <circle cx="165" cy="143" r="4" fill="#10B981" />
    <circle cx="180" cy="143" r="4" fill="#10B981" />
    <line x1="198" y1="143" x2="236" y2="143" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    
    {/* Action connection lines */}
    <path d="M145 144 L80 144" stroke="#5B4DFF" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M245 144 L320 144" stroke="#5B4DFF" strokeWidth="2" strokeDasharray="4 4" />
    
    <circle cx="80" cy="144" r="12" fill="#ffffff" filter="drop-shadow(0 4px 10px rgba(8,16,40,0.08))" />
    <circle cx="80" cy="144" r="6" fill="#10B981" />
    
    <circle cx="320" cy="144" r="12" fill="#ffffff" filter="drop-shadow(0 4px 10px rgba(8,16,40,0.08))" />
    <circle cx="320" cy="144" r="6" fill="#4A3FE0" />
  </svg>
);

const AWSLinuxSupport = () => {
  return (
    <main className="aws-page">
      <SEO 
        title="AWS & Linux Server Administration Support | VT Business Support"
        description="Professional AWS cloud support, EC2 instance setup, Linux server administration, database backups, shell scripting, and server migration services."
        schema={awsSupportSchema}
      />

      {/* HERO */}
      <section className="service-hero">

        <div className="container">

          <div className="service-hero-grid">

            {/* LEFT COLUMN */}
            <div className="service-hero-content">

              <div className="service-badge">
                <ShieldCheck size={14} />
                <span>Business Infrastructure Support</span>
              </div>

              <h1 className="service-title">
                AWS & Linux
                <span> Infrastructure Support</span>
              </h1>

              <p className="service-desc">
                Reliable AWS cloud setup, Linux server administration,
                VPS deployment, security hardening, and infrastructure
                support for startups and growing businesses.
              </p>

              <div className="service-buttons">

                <a
                  href="https://api.whatsapp.com/send?phone=918925063980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-btn-primary"
                >
                  Discuss Infrastructure Support
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
                  <span>AWS Cloud Support</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Linux Administration</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Secure Infrastructure</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <ServiceHeroVisual
              svgIllustration={AWSLinuxSupportIllustration}
              trustLabel="99.99% Uptime"
              trustValue="MONITORED CLOUD"
              trustIcon={Activity}
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="aws-section">

        <div className="container">

          <div className="aws-section-head">

            <h2>AWS & Linux Support Services</h2>

            <p>
              Practical cloud infrastructure and Linux server
              support solutions for stable business operations.
            </p>

          </div>

          <div className="aws-grid">

            {supportServices.map((item, index) => (

              <div
                className="aws-card"
                key={index}
              >

                <div className="aws-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY */}
      <section className="aws-section aws-light-section">

        <div className="container">

          <div className="aws-section-head">

            <h2>
              Why Businesses Need Managed Infrastructure
            </h2>

            <p>
              Proper cloud infrastructure improves uptime,
              security, reliability, and operational continuity.
            </p>

          </div>

          <div className="aws-why-grid">

            {[
              'Improved Infrastructure Security',
              'Reliable Business Uptime',
              'Faster Troubleshooting',
              'Scalable Cloud Operations',
              'Backup & Recovery Systems',
              'Reduced Downtime Risks',
            ].map((item, index) => (

              <div
                className="aws-why-item"
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
      <section className="aws-section">

        <div className="container">

          <div className="aws-section-head">

            <h2>Our Support Workflow</h2>

            <p>
              Structured infrastructure support process
              focused on stable and secure operations.
            </p>

          </div>

          <div className="aws-process-grid">

            {processSteps.map((step, index) => (

              <div
                className="aws-process-card"
                key={index}
              >

                <div className="aws-process-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="aws-cta-section">

        <div className="container">

          <div className="aws-cta-box">

            <h2>
              Need Reliable AWS & Linux Support?
            </h2>

            <p>
              Talk with VT Business Support for
              AWS infrastructure setup, Linux administration,
              secure hosting, VPS deployment, and server support.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="aws-btn-primary"
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

export default AWSLinuxSupport;