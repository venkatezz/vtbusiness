import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, FileText, Calculator, BookOpen, Monitor, Globe, Cloud, ArrowRight } from 'lucide-react';
import VTLogo from '../assets/VTlogo.svg';

/* ─── Services mega-dropdown data ─────────────────────────────── */
const serviceGroups = [
  {
    label: 'GST & Finance',
    accent: '#4A3FE0',
    items: [
      { icon: <FileText size={16} />, title: 'GST Filing', sub: 'GSTR-1, GSTR-3B, ITC matching' },
      { icon: <Calculator size={16} />, title: 'Income Tax Filing', sub: 'ITR · capital gains · deductions' },
      { icon: <BookOpen size={16} />, title: 'Accounting & Bookkeeping', sub: 'Monthly ledger · P&L · balance sheet' },
    ],
  },
  {
    label: 'IT & Digital',
    accent: '#10B981',
    items: [
      { icon: <Monitor size={16} />, title: 'IT Support', sub: 'Office setup · networking · SLA' },
      { icon: <Globe size={16} />, title: 'Website Development', sub: 'React sites · SEO · landing pages' },
      { icon: <Cloud size={16} />, title: 'Cloud & Server Setup', sub: 'AWS · Linux · VPS provisioning' },
    ],
  },
];

/* ─── Header component ─────────────────────────────────────────── */
const Header = () => {
  const [isOpen, setIsOpen]         = useState(false);   // mobile drawer
  const [scrolled, setScrolled]     = useState(false);   // scroll state
  const [dropOpen, setDropOpen]     = useState(false);   // desktop services dropdown
  const [mobileServOpen, setMobileServOpen] = useState(false); // mobile services accordion
  const dropRef = useRef(null);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Click-outside closes desktop dropdown */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeDrawer = () => { setIsOpen(false); setMobileServOpen(false); };

  return (
    <header className={`nh-header ${scrolled ? 'nh-scrolled' : ''}`}>
      <div className="nh-inner container">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="nh-logo-link"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={VTLogo} alt="VT Business Support" className="nh-logo-img" />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="nh-desktop-nav" aria-label="Main navigation">

          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nh-link ${isActive ? 'nh-link--active' : ''}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </NavLink>

          {/* Services — with dropdown */}
          <div className="nh-drop-root" ref={dropRef}>
            <button
              className={`nh-link nh-link--btn ${dropOpen ? 'nh-link--active' : ''}`}
              aria-haspopup="true"
              aria-expanded={dropOpen}
              onClick={() => setDropOpen((v) => !v)}
              onMouseEnter={() => setDropOpen(true)}
            >
              Services
              <ChevronDown size={14} className={`nh-chevron ${dropOpen ? 'nh-chevron--open' : ''}`} />
            </button>

            {/* Dropdown panel */}
            <div
              className={`nh-dropdown ${dropOpen ? 'nh-dropdown--open' : ''}`}
              onMouseLeave={() => setDropOpen(false)}
              role="menu"
            >
              <div className="nh-drop-grid">
                {serviceGroups.map((group) => (
                  <div key={group.label} className="nh-drop-group">
                    <p className="nh-drop-group-label" style={{ color: group.accent }}>
                      {group.label}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.title}
                        to="/services"
                        className="nh-drop-item"
                        onClick={() => { setDropOpen(false); window.scrollTo(0, 0); }}
                        role="menuitem"
                      >
                        <span className="nh-drop-item-icon" style={{ background: `${group.accent}15`, color: group.accent }}>
                          {item.icon}
                        </span>
                        <span className="nh-drop-item-text">
                          <span className="nh-drop-item-title">{item.title}</span>
                          <span className="nh-drop-item-sub">{item.sub}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              {/* Dropdown footer */}
              <div className="nh-drop-footer">
                <Link
                  to="/services"
                  className="nh-drop-footer-link"
                  onClick={() => { setDropOpen(false); window.scrollTo(0, 0); }}
                >
                  View all services <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) => `nh-link ${isActive ? 'nh-link--active' : ''}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            About
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) => `nh-link ${isActive ? 'nh-link--active' : ''}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact
          </NavLink>

          {/* CTA */}
          <Link to="/contact" className="nh-cta" onClick={() => window.scrollTo(0, 0)}>
            Free Consultation
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          className="nh-hamburger"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile overlay ── */}
      <div
        className={`nh-overlay ${isOpen ? 'nh-overlay--open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <div className={`nh-drawer ${isOpen ? 'nh-drawer--open' : ''}`} aria-label="Mobile navigation">
        {/* Drawer header */}
        <div className="nh-drawer-top">
          <img src={VTLogo} alt="VT Business Support" className="nh-logo-img nh-logo-mobile" />
          <button className="nh-hamburger" onClick={closeDrawer} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        {/* Mobile links */}
        <nav className="nh-drawer-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nh-mob-link ${isActive ? 'nh-mob-link--active' : ''}`}
            onClick={closeDrawer}
          >
            Home
          </NavLink>

          {/* Services accordion */}
          <div className="nh-mob-acc">
            <button
              className="nh-mob-link nh-mob-acc-btn"
              onClick={() => setMobileServOpen((v) => !v)}
            >
              Services
              <ChevronDown size={16} className={`nh-chevron ${mobileServOpen ? 'nh-chevron--open' : ''}`} />
            </button>

            <div className={`nh-mob-acc-panel ${mobileServOpen ? 'nh-mob-acc-panel--open' : ''}`}>
              {serviceGroups.map((group) => (
                <div key={group.label} className="nh-mob-group">
                  <p className="nh-mob-group-label" style={{ color: group.accent }}>{group.label}</p>
                  {group.items.map((item) => (
                    <Link
                      key={item.title}
                      to="/services"
                      className="nh-mob-sub-link"
                      onClick={closeDrawer}
                    >
                      <span className="nh-drop-item-icon" style={{ background: `${group.accent}15`, color: group.accent }}>
                        {item.icon}
                      </span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

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

        {/* Drawer CTA */}
        <div className="nh-drawer-footer">
          <Link to="/contact" className="nh-cta nh-cta--full" onClick={closeDrawer}>
            Free Consultation
          </Link>
          <a href="tel:+918925063980" className="nh-mob-tel">
            📞 +91 89250 63980
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
