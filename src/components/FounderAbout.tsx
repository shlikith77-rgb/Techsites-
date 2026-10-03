import React from 'react';
import { ShieldCheck, MapPin, Mail, Phone, CheckCircle, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface FounderAboutProps {
  onOpenDemo: () => void;
}

export const FounderAbout: React.FC<FounderAboutProps> = ({ onOpenDemo }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Studio Coordinates */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-md">
              {/* Studio Crest */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-100 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-md shadow-blue-600/20">
                  TS
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {AGENCY_INFO.brandName}
                  </h3>
                  <div className="text-xs text-blue-700 font-semibold">
                    Professional Website Developer Studio
                  </div>
                </div>
              </div>

              {/* Founder Profile Details */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Founder & Lead</span>
                  <span className="font-bold text-slate-900">{AGENCY_INFO.founder}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Studio Location</span>
                  <div className="flex items-center gap-1.5 font-medium text-slate-900 text-right">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>{AGENCY_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Direct Telephone</span>
                  <a
                    href={`tel:${AGENCY_INFO.phone}`}
                    className="font-bold text-blue-700 hover:underline"
                  >
                    {AGENCY_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Official Email</span>
                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="font-medium text-slate-800 hover:text-blue-600"
                  >
                    {AGENCY_INFO.email}
                  </a>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500">Studio Focus</span>
                  <span className="font-semibold text-slate-900">
                    Web Architecture & WhatsApp Automation
                  </span>
                </div>
              </div>

              {/* Direct Touch Action */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-xs py-2.5 px-4 rounded-xl transition-colors"
                >
                  <span>Direct WhatsApp Line to Aarush</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Narrative & Agency Principles */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">
              <span>Studio Philosophy</span>
              <span aria-hidden="true">·</span>
              <span>Craft & Integrity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              "We Build Websites That Make Your Business Look Twice As Established."
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              <p>
                Too many businesses in India are let down by two extremes: expensive legacy agencies that take six months to deliver sluggish WordPress sites, or inexperienced freelancers who paste outdated templates full of broken links.
              </p>
              <p>
                At <strong className="text-slate-900">TECHSITES</strong>, we operate as a precision studio. Every line of code, typography choice, and mobile interaction is handcrafted to command respect from your customers the second your site loads.
              </p>
              <p>
                When you partner with us, you speak directly with me — founder Aarush Kumar. No account managers playing telephone, no bloated retainers, and no hidden charges.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Extreme Attention to Detail</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Pixel-perfect alignments, smooth transitions, and clean typography hierarchy.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Fast, Frictionless Comms</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Instant updates over WhatsApp. Live staging previews in days, not months.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md shadow-blue-600/20 transition-all"
              >
                <span>Request Free Demo Concept</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${AGENCY_INFO.phone}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 py-3 px-4"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Aarush: {AGENCY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
