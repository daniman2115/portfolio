import { useState } from 'react'
import {
  Smartphone,
  Globe,
  Server,
  Database,
  Layers,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Workflow,
} from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const iconMap = {
  Smartphone: Smartphone,
  Globe: Globe,
  Server: Server,
  Database: Database,
}

export default function ArchitectureSkills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative bg-[#070712] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>Technical Mastery & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Full-Stack & Mobile <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            A comprehensive, production-tested toolkit spanning mobile engineering, modern frontends, scalable server APIs, and resilient databases.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((group, idx) => {
            const Icon = iconMap[group.iconName] || Layers
            const isHovered = activeCategory === idx

            return (
              <div
                key={group.category}
                onMouseEnter={() => setActiveCategory(idx)}
                className={`relative bg-[#0c0c1a] border rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
                  isHovered ? 'border-violet-500/40 shadow-xl shadow-violet-900/15' : 'border-white/[0.08]'
                }`}
              >
                {/* Accent top stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${group.accent} opacity-80`}
                />

                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.accent} flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${group.badgeColor}`}>
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{group.category}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {group.description}
                  </p>

                  {/* Skills List */}
                  <ul className="space-y-3 mb-6">
                    {group?.skills?.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between text-xs pb-2 border-b border-white/[0.04]"
                      >
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="font-mono text-[11px] text-gray-500">{skill.experience}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Tested</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="bg-[#0b0b17] border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold mb-1 flex items-center gap-1.5">
                <Workflow className="w-4 h-4 text-violet-400" />
                End-to-End System Blueprint
              </p>
              <h4 className="text-xl font-bold text-white">How I Structure Full-Stack & Mobile Ecosystems</h4>
            </div>
            <span className="text-xs font-mono text-gray-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-xl self-start">
              Client &bull; Gateway &bull; Microservices &bull; Data Layer
            </span>
          </div>

          {/* Diagram Flow */}
          <div className="grid md:grid-cols-4 gap-4 relative">
            
            {/* Step 1: Clients */}
            <div className="bg-[#101020] border border-cyan-500/30 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs font-mono font-bold">
                  <Smartphone className="w-4 h-4" />
                  <span>01. Client Tier</span>
                </div>
                <p className="text-white text-xs font-bold mb-1">React Native & React 19</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  Mobile (iOS & Android Expo) + Responsive Web Apps with Tailwind CSS v4 & offline sync.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-cyan-300">
                HTTPS / WSS Protocols
              </div>
            </div>

            {/* Step 2: Gateway */}
            <div className="bg-[#101020] border border-violet-500/30 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-violet-400 text-xs font-mono font-bold">
                  <Server className="w-4 h-4" />
                  <span>02. API Gateway</span>
                </div>
                <p className="text-white text-xs font-bold mb-1">Node.js & Express / Laravel</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  RESTful routing, WebSocket events, JWT authentication, rate limiting, and CORS security.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-violet-300">
                JSON Payloads &bull; Socket.io
              </div>
            </div>

            {/* Step 3: Data Tier */}
            <div className="bg-[#101020] border border-amber-500/30 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-mono font-bold">
                  <Database className="w-4 h-4" />
                  <span>03. Data Store</span>
                </div>
                <p className="text-white text-xs font-bold mb-1">PostgreSQL & MongoDB</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  ACID-compliant relational schemas (Postgres) & dynamic document indexing (MongoDB Mongoose).
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-amber-300">
                Connection Pooling & Indexes
              </div>
            </div>

            {/* Step 4: Infrastructure */}
            <div className="bg-[#101020] border border-emerald-500/30 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-mono font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>04. Cloud & CI/CD</span>
                </div>
                <p className="text-white text-xs font-bold mb-1">Cloud Deployment</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  Render, Vercel, automated GitHub Actions pipelines, Nodemailer SMTP, and SSL certificates.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-emerald-300">
                99.9% Production Stability
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
