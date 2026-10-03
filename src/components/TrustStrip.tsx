import React from 'react';
import { Palette, Smartphone, Target, MessageSquareCode, BadgeIndianRupee } from 'lucide-react';
import { TRUST_PILLARS } from '../data/content';

const iconMap = [
  Palette,
  Smartphone,
  Target,
  MessageSquareCode,
  BadgeIndianRupee,
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/60 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[idx] || Palette;
            return (
              <div
                key={pillar.id}
                className="flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center text-blue-600 shadow-xs shrink-0 group-hover:border-blue-300 group-hover:bg-blue-50/50 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
