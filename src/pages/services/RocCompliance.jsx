import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  FileText,
  Shield,
  Clock,
  ArrowRight,
  Zap,
  ShieldCheck,
  Building2,
  BarChart3
} from 'lucide-react';
import SEO from '../../components/SEO';
import HeroVisual from '../../components/HeroVisual';
import { ComplianceShield, ComplianceTimeline } from '../../components/TaxVisuals';
import '../../styles/service-hero-system.css';

const rocComplianceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/roc-compliance#service",
      "name": "ROC Compliance & MCA Filing Services",
      "alternateName": [
        "Company Annual Filing",
        "MCA Compliance Services",
        "Director KYC Filing",
        "Form AOC-4 Filing",
        "Form MGT-7 Filing",
        "LLP Annual Returns"
      ],
      "description": "Expert assistance for Private Limited Company and LLP annual filings. We manage MCA filing, Director KYC, annual returns, form filings, and compliance tracking across Tamil Nadu and Bengaluru.",
      "url": "https://vtconsulting.in/services/roc-compliance",
      "serviceType": "ROC Compliance & Corporate Secretariat",
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
        "name": "ROC Compliance Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Form AOC-4 Financials Filing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Form MGT-7 Annual Return" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DIR-3 KYC Director Verification" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LLP Form 11 & Form 8 Filing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Company Status Updates & Maintenance" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "ROC Compliance", "item": "https://vtconsulting.in/services/roc-compliance" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is ROC compliance for a Private Limited Company?",
          "acceptedAnswer": { "@type": "Answer", "text": "Annual compliance includes filing the company's financial statements in Form AOC-4, the annual return in Form MGT-7, and director KYC verification in Form DIR-3 KYC." }
        },
        {
          "@type": "Question",
          "name": "What is the deadline for filing AOC-4 and MGT-7?",
          "acceptedAnswer": { "@type": "Answer", "text": "Typically, Form AOC-4 must be filed within 30 days of the Annual General Meeting (AGM), and Form MGT-7 within 60 days of the AGM." }
        },
        {
          "@type": "Question",
          "name": "What are the penalties for late MCA/ROC filings?",
          "acceptedAnswer": { "@type": "Answer", "text": "Late filings incur a penalty of ₹100 per day per form, and continuous non-compliance can lead to disqualification of directors and company strike-off." }
        }
      ]
    }
  ]
};

