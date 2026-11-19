import { useState, useEffect } from 'react'
import { Menu, X, Smartphone, Globe, Code2, Download, Send, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { label: 'Overview', href: '#hero' },
  { label: 'Mobile App', href: '#mobile-spotlight' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25)

      const sectionIds = ['contact', 'experience', 'skills', 'projects', 'mobile-spotlight', 'hero']
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActive(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#06060c]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Daniel Hailu - Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-indigo-600/30">
              <div className="w-full h-full bg-[#090912] rounded-[10px] flex items-center justify-center font-mono font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                DH
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-base leading-tight flex items-center gap-1.5">
                Daniel Hailu
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[11px] font-mono text-gray-400 leading-none">
                Full-Stack & Mobile
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md rounded-full px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace('#', '')
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/10 shadow-sm shadow-black/40'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-indigo-600/30 -z-10" />
                    )}
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalInfo.resumePath}
              download
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] hover:border-violet-500/40 px-3.5 py-2 rounded-xl transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5 text-violet-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 text-xs font-semibold text-white px-4 py-2 rounded-xl overflow-hidden group shadow-lg shadow-violet-600/25 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 group-hover:opacity-90 transition-opacity" />
              <span className="relative flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5" />
                Let's Talk
              </span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.1] transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden mt-3 px-4 pb-4">
          <div className="bg-[#0b0b14]/95 backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-4 shadow-2xl">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.href.replace('#', '')
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-2.5 text-sm rounded-xl font-medium transition-colors ${
                        isActive
                          ? 'text-white bg-violet-600/20 border border-violet-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-4 pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-2">
              <a
                href={personalInfo.resumePath}
                download
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-gray-300 bg-white/[0.05] border border-white/[0.08] rounded-xl"
              >
                <Download className="w-4 h-4 text-violet-400" />
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl"
              >
                <Send className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
