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

const incomeTaxSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://vtconsulting.in/services/income-tax#service",
      "name": "Income Tax Filing & Planning Services",
      "alternateName": ["ITR Filing", "Income Tax Return", "Tax Planning", "TDS Filing", "Tax Audit"],
      "description": "Professional ITR filing for salaried employees, freelancers, and businesses. Capital gains reporting, deductions optimization, advance tax, and tax notice response across Tamil Nadu & Bengaluru.",
      "url": "https://vtconsulting.in/services/income-tax",
      "serviceType": "Income Tax Filing & Compliance",
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
        "name": "Income Tax Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ITR-1 Salaried Filing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ITR-3 Business & Profession Filing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Capital Gains Tax Reporting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tax Notice Response" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Advance Tax Calculation" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vtconsulting.in/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://vtconsulting.in/services" },
        { "@type": "ListItem", "position": 3, "name": "Income Tax Filing", "item": "https://vtconsulting.in/services/income-tax" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who needs to file an ITR in India?",
          "acceptedAnswer": { "@type": "Answer", "text": "Anyone with income above the basic exemption limit (₹2.5 lakh for below 60 years), NRIs with Indian income, or those claiming TDS refunds must file an ITR." }
        },
        {
          "@type": "Question",
          "name": "What is the deadline for ITR filing?",
          "acceptedAnswer": { "@type": "Answer", "text": "The standard due date for ITR filing is July 31 of the assessment year for individuals. A belated return can be filed until December 31 of the assessment year." }
        },
        {
          "@type": "Question",
          "name": "Can VT Business Support help file ITR for freelancers?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We file ITR-3 and ITR-4 for freelancers, consultants, and self-employed professionals, accounting for business income, deductions, and advance tax payments." }
        }
      ]
    }
  ]
};

