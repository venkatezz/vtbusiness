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
import SEO from '../../components/SEO';

const incomeTaxSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Income Tax Filing & Planning Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VT Business Support",
    "telephone": "+918925063980"
  },
  "description": "Professional ITR filing, tax auditing, TDS, and corporate tax compliance services for individuals, startups, and established enterprises."
};

const IncomeTax = () => {
  return (
    <>
      <SEO 
        title="Income Tax Filing & Planning Services | VT Business Support"
        description="Professional income tax return filing, tax planning, ITR filing for individuals & businesses, and tax savings solutions in Tamil Nadu and Bengaluru."
        schema={incomeTaxSchema}
      />

      {/* HERO */}
      <section    
        className="gst-hero-section service-hero-section"
        style={{
          padding: '72px 0 64px',
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
                className="gst-hero-left service-hero-left"
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
                Trusted Income Tax Support
              </div>

                <h1
                  className="gst-hero-title   service-hero-title"
                    style={{
                        fontSize: 'clamp(2.9rem, 5vw, 4.5rem)',
                        lineHeight: '1.02',
                        fontWeight: '900',
                        marginBottom: '1.4rem',
                        maxWidth: '760px',
                        color: '#FFFFFF',
                        letterSpacing: '-0.04em'
                    }}
                  >
                    Income Tax Filing 
                    <br />
                    <span style={{ color: '#5B4DFF' }}>
                        Services
                    </span>
                    <br />
                    for Small Businesses
                </h1>

              <p
                className="gst-hero-desc service-hero-desc"
                style={{
                  color: 'rgba(255,255,255,0.72)',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  maxWidth: '620px',
                  marginBottom: '2rem',
                  position: 'relative',
                 
                }}
              >
                Professional ITR filing, salary tax returns,
                capital gains reporting, and tax compliance
                support for salaried professionals, freelancers,
                and small businesses.
              </p>

              {/* CTA */}
              <div
                className="gst-hero-buttons service-hero-buttons"
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
                  File Income Tax
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
                className="gst-hero-cta service-hero-trust"
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.92rem'
                }}
              >
                <span>✔ Salaried Employees</span>
                <span>✔ Freelancers & Consultants</span>
                <span>✔ Tax Notice Assistance</span>
              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="gst-hero-right">

              <div
                className="gst-hero-card service-hero-card"
                style={{
                  background: 'rgba(15,23,42,0.72)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  padding: '2rem',
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
                    gap: '1.2rem'
                  }}
                >

                  {[
                    'ITR-1 Filing',
                    'ITR-2 Filing',
                    'Salary & Capital Gains',
                    'Tax Notice Support',
                    'Advance Tax Guidance'
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
                            marginBottom: '0.50px'
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
                          {
                            item === 'ITR-1 Filing'
                              ? 'Income tax filing for salaried individuals'
                              : item === 'ITR-2 Filing'
                              ? 'Tax filing for capital gains and multiple income sources'
                              : item === 'Salary & Capital Gains'
                              ? 'Professional tax computation and filing assistance'
                              : item === 'Tax Notice Support'
                              ? 'Response preparation and tax compliance guidance'
                              : 'Tax planning and advance tax payment support'
                          }
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
                    marginTop: '1rem'
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