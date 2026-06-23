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

const gstFilingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/gst-filing#service",
      "name": "GST Filing & Compliance Services",
      "alternateName": ["GST Return Filing", "GSTR-1 Filing", "GSTR-3B Filing", "GST Registration", "ITC Reconciliation"],
      "description": "Professional monthly GSTR-1 & GSTR-3B return filing, new GST registration, Input Tax Credit reconciliation, GST notice support, and annual return filing for businesses across Tamil Nadu & Bengaluru.",
      "url": "https://vtconsulting.in/services/gst-filing",
      "serviceType": "GST Compliance & Tax Filing",
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
        "name": "GST Filing Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GSTR-1 Monthly Filing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GSTR-3B Monthly Filing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Registration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ITC Reconciliation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Annual Return (GSTR-9)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Notice Response" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "GST Filing", "item": "https://vtconsulting.in/services/gst-filing" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is GSTR-1 and GSTR-3B?",
          "acceptedAnswer": { "@type": "Answer", "text": "GSTR-1 is a monthly/quarterly return listing all outward supplies (sales). GSTR-3B is a summary return showing total GST liability and ITC claimed, filed monthly or quarterly." }
        },
        {
          "@type": "Question",
          "name": "How much does GST return filing cost?",
          "acceptedAnswer": { "@type": "Answer", "text": "VT Business Support offers affordable GST return filing packages. Contact us on WhatsApp for the latest pricing based on your transaction volume." }
        },
        {
          "@type": "Question",
          "name": "Can you help with GST registration in Tamil Nadu?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle end-to-end GST registration for businesses in Tamil Nadu and Bengaluru, including document preparation, application filing, and GSTIN receipt." }
        },
        {
          "@type": "Question",
          "name": "What happens if GST returns are filed late?",
          "acceptedAnswer": { "@type": "Answer", "text": "Late GST filing attracts a late fee of ₹20–₹200 per day (depending on the return type) plus interest at 18% p.a. on outstanding tax. Timely filing avoids these penalties." }
        }
      ]
    }
  ]
};

const GstFiling = () => {
  return (
    <>
      <SEO
        title="GST Filing & Registration Services Tamil Nadu | GSTR-1 GSTR-3B | VT Business Support"
        description="Monthly GSTR-1 & GSTR-3B filing, new GST registration, ITC reconciliation, and GST notice support for businesses across Tamil Nadu & Bengaluru. Fast, accurate, affordable."
        keywords="GST filing Tamil Nadu, GSTR-1 filing, GSTR-3B filing, GST registration Bengaluru, GST return filing, ITC reconciliation, GST notice response, GST annual return, GSTR-9, GST compliance, monthly GST filing, GST registration online, GST filing Dharmapuri, GST consultant Tamil Nadu, GST support small business"
        schema={gstFilingSchema}
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
                GST Filing Services
                <br />
                <span className="shs-accent">Made Simple</span>
              </h1>

              <p className="shs-desc">
                Monthly GSTR-1 &amp; GSTR-3B return filing, GST registration,
                ITC reconciliation, and compliance support for businesses
                across Tamil Nadu &amp; Bengaluru.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get GST Support <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ GSTR-1 &amp; GSTR-3B Filing</span>
                <span>✓ ITC Reconciliation</span>
                <span>✓ Notice Support</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> GST FILING SERVICES
              </div>
              <HeroVisual
                theme="purple"
                lightMode={true}
                milestones={["GST Registration", "GSTR-1", "GSTR-3B", "ITC Match"]}
                cards={[
                  { title: "GSTR-1 Filed", subtitle: "On Time" },
                  { title: "ITC Matched", subtitle: "100% Reconciled" },
                  { title: "GST Compliant", subtitle: "Active" }
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
                COMPLETE GST SUPPORT
            </span>

            <h2>GST Services Included</h2>

            <p>
                End-to-end GST compliance, filing, registration, and reconciliation
                support for startups, SMEs, agencies, and growing businesses.
            </p>
            </div>

            <div className="gst-services-grid">

            <div className="gst-service-card">
                <h3>GST Registration</h3>
                <p>
                New GST registration support for proprietorships,
                LLPs, private limited companies, and freelancers.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>GSTR-1 & GSTR-3B Filing</h3>
                <p>
                Accurate monthly and quarterly return filing
                with reconciliation and compliance review.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Annual GST Returns</h3>
                <p>
                Preparation and filing of annual GST returns
                with transaction validation support.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Input Tax Credit Reconciliation</h3>
                <p>
                ITC matching, vendor reconciliation,
                mismatch detection, and compliance assistance.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>GST Notice Handling</h3>
                <p>
                Assistance in replying to GST notices,
                compliance clarifications, and departmental queries.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>LUT & E-Invoice Support</h3>
                <p>
                LUT filing, export compliance support,
                and e-invoice configuration guidance.
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

                    <h2>Our GST Filing Process</h2>

                    <p>
                        A smooth and transparent compliance workflow designed
                        for fast turnaround and accurate filing.
                    </p>
                    </div>

                    <div className="gst-process-grid">

                    <div className="gst-process-card">
                        <div className="gst-step-number">01</div>
                        <h3>Share Documents</h3>
                        <p>
                        Send invoices, purchase reports, GST portal access,
                        or accounting exports through WhatsApp or email.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">02</div>
                        <h3>Review & Reconciliation</h3>
                        <p>
                        We verify sales, purchases, input tax credits,
                        mismatches, and compliance requirements carefully.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">03</div>
                        <h3>GST Return Filing</h3>
                        <p>
                        Accurate GSTR filing submission with validation,
                        correction support, and deadline management.
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
                        q: 'Who needs GST filing services?',
                        a: 'Businesses registered under GST, including proprietorships, agencies, startups, traders, and companies must file GST returns regularly.'
                        },
                        {
                        q: 'How often should GST returns be filed?',
                        a: 'Depending on your business category, GST returns may be filed monthly or quarterly. We help identify the correct filing schedule.'
                        },
                        {
                        q: 'Can you help with GST notices?',
                        a: 'Yes. We assist with GST notice responses, reconciliation issues, mismatch clarifications, and compliance corrections.'
                        },
                        {
                        q: 'Do you support businesses outside Bengaluru?',
                        a: 'Yes. We provide remote GST filing and support services across Tamil Nadu, Bengaluru, and other locations.'
                        },
                        {
                        q: 'What documents are required for GST filing?',
                        a: 'Sales invoices, purchase invoices, GST login details, bank statements, and accounting reports are usually required.'
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
                        Get Professional GST Filing Support
                    </h2>

                    <p>
                        Fast GST return filing, reconciliation,
                        registration, and compliance support for
                        businesses across Tamil Nadu & Bengaluru.
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
                        <span>✔ GST Compliance Support</span>
                        <span>✔ Small Business Friendly</span>
                    </div>

                    </div>

                </div>
            </section>            
    </>
  );
};
export default GstFiling;