import { useRef, useEffect, useState } from 'react'
import { Layers, Server, Database, Terminal } from 'lucide-react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: Layers,
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'shadow-blue-500/20',
    border: 'hover:border-blue-500/30',
    bg: 'hover:bg-blue-500/5',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'React Native', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    gradient: 'from-violet-500 to-indigo-400',
    glow: 'shadow-violet-500/20',
    border: 'hover:border-violet-500/30',
    bg: 'hover:bg-violet-500/5',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Laravel', level: 80 },
      { name: 'REST & GraphQL', level: 85 },
      { name: 'WebSockets', level: 75 },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    gradient: 'from-fuchsia-500 to-pink-400',
    glow: 'shadow-fuchsia-500/20',
    border: 'hover:border-fuchsia-500/30',
    bg: 'hover:bg-fuchsia-500/5',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 72 },
    ],
  },
  {
    category: 'DevOps',
    icon: Terminal,
    gradient: 'from-emerald-500 to-teal-400',
    glow: 'shadow-emerald-500/20',
    border: 'hover:border-emerald-500/30',
    bg: 'hover:bg-emerald-500/5',
    skills: [
      { name: 'CI/CD Pipelines', level: 82 },
      { name: 'Git & GitHub', level: 95 },
      { name: 'AWS / GCP', level: 75 },
    ],
  },
]

// Intersection observer hook for triggering progress bar animation
function useVisible(ref) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
  return visible
}

function SkillCard({ group, index }) {
  const ref = useRef(null)
  const visible = useVisible(ref)
  const Icon = group.icon

  return (
    <div
      ref={ref}
      className={`group relative bg-[#0d0d18] border border-white/8 ${group.border} ${group.bg} rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${group.glow} overflow-hidden`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Corner glow */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${group.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />

      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center mb-5 shadow-lg`}>
        <Icon className="w-5 h-5 text-white" />
      </div>

      <h3 className="text-white font-semibold text-base mb-5">{group.category}</h3>

      <ul className="space-y-4">
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">{skill.name}</span>
              <span className={`text-xs font-semibold bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${group.gradient} transition-all duration-1000 ease-out`}
                style={{ width: visible ? `${skill.level}%` : '0%' }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#05050a] relative overflow-hidden">
      {/* Section blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            A curated toolkit for building modern, production-grade software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
