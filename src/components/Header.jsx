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
    <header 
      className={`glass-nav ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'var(--transition)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: scrolled ? '0.8rem 1.5rem' : '1.2rem 1.5rem',
        height: scrolled ? '70px' : '90px',
        transition: 'var(--transition)'
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
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              style={({ isActive }) => ({
                fontWeight: 600,
                fontSize: '0.95rem',
                color: isActive ? 'var(--primary)' : 'var(--text-main)',
                position: 'relative',
                padding: '5px 0'
              })}
            >
              {({ isActive }) => (
                <>
                  {link.title}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '2px'
                    }} />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a href="tel:+919498856100" className="btn" style={{ padding: '0.7rem 1.5rem', borderRadius: '100px', backgroundColor: 'var(--dark)', color: 'white', border: 'none' }}>
             <Phone size={18} />
             <span>Call us</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="mobile-toggle" style={{ color: 'var(--dark)' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div style={{
        position: 'fixed',
        top: '0',
        right: isOpen ? '0' : '-100%',
        width: '80%',
        maxWidth: '280px',
        height: '100vh',
        backgroundColor: 'white',
        padding: '5rem 2rem',
        boxShadow: '-10px 0 30px rgba(8, 16, 40, 0.1)',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '2rem',
        transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1001
      }}>
        <button 
          onClick={toggleMenu} 
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--dark)' }}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => {
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
            style={({ isActive }) => ({
              fontWeight: 700,
              color: isActive ? 'var(--primary)' : 'var(--dark)',
              fontSize: '1.5rem'
            })}
          >
            {link.title}
          </NavLink>
        ))}
        <a href="tel:+919498856100" className="btn" style={{ marginTop: 'auto', padding: '1.2rem', backgroundColor: 'var(--dark)', color: 'white' }}>
          Call Now
        </a>
      </div>
      
      {isOpen && (
        <div 
          onClick={toggleMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 1000
          }}
        />
      )}
    </header>
  );
};

export default Header;

