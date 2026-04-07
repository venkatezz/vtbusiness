import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Shield, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Someone from VT Business Support will get back to you shortly.`);
    setFormData({ name: '', phone: '', requirement: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactList = [
    { icon: <Phone size={24} />, title: 'Call Us', value: '+91 94988 56100', href: 'tel:+919498856100' },
    { icon: <Mail size={24} />, title: 'Email Us', value: 'vtconsulting.in@gmail.com', href: 'mailto:vtconsulting.in@gmail.com' },
    {
      icon: <MapPin size={24} />,
      title: 'Serving',
      value: 'Tamil Nadu & Bengaluru',
      href: '#'
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.187 1.605 6.006L0 24l6.11-1.603a11.783 11.783 0 005.937 1.603h.005c6.635 0 12.03-5.393 12.034-12.031a11.813 11.813 0 00-3.528-8.503z"/>
        </svg>
      ), 
      title: 'WhatsApp', 
      value: 'Chat for Instant Support', 
      href: 'https://api.whatsapp.com/send?phone=919498856100' 
    }
  ];

  return (
    <div className="fade-in">
      <SEO 
        title="Contact VT Business Support | GST & IT Services in TN & Bengaluru"
        description="Contact VT Business Support for GST filing, income tax, IT support, and website services. Call or WhatsApp for quick assistance."
      />
      {/* Hero Header */}
      <section style={{ backgroundColor: 'var(--bg-dark)', color: 'white', padding: 'var(--section-padding)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ backgroundColor: 'rgba(255,100,100,0.1)', padding: '0.6rem 1.2rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', border: '1px solid rgba(255,100,100,0.2)', color: '#FF8A8A', fontWeight: 600 }}>
            <Zap size={20} />
            <span>Serving Tamil Nadu & Bengaluru</span>
          </div>
          <h1 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2rem, 6vw, 3.5rem)', letterSpacing: '-1.5px' }}>Start Your Optimization</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
            Call or WhatsApp now for quick response. Available for on-site IT support in Bengaluru and GST services in Tamil Nadu.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-responsive" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {/* Left Column: Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="card-premium" style={{ backgroundColor: 'white', padding: '1.8rem', border: '1px solid var(--border-light)' }}>
                <h3 style={{ marginBottom: '1.8rem', fontSize: '1.4rem', color: 'var(--bg-dark)' }}>Direct Line</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {contactList.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      style={{
                        display: 'flex',
                        gap: '1.2rem',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                    >
                      <div style={{
                        backgroundColor: 'white',
                        padding: '0.8rem',
                        borderRadius: '12px',
                        color: idx === 3 ? 'var(--secondary)' : 'var(--primary)',
                        flexShrink: 0,
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {React.cloneElement(item.icon, { size: 22 })}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.1rem', fontWeight: 600 }}>{item.title}</h4>
                        <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--bg-dark)', overflowWrap: 'anywhere' }}>{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'white', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Need quick help?</span> Call or WhatsApp us for fast response on GST, IT support, or business setup.
                  </p>
                </div>
              </div>

              <div className="card-premium" style={{ border: '2px dashed var(--primary)', background: 'transparent' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Business Hours</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>Monday – Saturday: 9:00 AM – 7:30 PM</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>Sunday: Closed (WhatsApp support available)</p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="card-premium" style={{ boxShadow: 'var(--shadow-xl)', height: 'fit-content' }}>
              <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Send a Message</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid-responsive" style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
                  gap: '1.5rem' 
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Company Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="VT Business Support"
                      style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-soft)' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Contact Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 94988 56100"
                      style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-soft)' }}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Service Required</label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-soft)' }}
                  >
                    <option value="">Select a service</option>
                    <option value="GST & Tax Compliance">GST & Tax Compliance</option>
                    <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                    <option value="IT Infrastructure & Setup">IT Infrastructure & Setup</option>
                    <option value="Web & Cloud Growth">Web & Cloud Growth</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>How can we help?</label>
                  <textarea rows={4} placeholder="Tell us about your requirements..." style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-soft)', resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem', fontSize: '1.1rem', borderRadius: '100px' }}>
                  <Send size={20} />
                  <span>Get Quick Support</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
