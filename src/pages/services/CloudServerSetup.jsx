import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import HeroVisual from '../../components/HeroVisual';
import {
  Cloud,
  Server,
  Shield,
  Globe,
  Database,
  Activity,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Lock
} from 'lucide-react';
import { CloudflareLogo, AwsLogo, DigitalOceanLogo, AzureLogo } from '../../components/SvgLogos';
import '../../styles/service-hero-system.css';
import '../../styles/cloud-server-setup.css';

const cloudSetupSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/cloud-server-setup#service",
      "name": "Cloud Server Setup & Hosting Configuration Services",
      "alternateName": [
        "Cloud Server Setup",
        "VPS Setup & Configuration",
        "Cloud Web Hosting Setup",
        "VPS Server Hardening",
        "Website Migration Services",
        "SSL & Domain Mapping"
      ],
      "description": "Expert Cloud and VPS server setup services. We configure DigitalOcean, Linode, Contabo, cPanel, CyberPanel, SSL, DNS mapping, and automated back up structures across Tamil Nadu and Bengaluru.",
      "url": "https://vtconsulting.in/services/cloud-server-setup",
      "serviceType": "Cloud Hosting & Systems Administration",
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
        "name": "Cloud Setup Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DigitalOcean & Linode Droplet Deployment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "cPanel, CyberPanel & Webmin Setup" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Let's Encrypt SSL & Domain DNS Mapping" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incremental Cloud Server Backups" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WordPress VPS Migration & Server Hardening" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "Cloud Server Setup", "item": "https://vtconsulting.in/services/cloud-server-setup" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which VPS providers do you support?",
          "acceptedAnswer": { "@type": "Answer", "text": "We configure and manage servers on DigitalOcean, Linode/Akamai, Vultr, Contabo, Hetzner, AWS Lightsail, and Google Cloud." }
        },
        {
          "@type": "Question",
          "name": "What control panels do you install?",
          "acceptedAnswer": { "@type": "Answer", "text": "We deploy and support web control panels like CyberPanel (with OpenLiteSpeed), cPanel/WHM, HestiaCP, aaPanel, and CloudPanel for optimized resource usage." }
        },
        {
          "@type": "Question",
          "name": "Do you handle domain configuration?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle complete DNS setups, including custom nameservers, Cloudflare integration, SPF/DKIM/DMARC email records, and SSL mappings." }
        }
      ]
    }
  ]
};

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
      <SEO 
        title="Cloud Server Setup & Hosting Tamil Nadu & Bengaluru | VT Business Support"
        description="Professional Cloud VPS setups, control panel installs (CyberPanel, cPanel), SSL certificates, custom DNS configs, and offsite backups."
        keywords="cloud server setup, VPS hosting configuration, DigitalOcean droplet setup, CyberPanel installation, free SSL install, domain mapping, server backup, Cloudflare setup Dharmapuri, VPS consultant Bengaluru, VT Business Support"
        schema={cloudSetupSchema}
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
                Cloud Server Setup
                <br />
                <span className="shs-accent--emerald">&amp; Hosting Config</span>
              </h1>

              <p className="shs-desc">
                Reliable cloud infrastructure setups, Linux VPS deployments,
                control panel configurations, SSL certificates, domain mappings,
                and scheduled backups for your business applications.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Setup My Server <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ VPS &amp; Dedicated Hosting</span>
                <span>✓ SSL &amp; Domain Configurations</span>
                <span>✓ Automated Storage Backups</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> VPS &amp; CLOUD CONFIGURATION
              </div>
              <HeroVisual
                theme="emerald"
                lightMode={true}
                milestones={["Server Deployed", "SSL Active", "Backup Running", "Cloud Ready"]}
                cards={[
                  { title: "VPS Setup", subtitle: "OS Installed & Hardened" },
                  { title: "Control Panel", subtitle: "Active & Secure" },
                  { title: "SSL / DNS", subtitle: "Verified & Protected" }
                ]}
              />
            </div>

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

      {/* SUPPORTED PLATFORMS */}
      <section className="cloud-section" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="container">
          <div className="cloud-section-head" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(16, 185, 129, 0.08)', color: '#10B981', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>CLOUD PLATFORMS</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>Supported Server Environments</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '12px auto 0' }}>
              We deploy, migrate, and optimize hosting infrastructure across major global cloud providers and CDNs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '2rem', justifyContent: 'center', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { logo: <CloudflareLogo size={42} />, name: "Cloudflare" },
              { logo: <AwsLogo size={42} />, name: "AWS Cloud" },
              { logo: <DigitalOceanLogo size={42} />, name: "DigitalOcean" },
              { logo: <AzureLogo size={42} />, name: "Microsoft Azure" }
            ].map((tech, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '1.5rem', borderRadius: '16px', background: '#f8fafc', border: '1px solid rgba(15,23,42,0.04)', textAlign: 'center' }}>
                {tech.logo}
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#334155' }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOUD ARCHITECTURE BLUEPRINT */}
      <section className="cloud-section" style={{ backgroundColor: '#f8fafc', padding: '80px 0' }}>
        <div className="container">
          <div className="cloud-section-head" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(74, 63, 224, 0.08)', color: '#4A3FE0', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>ARCHITECTURE</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>Cloud Infrastructure Blueprint</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '12px auto 0' }}>
              A standard, robust, secure system layout we implement to protect your operations and scale traffic seamlessly.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center', alignItems: 'stretch' }}>
            <style>{`
              @media (max-width: 960px) {
                .blueprint-arrow {
                  display: none !important;
                }
              }
            `}</style>
            {[
              { node: "User Request", detail: "Clients request your web services via browser or API." },
              { node: "Cloudflare CDN", detail: "Global proxy cache, free SSL, DDoS firewall protection, and DNS speed." },
              { node: "VPS Instance", detail: "High-performance app server container (Ubuntu/Rocky Linux)." },
              { node: "Database Node", detail: "Optimized relational storage with security access locks." },
              { node: "Secure S3 Backup", detail: "Offsite scheduled database/files incremental backups." }
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ flex: '1', minWidth: '220px', padding: '1.8rem', borderRadius: '16px', background: '#ffffff', border: '1px solid rgba(15,23,42,0.05)', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 12px rgba(8,16,40,0.01)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#10B981', margin: 0 }}>{step.node}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: '1.5', margin: 0 }}>{step.detail}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="blueprint-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#cbd5e1', fontWeight: '700' }}>→</div>
                )}
              </React.Fragment>
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