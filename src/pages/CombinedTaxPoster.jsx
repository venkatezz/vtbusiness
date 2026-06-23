import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Phone, Globe, Download, Check, Loader2 } from 'lucide-react';
import VTLogo from '../assets/VTlogo.svg';
import './combined-tax-poster.css';

/**
 * EDITABLE POSTER CONSTANTS
 * Modify these fields to change the poster content.
 */
const posterData = {
  badge: "GST & INCOME TAX FILING 2026",
  titleLine1: "Tax Filing",
  titleLine2: "Made Simple",
  subtitle: "Professional GST & Income Tax Filing Support for Individuals, Freelancers, Professionals, Businesses, and Companies Across India.",
  highlights: [
    "GST Return Filing",
    "Income Tax Return Filing",
    "GST Registration Support",
    "Salaried Employee ITR Filing",
    "Business & Company Tax Compliance",
    "Expert Tax Guidance"
  ],
  trustBadges: [
    "Professional Support",
    "Timely Filing",
    "Secure Documentation"
  ],
  ctaText: "TALK TO VT BUSINESS SUPPORT",
  phone: "+91 89250 63980",
  website: "vtbusinesssupport.in", // Specific domain request
  trustLine: "Serving Individuals & Businesses Across India"
};

const CombinedTaxPoster = () => {
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
      link.download = 'gst-income-tax-filing-2026.png';
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
          <h1>Flagship Combined Poster Generator</h1>
          <p>
            This is a temporary utility page for generating the flagship GST &amp; Income Tax combined poster.
            To modify any content, edit the <code>posterData</code> constant inside <code>CombinedTaxPoster.jsx</code>.
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
          id="combined-tax-poster-canvas"
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

            {/* Integrated Tax SVG Illustration */}
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
                  <linearGradient id="violetGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4A3FE0" />
                    <stop offset="100%" stopColor="#5B4DFF" />
                  </linearGradient>
                  <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <filter id="shadow" x="-25%" y="-25%" width="150%" height="150%">
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

                {/* Two rising metrics curves intersecting (GST + ITR synergy) */}
                <path d="M 50 250 Q 180 200 300 130 T 500 70" fill="none" stroke="url(#violetGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
                <path d="M 50 210 Q 150 180 320 120 T 520 85" fill="none" stroke="url(#greenGrad)" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                <circle cx="520" cy="85" r="8" fill="#10B981" />

                {/* Core Plaque: Unified Compliance Seal / Shield */}
                <g transform="translate(250, 100)" filter="url(#shadow)">
                  <circle cx="50" cy="50" r="48" fill="rgba(13, 20, 38, 0.95)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="38" fill="rgba(74, 63, 224, 0.08)" stroke="url(#shieldGrad)" strokeWidth="2.5" strokeDasharray="6 3" />
                  {/* Lock/Security Icon inside seal */}
                  <path d="M 42 52 L 42 45 C 42 40 45 37 50 37 C 55 37 58 40 58 45 L 58 52 M 38 52 L 62 52 L 62 65 L 38 65 Z" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" />
                </g>

                {/* Left Card: GST Filing Node */}
                <g transform="translate(90, 80)" filter="url(#shadow)">
                  <rect width="170" height="80" rx="16" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(74, 63, 224, 0.4)" strokeWidth="2" />
                  <rect x="15" y="15" width="30" height="30" rx="8" fill="rgba(74, 63, 224, 0.2)" stroke="rgba(74, 63, 224, 0.4)" strokeWidth="1" />
                  <path d="M 21 30 L 25 34 L 33 24" fill="none" stroke="#5B4DFF" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="56" y="30" fill="#FFFFFF" fontSize="13" fontFamily="'Outfit', sans-serif" fontWeight="700">GST Return</text>
                  <text x="56" y="44" fill="#a39cf9" fontSize="11" fontFamily="'Inter', sans-serif" fontWeight="600">GSTR-1 &amp; 3B Filed</text>
                  <line x1="15" y1="58" x2="155" y2="58" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <text x="15" y="70" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="'Inter', sans-serif">COMPLIANCE CODE: ACTIVE</text>
                </g>

                {/* Right Card: Income Tax Node */}
                <g transform="translate(350, 170)" filter="url(#shadow)">
                  <rect width="170" height="80" rx="16" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" />
                  <rect x="15" y="15" width="30" height="30" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" />
                  <path d="M 21 30 L 25 34 L 33 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="56" y="30" fill="#FFFFFF" fontSize="13" fontFamily="'Outfit', sans-serif" fontWeight="700">Income Tax</text>
                  <text x="56" y="44" fill="#10B981" fontSize="11" fontFamily="'Inter', sans-serif" fontWeight="600">ITR-1 to ITR-7 Ready</text>
                  <line x1="15" y1="58" x2="155" y2="58" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <text x="15" y="70" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="'Inter', sans-serif">ITR AUDIT ASSURANCE: 100%</text>
                </g>

                {/* Bottom Trust Seal Node (Professional Guidance) */}
                <g transform="translate(140, 200)">
                  <circle cx="20" cy="20" r="22" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.3)" strokeWidth="1.5" />
                  {/* Star polygon representing expert rating / compliance */}
                  <path d="M 20 10 L 23 16 L 30 17 L 25 22 L 26 29 L 20 25 L 14 29 L 15 22 L 10 17 L 17 16 Z" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </main>

          {/* 3. Footer Section */}
          <footer className="poster-footer">
            
            {/* Trust Strip Badge Bar */}
            <div className="poster-trust-strip">
              {posterData.trustBadges.map((badgeText, index) => (
                <div key={index} className="poster-trust-strip-item">
                  <span className="poster-trust-strip-check">
                    <Check size={22} strokeWidth={3} />
                  </span>
                  <span>{badgeText}</span>
                </div>
              ))}
            </div>

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

export default CombinedTaxPoster;
