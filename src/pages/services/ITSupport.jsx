import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import HeroVisual from '../../components/HeroVisual';
import {
  Server,
  Cloud,
  Shield,
  Globe,
  Mail,
  Network,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { WindowsLogo, LinuxLogo, Microsoft365Logo, ServerManagementLogo } from '../../components/SvgLogos';
import '../../styles/service-hero-system.css';
import '../../styles/it-support.css';

const itSupportSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/it-support#service",
      "name": "IT Support & Office Infrastructure Services",
      "alternateName": [
        "Technical Support Services",
        "Office IT Support",
        "Managed IT Services",
        "Network Setup & Maintenance",
        "Linux Server Support",
        "AWS Cloud Management"
      ],
      "description": "Expert technical support and IT infrastructure services. We offer managed Linux support, AWS cloud administration, business email setup, networking, and security backups across Tamil Nadu and Bengaluru.",
      "url": "https://vtconsulting.in/services/it-support",
      "serviceType": "Managed IT & Infrastructure Support",
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
        "name": "IT Support Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Linux Server Administration & Troubleshooting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AWS EC2, RDS, VPC Cloud Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Email Setup (Google Workspace / M365)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Router, Firewall & Office IT Networking" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated Backups & Data Protection Plans" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "IT Infrastructure & Technical Support", "item": "https://vtconsulting.in/services/it-support" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What technical systems do you support?",
          "acceptedAnswer": { "@type": "Answer", "text": "We support Linux servers (Ubuntu, CentOS, Rocky Linux), AWS cloud setups, GSuite/Office365 corporate emails, routers, firewalls, and local office networks." }
        },
        {
          "@type": "Question",
          "name": "Do you provide on-site or remote support?",
          "acceptedAnswer": { "@type": "Answer", "text": "We offer remote support for cloud servers and email setups nationwide. For office networking and hardware infrastructure, we provide on-site support in Tamil Nadu (Dharmapuri & nearby districts) and Electronic City (Bengaluru)." }
        },
        {
          "@type": "Question",
          "name": "Can you migrate our email to Google Workspace?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle complete email migrations from legacy cPanel or GoDaddy mail servers to Google Workspace or Microsoft 365, preserving all historical emails and contacts." }
        }
      ]
    }
  ]
};

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
      <SEO 
        title="IT Support & Office Infrastructure Tamil Nadu & Bengaluru | VT Business Support"
        description="Managed IT services, Linux server admin, AWS cloud setup, Google Workspace emails, router/networking setups, and automated backup strategies."
        keywords="IT support, technical support, Linux server administration, AWS setup, GSuite setup, office network installation, data backup, tech support Bengaluru, IT outsourcing Dharmapuri, VT Business Support"
        schema={itSupportSchema}
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
                IT Support &amp;
                <br />
                <span className="shs-accent--emerald">Tech Infrastructure</span>
              </h1>

              <p className="shs-desc">
                Reliable business IT support for Linux servers, AWS environments,
                corporate emails, networking, and office infrastructure support
                across Tamil Nadu &amp; Bengaluru.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Technical Support <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ Linux &amp; Cloud Support</span>
                <span>✓ Office Network Setup</span>
                <span>✓ 24/7 Server Monitoring</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> IT SUPPORT &amp; INFRASTRUCTURE
              </div>
              <HeroVisual
                theme="emerald"
                lightMode={true}
                milestones={["Systems Active", "Monitoring Online", "Backups Verified", "Protected"]}
                cards={[
                  { title: "Linux Servers", subtitle: "99.9% Uptime Active" },
                  { title: "AWS Infrastructure", subtitle: "Cost Optimized" },
                  { title: "Office Support", subtitle: "Zero Network Failures" }
                ]}
              />
            </div>

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

      {/* PLATFORM INFRASTRUCTURE SUPPORT */}
      <section className="it-section" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="container">
          <div className="it-section-head" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(16, 185, 129, 0.08)', color: '#10B981', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>IT PLATFORMS</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>Supported Operating Systems & Platforms</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '12px auto 0' }}>
              We provide comprehensive administrative support, client sync configuration, and troubleshooting across key business platforms.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              {
                logo: <WindowsLogo size={40} />,
                title: "Windows OS",
                desc: "Workstation maintenance, Active Directory configuration, security patching, and remote desktop troubleshooting."
              },
              {
                logo: <LinuxLogo size={40} />,
                title: "Linux Systems",
                desc: "Server administration (Ubuntu, Debian, CentOS), terminal configurations, custom shell scripts, and web server deployments."
              },
              {
                logo: <Microsoft365Logo size={40} />,
                title: "Microsoft 365",
                desc: "Enterprise Outlook sync, Teams configuration, OneDrive permissions, and corporate user administration."
              },
              {
                logo: <ServerManagementLogo size={40} />,
                title: "Server Management",
                desc: "Active system audits, rack configurations, local router firewalls, and network print server setups."
              }
            ].map((platform, idx) => (
              <div key={idx} style={{ padding: '2rem', borderRadius: '20px', background: '#f8fafc', border: '1px solid rgba(15,23,42,0.04)', display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: '#ffffff', border: '1px solid rgba(15,23,42,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {platform.logo}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{platform.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>{platform.desc}</p>
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