import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Users, MapPin, CheckCircle, MessageCircle, 
  Award, Zap, Store, Plane, Building2, Rocket, 
  Search, Lightbulb, Phone, ShieldCheck, HeartPulse 
} from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="fade-in">
      <SEO 
        title="About VT Business Support | Financial & IT Solutions for Businesses"
        description="Learn about VT Business Support, providing expert GST, accounting, IT support, and website solutions for small businesses in Tamil Nadu & Bengaluru."
      />
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        padding: '80px 0', 
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to bottom, rgba(8, 16, 40, 0.9), rgba(8, 16, 40, 0.8)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '0.75rem', fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>Our Mission & Values</h1>
          <p style={{ color: 'var(--primary-hover)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
            GST, Accounting & IT Support for Small Businesses
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Empowering small businesses in Tamil Nadu and Bengaluru with integrated IT and Financial excellence. We bridge the gap between compliance and technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 800 }}>The VT Business Support Story</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Born out of a need to provide small business owners in Tamil Nadu with a single point of contact for both their technical and financial needs. Today, we have grown to provide expert <strong>IT support in Bengaluru</strong> and GST services across the region.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                VT Business Support is based in Tamil Nadu and currently provides specialized services in Bengaluru. We support small businesses in both locations with integrated finance and IT solutions.
              </p>
              <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1.25rem', margin: '2.5rem 0', fontStyle: 'italic' }}>
                "We focus on solving real business problems, not adding complexity."
              </p>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '0.25rem', fontWeight: 800 }}>5+</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Years Experience</p>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-light)', paddingLeft: '2rem' }}>
                  <h4 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '0.25rem', fontWeight: 800 }}>100%</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>Compliance Rate</p>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="VT Business Support Team Meeting"
                loading="lazy"
                style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Who We Help</h2>
            <p style={{ color: 'var(--text-muted)' }}>Tailored solutions for diverse business needs</p>
          </div>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Store size={24} />, title: 'Small Businesses', desc: 'Complete GST and accounting for local retail and trade.' },
              { icon: <Plane size={24} />, title: 'Travel Agencies', desc: 'Secure IT infrastructure and financial audit support.' },
              { icon: <Building2 size={24} />, title: 'Professional Offices', desc: 'Reliable networking and system upkeep for smooth operations.' },
              { icon: <Rocket size={24} />, title: 'Growing Startups', desc: 'Scalable cloud services and business compliance from Day 1.' }
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontWeight: 800 }}>How We Work</h2>
            <p style={{ color: 'var(--text-muted)' }}>A simple, efficient 3-step process</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { step: '1', icon: <Search />, title: 'Requirement Assessment', desc: 'We start by listening to your specific business challenges and goals.' },
              { step: '2', icon: <Lightbulb />, title: 'Customized Solution', desc: 'We design a practical, no-nonsense plan that fits your business needs.' },
              { step: '3', icon: <CheckCircle />, title: 'Delivery & Ongoing Support', desc: 'We implement the solution and stay with you for continuous support.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--primary)', color: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800, fontSize: '1.25rem', boxShadow: 'var(--shadow-md)' }}>
                  {item.step}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, color: 'var(--dark)' }}>
                    <span style={{ color: 'var(--primary)' }}>{React.cloneElement(item.icon, { size: 24 })}</span>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Redesigned) */}
      <section className="section" style={{ backgroundColor: 'var(--dark)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'white', fontWeight: 800 }}>Why Choose VT Business Support?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem' }}>The difference is in our commitment to your growth</p>
          </div>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <HeartPulse />, title: 'Fast Response Support', desc: 'We know downtime costs money. We prioritize quick resolution for all clients.' },
              { icon: <Zap />, title: 'Practical Solutions', desc: 'No jargon. No over-engineering. Just tools and tactics that actually work.' },
              { icon: <Award />, title: 'Professional Excellence', desc: 'Premium quality services tailored to fit the budget of small businesses and startups.' },
              { icon: <ShieldCheck />, title: 'Hybrid IT & Finance', desc: 'Stop managing multiple vendors. We handle your digital and financial health in one place.' }
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', transition: 'var(--transition)' }}>
                <div style={{ color: 'var(--primary-hover)', marginBottom: '1.5rem' }}>{React.cloneElement(item.icon, { size: 32 })}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'white', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', marginBottom: '1.25rem', fontWeight: 800 }}>Need help with your business?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>Call or WhatsApp us now for a professional consultation and quick response.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a href="https://api.whatsapp.com/send?phone=918925063980" className="btn btn-whatsapp" style={{ padding: '0 2.5rem', height: '52px', fontSize: '1.1rem', borderRadius: '10px' }}>
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
              <a href="tel:+918925063980" className="btn" style={{ backgroundColor: 'var(--dark)', color: 'white', padding: '0 2.5rem', height: '52px', fontSize: '1.1rem', borderRadius: '10px' }}>
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
