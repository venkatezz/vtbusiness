import React from 'react';
import {
  Server,
  Cloud,
  Shield,
  Globe,
  Mail,
  Network,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import '../../styles/it-support.css';

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

const ITSupport = () => {
  return (
    <main className="it-support-page">

      {/* HERO */}
      <section className="it-hero-section">

        <div className="container">

          <div className="it-hero-badge">
            Business IT Operations Support
          </div>

          <h1 className="it-hero-title">
            IT Infrastructure &
            <span> Technical Support</span>
          </h1>

          <p className="it-hero-desc">
            Reliable business IT support for Linux systems,
            cloud infrastructure, networking, website hosting,
            and office operations across Tamil Nadu and Bengaluru.
          </p>

          <div className="it-hero-buttons">

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="it-btn-primary"
            >
              Chat on WhatsApp
            </a>

            <a
              href="/contact"
              className="it-btn-secondary"
            >
              Talk to Us
            </a>

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