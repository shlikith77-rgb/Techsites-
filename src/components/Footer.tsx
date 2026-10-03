import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                TS
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white">
                {AGENCY_INFO.brandName}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Professional website development studio and WhatsApp automation agency. We build modern, high-converting digital flagships that make businesses look bigger and attract premium clients.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>{AGENCY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Founder: {AGENCY_INFO.founder} · {AGENCY_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>{AGENCY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Studio
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services & What We Build
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-blue-400 transition-colors">
                  Selected Work & Case Studies
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-blue-400 transition-colors">
                  Who We Build For
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-400 transition-colors">
                  Our 4-Step Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  Websites & WhatsApp Automation Packages (from ₹99)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-blue-400 transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Studio & Aarush Kumar
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl p-6 border border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              Fastest Response
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Ready to Discuss Your Project?
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Send a quick message on WhatsApp directly to founder Aarush Kumar. Get an instant scope estimate and tailored design recommendations today.
            </p>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors shadow-sm shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message Aarush on WhatsApp</span>
            </a>

            <div className="mt-3 text-center">
              <a
                href={`tel:${AGENCY_INFO.phone}`}
                className="text-[11px] text-slate-400 hover:text-white"
              >
                Or telephone: {AGENCY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {AGENCY_INFO.brandName} Studio. All rights reserved. Crafted with precision in Bengaluru, India.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
