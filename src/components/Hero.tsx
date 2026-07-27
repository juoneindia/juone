import React from 'react';
import { ShoppingBag, Laptop, Code, MonitorSmartphone, Trophy, HandHeart, Sparkles } from 'lucide-react';
import PremiumCountdown from './PremiumCountdown';

export const Hero: React.FC = () => {
  // Target date set to September 4th, 2026 (Do not display date string on UI)
  const targetDate = new Date(2026, 8, 4, 0, 0, 0);

  return (
    <section id="home" className="pt-12 pb-20 px-4 text-center max-w-5xl mx-auto relative z-10">

      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFA07A]/10 border border-[#FFA07A]/25 text-[#FFA07A] font-sans text-xs font-extrabold tracking-widest uppercase mb-8 shadow-sm backdrop-blur-sm animate-pulse">
        <span className="w-2 h-2 rounded-full bg-[#FFA07A]" />
        PRE-LAUNCHING SOON
      </div>

      {/* Main Professional Headline */}
      <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-12 max-w-4xl mx-auto">
        JUONE: ALL YOUR SERVICES, <br className="hidden sm:inline" />
        <span className="text-brand-gradient font-black drop-shadow-sm">
          ONE SUPER APP
        </span>
      </h1>

      {/* Countdown Timer (Sole Hero Centerpiece with Shimmer Effect) */}
      <div className="frosted-neu max-w-3xl mx-auto p-8 sm:p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 green-glow shimmer-sweep flex flex-col items-center">

        {/* Subtle Ambient Background Highlight */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFA07A]/15 via-teal-300/20 to-[#FFA07A]/10 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full">

          <PremiumCountdown targetDate={targetDate.getTime()} flipStyle="full" />

          {/* Pill Badge Underneath: COUNTDOWN TO LAUNCH */}
          <div className="mt-12 inline-block">
            <span className="px-5 py-2 rounded-full bg-white/80 border border-white text-[#FFA07A] font-sans text-xs font-bold tracking-widest uppercase shadow-sm">
              COUNTDOWN TO LAUNCH
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
