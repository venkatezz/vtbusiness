import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import VTLogo from '../assets/VTlogo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: scrolled ? '70px' : '90px',
        transition: 'height 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img 
            src={VTLogo} 
            alt="VT Business Support Logo" 
            className="logo-header"
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.title}
            </NavLink>
          ))}
          <a href="tel:+918925063980" className="nav-cta-btn">
             <Phone size={16} />
             <span>Call Us</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="mobile-toggle" style={{ color: 'var(--dark)' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      />

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        <button 
          onClick={toggleMenu} 
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--dark)' }}
          className="mobile-toggle"
        >
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => {
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            {link.title}
          </NavLink>
        ))}
        <a href="tel:+918925063980" className="nav-cta-btn" style={{ marginTop: 'auto', justifyContent: 'center' }}>
          <Phone size={16} />
          <span>Call Now</span>
        </a>
      </div>
    </header>
  );
};

export default Header;

