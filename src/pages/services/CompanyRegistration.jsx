import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  Building2,
  Users,
  Landmark,
  User,
  FileSpreadsheet,
  ShieldAlert,
  Clock,
  Check
} from 'lucide-react';
import SEO from '../../components/SEO';
import HeroVisual from '../../components/HeroVisual';
import '../../styles/company-registration.css';
import '../../styles/serviceHero.css';

const companyRegSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/company-registration#service",
      "name": "Company Registration Services",
      "alternateName": [
        "Private Limited Company Registration",
        "LLP Registration",
        "OPC Registration",
        "Partnership Firm Registration",
        "Business Incorporation Services"
      ],
      "description": "Professional end-to-end company registration support for startups and entrepreneurs. We handle MCA name approvals, Director Identification Number (DIN), Digital Signature Certificate (DSC), MoA/AoA drafting, and filing for Private Limited Companies, LLPs, One Person Companies, and Partnership Firms across Tamil Nadu and Bengaluru.",
      "url": "https://vtconsulting.in/services/company-registration",
      "serviceType": "Company Registration & Business Incorporation",
      "category": "Business Registration",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://vtconsulting.in#business",
        "name": "VT Business Support",
        "url": "https://vtconsulting.in",
        "telephone": "+918925063980",
        "email": "vtconsulting.in@gmail.com",
        "image": "https://vtconsulting.in/favicon.svg",
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Dharmapuri",
            "addressRegion": "Tamil Nadu",
            "postalCode": "636903",
            "addressCountry": "IN",
            "streetAddress": "Administrative Office, 5/1B16, Harur Town"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560100",
            "addressCountry": "IN",
            "streetAddress": "#79, 3rd Floor, Phase 1, Electronic City"
          }
        ],
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
          { "@type": "AdministrativeArea", "name": "Karnataka" },
          { "@type": "Country", "name": "India" }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
        { "@type": "AdministrativeArea", "name": "Karnataka" },
        { "@type": "Country", "name": "India" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Company Registration Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Limited Company Registration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LLP (Limited Liability Partnership) Registration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "One Person Company (OPC) Registration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Partnership Firm Registration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DIN & DSC Procurement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MCA Name Approval & Incorporation Filing" } }
        ]
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Startups, Entrepreneurs, Freelancers, Small Businesses"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vtconsulting.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://vtconsulting.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Company Registration",
          "item": "https://vtconsulting.in/services/company-registration"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of companies can VT Business Support help register?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We assist with Private Limited Company (Pvt Ltd), Limited Liability Partnership (LLP), One Person Company (OPC), Partnership Firm, and Sole Proprietorship registrations across India."
          }
        },
        {
          "@type": "Question",
          "name": "How long does company registration take in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically 7–15 working days depending on the type of entity and MCA processing timelines. Private Limited Company incorporation via SPICe+ usually takes 7–10 days after document submission."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for Private Limited Company registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Documents required include PAN card, Aadhaar card, address proof (electricity bill/bank statement), passport-size photos, and proposed registered office address proof for all directors and shareholders."
          }
        },
        {
          "@type": "Question",
          "name": "What is a DIN and DSC, and why are they needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DIN (Director Identification Number) is a unique ID issued by MCA to all directors. DSC (Digital Signature Certificate) is required for electronically signing MCA documents. Both are mandatory for company incorporation."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help register a company in Tamil Nadu or Bengaluru?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. VT Business Support provides company registration services across India, with offices in Dharmapuri (Tamil Nadu) and Electronic City (Bengaluru, Karnataka)."
          }
        }
      ]
    }
  ]
};

