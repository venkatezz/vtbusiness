import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Shield, Zap, Clock, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, I need support for ${formData.requirement || 'my business'}.\n\nName / Business: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918925063980?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', requirement: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactItems = [
    { icon: <Phone size={22} />, label: 'Direct Line', value: '+91 89250 63980', href: 'tel:+918925063980', color: 'var(--primary)' },
    { icon: <Mail size={22} />, label: 'Email Address', value: 'vtconsulting.in@gmail.com', href: 'mailto:vtconsulting.in@gmail.com', color: 'var(--primary-hover)' },
    { icon: <MapPin size={22} />, label: 'Office Locations', value: 'Tamil Nadu & Bengaluru', href: '#', color: 'var(--secondary)' },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.187 1.605 6.006L0 24l6.11-1.603a11.783 11.783 0 005.937 1.603h.005c6.635 0 12.03-5.393 12.034-12.031a11.813 11.813 0 00-3.528-8.503z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: 'Instant Chat Support',
      href: 'https://api.whatsapp.com/send?phone=918925063980',
      color: '#25D366'
    }
  ];

  return (
    <div>
      <SEO
        title="Contact VT Business Support | GST, IT & Tax Advisory"
        description="Get in touch with VT Business Support for GST filing, accounting, IT support, and website development. We serve clients across Tamil Nadu and Bengaluru."
      />

      {/* Hero Banner */}
      <section style={{
        position: 'relative',
        padding: '100px 0 80px',
        textAlign: 'center',
        background: `radial-gradient(circle at top left, rgba(74, 63, 224, 0.15), transparent 55%), linear-gradient(180deg, hsl(224, 71%, 5%), hsl(224, 71%, 10%))`,
        color: 'white',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
          background: 'linear-gradient(to right, var(--primary), var(--secondary))'
        }} />
        <div className="container">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            backgroundColor: 'rgba(74,63,224,0.15)', padding: '0.45rem 1.25rem',
            borderRadius: '100px', border: '1px solid rgba(74,63,224,0.3)',
            marginBottom: '1.5rem'
          }}>
            <Zap size={15} style={{ color: 'var(--primary-hover)' }} />
            <span style={{ fontWeight: 700, fontSize: '0.8rem', color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Serving Tamil Nadu & Bengaluru
            </span>
          </div>
          <h1 style={{
            color: 'white', fontSize: 'clamp(2.5rem, 6vw, 3.75rem)',
            fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.25rem', lineHeight: 1.1
          }}>
            Talk to VT Business Support
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.75)', maxWidth: '660px', margin: '0 auto',
            fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.65, fontWeight: 400
          }}>
            Connect with us for GST filing, accounting, ROC compliance, IT support, cloud setup, and business operations support across Tamil Nadu and Bengaluru.
          </p>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <div style={{
        backgroundColor: 'var(--bg-soft)', borderBottom: '1px solid var(--border-light)',
        padding: '1.25rem 0'
      }}>
        <div className="container">
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            {[
              { icon: <CheckCircle size={15} style={{ color: 'var(--secondary)' }} />, text: 'Fast Business Response' },
              { icon: <Shield size={15} style={{ color: 'var(--primary)' }} />, text: '100% Secure & Confidential' },
              { icon: <Clock size={15} style={{ color: 'var(--accent)' }} />, text: 'Mon–Sat: 9AM to 7:30PM' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                {b.icon}<span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Support Areas */}
      <section
        className="section reveal-item"
        style={{
          paddingTop: '70px',
          paddingBottom: '20px'
        }}
      >
        <div className="container">

          <div
            className="section-title"
            style={{ marginBottom: '2.5rem' }}
          >
            <h2>Business Support Areas</h2>

            <p>
              Practical support services for startups,
              SMEs, freelancers, and growing businesses.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}
          >

            {[
              'GST Filing & Returns',
              'ROC Compliance',
              'Accounting & Bookkeeping',
              'TDS Filing',
              'Linux & AWS Support',
              'Website Development',
              'Business Email Setup',
              'Cloud & IT Infrastructure'
            ].map((service, index) => (

              <div
                key={index}
                style={{
                  background: 'white',
                  border:
                    '1px solid var(--border-light)',
                  borderRadius: '18px',
                  padding: '1.25rem 1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >

                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    background:
                      'rgba(74,63,224,0.08)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <CheckCircle size={16} />
                </div>

                <span
                  style={{
                    fontWeight: 700,
                    color: 'var(--dark)',
                    fontSize: '0.95rem'
                  }}
                >
                  {service}
                </span>

              </div>

            ))}

          </div>

        </div>
      </section>
      {/* Main Content */}
      <section className="section reveal-item">
        <div className="container">
          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {/* Left: Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Direct Line Card */}
              <div style={{
                background: 'white', border: '1px solid var(--border-light)',
                borderRadius: '20px', padding: '2.25rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1.4rem', color: 'var(--dark)', fontWeight: 800 }}>Direct Lines</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {contactItems.map((item, idx) => (
                    <a key={idx} href={item.href}
                      style={{
                        display: 'flex', gap: '1rem', alignItems: 'center',
                        textDecoration: 'none', color: 'inherit', transition: 'var(--transition)'
                      }}
                    >
                      <div style={{
                        width: '48px', height: '48px', borderRadius: '14px',
                        backgroundColor: 'var(--bg-soft)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        color: item.color, flexShrink: 0,
                        border: '1px solid var(--border-light)'
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '2px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.label}</div>
                        <div style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--dark)', overflowWrap: 'anywhere' }}>{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div style={{
                  marginTop: '2rem', padding: '1.25rem', backgroundColor: 'rgba(74,63,224,0.05)',
                  borderRadius: '14px', border: '1px dashed rgba(74,63,224,0.25)'
                }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 500, lineHeight: 1.55, margin: 0 }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 800 }}>Need quick help?</span> Call or WhatsApp us for fast response on GST, IT support, or business setup queries.
                  </p>
                </div>
              </div>

              {/* Business Hours Card */}
              <div style={{
                background: 'white', border: '1px solid var(--border-light)',
                borderRadius: '20px', padding: '2rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h4 style={{
                  marginBottom: '1.5rem', color: 'var(--dark)', fontWeight: 800,
                  display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.1rem'
                }}>
                  <Clock size={18} style={{ color: 'var(--primary)' }} />
                  Business Hours
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 7:30 PM', badge: 'Open' },
                    { day: 'Saturday', time: '9:00 AM – 5:00 PM', badge: 'Open' },
                    { day: 'Sunday', time: 'Limited Support', badge: 'Limited' },
                  ].map((slot, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.75rem 0', borderBottom: i < 2 ? '1px solid var(--border-light)' : 'none'
                    }}>
                      <span style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>{slot.day}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ color: 'var(--dark)', fontWeight: 700, fontSize: '0.9rem' }}>{slot.time}</span>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: '100px',
                          backgroundColor: slot.badge === 'Open' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                          color: slot.badge === 'Open' ? 'var(--secondary)' : 'var(--accent)'
                        }}>{slot.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={{
              background: 'white', border: '1px solid var(--border-light)',
              borderRadius: '24px', padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '0.35rem' }}>Send a Message</h3>
                <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Tell us about your business needs. We respond via WhatsApp immediately.</p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Company / Your Name *</label>
                    <input
                      type="text" name="name"
                      value={formData.name} onChange={handleChange}
                      required placeholder="Your Business Name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">WhatsApp Number *</label>
                    <input
                      pattern="[0-9]{10}" name="phone"
                      value={formData.phone} onChange={handleChange}
                      required placeholder="+91 89250 63980"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Service Required</label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="form-input"
                    style={{ cursor: 'pointer', height: '48px' }}
                  >
                    <option value="">Select a service category</option>
                    <option value="GST & Tax Compliance">GST &amp; Tax Compliance</option>
                    <option value="Accounting & Bookkeeping">Accounting &amp; Bookkeeping</option>
                    <option value="IT Infrastructure & Setup">IT Infrastructure &amp; Setup</option>
                    <option value="Web & Cloud Growth">Web &amp; Cloud Growth</option>
                    <option value="Company Registration">Company Registration</option>
                  </select>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">How can we help?</label>
                  <textarea
                    rows={4} name="message"
                    value={formData.message} onChange={handleChange}
                    placeholder="Describe your requirements or specific questions..."
                    className="form-input"
                    style={{ height: '110px', resize: 'none', paddingTop: '0.85rem' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Shield size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Your data is 100% secure &amp; confidential. We never share your information.</span>
                </div>

                <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', height: '54px', fontSize: '1rem', fontWeight: 700 }}>
                  <Send size={18} />
                  <span>Send via WhatsApp Now</span>
                </button>

                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Prefer a call?{' '}
                    <a href="tel:+918925063980" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                      Dial +91 89250 63980 →
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Strip */}
      <section className="section reveal-item" style={{ backgroundColor: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '2.5rem' }}>
            <h2>Our Office Locations</h2>
            <p>Administrative and operational hubs serving clients across Tamil Nadu and Karnataka.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                icon: <MapPin size={20} />,
                city: 'Harur, Tamil Nadu',
                address: '5/1B16, Administrative Office, Harur Town, Dharmapuri District, Tamil Nadu – 636903',
                tag: 'Registered HQ',
                color: 'var(--primary)'
              },
              {
                icon: <MapPin size={20} />,
                city: 'Electronic City, Bengaluru',
                address: '#79, 3rd Floor, Phase 1, Electronic City, Bengaluru, Karnataka – 560100',
                tag: 'Operations Hub',
                color: 'var(--secondary)'
              }
            ].map((office, idx) => (
              <div key={idx} className="footer-address-block" style={{
                backgroundColor: 'white', borderRadius: '18px', padding: '2rem',
                border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)',
                display: 'flex', flexDirection: 'column', gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ color: office.color }}>{office.icon}</div>
                  <h4 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--dark)' }}>{office.city}</h4>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{office.address}</p>
                <span style={{
                  alignSelf: 'flex-start', fontSize: '0.75rem', fontWeight: 700,
                  padding: '3px 10px', borderRadius: '100px',
                  backgroundColor: `${office.color}12`, color: office.color,
                  letterSpacing: '0.04em'
                }}>{office.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
