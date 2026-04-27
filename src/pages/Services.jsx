import React from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone, Globe, Cloud, FileText, Settings, Briefcase,
  CheckCircle, Phone, Calculator, BookText,
  ShieldCheck, Monitor, Server, Code, MapPin, Search, BarChart3, Building2, Store, Zap
} from 'lucide-react';
import SEO from '../components/SEO';


const WhatsAppIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.187 1.605 6.006L0 24l6.11-1.603a11.783 11.783 0 005.937 1.603h.005c6.635 0 12.03-5.393 12.034-12.031a11.813 11.813 0 00-3.528-8.503z" />
  </svg>
);

const ImageWithFallback = ({ src, alt, style }) => {
  const [error, setError] = React.useState(false);
  const fallbackUrl = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"; // General office fallback

  return (
    <img
      src={error ? fallbackUrl : src}
      alt={alt}
      loading="lazy"
      onError={() => !error && setError(true)}
      style={style}
    />
  );
};

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

  const advancedServices = [
    {
      title: 'Network & Router Setup',
      icon: <Settings size={30} />,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      content: 'High-speed business Wi-Fi, secure router configuration, and office networking.',
      benefit: 'Stable & secure connections'
    },
    {
      title: 'Server Setup & Maintenance',
      icon: <Server size={30} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
      content: 'Set up and manage secure servers for your business with backup, monitoring, and remote support.',
      benefit: 'Secure & stable systems'
    },
    {
      title: 'Website & App Development',
      icon: <Globe size={30} />,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=500",
      content: 'Custom business websites, booking apps, and simple web solutions.',
      benefit: 'Modern online presence'
    },
    {
      title: 'Google Business & Local SEO',
      icon: <MapPin size={30} />,
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=500",
      content: 'Profile setup, G-Map integration, and targeted local city SEO.',
      benefit: 'Get found by local users'
    },
    {
      title: 'Data Backup Solutions',
      icon: <ShieldCheck size={30} />,
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=500",
      content: 'Automated on-premise and cloud backups to protect critical business data.',
      benefit: 'Zero data loss guarantee'
    },
    {
      title: 'Cloud Setup (AWS/Azure)',
      icon: <Cloud size={30} />,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=500",
      content: 'Scalable cloud infrastructure design and migration for growing enterprises.',
      benefit: 'Scale without hardware'
    },
    {
      title: 'Linux Support',
      icon: <Monitor size={30} />,
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=500",
      content: 'Ubuntu, CentOS, and Debian desktop/server support and troubleshooting.',
      benefit: 'Open-source stability'
    },
    {
      title: 'Automation Scripts (Python)',
      icon: <Code size={30} />,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500",
      content: 'Custom Python scripts to automate repetitive daily business tasks.',
      benefit: 'Save hours of manual work'
    },
    {
      title: 'Web Scraping Solutions',
      icon: <Search size={30} />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500",
      content: 'Data extraction from websites for market research and price tracking.',
      benefit: 'Data-driven insights'
    },
    {
      title: 'AI-based Small Automations',
      icon: <Zap size={30} />,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      content: 'Smart AI tools for auto-replying, document parsing, and lead sorting.',
      benefit: 'Save time with automation'
    }
  ];

  return (
    <div className="fade-in">
      <SEO
        title="Professional Business Services | GST, IT & Web | VT Business Support"
        description="Comprehensive business solutions including GST filing, income tax, accounting, IT support, website development, and cloud services in Tamil Nadu & Bengaluru."
      />
      {/* Hero Header */}
      <section style={{
        position: 'relative',
        padding: '80px 0',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to bottom, rgba(8, 16, 40, 0.9), rgba(8, 16, 40, 0.75)), url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
            color: 'white'
          }}>Professional Services</h1>
          <p style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Practical financial solutions and high-performance IT infrastructure
            designed to scale your business across <span style={{ color: 'var(--primary-hover)', fontWeight: 700 }}>Tamil Nadu & Bengaluru</span>.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'inline-flex', padding: '0.75rem 1.5rem', backgroundColor: 'rgba(74, 63, 224, 0.15)', border: '1px solid rgba(74, 63, 224, 0.3)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
            <p style={{ color: 'white', fontSize: '0.95rem', fontWeight: 600, margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <WhatsAppIcon size={18} /> Choose a service below for instant support
            </p>
          </div>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="section" id="finance">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ marginBottom: '1.25rem', color: 'var(--primary)', borderBottom: '3px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', fontWeight: 800 }}>GST, Tax & Accounting</h2>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {financialServices.map((service, idx) => (
              <div
                key={idx}
                className="card-premium"
                style={{
                  padding: '0',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative', backgroundColor: '#f1f5f9' }}>
                  <ImageWithFallback 
                    src={service.image} 
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.05))' }} />
                </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                      {React.cloneElement(service.icon, { size: 22 })}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--dark)', fontWeight: 800, letterSpacing: '-0.02em' }}>{service.title}</h3>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.content}</p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', padding: '1rem', backgroundColor: 'var(--bg-soft)', borderRadius: '12px' }}>
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
      <section className="section" id="registration" style={{ backgroundColor: 'var(--bg-soft)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ marginBottom: '1.25rem', color: 'var(--primary)', borderBottom: '3px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', fontWeight: 800 }}>Registration & Compliance</h2>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {registrationServices.map((service, idx) => (
              <div
                key={idx}
                className="card-premium"
                style={{
                  padding: '0',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative', backgroundColor: '#f1f5f9' }}>
                  <ImageWithFallback 
                    src={service.image} 
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.05))' }} />
                </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                      {React.cloneElement(service.icon, { size: 22 })}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--dark)', fontWeight: 800, letterSpacing: '-0.02em' }}>{service.title}</h3>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.content}</p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', padding: '1rem', backgroundColor: 'var(--white)', borderRadius: '12px' }}>
                    <CheckCircle size={16} />
                    <span>{service.benefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced IT & Automation Section */}
      <section className="section" id="automation">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ marginBottom: '1.25rem', color: 'var(--primary)', borderBottom: '3px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', fontWeight: 800 }}>IT & Cloud Solutions</h2>
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {advancedServices.map((service, idx) => (
              <div
                key={idx}
                className="card-premium"
                style={{
                  padding: '0',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative', backgroundColor: '#f1f5f9' }}>
                  <ImageWithFallback 
                    src={service.image} 
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.05))' }} />
                </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                      {React.cloneElement(service.icon, { size: 22 })}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--dark)', fontWeight: 800, letterSpacing: '-0.02em' }}>{service.title}</h3>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.content}</p>

                  <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', padding: '1rem', backgroundColor: 'var(--bg-soft)', borderRadius: '12px' }}>
                    <CheckCircle size={16} />
                    <span>{service.benefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border-light)', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--dark)', fontWeight: 800 }}>Business Support Across TN & Bengaluru</h2>
            <div style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                From <strong>GST registration</strong> to <strong>cloud infrastructure setup</strong>, VT Business Support offers end-to-end solutions for growing enterprises. We specialize in reducing the operational burden on small business owners.
              </p>
              <p>
                Our services are designed to be practical, affordable, and fast. Whether you need a <strong>tax consultant in Tamil Nadu</strong> or <strong>IT support in Bengaluru</strong>, we are just a message away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--bg-soft)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1.25rem', fontWeight: 800, color: 'var(--dark)' }}>Ready to optimize your operations?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '2.5rem' }}>Contact us now for professional support and a free consultation.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="https://api.whatsapp.com/send?phone=919498856100" className="btn btn-whatsapp" style={{ padding: '0 2.5rem', height: '52px', fontSize: '1.1rem', borderRadius: '10px' }}>
              <WhatsAppIcon size={22} />
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:+919498856100" className="btn" style={{ backgroundColor: 'var(--dark)', color: 'white', padding: '0 2.5rem', height: '52px', fontSize: '1.1rem', borderRadius: '10px' }}>
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
