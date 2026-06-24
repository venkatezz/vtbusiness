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
import { GoogleWorkspaceLogo, Microsoft365Logo, ZohoMailLogo } from '../../components/SvgLogos';
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
                <span className="shs-accent--cyan">Workspace &amp; M365</span>
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
                theme="cyan"
                lightMode={true}
                milestones={["Domain Connected", "MX Active", "SPF Verified", "DKIM Active"]}
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

      {/* BRANDED PLATFORMS & COMPARISON */}
      <section className="email-section" style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
        <div className="container">
          <div className="email-section-head" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(6, 182, 212, 0.08)', color: '#06B6D4', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>EMAIL SUITES</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>Supported Enterprise Platforms</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '12px auto 0' }}>
              We set up and migrate professional mailboxes on the industry's most reliable and secure enterprise email systems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {[
              {
                logo: <GoogleWorkspaceLogo size={44} />,
                title: "Google Workspace",
                desc: "Enterprise Gmail, Drive, Docs, and Meet. Best-in-class collaboration tool for modern teams.",
                badge: "Popular Choice",
                badgeBg: "rgba(66, 133, 244, 0.08)",
                badgeColor: "#4285F4"
              },
              {
                logo: <Microsoft365Logo size={44} />,
                title: "Microsoft 365",
                desc: "Business Outlook, Teams, OneDrive, and Office apps. The standard choice for corporate operations.",
                badge: "Enterprise Standard",
                badgeBg: "rgba(235, 60, 0, 0.08)",
                badgeColor: "#EB3C00"
              },
              {
                logo: <ZohoMailLogo size={44} />,
                title: "Zoho Mail",
                desc: "Secure, ad-free business email with privacy protection. Highly cost-effective for growing startups.",
                badge: "Budget Friendly",
                badgeBg: "rgba(34, 177, 76, 0.08)",
                badgeColor: "#22B14C"
              }
            ].map((platform, idx) => (
              <div key={idx} style={{ padding: '2rem', borderRadius: '20px', background: '#f8fafc', border: '1px solid rgba(15,23,42,0.05)', display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.72rem', fontWeight: '700', padding: '4px 10px', borderRadius: '12px', background: platform.badgeBg, color: platform.badgeColor }}>
                  {platform.badge}
                </div>
                <div>{platform.logo}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{platform.title}</h3>
                <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>{platform.desc}</p>
              </div>
            ))}
          </div>

          {/* COMPARISON GRID */}
          <div style={{ background: '#ffffff', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '24px', padding: '2.5rem 2rem', overflowX: 'auto', boxShadow: '0 12px 30px rgba(8,16,40,0.02)' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A', marginBottom: '1.5rem', textAlign: 'center' }}>Platform Comparison</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                  <th style={{ padding: '12px 8px', color: '#64748B', fontWeight: '700' }}>Feature</th>
                  <th style={{ padding: '12px 8px', color: '#06B6D4', fontWeight: '700' }}>Google Workspace</th>
                  <th style={{ padding: '12px 8px', color: '#EB3C00', fontWeight: '700' }}>Microsoft 365</th>
                  <th style={{ padding: '12px 8px', color: '#22B14C', fontWeight: '700' }}>Zoho Mail</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Mail Interface", gw: "Gmail (Web/Mobile)", m365: "Outlook App & Web", zoho: "Zoho Web & App" },
                  { feature: "Storage per User", gw: "30 GB - 5 TB+", m365: "50 GB - 1 TB+", zoho: "5 GB - 50 GB" },
                  { feature: "Custom Domains", gw: "Yes (Unlimited)", m365: "Yes (Unlimited)", zoho: "Yes" },
                  { feature: "Collaboration Tools", gw: "Drive, Meet, Docs, Chat", m365: "Teams, OneDrive, Office", zoho: "Zoho Office Suite" },
                  { feature: "Security & Spam", gw: "Google AI Spam Filters", m365: "Microsoft Defender Security", zoho: "Secure Privacy Filters" },
                  { feature: "Pricing Tier", gw: "Premium", m365: "Premium", zoho: "Highly Affordable" }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 8px', fontWeight: '600', color: '#0F172A' }}>{row.feature}</td>
                    <td style={{ padding: '14px 8px', color: '#475569' }}>{row.gw}</td>
                    <td style={{ padding: '14px 8px', color: '#475569' }}>{row.m365}</td>
                    <td style={{ padding: '14px 8px', color: '#475569' }}>{row.zoho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DNS SECURITY WORKFLOW DIAGRAM */}
      <section className="email-section" style={{ backgroundColor: '#f8fafc', padding: '80px 0' }}>
        <div className="container">
          <div className="email-section-head" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.8rem', background: 'rgba(16, 185, 129, 0.08)', color: '#10B981', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>DNS CONFIGURATION</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginTop: '8px' }}>Security & Delivery Workflow</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '12px auto 0' }}>
              We set up crucial DNS security records to protect your brand name from email spoofing, spam filters, and phishing exploits.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center', alignItems: 'stretch' }}>
            <style>{`
              @media (max-width: 960px) {
                .dns-arrow {
                  display: none !important;
                }
              }
            `}</style>
            {[
              { title: "1. Domain Name", desc: "Your web address (e.g. company.com) acts as the email origin identity." },
              { title: "2. MX Records", desc: "Mail Exchanger records direct incoming emails to Google/Microsoft/Zoho servers." },
              { title: "3. SPF Authentication", desc: "Sender Policy Framework TXT record lists authorized IP addresses allowed to send mail." },
              { title: "4. DKIM Signature", desc: "DomainKeys Identified Mail adds cryptographic signature verifying sender authenticity." },
              { title: "5. Safe Delivery", desc: "Receiver servers verify alignment and deliver mail directly to client Inbox without spam folder detour." }
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ flex: '1', minWidth: '220px', padding: '1.8rem', borderRadius: '16px', background: '#ffffff', border: '1px solid rgba(15,23,42,0.05)', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 12px rgba(8,16,40,0.01)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#06B6D4', margin: 0 }}>{step.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: '1.5', margin: 0 }}>{step.desc}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="dns-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#cbd5e1', fontWeight: '700' }}>→</div>
                )}
              </React.Fragment>
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