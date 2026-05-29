import React from 'react';

import {
  Globe,
  LayoutDashboard,
  Search,
  Rocket,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

import '../../styles/website-development.css';

const websiteServices = [
  {
    icon: <Globe size={24} />,
    title: 'Business Websites',
    description:
      'Professional company websites for startups, consultants, local businesses, and growing brands.',
  },

  {
    icon: <LayoutDashboard size={24} />,
    title: 'Landing Pages',
    description:
      'High-conversion landing pages for services, campaigns, lead generation, and marketing.',
  },

  {
    icon: <ShieldCheck size={24} />,
    title: 'GST & CA Websites',
    description:
      'Professional websites tailored for CA firms, GST services, accounting, and consultancy businesses.',
  },

  {
    icon: <Rocket size={24} />,
    title: 'Hosting & Deployment',
    description:
      'Domain connection, VPS setup, hosting deployment, SSL configuration, and maintenance.',
  },

  {
    icon: <Search size={24} />,
    title: 'SEO Optimization',
    description:
      'Basic technical SEO setup for visibility, indexing, performance, and business reach.',
  },

  {
    icon: <Smartphone size={24} />,
    title: 'Responsive UI',
    description:
      'Mobile-friendly layouts optimized for smartphones, tablets, and desktop experiences.',
  },
];

const processSteps = [
  'Understand Your Business',
  'Design & Build Website',
  'Launch & Support',
];

const techStack = [
  'React',
  'Vite',
  'Responsive UI',
  'SEO Setup',
  'Hosting',
  'Cloudflare',
];

const WebsiteDevelopment = () => {
  return (
    <main className="webdev-page">

      {/* HERO */}
      <section className="webdev-hero">

        <div className="container">

          <div className="webdev-badge">
            Modern Business Website Solutions
          </div>

          <h1 className="webdev-title">
            Professional Website
            <span> Development Services</span>
          </h1>

          <p className="webdev-desc">
            Modern, responsive, and business-focused websites
            for startups, consultants, GST firms, and growing
            businesses across Tamil Nadu and Bengaluru.
          </p>

          <div className="webdev-buttons">

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="webdev-btn-primary"
            >
              Discuss Your Website
            </a>

            <a
              href="/contact"
              className="webdev-btn-secondary"
            >
              Talk to Us
            </a>

          </div>

          <div className="webdev-trust-strip">

            {[
              'Responsive Design',
              'SEO Friendly',
              'Fast Performance',
              'Business Focused',
            ].map((item, index) => (

              <div
                className="webdev-trust-item"
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
      <section className="webdev-section">

        <div className="container">

          <div className="webdev-section-head">

            <h2>Website Solutions We Build</h2>

            <p>
              Professional website solutions focused on trust,
              business growth, lead generation, and clean user experience.
            </p>

          </div>

          <div className="webdev-grid">

            {websiteServices.map((item, index) => (

              <div
                className="webdev-card"
                key={index}
              >

                <div className="webdev-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY VT */}
      <section className="webdev-section webdev-light-section">

        <div className="container">

          <div className="webdev-section-head">

            <h2>Why Businesses Choose VT Websites</h2>

            <p>
              Focused on modern UI, practical business requirements,
              speed, and long-term maintainability.
            </p>

          </div>

          <div className="webdev-why-grid">

            {[
              'Clean Professional UI',
              'Mobile Responsive Layouts',
              'Fast Website Performance',
              'SEO-ready Structure',
              'Modern Frontend Stack',
              'Business-focused Design',
            ].map((item, index) => (

              <div
                className="webdev-why-item"
                key={index}
              >

                <CheckCircle size={18} />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TECHNOLOGIES */}
      <section className="webdev-section">

        <div className="container">

          <div className="webdev-section-head">

            <h2>Technology & Tools</h2>

            <p>
              Modern frontend technologies and deployment tools
              for reliable business websites.
            </p>

          </div>

          <div className="webdev-tech-grid">

            {techStack.map((tech, index) => (

              <div
                className="webdev-tech-item"
                key={index}
              >
                {tech}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="webdev-section webdev-light-section">

        <div className="container">

          <div className="webdev-section-head">

            <h2>Our Website Process</h2>

            <p>
              Simple workflow focused on business clarity and smooth delivery.
            </p>

          </div>

          <div className="webdev-process-grid">

            {processSteps.map((step, index) => (

              <div
                className="webdev-process-card"
                key={index}
              >

                <div className="webdev-process-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="webdev-cta-section">

        <div className="container">

          <div className="webdev-cta-box">

            <h2>
              Need a Professional Business Website?
            </h2>

            <p>
              Talk with VT Business Support for modern websites,
              hosting setup, responsive UI, and business-focused design.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="webdev-btn-primary"
            >
              Start Your Website Project
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default WebsiteDevelopment;