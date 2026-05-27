import React from 'react';

import {
  Mail,
  Shield,
  Globe,
  Server,
  Smartphone,
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import '../../styles/business-email-setup.css';

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

const BusinessEmailSetup = () => {
  return (
    <main className="email-page">

      {/* HERO */}
      <section className="email-hero">

        <div className="container">

          <div className="email-badge">
            Professional Business Communication
          </div>

          <h1 className="email-title">
           Business Email
           <br />
           <span>Setup Services</span>
          </h1>

          <p className="email-desc">
            Professional email setup using Google Workspace,
            Microsoft 365, and domain-based business communication
            solutions for startups and growing companies.
          </p>

          <div className="email-buttons">

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="email-btn-primary"
            >
              Setup Business Email
            </a>

            <a
              href="/contact"
              className="email-btn-secondary"
            >
              Talk to Us
            </a>

          </div>

          <div className="email-trust-strip">

            {[
              'Google Workspace',
              'Microsoft 365',
              'Secure Email Setup',
              'Multi-device Access',
            ].map((item, index) => (

              <div
                className="email-trust-item"
                key={index}
              >

                <CheckCircle size={16} />

                <span>{item}</span>

              </div>

            ))}

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