import React from 'react';
import { Search, Compass, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

const stepIcons = [Search, Compass, Code, Rocket];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">
            <span>Execution Methodology</span>
            <span aria-hidden="true">·</span>
            <span>Zero Friction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How We Build Your Website
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent, rapid four-step engineering sprint designed to take your business from concept to a high-converting digital presence.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Search;
            return (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black tracking-tight text-blue-600 font-mono">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100/60 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {step.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mb-3">
                    {step.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverable Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div>
              <div className="text-2xl font-black text-slate-900">2–3 Days</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Standard Turnaround for 1-Page Websites
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl font-black text-blue-700">100% Direct</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Direct WhatsApp line with Founder Aarush Kumar
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl font-black text-slate-900">Zero Risk</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">
                Full review cycle before final launch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
