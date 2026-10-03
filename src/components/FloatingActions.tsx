import React, { useState } from 'react';
import { MessageSquare, Phone, Sparkles, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface FloatingActionsProps {
  onOpenDemo: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenDemo }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Subtle dismissible greeting badge */}
      {showTooltip && (
        <div className="bg-white border border-slate-200/90 rounded-xl py-2 px-3 shadow-lg shadow-slate-300/40 text-xs text-slate-800 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[240px]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-medium text-[11px] leading-tight">
            Chat with Aarush on WhatsApp for instant quote
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 ml-1 p-0.5 rounded-full"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Cluster */}
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-xl shadow-slate-300/40">
        {/* Call Button */}
        <a
          href={`tel:${AGENCY_INFO.phone}`}
          className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          title={`Call Aarush: ${AGENCY_INFO.phoneDisplay}`}
          aria-label={`Call ${AGENCY_INFO.phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-blue-600" />
        </a>

        {/* Free Demo button */}
        <button
          type="button"
          onClick={onOpenDemo}
          className="hidden sm:inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs py-2 px-3 rounded-full transition-colors"
        >
          <Sparkles className="w-3 h-3 text-blue-600" />
          <span>Free Demo</span>
        </button>

        {/* WhatsApp Button (Dominant) */}
        <a
          href={AGENCY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2 px-3.5 rounded-full shadow-sm shadow-emerald-600/30 transition-all active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden xs:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
