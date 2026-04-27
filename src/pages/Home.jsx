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
        title="VT Business Support | GST Filing, Income Tax, IT Support & Business Services"
        description="VT Business Support provides GST filing, income tax filing, accounting, IT support, website development, cloud setup, and business solutions for individuals and small businesses in Tamil Nadu & Bengaluru."
      />
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        overflow: 'hidden',
        background: `linear-gradient(rgba(8, 16, 40, 0.85), rgba(8, 16, 40, 0.7)), url('/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '64px 1.5rem' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ 
              backgroundColor: 'rgba(74, 63, 224, 0.15)', 
              padding: '0.5rem 1.25rem', 
              borderRadius: '100px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              marginBottom: '1.5rem', 
              border: '1px solid rgba(74, 63, 224, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <Zap size={16} style={{ color: 'var(--primary-hover)' }} />
              <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'white', letterSpacing: '0.01em' }}>Serving Tamil Nadu & Bengaluru</span>
            </div>
            
            <h1 style={{ 
              color: 'white', 
              marginBottom: '1.25rem', 
              fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em',
              fontWeight: 800
            }}>
              Professional Support for <span style={{ color: 'var(--primary-hover)' }}>Your Business</span>
            </h1>
            
            <p style={{ 
              color: 'rgba(255,255,255,0.85)', 
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', 
              fontWeight: 500, 
              marginBottom: '2.5rem', 
              lineHeight: 1.5,
              maxWidth: '700px',
              margin: '0 auto 2.5rem'
            }}>
              GST Filing, Income Tax, IT Support & Web Solutions — Simple, Fast & Reliable for Small Businesses
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://api.whatsapp.com/send?phone=919498856100" className="btn btn-whatsapp" style={{ padding: '0 2rem', height: '48px', fontSize: '1rem', borderRadius: '8px' }}>
                <WhatsAppIcon size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link to="/contact" className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '0 2rem', height: '48px', fontSize: '1rem', borderRadius: '8px' }}>
                <span>Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner Below Hero */}
      <section style={{ backgroundColor: 'var(--dark)', padding: '1.25rem 0', textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: '0.95rem', fontWeight: 600, margin: 0, letterSpacing: '0.02em' }}>
          <CheckCircle size={16} style={{ display: 'inline', color: 'var(--secondary)', marginRight: '8px', verticalAlign: '-3px' }} />
          Trusted by 50+ businesses in Tamil Nadu & Bengaluru
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
              <p style={{ fontSize: '2.5rem', marginBottom: '0.25rem', color: 'var(--dark)', fontWeight: 800 }}>50+</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Clients Supported</p>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', marginBottom: '0.25rem', color: 'var(--dark)', fontWeight: 800 }}>5+</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years Experience</p>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', marginBottom: '0.25rem', color: 'var(--dark)', fontWeight: 800 }}>100%</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Compliance Rate</p>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', marginBottom: '0.25rem', color: 'var(--dark)', fontWeight: 800 }}>Local</p>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TN & Bengaluru</p>
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
                backgroundColor: 'rgba(74, 63, 224, 0.1)',
                width: '56px', height: '56px', borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <FileText style={{ color: 'var(--primary)' }} size={28} />
              </div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 700 }}>GST & Tax Services</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Expert GST filing, Income Tax planning, and business compliance management for individuals and small businesses.
              </p>
              <Link to="/services" style={{ fontWeight: 700, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                View Tax Services <ArrowRight size={16} />
              </Link>
            </div>

            <div className="card-premium">
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                width: '56px', height: '56px', borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Settings style={{ color: 'var(--secondary)' }} size={28} />
              </div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 700 }}>IT Support & Infrastructure</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Reliable remote support, laptop setup, networking, and complete office IT infrastructure management.
              </p>
              <Link to="/services" style={{ fontWeight: 700, color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                IT Solutions <ArrowRight size={16} />
              </Link>
            </div>

            <div className="card-premium">
              <div style={{
                backgroundColor: 'rgba(8, 16, 40, 0.1)',
                width: '56px', height: '56px', borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Globe style={{ color: 'var(--dark)' }} size={28} />
              </div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.35rem', fontWeight: 700 }}>Web & Cloud Solutions</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Professional website development, SEO, and cloud setup (AWS/Linux) to scale your business presence.
              </p>
              <Link to="/services" style={{ fontWeight: 700, color: 'var(--dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                Go Digital <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (User Guidance) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '3rem' }}>
            <h2>How It Works</h2>
          </div>
          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div style={{ backgroundColor: 'white', padding: '2.5rem 1.5rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 1.25rem' }}>1</div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--dark)', fontWeight: 700 }}>Contact via WhatsApp</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>Reach out instantly for a quick consultation regarding your needs.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '2.5rem 1.5rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 1.25rem' }}>2</div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--dark)', fontWeight: 700 }}>Requirement Evaluation</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>We assess your request and provide a clear, professional action plan.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '2.5rem 1.5rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, margin: '0 auto 1.25rem' }}>3</div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--dark)', fontWeight: 700 }}>Professional Delivery</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>Get your GST, IT, or Web solutions delivered with precision and speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="section" style={{ background: 'var(--dark)', color: 'white' }}>
        <div className="container">
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>Why Clients Choose VT Business</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ color: 'var(--primary-hover)', flexShrink: 0 }}><Shield size={32} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>Professional Integrity</h4>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.6 }}>Full transparency in all filings and IT operations, ensuring 100% compliance and security for your business.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ color: 'var(--secondary)', flexShrink: 0 }}><Smartphone size={32} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>Fast-First Support</h4>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.6 }}>Instant response for tax deadlines or technical issues. We minimize your downtime and maximize your focus.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ color: 'var(--primary-hover)', flexShrink: 0 }}><Briefcase size={32} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>Hybrid Expertise</h4>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.6 }}>A single trusted partner for both Finance and IT support. One point of contact for all your business operations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="VT Business Support Strategic Planning Meeting"
                loading="lazy"
                style={{ width: '100%', borderRadius: '24px', position: 'relative', zIndex: 1, boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Why Businesses Trust Us</h2>
            <p style={{ color: 'var(--text-muted)' }}>Building long-term partnerships through consistency and excellence.</p>
          </div>

          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ color: 'var(--primary)', backgroundColor: 'rgba(74, 63, 224, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--dark)', fontWeight: 700 }}>Fast Response</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>We know your time is money. Get professional support exactly when you need it.</p>
            </div>

            <div style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ color: 'var(--secondary)', backgroundColor: 'rgba(16, 185, 129, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--dark)', fontWeight: 700 }}>Practical Solutions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>No technical jargon. Just clear, actionable solutions that work for your business.</p>
            </div>

            <div style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ color: 'var(--accent)', backgroundColor: 'rgba(245, 158, 11, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Smartphone size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--dark)', fontWeight: 700 }}>Local Expertise</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Deep understanding of GST and IT requirements specific to TN & Bengaluru markets.</p>
            </div>

            <div style={{
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ color: 'var(--primary)', backgroundColor: 'rgba(74, 63, 224, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Briefcase size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--dark)', fontWeight: 700 }}>Finance + IT Unified</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>Manage your entire business operations with one trusted professional partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--dark)', fontWeight: 800 }}>Business Support in Tamil Nadu & Bengaluru</h2>
            <div style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                VT Business Support is your dedicated partner for <strong>GST filing, income tax returns, professional accounting, and IT infrastructure</strong>. We bridge the gap between financial compliance and technical excellence.
              </p>
              <p>
                From startup registration to complex cloud setups, our team provides practical, fast, and reliable solutions tailored for small and medium enterprises.
              </p>
              <p>
                Serving the vibrant business communities across <strong>Tamil Nadu and Bengaluru</strong> with a focus on trust and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--dark)', marginBottom: '0.5rem', fontWeight: 800 }}>What Our Clients Say</h2>
            <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>⭐ Rated 4.5 on Google Business</p>
          </div>
          
          <div className="grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { name: 'Karthik R.', location: 'Tamil Nadu', text: '"Their GST filing process is flawless. No more late fees and I finally understand my taxes. Their active WhatsApp support is a lifesaver."' },
              { name: 'Priya Sharma', location: 'Bengaluru', text: '"Extremely quick IT setup for my new office! From networking to software setup, they handled everything smoothly and professionally."' },
              { name: 'Sakthi Traders', location: 'Retail Business', text: '"Best choice we made for accounting. They handle the messy bookkeeping while we focus on sales. Very reliable team."' }
            ].map((review, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '16px', 
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                  ))}
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                  {review.text}
                </p>
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 800, color: 'var(--dark)', fontSize: '0.95rem' }}>{review.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', marginBottom: '1.25rem', fontWeight: 800 }}>Ready to offload the stress?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Get expert business support today. One message away from professional peace of mind.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://api.whatsapp.com/send?phone=919498856100" className="btn btn-whatsapp" style={{ padding: '0 2.5rem', height: '52px', fontSize: '1.1rem', borderRadius: '10px' }}>
                <WhatsAppIcon size={22} />
                <span>Chat on WhatsApp</span>
              </a>
              <a href="tel:+919498856100" className="btn" style={{ backgroundColor: 'var(--dark)', color: 'white', padding: '0 2.5rem', height: '52px', fontSize: '1.1rem', borderRadius: '10px' }}>
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

export default Home;
