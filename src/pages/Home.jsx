import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Globe, Cloud, FileText, Settings, Briefcase, Users, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="fade-in" style={{ position: 'relative' }}>
      {/* Decorative Blobs */}
      <div className="blob" style={{ top: '10%', left: '-5%' }} />
      <div className="blob" style={{ top: '60%', right: '-5%', backgroundColor: 'var(--secondary)' }} />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 0',
        overflow: 'hidden',
        background: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.7)), url('/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              backgroundColor: 'rgba(79, 70, 229, 0.15)',
              padding: '0.6rem 1.2rem',
              borderRadius: '100px',
              border: '1px solid rgba(79, 70, 229, 0.3)',
              marginBottom: '2rem',
              color: 'var(--primary-glow)',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              <Shield size={18} />
              <span>Trusted Small Business Partner</span>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', 
              marginBottom: '1.8rem', 
              color: 'white', 
              lineHeight: 1.1,
              letterSpacing: '-2px'
            }}>
              Helping Small Businesses Manage <span style={{ color: 'var(--primary-glow)' }}>GST, Accounting & IT</span> Without Stress
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '3rem', 
              color: 'rgba(255,255,255,0.85)', 
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto 3rem'
            }}>
              We handle your finance, compliance, and technical issues so you can focus on running your business.
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '2.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              marginBottom: '3.5rem',
              color: 'white' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '28px', height: '28px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle size={18} color="var(--secondary)" /> 
                </div>
                <span style={{ fontWeight: 500 }}>GST & Tax Support</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '28px', height: '28px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle size={18} color="var(--secondary)" /> 
                </div>
                <span style={{ fontWeight: 500 }}>IT Support & Setup</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '28px', height: '28px', backgroundColor: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle size={18} color="var(--secondary)" /> 
                </div>
                <span style={{ fontWeight: 500 }}>Websites & Cloud Services</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919498856100" className="btn btn-whatsapp" style={{ padding: '1.1rem 2.8rem' }}>
                <MessageCircle size={22} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link to="/contact" className="btn" style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                color: 'white', 
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                padding: '1.1rem 2.5rem'
              }}>
                Get Started
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote / Stats */}
      <section className="section" style={{ padding: '4rem 0', background: 'var(--bg-soft)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
           <div style={{ 
             display: 'grid', 
             gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
             gap: '3rem',
             textAlign: 'center' 
           }}>
             <div>
               <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>100+</h3>
               <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Clients Supported</p>
             </div>
             <div>
               <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>10+</h3>
               <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Years Experience</p>
             </div>
             <div>
               <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>24/7</h3>
               <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Support Availability</p>
             </div>
             <div>
               <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>99%</h3>
               <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Satisfaction Rate</p>
             </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '3rem' }}>Our Core Expertise</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>Tailored solutions designed to make business management effortless for small owners.</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            <div className="card-premium">
              <div style={{ 
                backgroundColor: 'rgba(79, 70, 229, 0.1)', 
                width: '70px', height: '70px', borderRadius: '18px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                marginBottom: '2rem' 
              }}>
                <FileText style={{ color: 'var(--primary)' }} size={34} />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem' }}>Financial & CA Services</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                Full-cycle business compliance: GST registration, periodic filing, Income Tax planning, and audit support for MSMEs.
              </p>
              <Link to="/services" style={{ fontWeight: 700, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Expert Support <ArrowRight size={18} />
              </Link>
            </div>

            <div className="card-premium">
              <div style={{ 
                backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                width: '70px', height: '70px', borderRadius: '18px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                marginBottom: '2rem' 
              }}>
                <Settings style={{ color: 'var(--secondary)' }} size={34} />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem' }}>Infrastructure & IT</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                Complete IT ecosystem setup, hardware maintenance, secure networking, and proactive technical troubleshooting.
              </p>
              <Link to="/services" style={{ fontWeight: 700, color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Scale Securely <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="card-premium">
              <div style={{ 
                backgroundColor: 'rgba(245, 158, 11, 0.1)', 
                width: '70px', height: '70px', borderRadius: '18px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                marginBottom: '2rem' 
              }}>
                <Cloud style={{ color: 'var(--accent)' }} size={34} />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem' }}>Digital Transformation</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                Custom website development, Cloud migration (AWS/GCP), and establishing your business footprint in the digital era.
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '2rem' }}>Why Choose VT Consulting?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ color: 'var(--primary-glow)', flexShrink: 0 }}><Shield size={32} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Professional Integrity</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>We operate with full transparency, ensuring your business stays 100% compliant and secure.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ color: 'var(--secondary)', flexShrink: 0 }}><Smartphone size={32} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Fast-First Support</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>When tax deadlines or IT issues strike, our response is instant. Minimize downtime, maximize focus.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ color: 'var(--accent)', flexShrink: 0 }}><Users size={32} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Holistic Perspective</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>We are the only partner you need for both Finance and IT. One point of contact for everything.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', 
                inset: '-20px', 
                border: '1px solid var(--primary-glow)', 
                borderRadius: '30px', 
                opacity: 0.3,
                zIndex: 0 
              }} />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Strategic Planning"
                style={{ width: '100%', borderRadius: '25px', position: 'relative', zIndex: 1, boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ textAlign: 'center', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ 
          position: 'absolute', 
          top: '50%', left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '100%', height: '100%', 
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, transparent 70%)' 
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Ready to offload the stress?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
            Join hundreds of small businesses that trust us with their compliance and technical infrastructure.
          </p>
          <a href="https://wa.me/919498856100" className="btn btn-whatsapp" style={{ padding: '1.2rem 4rem', fontSize: '1.2rem', borderRadius: '100px' }}>
            <MessageCircle size={26} />
            Connect via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

