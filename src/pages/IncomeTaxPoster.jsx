import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Phone, Globe, Download, Check, Loader2 } from 'lucide-react';
import VTLogo from '../assets/VTlogo.svg';
import './income-tax-poster.css';

/**
 * EDITABLE POSTER CONSTANTS
 * Modify these fields to change the poster content.
 */
const posterData = {
  badge: "INCOME TAX FILING 2026",
  titleLine1: "Income Tax Return",
  titleLine2: "Made Simple",
  subtitle: "Professional Income Tax Filing Support for Salaried Employees, Freelancers, Professionals, Business Owners, and Companies.",
  highlights: [
    "Salaried Employee ITR Filing",
    "Freelancer & Professional Tax Filing",
    "Capital Gains & Investment Reporting",
    "Business & Proprietor Returns",
    "Company Income Tax Support",
    "Expert Tax Guidance"
  ],
  ctaText: "Talk to VT Business Support",
  phone: "+91 89250 63980",
  website: "vtbusinesssupport.in",
  trustLine: "Serving Individuals & Businesses Across India"
};

const IncomeTaxPoster = () => {
  const posterRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!posterRef.current || isDownloading) return;

    setIsDownloading(true);
    const element = posterRef.current;

    // Save original styles
    const originalTransform = element.style.transform;
    const originalParentOverflow = element.parentElement ? element.parentElement.style.overflow : '';

    try {
      // 1. Temporarily reset transform to none so html2canvas renders the native 1080x1920 size
      element.style.transform = 'none';
      if (element.parentElement) {
        element.parentElement.style.overflow = 'visible';
      }

      // Small layout repaint pause
      await new Promise(resolve => setTimeout(resolve, 100));

      // 2. Render with html2canvas at scale: 2 (Retina quality 2160x3840 export)
      const canvas = await html2canvas(element, {
        scale: 2, // Ultra-sharp export resolution
        useCORS: true,
        backgroundColor: null,
        logging: false,
        width: 1080,
        height: 1920
      });

      // 3. Instantly restore original scale style
      element.style.transform = originalTransform;
      if (element.parentElement) {
        element.parentElement.style.overflow = originalParentOverflow;
      }

      // Export as PNG
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'income-tax-filing-2026.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Revert styles on failure
      element.style.transform = originalTransform;
      if (element.parentElement) {
        element.parentElement.style.overflow = originalParentOverflow;
      }
      console.error('Failed to export poster as image:', error);
      alert('Failed to download the poster. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="poster-page-wrapper">
      {/* Top Controls Workspace */}
      <div className="poster-header-controls">
        <div className="poster-title-area">
          <h1>Income Tax Poster Generator</h1>
          <p>
            This is a temporary utility page for generating high-resolution Income Tax status/story posters.
            To change any text, edit the <code>posterData</code> constant inside <code>IncomeTaxPoster.jsx</code>.
          </p>
        </div>
        <button 
          onClick={handleDownload} 
          className="poster-download-btn"
          disabled={isDownloading}
        >
          {isDownloading ? (
            <>
              <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
              Generating PNG...
            </>
          ) : (
            <>
              <Download size={18} />
              Download Poster (1080 × 1920)
            </>
          )}
        </button>
      </div>

      {/* Scaled Device Preview Wrapper */}
      <div className="poster-preview-container">
        
        {/* The Native 1080x1920 Canvas (Captures clean image) */}
        <div 
          ref={posterRef} 
          className="poster-canvas"
          id="income-tax-poster-canvas"
        >
          {/* Background Ornaments */}
          <div className="poster-glow-top"></div>
          <div className="poster-glow-bottom"></div>
          <div className="poster-grid-overlay"></div>
          
          {/* Double Frame Borders */}
          <div className="poster-border-frame">
            <div className="poster-border-frame-inner"></div>
          </div>

          {/* 1. Header Section */}
          <header className="poster-header">
            <div className="poster-logo-container">
              <img src={VTLogo} alt="VT Business Support" className="poster-logo" />
            </div>
            <div className="poster-badge">
              {posterData.badge}
            </div>
          </header>

          {/* 2. Body Section */}
          <main className="poster-body">
            <div className="poster-headings">
              <h2 className="poster-main-title">
                {posterData.titleLine1}
                <span>{posterData.titleLine2}</span>
              </h2>
              <p className="poster-sub-title">
                {posterData.subtitle}
              </p>
            </div>

            {/* Checkbox Highlights Card */}
            <div className="poster-highlights-card">
              {posterData.highlights.map((highlight, index) => (
                <div key={index} className="poster-highlight-item">
                  <div className="poster-check-icon">
                    <Check size={26} strokeWidth={3} />
                  </div>
                  <span className="poster-highlight-text">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Professional Compliance Dashboard SVG Illustration */}
            <div className="poster-illustration-container">
              <svg 
                viewBox="0 0 600 350" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="poster-illustration-svg"
              >
                <defs>
                  <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                  <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4A3FE0" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#5B4DFF" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.35" />
                  </filter>
                </defs>

                {/* Grid backdrop */}
                <g opacity="0.12">
                  <line x1="50" y1="50" x2="550" y2="50" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line x1="50" y1="120" x2="550" y2="120" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line x1="50" y1="190" x2="550" y2="190" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line x1="50" y1="260" x2="550" y2="260" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line x1="120" y1="50" x2="120" y2="260" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="240" y1="50" x2="240" y2="260" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="360" y1="50" x2="360" y2="260" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="480" y1="50" x2="480" y2="260" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                </g>

                {/* Flowing trend line showing tax efficiency / financial growth */}
                <path d="M 50 240 C 150 240 220 120 350 120 C 440 120 490 80 550 80" fill="none" stroke="url(#greenGrad)" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                <circle cx="550" cy="80" r="8" fill="#10B981" />

                {/* Back Document Sheet */}
                <rect x="230" y="80" width="130" height="170" rx="10" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" transform="rotate(-6 295 165)" />
                
                {/* Middle Document Sheet (ITR Form representation) */}
                <g transform="rotate(-3 295 165)" filter="url(#shadow)">
                  <rect x="240" y="75" width="130" height="170" rx="10" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />
                  <rect x="260" y="100" width="90" height="6" rx="3" fill="rgba(255, 255, 255, 0.6)" />
                  <rect x="260" y="115" width="60" height="6" rx="3" fill="rgba(255, 255, 255, 0.4)" />
                  <rect x="260" y="130" width="80" height="6" rx="3" fill="rgba(255, 255, 255, 0.4)" />
                  <line x1="260" y1="160" x2="350" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <circle cx="270" cy="190" r="12" fill="rgba(16, 185, 129, 0.2)" />
                  <path d="M 265 190 L 269 194 L 275 186" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                  <rect x="290" y="185" width="55" height="10" rx="5" fill="rgba(16, 185, 129, 0.2)" />
                </g>

                {/* Front Document Sheet: "ITR Filings" Card */}
                <g transform="translate(140, 150)" filter="url(#shadow)">
                  <rect width="160" height="85" rx="16" fill="rgba(13, 20, 38, 0.9)" stroke="rgba(74, 63, 224, 0.4)" strokeWidth="2" />
                  <rect x="15" y="15" width="36" height="36" rx="8" fill="rgba(74, 63, 224, 0.2)" stroke="rgba(74, 63, 224, 0.4)" strokeWidth="1" />
                  <circle cx="33" cy="27" r="5" fill="#a39cf9" />
                  <path d="M 24 41 C 24 36 28 34 33 34 C 38 34 42 36 42 41" fill="none" stroke="#a39cf9" strokeWidth="2.2" strokeLinecap="round" />
                  <text x="62" y="32" fill="#FFFFFF" fontSize="13" fontFamily="'Outfit', sans-serif" fontWeight="700">ITR Filings</text>
                  <text x="62" y="47" fill="#10B981" fontSize="12" fontFamily="'Inter', sans-serif" fontWeight="600">Form 16 / Salary</text>
                  <text x="15" y="70" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="'Inter', sans-serif">STATUS: READY TO SUBMIT</text>
                </g>

                {/* Audits & Security Compliance Shield */}
                <g transform="translate(390, 70)" filter="url(#shadow)">
                  <rect width="140" height="95" rx="16" fill="rgba(13, 20, 38, 0.9)" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="2" />
                  <circle cx="35" cy="45" r="20" fill="rgba(245, 158, 11, 0.1)" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1" />
                  <path d="M 29 39 L 35 36 L 41 39 C 41 45 35 49 35 49 C 35 49 29 45 29 39 Z" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" />
                  <text x="65" y="38" fill="#FFFFFF" fontSize="13" fontFamily="'Outfit', sans-serif" fontWeight="700">Tax Audits</text>
                  <text x="65" y="55" fill="#F59E0B" fontSize="14" fontFamily="'Outfit', sans-serif" fontWeight="800">100% Secure</text>
                  <text x="65" y="68" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="'Inter', sans-serif">Sec. 44AB Compliant</text>
                </g>

                {/* Floating Calculator Icon representing tax optimization */}
                <g transform="translate(370, 210)" filter="url(#shadow)">
                  <circle cx="20" cy="20" r="22" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" />
                  <rect x="12" y="11" width="16" height="18" rx="2" stroke="#10B981" strokeWidth="2" />
                  <line x1="15" y1="15" x2="25" y2="15" stroke="#10B981" strokeWidth="2" />
                  <circle cx="16" cy="21" r="1" fill="#10B981" stroke="#10B981" strokeWidth="0.5" />
                  <circle cx="20" cy="21" r="1" fill="#10B981" stroke="#10B981" strokeWidth="0.5" />
                  <circle cx="24" cy="21" r="1" fill="#10B981" stroke="#10B981" strokeWidth="0.5" />
                  <circle cx="16" cy="25" r="1" fill="#10B981" stroke="#10B981" strokeWidth="0.5" />
                  <circle cx="20" cy="25" r="1" fill="#10B981" stroke="#10B981" strokeWidth="0.5" />
                  <circle cx="24" cy="25" r="1" fill="#10B981" stroke="#10B981" strokeWidth="0.5" />
                </g>
              </svg>
            </div>
          </main>

          {/* 3. Footer Section */}
          <footer className="poster-footer">
            <div className="poster-cta-banner">
              <span className="poster-cta-text">{posterData.ctaText}</span>
              
              <div className="poster-phone-block">
                <span className="poster-phone-icon">
                  <Phone size={42} fill="#10B981" stroke="none" />
                </span>
                <span className="poster-phone-number">{posterData.phone}</span>
              </div>
              
              <div className="poster-website-block">
                <span className="poster-web-icon">
                  <Globe size={26} />
                </span>
                <span>{posterData.website}</span>
              </div>
            </div>
            {/* Trust Line */}
            <div className="poster-trust-line">
              {posterData.trustLine}
            </div>
          </footer>
        </div>

      </div>
    </div>
  );
};

export default IncomeTaxPoster;
