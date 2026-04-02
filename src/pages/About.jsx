import React from 'react';
import { 
  Target, Users, MapPin, CheckCircle, MessageCircle, 
  Award, Zap, Store, Plane, Building2, Rocket, 
  Search, Lightbulb, Phone, ShieldCheck, HeartPulse 
} from 'lucide-react';

const About = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--bg-dark)', color: 'white', padding: 'var(--section-padding)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '0.5rem', fontSize: 'clamp(2.2rem, 6vw, 3.5rem)' }}>Our Mission & Values</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
            GST, Accounting & IT Support for Small Businesses
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(1rem, 4vw, 1.2rem)' }}>
            Empowering small businesses in Tamil Nadu with integrated IT and Financial excellence. We bridge the gap between compliance and technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}>The VT Business Support Story</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.7 }}>
                Born out of a need to provide small business owners in Tamil Nadu with a single point of contact for both their technical and financial needs. Today, we have grown to provide expert <strong>IT support in Bengaluru</strong> and GST services across the region.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.7 }}>
                VT Business Support is based in Tamil Nadu and currently provides specialized services in Bengaluru. We support small businesses in both locations with integrated finance and IT solutions.
              </p>
              <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem', margin: '2rem 0' }}>
                "We focus on solving real business problems, not adding complexity."
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.2rem' }}>5+</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Years of Experience</p>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-light)', paddingLeft: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.2rem' }}>100%</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Compliance Guarantee</p>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }}
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
              <div key={idx} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '15px', border: '1px solid var(--border-light)' }}>
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
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>How We Work</h2>
            <p style={{ color: 'var(--text-muted)' }}>A simple, efficient 3-step process</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { step: '1', icon: <Search />, title: 'Understand your requirement', desc: 'We start by listening to your specific business challenges and goals.' },
              { step: '2', icon: <Lightbulb />, title: 'Provide simple solution', desc: 'We design a practical, no-nonsense plan that fits your budget.' },
              { step: '3', icon: <CheckCircle />, title: 'Deliver and support', desc: 'We implement the solution and stay with you for ongoing support.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--primary)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800 }}>
                  {item.step}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Redesigned) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Why Choose VT Business Support?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>The difference is in our commitment to your growth</p>
          </div>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <HeartPulse />, title: 'Fast response and support', desc: 'We know downtime costs money. We prioritize quick resolution for all clients.' },
              { icon: <Zap />, title: 'Simple and practical solutions', desc: 'No jargon. No over-engineering. Just tools and tactics that actually work.' },
              { icon: <Award />, title: 'Affordable pricing', desc: 'Premium quality services tailored to fit the budget of small businesses and startups.' },
              { icon: <ShieldCheck />, title: 'Finance + IT in One Place', desc: 'Stop managing multiple vendors. We handle your digital and financial health.' }
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: 'var(--secondary)', marginBottom: '1.2rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'white' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1.5rem', letterSpacing: '-1px' }}>Need help with your business?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>Call or WhatsApp us now for quick response and support.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="tel:+919498856100" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Phone size={20} />
              Call Now
            </a>
            <a href="https://wa.me/919498856100" className="btn btn-whatsapp" style={{ padding: '1.2rem 2.5rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
