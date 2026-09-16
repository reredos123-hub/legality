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
        {/* Gradients for modern flat-roof cantilever slabs */}
        <linearGradient id="lohasMainSlabGrad" x1="42" y1="22" x2="86" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFA043" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>

        <linearGradient id="lohasSideSlabGrad" x1="20" y1="44" x2="108" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>

        {/* Foundation beam gold gradient */}
        <linearGradient id="lohasGoldGrad" x1="18" y1="94" x2="110" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Vertical curtain wall glass gradient */}
        <linearGradient id="lohasGlassGrad" x1="45" y1="28" x2="83" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A1205" />
          <stop offset="100%" stopColor="#140700" />
        </linearGradient>

        {/* Background glow gradient */}
        <radialGradient id="lohasBgGlow" cx="64" cy="58" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#150B04" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Dark architectural badge background */}
      <rect width="128" height="128" rx="28" fill="#150B04" />
      <circle cx="64" cy="58" r="50" fill="url(#lohasBgGlow)" />
      <rect x="1" y="1" width="126" height="126" rx="27" stroke="#F97316" strokeOpacity="0.3" strokeWidth="1.5" />

      {/* Blueprint architectural drafting axes (Horizontal and Vertical only, zero diagonal) */}
      <circle cx="64" cy="58" r="52" stroke="#EA580C" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
      <line x1="64" y1="10" x2="64" y2="16" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.45" strokeLinecap="round" />
      <line x1="10" y1="92" x2="18" y2="92" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="110" y1="92" x2="118" y2="92" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4" />
      
      {/* Precision coordinate crosshairs */}
      <path d="M14 24H20M17 21V27" stroke="#F97316" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round" />
      <path d="M108 24H114M111 21V27" stroke="#F97316" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round" />

      {/* ===== MODERN RECTILINEAR ARCHITECTURAL MASSING (NO TRIANGLES) ===== */}

      {/* Rooftop Crown / Mechanical Fin & Louver */}
      <rect x="63" y="14" width="2" height="6" rx="1" fill="#FFD700" />
      <rect x="53" y="19" width="22" height="3" rx="1" fill="#D97706" />

      {/* --- 1. Left Stepped Architectural Wing --- */}
      {/* Left Wing Roof Slab */}
      <rect x="20" y="44" width="25" height="3.5" rx="1" fill="url(#lohasSideSlabGrad)" />
      {/* Left Wing Main Body */}
      <rect x="22" y="47.5" width="23" height="44.5" fill="#7C2D12" stroke="#431407" strokeWidth="1" />
      {/* Left Wing Floor Slabs */}
      <rect x="22" y="62" width="23" height="2" fill="#9A3412" />
      <rect x="22" y="77" width="23" height="2" fill="#9A3412" />
      {/* Left Windows (Orthogonal Grid) */}
      <rect x="26" y="52" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.8" />
      <rect x="35" y="52" width="6" height="7" rx="1" fill="#FFD700" opacity="0.9" />
      <rect x="26" y="67" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.75" />
      <rect x="35" y="67" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.75" />
      <rect x="26" y="81.5" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.7" />
      <rect x="35" y="81.5" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.7" />

      {/* --- 2. Right Stepped Architectural Wing --- */}
      {/* Right Wing Roof Slab */}
      <rect x="83" y="44" width="25" height="3.5" rx="1" fill="url(#lohasSideSlabGrad)" />
      {/* Right Wing Main Body */}
      <rect x="83" y="47.5" width="23" height="44.5" fill="#9A3412" stroke="#431407" strokeWidth="1" />
      {/* Right Wing Floor Slabs */}
      <rect x="83" y="62" width="23" height="2" fill="#B45309" />
      <rect x="83" y="77" width="23" height="2" fill="#B45309" />
      {/* Right Windows (Orthogonal Grid) */}
      <rect x="87" y="52" width="6" height="7" rx="1" fill="#FFD700" opacity="0.9" />
      <rect x="96" y="52" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.8" />
      <rect x="87" y="67" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.75" />
      <rect x="96" y="67" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.75" />
      <rect x="87" y="81.5" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.7" />
      <rect x="96" y="81.5" width="6" height="7" rx="1" fill="#FFB74D" opacity="0.7" />

      {/* --- 3. Center Main Architectural Tower & Pavilion --- */}
      {/* Cantilever Flat Roof Top Slab */}
      <rect x="41" y="22" width="46" height="4.5" rx="1.5" fill="url(#lohasMainSlabGrad)" />
      <rect x="46" y="26.5" width="36" height="1.5" fill="#B45309" />

      {/* Central Tower Mass / Glass Curtain Wall */}
      <rect x="44" y="28" width="40" height="64" fill="url(#lohasGlassGrad)" stroke="#C2410C" strokeWidth="1.2" />

      {/* Horizontal Story Slabs (Curtain wall floor plates) */}
      <rect x="44" y="43" width="40" height="2.5" fill="#EA580C" />
      <rect x="44" y="58" width="40" height="2.5" fill="#EA580C" />
      <rect x="44" y="73" width="40" height="2.5" fill="#EA580C" />

      {/* Vertical Structural Mullions / Columns */}
      <rect x="52" y="28" width="2.5" height="45" fill="#FFEDD5" opacity="0.85" />
      <rect x="63" y="28" width="2" height="45" fill="#FFD700" opacity="0.9" />
      <rect x="73" y="28" width="2.5" height="45" fill="#FFEDD5" opacity="0.85" />

      {/* Luminous Office Windows (Warm architectural illumination) */}
      {/* 4th Floor */}
      <rect x="46" y="32" width="4.5" height="8" rx="0.5" fill="#FFD700" opacity="0.85" />
      <rect x="56" y="32" width="5.5" height="8" rx="0.5" fill="#FFA043" opacity="0.85" />
      <rect x="66.5" y="32" width="5" height="8" rx="0.5" fill="#FFA043" opacity="0.85" />
      <rect x="77" y="32" width="5.5" height="8" rx="0.5" fill="#FFD700" opacity="0.85" />

      {/* 3rd Floor */}
      <rect x="46" y="47" width="4.5" height="8" rx="0.5" fill="#FFA043" opacity="0.8" />
      <rect x="56" y="47" width="5.5" height="8" rx="0.5" fill="#FFD700" opacity="0.9" />
      <rect x="66.5" y="47" width="5" height="8" rx="0.5" fill="#FFD700" opacity="0.9" />
      <rect x="77" y="47" width="5.5" height="8" rx="0.5" fill="#FFA043" opacity="0.8" />

      {/* 2nd Floor */}
      <rect x="46" y="62" width="4.5" height="8" rx="0.5" fill="#FFA043" opacity="0.85" />
      <rect x="56" y="62" width="5.5" height="8" rx="0.5" fill="#FFB74D" opacity="0.8" />
      <rect x="66.5" y="62" width="5" height="8" rx="0.5" fill="#FFB74D" opacity="0.8" />
      <rect x="77" y="62" width="5.5" height="8" rx="0.5" fill="#FFA043" opacity="0.85" />

      {/* --- 4. Ground Floor Modern Entrance & Canopy --- */}
      {/* Flat Entrance Canopy Slab */}
      <rect x="50" y="74" width="28" height="3" rx="1" fill="#FFD700" />
      {/* Illuminated Golden Lobby / Portal (Strictly rectangular) */}
      <rect x="54" y="77" width="20" height="15" rx="1" fill="#FFB703" />
      {/* Modern Glass Entrance Split Door Frame */}
      <rect x="56" y="79" width="7" height="13" fill="#1C0A00" opacity="0.5" />
      <rect x="65" y="79" width="7" height="13" fill="#1C0A00" opacity="0.5" />
      <line x1="64" y1="77" x2="64" y2="92" stroke="#D97706" strokeWidth="1.5" />

      {/* --- 5. Foundation Base Plinth --- */}
      <rect x="18" y="92" width="92" height="4" rx="2" fill="url(#lohasGoldGrad)" />
      <rect x="26" y="96" width="76" height="2" rx="1" fill="#F97316" opacity="0.65" />

      {/* Modernist Architectural Firm Typography */}
      <text 
        x="64" 
        y="113" 
        fill="#FFFFFF" 
        fontSize="12.5" 
        fontWeight="900" 
        textAnchor="middle" 
        letterSpacing="3.5"
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
