import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import HeroVisual from '../../components/HeroVisual';
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
import { ReactLogo, ViteLogo, FirebaseLogo, CloudflareLogo } from '../../components/SvgLogos';
import LighthouseScore from '../../components/LighthouseScore';
import '../../styles/service-hero-system.css';
import '../../styles/website-development.css';

const webDevSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/website-development#service",
      "name": "Custom Web Development & Design Services",
      "alternateName": [
        "Web Design Services",
        "Custom Web Development",
        "React Website Development",
        "Landing Page Design",
        "Business Website Design",
        "Responsive Web Coding"
      ],
      "description": "Professional web design and development. We build high-performance React/Vite websites, responsive frontend interfaces, lead generation landing pages, and optimized local SEO sites across Tamil Nadu and Bengaluru.",
      "url": "https://vtconsulting.in/services/website-development",
      "serviceType": "Web Development & Digital Consultation",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://vtconsulting.in#business",
        "name": "VT Business Support",
        "telephone": "+918925063980",
        "email": "vtconsulting.in@gmail.com",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
          { "@type": "AdministrativeArea", "name": "Karnataka" }
        ]
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
        { "@type": "AdministrativeArea", "name": "Karnataka" },
        { "@type": "Country", "name": "India" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Startup & Corporate Portfolio Websites" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Conversion Lead Generation Landing Pages" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom React / Vite Single Page Applications" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile-Responsive Frontend Coding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO Optimization & Audits" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "Website Development", "item": "https://vtconsulting.in/services/website-development" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you use React for web development?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we build modern websites using React and Vite, securing extremely fast page loads and smooth client-side routing." }
        },
        {
          "@type": "Question",
          "name": "Are your web layouts optimized for mobile devices?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, all our websites are fully responsive and adapt perfectly to all screen sizes including smartphones, tablets, laptops, and wide screens." }
        },
        {
          "@type": "Question",
          "name": "Do you handle website deployment and hosting?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle complete domain setup, custom DNS records, Cloudflare caching configurations, and deploy websites to reliable hosting spaces." }
        }
      ]
    }
  ]
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

const WebsiteDevelopment = () => {
  return (
    <main className="webdev-page">
      <SEO 
        title="Custom Website Development Tamil Nadu & Bengaluru | VT Business Support"
        description="High-performance custom React websites, mobile responsive interfaces, optimized landing pages, business landing pages, and technical SEO configurations."
        keywords="website development, web design company, React development, custom website, responsive layout, SEO optimized web, business portfolio website, web designer Dharmapuri, web developer Bengaluru, VT Business Support"
        schema={webDevSchema}
        type="website"
      />

      {/* HERO */}
      <section className="shs-hero service-hero-section">
        <div className="container">
          <div className="shs-hero-grid">

            {/* LEFT */}
            <div className="shs-hero-left">
              <div className="shs-blur" />

              <h1 className="shs-title">
                Website Development
                <br />
                <span className="shs-accent--cyan">&amp; Modern Design</span>
              </h1>

              <p className="shs-desc">
                High-performance, mobile-responsive React websites, landing pages,
                and business portals designed to convert visitors and rank well on Google.
                Serving startups and professionals across Tamil Nadu &amp; Bengaluru.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start Your Website Project <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ High-speed React &amp; Vite</span>
                <span>✓ Mobile Responsive Design</span>
                <span>✓ Built-in Technical SEO</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> CUSTOM WEB DEVELOPMENT
              </div>
              <HeroVisual
                theme="cyan"
                lightMode={true}
                milestones={["UI Complete", "SEO Ready", "Mobile Optimized", "Live"]}
                cards={[
                  { title: "React Site", subtitle: "Core Web Vitals Checked" },
                  { title: "UX Layout", subtitle: "100% Mobile Responsive" },
                  { title: "SEO Tagging", subtitle: "Google Index Ready" }
                ]}
              />
            </div>

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

      {/* DEVELOPMENT STACK */}
      <section className="webdev-section" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>

        <div className="container">

          <div className="webdev-section-head" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(6, 182, 212, 0.08)', color: '#06B6D4', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>TECH STACK</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>Development Stack & Core Web Vitals</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '12px auto 0' }}>
              We build using modern frontend technologies designed for maximum speed, security, and top-tier Google Lighthouse performance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            {[
              { logo: <ReactLogo size={42} />, name: "React" },
              { logo: <ViteLogo size={42} />, name: "Vite" },
              { logo: <FirebaseLogo size={42} />, name: "Firebase" },
              { logo: <CloudflareLogo size={42} />, name: "Cloudflare" }
            ].map((tech, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '1.5rem', borderRadius: '16px', background: '#f8fafc', border: '1px solid rgba(15,23,42,0.04)', boxShadow: '0 4px 12px rgba(8,16,40,0.015)' }}>
                {tech.logo}
                <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#334155' }}>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* LIGHTHOUSE CARD */}
          <LighthouseScore />

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