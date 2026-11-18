import { useState } from 'react'
import {
  Smartphone,
  Sparkles,
  ExternalLink,
  Layers,
  Zap,
  HardDrive,
  Film,
  CheckCircle2,
  ChevronRight,
  Play,
  Star,
  Search,
  Bookmark,
} from 'lucide-react'
import { mobileProject } from '../data/portfolioData'

const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function MobileShowcase() {
  const [activeTab, setActiveTab] = useState('browse')

  return (
    <section id="mobile-spotlight" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070710] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-medium mb-3">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mobile Engineering Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Cross-Platform <span className="gradient-text-cyan">React Native</span> Apps
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Delivering fluid 60 FPS mobile applications for iOS and Android with intuitive touch gestures, offline caching, and real-time API integrations.
          </p>
        </div>

        {/* Studio Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-[#0a0a14]/80 border border-white/[0.08] rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* Left / Center Column: Realistic Smartphone Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-[280px] sm:w-[310px] md:w-[330px]">
              
              {/* Outer Phone Frame */}
              <div className="relative bg-[#181829] p-3 rounded-[48px] phone-shadow border-2 border-white/[0.12]">
                
                {/* Side volume / power buttons simulation */}
                <div className="absolute -left-[6px] top-24 w-[3px] h-10 bg-gray-700 rounded-l-sm" />
                <div className="absolute -left-[6px] top-38 w-[3px] h-10 bg-gray-700 rounded-l-sm" />
                <div className="absolute -right-[6px] top-28 w-[3px] h-14 bg-gray-700 rounded-r-sm" />

                {/* Inner Screen Bezel */}
                <div className="relative bg-black rounded-[40px] overflow-hidden border border-white/10 aspect-[9/19.5]">
                  
                  {/* Top Dynamic Island / Punch Hole */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                    <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-2 border border-white/10 px-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-900/60 border border-cyan-400/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                    </div>
                  </div>

                  {/* Status Bar simulation */}
                  <div className="absolute top-2 left-6 right-6 z-20 flex justify-between items-center text-[10px] font-mono text-gray-300 font-bold pointer-events-none">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block scale-75" />
                      <span>5G</span>
                    </div>
                  </div>

                  {/* Screen Content: Actual Mobile App Image */}
                  <div className="w-full h-full relative overflow-hidden bg-[#070714]">
                    <img
                      src={mobileProject.image}
                      alt="CineFlow React Native Mobile App"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    {/* Interactive Overlay when tabs change */}
                    {activeTab === 'details' && (
                      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm p-4 flex flex-col justify-end text-left transition-all">
                        <div className="bg-[#121224] p-4 rounded-2xl border border-cyan-500/30">
                          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold mb-1">
                            <Film className="w-3.5 h-3.5" />
                            <span>TMDb Details Modal</span>
                          </div>
                          <p className="text-white text-xs font-bold">4K Trailer & Live Ratings</p>
                          <p className="text-gray-400 text-[11px] mt-1">
                            Dynamic routing to cast filmography, trailers via YouTube player, and genre tags.
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'watchlist' && (
                      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm p-4 flex flex-col justify-end text-left transition-all">
                        <div className="bg-[#121224] p-4 rounded-2xl border border-violet-500/30">
                          <div className="flex items-center gap-2 text-violet-400 text-xs font-mono font-semibold mb-1">
                            <Bookmark className="w-3.5 h-3.5" />
                            <span>AsyncStorage Engine</span>
                          </div>
                          <p className="text-white text-xs font-bold">Offline Bookmarks Cached</p>
                          <p className="text-gray-400 text-[11px] mt-1">
                            Zero network dependency for user's personal movie library with instant sync.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Glass glare simulation */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
                  </div>

                  {/* Home Indicator Bar */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-20" />
                </div>
              </div>

              {/* Mobile Spec Pill */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0e0e1c] border border-cyan-500/40 text-cyan-300 text-xs font-mono px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>React Native (Expo SDK)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Specs & Architecture (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
                Featured Mobile Build
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                iOS & Android Ready
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {mobileProject.title}
            </h3>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              {mobileProject.description}
            </p>

            {/* Interactive Screen Explorer Tabs */}
            <div className="w-full mb-6">
              <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                Select Interactive Feature View:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {mobileProject.screens.map((screen) => {
                  const isSelected = activeTab === screen.id
                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveTab(screen.id)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-cyan-500/10 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10'
                          : 'bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold leading-tight truncate">{screen.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-cyan-300">
                          {screen.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 line-clamp-2 leading-snug">
                        {screen.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Architectural Highlights */}
            <div className="w-full mb-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4">
              <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Engineering & Mobile Polish
              </p>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {mobileProject.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {mobileProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.05] border border-white/[0.08] text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={mobileProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] hover:border-cyan-500/40 transition-all duration-200"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>View React Native Source Code</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-200"
              >
                <span>View Full-Stack Web Projects</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
