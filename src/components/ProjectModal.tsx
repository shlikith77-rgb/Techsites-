import React, { useEffect } from 'react';
import { X, MapPin, CheckCircle2, ArrowUpRight, MessageSquare, Quote, Star, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { AGENCY_INFO } from '../data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleInquireSimilar = () => {
    const text = `Hi Aarush, I was reviewing your case study for *${project.name}* (${project.category}, ${project.location}). I would like to build a similar premium website for my business.`;
    window.open(`https://wa.me/919448319903?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
              {project.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin className="w-3 h-3 text-blue-600" />
              <span>{project.location}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Hero Image Showcase */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-900 shadow-md">
            <img
              src={project.heroImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                {project.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-200">
                {project.highlight}
              </p>
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Case Study & Solution
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Engineered Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantified Business Results */}
          {project.results && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Measurable Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-center"
                  >
                    <div className="text-xs sm:text-sm font-bold text-blue-900">{res}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Feedback Quote */}
          {project.clientQuote && (
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 relative">
              <Quote className="w-6 h-6 text-blue-300 absolute top-4 right-4" />
              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "{project.clientQuote}"
              </p>
              <div className="text-[11px] font-bold text-slate-900 mt-2">
                Leadership Team · {project.name}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Want an aesthetic inspired by <span className="font-semibold text-slate-800">{project.name}</span>?
          </div>

          <button
            type="button"
            onClick={handleInquireSimilar}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss This Style on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