const CompanyRegistration = () => {
  return (
    <>
      <SEO
        title="Company Registration Tamil Nadu & Bengaluru | Pvt Ltd, LLP, OPC | VT Business Support"
        description="Register your company with expert support — Private Limited, LLP, OPC, or Partnership Firm. End-to-end MCA filing, DIN & DSC assistance across Tamil Nadu & Bengaluru. Fast, hassle-free registration."
        keywords="company registration Tamil Nadu, private limited company registration, LLP registration India, OPC registration, one person company registration, partnership firm registration, MCA registration, DIN registration, DSC registration, business registration Bengaluru, startup company registration, incorporate company India, SPICe+ filing, MoA AoA drafting, company registration Dharmapuri, company registration Electronic City Bengaluru, online company registration, VT Business Support company registration"
        schema={companyRegSchema}
        type="website"
      />

      {/* HERO SECTION */}
      <section className="company-reg-hero service-hero-section">
        <div className="container">
          <div className="company-reg-hero-grid">
            {/* LEFT */}
            <div className="company-reg-hero-left">
              <div className="company-reg-hero-blur" />

              <h1 className="company-reg-hero-title">
                Company Registration
                <br />
                <span className="accent-highlight">
                  Made Simple
                </span>
              </h1>

              <p className="company-reg-hero-desc">
                Professional end-to-end company registration support for startups, freelancers, and growing businesses. We handle MCA name approvals, DIN/DSC issuance, MoA/AoA drafting, and registration documentation for Private Limited Companies and LLPs.
              </p>

              {/* CTA */}
              <div className="company-reg-hero-buttons">
                <a
                  className="company-reg-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Your Business
                  <ArrowRight size={16} />
                </a>

                <Link
                  className="company-reg-btn-secondary"
                  to="/contact"
                >
                  Talk To Us
                </Link>
              </div>

              {/* TRUST ROW */}
              <div className="company-reg-hero-trust">
                <span>✓ Expert Guidance</span>
                <span>✓ MCA Documentation</span>
                <span>✓ Fast Registration</span>
              </div>
            </div>

            {/* RIGHT SIDE GRAPHIC */}
            <div className="company-reg-hero-right">
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="company-reg-hero-badge" style={{ margin: 0 }}>
                  <CheckCircle size={15} />
                  BUSINESS REGISTRATION SERVICES
                </div>
                <HeroVisual 
                  theme="purple" 
                  lightMode={true}
                  milestones={["DSC", "DIN", "MCA", "Registration"]}
                  cards={[
                    { title: "Company Registered", subtitle: "MCA Approved" },
                    { title: "DIN Generated", subtitle: "Active" },
                    { title: "Business Ready", subtitle: "Compliant" }
                  ]} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="company-reg-included">
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge" style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(74, 63, 224, 0.08)',
              border: '1px solid rgba(74, 63, 224, 0.15)',
              color: '#4A3FE0',
              fontSize: '0.8rem',
              fontWeight: '700',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              REGISTRATION SERVICES
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#0f172a' }}>Business Setup Options</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
              We assist startups and entrepreneurs in selecting and registering the right legal structure for their business operations.
            </p>
          </div>

          <div className="company-reg-grid">
            {[
              {
                icon: <Building2 size={28} style={{ color: '#FBBF24' }} />,
                title: "Private Limited Company Registration",
                description: "Register your private limited company with complete documentation and MCA compliance support."
              },
              {
                icon: <Users size={28} style={{ color: '#10B981' }} />,
                title: "LLP Registration",
                description: "Limited Liability Partnership registration for professionals, consultants, and service businesses."
              },
              {
                icon: <Landmark size={28} style={{ color: '#4A3FE0' }} />,
                title: "Partnership Firm Registration",
                description: "Partnership deed preparation and registration support for business partners."
              },
              {
                icon: <User size={28} style={{ color: '#06B6D4' }} />,
                title: "One Person Company (OPC)",
                description: "Ideal registration option for solo entrepreneurs and business owners."
              },
              {
                icon: <FileSpreadsheet size={28} style={{ color: '#a39cf9' }} />,
                title: "Startup Advisory",
                description: "Guidance on selecting the right business structure before registration."
              },
              {
                icon: <ShieldAlert size={28} style={{ color: '#F59E0B' }} />,
                title: "MCA & DIN Assistance",
                description: "Director Identification Number (DIN), DSC, and MCA portal support."
              }
            ].map((service, index) => (
              <div key={index} className="company-reg-card">
                <div style={{ marginBottom: '1.2rem' }}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE VT BUSINESS SUPPORT */}
      <section className="why-vt-section" style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-badge" style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.15)',
              color: '#10B981',
              fontSize: '0.8rem',
              fontWeight: '700',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              WHY PARTNER WITH US
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#0f172a' }}>Why Choose VT Business Support</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '0 auto' }}>
              Reliable corporate support and setup solutions tailored for modern business environments.
            </p>
          </div>
 
          <div className="why-vt-grid">
            {[
              {
                title: "Business Structure Guidance",
                desc: "We analyze your capital structure, scalability, and liability concerns to recommend the right registration path."
              },
              {
                title: "Documentation Support",
                desc: "Hassle-free preparation of MoA, AoA, partnership deeds, and MCA compliance documentation."
              },
              {
                title: "End-to-End Assistance",
                desc: "From filing name approvals and procuring DSC/DIN to final incorporation and certificate issuance."
              },
              {
                title: "Startup Friendly Process",
                desc: "Transparent packages and direct support to get startups up and running as quickly as possible."
              }
            ].map((card, idx) => (
              <div key={idx} className="why-vt-card" style={{
                background: '#f8fafc',
                border: '1px solid rgba(15, 23, 42, 0.06)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'left'
              }}>
                <div className="why-vt-icon" style={{
                  color: '#10B981',
                  marginBottom: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(16, 185, 129, 0.08)',
                  padding: '8px',
                  borderRadius: '10px'
                }}>
                  <Zap size={22} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>{card.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="gst-process-section" style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-badge" style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(91, 77, 255, 0.08)',
              border: '1px solid rgba(91, 77, 255, 0.15)',
              color: '#4A3FE0',
              fontSize: '0.8rem',
              fontWeight: '700',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              REGISTRATION WORKFLOW
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#0f172a' }}>Our Incorporation Process</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
              A structured and simple workflow to incorporate your company without administrative delays.
            </p>
          </div>
 
          <div className="gst-process-grid">
            {[
              { num: "01", title: "Business Requirement Discussion", desc: "Understand target capital, operations, and partner liabilities." },
              { num: "02", title: "Choose Registration Type", desc: "Select Pvt Ltd, LLP, Partnership, OPC, or Proprietorship." },
              { num: "03", title: "Document Collection", desc: "Compile PAN, Aadhaar, address proofs, DSC, and forms." },
              { num: "04", title: "MCA Submission", desc: "Prepare and upload digital registration files on the portal." },
              { num: "05", title: "Registration Approval", desc: "MCA verifies details and issues the Certificate of Incorporation." },
              { num: "06", title: "Business Ready", desc: "PAN/TAN issued, bank account setup ready, operations begin." }
            ].map((step, idx) => (
              <div key={idx} className="gst-process-card" style={{
                background: '#ffffff',
                border: '1px solid rgba(15, 23, 42, 0.05)',
                borderRadius: '16px',
                padding: '2rem',
                position: 'relative'
              }}>
                <div className="gst-step-number">{step.num}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="gst-final-cta" style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="gst-final-cta-card" style={{
            background: 'linear-gradient(135deg, rgba(74, 63, 224, 0.05) 0%, rgba(16, 185, 129, 0.02) 100%)',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(74, 63, 224, 0.12)',
            borderRadius: '24px',
            padding: '4rem 2rem',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: '0 15px 40px rgba(8, 16, 40, 0.04)'
          }}>
            <span className="section-badge" style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.15)',
              color: '#10B981',
              fontSize: '0.8rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              textTransform: 'uppercase'
            }}>
              GET INCORPORATED
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#0f172a' }}>Ready to Start Your Business?</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Get expert support for company registration, business setup, and compliance documentation.
            </p>

            <div className="gst-final-cta-buttons" style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <a
                href="https://wa.me/918925063980"
                target="_blank"
                rel="noreferrer"
                className="gst-whatsapp-btn"
                style={{
                  background: '#10B981',
                  color: '#fff',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.15)'
                }}
              >
                Register Now
              </a>

              <Link
                to="/contact"
                className="gst-call-btn"
                style={{
                  background: 'rgba(15, 23, 42, 0.04)',
                  border: '1px solid rgba(15, 23, 42, 0.1)',
                  color: '#0f172a',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                Talk To Us
              </Link>
            </div>

            <div className="gst-final-trust" style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              color: '#64748B',
              fontSize: '0.9rem'
            }}>
              <span>✓ Business Setup Support</span>
              <span>✓ Expert Guidance</span>
              <span>✓ Small Business Friendly</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyRegistration;
