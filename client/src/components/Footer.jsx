import { useState, useEffect } from 'react'
import { ArrowUp, Code2, Heart, Smartphone, Globe, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

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

const footerLinks = [
  { label: 'Overview', href: '#hero' },
  { label: 'Mobile App', href: '#mobile-spotlight' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      // Addis Ababa is UTC+3
      const now = new Date()
      const options = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#05050b] border-t border-white/[0.08] text-gray-400 text-xs overflow-hidden">
      {/* Top ambient glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-[1.5px]">
                <div className="w-full h-full bg-[#080812] rounded-[10px] flex items-center justify-center font-mono font-bold text-xs text-white">
                  DH
                </div>
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                Daniel Hailu
              </span>
            </div>
            
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Full-Stack Web & Mobile App Developer based in Addis Ababa, Ethiopia. Engineering production-grade software with clean architecture and delightful user experiences.
            </p>

            {/* Local time badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] font-mono text-[11px] text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Addis Ababa, ET (UTC+3): {localTime || 'Loading...'}</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Back to Top (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-4 font-semibold">
                Connect
              </h4>
              <div className="flex gap-2 mb-6">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-violet-600/20 border border-white/[0.08] hover:border-violet-500/40 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/40 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-emerald-600/20 border border-white/[0.08] hover:border-emerald-500/40 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="self-start inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 hover:text-white transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <p>© {new Date().getFullYear()} Daniel Hailu. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React 19, Tailwind CSS v4, Node.js & React Native</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
