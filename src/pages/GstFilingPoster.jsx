import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Phone, Globe, Download, Check, Loader2 } from 'lucide-react';
import VTLogo from '../assets/VTlogo.svg';
import './gst-filing-poster.css';

/**
 * EDITABLE POSTER CONSTANTS
 * Modify these fields to change the poster content.
 */
const posterData = {
  badge: "GST Filing Season 2026",
  titleLine1: "GST Return Filing",
  titleLine2: "Made Simple",
  subtitle: "Professional GST Filing & Compliance Support for Businesses Across India",
  highlights: [
    "Monthly & Quarterly GST Returns",
    "GST Registration Assistance",
    "GST Compliance Support",
    "Expert Guidance"
  ],
  ctaText: "Talk to VT Business Support",
  phone: "+91 89250 63980",
  website: "vtbusinesssupport.in"
};

const GstFilingPoster = () => {
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
      link.download = 'gst-filing-2026.png';
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
          <h1>GST Marketing Poster Generator</h1>
          <p>
            This is a temporary utility page for generating high-resolution WhatsApp and Instagram status poster images. 
            To change the text or contact information, edit the <code>posterData</code> constant inside 
            <code>GstFilingPoster.jsx</code>.
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
          id="gst-filing-poster-canvas"
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
                  <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4A3FE0" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#4A3FE0" stopOpacity="0.15" />
                  </linearGradient>
                  <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5B4DFF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#5B4DFF" stopOpacity="0.15" />
                  </linearGradient>
                  <linearGradient id="barGrad3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.15" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4A3FE0" />
                    <stop offset="50%" stopColor="#5B4DFF" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                  <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid backdrop */}
                <g opacity="0.15">
                  <line x1="50" y1="50" x2="550" y2="50" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line x1="50" y1="120" x2="550" y2="120" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line x1="50" y1="190" x2="550" y2="190" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line x1="50" y1="260" x2="550" y2="260" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="5 5" />
                  <line x1="120" y1="50" x2="120" y2="260" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="240" y1="50" x2="240" y2="260" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="360" y1="50" x2="360" y2="260" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="480" y1="50" x2="480" y2="260" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 3" />
                </g>

                {/* Horizontal Baseline */}
                <line x1="50" y1="260" x2="550" y2="260" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="3" strokeLinecap="round" />

                {/* Growth Bars (Tax filing milestones) */}
                <rect x="140" y="160" width="45" height="100" rx="8" fill="url(#barGrad1)" stroke="rgba(74, 63, 224, 0.4)" strokeWidth="2" />
                <rect x="260" y="110" width="45" height="150" rx="8" fill="url(#barGrad2)" stroke="rgba(91, 77, 255, 0.4)" strokeWidth="2" />
                <rect x="380" y="80" width="45" height="180" rx="8" fill="url(#barGrad3)" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" />

                {/* Upward trending line chart */}
                <path d="M 50 220 Q 180 180 300 120 T 500 70" fill="none" stroke="url(#lineGrad)" strokeWidth="8" strokeLinecap="round" filter="url(#glow)" />
                <circle cx="500" cy="70" r="10" fill="#10B981" filter="url(#glow)" />
                <circle cx="500" cy="70" r="5" fill="#FFFFFF" />

                {/* GSTR Card */}
                <g transform="translate(80, 50)" opacity="0.95">
                  <rect width="180" height="60" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
                  <rect x="15" y="15" width="30" height="30" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1" />
                  <path d="M 22 29 L 27 34 L 37 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="60" y="32" fill="#FFFFFF" fontSize="15" fontFamily="'Outfit', sans-serif" fontWeight="700">GSTR-1 Filed</text>
                  <text x="60" y="48" fill="#10B981" fontSize="12" fontFamily="'Inter', sans-serif" fontWeight="600">On Time · Active</text>
                </g>

                {/* ITC Card */}
                <g transform="translate(340, 160)" opacity="0.95">
                  <rect width="190" height="70" rx="16" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1.5" />
                  <circle cx="35" cy="35" r="20" fill="rgba(74, 63, 224, 0.15)" stroke="rgba(74, 63, 224, 0.4)" strokeWidth="1.5" />
                  <path d="M 28 27 L 42 27 M 28 35 L 42 35 M 28 43 L 36 43" stroke="#5B4DFF" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="70" y="33" fill="#FFFFFF" fontSize="15" fontFamily="'Outfit', sans-serif" fontWeight="700">ITC Claimed</text>
                  <text x="70" y="52" fill="#a39cf9" fontSize="16" fontFamily="'Inter', sans-serif" fontWeight="800">100% Match</text>
                </g>

                {/* Security Shield badge */}
                <g transform="translate(45, 130)">
                  <circle cx="20" cy="20" r="24" fill="rgba(245, 158, 11, 0.15)" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1.5" />
                  <path d="M 12 14 L 20 10 L 28 14 C 28 22 20 28 20 28 C 20 28 12 22 12 14 Z" fill="rgba(245, 158, 11, 0.25)" stroke="#F59E0B" strokeWidth="2" strokeLinejoin="round" />
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
          </footer>
        </div>

      </div>
    </div>
  );
};

export default GstFilingPoster;
