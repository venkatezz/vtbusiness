import React from 'react';
import { 
  Smartphone, Globe, Cloud, FileText, Settings, Briefcase, 
  CheckCircle, Phone, Calculator, BookText, 
  ShieldCheck, Monitor, Server, Code, MapPin, Search, BarChart3, Building2, Store 
} from 'lucide-react';

const WhatsAppIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.187 1.605 6.006L0 24l6.11-1.603a11.783 11.783 0 005.937 1.603h.005c6.635 0 12.03-5.393 12.034-12.031a11.813 11.813 0 00-3.528-8.503z"/>
  </svg>
);

const Services = () => {
  const financialServices = [
    { 
      title: 'GST Registration & Filing', 
      icon: <FileText size={30} />, 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=500",
      content: 'We handle monthly and yearly GST filing to keep your business compliant.', 
      benefit: 'Accurate compliance, zero penalties' 
    },
    { 
      title: 'Income Tax Filing', 
      icon: <Calculator size={30} />, 
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=500",
      content: 'Plan and file your IT returns accurately to maximize your tax savings.', 
      benefit: 'Maximize tax savings' 
    },
    { 
      title: 'Accounting & Bookkeeping', 
      icon: <BookText size={30} />, 
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=500",
      content: 'Stay on top of your money with clean digital ledgers and balance sheets.', 
      benefit: 'Clear health check on finances' 
    },
    { 
      title: 'Business Compliance', 
      icon: <ShieldCheck size={30} />, 
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=500",
      content: 'All your legal ROC and MCA filings handled without the headache.', 
      benefit: 'Peace of mind with legal formalities' 
    },
    { 
      title: 'Financial Advisory', 
      icon: <BarChart3 size={30} />, 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
      content: 'Expert advice to grow your profit and manage business audits smoothly.', 
      benefit: 'Informed decision making' 
    }
  ];

  const itServices = [
    { 
      title: 'IT Support', 
      icon: <Monitor size={30} />, 
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      content: 'Fix system issues, network problems, and office setup quickly.', 
      benefit: 'Minimum downtime' 
    },
    { 
      title: 'Infrastructure Setup', 
      icon: <Server size={30} />, 
      image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=500",
      content: 'Complete office Wi-Fi, cabling, and hardware procurement in one go.', 
      benefit: 'Turnkey office ready' 
    },
    { 
      title: 'Cloud Services', 
      icon: <Cloud size={30} />, 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500",
      content: 'Move your business to secure AWS/Linux servers for 24/7 access.', 
      benefit: 'Scalable and secure infra' 
    },
    { 
      title: 'Website Development', 
      icon: <Code size={30} />, 
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=500",
      content: 'Professional websites built to convert visitors into loyal customers.', 
      benefit: 'Online visibility' 
    },
    { 
      title: 'Google Business Profile', 
      icon: <MapPin size={30} />, 
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=500",
      content: 'Get found by local customers on Google Search and Google Maps.', 
      benefit: 'Get found locally' 
    },
    { 
      title: 'Local SEO', 
      icon: <Search size={30} />, 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500",
      content: 'Rank higher for your specific services in your city across Tamil Nadu.', 
      benefit: 'Targeted lead generation' 
    }
  ];

  const registrationServices = [
    { 
      title: 'Company Registration', 
      icon: <Building2 size={30} />, 
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=500",
      content: 'Assistance with Private Limited, LLP, and Partnership registration support.',
      benefit: 'Get your business legal' 
    },
    { 
      title: 'GST Registration', 
      icon: <FileText size={30} />, 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=500",
      content: 'Help businesses with new GST registration and formal setup assistance.',
      benefit: 'Tax compliance ready' 
    },
    { 
      title: 'MSME Registration', 
      icon: <Store size={30} />, 
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=500",
      content: 'Udyam registration support to help small businesses access govt benefits.',
      benefit: 'Access MSME benefits' 
    },
    { 
      title: 'Trademark Registration', 
      icon: <ShieldCheck size={30} />, 
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=500",
      content: 'Brand name and logo registration support for your unique identity.',
      benefit: 'Protect your brand name' 
    },
    { 
      title: 'Shop Act Registration', 
      icon: <MapPin size={30} />, 
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=500",
      content: 'Local business license setup assistance for physical shop locations.',
      benefit: 'Trade license simplified' 
    },
    { 
      title: 'PAN & TAN Registration', 
      icon: <Briefcase size={30} />, 
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=500",
      content: 'Business tax identity setup support to manage official transactions.',
      benefit: 'Ready for tax banking' 
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Header */}
      <section style={{ 
        position: 'relative',
        padding: 'clamp(3rem, 10vw, 6rem) var(--section-padding)', 
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to bottom, rgba(7, 8, 25, 0.85), rgba(7, 8, 25, 0.7)), url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 8vw, 3.8rem)', 
            fontWeight: 800,
            marginBottom: '1rem',
            letterSpacing: '-2px',
            color: 'white'
          }}>Professional Services</h1>
          <p style={{ 
            maxWidth: '750px', 
            margin: '0 auto', 
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Strategic financial intelligence and high-performance IT infrastructure 
            designed to scale your business across <span style={{ color: '#60A5FA', fontWeight: 700 }}>Tamil Nadu & Bengaluru</span>.
          </p>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="section" id="finance">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ marginBottom: '1.2rem', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Primary: GST, Tax & Accounting</h2>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {financialServices.map((service, idx) => (
              <div 
                key={idx} 
                className="card-premium"
                style={{ 
                  padding: '0', 
                  backgroundColor: 'white', 
                  borderRadius: '20px', 
                  border: '1px solid var(--border-light)', 
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease'
                }}
              >
                {/* Visual Banner */}
                <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.1) brightness(1.05)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1))' }} />
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                      {React.cloneElement(service.icon, { size: 22 })}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--bg-dark)', fontWeight: 800, letterSpacing: '-0.5px' }}>{service.title}</h3>
                  </div>
                  
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.content}</p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', padding: '0.8rem', backgroundColor: 'var(--bg-soft)', borderRadius: '10px' }}>
                    <CheckCircle size={16} />
                    <span>{service.benefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Registration Section */}
      <section className="section" id="registration" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ marginBottom: '1.2rem', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>New: Business Registration & Compliance</h2>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {registrationServices.map((service, idx) => (
              <div 
                key={idx} 
                className="card-premium"
                style={{ 
                  padding: '0', 
                  backgroundColor: 'white', 
                  borderRadius: '20px', 
                  border: '1px solid var(--border-light)', 
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease'
                }}
              >
                {/* Visual Banner */}
                <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.1) brightness(1.05)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1))' }} />
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                      {React.cloneElement(service.icon, { size: 22 })}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--bg-dark)', fontWeight: 800, letterSpacing: '-0.5px' }}>{service.title}</h3>
                  </div>
                  
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.content}</p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', padding: '0.8rem', backgroundColor: 'var(--bg-soft)', borderRadius: '10px' }}>
                    <CheckCircle size={16} />
                    <span>{service.benefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }} id="it">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ marginBottom: '1.2rem', color: 'var(--primary)', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Supporting: IT & Technology</h2>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {itServices.map((service, idx) => (
              <div 
                key={idx} 
                className="card-premium"
                style={{ 
                  padding: '0', 
                  backgroundColor: 'white', 
                  borderRadius: '20px', 
                  border: '1px solid var(--border-light)', 
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease'
                }}
              >
                {/* Visual Banner */}
                <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.1) brightness(1.05)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1))' }} />
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ color: '#0369a1', flexShrink: 0 }}>
                       {React.cloneElement(service.icon, { size: 22 })}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--bg-dark)', fontWeight: 800, letterSpacing: '-0.5px' }}>{service.title}</h3>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.content}</p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#0369a1', fontWeight: '700', padding: '0.8rem', backgroundColor: '#F0F9FF', borderRadius: '10px' }}>
                    <div style={{ color: '#047857', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       <CheckCircle size={16} />
                       <span>{service.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Quick CTA */}
      <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--bg-soft)', padding: 'var(--section-padding)', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Ready to optimize?</h2>
          <p style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Call or WhatsApp for quick support</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="tel:+919498856100" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '100px' }}>
               <Phone size={20} />
               Call +91 94988 56100
            </a>
            <a href="https://api.whatsapp.com/send?phone=919498856100" className="btn btn-whatsapp" style={{ padding: '1rem 2.5rem', borderRadius: '100px' }}>
              <WhatsAppIcon size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
