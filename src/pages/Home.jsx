import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Globe, Cloud, FileText, Settings, Briefcase, Users, CheckCircle, ArrowRight, Phone, Zap, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const WhatsAppIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.187 1.605 6.006L0 24l6.11-1.603a11.783 11.783 0 005.937 1.603h.005c6.635 0 12.03-5.393 12.034-12.031a11.813 11.813 0 00-3.528-8.503z"/>
  </svg>
);


const Home = () => {
  return (
    <div className="fade-in" style={{ position: 'relative' }}>
      <SEO 
        title="GST Filing, Income Tax, IT Support & Website Services | VT Business Support"
        description="Get GST filing, income tax return, accounting, IT support, and website services in Tamil Nadu & Bengaluru. Simple, fast, and reliable support for businesses."
      />
      {/* Decorative Elements Removed for Cleaner Background */}
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        overflow: 'hidden',
        background: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.65)), url('/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(1px)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '40px 1.5rem' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              padding: '0.4rem 1rem', 
              borderRadius: '100px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              marginBottom: '1rem', 
              border: '1px solid rgba(255,255,255,0.2)' 
            }}>
              <Zap size={18} className="text-secondary" />
              <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'white' }}>Serving businesses across Tamil Nadu & Bengaluru</span>
            </div>
            
            <h1 style={{ color: 'white', marginBottom: '0.8rem', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Optimize Your Business <span style={{ color: 'var(--secondary)' }}>Operations</span>
            </h1>
            
            <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '2rem', letterSpacing: '0.5px' }}>
              GST Filing, Income Tax & IT Support — Simple, Fast & Reliable for Small Businesses
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://api.whatsapp.com/send?phone=919498856100" className="btn btn-whatsapp">
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link to="/contact" className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                <span>Get Free Consultation</span>
              </Link>
              <a href="tel:+919498856100" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline', fontSize: '0.9rem', marginLeft: '0.5rem' }}>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner Below Hero */}
      <section style={{ backgroundColor: 'var(--bg-dark)', padding: '1rem 0', textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: '0.95rem', fontWeight: 600, margin: 0, letterSpacing: '0.5px' }}>
          <CheckCircle size={14} style={{ display: 'inline', color: 'var(--secondary)', marginRight: '6px', verticalAlign: '-2px' }} />
          Trusted by 50+ businesses across Tamil Nadu & Bengaluru
        </p>
      </section>

      {/* Trust Quote / Stats */}
      <section className="section" style={{ padding: 'var(--section-padding-mobile)', background: 'var(--bg-soft)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <p style={{ fontSize: '2.2rem', marginBottom: '0.2rem', color: 'var(--bg-dark)', fontWeight: 700 }}>50+</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Clients Supported</p>
            </div>
            <div>
              <p style={{ fontSize: '2.2rem', marginBottom: '0.2rem', color: 'var(--bg-dark)', fontWeight: 700 }}>5+</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Years Experience</p>
            </div>
            <div>
              <p style={{ fontSize: '2.2rem', marginBottom: '0.2rem', color: 'var(--bg-dark)', fontWeight: 700 }}>Quick</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Fast & Practical Support</p>
            </div>
            <div>
              <p style={{ fontSize: '2.2rem', marginBottom: '0.2rem', color: 'var(--bg-dark)', fontWeight: 700 }}>Trusted</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>by Small Businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-title" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Our Core Expertise</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>Tailored solutions designed to make business management effortless.</p>
          </div>

          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div className="card-premium">
              <div style={{
                backgroundColor: 'rgba(30, 64, 175, 0.08)',
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

      {/* How It Works (User Guidance) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>How It Works</h2>
          </div>
          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div style={{ backgroundColor: 'white', padding: '2rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, margin: '0 auto 1rem' }}>1</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--bg-dark)' }}>Contact us on WhatsApp</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Reach out instantly from your phone.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '2rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, margin: '0 auto 1rem' }}>2</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--bg-dark)' }}>We Understand Your Requirement</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Fast evaluation of your exact needs.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '2rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, margin: '0 auto 1rem' }}>3</div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--bg-dark)' }}>Get Quick Solution</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Resolved professionally within hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="section" style={{ background: 'var(--bg-dark)', color: 'white' }}>
        <div className="container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>Why Our Clients Choose Us</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Shield size={28} /></div>
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
                alt="VT Business Support Strategic Planning Meeting"
                loading="lazy"
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
              <div style={{ color: 'var(--primary)', backgroundColor: 'rgba(30, 64, 175, 0.1)', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              <div style={{ color: 'var(--primary)', backgroundColor: 'rgba(30, 64, 175, 0.08)', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Briefcase size={22} />
              </div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--bg-dark)' }}>One place for Finance + IT</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Simplify your life. Manage compliance and IT with one trusted partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--bg-dark)' }}>Our Services in Tamil Nadu & Bengaluru</h2>
            <div style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                We offer complete business support services including <strong>GST filing, income tax return filing, accounting, IT support, website development, and cloud setup</strong>.
              </p>
              <p>
                Whether you are a small business, startup, or freelancer, we help you manage your financial and technical operations smoothly.
              </p>
              <p>
                Serving clients in <strong>Tamil Nadu, Bengaluru</strong>, and nearby areas with reliable and practical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--bg-dark)', marginBottom: '0.5rem' }}>What Clients Say</h2>
            <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>⭐ Rated 4.5 on Google</p>
          </div>
          
          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              { name: 'Karthik R.', rating: 5, text: '"Their GST filing process is flawless. No more late fees and I finally understand my taxes. Their active WhatsApp support is a lifesaver."' },
              { name: 'Priya Sharma', rating: 5, text: '"Extremely quick IT setup for my new office in Bengaluru! From networking to software setup, they handled everything smoothly."' },
              { name: 'Sakthi Traders', rating: 5, text: '"Best choice we made for accounting. They handle the messy book-keeping while we just focus on sales. Very reliable team."' }
            ].map((review, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '12px', 
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '0.8rem' }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" color="#F59E0B"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                  ))}
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem', fontStyle: 'italic' }}>
                  {review.text}
                </p>
                <div style={{ fontWeight: 600, color: 'var(--bg-dark)', fontSize: '0.9rem' }}>
                  - {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Ready to offload the stress?</h2>
          <p style={{ color: 'var(--bg-dark)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.8rem' }}>
            Call or WhatsApp for quick support
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="https://api.whatsapp.com/send?phone=919498856100" className="btn btn-whatsapp">
              <WhatsAppIcon size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <a href="tel:+919498856100" className="btn" style={{ backgroundColor: 'var(--bg-soft)', color: 'var(--bg-dark)', border: '1px solid var(--border-light)' }}>
              <Phone size={18} />
              Call us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
