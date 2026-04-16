import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import GoogleRating from './GoogleRating';
import VTLogo from '../assets/VTlogo.svg';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'white',
      padding: '2rem 0 1rem',
      marginTop: 'auto',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <div className="grid-responsive" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 1fr 1.5fr',
          gap: '1.5rem',
          alignItems: 'start'
        }}>

          {/* Column 1: Brand & Google Rating */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <img
              src={VTLogo}
              alt="VT Business Support Logo"
              style={{ height: '40px', width: 'auto', alignSelf: 'start' }}
            />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.4, maxWidth: '240px' }}>
              Simple GST, Accounting & IT support for growing businesses.
            </p>
            <GoogleRating />
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ alignSelf: 'start' }}>
            <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Home</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Services</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div style={{ alignSelf: 'start' }}>
            <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem' }}>Our Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>GST & Tax Support</li>
              <li style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>IT Support & Setup</li>
              <li style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Cloud Solutions</li>
              <li style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Websites & SEO</li>
            </ul>
          </div>

          {/* Column 4: Contact & Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignSelf: 'start' }}>
            <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.1rem' }}>Contact Info</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="tel:+919498856100" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>
                <Phone size={14} style={{ color: 'var(--secondary)' }} /> +91 94988 56100
              </a>
              <a href="mailto:vtconsulting.in@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>
                <Mail size={14} style={{ color: 'var(--secondary)' }} /> vtconsulting.in@gmail.com
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.8rem' }}>
              <div>
                <h5 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={13} style={{ color: 'var(--secondary)' }} /> Tamil Nadu (Harur)
                </h5>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.4 }}>
                  Administrative Office, 5/1B16, Harur, TN 636903
                </p>
              </div>
              <div>
                <h5 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={13} style={{ color: 'var(--secondary)' }} /> Bengaluru (E-City)
                </h5>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.4 }}>
                  1219, Kammasandra, Electronic City, BLR 560099
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '1rem',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>Serving 50+ clients across Tamil Nadu & Bengaluru</span>
            <p style={{ marginTop: '0.1rem' }}>© 2021 – 2026 VT Business Support. All rights reserved.</p>
          </div>
          <p style={{ fontStyle: 'italic' }}>"Crafting Business Excellence in TN & Karnataka"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
