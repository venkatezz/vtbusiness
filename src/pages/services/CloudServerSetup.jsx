import React from 'react';

import {
  Cloud,
  Server,
  Shield,
  Globe,
  Database,
  Activity,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import '../../styles/cloud-server-setup.css';

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

const CloudServerSetup = () => {
  return (
    <main className="cloud-page">

      {/* HERO */}
      <section className="cloud-hero">

        <div className="container">

          <div className="cloud-badge">
            Business Cloud Infrastructure Support
          </div>

          <h1 className="cloud-title">
            Cloud & Server
            <br />
            <span>Infrastructure Setup</span>
          </h1>

          <p className="cloud-desc">
            Professional cloud infrastructure setup for
            AWS, Linux VPS, website hosting, server security,
            backup systems, and reliable business operations.
          </p>

          <div className="cloud-buttons">

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="cloud-btn-primary"
            >
              Discuss Infrastructure Setup
            </a>

            <a
              href="/contact"
              className="cloud-btn-secondary"
            >
              Talk to Us
            </a>

          </div>

          <div className="cloud-trust-strip">

            {[
              'AWS Infrastructure',
              'Linux VPS Support',
              'Secure Hosting',
              'Business Reliability',
            ].map((item, index) => (

              <div
                className="cloud-trust-item"
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