import React from 'react';
import '../styles/heroVisual.css';

/**
 * HeroVisual Component
 * A reusable, responsive SVG illustration for website service page heroes.
 * 
 * @param {string} theme - 'purple' | 'gold' | 'emerald' | 'cyan'
 * @param {Array} cards - Array of card objects: [{ title: string, subtitle: string }]
 */
const HeroVisual = ({ theme = 'purple', cards = [], lightMode = false, milestones = [] }) => {
  // Define fixed, layout-safe coordinate slots to map up to 3 cards without overlap on 600x450 viewport
  const cardSlots = [
    { x: 35, y: 55, width: 205, height: 65 },   // Slot 0: Top-left (increased width to prevent text cutoff)
    { x: 340, y: 260, width: 190, height: 65 }, // Slot 1: Bottom-right (aligned and standardized height)
    { x: 340, y: 45, width: 190, height: 65 }   // Slot 2: Top-right (shifted left to prevent overlap with Registration text)
  ];

  return (
    <div className={`hero-visual-container theme-${theme} ${lightMode ? 'light-mode' : ''}`}>
      <svg 
        viewBox="0 0 600 450" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="hero-visual-svg"
      >
        <defs>
          {/* Dynamic theme-color based linear gradient for background data bars */}
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--visual-primary-color)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--visual-primary-color)" stopOpacity="0.1" />
          </linearGradient>

          {/* Radial glow gradient behind the spline curve */}
          <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--visual-primary-color)" stopOpacity={lightMode ? 0.22 : 1} />
            <stop offset="100%" stopColor="var(--visual-primary-color)" stopOpacity="0" />
          </radialGradient>

          {/* SVG Glow Filter */}
          <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* SVG Card Shadow Filter */}
          <filter id="cardShadow" x="-20%" y="-20%" width="145%" height="145%">
            <feDropShadow 
              dx="0" 
              dy="6" 
              stdDeviation="5" 
              floodColor={lightMode ? "#081028" : "#000000"} 
              floodOpacity={lightMode ? 0.08 : 0.18} 
            />
          </filter>
        </defs>

        {/* 1. Backdrop Glow */}
        <circle 
          cx="300" 
          cy="225" 
          r={lightMode ? 270 : 220} 
          fill="url(#radialGlow)" 
          className="graphic-glow-circle" 
          pointerEvents="none" 
        />

        {/* 2. Grid Background */}
        <g className="graphic-grid-backdrop" stroke={lightMode ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.08)"}>
          <line x1="50" y1="60" x2="550" y2="60" />
          <line x1="50" y1="130" x2="550" y2="130" />
          <line x1="50" y1="200" x2="550" y2="200" />
          <line x1="50" y1="270" x2="550" y2="270" />
          <line x1="50" y1="340" x2="550" y2="340" />
          <line x1="120" y1="60" x2="120" y2="340" strokeWidth="0.8" />
          <line x1="240" y1="60" x2="240" y2="340" strokeWidth="0.8" />
          <line x1="360" y1="60" x2="360" y2="340" strokeWidth="0.8" />
          <line x1="480" y1="60" x2="480" y2="340" strokeWidth="0.8" />
        </g>

        {/* Subtle Brand Pattern: Compliance network (faint connections & orbital nodes) */}
        <g 
          className="graphic-compliance-network" 
          stroke={lightMode ? "rgba(var(--visual-rgb-primary), 0.035)" : "rgba(255, 255, 255, 0.02)"} 
          strokeWidth="1.2"
          fill="none"
        >
          <path d="M 30 270 L 110 130 L 230 60 L 350 130 L 350 60 M 110 130 L 230 200 L 350 130 L 470 270 L 570 200 M 230 200 L 230 340 M 350 130 L 470 130" strokeDasharray="3 3" />
          <circle cx="110" cy="130" r="4.5" fill={lightMode ? "rgba(var(--visual-rgb-primary), 0.04)" : "rgba(255, 255, 255, 0.03)"} stroke="none" />
          <circle cx="230" cy="200" r="5.5" fill={lightMode ? "rgba(var(--visual-rgb-primary), 0.04)" : "rgba(255, 255, 255, 0.03)"} stroke="none" />
          <circle cx="230" cy="60" r="4.5" fill={lightMode ? "rgba(var(--visual-rgb-primary), 0.04)" : "rgba(255, 255, 255, 0.03)"} stroke="none" />
          <circle cx="350" cy="130" r="4.5" fill={lightMode ? "rgba(var(--visual-rgb-primary), 0.04)" : "rgba(255, 255, 255, 0.03)"} stroke="none" />
          <circle cx="350" cy="60" r="4.5" fill={lightMode ? "rgba(var(--visual-rgb-primary), 0.04)" : "rgba(255, 255, 255, 0.03)"} stroke="none" />
          <circle cx="470" cy="270" r="5.5" fill={lightMode ? "rgba(var(--visual-rgb-primary), 0.04)" : "rgba(255, 255, 255, 0.03)"} stroke="none" />
          <circle cx="570" cy="200" r="4.5" fill={lightMode ? "rgba(var(--visual-rgb-primary), 0.04)" : "rgba(255, 255, 255, 0.03)"} stroke="none" />
        </g>

        {/* Axis line */}
        <line 
          x1="50" 
          y1="340" 
          x2="550" 
          y2="340" 
          stroke={lightMode ? "rgba(15, 23, 42, 0.06)" : "rgba(255, 255, 255, 0.2)"} 
          strokeWidth="2" 
          strokeLinecap="round" 
        />

        {/* 3. Metric Growth Bars */}
        <g opacity={lightMode ? 0.32 : 0.88}>
          <rect x="140" y="220" width="42" height="120" rx="6" fill="url(#barGradient)" stroke="rgba(var(--visual-rgb-accent), 0.35)" strokeWidth="1.2" />
          <rect x="260" y="160" width="42" height="180" rx="6" fill="url(#barGradient)" stroke="rgba(var(--visual-rgb-accent), 0.35)" strokeWidth="1.2" />
          <rect x="380" y="110" width="42" height="230" rx="6" fill="url(#barGradient)" stroke="rgba(var(--visual-rgb-accent), 0.35)" strokeWidth="1.2" />
        </g>

        {/* 4. Spline Growth Curve */}
        {/* Thick Glowing Underlay Path */}
        <path 
          d="M 40 320 C 150 320 210 150 340 150 T 560 100" 
          fill="none" 
          stroke={lightMode ? "rgba(var(--visual-rgb-primary), 0.16)" : "var(--visual-primary-color)"} 
          strokeWidth="11" 
          className="graphic-trend-curve" 
          filter={lightMode ? "" : "url(#svgGlow)"} 
          opacity="0.9"
        />
        {/* Sharp High-Contrast Overlay Core Line */}
        <path 
          d="M 40 320 C 150 320 210 150 340 150 T 560 100" 
          fill="none" 
          stroke="var(--visual-primary-color)" 
          strokeWidth="3.2" 
          strokeLinecap="round"
          opacity="0.95"
        />
        
        {/* Subtle Registration milestones along spline path */}
        {milestones.length > 0 && (
          <g className="graphic-milestones" fontFamily="'Outfit', sans-serif" fontWeight="700" fontSize="10">
            {/* Milestone 0: DSC (x: 95, y: 310) */}
            {milestones[0] && (
              <g>
                <circle cx="95" cy="310" r="4.5" fill="var(--visual-primary-color)" />
                <circle cx="95" cy="310" r="2.2" fill="#ffffff" />
                <text x="95" y="328" fill={lightMode ? "#64748B" : "#CBD5E1"} textAnchor="middle">{milestones[0]}</text>
              </g>
            )}

            {/* Milestone 1: DIN (x: 200, y: 215) */}
            {milestones[1] && (
              <g>
                <circle cx="200" cy="215" r="4.5" fill="var(--visual-primary-color)" />
                <circle cx="200" cy="215" r="2.2" fill="#ffffff" />
                <text x="200" y="233" fill={lightMode ? "#64748B" : "#CBD5E1"} textAnchor="middle">{milestones[1]}</text>
              </g>
            )}

            {/* Milestone 2: MCA (x: 330, y: 155) */}
            {milestones[2] && (
              <g>
                <circle cx="330" cy="155" r="4.5" fill="var(--visual-primary-color)" />
                <circle cx="330" cy="155" r="2.2" fill="#ffffff" />
                <text x="330" y="140" fill={lightMode ? "#64748B" : "#CBD5E1"} textAnchor="middle">{milestones[2]}</text>
              </g>
            )}

            {/* Milestone 3: Registration (x: 560, y: 122) */}
            {milestones[3] && (
              <g>
                <text x="560" y="122" fill="var(--visual-primary-color)" textAnchor="middle">{milestones[3]}</text>
              </g>
            )}
          </g>
        )}

        {/* Spline Target Nodes */}
        <circle cx="560" cy="100" r="9" fill="var(--visual-accent-color)" />
        <circle cx="560" cy="100" r="4.5" fill="#ffffff" />

        {/* 5. Floating Status Cards (slotted dynamically) */}
        {cards.slice(0, 3).map((card, index) => {
          const slot = cardSlots[index];
          const checkY = slot.height / 2;

          return (
            <g 
              key={index} 
              className="graphic-card" 
              transform={`translate(${slot.x}, ${slot.y})`}
              filter="url(#cardShadow)"
            >
              {/* Card Base */}
              <rect 
                width={slot.width} 
                height={slot.height} 
                rx="16" 
                fill="#ffffff" 
                stroke="rgba(var(--visual-rgb-accent), 0.35)" 
                strokeWidth="1.5" 
              />
              
              {/* Checkbox Icon */}
              <circle 
                cx="30" 
                cy={checkY} 
                r="17" 
                fill="rgba(16, 185, 129, 0.15)" 
                stroke="rgba(16, 185, 129, 0.35)" 
                strokeWidth="1.2" 
              />
              <path 
                d={`M ${30 - 5.5} ${checkY} L ${30 - 1.5} ${checkY + 4} L ${30 + 5.5} ${checkY - 4}`} 
                fill="none" 
                stroke="#10B981" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />

              {/* Text Fields */}
              <text 
                x="58" 
                y={checkY - 3} 
                fill="#0F172A" 
                fontSize="13" 
                fontFamily="'Outfit', sans-serif" 
                fontWeight="700"
              >
                {card.title}
              </text>
              <text 
                x="58" 
                y={checkY + 14} 
                fill="var(--visual-primary-color)" 
                fontSize="11" 
                fontFamily="'Inter', sans-serif" 
                fontWeight="600"
              >
                {card.subtitle}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default HeroVisual;
