import React from 'react';
import { Star, Quote, Building2, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">
            <span>Client Endorsements</span>
            <span aria-hidden="true">·</span>
            <span>Real Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Trusted by Business Owners
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Here is how partnering with TECHSITES elevated our clients' digital authority and customer conversion.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-300/60" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Project Context */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {item.author}
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.role}, {item.company}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] font-semibold text-blue-700">
                    {item.projectRef}
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center justify-end gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
