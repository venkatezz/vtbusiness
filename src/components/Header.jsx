import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      width: '100%'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        height: '80px'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>VT</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-main)' }}> Consulting</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              style={({ isActive }) => ({
                fontWeight: 500,
                color: isActive ? 'var(--primary)' : 'var(--text-main)',
                borderBottom: isActive ? '2px solid var(--primary)' : 'none',
                paddingBottom: '4px'
              })}
            >
              {link.title}
            </NavLink>
          ))}
          <a href="tel:+919876543210" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Phone size={18} />
             Call Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} style={{ display: 'none' }} className="mobile-toggle">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          padding: '1rem 1.5rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                fontWeight: 500,
                color: isActive ? 'var(--primary)' : 'var(--text-main)',
                fontSize: '1.1rem'
              })}
            >
              {link.title}
            </NavLink>
          ))}
          <a href="tel:+919876543210" className="btn btn-primary" style={{ padding: '0.8rem', width: '100%' }}>
            Call Now
          </a>
        </div>
      )}


    </header>
  );
};

export default Header;
