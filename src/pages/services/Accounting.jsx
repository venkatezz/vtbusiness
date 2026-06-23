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

const accountingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/accounting#service",
      "name": "Accounting & Bookkeeping Services",
      "alternateName": [
        "Bookkeeping Services",
        "Financial Accounting",
        "Outsourced Bookkeeping",
        "MIS Reporting",
        "Payroll Management",
        "Balance Sheet Finalization"
      ],
      "description": "Professional outsourced bookkeeping, monthly accounting, payroll processing, bank reconciliations, and compliance tracking for small businesses and startups across Tamil Nadu & Bengaluru.",
      "url": "https://vtconsulting.in/services/accounting",
      "serviceType": "Accounting & Corporate Secretarial Support",
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
        "name": "Accounting Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly & Weekly Bookkeeping" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Sales & Purchase Reconciliation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MIS Performance & Profitability Reporting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Final Accounts & Balance Sheet Prep" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payroll Processing & Compliance" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "Accounting & Bookkeeping", "item": "https://vtconsulting.in/services/accounting" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why should my company outsource bookkeeping?",
          "acceptedAnswer": { "@type": "Answer", "text": "Outsourcing saves cost, reduces compliance errors, and gives you access to qualified accountants and modern software without full-time headcount expenses." }
        },
        {
          "@type": "Question",
          "name": "How do you handle GST reconciliations?",
          "acceptedAnswer": { "@type": "Answer", "text": "We match purchase registers with GSTR-2B monthly to identify missing input tax credits (ITC) and follow up with defaulting vendors." }
        },
        {
          "@type": "Question",
          "name": "What reporting packages do you provide?",
          "acceptedAnswer": { "@type": "Answer", "text": "We deliver monthly MIS reports containing P&L, balance sheets, cashflow analysis, age-wise debtors reports, and outstanding creditors details." }
        }
      ]
    }
  ]
};

const Accounting = () => {
  return (
    <>
      <SEO 
        title="Accounting & Bookkeeping Services Tamil Nadu & Bengaluru | VT Business Support"
        description="Outsource your bookkeeping and payroll. Accurate bank reconciliations, GSTR-2B ITC matching, monthly MIS reporting, and accounts finalization."
        keywords="accounting services, bookkeeping services, outsourced accounting, balance sheet finalization, GST reconciliation, accounts outsourcing, MIS reporting, payroll processing, payroll consultant Dharmapuri, accountant Bengaluru, VT Business Support"
        schema={accountingSchema}
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
                Accounting &amp;
                <br />
                <span className="shs-accent--emerald" style={{ color: '#10B981' }}>Bookkeeping</span>
              </h1>

              <p className="shs-desc">
                Reliable bookkeeping, GST input tax reconciliations,
                monthly MIS reporting, and accounts finalization services
                tailored for startups, growing agencies, and SMBs.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  Manage My Accounts <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ Dedicated Bookkeepers</span>
                <span>✓ GSTR-2B ITC Matching</span>
                <span>✓ Monthly MIS Packages</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> ACCOUNTING &amp; BOOKKEEPING
              </div>
              <HeroVisual
                theme="emerald"
                lightMode={true}
                milestones={["Books Set Up", "Weekly Posting", "GST Reconciled", "MIS Delivered"]}
                cards={[
                  { title: "Ledger Update", subtitle: "Real-time Bookkeeping" },
                  { title: "ITC Reconciled", subtitle: "GSTR-2B Compliant" },
                  { title: "MIS Report", subtitle: "Monthly Profitability" }
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
                COMPLETE ACCOUNTING SUPPORT
            </span>

            <h2>Accounting Services Included</h2>

            <p>
                Monthly bookkeeping, GST reconciliation,
                financial reporting, and accounting support
                for startups, agencies, and growing businesses.
            </p>
            </div>

            <div className="gst-services-grid">

            <div className="gst-service-card">
                <h3>Monthly Bookkeeping</h3>
                <p>
                Day-to-day accounting entries,
                sales tracking, purchase records,
                and financial maintenance support.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>GST Reconciliation</h3>
                <p>
                Purchase matching, GSTR reconciliation,
                input credit verification,
                and compliance review support.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>P&L & Balance Sheet</h3>
                <p>
                Preparation of profit & loss statements,
                balance sheets, and financial summaries
                for business reporting.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Vendor & Expense Tracking</h3>
                <p>
                Expense categorization,
                vendor ledger management,
                and recurring payment monitoring.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Accounting Cleanup</h3>
                <p>
                Correction of mismatched entries,
                pending bookkeeping,
                and historical accounting cleanup.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Startup Financial Support</h3>
                <p>
                Accounting support for startups,
                small agencies, freelancers,
                and growing service businesses.
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
                    Reliable accounting and bookkeeping support
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

                    <h2>Our Accounting Workflow</h2>

                    <p>
                        A smooth and transparent compliance workflow designed
                        for fast turnaround and accurate filing.
                    </p>
                    </div>

                    <div className="gst-process-grid">

                    <div className="gst-process-card">
                        <div className="gst-step-number">01</div>
                        <h3>Share Financial Records</h3>
                        <p>
                        Share invoices, bank statements,
                        purchase reports, or accounting exports
                        through WhatsApp or email.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">02</div>
                        <h3>Review & Categorization</h3>
                        <p>
                        We organize expenses,
                        sales entries, GST data,
                        and vendor transactions carefully.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">03</div>
                        <h3>Bookkeeping & Reconciliation</h3>
                        <p>
                        Monthly accounting updates,
                        GST reconciliation,
                        and ledger verification support.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">04</div>
                        <h3>Reports & Support</h3>
                        <p>
                        P&L statements, balance sheets,
                        compliance reports,
                        and ongoing accounting assistance.
                        </p>
                    </div>

                    </div>

                </div>
            </section>

            <section className="gst-faq-section">
                <div className="container">

                    <div className="section-title">
                    <span className="section-badge">
                        ACCOUNTING & BOOKKEEPING FAQ
                    </span>

                    <h2>Frequently Asked Questions</h2>

                    <p>
                        Common bookkeeping and accounting questions
                        from startups, freelancers,
                        and growing businesses.
                    </p>
                    </div>

                    <div className="gst-faq-list">

                    {[
                        {
                        q: 'Do small businesses need bookkeeping?',
                        a: 'Yes. Proper bookkeeping helps track income, expenses, GST compliance, and overall business performance accurately.'
                        },
                        {
                        q: 'Can you manage monthly accounting?',
                        a: 'Yes. We provide recurring bookkeeping, expense tracking, and monthly financial maintenance support.'
                        },
                        {
                        q: 'Do you support GST reconciliation?',
                        a: 'Yes. We assist with purchase reconciliation, input tax credit verification, and GST mismatch correction support.'
                        },
                        {
                        q: 'Can startups use this service?',
                        a: 'Yes. Our accounting support is designed for startups, agencies, service businesses, and freelancers.'
                        },
                        {
                        q: 'What software do you support?',
                        a: 'We support Tally, Zoho Books, Excel-based accounting, and cloud bookkeeping workflows.'
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
                        Get Professional Accounting Support
                    </h2>

                    <p>
                        Monthly bookkeeping, reconciliation,
                        financial reporting,
                        and compliance support for growing businesses.
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
                        <span>✔ Monthly Reports</span>
                        <span>✔ GST Reconciliation</span>
                        <span>✔ Fast WhatsApp Support</span>
                    </div>

                    </div>

                </div>
            </section>            
    </>
  );
};
export default Accounting;