import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Eye, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';

interface OurWorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { label: 'All Projects (5)', value: 'all' },
    { label: 'Restaurant', value: 'Restaurant' },
    { label: 'Hospitality', value: 'Hotel / Hospitality' },
    { label: 'Salon & Beauty', value: 'Salon & Beauty' },
    { label: 'Real Estate', value: 'Real Estate' },
    { label: 'Fitness & Gym', value: 'Fitness / Gym' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="work" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">
              <span>Verified Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Client Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Premium digital experiences created for different types of businesses.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers as allowed by Constitution) */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200/70">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setActiveFilter(opt.value)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === opt.value
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col ${
                idx === 0 && activeFilter === 'all' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Project Image Container */}
              <div
                className={`relative overflow-hidden bg-slate-100 cursor-pointer ${
                  idx === 0 && activeFilter === 'all'
                    ? 'aspect-[16/9] sm:aspect-[21/9]'
                    : 'aspect-[16/10]'
                }`}
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={idx === 0 && activeFilter === 'all' ? project.heroImage : project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Location & Category Header on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-blue-300 tracking-wider uppercase text-[11px] bg-slate-950/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-200 bg-slate-950/50 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px]">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Quick inspect prompt hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-white/95 text-slate-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-xs">
                    <Eye className="w-3.5 h-3.5 text-blue-600" />
                    <span>View Case Study & Walkthrough</span>
                  </div>
                </div>

                {/* Title over image at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1">
                    {project.highlight}
                  </p>
                </div>
              </div>

              {/* Card Information Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Clean unboxed tags with typographic separator */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <React.Fragment key={tag}>
                        {tagIdx > 0 && <span aria-hidden="true" className="text-slate-300">·</span>}
                        <span className="font-medium">{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-800 group/btn"
                  >
                    <span>View Project Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <span className="text-[11px] text-slate-400 font-mono">
                    PROJ-0{PROJECTS.indexOf(project) + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
