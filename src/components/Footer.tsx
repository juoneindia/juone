import React from 'react';
import { Phone, Mail, Instagram, Facebook, Linkedin, Twitter, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white/95 border-t border-slate-200/80 pt-10 pb-6 px-4 mt-auto relative overflow-hidden">
      
      {/* Ambient Lavender/Emerald Glow at Bottom Edge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-24 bg-gradient-to-r from-emerald-100/30 via-teal-100/30 to-purple-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm mb-8 relative z-10">
        
        {/* Col 1: Brand */}
        <div className="space-y-3">
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <Logo size={34} showText={true} />
          </a>
          <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-sm">
            Redefining the digital ecosystem by bringing all essential daily services into one unified mobile experience.
          </p>
        </div>

        {/* Col 2: Company */}
        <div>
          <h4 className="font-sans font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-xs text-slate-600 font-sans">
            <li><a href="#home" className="hover:text-[#008C49] transition-colors">About Us</a></li>
            <li><a href="#home" className="hover:text-[#008C49] transition-colors">Careers</a></li>
            <li><a href="#home" className="hover:text-[#008C49] transition-colors">Privacy Policy</a></li>
            <li><a href="#home" className="hover:text-[#008C49] transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Col 3: Support */}
        <div>
          <h4 className="font-sans font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">Support</h4>
          <ul className="space-y-2 text-xs text-slate-600 font-sans">
            <li><a href="#faq" className="hover:text-[#008C49] transition-colors">Help Center</a></li>
            <li><a href="#faq" className="hover:text-[#008C49] transition-colors">Community</a></li>
            <li><a href="#faq" className="hover:text-[#008C49] transition-colors">Safety</a></li>
            <li>
              <a 
                href="https://www.instagram.com/juone.india" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#008C49] transition-colors"
              >
                Instagram Page
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar matching image.png exactly */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-sans relative z-10">
        
        {/* Left: Rights Reserved */}
        <p className="font-normal text-slate-600">
          &copy; 2026 JUONE. All rights reserved.
        </p>

        {/* Center: Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-700">
          <a 
            href="tel:+919701289900" 
            className="flex items-center gap-2 hover:text-[#008C49] transition-colors"
            title="Call JUONE Customer Support"
          >
            <Phone size={15} className="text-slate-600 hover:text-[#008C49]" />
            <span>+91 9701289900</span>
          </a>

          <a 
            href="mailto:juone.india@gmail.com" 
            className="flex items-center gap-2 hover:text-[#008C49] transition-colors"
            title="Email JUONE Support"
          >
            <Mail size={15} className="text-slate-600 hover:text-[#008C49]" />
            <span>juone.india@gmail.com</span>
          </a>
        </div>

        {/* Right: Social Media Links */}
        <div className="flex items-center gap-5 text-slate-600">
          <a 
            href="https://twitter.com/juone_india" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#008C49] transition-colors p-1" 
            aria-label="Twitter / X"
            title="JUONE on Twitter"
          >
            <Twitter size={18} />
          </a>
          <a 
            href="https://www.instagram.com/juone.india" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#008C49] transition-colors p-1" 
            aria-label="Instagram"
            title="JUONE on Instagram"
          >
            <Instagram size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/company/juone" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#008C49] transition-colors p-1" 
            aria-label="LinkedIn"
            title="JUONE on LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://www.facebook.com/juone.india" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#008C49] transition-colors p-1" 
            aria-label="Facebook"
            title="JUONE on Facebook"
          >
            <Facebook size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};
