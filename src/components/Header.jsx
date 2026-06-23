import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown,
  FileText, Calculator, BookOpen, ClipboardList, Receipt,
  Monitor, Globe, Cloud, Mail, Server,
  ArrowRight, LayoutGrid,
  Briefcase, Building2
} from 'lucide-react';
import VTLogo from '../assets/VTlogo.svg';

/* ─── Nav data ─────────────────────────────────────────────────── */
const gstTaxItems = [
  { icon: <Building2 size={15} />,    title: 'Company Registration',     sub: 'Start your business with the right structure', to: '/services/company-registration' },
  { icon: <FileText size={15} />,     title: 'GST Filing',              sub: 'GSTR-1 · GSTR-3B · ITC Matching',          to: '/services/gst-filing' },
  { icon: <Calculator size={15} />,   title: 'Income Tax Filing',       sub: 'ITR-1 to ITR-7 · Tax Audits · Deductions', to: '/services/income-tax' },
  { icon: <BookOpen size={15} />,     title: 'Accounting & Bookkeeping',sub: 'P&L · Balance Sheets · Audits',             to: '/services/accounting-bookkeeping' },
  { icon: <ClipboardList size={15} />,title: 'ROC Compliance',          sub: 'Annual Filings · Director KYC · MCA',       to: '/services/roc-compliance' },
  { icon: <Receipt size={15} />,      title: 'TDS Filing',              sub: '24Q · 26Q · TDS Returns & Certificates',    to: '/services/tds-filing' },
];

const itServiceItems = [
  { icon: <Monitor size={15} />,      title: 'IT Support',              sub: 'Office Setup · Networking · Active Directory', to: '/services/it-support' },
  { icon: <Globe size={15} />,        title: 'Website Development',     sub: 'Custom React Sites · SEO · Speed',             to: '/services/website-development' },
  { icon: <Cloud size={15} />,        title: 'Cloud & Server Setup',    sub: 'AWS · Linux VPS · Security & Backups',         to: '/services/cloud-server-setup' },
  { icon: <Mail size={15} />,         title: 'Business Email Setup',    sub: 'Google Workspace · Microsoft 365',             to: '/services/business-email-setup' },
  { icon: <Server size={15} />,       title: 'AWS / Linux Support',     sub: 'EC2 · S3 · RDS · Server Hardening',           to: '/services/aws-linux-support' },
  { icon: <Briefcase size={15} />,       title: 'Technical Consulting',     sub: 'Business IT Guidance · Infrastructure Planning',           to: '/services/technical-consulting' },
  
];

const GST_ACCENT = '#4A3FE0';
const IT_ACCENT  = '#10B981';

/* ─── Reusable dropdown hook ───────────────────────────────────── */
function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return { open, setOpen, ref };
}

