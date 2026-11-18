import { Layers, Code2, Zap, Shield, ArrowRight } from 'lucide-react'
import { engineeringProcess } from '../data/portfolioData'

const iconMap = {
  Layers: Layers,
  Code2: Code2,
  Zap: Zap,
  Shield: Shield,
}

export default function ProcessWorkflow() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070710] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono font-medium mb-3">
            <Zap className="w-3.5 h-3.5 text-violet-400" />
            <span>Development Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            How I Build & Ship <span className="gradient-text">Software</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            From initial system architecture to pixel-perfect mobile animations and scalable server backends.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringProcess.map((step) => {
            const Icon = iconMap[step.icon] || Code2
            return (
              <div
                key={step.step}
                className="relative bg-[#0c0c1a] border border-white/[0.08] hover:border-violet-500/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-white/20">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-1 text-[11px] font-mono text-gray-500">
                  <span>Verified Standard</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
