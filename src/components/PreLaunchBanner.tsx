import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PreLaunchBannerProps {
  onSubscribe: (email: string) => void;
}

export const PreLaunchBanner: React.FC<PreLaunchBannerProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      onSubscribe(email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto w-full mb-12 relative z-10">
      <div className="frosted-neu-banner p-8 sm:p-12 md:p-14 rounded-[2.5rem] text-center relative overflow-hidden border border-white/90">
        
        {/* Soft Background Aurora Blur */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#008C49]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-teal-300/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          
          {/* Headline */}
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Ready for the future of convenience?
          </h3>
          
          <p className="font-sans text-slate-600 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Be the first to experience the unified super app ecosystem. Subscribe to receive priority early access and exclusive pre-launch perks.
          </p>

          {submitted ? (
            <div className="p-4 sm:p-6 rounded-2xl bg-white/90 border border-[#008C49]/30 text-[#008C49] flex items-center justify-center gap-3 font-sans font-bold text-sm sm:text-base animate-in zoom-in-95 duration-300 shadow-sm max-w-md mx-auto">
              <CheckCircle2 size={22} className="text-[#008C49] shrink-0" />
              <span>You're officially on the VIP launch list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/90 border border-white focus:outline-none focus:ring-2 focus:ring-[#008C49] shadow-inner text-sm font-sans text-slate-800 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="px-7 py-3.5 bg-[#008C49] hover:bg-[#006E39] text-white font-sans font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Notify Me</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          {/* Small Disclaimer */}
          <p className="text-[11px] text-slate-500 font-sans mt-4">
            Join 10,000+ early adopters. Zero spam, unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
};
