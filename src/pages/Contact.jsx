import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Shield, Zap } from 'lucide-react';

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
    { icon: <MessageCircle size={24} />, title: 'WhatsApp', value: 'Instant Chat', href: 'https://wa.me/919498856100' }
  ];

  return (
    <div className="fade-in">
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
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem' }}>
            {/* Left Column: Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="card-premium" style={{ backgroundColor: 'var(--bg-soft)', border: 'none' }}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Direct Line</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
                        boxShadow: 'var(--shadow-sm)'
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.1rem', fontWeight: 600 }}>{item.title}</h4>
                        <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--bg-dark)' }}>{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card-premium" style={{ border: '2px dashed var(--primary)', background: 'transparent' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Business Hours</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Monday - Saturday: 9:00 AM - 7:30 PM</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Sunday: Closed (WhatsApp support available)</p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="card-premium" style={{ boxShadow: 'var(--shadow-xl)' }}>
              <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Send a Message</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
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
                  <textarea rows={4} placeholder="Tell us about your requirements..." style={{ padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-light)', backgroundColor: 'var(--bg-soft)', resize: 'none' }}></textarea>
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
