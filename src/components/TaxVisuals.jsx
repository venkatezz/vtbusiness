import React from 'react';

// Compliance Shield: A premium golden vector security shield indicating corporate tax protection
export const ComplianceShield = ({ size = 120, className = "" }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', background: 'rgba(245, 158, 11, 0.04)', border: '1px solid rgba(245, 158, 11, 0.12)', borderRadius: '24px', maxWidth: '320px', margin: '1rem auto' }} className={className}>
    <svg width={size} height={size} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGold" x1="0" y1="0" x2="100" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="0.5" stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#F59E0B" floodOpacity="0.15" />
        </filter>
      </defs>
      
      {/* Outer Shield Border */}
      <path d="M50 10 C65 20, 85 24, 90 26 C90 60, 80 92, 50 110 C20 92, 10 60, 10 26 C15 24, 35 20, 50 10 Z" fill="url(#shieldGold)" filter="url(#glow)" />
      
      {/* Inner Dark Core */}
      <path d="M50 16 C62 25, 78 28, 83 30 C83 60, 75 86, 50 102 C25 86, 17 60, 17 30 C22 28, 38 25, 50 16 Z" fill="#0F172A" />
      
      {/* Success Checkmark & Safe Arc */}
      <path d="M35 58 L45 68 L68 45" stroke="#10B981" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Decorative Star points */}
      <circle cx="50" cy="30" r="2" fill="#FBBF24" />
      <circle cx="30" cy="85" r="1.5" fill="#FBBF24" />
      <circle cx="70" cy="85" r="1.5" fill="#FBBF24" />
    </svg>
    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
      <h4 style={{ color: '#0F172A', fontWeight: '700', fontSize: '1rem', margin: '4px 0' }}>VT Compliance Shield</h4>
      <p style={{ color: '#64748B', fontSize: '0.82rem', margin: 0 }}>Verified Audit & Zero Penalty Guarantee</p>
    </div>
  </div>
);

// Filing Workflow Timeline: An elegant vector timeline summarizing the preparation and submission flow
export const ComplianceTimeline = () => {
  const steps = [
    { title: "Document Fetch", desc: "Automated retrieval of raw invoices, bills & ledgers" },
    { title: "Validation Check", desc: "Deep GSTR-2B matching & error identification" },
    { title: "Filing Ready", desc: "Reconciled ledger sheets compiled for review" },
    { title: "MCA/GST Filed", desc: "On-time portal submission with verified receipt" }
  ];

  return (
    <div style={{ padding: '2rem', background: '#ffffff', borderRadius: '24px', border: '1px solid rgba(15,23,42,0.06)', width: '100%', maxWidth: '850px', margin: '2rem auto', boxShadow: '0 12px 32px rgba(8,16,40,0.03)' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '0.78rem', background: 'rgba(74, 63, 224, 0.08)', color: '#4A3FE0', padding: '6px 14px', borderRadius: '20px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Filing Workflow</span>
        <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#0F172A', marginTop: '8px' }}>Standard Security Submission Path</h3>
      </div>
      
      <div className="compliance-timeline-flex" style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ flex: '1', minWidth: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
            {/* Step Number Gauge */}
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(74, 63, 224, 0.06)', border: '2px solid #4A3FE0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A3FE0', fontWeight: '700', fontSize: '1.05rem', marginBottom: '1rem', zIndex: 2, boxShadow: '0 4px 10px rgba(74,63,224,0.1)' }}>
              {idx + 1}
            </div>
            
            {/* Connector Line (Desktop Only) */}
            {idx < steps.length - 1 && (
              <div className="timeline-connector" style={{
                position: 'absolute',
                top: '20px',
                left: 'calc(50% + 25px)',
                width: 'calc(100% - 50px)',
                height: '2px',
                background: 'repeating-linear-gradient(90deg, #e2e8f0, #e2e8f0 4px, transparent 4px, transparent 8px)',
                zIndex: 1
              }} />
            )}
            
            <h4 style={{ color: '#0F172A', fontWeight: '700', fontSize: '0.98rem', marginBottom: '6px' }}>{step.title}</h4>
            <p style={{ color: '#64748B', fontSize: '0.84rem', lineHeight: '1.5', margin: 0 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
