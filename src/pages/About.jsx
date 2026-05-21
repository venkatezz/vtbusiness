import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Target, Users, MapPin, CheckCircle, MessageCircle,
  Award, Zap, Store, Plane, Building2, Rocket,
  Search, Lightbulb, Phone, ShieldCheck, HeartPulse, ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
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

  return (
    <div>
      <SEO
        title="About VT Business Support | Our Mission, Values & Team Story"
        description="Learn how VT Business Support was founded to serve small businesses in Tamil Nadu & Bengaluru with integrated GST filing, IT support, accounting, and web solutions."
      />

      {/* Hero Banner */}
      <section style={{
        position: 'relative',
        padding: '100px 0 80px',
        textAlign: 'center',
        background: `radial-gradient(circle at top right, rgba(74, 63, 224, 0.15), transparent 55%), linear-gradient(180deg, hsl(224, 71%, 5%), hsl(224, 71%, 10%))`,
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* Gradient accent line */}
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
            <Target size={15} style={{ color: 'var(--primary-hover)' }} />
            <span style={{ fontWeight: 700, fontSize: '0.8rem', color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Serving TN & Bengaluru Since 2021
            </span>
          </div>
          <h1 style={{
            color: 'white', fontSize: 'clamp(2.5rem, 6vw, 3.75rem)',
            fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1.25rem', lineHeight: 1.1
          }}>
            Our Mission &amp; Values
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.75)', maxWidth: '680px', margin: '0 auto',
            fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.65, fontWeight: 400
          }}>
            Empowering small businesses in Tamil Nadu and Bengaluru with integrated IT excellence and statutory financial compliance — all from a single professional partner.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section reveal-item">
        <div className="container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block', fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--primary)', marginBottom: '1rem',
                borderBottom: '2px solid var(--primary)', paddingBottom: '4px'
              }}>Our Story</div>
              <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.85rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15 }}>
                The VT Business Support Story
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Born out of a real need to provide small business owners in Tamil Nadu with a <strong>single, trusted point of contact</strong> for both their technical infrastructure and financial compliance needs.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Today, we have grown to provide expert <strong>IT support in Bengaluru</strong> and direct statutory tax services across the region — one unified engine for your business's growth.
              </p>
              <blockquote style={{
                color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem',
                borderLeft: '4px solid var(--primary)', paddingLeft: '1.25rem',
                margin: '2rem 0', fontStyle: 'italic', lineHeight: 1.5
              }}>
                "We focus on solving real business problems — not adding complexity."
              </blockquote>
              <div style={{ display: 'flex', gap: '3rem', marginTop: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2.25rem', color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>5+</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '0.35rem' }}>Years Experience</p>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-light)', paddingLeft: '3rem' }}>
                  <div style={{ fontSize: '2.25rem', color: 'var(--primary)', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>100%</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '0.35rem' }}>Compliance Rate</p>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-light)', paddingLeft: '3rem' }}>
                  <div style={{ fontSize: '2.25rem', color: 'var(--secondary)', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>50+</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '0.35rem' }}>Active Clients</p>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="VT Business Support Team"
                loading="lazy"
                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(8,16,40,0.15)' }}
              />
              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: '-1.5rem', left: '-1.5rem',
                background: 'white', border: '1px solid var(--border-light)',
                borderRadius: '16px', padding: '1rem 1.5rem',
                boxShadow: '0 10px 30px rgba(8,16,40,0.12)',
                display: 'flex', alignItems: 'center', gap: '0.75rem'
              }}>
                <ShieldCheck size={26} style={{ color: 'var(--secondary)' }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--dark)' }}>Certified Practitioners</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>Tax & IT Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section reveal-item" style={{ backgroundColor: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Who We Help</h2>
            <p>Tailored compliance and technology solutions for diverse business verticals across Tamil Nadu and Karnataka.</p>
          </div>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {[
              { icon: <Store size={26} />, title: 'Small Businesses', desc: 'Complete GST compliance, monthly bookkeeping, and local trade license setup for retail and trade owners.', color: 'var(--primary)' },
              { icon: <Plane size={26} />, title: 'Travel Agencies', desc: 'Secure IT infrastructure, network management, and comprehensive financial audits for travel businesses.', color: 'var(--secondary)' },
              { icon: <Building2 size={26} />, title: 'Professional Offices', desc: 'Reliable office networking, system setups, and recurring IT maintenance for smooth daily operations.', color: 'var(--accent)' },
              { icon: <Rocket size={26} />, title: 'Growing Startups', desc: 'Scalable cloud services, company registration, and end-to-end business compliance from Day 1.', color: 'var(--primary-hover)' }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white', padding: '2rem', borderRadius: '20px',
                border: '1px solid var(--border-light)', transition: 'var(--transition)',
                display: 'flex', flexDirection: 'column', gap: '1rem'
              }}
                className="card-premium-hover"
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  backgroundColor: `${item.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: item.color
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark)' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                <Link to="/contact" style={{ color: item.color, fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section reveal-item">
        <div className="container">
          <div className="section-title">
            <h2>How We Work</h2>
            <p>A precise, 3-step engagement model that gets results fast without complexity.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '820px', margin: '0 auto' }}>
            {[
              { step: '01', icon: <Search />, title: 'Requirement Assessment', desc: 'We begin by listening carefully to your specific business challenges. A focused discovery session maps your unique needs and goals.', color: 'var(--primary)' },
              { step: '02', icon: <Lightbulb />, title: 'Customized Service Blueprint', desc: 'We design a practical, no-nonsense plan — never one-size-fits-all. Your advisor creates a dedicated service package tailored to your exact compliance and tech requirements.', color: 'var(--secondary)' },
              { step: '03', icon: <CheckCircle />, title: 'Delivery & Ongoing SLA', desc: 'We implement the solution and stay committed to you long term. Monthly reviews, proactive filing, and dedicated IT maintenance ensure we keep your operations at peak efficiency.', color: 'var(--accent)' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                  color: 'white', width: '64px', height: '64px', borderRadius: '18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontWeight: 800, fontSize: '1.1rem',
                  fontFamily: 'var(--font-heading)', boxShadow: `0 8px 20px ${item.color}30`
                }}>
                  {item.step}
                </div>
                <div style={{ borderLeft: '1px solid var(--border-light)', paddingLeft: '2.5rem', paddingTop: '0.5rem' }}>
                  <h4 style={{
                    fontSize: '1.3rem', fontWeight: 800, color: 'var(--dark)',
                    marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.6rem'
                  }}>
                    <span style={{ color: item.color }}>{React.cloneElement(item.icon, { size: 22 })}</span>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us – Dark Premium */}
      <section className="section reveal-item" style={{ background: 'radial-gradient(circle at top left, rgba(74,63,224,0.08), transparent 50%), var(--dark)', color: 'white' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: 'white' }}>Why Choose VT Business Support?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)' }}>The difference is in our institutional-grade commitment to your financial and technical growth.</p>
          </div>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {[
              { icon: <HeartPulse />, title: 'Fast SLA Response', desc: 'We know downtime costs money. We prioritize quick resolution — guaranteed callback within 30 minutes on any active service.', accent: 'var(--primary-hover)' },
              { icon: <Zap />, title: 'Practical Solutions', desc: 'No jargon. No over-engineering. Just tools and tactics that actually work for small businesses and growing SMEs.', accent: 'var(--accent)' },
              { icon: <Award />, title: 'Professional Excellence', desc: 'Premium quality services tailored to the actual budget of small businesses — institutional quality without enterprise pricing.', accent: 'var(--secondary)' },
              { icon: <ShieldCheck />, title: 'Hybrid IT & Finance', desc: 'Stop managing multiple vendors. We handle your digital infrastructure and statutory financial compliance in one place.', accent: 'var(--primary-hover)' }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'rgba(255,255,255,0.03)', padding: '2.25rem 2rem',
                borderRadius: '20px', border: '1px solid rgba(255,255,255,0.07)',
                transition: 'var(--transition)', display: 'flex', flexDirection: 'column', gap: '1.25rem'
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  backgroundColor: `${item.accent}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: item.accent
                }}>
                  {React.cloneElement(item.icon, { size: 26 })}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'white', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, fontSize: '0.93rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section reveal-item" style={{ textAlign: 'center', backgroundColor: 'var(--white)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              backgroundColor: 'rgba(74,63,224,0.08)', padding: '0.45rem 1.25rem',
              borderRadius: '100px', border: '1px solid rgba(74,63,224,0.2)',
              marginBottom: '1.5rem'
            }}>
              <Users size={14} style={{ color: 'var(--primary)' }} />
              <span style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                50+ Active Clients — TN & Bengaluru
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', marginBottom: '1rem', fontWeight: 800 }}>
              Ready to grow with a trusted partner?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.65 }}>
              Call or WhatsApp us for a professional consultation. Our advisors respond within 30 minutes on any business day.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a href="https://api.whatsapp.com/send?phone=918925063980" className="btn btn-whatsapp" style={{ padding: '0 2.5rem', height: '52px', fontSize: '1rem' }}>
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
              <a href="tel:+918925063980" className="btn" style={{ backgroundColor: 'var(--dark)', color: 'white', padding: '0 2.5rem', height: '52px', fontSize: '1rem' }}>
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
