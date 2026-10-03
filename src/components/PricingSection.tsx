import React, { useState } from 'react';
import {
  Check,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  MessageSquare,
  Sparkles,
  Layers,
  Infinity as InfinityIcon,
  HelpCircle,
} from 'lucide-react';
import {
  PRICING_PLANS,
  WHATSAPP_AUTOMATION_PLANS,
  PRICING_GUARANTEES,
  AGENCY_INFO,
} from '../data/content';
import { PricingPlan, AutomationPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan | AutomationPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'websites' | 'automation'>('websites');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">
            <span>Direct & Transparent</span>
            <span aria-hidden="true">·</span>
            <span>Lifetime Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Transparent Service Packages
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Professional websites and WhatsApp automation without recurring monthly software traps or hidden fees.
          </p>

          {/* Service Category Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('websites')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'websites'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span>3 Website Packages</span>
              <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-extrabold">
                from ₹99
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('automation')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'automation'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>2 WhatsApp Automation Services</span>
              <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-extrabold">
                from ₹999
              </span>
            </button>
          </div>
        </div>

        {/* ================================================================ */}
        {/* TAB 1: 3 WEBSITE PACKAGES */}
        {/* ================================================================ */}
        {activeTab === 'websites' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {PRICING_PLANS.map((plan) => {
                const isPlan01 = plan.id === 'starter-1page';
                const isPopular = plan.popular;

                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isPopular
                        ? 'bg-gradient-to-b from-blue-50/70 to-white border-2 border-blue-600 shadow-xl shadow-blue-500/10'
                        : isPlan01
                        ? 'bg-white border-2 border-blue-200/90 shadow-sm hover:shadow-md'
                        : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                    }`}
                  >
                    {/* Badge */}
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm shadow-blue-600/30">
                        Most Popular for Businesses
                      </div>
                    )}
                    {isPlan01 && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                        Special Entry Offer
                      </div>
                    )}

                    <div>
                      {/* Plan Header */}
                      <div className="mb-4">
                        <div className="text-xs font-mono font-bold text-blue-600 uppercase mb-1">
                          Website Package 0{PRICING_PLANS.indexOf(plan) + 1}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 leading-snug">
                          {plan.tagline}
                        </p>
                      </div>

                      {/* Price Block */}
                      <div className="my-5 pb-5 border-b border-slate-200/80">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                            {plan.price}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">
                            one-time lifetime fee
                          </span>
                        </div>
                        <div className="text-[11px] text-emerald-700 font-bold mt-1.5 flex items-center gap-1">
                          <InfinityIcon className="w-3.5 h-3.5" />
                          <span>Lifetime charges · Not yearly recurring</span>
                        </div>
                      </div>

                      {/* Suitable for note */}
                      <div className="mb-6 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                        <span className="font-semibold text-slate-900 block mb-0.5">Suitable For:</span>
                        {plan.suitableFor}
                      </div>

                      {/* Feature Checklist */}
                      <div className="space-y-2.5 mb-8">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          What is Included:
                        </div>
                        {plan.features.map((feat) => {
                          const isSpecialPoint =
                            feat.includes('Hosting included') ||
                            feat.includes('Domain name charges are extra');

                          return (
                            <div
                              key={feat}
                              className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                                isSpecialPoint
                                  ? 'font-bold text-slate-900 bg-blue-50/50 p-1.5 rounded-md border border-blue-100/60'
                                  : 'text-slate-700'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                  isSpecialPoint
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-50 text-blue-700'
                                }`}
                              >
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span className="leading-snug">{feat}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div>
                      <button
                        type="button"
                        onClick={() => onSelectPlan(plan)}
                        className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm transition-all duration-200 active:scale-98 ${
                          isPopular
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25'
                            : 'bg-slate-900 hover:bg-blue-600 text-white'
                        }`}
                      >
                        <span>{plan.ctaText}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <div className="mt-3 text-center">
                        <a
                          href={`https://wa.me/919448319903?text=Hi%20Aarush,%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(
                            plan.name
                          )}%20(${encodeURIComponent(plan.price)}).`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-slate-500 hover:text-emerald-700 font-semibold transition-colors"
                        >
                          Order instantly via WhatsApp →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* TAB 2: 2 WHATSAPP AUTOMATION SERVICES */}
        {/* ================================================================ */}
        {activeTab === 'automation' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
              {WHATSAPP_AUTOMATION_PLANS.map((plan) => {
                const isPopular = plan.popular;

                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isPopular
                        ? 'bg-gradient-to-b from-emerald-50/60 to-white border-2 border-emerald-600 shadow-xl shadow-emerald-500/10'
                        : 'bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {/* Badge */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                      {plan.highlight}
                    </div>

                    <div>
                      {/* Plan Header */}
                      <div className="mb-4">
                        <div className="text-xs font-mono font-bold text-emerald-700 uppercase mb-1">
                          WhatsApp Automation Service 0{WHATSAPP_AUTOMATION_PLANS.indexOf(plan) + 1}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 leading-snug">
                          {plan.tagline}
                        </p>
                      </div>

                      {/* Price Block */}
                      <div className="my-5 pb-5 border-b border-slate-200/80">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                            {plan.price}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">
                            one-time setup fee
                          </span>
                        </div>
                        <div className="text-[11px] text-emerald-700 font-bold mt-1.5 flex items-center gap-1">
                          <InfinityIcon className="w-3.5 h-3.5" />
                          <span>Lifetime charges · Not yearly recurring</span>
                        </div>
                      </div>

                      {/* Suitable for */}
                      <div className="mb-6 p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs text-slate-700 leading-relaxed">
                        <span className="font-semibold text-emerald-950 block mb-0.5">Suitable For:</span>
                        {plan.suitableFor}
                      </div>

                      {/* Feature Checklist */}
                      <div className="space-y-2.5 mb-8">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Automation Workflow Features:
                        </div>
                        {plan.features.map((feat: string) => (
                          <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div>
                      <button
                        type="button"
                        onClick={() => onSelectPlan(plan)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all duration-200 active:scale-98"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>{plan.ctaText}</span>
                      </button>

                      <div className="mt-3 text-center">
                        <a
                          href={`https://wa.me/919448319903?text=Hi%20Aarush,%20I%20am%20interested%20in%20WhatsApp%20Automation%20for%20${encodeURIComponent(
                            plan.name
                          )}%20(${encodeURIComponent(plan.price)}).`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-slate-500 hover:text-emerald-700 font-semibold transition-colors"
                        >
                          Discuss custom automation with Aarush →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* EXPLICIT PRICING GUARANTEES CARD */}
        {/* ================================================================ */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-emerald-50/70 border border-blue-200/80 shadow-xs">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-700 bg-white px-3 py-1 rounded-full border border-blue-200 shadow-2xs">
                Guaranteed Pricing Policy
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2">
                Clear, Fair & 100% Transparent Terms
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 bg-white/90 rounded-xl border border-slate-200/80 shadow-2xs">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Hosting Included
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                    High-speed, secure cloud hosting setup is completely included with your package.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white/90 rounded-xl border border-slate-200/80 shadow-2xs">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Domain Name Charges are Extra (Optional)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                    If you have your own domain, we link it for free. If you need a new domain, we register it at actual registrar cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white/90 rounded-xl border border-slate-200/80 shadow-2xs">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    This is Lifetime Charges, Not Yearly Recurring
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                    Pay once and own your website and automation setup forever. Zero monthly subscription lock-ins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white/90 rounded-xl border border-slate-200/80 shadow-2xs">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    No Hidden Charges — Fully Transparent Pricing
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                    What you see is what you pay. Every feature is listed clearly upfront before we begin work.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <span>Need a custom package or combo bundle?</span>
              <a
                href={`tel:${AGENCY_INFO.phone}`}
                className="font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Speak directly to Aarush: {AGENCY_INFO.phoneDisplay}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
