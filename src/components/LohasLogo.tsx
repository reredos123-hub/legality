import React from 'react';

interface LohasLogoProps {
  className?: string;
  size?: number;
}

export function LohasLogo({ className = '', size = 32 }: LohasLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 128 128" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-300 hover:scale-105`}
    >
      <defs>
        {/* Gold gradient for architectural cantilever slabs and plinth */}
        <linearGradient id="lohasGoldGrad" x1="14" y1="92" x2="114" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Warm luminous glow for panoramic ribbon windows */}
        <linearGradient id="lohasWindowGlow" x1="26" y1="37" x2="78" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#FFB703" />
          <stop offset="100%" stopColor="#FB8500" />
        </linearGradient>

        {/* Atrium ground glass gradient */}
        <linearGradient id="lohasAtriumGlow" x1="48" y1="64" x2="98" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD166" />
          <stop offset="100%" stopColor="#F77F00" />
        </linearGradient>

        {/* Structural pilotis column gradient */}
        <linearGradient id="lohasColumnGrad" x1="0" y1="60" x2="0" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FED7AA" stopOpacity="0.6" />
        </linearGradient>

        {/* Ambient warm background glow */}
        <radialGradient id="lohasAmbientGlow" cx="64" cy="54" r="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#140A03" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Dark architectural badge canvas */}
      <rect width="128" height="128" rx="28" fill="#140A03" />
      <circle cx="64" cy="54" r="52" fill="url(#lohasAmbientGlow)" />
      <rect x="1" y="1" width="126" height="126" rx="27" stroke="#F97316" strokeOpacity="0.3" strokeWidth="1.5" />

      {/* Blueprint drafting precision coordinates (Orthogonal only) */}
      <circle cx="64" cy="54" r="50" stroke="#EA580C" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
      <line x1="64" y1="8" x2="64" y2="15" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.45" strokeLinecap="round" />
      <line x1="8" y1="92" x2="14" y2="92" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="114" y1="92" x2="120" y2="92" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4" />
      <path d="M14 22H20M17 19V25" stroke="#F97316" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round" />
      <path d="M108 22H114M111 19V25" stroke="#F97316" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round" />

      {/* ===== CONTEMPORARY MODERN ARCHITECTURE MASSING ===== */}

      {/* 1. Vertical Core Tower (Back Right) */}
      <rect x="74" y="20" width="28" height="72" rx="2" fill="#240D02" stroke="#682405" strokeWidth="1" />
      {/* Tower Top Accent Cap */}
      <rect x="72" y="18" width="32" height="3" rx="1.5" fill="#FFD700" />
      {/* Vertical Architectural Light Louvers on Tower */}
      <line x1="81" y1="26" x2="81" y2="58" stroke="#F97316" strokeWidth="1.8" strokeOpacity="0.75" strokeLinecap="round" />
      <line x1="88" y1="24" x2="88" y2="58" stroke="#FFD700" strokeWidth="2" strokeOpacity="0.9" strokeLinecap="round" />
      <line x1="95" y1="26" x2="95" y2="58" stroke="#F97316" strokeWidth="1.8" strokeOpacity="0.75" strokeLinecap="round" />

      {/* 2. Rooftop Modern Pergola / Trellis (Over Upper Cantilever) */}
      <rect x="26" y="22" width="34" height="2" rx="1" fill="#FFD700" />
      <rect x="29" y="24" width="2" height="7" rx="0.8" fill="#FFB703" />
      <rect x="37" y="24" width="2" height="7" rx="0.8" fill="#FFB703" />
      <rect x="45" y="24" width="2" height="7" rx="0.8" fill="#FFB703" />
      <rect x="53" y="24" width="2" height="7" rx="0.8" fill="#FFB703" />

      {/* 3. Floating Upper Cantilevered Pavilion (Modernist Living/Design Studio) */}
      {/* Upper Roof Cantilever Slab */}
      <rect x="18" y="29.5" width="68" height="3.5" rx="1.5" fill="url(#lohasGoldGrad)" />
      
      {/* Upper Main Box Body */}
      <rect x="21" y="32" width="62" height="27" rx="1.5" fill="#381504" stroke="#8C3209" strokeWidth="1" />

      {/* Modern Panoramic Ribbon Window (Continuous Glass Band) */}
      <rect x="25" y="37" width="54" height="16" rx="1.5" fill="url(#lohasWindowGlow)" />
      {/* Minimalist Vertical Mullions */}
      <line x1="38.5" y1="37" x2="38.5" y2="53" stroke="#240D02" strokeWidth="1.5" strokeOpacity="0.55" />
      <line x1="52" y1="37" x2="52" y2="53" stroke="#240D02" strokeWidth="1.5" strokeOpacity="0.55" />
      <line x1="65.5" y1="37" x2="65.5" y2="53" stroke="#240D02" strokeWidth="1.5" strokeOpacity="0.55" />

      {/* Lower Cantilever Floor Slab */}
      <rect x="19" y="58" width="66" height="3" rx="1.5" fill="#EA580C" />

      {/* 4. Open Pilotis Space (Under the dramatic left cantilever) */}
      {/* Pilotis Recessed Shadow Void */}
      <rect x="23" y="60" width="22" height="32" fill="#0D0501" opacity="0.6" />
      {/* 2 Structural Modern Pilotis Columns */}
      <rect x="27" y="60" width="3.5" height="32" rx="1.5" fill="url(#lohasColumnGrad)" />
      <rect x="37" y="60" width="3.5" height="32" rx="1.5" fill="url(#lohasColumnGrad)" />

      {/* 5. Ground Level Glass Atrium & Gallery (Right Pavilion) */}
      <rect x="45" y="60" width="56" height="32" rx="1.5" fill="#1F0B02" stroke="#682405" strokeWidth="1" />
      {/* Floor-to-ceiling Glowing Glass Lobby */}
      <rect x="48" y="64" width="50" height="26" rx="1" fill="url(#lohasAtriumGlow)" />
      {/* Atrium Horizontal Transom */}
      <line x1="48" y1="72" x2="98" y2="72" stroke="#1F0B02" strokeWidth="1.5" strokeOpacity="0.6" />
      {/* Atrium Vertical Mullions */}
      <line x1="61" y1="64" x2="61" y2="90" stroke="#1F0B02" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="74" y1="64" x2="74" y2="90" stroke="#1F0B02" strokeWidth="1.5" strokeOpacity="0.6" />
      {/* Entrance Door Frame Accent */}
      <rect x="80" y="73" width="15" height="17" fill="#140701" opacity="0.35" />
      <rect x="76" y="71" width="22" height="2.5" rx="1" fill="#FFD700" />

      {/* 6. Foundation Plinth & Datum Beam */}
      <rect x="14" y="92" width="100" height="3.5" rx="1.75" fill="url(#lohasGoldGrad)" />
      <rect x="24" y="96" width="80" height="2" rx="1" fill="#F97316" opacity="0.65" />

      {/* 7. Distinctive Architectural Office Typography */}
      <text 
        x="64" 
        y="113" 
        fill="#FFFFFF" 
        fontSize="12.5" 
        fontWeight="900" 
        textAnchor="middle" 
        letterSpacing="4"
        style={{
          fontFamily: '"Outfit", "Inter", "system-ui", sans-serif',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.85)'
        }}
      >
        LOHAS
      </text>
    </svg>
  );
}