const RocCompliance = () => {
  return (
    <>
      <SEO 
        title="ROC Compliance & MCA Filing Tamil Nadu & Bengaluru | VT Business Support"
        description="Professional ROC annual return filing, Form AOC-4, Form MGT-7, Director KYC filing, and MCA compliance support for Pvt Ltd companies and LLPs."
        keywords="ROC compliance, MCA filing, annual returns filing, AOC-4 filing, MGT-7 filing, director KYC, company compliance, LLP annual return, Form 11 LLP, MCA registrar, company maintenance, company secretary Dharmapuri, ROC filing Bengaluru, private limited compliance, VT Business Support"
        schema={rocComplianceSchema}
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
                ROC Compliance
                <br />
                <span className="shs-accent" style={{ color: '#4A3FE0' }}>&amp; MCA Filings</span>
              </h1>

              <p className="shs-desc">
                Company annual returns, financials filing, director KYC,
                and corporate maintenance for Private Limited Companies and LLPs
                in Tamil Nadu &amp; Bengaluru.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get ROC Support <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ Annual Returns</span>
                <span>✓ Director KYC Verification</span>
                <span>✓ Zero Penalty Tracking</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> ROC &amp; MCA COMPLIANCE
              </div>
              <HeroVisual
                theme="purple"
                lightMode={true}
                milestones={["MGT-7 Filed", "DIR-3 KYC", "MCA Compliant", "Active Status"]}
                cards={[
                  { title: "Director KYC", subtitle: "Active & Approved" },
                  { title: "AOC-4 & MGT-7", subtitle: "Filed Successfully" },
                  { title: "Active Status", subtitle: "Company Compliant" }
                ]}
              />
            </div>

          </div>
        </div>
      </section>

      <section className="gst-included-section">
        <div className="container">

            <div className="section-title">
            <span className="section-badge">
                COMPLETE ROC SUPPORT
            </span>

            <h2>ROC Compliance Services Included</h2>

            <p>
                ROC filing, MCA compliance,
                director KYC, annual returns,
                and company compliance support
                for startups and growing businesses.
            </p>
            </div>

            <div className="gst-services-grid">

            <div className="gst-service-card">
                <h3>Annual ROC Filing</h3>

                <p>
                Preparation and filing of annual ROC returns,
                financial statements,
                and MCA compliance documents.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Director KYC Filing</h3>

                <p>
                DIN KYC filing support,
                director compliance updates,
                and yearly verification assistance.
                </p>
            </div>

            <div className="gst-service-card">
             <h3>Private Limited Compliance</h3>

             <p>
             Compliance support for private limited companies,
             startups,
             and growing registered businesses.
              </p>
            </div>

            <div className="gst-service-card">
                <h3>MCA Filing Support</h3>

                <p>
                Registrar filing assistance,
                document preparation,
                and company status maintenance support.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Compliance Tracking</h3>

                <p>
                Due date tracking,
                penalty prevention,
                and annual compliance reminders support.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Startup ROC Support</h3>

                <p>
                ROC compliance support for startups,
                small companies,
                and agency businesses.
                </p>
            </div>

            </div>
        </div>
        </section>

      {/* COMPLIANCE & FILING SECURITY */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.8rem', background: 'rgba(74, 63, 224, 0.08)', color: '#4A3FE0', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>COMPLIANCE PROTECTION</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginTop: '8px', lineHeight: '1.2' }}>Secure and Penalty-Free Filing Guarantee</h2>
              <p style={{ color: '#475569', marginTop: '1.2rem', lineHeight: '1.75' }}>
                We double-validate every transaction ledger and invoice input against live GSTR-2B datasets. This mitigates notice triggers, matches input tax credits 100%, and ensures absolute filing security.
              </p>
            </div>
            <div>
              <ComplianceShield />
            </div>
          </div>
          
          <ComplianceTimeline />
        </div>
      </section>

        <section className="why-vt-section">
            <div className="container">

                <div className="section-title">
                <span className="section-badge">
                    WHY VT BUSINESS SUPPORT
                </span>

                <h2>Why Businesses Choose VT</h2>

                <p>
                    Reliable ROC and MCA compliance support
                    for startups, agencies,
                    small businesses, and professionals.
                </p>
                </div>

                <div className="why-vt-grid">

                <div className="why-vt-card">
                    <div className="why-vt-icon">
                     <Zap size={24} strokeWidth={2.2} />
                    </div>
                    <h3>Fast WhatsApp Support</h3>
                    <p>
                    Quick response assistance for filing, notices,
                    reconciliation, and urgent compliance queries.
                    </p>
                </div>

                <div className="why-vt-card">
                    <div className="why-vt-icon">
                        <ShieldCheck size={24} strokeWidth={2.2} />
                     </div>
                    <h3>Accurate Compliance Handling</h3>
                    <p>
                    Proper review and filing workflows to minimize
                    penalties, mismatches, and delayed submissions.
                    </p>
                </div>

                <div className="why-vt-card">
                    <div className="why-vt-icon">
                        <Building2 size={24} strokeWidth={2.2} />
                    </div>
                    <h3>Tamil Nadu & Bengaluru Support</h3>
                    <p>
                    Dedicated support for businesses across Tamil Nadu,
                    Bengaluru, startups, and local service companies.
                    </p>
                </div>

                <div className="why-vt-card">
                    <div className="why-vt-icon">
                        <BarChart3 size={24} strokeWidth={2.2} />
                    </div>
                    <h3>Finance + IT Hybrid Expertise</h3>
                    <p>
                    Combined accounting, taxation, Linux, cloud,
                    networking, and business systems support.
                    </p>
                </div>

                </div>

            </div>
            </section>

            <section className="gst-process-section">
                <div className="container">

                    <div className="section-title">
                    <span className="section-badge">
                        SIMPLE WORKFLOW
                    </span>

                    <h2>Our ROC Compliance Workflow</h2>

                    <p>
                        Share company documents,
                        previous filings,
                        and MCA details through WhatsApp or email.
                    </p>
                    </div>

                    <div className="gst-process-grid">

                    <div className="gst-process-card">
                        <div className="gst-step-number">01</div>
                        <h3>Share Company Documents</h3>
                        <p>
                           Share company incorporation details, previous ROC filings, and MCA information through WhatsApp or email.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">02</div>
                        <h3>Compliance Review</h3>
                        <p>
                            We review ROC compliance status, director requirements, pending filings, and annual obligations carefully.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">03</div>
                        <h3>ROC Filing Submission</h3>
                        <p>
                           ROC return filing, director KYC updates, and MCA submission support handled accurately.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">04</div>
                        <h3>Confirmation & Support</h3>
                        <p>
                           Acknowledgement reports, compliance confirmation, and ongoing ROC support assistance.
                        </p>
                    </div>

                    </div>

                </div>
            </section>

            <section className="gst-faq-section">
                <div className="container">

                    <div className="section-title">
                    <span className="section-badge">
                        GST FAQ
                    </span>

                    <h2>Frequently Asked Questions</h2>

                    <p>
                        Common GST filing and compliance questions from
                        small businesses, startups, and freelancers.
                    </p>
                    </div>

                    <div className="gst-faq-list">

                    {[
                        {
                        q: 'Who needs ROC compliance filing?',
                        a: 'Private limited companies, LLPs, and registered businesses require yearly ROC and MCA compliance filing.'
                        },
                        {
                        q: 'What is Director KYC filing?',
                        a: 'Director KYC is yearly verification of DIN details required by MCA for company directors.'
                        },
                        {
                        q: 'Can you handle annual ROC returns?',
                        a: 'Yes. We assist with annual return preparation, MCA filing, and compliance tracking support.'
                        },
                        {
                        q: 'Do startups need ROC compliance?',
                        a: 'Yes. Registered startups and private limited companies must complete yearly ROC obligations.'
                        },
                        {
                        q: 'Can you help avoid ROC penalties?',
                        a: 'Yes. We help track deadlines and complete filings on time to reduce compliance penalties.'
                        }
                    ].map((faq, index) => (
                        <details key={index} className="gst-faq-item">

                        <summary>
                            {faq.q}
                        </summary>

                        <p>
                            {faq.a}
                        </p>

                        </details>
                    ))}

                    </div>

                </div>
            </section>

            <section className="gst-final-cta">
                <div className="container">

                    <div className="gst-final-cta-card">

                    <span className="section-badge">
                        READY TO FILE?
                    </span>

                    <h2>
                        Get Professional ROC Compliance Support
                    </h2>

                    <p>
                        ROC filing, MCA compliance,
                        director KYC,
                        and annual return support for businesses.
                    </p>

                    <div className="gst-final-cta-buttons">

                        <a
                        href="https://wa.me/918925063980"
                        target="_blank"
                        rel="noreferrer"
                        className="gst-whatsapp-btn"
                        >
                        Chat on WhatsApp
                        </a>

                        <a
                        href="tel:+918925063980"
                        className="gst-call-btn"
                        >
                        Call Now
                        </a>

                    </div>

                    <div className="gst-final-trust">
                        <span>✔ ROC Filing</span>
                        <span>✔ Director KYC</span>
                        <span>✔ Fast WhatsApp Support</span>
                    </div>

                    </div>

                </div>
            </section>            
    </>
  );
};
export default RocCompliance;