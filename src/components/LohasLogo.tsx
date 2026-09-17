import React from 'react';

interface LohasLogoProps {
  className?: string;
  size?: number;
}

export function LohasLogo({ className = '', size = 38 }: LohasLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-300 hover:scale-105`}
    >
      <defs>
        {/* Warm architectural terracotta-gold gradient matching the uploaded icon */}
        <linearGradient id="lohasBuildingGrad" x1="20%" y1="15%" x2="80%" y2="85%">
          <stop offset="0%" stopColor="#F7BE9A" />
          <stop offset="50%" stopColor="#E5A680" />
          <stop offset="100%" stopColor="#D98A5B" />
        </linearGradient>

        {/* Soft luminous ambient glow in center */}
        <radialGradient id="lohasBadgeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E5A680" stopOpacity="0.16" />
          <stop offset="70%" stopColor="#E5A680" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#0B1224" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Dark Navy Architectural Badge Background */}
      <rect width="100" height="100" rx="22" fill="#0B1224" />
      <circle cx="50" cy="50" r="42" fill="url(#lohasBadgeGlow)" />
      <rect 
        x="1" 
        y="1" 
        width="98" 
        height="98" 
        rx="21" 
        stroke="#E5A680" 
        strokeOpacity="0.18" 
        strokeWidth="1.2" 
      />

      {/* Building Structure Group */}
      <g 
        stroke="url(#lohasBuildingGrad)" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* 1. Ground / Foundation Line */}
        <line x1="16" y1="80" x2="84" y2="80" />

        {/* 2. Left Wing (Lower Shoulder) */}
        <path d="M 23 80 V 44 A 6 6 0 0 1 29 38 H 36" />
        <line x1="29.5" y1="49" x2="29.5" y2="70" strokeWidth="4.5" />

        {/* 3. Central Main Tower (Tallest Structure) */}
        <path d="M 36 80 V 28 A 7 7 0 0 1 43 21 H 57 A 7 7 0 0 1 64 28 V 80" />

        {/* Upper Window Bar */}
        <line x1="44" y1="34" x2="56" y2="34" strokeWidth="5" />

        {/* Middle Window Bar */}
        <line x1="44" y1="46" x2="56" y2="46" strokeWidth="5" />

        {/* Arched Entrance Doorway */}
        <path d="M 44 80 V 68 A 6 6 0 0 1 56 68 V 80" strokeWidth="4.5" />

        {/* 4. Right Wing (Lower Shoulder) */}
        <path d="M 64 38 H 71 A 6 6 0 0 1 77 44 V 80" />
        <line x1="70.5" y1="49" x2="70.5" y2="70" strokeWidth="4.5" />
      </g>
    </svg>
  );
}

