// import React from 'react';
// import { ServiceItem } from '../types';
// import { X, Check, Sparkles, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

// interface ServiceModalProps {
//   service: ServiceItem | null;
//   onClose: () => void;
//   onRequestAccess: (serviceTitle: string) => void;
// }

// export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestAccess }) => {
//   if (!service) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
//       <div className="frosted-neu max-w-2xl w-full rounded-[2.25rem] overflow-hidden shadow-2xl border border-white/90 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-md transition-all cursor-pointer"
//           aria-label="Close details modal"
//         >
//           <X size={20} />
//         </button>

//         {/* Header Image */}
//         <div className="h-56 relative overflow-hidden shrink-0">
//           <img
//             src={service.image}
//             alt={service.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          
//           <div className="absolute bottom-4 left-6 right-6 text-white">
//             <div className="inline-block px-3 py-1 rounded-full bg-[#008C49] text-white font-sans text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-sm">
//               {service.badge}
//             </div>
//             <h3 className="font-serif text-3xl font-bold tracking-tight">
//               {service.title}
//             </h3>
//             <p className="font-sans text-xs text-emerald-200 mt-0.5">
//               {service.tagline}
//             </p>
//           </div>
//         </div>

//         {/* Modal Body */}
//         <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-white/60 font-sans">
          
//           {/* Overview */}
//           <div>
//             <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#008C49] mb-2 flex items-center gap-1.5">
//               <Sparkles size={14} /> Service Overview
//             </h4>
//             <p className="text-sm text-slate-700 leading-relaxed">
//               {service.demoDetails?.overview || service.description}
//             </p>
//           </div>

//           {/* Key Features / Highlights */}
//           {service.features && service.features.length > 0 && (
//             <div>
//               <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 mb-3">
//                 Core Capabilities
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
//                 {service.features.map((feature, i) => (
//                   <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-white/90 shadow-sm">
//                     <div className="w-5 h-5 rounded-full bg-[#008C49]/15 flex items-center justify-center shrink-0">
//                       <Check size={12} className="text-[#008C49] stroke-[3]" />
//                     </div>
//                     <span className="text-xs font-semibold text-slate-800">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Highlights & Guarantees */}
//           {service.demoDetails?.highlights && (
//             <div className="p-4 rounded-2xl bg-[#008C49]/10 border border-[#008C49]/20">
//               <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#008C49] mb-2 flex items-center gap-1.5">
//                 <ShieldCheck size={15} /> Why Choose {service.title}
//               </h4>
//               <ul className="space-y-1.5 text-xs text-slate-700">
//                 {service.demoDetails.highlights.map((item, idx) => (
//                   <li key={idx} className="flex items-center gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#008C49]" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//         </div>

//         {/* Modal Footer */}
//         <div className="p-4 sm:p-6 bg-white/90 border-t border-white/80 flex items-center justify-between gap-4 shrink-0">
//           <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
//             <Clock size={14} className="text-[#008C49]" />
//             <span>{service.demoDetails?.availability || 'Launching Soon'}</span>
//           </div>
//           <button
//             onClick={() => {
//               onRequestAccess(service.title);
//               onClose();
//             }}
//             className="px-6 py-3 bg-[#008C49] hover:bg-[#006E39] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
//           >
//             <span>Request VIP Access</span>
//             <ArrowRight size={14} />
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };
import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { X, Check, Sparkles, ShieldCheck, Clock, ArrowRight, Tag } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestAccess: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestAccess }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!service) return null;

  // Derive unique categories for the catalog filters
  const categories = service.catalog
    ? ['All', ...Array.from(new Set(service.catalog.map((item) => item.category)))]
    : [];

  const filteredCatalog =
    service.catalog && selectedCategory !== 'All'
      ? service.catalog.filter((item) => item.category === selectedCategory)
      : service.catalog || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="frosted-neu max-w-3xl w-full rounded-[2.25rem] overflow-hidden shadow-2xl border border-white/90 relative animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-md transition-all cursor-pointer"
          aria-label="Close details modal"
        >
          <X size={20} />
        </button>

        {/* Header Image */}
        <div className="h-48 sm:h-56 relative overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="inline-block px-3 py-1 rounded-full bg-[#008C49] text-white font-sans text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-sm">
              {service.badge}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              {service.title}
            </h3>
            <p className="font-sans text-xs text-emerald-200 mt-0.5">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 bg-white/65 font-sans">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#008C49] mb-2 flex items-center gap-1.5">
              <Sparkles size={14} /> Service Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.demoDetails?.overview || service.description}
            </p>
          </div>

          {/* Interactive Catalog Section */}
          {service.catalog && service.catalog.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/70 pb-3">
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 flex items-center gap-1.5">
                    <Tag size={15} className="text-[#008C49]" /> Available Catalogues & Pricing ({service.catalog.length})
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">Pre-launch preview with verified early bird rates</p>
                </div>

                {/* Category Pill Filters */}
                {categories.length > 2 && (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? 'bg-[#008C49] text-white shadow-sm'
                            : 'bg-white/80 text-slate-600 hover:bg-white border border-white/80'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Grid of Catalog Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredCatalog.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-white/90 border border-white hover:border-[#008C49]/40 shadow-sm hover:shadow-md transition-all flex gap-3.5 items-center group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100 relative shadow-inner">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {item.tag && (
                        <span className="absolute top-1 left-1 bg-black/70 backdrop-blur-xs text-[9px] font-bold text-white px-1.5 py-0.5 rounded">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#008C49] bg-[#008C49]/10 px-2 py-0.5 rounded-full inline-block mb-1">
                        {item.category}
                      </span>
                      <h5 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#008C49] transition-colors">
                        {item.name}
                      </h5>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-sm font-black text-slate-900 font-sans">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-[11px] text-slate-400 font-medium line-through">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features / Highlights */}
          {service.features && service.features.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 mb-3">
                Core Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-white/90 shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-[#008C49]/15 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#008C49] stroke-[3]" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights & Guarantees */}
          {service.demoDetails?.highlights && (
            <div className="p-4 rounded-2xl bg-[#008C49]/10 border border-[#008C49]/20">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#008C49] mb-2 flex items-center gap-1.5">
                <ShieldCheck size={15} /> Why Choose {service.title}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {service.demoDetails.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008C49]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white/95 border-t border-white/80 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Clock size={14} className="text-[#008C49]" />
            <span>{service.demoDetails?.availability || 'Launching Soon'}</span>
          </div>
          <button
            onClick={() => {
              onRequestAccess(service.title);
              onClose();
            }}
            className="px-6 py-2.5 bg-[#008C49] hover:bg-[#006E39] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <span>Request VIP Access</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
