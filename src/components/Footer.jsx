import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, CheckCircle } from 'lucide-react';
import GoogleRating from './GoogleRating';
import VTLogo from '../assets/VTlogo.svg';

const Footer = () => {
  return (
    <footer style={{
      background: 'radial-gradient(circle at 10% 20%, rgba(74, 63, 224, 0.06), transparent 45%), linear-gradient(180deg, hsl(224, 71%, 7%) 0%, hsl(224, 71%, 4%) 100%)',
      color: 'white',
      padding: '52px 0 28px',
      marginTop: 'auto',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Visual Accent Top Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: 'linear-gradient(to right, var(--primary), var(--secondary))'
      }} />

      <div className="container">
        <div className="grid-responsive" style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 0.9fr 1fr 1fr 1.5fr',
          gap: '3rem',
          alignItems: 'start',
          marginBottom: '50px'
        }}>

          {/* Column 1: Brand & Google Rating */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={VTLogo}
                alt="VT Business Support Logo"
                className="logo-footer"
                style={{ filter: 'brightness(0) invert(1)', maxHeight: '48px', width: 'auto' }}
              />
            </Link>
            <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '320px' }}>
              Reliable GST filing, income tax, ROC compliance,
              bookkeeping, and IT support services for startups,
              small businesses, freelancers, and growing companies
              across Tamil Nadu & Bengaluru.
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <GoogleRating />
            </div>
          </div>

         {/* Column 2: Navigations */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>

            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                listStyle: 'none'
              }}
            >
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services" className="footer-link">
                  Explore Services
                </Link>
              </li>

              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="footer-link">
                  Talk to Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Segments */}
          <div>
            <h4 className="footer-heading">GST & TAX Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', listStyle: 'none' }}>

            <li>
              <Link
                to="/services/gst-filing"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <CheckCircle size={12} style={{ color: 'var(--primary-hover)' }} />
                <span>GST Filing</span>
              </Link>
            </li>

            <li>
              <Link
                to="/services/income-tax"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <CheckCircle size={12} style={{ color: 'var(--primary-hover)' }} />
                <span>Income Tax Filing</span>
              </Link>
            </li>

            <li>
              <Link
                to="/services/accounting-bookkeeping"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <CheckCircle size={12} style={{ color: 'var(--primary-hover)' }} />
                <span>Accounting & Bookkeeping</span>
              </Link>
            </li>

            <li>
              <Link
                to="/services/roc-compliance"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <CheckCircle size={12} style={{ color: 'var(--primary-hover)' }} />
                <span>ROC Compliance</span>
              </Link>
            </li>

            <li>
              <Link
                to="/services/tds-filing"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <CheckCircle size={12} style={{ color: 'var(--primary-hover)' }} />
                <span>TDS Filing</span>
              </Link>
            </li>

          </ul>
          </div>

          {/* Column 4: IT Services */}
          <div>
            <h4 className="footer-heading">IT Services</h4>

            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                listStyle: 'none'
              }}
            >

              <li>
                <Link
                  to="/services/it-support"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}
                >
                  <CheckCircle size={12} style={{ color: 'var(--secondary)', marginTop: '4px' }} />
                  <span>IT Support</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/services/website-development"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}
                >
                  <CheckCircle size={12} style={{ color: 'var(--secondary)', marginTop: '4px' }} />
                  <span>Website Development</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/services/cloud-server-setup"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}
                >
                  <CheckCircle size={12} style={{ color: 'var(--secondary)', marginTop: '4px' }} />
                  <span>Cloud & Server Setup</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/services/business-email-setup"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}
                >
                  <CheckCircle size={12} style={{ color: 'var(--secondary)', marginTop: '4px' }} />
                  <span>Business Email Setup</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/services/aws-linux-support"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}
                >
                  <CheckCircle size={12} style={{ color: 'var(--secondary)', marginTop: '4px' }} />
                  <span>AWS & Linux Support</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/services/technical-consulting"
                  className="footer-link"
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}
                >
                  <CheckCircle size={12} style={{ color: 'var(--secondary)', marginTop: '4px' }} />
                  <span>Technical Consulting</span>
                </Link>
              </li>

            </ul>
          </div>
          {/* Column 4: Contact & Coordinates */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 className="footer-heading">Contact Information</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+918925063980" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}>
                <Phone size={15} style={{ color: 'var(--secondary)' }} />
                <span>+91 89250 63980</span>
              </a>
              <a href="mailto:vtconsulting.in@gmail.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={15} style={{ color: 'var(--primary-hover)' }} />
                <span>vtconsulting.in@gmail.com</span>
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              <div className="footer-address-block">
                <h5 style={{ color: 'white', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} style={{ color: 'var(--primary-hover)' }} />
                  <span>Tamil Nadu Office</span>
                </h5>
                <p style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.8rem', lineHeight: 1.4 }}>
                  Administrative Office, 5/1B16, Harur Town, Dharmapuri, TN - 636903
                </p>
              </div>

              <div className="footer-address-block">
                <h5 style={{ color: 'white', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} style={{ color: 'var(--secondary)' }} />
                  <span>Bengaluru Office</span>
                </h5>
                <p style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.8rem', lineHeight: 1.4 }}>
                  #79, 3rd Floor, Phase 1, Electronic City, Bengaluru, KA - 560100
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & details */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '30px',
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.45)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={16} style={{ color: 'var(--secondary)' }} />
            <span>Trusted Business Compliance & IT Support Partner</span>
          </div>
          <p>© 2021 – 2026 VT Business Support. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
