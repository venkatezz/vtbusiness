import React from 'react';

const ServiceHeroVisual = (props) => {
  const SvgIllustration = props.svgIllustration;
  const TrustIcon = props.trustIcon;
  const trustLabel = props.trustLabel;
  const trustValue = props.trustValue;

  return (
    <div className="service-hero-visual">
      <div className="hybrid-visual-container">
        
        {/* Backdrop SVG Vector Illustration */}
        <div className="visual-backdrop-diagram" aria-hidden="true">
          <SvgIllustration />
        </div>
        
        {/* Single Premium Floating Trust Card */}
        <div className="floating-trust-card">
          <div className="card-icon-wrapper">
            <TrustIcon size={20} />
          </div>
          <div className="card-text-wrapper">
            <span className="card-label">{trustLabel}</span>
            <span className="card-value">{trustValue}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceHeroVisual;
