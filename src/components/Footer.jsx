import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import GoogleRating from './GoogleRating';
import VTLogo from '../assets/VTlogo.svg';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--dark)',
      color: 'white',
      padding: '48px 0 24px',
      marginTop: 'auto',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <div className="grid-responsive" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 1fr 1.5fr',
          gap: '2.5rem',
          alignItems: 'start',
          marginBottom: '32px'
        }}>

          {/* Column 1: Brand & Google Rating */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <img
              src={VTLogo}
              alt="VT Business Support Logo"
              style={{ height: '44px', width: 'auto', alignSelf: 'start', filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.5, maxWidth: '260px' }}>
              Professional GST filing, accounting, IT support, and business solutions for small businesses in TN & Bengaluru.
            </p>
            <GoogleRating />
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ alignSelf: 'start' }}>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', transition: 'var(--transition)' }}>Home</Link></li>
              <li><Link to="/services" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', transition: 'var(--transition)' }}>Services</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', transition: 'var(--transition)' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', transition: 'var(--transition)' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div style={{ alignSelf: 'start' }}>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Our Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>GST & Tax Support</li>
              <li style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>IT Support & Setup</li>
              <li style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Cloud Solutions</li>
              <li style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Websites & SEO</li>
            </ul>
          </div>

          {/* Column 4: Contact & Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignSelf: 'start' }}>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Contact Info</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="tel:+919498856100" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', textDecoration: 'none' }}>
                <Phone size={16} style={{ color: 'var(--primary)' }} /> +91 94988 56100
              </a>
              <a href="mailto:vtconsulting.in@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', textDecoration: 'none' }}>
                <Mail size={16} style={{ color: 'var(--primary)' }} /> vtconsulting.in@gmail.com
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem' }}>
              <div>
                <h5 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={15} style={{ color: 'var(--primary)' }} /> Tamil Nadu (Harur)
                </h5>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  Administrative Office, 5/1B16, Harur, TN 636903
                </p>
              </div>
              <div>
                <h5 style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={15} style={{ color: 'var(--primary)' }} /> Bengaluru (E-City)
                </h5>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  1219, Kammasandra, Electronic City, BLR 560099
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.4)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>Serving 50+ clients across Tamil Nadu & Bengaluru</span>
            <p style={{ marginTop: '0.25rem' }}>© 2021 – 2026 VT Business Support. All rights reserved.</p>
          </div>
          <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>"Crafting Business Excellence in TN & Karnataka"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
