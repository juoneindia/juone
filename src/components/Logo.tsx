import React from 'react';
import logoImg from './WhatsApp Image 2026-07-26 at 4.22.07 PM.jpeg';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 40, className = '', showText = true }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 font-sans font-bold ${className}`}>
      <img
        src={logoImg}
        alt="JUONE Logo"
        style={{ width: size, height: size }}
        className="rounded-full object-cover shrink-0 drop-shadow-sm transition-transform hover:scale-105"
      />

      {showText && (
        <span className="text-slate-900 tracking-tight font-extrabold text-xl sm:text-2xl">
          JU<span className="text-[#008C49]">ONE</span>
        </span>
      )}
    </div>
  );
};
