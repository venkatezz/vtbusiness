import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceHeroVisual from '../../components/ServiceHeroVisual';

import {
  MonitorCog,
  Cloud,
  Globe,
  Workflow,
  Mail,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

import '../../styles/technical-consulting.css';
import '../../styles/serviceHero.css';

const techConsultingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Technical Consulting & IT Strategy Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VT Business Support",
    "telephone": "+918925063980"
  },
  "description": "Expert technical consulting, system architecture design, IT infrastructure strategy, and cloud cost optimization for startups and businesses."
};

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

// Flat Professional Technology & Strategy SVG
const TechnicalConsultingIllustration = () => (
  <svg viewBox="0 0 400 300" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Tech Circle Grid */}
    <circle cx="200" cy="150" r="110" stroke="rgba(74, 63, 224, 0.04)" strokeWidth="6" />
    <circle cx="200" cy="150" r="85" stroke="rgba(74, 63, 224, 0.08)" strokeWidth="2" strokeDasharray="6 6" />
    
    {/* Tech Gear Backdrop */}
    <g stroke="rgba(74, 63, 224, 0.15)" strokeWidth="2" strokeLinecap="round">
      <circle cx="200" cy="150" r="45" fill="#1E293B" stroke="#4A3FE0" strokeWidth="2" />
      <line x1="200" y1="95" x2="200" y2="105" strokeWidth="4" />
      <line x1="200" y1="195" x2="200" y2="205" strokeWidth="4" />
      <line x1="145" y1="150" x2="155" y2="150" strokeWidth="4" />
      <line x1="245" y1="150" x2="255" y2="150" strokeWidth="4" />
      <line x1="161" y1="111" x2="168" y2="118" strokeWidth="4" />
      <line x1="239" y1="189" x2="232" y2="182" strokeWidth="4" />
      <line x1="239" y1="111" x2="232" y2="118" strokeWidth="4" />
      <line x1="161" y1="189" x2="168" y2="182" strokeWidth="4" />
    </g>

    {/* Central Strategy Lightbulb representing Guidance */}
    <g filter="drop-shadow(0 8px 16px rgba(74, 63, 224, 0.15))">
      {/* Bulb Glass */}
      <path d="M200 115 C182 115 170 127 170 145 C170 157 177 167 183 173 L183 185 C183 187 185 189 187 189 L213 189 C215 189 217 187 217 185 L217 173 C223 167 230 157 230 145 C230 127 218 115 200 115 Z" fill="#0F172A" stroke="#5B4DFF" strokeWidth="3" />
      
      {/* Bulb Metal Base */}
      <rect x="188" y="189" width="24" height="6" rx="2" fill="#475569" />
      <rect x="191" y="195" width="18" height="4" rx="2" fill="#334155" />
      <path d="M194 199 L206 199 C204 202 196 202 194 199 Z" fill="#64748B" />
      
      {/* Glowing Filament */}
      <path d="M192 150 L197 135 L203 135 L208 150" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="200" cy="132" r="2" fill="#10B981" />
    </g>

    {/* Growth Trend Line graph overlaid */}
    <path d="M90 220 L150 170 L210 190 L270 120 L310 140 L350 90" stroke="url(#gradient-growth)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 6px 12px rgba(16, 185, 129, 0.2))" />
    
    {/* Dynamic Dots on the Growth Line */}
    <circle cx="270" cy="120" r="6" fill="#10B981" />
    <circle cx="350" cy="90" r="8" fill="#10B981" stroke="#ffffff" strokeWidth="2" />

    {/* SVG Gradient Definition */}
    <defs>
      <linearGradient id="gradient-growth" x1="90" y1="220" x2="350" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4A3FE0" />
        <stop offset="60%" stopColor="#5B4DFF" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
  </svg>
);

const TechnicalConsulting = () => {
  return (
    <main className="tech-page">
      <SEO 
        title="Technical Consulting & IT Strategy Services | VT Business Support"
        description="Expert technical consulting, system architecture design, IT infrastructure strategy, and cloud cost optimization for startups and businesses."
        schema={techConsultingSchema}
      />

      {/* HERO */}
      <section className="service-hero">

        <div className="container">

          <div className="service-hero-grid">

            {/* LEFT COLUMN */}
            <div className="service-hero-content">

              <div className="service-badge">
                <ShieldCheck size={14} />
                <span>Business Technology Consulting</span>
              </div>

              <h1 className="service-title">
                Technical Consulting
                <span> For Modern Businesses</span>
              </h1>

              <p className="service-desc">
                Practical technical consulting for IT infrastructure,
                websites, cloud systems, communication setup,
                and business technology operations.
              </p>

              <div className="service-buttons">

                <a
                  href="https://api.whatsapp.com/send?phone=918925063980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-btn-primary"
                >
                  Discuss Technical Requirements
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
                  <span>Business Focused</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Cloud & Infrastructure</span>
                </div>
                <div className="service-trust-item">
                  <CheckCircle size={16} />
                  <span>Technical Guidance</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <ServiceHeroVisual
              svgIllustration={TechnicalConsultingIllustration}
              trustLabel="Dedicated Advisor"
              trustValue="COST OPTIMIZED"
              trustIcon={UserCheck}
            />

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