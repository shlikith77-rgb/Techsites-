import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight, MessageSquare, Check, Phone } from 'lucide-react';
import { AGENCY_INFO, CATEGORIES } from '../data/content';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  preselectedCategory,
}) => {
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(preselectedCategory || 'Restaurants & Cafés');
  const [city, setCity] = useState('Bengaluru');

  useEffect(() => {
    if (preselectedCategory) {
      setCategory(preselectedCategory);
    }
  }, [preselectedCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*FREE DEMO REQUEST - TECHSITES*%0A%0A*Business Name:* ${encodeURIComponent(
      businessName || 'My Business'
    )}%0A*Category:* ${encodeURIComponent(category)}%0A*City:* ${encodeURIComponent(
      city
    )}%0A*Mobile:* ${encodeURIComponent(
      phone || 'Provided in chat'
    )}%0A%0AHi Aarush, please share a free preview concept / demo layout for our business.`;

    const url = `https://wa.me/919448319903?text=${text}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-[11px] uppercase tracking-wider font-bold text-blue-200 mb-1">
            Complimentary Consultation
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Get Your Free Website Demo
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mt-1 leading-relaxed">
            See how your business will look with a world-class digital storefront before spending a single rupee.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleDemoSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Business / Brand Name *
            </label>
            <input
              type="text"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. Royal Bengal Kitchen"
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Industry Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                City / Location
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Bengaluru, Mumbai"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Your Mobile / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 94483 19903"
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
            />
          </div>

          <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-100 space-y-1.5 text-[11px] text-slate-600">
            <div className="flex items-center gap-1.5 text-blue-900 font-semibold">
              <Check className="w-3.5 h-3.5 text-blue-600" />
              <span>Tailored visual wireframe & color scheme</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-900 font-semibold">
              <Check className="w-3.5 h-3.5 text-blue-600" />
              <span>WhatsApp lead automation walk-through</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-900 font-semibold">
              <Check className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct discussion with Aarush Kumar</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 px-5 rounded-xl shadow-md shadow-blue-600/25 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Receive My Free Demo on WhatsApp</span>
          </button>

          <div className="text-center">
            <a
              href={`tel:${AGENCY_INFO.phone}`}
              className="text-xs text-slate-500 hover:text-blue-700 flex items-center justify-center gap-1"
            >
              <Phone className="w-3 h-3 text-blue-600" />
              <span>Or call Aarush directly: {AGENCY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
