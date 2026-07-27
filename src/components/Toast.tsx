import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl frosted-neu bg-white/95 border border-[#008C49]/40 text-slate-800 shadow-xl animate-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 size={20} className="text-[#008C49] shrink-0" />
      <span className="font-sans text-xs sm:text-sm font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-slate-600 focus:outline-none p-1 rounded-full hover:bg-slate-100"
      >
        <X size={14} />
      </button>
    </div>
  );
};
