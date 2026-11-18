import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2, ChevronRight } from 'lucide-react'
import { experience, educationAndCertifications } from '../data/portfolioData'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#06060c] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5 text-violet-400" />
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Experience & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Hands-on software engineering delivering production-grade web and mobile systems in Agile Scrum environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Work Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Production Engineering</h3>
            </div>

            {experience.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0c0c18] border border-white/[0.08] hover:border-cyan-500/40 rounded-3xl p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {item.role}
                    </h4>
                    <p className="text-cyan-400 font-semibold text-xs mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 font-mono text-[11px] self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2.5 mb-6">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-violet-400" />
              <h3 className="text-lg font-bold text-white">Education & Honors</h3>
            </div>

            <div className="space-y-4">
              {educationAndCertifications.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#0c0c18] border border-white/[0.08] hover:border-violet-500/40 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                      {idx === 0 ? <GraduationCap className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300">
                      {edu.badge}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">{edu.title}</h4>
                  <p className="text-violet-400 font-mono text-xs mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{edu.detail}</p>
                  
                  <div className="mt-3 text-[10px] font-mono text-gray-500">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Skills Callout */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-cyan-600/10 to-violet-600/5 border border-cyan-500/20">
              <p className="text-xs font-bold text-white mb-1">Languages & Communication</p>
              <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                <span>English: <strong className="text-white">Proficient</strong></span>
                <span>Amharic: <strong className="text-white">Native</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
