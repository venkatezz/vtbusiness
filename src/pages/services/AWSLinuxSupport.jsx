import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import HeroVisual from '../../components/HeroVisual';
import {
  Server,
  Cloud,
  Shield,
  Database,
  Activity,
  HardDrive,
  ArrowRight,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';
import { AwsLogo, Ec2Logo, S3Logo, CloudWatchLogo, UbuntuLogo } from '../../components/SvgLogos';
import '../../styles/service-hero-system.css';
import '../../styles/aws-linux-support.css';

const awsSupportSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/aws-linux-support#service",
      "name": "AWS & Linux Server Administration Support",
      "alternateName": [
        "AWS Server Support",
        "Linux Server Administration",
        "AWS Cloud Management",
        "VPS Setup & Hosting",
        "AWS EC2 Deployment",
        "Linux Server Hardening"
      ],
      "description": "Enterprise-grade AWS cloud management and Linux server administration services. We handle EC2 setup, VPS deployment, OS hardening, security compliance, backups, and active server monitoring.",
      "url": "https://vtconsulting.in/services/aws-linux-support",
      "serviceType": "Cloud Infrastructure & Linux DevOps",
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
        "name": "AWS & Linux Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AWS EC2 Infrastructure Planning & Deployment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Linux OS Hardening, Patching & Security" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "cPanel / CyberPanel / VPS Deployment & Migration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "RDS Database Clustering & Performance Optimization" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated S3 Backups & Disaster Recovery Setup" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "AWS & Linux Support", "item": "https://vtconsulting.in/services/aws-linux-support" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What cloud platforms do you specialize in?",
          "acceptedAnswer": { "@type": "Answer", "text": "We primarily specialize in Amazon Web Services (AWS) but also manage DigitalOcean, Linode, Hetzner, Contabo, and OVH cloud servers." }
        },
        {
          "@type": "Question",
          "name": "Which Linux server operating systems do you support?",
          "acceptedAnswer": { "@type": "Answer", "text": "We support all major enterprise Linux distributions including Ubuntu Server, Rocky Linux, AlmaLinux, CentOS Stream, Debian, and RedHat Enterprise Linux (RHEL)." }
        },
        {
          "@type": "Question",
          "name": "Do you provide automated backups?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we set up daily and weekly automated cron backups of application files and databases to secure offsite storage like AWS S3 or Backblaze with retention policies." }
        }
      ]
    }
  ]
};

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
      <SEO 
        title="AWS & Linux Server Administration Tamil Nadu & Bengaluru | VT Business Support"
        description="Professional AWS cloud support, EC2 VPS setups, Linux server admin, secure database backups, server hardening, and fast website migration services."
        keywords="AWS support, Linux server administration, EC2 setup, cloud backup, server migration, server hardening, VPS hosting, sysadmin Dharmapuri, AWS consultant Bengaluru, VT Business Support"
        schema={awsSupportSchema}
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
                AWS &amp; Linux
                <br />
                <span className="shs-accent--emerald">Server Support</span>
              </h1>

              <p className="shs-desc">
                Enterprise-grade AWS cloud management, Linux server administration,
                automated backups, firewall hardening, and 24/7 technical operations
                across Tamil Nadu &amp; Bengaluru.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Configure Cloud Server <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ AWS certified support</span>
                <span>✓ Linux sysadmin expertise</span>
                <span>✓ 99.9% Uptime guarantee</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> AWS &amp; LINUX DEVOPS
              </div>
              <HeroVisual
                theme="emerald"
                lightMode={true}
                milestones={["EC2 Active", "Backup Ready", "Server Secure", "Optimized"]}
                cards={[
                  { title: "Cloud Setup", subtitle: "AWS Well-Architected" },
                  { title: "Linux Admin", subtitle: "Secured & Patched" },
                  { title: "Uptime Monitor", subtitle: "Active Alerting" }
                ]}
              />
            </div>

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

      {/* TECH PARTNERS & INFRASTRUCTURE TRUST */}
      <section className="aws-section" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="container">
          <div className="aws-section-head" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(16, 185, 129, 0.08)', color: '#10B981', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>CLOUD DEVOPS</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>Supported Technology Ecosystem</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '12px auto 0' }}>
              We administer servers and build robust cloud pipelines using the industry's leading Linux and AWS platform toolsets.
            </p>
          </div>

          {/* SVG Tech Logos Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '5rem', maxWidth: '900px', margin: '0 auto 5rem' }}>
            {[
              { logo: <AwsLogo size={42} />, name: "Amazon Web Services" },
              { logo: <Ec2Logo size={42} />, name: "AWS EC2" },
              { logo: <S3Logo size={42} />, name: "AWS S3 Storage" },
              { logo: <CloudWatchLogo size={42} />, name: "AWS CloudWatch" },
              { logo: <UbuntuLogo size={42} />, name: "Ubuntu Linux" }
            ].map((tech, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '1.5rem', borderRadius: '16px', background: '#f8fafc', border: '1px solid rgba(15,23,42,0.04)', textAlign: 'center' }}>
                {tech.logo}
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#334155' }}>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Trust Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: <Shield size={24} style={{ color: '#10B981' }} />,
                title: "Server Security",
                desc: "Firewall rule tightening, SSH key-only access, patch upgrades, and OS level security audits."
              },
              {
                icon: <Database size={24} style={{ color: '#10B981' }} />,
                title: "Backup Protection",
                desc: "Automated incremental backup scripts uploading directly to secure AWS S3 buckets."
              },
              {
                icon: <Activity size={24} style={{ color: '#10B981' }} />,
                title: "Active Monitoring",
                desc: "Uptime alerts, resource usage graphs, RAM/CPU thresholds, and Slack/email notifications."
              },
              {
                icon: <Server size={24} style={{ color: '#10B981' }} />,
                title: "Performance Optimization",
                desc: "Nginx tuning, Apache memory config, DB caching setups, and Cloudflare CDN mappings."
              }
            ].map((pillar, idx) => (
              <div key={idx} style={{ padding: '2rem', borderRadius: '20px', background: '#f8fafc', border: '1px solid rgba(15,23,42,0.04)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>{pillar.desc}</p>
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