import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'white',
      padding: '6rem 0 3rem',
      marginTop: 'auto',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          marginBottom: '5rem'
        }}>
          {/* Brand Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-glow)', letterSpacing: '-1px' }}>VT</span>
              <span style={{ fontSize: '1.6rem', fontWeight: 500, color: 'white', marginLeft: '2px' }}>Consulting</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7 }}>
              Empowering small businesses with integrated financial and IT solutions. Simple, practical, and professional services tailored for your success.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
               <a href="https://wa.me/919498856100" className="btn btn-whatsapp" style={{ padding: '0.8rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem' }}>
                  <MessageCircle size={20} />
                  <span>Connect</span>
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.7)', transition: '0.3s', hover: { color: 'var(--primary-glow)' } }}>Home</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)' }}>Services</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem' }}>Our Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)' }}>GST & Tax Support</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)' }}>IT Support & Setup</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)' }}>Cloud Solutions</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)' }}>Websites & SEO</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.7)' }}>Infrastructure Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem' }}>Contact Info</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-glow)' }}>
                  <Phone size={20} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>+91 94988 56100</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-glow)' }}>
                  <Mail size={20} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>contact@vtconsulting.com</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-glow)' }}>
                  <MapPin size={20} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '3rem',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.4)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <p>© {new Date().getFullYear()} VT Consulting. All rights reserved.</p>
          <p>Crafting Business Excellence in Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

