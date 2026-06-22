import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const links = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['hero', 'skills', 'projects', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05050a]/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
            <Code2 className="w-4 h-4 text-white" />
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-bold text-white text-lg">
            dev<span className="text-violet-400">.</span>folio
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 bg-white/5 border border-white/8 rounded-2xl px-2 py-1.5">
          {links.map((link) => {
            const isActive = active === link.href.replace('#', '')
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/20 to-indigo-600/20" />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="relative text-sm font-semibold px-5 py-2 rounded-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300 group-hover:from-violet-500 group-hover:to-indigo-500" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.15),transparent_70%)]" />
            <span className="relative text-white">Hire Me</span>
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#05050a]/98 backdrop-blur-2xl border-t border-white/5 px-6 py-5">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-5 py-3 rounded-xl transition-all duration-200"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