/* ─── ServiceDropdown component ────────────────────────────────── */
const ServiceDropdown = ({ items, accent, onClose }) => {
  const HALF = Math.ceil(items.length / 2);
  const col1 = items.slice(0, HALF);
  const col2 = items.slice(HALF);

  return (
    <div className="nh-drop-grid">
      <div className="nh-drop-group">
        {col1.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="nh-drop-item"
            onClick={onClose}
          >
            <span
              className="nh-drop-item-icon"
              style={{ '--icon-bg': `${accent}18`, '--icon-color': accent }}
            >
              {item.icon}
            </span>
            <span className="nh-drop-item-text">
              <span className="nh-drop-item-title">{item.title}</span>
              <span className="nh-drop-item-sub">{item.sub}</span>
            </span>
          </Link>
        ))}
      </div>
      <div className="nh-drop-divider" />
      <div className="nh-drop-group">
        {col2.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="nh-drop-item"
            onClick={onClose}
          >
            <span
              className="nh-drop-item-icon"
              style={{ '--icon-bg': `${accent}18`, '--icon-color': accent }}
            >
              {item.icon}
            </span>
            <span className="nh-drop-item-text">
              <span className="nh-drop-item-title">{item.title}</span>
              <span className="nh-drop-item-sub">{item.sub}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

/* ─── MobileAccordion component ────────────────────────────────── */
const MobileAccordion = ({ label, accent, items, onClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nh-mob-acc">
      <button
        className="nh-mob-link nh-mob-acc-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={16} className={`nh-chevron ${open ? 'nh-chevron--open' : ''}`} />
      </button>
      <div className={`nh-mob-acc-panel ${open ? 'nh-mob-acc-panel--open' : ''}`}>
        <div className="nh-mob-group">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="nh-mob-sub-link"
              onClick={onClose}
            >
              <span
                className="nh-drop-item-icon"
                style={{ '--icon-bg': `${accent}18`, '--icon-color': accent }}
              >
                {item.icon}
              </span>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Header ───────────────────────────────────────────────────── */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // The Home page '/' and service sub-pages (e.g. '/services/company-registration') are light pages.
  const isLightPage = location.pathname === '/' || (location.pathname.startsWith('/services/') && location.pathname !== '/services');

  const { open: gstOpen, setOpen: setGstOpen, ref: gstRef } = useDropdown();
  const { open: itOpen, setOpen: setItOpen, ref: itRef } = useDropdown();

  const openGst = () => { setGstOpen(true); setItOpen(false); };
  const openIt = () => { setItOpen(true); setGstOpen(false); };

  const closeAll = () => {
    setGstOpen(false);
    setItOpen(false);
  };

  const closeDrawer = () => setIsOpen(false);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Body scroll lock for mobile drawer - FIXED VERSION */
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.classList.add('nh-menu-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.classList.remove('nh-menu-open');
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.classList.remove('nh-menu-open');
    };
  }, [isOpen]);

  return (
    <>
      <header className={`nh-header ${scrolled ? 'nh-scrolled' : ''} ${isLightPage ? 'nh-header-light' : ''}`}>
        <div className="nh-inner container">
          {/* Logo */}
          <Link to="/" className="nh-logo-link" onClick={() => { window.scrollTo(0, 0); closeAll(); }}>
            <img src={VTLogo} alt="VT Business Support" className="nh-logo-img" />
          </Link>

          {/* Desktop Nav */}
          <nav className="nh-desktop-nav" aria-label="Main navigation">
           

            {/* GST & Tax Dropdown */}
            <div 
              className="nh-drop-root" 
              ref={gstRef}
              onMouseEnter={openGst}
              onMouseLeave={() => setGstOpen(false)}
            >
              <button
                className={`nh-link nh-link--btn ${gstOpen ? 'nh-link--active' : ''}`}
                aria-haspopup="true"
                aria-expanded={gstOpen}
                onClick={() => setGstOpen((v) => !v)}
              >
                GST &amp; Tax
                <ChevronDown size={13} className={`nh-chevron ${gstOpen ? 'nh-chevron--open' : ''}`} />
              </button>

              <div className={`nh-dropdown ${gstOpen ? 'nh-dropdown--open' : ''}`}>
                <div className="nh-drop-header">
                  <span className="nh-drop-header-icon" style={{ '--icon-bg': `${GST_ACCENT}18`, '--icon-color': GST_ACCENT }}>
                    <LayoutGrid size={13} />
                  </span>
                  <span className="nh-drop-header-label">GST &amp; Finance Services</span>
                </div>

                <ServiceDropdown items={gstTaxItems} accent={GST_ACCENT} onClose={closeAll} />

                <div className="nh-drop-footer">
                  <Link to="/services" className="nh-drop-footer-link" onClick={closeAll}>
                    View all GST &amp; Tax services <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* IT Services Dropdown */}
            <div 
              className="nh-drop-root" 
              ref={itRef}
              onMouseEnter={openIt}
              onMouseLeave={() => setItOpen(false)}
            >
              <button
                className={`nh-link nh-link--btn ${itOpen ? 'nh-link--active' : ''}`}
                aria-haspopup="true"
                aria-expanded={itOpen}
                onClick={() => setItOpen((v) => !v)}
              >
                IT Services
                <ChevronDown size={13} className={`nh-chevron ${itOpen ? 'nh-chevron--open' : ''}`} />
              </button>

              <div className={`nh-dropdown ${itOpen ? 'nh-dropdown--open' : ''}`}>
                <div className="nh-drop-header">
                  <span className="nh-drop-header-icon" style={{ '--icon-bg': `${IT_ACCENT}18`, '--icon-color': IT_ACCENT }}>
                    <LayoutGrid size={13} />
                  </span>
                  <span className="nh-drop-header-label">IT &amp; Digital Services</span>
                </div>

                <ServiceDropdown items={itServiceItems} accent={IT_ACCENT} onClose={closeAll} />

                <div className="nh-drop-footer">
                  <Link to="/services" className="nh-drop-footer-link" onClick={closeAll}>
                    View all IT services <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/resources"
              className={({ isActive }) => `nh-link ${isActive ? 'nh-link--active' : ''}`}
              onClick={() => { window.scrollTo(0, 0); closeAll(); }}
              onMouseEnter={closeAll}
            >
              Resources
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `nh-link ${isActive ? 'nh-link--active' : ''}`}
              onClick={() => { window.scrollTo(0, 0); closeAll(); }}
              onMouseEnter={closeAll}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `nh-link ${isActive ? 'nh-link--active' : ''}`}
              onClick={() => { window.scrollTo(0, 0); closeAll(); }}
              onMouseEnter={closeAll}
            >
              Talk to Us
            </NavLink>

            <Link to="/contact" className="nh-cta" onClick={() => { window.scrollTo(0, 0); closeAll(); }}>
              Free Consultation
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="nh-hamburger"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay - outside header */}
      <div
        className={`nh-overlay ${isOpen ? 'nh-overlay--open' : ''}`}
        onClick={closeDrawer}
      />

      {/* Mobile drawer - outside header */}
      <div className={`nh-drawer ${isOpen ? 'nh-drawer--open' : ''}`}>
        <div className="nh-drawer-top">
          <img src={VTLogo} alt="VT Business Support" className="nh-logo-img nh-logo-mobile" />
          <button className="nh-hamburger" onClick={closeDrawer}>
            <X size={24} />
          </button>
        </div>

        <nav className="nh-drawer-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nh-mob-link ${isActive ? 'nh-mob-link--active' : ''}`}
            onClick={closeDrawer}
          >
            Home
          </NavLink>

          <MobileAccordion
            label="GST & Tax"
            accent={GST_ACCENT}
            items={gstTaxItems}
            onClose={closeDrawer}
          />

          <MobileAccordion
            label="IT Services"
            accent={IT_ACCENT}
            items={itServiceItems}
            onClose={closeDrawer}
          />

          <NavLink
            to="/resources"
            className={({ isActive }) => `nh-mob-link ${isActive ? 'nh-mob-link--active' : ''}`}
            onClick={closeDrawer}
          >
            Resources
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `nh-mob-link ${isActive ? 'nh-mob-link--active' : ''}`}
            onClick={closeDrawer}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `nh-mob-link ${isActive ? 'nh-mob-link--active' : ''}`}
            onClick={closeDrawer}
          >
            Contact
          </NavLink>
        </nav>

        <div className="nh-drawer-footer">
          <Link to="/contact" className="nh-cta nh-cta--full" onClick={closeDrawer}>
            Free Consultation
          </Link>
          <a href="tel:+918925063980" className="nh-mob-tel">
            +91 89250 63980
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;