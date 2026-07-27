import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  faqs: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 px-4 max-w-3xl mx-auto w-full relative z-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3 inline-block relative pb-3">
          FREQUENTLY ASKED QUESTIONS
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#008C49] rounded-full" />
        </h2>
        <p className="font-sans text-slate-600 text-sm sm:text-base">
          Quick answers to your most common inquiries.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="frosted-neu-sm rounded-2xl overflow-hidden transition-all duration-300 border border-white/80 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left font-sans font-semibold text-slate-800 flex items-center justify-between focus:outline-none cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-base sm:text-lg text-slate-900 group-hover:text-[#008C49] transition-colors pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#008C49]/10' : ''}`}>
                  <ChevronDown size={18} className="text-[#008C49]" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 font-sans leading-relaxed border-t border-white/50 pt-4 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
