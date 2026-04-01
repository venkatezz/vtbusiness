import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1E3A8A',
      color: 'white',
      padding: '4rem 0 2rem',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        {/* About Section */}
        <div>
          <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.2rem' }}>VT Consulting</h3>
          <p style={{ color: '#E2E8F0', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Empowering small businesses with integrated financial and IT solutions. Simple, practical, and professional services tailored for your success.
          </p>
          <a
            href="https://wa.me/919498856100"
            className="btn btn-whatsapp"
            style={{ padding: '0.6rem 1.2rem', gap: '0.5rem', fontSize: '0.9rem' }}
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.2rem' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link to="/" style={{ color: '#E2E8F0' }}>Home</Link></li>
            <li><Link to="/services" style={{ color: '#E2E8F0' }}>Services</Link></li>
            <li><Link to="/about" style={{ color: '#E2E8F0' }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: '#E2E8F0' }}>Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.2rem' }}>Our Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link to="/services" style={{ color: '#E2E8F0' }}>GST Filing</Link></li>
            <li><Link to="/services" style={{ color: '#E2E8F0' }}>Income Tax</Link></li>
            <li><Link to="/services" style={{ color: '#E2E8F0' }}>IT Support</Link></li>
            <li><Link to="/services" style={{ color: '#E2E8F0' }}>Cloud Solutions</Link></li>
            <li><Link to="/services" style={{ color: '#E2E8F0' }}>Web Development</Link></li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.2rem' }}>Contact Info</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '0.8rem', color: '#E2E8F0' }}>
              <Phone size={20} style={{ color: 'white', flexShrink: 0 }} />
              <span>+91 98765 43210</span>
            </li>
            <li style={{ display: 'flex', gap: '0.8rem', color: '#E2E8F0' }}>
              <Mail size={20} style={{ color: 'white', flexShrink: 0 }} />
              <span>contact@vtconsulting.com</span>
            </li>
            <li style={{ display: 'flex', gap: '0.8rem', color: '#E2E8F0' }}>
              <MapPin size={20} style={{ color: 'white', flexShrink: 0 }} />
              <span>Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '2rem',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#94A3B8'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} VT Consulting. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>IT Support in Tamil Nadu | GST Services Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
