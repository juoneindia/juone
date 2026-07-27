import React from 'react';
import { ServiceItem } from '../types';
import { ShoppingCart, ShoppingBag, Car, Hotel, Wrench, Globe, Check, ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ services, onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart': return <ShoppingCart size={20} className="text-[#008C49]" />;
      case 'ShoppingBag': return <ShoppingBag size={20} className="text-[#008C49]" />;
      case 'Car': return <Car size={20} className="text-[#008C49]" />;
      case 'Hotel': return <Hotel size={20} className="text-[#008C49]" />;
      case 'Wrench': return <Wrench size={20} className="text-[#008C49]" />;
      case 'Globe': return <Globe size={20} className="text-[#008C49]" />;
      default: return <Check size={20} className="text-[#008C49]" />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto w-full relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 inline-block relative pb-3">
          OUR EXTENSIVE SERVICES
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#008C49] rounded-full" />
        </h2>
        <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
          A curated super app ecosystem designed to fulfill every aspect of your daily life, from hyperlocal mobility to digital workspace.
        </p>
      </div>

      {/* 6-Card Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const isJuOnline = service.id === 'ju-online';

          return (
            <div
              key={service.id}
              onClick={() => !isJuOnline && onSelectService(service)}
              className={`frosted-neu rounded-[1.75rem] overflow-hidden flex flex-col group transition-all duration-300 border border-white/90 relative ${
                isJuOnline ? 'cursor-default' : 'cursor-pointer hover:-translate-y-2 hover:shadow-2xl'
              }`}
            >
              {/* Photo Header */}
              <div className="h-48 overflow-hidden relative bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isJuOnline ? '' : 'group-hover:scale-105'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] font-extrabold tracking-wider text-[#008C49] uppercase shadow-sm">
                  {service.badge}
                </div>

                {/* Title Overlay on Photo */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-serif text-lg font-bold tracking-tight drop-shadow-sm">
                      {service.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white/40">
                {isJuOnline ? (
                  // Ju Digital: Kept completely clean and minimalist without bullet points or paragraph text
                  <div className="my-auto py-6 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#008C49]/10 text-[#008C49] font-sans text-xs font-bold uppercase tracking-widest">
                      Ju Digital
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Bullet points with small green checkmarks */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans my-1">
                      {service.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#008C49]/15 flex items-center justify-center shrink-0">
                            <Check size={11} className="text-[#008C49] stroke-[3]" />
                          </div>
                          <span className="font-medium text-slate-700 leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Explore Link */}
                    <div className="mt-4 pt-3 border-t border-white/60 flex items-center justify-between text-xs font-bold text-[#008C49] group-hover:text-[#006E39] transition-colors">
                      <span>Explore Features</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
