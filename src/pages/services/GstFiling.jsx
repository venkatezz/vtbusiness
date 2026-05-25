import React from 'react';
import {
  CheckCircle,
  FileText,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react';

const GstFiling = () => {
  return (
    <>

      {/* HERO */}
      <section
        style={{
          background: '#081028',
          padding: '110px 0 80px',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '3rem',
              alignItems: 'center'
            }}
          >

            {/* LEFT */}
            <div style={{ maxWidth: '720px' }}>

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
                Trusted GST Filing Support
              </div>

              <h1
                style={{
                    fontSize: 'clamp(2.7rem, 5vw, 4.4rem)',
                    lineHeight: '1.05',
                    fontWeight: '900',
                    marginBottom: '1.25rem',
                    maxWidth: '760px',
                    color: '#FFFFFF',
                    letterSpacing: '-0.03em'
                }}
                >
                  GST Filing Services for Small Businesses
                </h1>

              <p
                style={{
                  color: 'rgba(255,255,255,0.72)',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  maxWidth: '650px',
                  marginBottom: '2rem'
                }}
              >
                Monthly GST return filing, GST registration,
                reconciliation, and compliance support for
                businesses across Tamil Nadu & Bengaluru.
              </p>

              {/* CTA */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  marginBottom: '2rem'
                }}
              >

                <a
                  href="https://wa.me/918925063980"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#10B981',
                    color: '#fff',
                    padding: '14px 22px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '700'
                  }}
                >
                  Get GST Support
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#gst-services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
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
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.92rem'
                }}
              >
                <span>✔ GST Registration</span>
                <span>✔ Monthly Filing</span>
                <span>✔ Fast WhatsApp Support</span>
              </div>

            </div>

            {/* RIGHT CARD */}
            <div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  padding: '2rem',
                  backdropFilter: 'blur(14px)'
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
                    'GSTR-1 Filing',
                    'GSTR-3B Filing',
                    'GST Registration',
                    'GST Notice Support',
                    'Input Tax Credit Reconciliation'
                  ].map((item) => (

                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        paddingBottom: '1rem',
                        borderBottom: '1px solid rgba(255,255,255,0.06)'
                      }}
                    >
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: 'rgba(16,185,129,0.12)',
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
                          Professional filing assistance
                        </div>
                      </div>
                    </div>

                  ))}

                </div>

                {/* Bottom Stats */}
                <div
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

    </>
  );
};

export default GstFiling;