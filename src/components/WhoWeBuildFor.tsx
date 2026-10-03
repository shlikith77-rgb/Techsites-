import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/content';
import { IndustryCategory } from '../types';

interface WhoWeBuildForProps {
  onSelectCategory: (category: IndustryCategory) => void;
}

export const WhoWeBuildFor: React.FC<WhoWeBuildForProps> = ({ onSelectCategory }) => {
  return (
    <section id="industries" className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">
            <span>Specialized Experience</span>
            <span aria-hidden="true">·</span>
            <span>Tailored UX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Built For Businesses That Want To Look Professional Online.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every sector requires unique customer flows, from instant table bookings and lookbooks to property brochures and appointment pipelines.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="group cursor-pointer bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col"
            >
              {/* Category Image with gentle zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-semibold drop-shadow-xs">
                    {category.name}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                    {category.subtitle}
                  </p>
                </div>

                {/* Subtitle tag hints without static pills */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400">
                  {category.tags.slice(0, 2).map((t, idx) => (
                    <React.Fragment key={t}>
                      {idx > 0 && <span aria-hidden="true">·</span>}
                      <span>{t}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Don't see your exact business category listed above?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              We design bespoke websites for all enterprise models, private practices, and modern brands.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectCategory(CATEGORIES[CATEGORIES.length - 1])}
            className="shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            <span>Consult on Your Industry</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
