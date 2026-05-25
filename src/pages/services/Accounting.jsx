import React from 'react';
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

const Accounting = () => {
  return (
    <>

      {/* HERO */}
      <section    
        className="gst-hero-section"
        style={{
          padding: '82px 0 42px',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          background: `
            linear-gradient(
            135deg,
            #081028 0%,
            #091530 45%,
            #0A1635 100%
            )
            `,           
        }}
      >
        <div className="container">

          <div
            className="gst-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.92fr',
              gap: '3rem',
              alignItems: 'center',
            }}
          >

            {/* LEFT */}
            <div
                className="gst-hero-left"
                style={{
                    width: '100%',
                    maxWidth: '680px',
                    position: 'relative',
                    zIndex: 2
                    
                }}
            >
              <div
                style={{
                    position: 'absolute',
                    width: '280px',
                    height: '280px',
                    background: 'rgba(74,63,224,0.16)',
                    filter: 'blur(120px)',
                    top: '-80px',
                    left: '-120px',
                    zIndex: -1
                }}
              />                

                <div
                    style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '1.5rem'
                    }}
                >
                    <CheckCircle size={15} style={{ color: '#10B981' }} />
                Trusted Accounting Support
              </div>

                <h1
                  className="gst-hero-title"
                    style={{
                        fontSize: 'clamp(2.8rem, 5vw, 4.1rem)',
                        lineHeight: '1.02',
                        fontWeight: '900',
                        marginBottom: '1.4rem',
                        maxWidth: '760px',
                        color: '#FFFFFF',
                        letterSpacing: '-0.04em'
                    }}
                  >
                    Accounting &
                    Bookkeeping
                    <br />
                    <span style={{ color: '#5B4DFF' }}>
                    Services
                    </span>
                    <br />
                    for Growing Businesses
                </h1>

              <p
                className="gst-hero-desc"
                style={{
                  color: 'rgba(255,255,255,0.72)',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  maxWidth: '620px',
                  marginBottom: '2rem',
                  position: 'relative',
                 
                }}
              >
                Monthly bookkeeping, accounting management,
                P&L reporting, GST reconciliation,
                and compliance support for startups,
                agencies, and small businesses.
              </p>

              {/* CTA */}
              <div
                className="gst-hero-buttons"
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '2rem'
                }}
              >

                <a
                  className="gst-hero-cta"
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    boxShadow: '0 10px 30px rgba(16,185,129,0.22)',
                    transition: 'all 0.22s ease',
                    gap: '8px',
                    background: '#10B981',
                    color: '#fff',
                    padding: '14px 22px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '700'
                  }}
                >
                  Get Accounting Support
                  <ArrowRight size={16} />
                </a>

                <a
                  className="gst-hero-cta"
                  href="#gst-services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fff',
                    padding: '14px 22px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  View Services
                </a>

              </div>

              {/* TRUST ROW */}
              <div
                className="gst-hero-cta"
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.92rem'
                }}
              >
                <span>✔ Monthly Bookkeeping</span>
                <span>✔ GST Reconciliation</span>
                <span>✔ Financial Reporting</span>
              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="gst-hero-right">

              <div
                className="gst-hero-card"
                style={{
                  background: 'rgba(15,23,42,0.72)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  padding: '1.7rem',
                  width: '100%',
                  maxWidth: '480px',
                  marginLeft: 'auto',
                  backdropFilter: 'blur(18px)'
                }}
              >

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >

                  {[
                    'Monthly Bookkeeping',
                    'GST Reconciliation',
                    'P&L & Balance Sheet',
                    'Vendor & Expense Tracking',
                    'Accounting Cleanup Support'
                  ].map((item) => (

                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        paddingBottom: '0.9rem',
                        borderBottom: '1px solid rgba(255,255,255,0.04)'
                      }}
                    >
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: `
                            linear-gradient(
                            135deg,
                            rgba(16,185,129,0.18),
                            rgba(16,185,129,0.08)
                            )
                            `,
                            border: '1px solid rgba(16,185,129,0.10)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <FileText size={18} style={{ color: '#10B981' }} />
                      </div>

                      <div>
                        <div
                          style={{
                            fontWeight: '600',
                            marginBottom: '2px'
                          }}
                        >
                          {item}
                        </div>

                        <div
                          style={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.88rem'
                          }}
                        >
                          Monthly bookkeeping assistance
                        </div>
                      </div>
                    </div>

                  ))}

                </div>

                {/* Bottom Stats */}
                <div
                  className="gst-hero-stats"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: '1rem',
                    marginTop: '2rem'
                  }}
                >

                  {[
                    {
                      icon: <Shield size={18} />,
                      value: '100%',
                      label: 'Secure'
                    },
                    {
                      icon: <Clock size={18} />,
                      value: 'Fast',
                      label: 'Response'
                    },
                    {
                      icon: <CheckCircle size={18} />,
                      value: '5+',
                      label: 'Years'
                    }
                  ].map((stat) => (

                    <div
                      key={stat.label}
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '14px',
                        padding: '1rem',
                        textAlign: 'center'
                      }}
                    >
                      <div
                        style={{
                          color: '#10B981',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {stat.icon}
                      </div>

                      <div
                        style={{
                          fontWeight: '700',
                          fontSize: '1.1rem'
                        }}
                      >
                        {stat.value}
                      </div>

                      <div
                        style={{
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: '0.82rem'
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>

                  ))}

                </div>

              </div>

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