import React from 'react';

// Lighthouse Score visual card using responsive SVGs
const LighthouseScore = () => {
  const scores = [
    { title: "Performance", score: 99, color: "#10B981" },
    { title: "Accessibility", score: 100, color: "#10B981" },
    { title: "Best Practices", score: 100, color: "#10B981" },
    { title: "SEO", score: 100, color: "#10B981" }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      borderRadius: '20px',
      padding: '2.5rem 2rem',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.06)',
      boxShadow: '0 20px 45px rgba(0,0,0,0.15)',
      width: '100%',
      maxWidth: '680px',
      margin: '2rem auto',
      fontFamily: "'Outfit', sans-serif"
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#94a3b8' }}>
            VT Core Web Vitals Audit
          </span>
        </div>
        <div style={{ fontSize: '0.82rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', padding: '4px 10px', borderRadius: '20px', fontWeight: '700' }}>
          PASSED
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
        {scores.map((item, index) => {
          // SVG Circle mathematics: Radius=36, Circumference = 2 * PI * r = 226.19
          const radius = 36;
          const strokeWidth = 6;
          const sqSize = 100;
          const center = sqSize / 2;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (item.score / 100) * circumference;

          return (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative', width: sqSize, height: sqSize }}>
                <svg width={sqSize} height={sqSize} viewBox={`0 0 ${sqSize} ${sqSize}`} style={{ transform: 'rotate(-90deg)' }}>
                  {/* Background Track */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                  />
                  {/* Score Indicator */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={item.color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#fff'
                }}>
                  {item.score}
                </div>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#e2e8f0' }}>{item.title}</div>
            </div>
          );
        })}
      </div>
      
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#94a3b8' }}>
        <span>⚡ LCP: <b>0.8s</b></span>
        <span>⚡ FID: <b>12ms</b></span>
        <span>⚡ CLS: <b>0.00</b></span>
      </div>
    </div>
  );
};

export default LighthouseScore;
