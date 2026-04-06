import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Shield } from 'lucide-react';

import VTLogo from '../assets/VTlogo.svg';

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src={VTLogo} 
                alt="VT Business Support Logo" 
                className="logo-footer"
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Empowering small businesses with integrated financial and IT solutions. Simple, practical, and professional services tailored for your success.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href="https://api.whatsapp.com/send?phone=919498856100" className="btn btn-whatsapp" style={{ padding: '0.7rem 1.5rem', borderRadius: '100px', fontSize: '0.85rem' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.554 4.187 1.605 6.006L0 24l6.11-1.603a11.783 11.783 0 005.937 1.603h.005c6.635 0 12.03-5.393 12.034-12.031a11.813 11.813 0 00-3.528-8.503z"/>
                </svg>
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
            <p>© 2021 - {new Date().getFullYear()} VT Business Support. All rights reserved.</p>
          </div>
          <p style={{ fontStyle: 'italic' }}>Crafting Business Excellence in TN & Karnataka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

