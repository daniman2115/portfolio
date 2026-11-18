import { useState } from 'react'
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Smartphone,
  Globe,
  Radio,
  Server,
  Layers,
  Code2,
  CheckCircle2,
} from 'lucide-react'
import { projects } from '../data/portfolioData'

const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const filterCategories = [
  { id: 'All', label: 'All Projects', count: 4 },
  { id: 'Mobile', label: 'Mobile Apps', count: 1 },
  { id: 'Full-Stack', label: 'Full-Stack Web', count: 1 },
  { id: 'Real-Time', label: 'Real-Time & APIs', count: 2 },
]

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : selectedFilter === 'Real-Time'
      ? projects.filter((p) => p.category === 'Real-Time' || p.category === 'Backend')
      : projects.filter((p) => p.category === selectedFilter)

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#06060c] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono font-medium mb-3">
              <Code2 className="w-3.5 h-3.5 text-violet-400" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
              Featured <span className="gradient-text">Engineering Works</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl">
              Real-world systems, cross-platform mobile apps, and scalable web applications engineered with production standards.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#0e0e1a] border border-white/[0.08] rounded-2xl">
            {filterCategories.map((tab) => {
              const active = selectedFilter === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    active
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-[#0c0c18] border border-white/[0.08] hover:border-violet-500/40 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-900/20 flex flex-col"
            >
              {/* Window Frame Header */}
              <div className="px-5 py-3 bg-[#0a0a14] border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-gray-500 truncate">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}.app
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-cyan-300">
                  {project.stats}
                </span>
              </div>

              {/* Preview Media */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#070710]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c18] via-transparent to-transparent opacity-90" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0b0b14]/90 backdrop-blur-md border border-white/[0.12] text-white">
                    {project.isMobile ? (
                      <Smartphone className="w-3 h-3 text-cyan-400" />
                    ) : (
                      <Globe className="w-3 h-3 text-violet-400" />
                    )}
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-300 hover:border-violet-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-gray-500">
                    Production Grade
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Archive Callout */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/daniman2115"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/[0.04] hover:bg-violet-600/15 border border-white/[0.08] hover:border-violet-500/40 text-gray-300 hover:text-white text-xs font-mono transition-all duration-300"
          >
            <GitHubIcon className="w-4 h-4 text-violet-400" />
            <span>Explore all 20+ repositories on GitHub (@daniman2115)</span>
            <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>

      </div>
    </section>
  )
}
