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
import '../../styles/service-hero-system.css';

const tdsFilingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/tds-filing#service",
      "name": "TDS Filing & Compliance Services",
      "alternateName": [
        "TDS Return Filing",
        "Form 24Q Filing",
        "Form 26Q Filing",
        "Form 16 Generation",
        "Form 16A",
        "TCS return"
      ],
      "description": "Expert assistance for monthly TDS deduction compliance and quarterly return filings. We manage Form 24Q, 26Q, 27Q, Form 16/16A generation, and notice responses across Tamil Nadu and Bengaluru.",
      "url": "https://vtconsulting.in/services/tds-filing",
      "serviceType": "TDS Return Filing & Compliance",
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
        "name": "TDS Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Form 24Q Salary TDS Return Filing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Form 26Q Non-Salary TDS Return Filing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Form 16 / 16A PDF Generation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TDS Correction & Revision Returns" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TRACES Outstanding Notice Resolution" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "TDS Filing", "item": "https://vtconsulting.in/services/tds-filing" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is TDS return filing?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is a quarterly return submitted to the Income Tax Department containing details of tax deducted at source from salaries, vendor payments, rent, commission, etc." }
        },
        {
          "@type": "Question",
          "name": "What is the deadline for quarterly TDS returns?",
          "acceptedAnswer": { "@type": "Answer", "text": "TDS returns must be filed within 31 days from the end of each quarter (i.e., July 31, October 31, January 31, and May 31 for the respective quarters)." }
        },
        {
          "@type": "Question",
          "name": "Can VT Business Support help generate Form 16 and Form 16A?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We download the official text files from the TRACES portal, generate the signed Form 16/16A PDFs, and provide them to your business for distribution to employees and vendors." }
        }
      ]
    }
  ]
};

const TdsFiling = () => {
  return (
    <>
      <SEO 
        title="TDS Filing & Form 16/16A Support Tamil Nadu & Bengaluru | VT Business Support"
        description="Quarterly TDS filing (Form 24Q, 26Q, 27Q), Form 16 / 16A generation, correction returns, and TRACES notice resolution across Tamil Nadu and Bengaluru."
        keywords="TDS filing, Form 24Q, Form 26Q, TDS return online, Form 16 generation, Form 16A pdf, TRACES tds, TDS correction return, TCS return filing, tds consultant Dharmapuri, tds return Bengaluru, VT Business Support"
        schema={tdsFilingSchema}
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
                TDS Return Filing
                <br />
                <span className="shs-accent--gold" style={{ color: '#F59E0B' }}>Quarterly &amp; Monthly</span>
              </h1>

              <p className="shs-desc">
                Accurate TDS return filing, Form 16/16A generation,
                TCS compliance, and default notice reconciliation support
                for employers and businesses.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  File TDS Return <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ Salaried (24Q) &amp; Vendor (26Q)</span>
                <span>✓ Form 16 PDF Generation</span>
                <span>✓ TRACES Default Cleanup</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> TDS FILING &amp; COMPLIANCE
              </div>
              <HeroVisual
                theme="gold"
                lightMode={true}
                milestones={["Deduction Check", "24Q/26Q Prepared", "Filing Receipt", "Form 16 Ready"]}
                cards={[
                  { title: "Quarterly Returns", subtitle: "24Q & 26Q Filed" },
                  { title: "Form 16/16A", subtitle: "Downloaded & Signed" },
                  { title: "TRACES Portal", subtitle: "Zero Outstanding Defaults" }
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
                COMPLETE TDS SUPPORT
            </span>

            <h2>TDS Services Included</h2>

            <p>
                End-to-end TDS deduction, filing, correction, and compliance
                support for startups, agencies, and growing businesses.
            </p>
            </div>

            <div className="gst-services-grid">

            <div className="gst-service-card">
                <h3>Quarterly TDS Filing</h3>
                <p>
                Accurate quarterly TDS return filing for salary, contractor,
                and professional payments.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Form 16 & 16A Support</h3>
                <p>
                Preparation and sharing support for employee and vendor
                TDS certificates.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>TDS Payment Assistance</h3>
                <p>
                Guidance for challan generation, payment tracking,
                and deduction verification.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Correction Filing</h3>
                <p>
                Correction return filing support for PAN mismatch,
                short deductions, and filing errors.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Vendor & Salary TDS</h3>
                <p>
                TDS handling support for employees, freelancers,
                consultants, and vendors.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>TDS Notice Support</h3>
                <p>
                    Assistance for TDS notices, mismatch clarification,
                    and compliance communication.
                </p>
            </div>

            </div>
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
                    Reliable GST, tax, and compliance support designed for
                    startups, agencies, traders, and growing businesses.
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

                    <h2>Our TDS Filing Process</h2>

                    <p>
                        Simple and transparent TDS compliance workflow
                        designed for timely and accurate filing.
                    </p>
                    </div>

                    <div className="gst-process-grid">

                    <div className="gst-process-card">
                        <div className="gst-step-number">01</div>
                        <h3>Share TDS Documents</h3>
                        <p>
                        Share salary sheets, vendor payments, challan details,
                        and previous TDS records through WhatsApp or email.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">02</div>
                        <h3>Review & Reconciliation</h3>
                        <p>
                           deduction records, challans, employee details, and PAN verification carefully.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">03</div>
                        <h3>TDS Return Filing</h3>
                        <p>
                           Accurate TDS return filing submission with validation, correction support, and deadline management.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">04</div>
                        <h3>Confirmation & Support</h3>
                        <p>
                        Filing confirmation, reports, acknowledgements,
                        and post-filing support for notices or clarifications.
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
                        q: 'Who needs TDS filing services?',
                        a: 'Businesses, companies, startups, agencies, and professionals deducting tax at source are required to file TDS returns regularly.'
                        },
                        {
                        q: 'How often should TDS returns be filed?',
                        a: 'TDS returns are generally filed quarterly based on salary, contractor, or professional payment deductions.'
                        },
                        {
                        q: 'Can you help with TDS notices?',
                        a: 'Yes. We assist with TDS notices, short deduction corrections, mismatch clarification, and compliance support.'
                        },
                        {
                        q: 'What is Form 16 and Form 16A?',
                        a: 'Form 16 is issued for employee salary TDS, while Form 16A is issued for non-salary TDS deductions such as contractor or professional payments.'
                        },
                        {
                        q: 'Can you correct old TDS filing mistakes?',
                        a: 'Yes. We help correct old TDS filing mistakes, PAN mismatches, short deductions, and revised return submissions.'
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
                        Get Professional TDS Filing Support
                    </h2>

                    <p>
                        Reliable TDS filing, correction, payment,
                        and compliance support for businesses and professionals.
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
                        <span>✔ Fast Response</span>
                        <span>✔ TDS Compliance Support</span>
                        <span>✔ Business Friendly Support</span>
                    </div>

                    </div>

                </div>
            </section>            
    </>
  );
};
export default TdsFiling;