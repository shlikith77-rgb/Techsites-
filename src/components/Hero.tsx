import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, MessageCircle, Laptop, Smartphone } from 'lucide-react';
import { AGENCY_INFO, PROJECTS } from '../data/content';

interface HeroProps {
  onOpenDemo: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onExploreWork }) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  const previews = [
    {
      title: 'Misco and Ember',
      category: 'Luxury Restaurant · Mumbai',
      metric: 'Table bookings +180%',
      image: PROJECTS[0].image,
      headline: 'Modern Gastronomy Meets Atmospheric Design',
      tagline: 'Instant WhatsApp reservation flow',
    },
    {
      title: 'Casya Aranya',
      category: 'Hospitality Resort · Coorg',
      metric: 'Direct bookings +62%',
      image: PROJECTS[1].image,
      headline: 'Botanical Sanctuary & Rainforest Villas',
      tagline: 'VIP Concierge automation',
    },
    {
      title: 'Studio Unisex Salon',
      category: 'Haute Salon · Bengaluru',
      metric: '300+ monthly bookings',
      image: PROJECTS[2].image,
      headline: 'Architectural Grooming & Hair Artistry',
      tagline: 'One-tap stylist calendar',
    },
    {
      title: 'North Line Real Estate',
      category: 'Ultra-Luxury Realty · Hyderabad',
      metric: 'Brochure leads +78%',
      image: PROJECTS[3].image,
      headline: 'Commanding High-Rise Living & Villas',
      tagline: 'Gated WhatsApp investor packet',
    },
  ];

  const currentPreview = previews[activePreviewIndex];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      {/* Soft background accents (light subtle blue and white) */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Trust statement label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 bg-blue-50/80 border border-blue-200/60 px-3.5 py-1.5 rounded-md mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{AGENCY_INFO.trustStatement}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
              Premium Websites That Make Businesses{' '}
              <span className="relative inline-block text-blue-700">
                Look Bigger.
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2.5 text-blue-200 -z-10"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C40 2 120 1.5 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Subline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              {AGENCY_INFO.subline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 active:scale-98 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <span>Get Your Free Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-200 hover:border-slate-300"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
            </div>

            {/* Micro proof points */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">No generic templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Direct WhatsApp leads</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">Direct Founder access</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Studio Visual (Live Interactive Showcase) */}
          <div className="lg:col-span-6 relative">
            {/* Visual Container Card */}
            <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/40 p-4 sm:p-5">
              {/* Top Studio Control Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 ml-2 hidden sm:inline">
                    techsites.studio/preview
                  </span>
                </div>

                {/* Device viewport toggle */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setDeviceMode('desktop')}
                    className={`p-1.5 rounded-md text-xs transition-colors flex items-center gap-1 ${
                      deviceMode === 'desktop'
                        ? 'bg-white text-blue-700 shadow-xs font-semibold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Desktop Preview"
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Desktop</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeviceMode('mobile')}
                    className={`p-1.5 rounded-md text-xs transition-colors flex items-center gap-1 ${
                      deviceMode === 'mobile'
                        ? 'bg-white text-blue-700 shadow-xs font-semibold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Mobile</span>
                  </button>
                </div>
              </div>

              {/* Main Simulated Screen View */}
              <div
                className={`relative rounded-xl overflow-hidden bg-slate-950 transition-all duration-300 ${
                  deviceMode === 'mobile' ? 'max-w-[280px] mx-auto aspect-[9/16]' : 'aspect-[16/10]'
                }`}
              >
                <img
                  src={currentPreview.image}
                  alt={currentPreview.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Gradient overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold mb-1">
                    {currentPreview.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1.5">
                    {currentPreview.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2 mb-3">
                    {currentPreview.headline}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[11px]">
                    <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{currentPreview.tagline}</span>
                    </div>
                    <span className="font-semibold text-white/90 bg-white/10 px-2 py-0.5 rounded-sm">
                      {currentPreview.metric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Switcher Strip */}
              <div className="mt-3.5 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-medium text-slate-700">Live Client Showcase:</span>
                  <span>Tap to inspect live aesthetic</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {previews.map((p, idx) => (
                    <button
                      key={p.title}
                      type="button"
                      onClick={() => setActivePreviewIndex(idx)}
                      className={`text-left p-2 rounded-lg border text-xs transition-all ${
                        activePreviewIndex === idx
                          ? 'border-blue-600 bg-blue-50/70 text-blue-900 font-semibold'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600'
                      }`}
                    >
                      <div className="truncate font-medium">{p.title}</div>
                      <div className="text-[10px] text-slate-400 truncate">{p.category.split('·')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Floating Quality Badge (Desktop) */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-slate-200/90 rounded-xl p-3 shadow-lg shadow-slate-300/30 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  99
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">Google PageSpeed</div>
                  <div className="text-[11px] text-slate-500">Ultra-fast sub-second loading</div>
                </div>
              </div>

              {/* Floating Guarantee Badge (Desktop) */}
              <div className="absolute -top-4 -right-4 bg-white border border-blue-100 rounded-xl p-2.5 shadow-md shadow-blue-500/10 hidden sm:flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-slate-800">
                  Built for Indian Businesses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
