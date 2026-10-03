import React, { useState } from 'react';
import {
  Globe,
  MessageSquare,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Send,
  Bot,
  Zap,
  Shield,
  Layers,
  PhoneCall,
} from 'lucide-react';
import { SERVICES, AGENCY_INFO } from '../data/content';

interface ServicesSectionProps {
  onOpenDemo: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenDemo }) => {
  // Interactive WhatsApp Simulator State
  const [chatMessages, setChatMessages] = useState<
    { sender: 'bot' | 'user'; text: string; time: string }[]
  >([
    {
      sender: 'bot',
      text: 'Namaste! Welcome to Casya Aranya Resorts & Villas. How may our concierge assist your stay today?',
      time: '10:02 AM',
    },
  ]);

  const [activeTab, setActiveTab] = useState<'features' | 'architecture'>('features');

  const handleSimulateOption = (optionText: string, botReply: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: optionText, time },
      { sender: 'bot', text: botReply, time },
    ]);
  };

  const resetChat = () => {
    setChatMessages([
      {
        sender: 'bot',
        text: 'Namaste! Welcome to Casya Aranya Resorts & Villas. How may our concierge assist your stay today?',
        time: '10:02 AM',
      },
    ]);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">
            <span>Our Expertise</span>
            <span aria-hidden="true">·</span>
            <span>Bengaluru Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Digital experiences designed to make your business look professional, trustworthy and ready to grow.
          </p>
        </div>

        {/* Two Grand Service Cards */}
        <div className="space-y-12 lg:space-y-16">
          {/* ============================================================== */}
          {/* SERVICE 01: Premium Website Development */}
          {/* ============================================================== */}
          <div className="bg-gradient-to-br from-white to-slate-50/50 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-md">
                    SERVICE 01
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    Bespoke Web Architecture
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                  Premium Website Development
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {SERVICES[0].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {SERVICES[0].features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
                  >
                    <span>Request Website Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${AGENCY_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-blue-600" />
                    <span>Discuss Requirements: {AGENCY_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup / Code Quality Benchmark */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-xl border border-slate-200/90 shadow-md p-5 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Standard Delivery Spec</div>
                        <div className="text-[10px] text-slate-400">Handcrafted · Production-Ready</div>
                      </div>
                    </div>
                    <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">
                      Zero Template Bloat
                    </div>
                  </div>

                  {/* Benchmark highlights */}
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-semibold text-slate-800">Mobile Speed & Core Web Vitals</span>
                        <span className="font-bold text-emerald-600">99 / 100</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[99%]" />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">
                        Optimized bundle size, lazy-loaded media & instant paint.
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-semibold text-slate-800">SEO & Structured Schema</span>
                        <span className="font-bold text-blue-600">100% Ready</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full w-full" />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">
                        Local business Schema, OpenGraph cards & meta architecture.
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-semibold text-slate-800">Lead Conversion Architecture</span>
                        <span className="font-bold text-blue-700">1-Tap Enabled</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-700 h-full w-[96%]" />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">
                        Sticky call & WhatsApp triggers placed strategically for max leads.
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Clean modern typography</span>
                    <span>·</span>
                    <span>No subscription traps</span>
                    <span>·</span>
                    <span>Full code ownership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* SERVICE 02: WhatsApp Business Automation */}
          {/* ============================================================== */}
          <div className="bg-gradient-to-br from-white to-emerald-50/20 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-md">
                    SERVICE 02
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    24/7 Lead Capture Engine
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                  WhatsApp Business Automation
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {SERVICES[1].description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {SERVICES[1].features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80">
                  <a
                    href={AGENCY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-emerald-600/20 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>See Live Automation on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Consult on Custom Bot Workflow</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Live Interactive WhatsApp Chat Simulator */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900 text-slate-100 rounded-2xl shadow-xl overflow-hidden border border-slate-800">
                  {/* WhatsApp Simulator Header */}
                  <div className="bg-slate-800/90 px-4 py-3 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                          CA
                        </div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-800" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>Casya Aranya Concierge</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="text-[10px] text-emerald-400">Automated Business Assistant · 24/7</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={resetChat}
                      className="text-[10px] text-slate-400 hover:text-white underline"
                    >
                      Reset Demo
                    </button>
                  </div>

                  {/* WhatsApp Chat Body */}
                  <div className="p-4 space-y-3 min-h-[220px] max-h-[250px] overflow-y-auto bg-slate-950/60 text-xs">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`max-w-[85%] rounded-xl px-3 py-2 ${
                            msg.sender === 'user'
                              ? 'bg-emerald-600 text-white rounded-br-none'
                              : 'bg-slate-800 text-slate-100 rounded-bl-none border border-slate-700/60'
                          }`}
                        >
                          <p className="leading-relaxed">{msg.text}</p>
                          <span className="block text-[9px] text-right mt-1 opacity-60">
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Quick Prompts */}
                  <div className="p-3 bg-slate-800/80 border-t border-slate-700">
                    <div className="text-[10px] text-slate-400 font-medium mb-2">
                      Tap a visitor option to test automated flow:
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() =>
                          handleSimulateOption(
                            '1. View Rainforest Villa Rates',
                            'Our Rainforest Villas start from ₹14,500/night including breakfast & nature walks. Would you like me to reserve dates for you?'
                          )
                        }
                        className="text-left text-[11px] p-1.5 bg-slate-700/80 hover:bg-slate-700 text-slate-200 rounded-md truncate transition-colors"
                      >
                        🏡 Villa Rates & Packages
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleSimulateOption(
                            '2. Book Weekend Retreat',
                            'Excellent! Please share your preferred check-in date and guest count. Our front desk manager will confirm instantly.'
                          )
                        }
                        className="text-left text-[11px] p-1.5 bg-slate-700/80 hover:bg-slate-700 text-slate-200 rounded-md truncate transition-colors"
                      >
                        📅 Book Weekend Retreat
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleSimulateOption(
                            '3. Download Brochure PDF',
                            'Sending the official Casya Aranya high-resolution lookbook & route map to this chat now! 📥'
                          )
                        }
                        className="text-left text-[11px] p-1.5 bg-slate-700/80 hover:bg-slate-700 text-slate-200 rounded-md truncate transition-colors"
                      >
                        📄 Download Brochure
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleSimulateOption(
                            '4. Speak to Reception Staff',
                            'Connecting you directly to our General Manager on call right now. Dialing...'
                          )
                        }
                        className="text-left text-[11px] p-1.5 bg-slate-700/80 hover:bg-slate-700 text-slate-200 rounded-md truncate transition-colors"
                      >
                        📞 Call Live Staff
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
