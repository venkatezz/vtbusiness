import React from 'react';

import {
  Server,
  Cloud,
  Shield,
  Database,
  Activity,
  HardDrive,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import '../../styles/aws-linux-support.css';

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

const AWSLinuxSupport = () => {
  return (
    <main className="aws-page">

      {/* HERO */}
      <section className="aws-hero">

        <div className="container">

          <div className="aws-badge">
            Business Infrastructure Support
          </div>

          <h1 className="aws-title">
            AWS & Linux
            <br />
            <span>Infrastructure Support</span>
          </h1>

          <p className="aws-desc">
            Reliable AWS cloud setup, Linux server administration,
            VPS deployment, security hardening, and infrastructure
            support for startups and growing businesses.
          </p>

          <div className="aws-buttons">

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="aws-btn-primary"
            >
              Discuss Infrastructure Support
            </a>

            <a
              href="/contact"
              className="aws-btn-secondary"
            >
              Talk to Us
            </a>

          </div>

          <div className="aws-trust-strip">

            {[
              'AWS Cloud Support',
              'Linux Administration',
              'Secure Infrastructure',
              'Reliable Hosting',
            ].map((item, index) => (

              <div
                className="aws-trust-item"
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