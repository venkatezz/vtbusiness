import React from 'react';

import {
  MonitorCog,
  Cloud,
  Globe,
  Workflow,
  Mail,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import '../../styles/technical-consulting.css';

const consultingServices = [
  {
    icon: <MonitorCog size={24} />,
    title: 'IT Infrastructure Consulting',
    description:
      'Business IT guidance for systems, networking, infrastructure planning, and operational support.',
  },

  {
    icon: <Cloud size={24} />,
    title: 'Cloud & AWS Consulting',
    description:
      'Cloud infrastructure planning, AWS support, hosting architecture, and server optimization.',
  },

  {
    icon: <Globe size={24} />,
    title: 'Website & Digital Solutions',
    description:
      'Business website planning, deployment guidance, hosting support, and digital modernization.',
  },

  {
    icon: <Workflow size={24} />,
    title: 'Business Process Improvement',
    description:
      'Practical technical solutions to improve workflows, reduce downtime, and streamline operations.',
  },

  {
    icon: <Mail size={24} />,
    title: 'Communication Systems',
    description:
      'Professional email systems, collaboration setup, and business communication support.',
  },

  {
    icon: <Lightbulb size={24} />,
    title: 'Technical Guidance & Support',
    description:
      'Reliable consulting support for business technology decisions, upgrades, and implementation.',
  },
];

const processSteps = [
  'Understand Business Requirements',
  'Recommend Technical Solutions',
  'Implement & Support Operations',
];

const TechnicalConsulting = () => {
  return (
    <main className="tech-page">

      {/* HERO */}
      <section className="tech-hero">

        <div className="container">
          <div className="tech-hero-grid">

            {/* LEFT SIDE */}

            <div className="tech-hero-content">

              <div className="tech-badge">
                Business Technology Consulting
              </div>

              <h1 className="tech-title">
                Technical Consulting
                
                <span>For Modern Businesses</span>
              </h1>

              <p className="tech-desc">
                Practical technical consulting for IT infrastructure,
                websites, cloud systems, communication setup,
                and business technology operations.
              </p>

              <div className="tech-buttons">

                <a
                  href="https://api.whatsapp.com/send?phone=918925063980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-btn-primary"
                >
                  Discuss Technical Requirements
                </a>

                <a
                  href="/contact"
                  className="tech-btn-secondary"
                >
                  Talk to Us
                </a>

              </div>

              <div className="tech-trust-strip">

                {[
                  'Business-focused Solutions',
                  'Cloud & Infrastructure',
                  'Reliable Technical Guidance',
                  'Operational Support',
                ].map((item, index) => (

                  <div
                    className="tech-trust-item"
                    key={index}
                  >
                    <CheckCircle size={16} />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="tech-hero-visual">

              <div className="tech-system-card">

                <div className="tech-node">
                  <Cloud size={18} />
                  AWS Cloud
                </div>

                <div className="tech-node">
                  <Globe size={18} />
                  Website Solutions
                </div>

                <div className="tech-node tech-node-main">
                  <div>
                    VT Business Support
                    <small>Technology Consulting Hub</small>
                  </div>
                </div>

                <div className="tech-node">
                  <Mail size={18} />
                  Business Email
                </div>

                <div className="tech-node">
                  <MonitorCog size={18} />
                  IT Support
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="tech-section">

        <div className="container">

          <div className="tech-section-head">

            <h2>Technical Consulting Areas</h2>

            <p>
              Business-focused consulting solutions
              for infrastructure, systems, operations,
              and digital transformation.
            </p>

          </div>

          <div className="tech-grid">

            {consultingServices.map((item, index) => (

              <div
                className="tech-card"
                key={index}
              >

                <div className="tech-card-icon">
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
      <section className="tech-section tech-light-section">

        <div className="container">

          <div className="tech-section-head">

            <h2>
              Why Businesses Need Technical Consulting
            </h2>

            <p>
              Professional technical guidance helps businesses
              improve operations, reduce downtime,
              and modernize systems efficiently.
            </p>

          </div>

          <div className="tech-why-grid">

            {[
              'Reduced Technical Confusion',
              'Improved Business Operations',
              'Reliable Infrastructure Planning',
              'Better System Scalability',
              'Faster Problem Resolution',
              'Long-term Technical Support',
            ].map((item, index) => (

              <div
                className="tech-why-item"
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
      <section className="tech-section">

        <div className="container">

          <div className="tech-section-head">

            <h2>Our Consulting Approach</h2>

            <p>
              Structured consulting workflow
              focused on practical business outcomes.
            </p>

          </div>

          <div className="tech-process-grid">

            {processSteps.map((step, index) => (

              <div
                className="tech-process-card"
                key={index}
              >

                <div className="tech-process-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="tech-cta-section">

        <div className="container">

          <div className="tech-cta-box">

            <h2>
              Need Technical Guidance For Your Business?
            </h2>

            <p>
              Talk with VT Business Support for
              cloud infrastructure, websites,
              IT systems, business communication,
              and operational technology consulting.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn-primary"
            >
              Get Technical Consulting
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default TechnicalConsulting;