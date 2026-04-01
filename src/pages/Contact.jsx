import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you ${formData.name}! Someone from VT Consulting will get back to you shortly.`);
    setFormData({ name: '', phone: '', requirement: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactList = [
    { icon: <Phone size={24} />, title: 'Call Us', value: '+91 94988 56100', href: 'tel:+919498856100' },
    { icon: <Mail size={24} />, title: 'Email Us', value: 'contact@vtconsulting.com', href: 'mailto:contact@vtconsulting.com' },
    { icon: <MapPin size={24} />, title: 'Visit Us', value: 'Coimbatore, Tamil Nadu, India', href: '#' },
    { icon: <MessageCircle size={24} />, title: 'WhatsApp', value: 'Chat with Experts', href: 'https://wa.me/919498856100' }
  ];

  return (
    <div className="fade-in">
      <section style={{ backgroundColor: 'var(--bg-light)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
           <h1 className="section-title">Get in Touch</h1>
           <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>We are ready to assist you with all your IT and Financial compliance requirements. Our experts are just a call or message away.</p>
        </div>
      </section>

      <div className="container" style={{ padding: '6rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
           {/* Contact Info */}
           <div>
              <h2 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Contact Details</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {contactList.map((item, idx) => (
                   <a 
                    key={idx} 
                    href={item.href}
                    style={{ 
                      display: 'flex', 
                      gap: '1.2rem', 
                      backgroundColor: 'white', 
                      padding: '1.5rem', 
                      borderRadius: '15px', 
                      border: '1px solid var(--accent)',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                   >
                     <div style={{ 
                        backgroundColor: '#DBEAFE', 
                        padding: '1rem', 
                        borderRadius: '12px', 
                        color: 'var(--primary)',
                        flexShrink: 0 
                     }}>
                       {item.icon}
                     </div>
                     <div>
                       <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</h4>
                       <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.value}</p>
                     </div>
                   </a>
                ))}
              </div>
           </div>

           {/* Contact Form */}
           <div style={{ backgroundColor: 'white', padding: '3.5rem 3rem', borderRadius: '25px', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.1)', border: '1px solid var(--accent)' }}>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Enquiry Form</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Enter full name"
                      style={{ padding: '1.1rem', borderRadius: '12px', border: '1.5px solid var(--accent)', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    />
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Mobile Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="E.g. +91 98765 43210"
                      style={{ padding: '1.1rem', borderRadius: '12px', border: '1.5px solid var(--accent)', fontSize: '1rem', outline: 'none' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    />
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Your Requirement</label>
                    <textarea 
                      name="requirement" 
                      required 
                      rows="4"
                      value={formData.requirement} 
                      onChange={handleChange}
                      placeholder="Briefly describe your business needs (e.g. GST Filing, IT Support)"
                      style={{ padding: '1.1rem', borderRadius: '12px', border: '1.5px solid var(--accent)', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--accent)'}
                    />
                 </div>
                 <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
                    <Send size={20} />
                    Send Message
                 </button>
              </form>
              <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                 <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Prefer instant chat?</p>
                 <a href="https://wa.me/919876543210" className="btn btn-whatsapp" style={{ padding: '0.8rem 2.5rem', width: '100%' }}>
                    <MessageCircle size={22} />
                    Connect via WhatsApp
                 </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
