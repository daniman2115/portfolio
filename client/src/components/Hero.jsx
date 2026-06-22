import { useEffect, useState, useRef } from 'react'
import { ArrowRight, Download, Mail, MapPin, Sparkles } from 'lucide-react'
import profileImage from '../assets/image.png'

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

const roles = ['Full-Stack Engineer', 'React Developer', 'Node.js Expert', 'Cloud Architect']

const stats = [
  { value: '3+', label: 'Years Exp.' },
  { value: '20+', label: 'Projects' },
  { value: '10+', label: 'Clients' },
]

// Animated typing hook
function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx((c) => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx((w) => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx((c) => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

// Mouse-follow spotlight
function useMouseSpotlight(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }
    el.addEventListener('mousemove', move)
    return () => el.removeEventListener('mousemove', move)
  }, [ref])
}

export default function Hero() {
  const role = useTypingEffect(roles)
  const sectionRef = useRef(null)
  useMouseSpotlight(sectionRef)

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden bg-[#05050a]"
      style={{
        background:
          'radial-gradient(circle 800px at var(--mx, 50%) var(--my, 40%), rgba(109,40,217,0.06) 0%, transparent 70%), #05050a',
      }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glow blobs */}
        <div className="glow-pulse absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-700/10 blur-[120px]" />
        <div className="glow-pulse absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-indigo-700/10 blur-[100px]" style={{ animationDelay: '1.5s' }} />
        <div className="glow-pulse absolute top-2/3 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-700/8 blur-[90px]" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left ── */}
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-medium px-3.5 py-1.5 rounded-full mb-7 shimmer">
            <Sparkles className="w-3.5 h-3.5" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Daniel</span>
          </h1>

          {/* Typing effect */}
          <div className="h-10 flex items-center mb-5">
            <span className="text-xl md:text-2xl font-medium text-gray-300">
              {role}
              <span className="cursor text-violet-400 ml-0.5">|</span>
            </span>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed mb-7 max-w-lg">
            I craft performant, scalable web applications — from polished
            interfaces to resilient back-end systems. Clean code, real results.
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-8">
            <MapPin className="w-4 h-4 text-violet-500" />
            <span>San Francisco, CA · Open to remote</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 relative overflow-hidden text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:from-violet-500 group-hover:to-indigo-500 transition-all duration-300" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)] transition-opacity duration-300" />
              <span className="relative">View My Work</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-violet-500/40 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-700 uppercase tracking-widest mr-2">Links</span>
            {[
              { href: 'https://github.com', Icon: GitHubIcon, label: 'GitHub' },
              { href: 'https://linkedin.com', Icon: LinkedInIcon, label: 'LinkedIn' },
              { href: 'mailto:you@example.com', Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="group w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-violet-600/20 border border-white/8 hover:border-violet-500/50 text-gray-500 hover:text-violet-300 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right ── */}
        <div className="hidden lg:flex flex-col items-center gap-5">
          {/* Profile card */}
          <div className="float relative w-full max-w-sm">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-600/30 via-indigo-600/20 to-cyan-600/20 blur-xl" />
            <div className="relative bg-[#0d0d18] border border-white/10 rounded-3xl p-7 overflow-hidden">
              {/* Inner shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

              {/* Avatar */}
                <img src={profileImage} className="relative w-40 h-40 rounded-2xl  flex items-center justify-center text-4xl mb-5 shadow-xl shadow-violet-900/40"/>

              <h3 className="text-white font-bold text-xl mb-0.5">Daniel Hailu</h3>
              <p className="text-gray-500 text-sm mb-4">Full-Stack Engineer</p>

              {/* Status */}
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium bg-emerald-400/8 border border-emerald-400/20 px-3 py-1.5 rounded-full w-fit mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to work
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {['React', 'ReactNative', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-white/5 hover:bg-violet-600/15 border border-white/8 hover:border-violet-500/30 text-gray-400 hover:text-violet-300 px-2.5 py-1 rounded-lg transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom shimmer line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="group relative bg-[#0d0d18] border border-white/8 hover:border-violet-500/30 rounded-2xl p-4 text-center overflow-hidden transition-all duration-300 hover:-translate-y-0.5 cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-2xl font-extrabold gradient-text">{value}</div>
                <div className="relative text-xs text-gray-600 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700">
        <span className="text-[10px] tracking-[0.2em] uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-violet-600/50 to-transparent" />
      </div>
    </section>
  )
}
