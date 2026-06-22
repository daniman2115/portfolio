import { useState } from 'react'
import { Send, Mail, MapPin, Clock, CheckCircle2, Sparkles } from 'lucide-react'

const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'danihailhabt321@gmail.com', href: 'mailto:you@example.com' },
  { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: null },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours', href: null },
]

const socialLinks = [
  { href: 'https://github.com', Icon: GitHubIcon, label: 'GitHub' },
  { href: 'https://linkedin.com', Icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'mailto:you@example.com', Icon: Mail, label: 'Email' },
]

function InputField({ id, name, type = 'text', label, placeholder, value, onChange, required }) {
  return (
    <div className="group">
      <label htmlFor={id} className="block text-sm font-medium text-gray-500 mb-2 group-focus-within:text-violet-400 transition-colors duration-200">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white/4 border border-white/8 hover:border-white/15 focus:border-violet-500/60 rounded-xl px-4 py-3 text-white placeholder-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all duration-200"
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 px-6 bg-[#05050a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Let's work together
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Have a project or opportunity in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Info card */}
            <div className="relative bg-[#0d0d18] border border-white/8 rounded-2xl p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <h3 className="text-white font-semibold">Let's create together</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-7">
                Open to full-time roles, freelance projects, and interesting collaborations. I'll get back to you within a day.
              </p>

              <ul className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-violet-600/20 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-gray-700 text-xs">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-300 text-sm hover:text-violet-400 transition-colors duration-200">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Socials */}
              <div className="mt-7 pt-6 border-t border-white/5 flex gap-2">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-violet-600/20 border border-white/8 hover:border-violet-500/40 text-gray-500 hover:text-violet-300 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability pill */}
            <div className="relative bg-gradient-to-br from-violet-600/10 to-indigo-600/5 border border-violet-500/20 rounded-2xl p-5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-semibold">Currently available</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Open to full-time, contract, and freelance opportunities worldwide.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="relative bg-[#0d0d18] border border-white/8 rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-80 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-5 float">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-gray-500 text-sm mb-7 max-w-xs">
                  Thanks for reaching out. I'll respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-violet-400 hover:text-violet-300 border border-violet-500/30 hover:border-violet-400/50 px-5 py-2 rounded-xl transition-all duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative bg-[#0d0d18] border border-white/8 rounded-2xl p-7 space-y-5 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField id="name" name="name" label="Full Name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                  <InputField id="email" name="email" type="email" label="Email Address" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                </div>

                <InputField id="subject" name="subject" label="Subject" placeholder="Project inquiry / Job opportunity..." value={form.subject} onChange={handleChange} required />

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2 group-focus-within:text-violet-400 transition-colors duration-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or what you're looking for..."
                    className="w-full bg-white/4 border border-white/8 hover:border-white/15 focus:border-violet-500/60 rounded-xl px-4 py-3 text-white placeholder-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full relative inline-flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 group-hover:from-violet-500 group-hover:to-indigo-500 transition-all duration-300" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)] transition-opacity duration-300" />
                  <Send className="relative w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative">Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