const IncomeTax = () => {
  return (
    <>
      <SEO
        title="Income Tax Filing Tamil Nadu & Bengaluru | ITR Filing Services | VT Business Support"
        description="Professional ITR filing for salaried, freelancers & businesses. Capital gains, deductions optimization, and tax notice support across Tamil Nadu & Bengaluru. Fast & accurate."
        keywords="income tax filing Tamil Nadu, ITR filing Bengaluru, income tax return filing, ITR-1 ITR-3 filing, tax planning India, capital gains tax, TDS refund, advance tax, tax notice response, freelancer ITR, income tax consultant Tamil Nadu, ITR filing Dharmapuri, income tax filing small business"
        schema={incomeTaxSchema}
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
                Income Tax Filing
                <br />
                <span className="shs-accent--gold" style={{ color: '#F59E0B' }}>Fast &amp; Accurate</span>
              </h1>

              <p className="shs-desc">
                ITR filing for salaried employees, freelancers, and businesses.
                Capital gains, deductions optimization, and tax notice support
                across Tamil Nadu &amp; Bengaluru.
              </p>

              <div className="shs-buttons">
                <a
                  className="shs-btn-primary"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                >
                  File My Income Tax <ArrowRight size={16} />
                </a>
                <Link className="shs-btn-secondary" to="/contact">
                  Talk To Us
                </Link>
              </div>

              <div className="shs-trust">
                <span>✓ Salaried Employees</span>
                <span>✓ Freelancers &amp; Consultants</span>
                <span>✓ Tax Notice Assistance</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="shs-hero-right">
              <div className="shs-visual-badge">
                <CheckCircle size={15} /> INCOME TAX SERVICES
              </div>
              <HeroVisual
                theme="gold"
                lightMode={true}
                milestones={["ITR Filed", "Refund Processed", "Tax Compliant", "Verified"]}
                cards={[
                  { title: "ITR Filed", subtitle: "FY 2025-26" },
                  { title: "Refund Processed", subtitle: "Direct Deposit" },
                  { title: "Tax Compliant", subtitle: "Verified" }
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
                COMPLETE INCOME TAX SUPPORT
            </span>

            <h2>Income Tax Services Included</h2>

            <p>
                Complete ITR filing, deductions optimization,
                capital gains reporting, and tax compliance
                support for professionals and businesses.
            </p>
            </div>

            <div className="gst-services-grid">

            <div className="gst-service-card">
                <h3>ITR-1 & Salaried Filing</h3>
                <p>
                Income tax filing support for salaried employees,
                Form-16 processing, deductions, and refund claims.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Capital Gains Filing</h3>
                <p>
                Tax filing support for stocks, mutual funds,
                property sales, crypto, and capital gains reporting.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Freelancer & Consultant Tax Filing</h3>
                <p>
                Income tax filing for freelancers, consultants,
                creators, and self-employed professionals.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Business & Professional ITR</h3>
                <p>
                ITR filing support for proprietorships,
                agencies, small businesses, and professionals.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Tax Notice & Compliance Support</h3>
                <p>
                Support for income tax notices,
                AIS mismatches, compliance clarification,
                and response preparation.
                </p>
            </div>

            <div className="gst-service-card">
                <h3>Advance Tax & Deductions Planning</h3>
                <p>
                Advance tax calculation, deduction review,
                tax-saving guidance, and compliance planning.
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
                    Reliable income tax filing and compliance support
                    for salaried employees, freelancers,
                    professionals, and growing businesses.
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

                    <h2>Our Income Tax Filing Process</h2>

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
                        Share Form-16, AIS report, bank statements,
                        investment proofs, or income details through
                        WhatsApp or email.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">02</div>
                        <h3>Review Income & Deductions</h3>
                        <p>
                        We review salary income, capital gains,
                        business income, deductions, and tax-saving eligibility.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">03</div>
                        <h3>ITR Preparation & Filing</h3>
                        <p>
                        Accurate ITR preparation, tax calculation,
                        validation, and secure filing submission support.
                        </p>
                    </div>

                    <div className="gst-process-card">
                        <div className="gst-step-number">04</div>
                        <h3>Confirmation & Assistance</h3>
                        <p>
                        ITR acknowledgement, refund guidance,
                        compliance support, and notice assistance if required.
                        </p>
                    </div>

                    </div>

                </div>
            </section>

            <section className="gst-faq-section">
                <div className="container">

                    <div className="section-title">
                    <span className="section-badge">
                        ITR FAQ
                    </span>

                    <h2>Frequently Asked Questions</h2>

                    <p>
                        Common income tax filing questions from salaried employees,
                        freelancers, consultants, and small business owners.
                    </p>
                    </div>

                    <div className="gst-faq-list">

                    {[
                        {
                        q: 'Who should file income tax returns?',
                        a: 'Individuals with taxable income, freelancers, business owners, salaried employees, and people with capital gains or foreign assets should file income tax returns.'
                        },
                        {
                        q: 'Which ITR form should I use?',
                        a: 'The correct ITR form depends on your income type, such as salary, business income, capital gains, or professional income. We help select the right form.'
                        },
                        {
                        q: 'Can you help with tax notices?',
                        a: 'Yes. We assist with income tax notices, AIS mismatches, compliance clarification, and response preparation support.'
                        },
                        {
                        q: 'Do freelancers need ITR filing?',
                        a: 'Yes. Freelancers and consultants must file income tax returns based on income received from clients, platforms, or professional services.'
                        },
                        {
                        q: 'What documents are required?',
                        a: 'Common documents include Form-16, AIS report, bank statements, investment proofs, capital gains statements, and income details.'
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
                        Get Professional Income Tax Filing Support
                    </h2>

                    <p>
                        Professional income tax filing, deduction review,
                        capital gains reporting, and compliance support
                        for individuals and businesses.
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
                        <span>✔ ITR Filing Support</span>
                        <span>✔ Tax Saving Guidance</span>
                        <span>✔ Fast WhatsApp Assistance</span>
                    </div>

                    </div>

                </div>
            </section>            
    </>
  );
};
export default IncomeTax;