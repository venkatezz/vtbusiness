import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Globe, Cloud, FileText, Settings, Briefcase, Users, CheckCircle, MessageCircle, ArrowRight, Phone, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="fade-in" style={{ position: 'relative' }}>
      {/* Decorative Blobs */}
      <div className="blob" style={{ top: '10%', left: '-5%' }} />
      <div className="blob" style={{ top: '60%', right: '-5%', backgroundColor: 'var(--secondary)' }} />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--section-padding)',
        overflow: 'hidden',
        background: `linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.8)), url('/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              padding: '0.6rem 1.2rem', 
              borderRadius: '100px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              marginBottom: '1.5rem', 
              border: '1px solid rgba(255,255,255,0.2)' 
            }}>
              <Zap size={20} className="text-secondary" />
              <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'white' }}>Fast & Reliable Business Support</span>
            </div>
            
            <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-2px' }}>
              Optimize Your Business <br /> <span className="text-secondary">Operations Today</span>
            </h1>
            
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.4rem', fontWeight: 600, marginBottom: '2rem', letterSpacing: '0.5px' }}>
              GST, Accounting & IT Support for Small Businesses
            </p>
            
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              Reliable financial compliance and high-performance IT infrastructure for growing enterprises across Tamil Nadu & Bengaluru.
            </p>

            <div className="responsive-stack" style={{
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '3rem',
              color: 'white'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} color="var(--secondary)" />
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>GST & Tax Support</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} color="var(--secondary)" />
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>IT Support & Setup</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} color="var(--secondary)" />
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>Websites & Cloud Services</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919498856100" className="btn btn-whatsapp" style={{ padding: '1rem 2.5rem', borderRadius: '100px' }}>
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link to="/contact" className="btn" style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                padding: '1rem 2rem'
              }}>
                Get Started
              </Link>
            </div>
            
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontWeight: 500, marginTop: '2rem' }}>
              📍 Serving Tamil Nadu and Bengaluru businesses
            </p>
          </div>
        </div>
      </section>

      {/* Trust Quote / Stats */}
      <section className="section" style={{ padding: 'var(--section-padding)', background: 'var(--bg-soft)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '0.2rem', color: 'var(--primary)' }}>100+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Clients Supported</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '0.2rem', color: 'var(--primary)' }}>5+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Years Experience</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '0.2rem', color: 'var(--primary)' }}>24/7</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Support Availability</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '0.2rem', color: 'var(--primary)' }}>99%</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Our Core Expertise</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>Tailored solutions designed to make business management effortless.</p>
          </div>

          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div className="card-premium">
              <div style={{
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                width: '60px', height: '60px', borderRadius: '15px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <FileText style={{ color: 'var(--primary)' }} size={30} />
              </div>
              <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>Financial & CA Services</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                We handle monthly and yearly GST filing, Income Tax planning, and business audits smoothly.
              </p>
              <Link to="/services" style={{ fontWeight: 700, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Expert Support <ArrowRight size={18} />
              </Link>
            </div>

            <div className="card-premium">
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                width: '60px', height: '60px', borderRadius: '15px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Settings style={{ color: 'var(--secondary)' }} size={30} />
              </div>
              <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>Infrastructure & IT</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                Fix system issues, network problems, and complete office infrastructure setup quickly.
              </p>
              <Link to="/services" style={{ fontWeight: 700, color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Scale Securely <ArrowRight size={18} />
              </Link>
            </div>

            <div className="card-premium">
              <div style={{
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                width: '60px', height: '60px', borderRadius: '15px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Cloud style={{ color: 'var(--accent)' }} size={30} />
              </div>
              <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>Digital Growth</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                Professional websites and cloud migration (AWS/Linux) built to grow your business presence.
              </p>
              <Link to="/services" style={{ fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Go Digital <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="section" style={{ background: 'var(--bg-dark)', color: 'white' }}>
        <div className="container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>Why Our Clients Choose Us</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--primary-glow)', flexShrink: 0 }}><Shield size={28} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.3rem' }}>Professional Integrity</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>We operate with full transparency, ensuring your business stays 100% compliant and secure.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--secondary)', flexShrink: 0 }}><Smartphone size={28} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.3rem' }}>Fast-First Support</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>When tax deadlines or IT issues strike, our response is instant. Minimize downtime, maximize focus.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent)', flexShrink: 0 }}><Users size={28} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.3rem' }}>Holistic Perspective</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>We only need one partner for both Finance and IT. One point of contact for everything.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Strategic Planning"
                style={{ width: '100%', borderRadius: '20px', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}>Why Businesses Trust Us</h2>
            <p style={{ color: 'var(--text-muted)' }}>Building long-term partnerships through consistency and excellence.</p>
          </div>

          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              padding: '1.8rem',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ color: 'var(--primary)', backgroundColor: 'rgba(79, 70, 229, 0.1)', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--bg-dark)' }}>Fast response and support</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We know your time is money. Get support when you need it, no delays.</p>
            </div>

            <div style={{
              padding: '1.8rem',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ color: 'var(--secondary)', backgroundColor: 'rgba(16, 185, 129, 0.1)', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--bg-dark)' }}>Simple and practical solutions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No technical jargon. Just clear solutions that work for your business.</p>
            </div>

            <div style={{
              padding: '1.8rem',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ color: 'var(--accent)', backgroundColor: 'rgba(245, 158, 11, 0.1)', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Globe size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--bg-dark)' }}>Affordable pricing for startups</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Premium service at a price that fits your small business budget.</p>
            </div>

            <div style={{
              padding: '1.8rem',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ color: 'var(--primary-glow)', backgroundColor: 'rgba(129, 140, 248, 0.1)', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Briefcase size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--bg-dark)' }}>One place for Finance + IT</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Simplify your life. Manage compliance and IT with one trusted partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ textAlign: 'center', padding: 'var(--section-padding)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>Ready to offload the stress?</h2>
          <p style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
            Call or WhatsApp for quick support
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <a href="tel:+919498856100" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '100px' }}>
              <Phone size={22} />
              Call +91 94988 56100
            </a>
            <a href="https://wa.me/919498856100" className="btn btn-whatsapp" style={{ padding: '1rem 2.5rem', borderRadius: '100px' }}>
              <MessageCircle size={22} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

