import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'white',
      padding: '6rem 0 3rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div className="grid-responsive" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Brand Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary-glow)', letterSpacing: '-1px' }}>VT</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 500, color: 'white', marginLeft: '4px' }}>Business Support</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Empowering small businesses with integrated financial and IT solutions. Simple, practical, and professional services tailored for your success.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="https://wa.me/919498856100" className="btn btn-whatsapp" style={{ padding: '0.7rem 1.5rem', borderRadius: '100px', fontSize: '0.85rem' }}>
                <MessageCircle size={18} />
                <span>Connect</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Home</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Services</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Our Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>GST & Tax Support</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>IT Support & Setup</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Cloud Solutions</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Websites & SEO</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Contact Info</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--primary-glow)' }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>+91 94988 56100</span>
              </li>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--primary-glow)' }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>vtconsulting.in@gmail.com</span>
              </li>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <MapPin size={16} style={{ color: 'var(--primary-glow)' }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '2rem',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.4)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div>
            <p style={{ fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '0.2rem' }}>Serving Tamil Nadu & Bengaluru</p>
            <p>© {new Date().getFullYear()} VT Business Support. All rights reserved.</p>
          </div>
          <p style={{ fontStyle: 'italic' }}>Crafting Business Excellence in TN & Karnataka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

