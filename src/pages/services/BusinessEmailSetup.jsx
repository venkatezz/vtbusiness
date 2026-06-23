import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import HeroVisual from '../../components/HeroVisual';
import {
  Mail,
  Shield,
  Globe,
  Server,
  Smartphone,
  Settings,
  ArrowRight,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';
import '../../styles/service-hero-system.css';
import '../../styles/business-email-setup.css';

const emailSetupSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/business-email-setup#service",
      "name": "Business Email Setup & Google Workspace Services",
      "alternateName": [
        "Google Workspace Setup",
        "Microsoft 365 Business Email",
        "Professional Email Domain Setup",
        "DKIM/SPF DNS Configuration",
        "Corporate Mailbox Migration"
      ],
      "description": "Expert custom business email setup and migrations. We configure Google Workspace, Microsoft 365, SPF, DKIM, DMARC DNS records, and email clients across Tamil Nadu and Bengaluru.",
      "url": "https://vtconsulting.in/services/business-email-setup",
      "serviceType": "Business Mail & Collaboration Suite Setup",
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
        "name": "Business Email Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Workspace Custom Domain Setup" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft 365 Exchange Configuration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SPF, DKIM, DMARC Spam Prevention Setup" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legacy IMAP / POP3 Email Data Migrations" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outlook, iPhone, Android Client Sync Support" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "Business Email Setup", "item": "https://vtconsulting.in/services/business-email-setup" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you configure professional email on our existing domain?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we connect Google Workspace, Microsoft 365, or specialized hosts (Zoho Mail, PrivateEmail) directly to your existing domain." }
        },
        {
          "@type": "Question",
          "name": "How do you protect emails from spam and spoofing?",
          "acceptedAnswer": { "@type": "Answer", "text": "We configure SPF records, DKIM public keys, and DMARC policy tags on your domain's DNS panel, ensuring high inbox delivery rates." }
        },
        {
          "@type": "Question",
          "name": "Can you migrate email history to Google Workspace?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we migrate emails from legacy servers (cPanel, GoDaddy Workspace Email) directly to Google Workspace or M365 without missing old data." }
        }
      ]
    }
  ]
};

const emailServices = [
  {
    icon: <Mail size={24} />,
    title: 'Google Workspace Setup',
    description:
      'Professional Gmail-based business email setup with domain integration and user configuration.',
  },

  {
    icon: <Server size={24} />,
    title: 'Microsoft 365 Setup',
    description:
      'Business Outlook email configuration for secure communication and organizational workflows.',
  },

  {
    icon: <Globe size={24} />,
    title: 'Domain Email Configuration',
    description:
      'Professional domain email setup with DNS records, MX configuration, and secure routing.',
  },

  {
    icon: <Settings size={24} />,
    title: 'DNS & Email Routing',
    description:
      'SPF, DKIM, DMARC, and DNS configuration for reliable and secure email delivery.',
  },

  {
    icon: <Smartphone size={24} />,
    title: 'Mobile & Outlook Setup',
    description:
      'Email configuration for Android, iPhone, Outlook, and multi-device business access.',
  },

  {
    icon: <Shield size={24} />,
    title: 'Email Security & Backup',
    description:
      'Business email protection, recovery setup, spam filtering, and account security configuration.',
  },
];

const processSteps = [
  'Connect Domain & Email Provider',
  'Configure Business Accounts',
  'Setup Devices & Security',
];

const BusinessEmailSetup = () => {
  return (
    <main className="email-page">
      <SEO 
        title="Business Email Setup & Google Workspace Tamil Nadu & Bengaluru | VT Business Support"
        description="Professional custom domain email setup, Google Workspace, Microsoft 365, DNS records configuration (SPF, DKIM, DMARC), and secure mailbox migrations."
        keywords="business email setup, Google Workspace email, Microsoft 365 Business, professional email address, custom domain email, SPF DKIM DMARC configuration, MX records, corporate email setup Dharmapuri, business email Bengaluru, VT Business Support"
        schema={emailSetupSchema}
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
                Business Email Setup
                <br />
                <span className="shs-accent--emerald" style={{ color: '#10B981' }}>Workspace &amp; M365</span>
              </h1>

              <p className="shs-desc">
                Configure professional custom domain email accounts using Google Workspace,
                Microsoft 365, or Zoho Mail. Secure your communications with SPF, DKIM, and DMARC setups.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Setup Business Email <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ Custom Domain Emails</span>
                <span>✓ SPF / DKIM / DMARC Ready</span>
                <span>✓ Inbox Delivery Optimized</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> CUSTOM EMAIL SUITE
              </div>
              <HeroVisual
                theme="emerald"
                lightMode={true}
                milestones={["Domain Linked", "MX Configured", "SPF / DKIM Authenticated", "Mailbox Sync"]}
                cards={[
                  { title: "GWorkspace / M365", subtitle: "Custom Domain Email" },
                  { title: "Spam Protection", subtitle: "SPF / DKIM / DMARC Active" },
                  { title: "Client Sync", subtitle: "Outlook & Mobile Configured" }
                ]}
              />
            </div>

          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="email-section">

        <div className="container">

          <div className="email-section-head">

            <h2>Email Setup Services</h2>

            <p>
              Professional business email configuration
              for reliable communication and secure operations.
            </p>

          </div>

          <div className="email-grid">

            {emailServices.map((item, index) => (

              <div
                className="email-card"
                key={index}
              >

                <div className="email-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY EMAIL */}
      <section className="email-section email-light-section">

        <div className="container">

          <div className="email-section-head">

            <h2>Why Professional Business Email Matters</h2>

            <p>
              Improve trust, communication reliability,
              branding, and operational professionalism.
            </p>

          </div>

          <div className="email-why-grid">

            {[
              'Professional Business Identity',
              'Trusted Customer Communication',
              'Secure Email Infrastructure',
              'Reliable Team Collaboration',
              'Better Brand Credibility',
              'Multi-device Business Access',
            ].map((item, index) => (

              <div
                className="email-why-item"
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
      <section className="email-section">

        <div className="container">

          <div className="email-section-head">

            <h2>Our Email Setup Process</h2>

            <p>
              Simple and secure setup workflow for
              business communication systems.
            </p>

          </div>

          <div className="email-process-grid">

            {processSteps.map((step, index) => (

              <div
                className="email-process-card"
                key={index}
              >

                <div className="email-process-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="email-cta-section">

        <div className="container">

          <div className="email-cta-box">

            <h2>
              Need Professional Business Email Setup?
            </h2>

            <p>
              Talk with VT Business Support for
              Google Workspace, Microsoft 365,
              domain email configuration, and secure
              business communication setup.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=918925063980"
              target="_blank"
              rel="noopener noreferrer"
              className="email-btn-primary"
            >
              Get Email Setup Support
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default BusinessEmailSetup;