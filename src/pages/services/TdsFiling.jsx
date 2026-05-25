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

const TdsFiling = () => {
  return (
    <>

      {/* HERO */}
      <section    
        className="gst-hero-section"
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
                Trusted TDS Filing Support
              </div>

                <h1
                  className="gst-hero-title"
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
                    TDS Filing
                    <br />
                    <span style={{ color: '#5B4DFF' }}>
                        Services
                    </span>
                    <br />
                    for Businesses
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
                Monthly and quarterly TDS return filing, deduction compliance,
                Form 16 support, and notice handling for businesses and professionals.
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
                  Get TDS Support
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
                <span>✔ Quarterly TDS Filing</span>
                <span>✔ Form 16 Support</span>
                <span>✔ Fast WhatsApp Support</span>
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
                    'TDS Return Filing',
                    'Form 16 & Form 16A',
                    'TDS Payment Support',
                    'Late Filing Corrections',
                    'TDS Notice Assistance'
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
                          {
                            item === 'TDS Return Filing'
                              ? 'Monthly and quarterly TDS return filing'
                              : item === 'Form 16 & Form 16A'
                              ? 'Employee tax certificate support'
                              : item === 'TDS Payment Support'
                              ? 'Challan & payment guidance'
                              : item === 'Late Filing Corrections'
                              ? 'Correction filing support'
                              : item === 'TDS Notice Assistance'
                              ? 'Compliance clarification support'
                              : 'Accounting correction support'
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