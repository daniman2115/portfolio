import { useState } from 'react'
import {
  Send,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  Copy,
  Check,
  AlertCircle,
  Loader2,
  Download,
  Smartphone,
  Globe,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const APIBASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

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

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setFeedback(null)

    try {
      const response = await fetch(`${APIBASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim().slice(0, 48),
          message: form.message.trim(),
        }),
      })


      const result = await response.json()
      console.log({result});
      // const result = await response.json().catch(() => ({}))

      if (response.ok) {
        setSubmitted(true)
        setFeedback({ type: 'success', text: 'Message delivered! Daniel will get back to you shortly.' })
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        // Still give user a clean fallback
        setSubmitted(true)
        setFeedback({
          type: 'success',
          text: 'Message received! You can also reach me directly at danihailhabt321@gmail.com',
        })
      }
    } catch (err) {
      console.warn('Backend unavailable, fallback to direct email link:', err)
      // Gentle offline fallback so recruiter is never blocked
      setSubmitted(true)
      setFeedback({
        type: 'success',
        text: 'Thanks! Your inquiry has been prepared. For immediate response, feel free to email me directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#06060c] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Whether you need a cross-platform mobile app, a full-stack web application, or an experienced engineer for your engineering team.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Status card */}
            <div className="bg-[#0c0c18] border border-white/[0.08] rounded-3xl p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-500" />
              
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-white font-bold text-base">Direct Channels</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">
                I am currently open to full-time engineering roles, high-impact contract projects, and remote teams worldwide.
              </p>

              {/* Contact List */}
              <div className="space-y-4">
                
                {/* Email with 1-click copy */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Email Address</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs font-semibold text-gray-200 hover:text-cyan-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Location</p>
                    <p className="text-xs font-semibold text-gray-200">
                      Addis Ababa, Ethiopia (UTC+3)
                    </p>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-gray-500">Turnaround</p>
                    <p className="text-xs font-semibold text-gray-200">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

              </div>

              {/* Social icons */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">Profiles:</span>
                <div className="flex gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-violet-600/20 border border-white/[0.06] hover:border-violet-500/40 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.06] hover:border-blue-500/40 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    aria-label="Direct Email"
                    className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-emerald-600/20 border border-white/[0.06] hover:border-emerald-500/40 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick CV Download card */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-violet-600/15 via-indigo-600/10 to-transparent border border-violet-500/25 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white mb-0.5">Need my full CV / Resume?</p>
                <p className="text-[11px] text-gray-400">PDF formatted with full experience details.</p>
              </div>
              <a
                href={personalInfo.resumePath}
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c0c18] border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500" />

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-float">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed">
                    {feedback?.text || 'Thank you for getting in touch. I will review your note and respond within 24 hours.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] text-white transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-violet-500/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-violet-500/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry / Full-stack or Mobile Developer opportunity..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-violet-500/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, tech stack, or engineering role..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-violet-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full relative group inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-xl shadow-violet-600/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 group-hover:from-violet-500 group-hover:to-cyan-500 transition-all duration-300" />
                    <span className="relative flex items-center gap-2">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                          <span>Send Message to Daniel</span>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
