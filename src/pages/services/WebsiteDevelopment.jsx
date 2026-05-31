import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceHeroVisual from '../../components/ServiceHeroVisual';

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
import '../../styles/serviceHero.css';

const webDevSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Web Development & Design Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VT Business Support",
    "telephone": "+918925063980"
  },
  "description": "High-performance, custom React/Vite websites, responsive frontend coding, SEO friendliness, web application design, and modern website design."
};

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

// Flat Professional Modern Website / Browser / Digital Experience SVG
const WebsiteDevelopmentIllustration = () => (
  <svg viewBox="0 0 400 300" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Grid */}
    <rect x="20" y="20" width="360" height="260" rx="16" fill="rgba(74, 63, 224, 0.02)" stroke="rgba(74, 63, 224, 0.05)" strokeWidth="2" />
    
    {/* Browser Frame */}
    <rect x="60" y="50" width="280" height="200" rx="10" fill="#0F172A" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
    
    {/* Browser Header Bar */}
    <path d="M60 70 L340 70" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
    <circle cx="75" cy="60" r="4" fill="#EF4444" />
    <circle cx="87" cy="60" r="4" fill="#F59E0B" />
    <circle cx="99" cy="60" r="4" fill="#10B981" />
    
    {/* Browser Content - Layout columns */}
    <rect x="80" y="90" width="110" height="80" rx="6" fill="#1E293B" stroke="rgba(255,255,255,0.04)" />
    <circle cx="110" cy="120" r="16" fill="rgba(74, 63, 224, 0.15)" stroke="#5B4DFF" strokeWidth="2" />
    <line x1="80" y1="184" x2="190" y2="184" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
    
    <rect x="210" y="90" width="110" height="130" rx="6" fill="#1E293B" stroke="rgba(255,255,255,0.04)" />
    <line x1="225" y1="110" x2="295" y2="110" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
    <line x1="225" y1="125" x2="275" y2="125" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    <line x1="225" y1="140" x2="285" y2="140" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    
    {/* Dynamic UI Graph representation */}
    <path d="M225 200 L245 180 L265 190 L285 170 L305 185" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Star Ratings on left column */}
    <path d="M125 152 L127 156 L131 156 L128 159 L129 163 L125 160 L121 163 L122 159 L119 156 L123 156 Z" fill="#F59E0B" />
  </svg>
);

const WebsiteDevelopment = () => {
  return (
    <main className="webdev-page">
      <SEO 
        title="Custom Web Development & Design Services | VT Business Support"
        description="High-performance, custom React/Vite websites, responsive frontend coding, SEO friendliness, web application design, and modern website design."
        schema={webDevSchema}
      />

      {/* HERO */}
      <section className="service-hero">

        <div className="container">

          <div className="service-hero-grid">

            {/* LEFT COLUMN */}
            <div className="service-hero-content">

              <div className="service-badge">
                <ShieldCheck size={14} />
                <span>Modern Business Website Solutions</span>
              </div>

              <h1 className="service-title">
                Professional Website
                <span> Development Services</span>
              </h1>

              <p className="service-desc">
                Modern, responsive, and business-focused websites
                for startups, consultants, GST firms, and growing
                businesses across Tamil Nadu and Bengaluru.
              </p>

              <div className="service-buttons">

                <a
                  href="https://api.whatsapp.com/send?phone=918925063980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-btn-primary"
                >
                  Discuss Your Website
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
                  <span>Responsive Design</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Fast Performance</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Business Focused</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <ServiceHeroVisual
              svgIllustration={WebsiteDevelopmentIllustration}
              trustLabel="SEO Ready"
              trustValue="MOBILE FRIENDLY"
              trustIcon={Rocket}
            />

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