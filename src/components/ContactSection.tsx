import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { AGENCY_INFO, PRICING_PLANS } from '../data/content';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    category: 'Restaurant',
    service: initialService || 'Premium 1-Page Website (₹99)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct direct prefilled WhatsApp message to Aarush
    const message = `*NEW WEBSITE INQUIRY - TECHSITES*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Business:* ${encodeURIComponent(
      formData.businessName
    )}%0A*Category:* ${encodeURIComponent(
      formData.category
    )}%0A*Package:* ${encodeURIComponent(
      formData.service
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(
      formData.email || 'N/A'
    )}%0A*Notes:* ${encodeURIComponent(formData.notes || 'Interested in a website demo.')}`;

    const waLink = `https://wa.me/919448319903?text=${message}`;

    setSubmitted(true);
    // Open in WhatsApp
    window.open(waLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Studio Contact & Bengaluru Office */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">
                <span>Start Your Project</span>
                <span aria-hidden="true">·</span>
                <span>Fast Response</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Let's Build Something Exceptional.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Ready to make your business look bigger and convert more customers? Reach out directly to discuss your requirements, request a free preview, or claim our signature ₹99 starter package.
              </p>

              {/* Direct Coordinate Cards */}
              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${AGENCY_INFO.phone}`}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-200/90 hover:border-blue-400 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Telephone & WhatsApp</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {AGENCY_INFO.phoneDisplay}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Direct line to Founder Aarush Kumar
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-200/90 hover:border-blue-400 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Studio Inquiry Email</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {AGENCY_INFO.email}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Replies within 2 to 4 business hours
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-200/90 bg-slate-50/40">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Studio Headquarters</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900">
                      {AGENCY_INFO.location}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {AGENCY_INFO.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-emerald-900">
                  Aarush is Online on WhatsApp
                </span>
              </div>
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline"
              >
                Chat Now →
              </a>
            </div>
          </div>

          {/* Right Column: High-Converting Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Request a Free Demo / Project Quote
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below to receive a custom visual preview and quote directly over WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center bg-white rounded-xl border border-emerald-200 p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Inquiry Generated!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                    We opened WhatsApp with your project summary. If WhatsApp didn't open automatically, click the button below to connect with Aarush.
                  </p>
                  <a
                    href={AGENCY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="block mx-auto text-xs text-slate-400 hover:text-slate-600 mt-4 underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Business / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        placeholder="e.g. Patel Fine Dining"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@business.com"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Business Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      >
                        <option value="Restaurant / Café">Restaurant / Café</option>
                        <option value="Hotel / Resort">Hotel / Resort</option>
                        <option value="Salon & Beauty">Salon & Beauty</option>
                        <option value="Gym & Fitness">Gym & Fitness</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Healthcare & Clinic">Healthcare & Clinic</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Local Business">Local Business</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Startup / Tech">Startup / Tech</option>
                        <option value="Other Industry">Other Industry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Interested Package
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      >
                        <option value="Premium 1-Page Website (₹99)">
                          Premium 1-Page Website (₹99)
                        </option>
                        <option value="Premium Multi Page Business Website (₹599)">
                          Premium Multi Page Business Website (₹599)
                        </option>
                        <option value="Premium E-commerce Website (₹1,299)">
                          Premium E-commerce Website (₹1,299)
                        </option>
                        <option value="WhatsApp Automation - Small & Medium Scale (₹999)">
                          WhatsApp Automation — Small & Medium Scale (₹999)
                        </option>
                        <option value="WhatsApp Automation - Large Scale (₹2,999)">
                          WhatsApp Automation — Large Scale (₹2,999)
                        </option>
                        <option value="Custom Combo / Enterprise Bundle">
                          Custom Combo / Enterprise Bundle
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Tell us about your requirements or current website
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. We are launching next week and need an elegant website with WhatsApp table booking..."
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md shadow-blue-600/25 transition-all duration-200 active:scale-98"
                  >
                    <span>Send Inquiry & Connect on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your privacy is 100% protected. No spam ever.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
