import React from 'react';
import { MessageSquare, Clock, Zap, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

export const WhatsAppShowcase: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-blue-50/40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-emerald-700 font-bold mb-3">
              <span>Conversion Secret</span>
              <span aria-hidden="true">·</span>
              <span>WhatsApp First</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why Indian Businesses Convert 3x More Leads on WhatsApp
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              90% of Indian mobile users abandon traditional contact forms. When your website connects directly into WhatsApp, prospective clients receive instantaneous service menus, pricing sheets, and human connection within 5 seconds.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Instant 24/7 Response Speed
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Capture late-night visitors while competitors are sleeping.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Verified Phone Numbers Only
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Zero fake emails or bots. Every lead is a real human with an active WhatsApp account.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Automated Menus, Catalogs & Booking
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Send PDF brochures, salon lookbooks, or restaurant menus automatically without manual typing.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-md shadow-emerald-600/25 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Experience Real WhatsApp Flow with Aarush</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Comparison Table Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Comparison: Old Website vs TECHSITES System
              </div>

              <div className="space-y-4">
                {/* Row 1 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] font-bold text-rose-600 mb-1">Traditional Website</div>
                    <div className="text-xs text-slate-600">Visitor fills a long 6-field form and waits 24 hours for an email reply.</div>
                  </div>
                  <div className="border-l border-slate-200 pl-4">
                    <div className="text-[11px] font-bold text-emerald-700 mb-1">TECHSITES Architecture</div>
                    <div className="text-xs text-slate-800 font-medium">1-tap launches WhatsApp with tailored greeting in 3 seconds.</div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] font-bold text-rose-600 mb-1">Traditional Website</div>
                    <div className="text-xs text-slate-600">Spam submissions, fake email addresses, and lost sales opportunities.</div>
                  </div>
                  <div className="border-l border-slate-200 pl-4">
                    <div className="text-[11px] font-bold text-emerald-700 mb-1">TECHSITES Architecture</div>
                    <div className="text-xs text-slate-800 font-medium">100% verified Indian mobile numbers ready for direct follow-up.</div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[11px] font-bold text-rose-600 mb-1">Traditional Website</div>
                    <div className="text-xs text-slate-600">Hard to update menus, prices, and catalogs without paying extra fees.</div>
                  </div>
                  <div className="border-l border-slate-200 pl-4">
                    <div className="text-[11px] font-bold text-emerald-700 mb-1">TECHSITES Architecture</div>
                    <div className="text-xs text-slate-800 font-medium">Instant PDF and digital brochure delivery right inside WhatsApp chats.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-800">Available across all our custom packages</span>
                <span className="text-blue-600 font-bold">Included in Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
