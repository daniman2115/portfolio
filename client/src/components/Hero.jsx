import { useState, useEffect, useRef } from 'react'
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Smartphone,
  Globe,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { personalInfo, metrics } from '../data/portfolioData'

const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

function useTypingEffect(words, speed = 70, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIdx]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(currentWord.slice(0, charIdx + 1))
          if (charIdx + 1 === currentWord.length) {
            setTimeout(() => setDeleting(true), pause)
          } else {
            setCharIdx((c) => c + 1)
          }
        } else {
          setDisplay(currentWord.slice(0, charIdx - 1))
          if (charIdx - 1 <= 0) {
            setDeleting(false)
            setWordIdx((w) => (w + 1) % words.length)
            setCharIdx(0)
          } else {
            setCharIdx((c) => c - 1)
          }
        }
      },
      deleting ? speed / 2 : speed
    )
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

export default function Hero() {
  const currentRole = useTypingEffect(personalInfo.roles)
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-gradient bg-grid-cyber"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column — 7 cols */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-medium mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Full-Stack & Mobile Roles (2026)</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-4">
            Hi, I'm <span className="gradient-text">Daniel Hailu</span>
          </h1>

          {/* Dynamic typing role switcher */}
          <div className="h-12 sm:h-14 flex items-center mb-5">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200">
              {currentRole}
              <span className="text-cyan-400 animate-blink ml-1">_</span>
            </span>
          </div>

          {/* Bio paragraph */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
            I architect and build robust end-to-end applications: from fluid,
            <span className="text-white font-medium"> 60 FPS React Native mobile apps</span> to resilient
            <span className="text-white font-medium"> distributed web systems</span> powered by React, Node.js, Express, Laravel, and SQL/NoSQL databases. Clean architecture, high performance, and rapid delivery.
          </p>

          {/* Location & Status info */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mb-8 pb-4 border-b border-white/[0.08] w-full">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-violet-400" />
              <span>Addis Ababa, Ethiopia · Remote & Relocation</span>
            </div>
            <div className="hidden sm:inline-block text-gray-600">|</div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>1+ Years Experience · 5+ Shipped Projects</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="#mobile-spotlight"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-xl shadow-violet-600/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 group-hover:from-violet-500 group-hover:to-cyan-500 transition-all duration-300" />
              <span className="relative flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-cyan-200" />
                <span>Explore Mobile & Web Apps</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href={personalInfo.resumePath}
              download
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-violet-400" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-mono">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] hover:bg-violet-600/20 border border-white/[0.08] hover:border-violet-500/50 text-gray-400 hover:text-white transition-all duration-200"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/50 text-gray-400 hover:text-white transition-all duration-200"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send direct email"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] hover:bg-emerald-600/20 border border-white/[0.08] hover:border-emerald-500/50 text-gray-400 hover:text-white transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column — 5 cols (Portrait + Telemetry Badges) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-72 sm:w-84 md:w-96">

            {/* Ambient halo effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-cyan-500/30 rounded-3xl blur-3xl scale-95 animate-glow-pulse" />

            {/* Profile image card */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl backdrop-blur-xl">
              <div className="relative rounded-[22px] overflow-hidden bg-[#0d0d18] border border-white/[0.08] aspect-[4/5]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060c] via-transparent to-transparent opacity-80" />

                {/* Bottom title overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0b0b14]/85 backdrop-blur-md border border-white/[0.08]">
                  <p className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    Daniel Hailu
                  </p>
                  <p className="text-[11px] text-gray-300">
                    Full-Stack Engineer & Mobile Architect
                  </p>
                </div>
              </div>
            </div>

            {/* Telemetry Badge 1: React Native (Top Left) */}
            <div className="absolute -top-4 -left-6 sm:-left-10 bg-[#0c0c1a]/90 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">React Native & Expo</p>
                <p className="text-[10px] text-gray-400 font-mono">60 FPS Native Touch</p>
              </div>
            </div>

            {/* Telemetry Badge 2: Full Stack Node/Laravel (Bottom Left) */}
            <div className="absolute -bottom-4 -left-6 sm:-left-8 bg-[#0c0c1a]/90 backdrop-blur-md border border-violet-500/30 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-float-slow">
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Full-Stack Web</p>
                <p className="text-[10px] text-gray-400 font-mono">React · Node · Laravel · DBs</p>
              </div>
            </div>

            {/* Telemetry Badge 3: Shipped Projects (Right Top) */}
            <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-[#0c0c1a]/90 backdrop-blur-md border border-emerald-500/30 rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-2.5 animate-float">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-base font-extrabold gradient-text leading-none">3+</p>
                <p className="text-[10px] text-gray-400 font-mono">Shipped Builds</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Metrics Counter Strip */}
      <div className="max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight gradient-text">
              {item.value}
            </span>
            <span className="text-xs font-semibold text-gray-300 mt-1">{item.label}</span>
            <span className="text-[11px] text-gray-500 font-mono">{item.detail}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
