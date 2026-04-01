import React from 'react';
import { Target, Users, MapPin, CheckCircle, MessageCircle } from 'lucide-react';

const About = () => {
  const points = [
    { title: 'Focus on Small Business', content: 'Our primary mission is to help small businesses, startups, and travel agencies thrive.' },
    { title: 'Simple & Practical', content: 'We avoid complex jargon and focus on giving you solutions that work immediately.' },
    { title: 'Combined Expertise', content: 'Unique insights by combining high-level financial filing with deep technical IT support.' },
    { title: 'Efficiency Driven', content: 'We reduce business stress by streamlining your compliance and infrastructure.' }
  ];

  return (
    <div className="fade-in">
      {/* Header */}
      <section style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>About VT Consulting</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#E2E8F0' }}>Your reliable partner for IT and Finance in Tamil Nadu.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Integrated Business Support</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                VT Consulting helps small businesses handle finance and IT in one place.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                We focus on practical, working solutions instead of complex systems.
              </p>
              <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                 <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-main)', fontWeight: 500 }}>
                   "Our goal is to save time, reduce stress, and support business growth."
                 </p>
              </div>
              <a href="https://wa.me/919876543210" className="btn btn-whatsapp">
                <MessageCircle size={20} />
                Connect With Us
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                alt="Our team at work"
                style={{ width: '100%', borderRadius: '25px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.2)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Points */}
      <section className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Core Pillars</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
             {points.map((p, idx) => (
                <div key={idx} style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '15px', border: '1px solid var(--accent)', textAlign: 'center' }}>
                   <div style={{ marginBottom: '1.2rem', color: 'var(--primary)', display: 'flex', justifyContent: 'center' }}><Target size={40} /></div>
                   <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{p.title}</h3>
                   <p style={{ color: 'var(--text-muted)' }}>{p.content}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
      
      {/* Location / Trust Section */}
      <section className="section">
         <div className="container" style={{ textAlign: 'center' }}>
            <MapPin size={40} style={{ color: 'var(--primary)', marginBottom: '1.2rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>Proudly Serving Tamil Nadu</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>We are deeply rooted in the local business landscape of Tamil Nadu, understanding the specific compliance and infrastructure needs of travel agencies, offices, and startups in the region.</p>
         </div>
      </section>
    </div>
  );
};

export default About;
