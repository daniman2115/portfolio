import { useState } from 'react'
import { ExternalLink, ArrowRight, Star, GitFork } from 'lucide-react'

import chatBot from '/chatbot.png'
import movieApp from '/movie-app.png'
import AIMDS from '/AIMDS.png'

const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const projects = [
  {
    title: 'Movie App',
    description:
      'A responsive movie discovery platform that lets users search, browse, and save their favourite films. Integrates the TMDb API for real-time data including ratings, trailers, cast info, and personalized watchlists stored in local state.',
    tags: ['React Native(Expo)', 'TMDb API', 'Tailwind CSS', 'Context API'],
    github: 'https://github.com/daniman2115/react-native-movie-app',
    live: 'https://example.com',
    // stars: 42,
    // forks: 12,
    glow: 'group-hover:shadow-blue-500/20',
    badge: 'Front-End',
    image: movieApp,
  },
  {
    title: 'Real-Time Chat App',
    description:
      'A full-stack messaging application featuring presence indicators, typing status, and persistent message history. Built for horizontal scalability across multiple server instances.',
    tags: ['React', 'Socket.io', 'Google API'],
    github: 'https://github.com/daniman2115/chatbot-with-react-css',
    live: 'https://chatbot-with-react-css.onrender.com',
    // stars: 94,
    // forks: 21,
    glow: 'group-hover:shadow-violet-500/20',
    badge: 'Full-Stack',
    image: chatBot,
  },
  {
    title: 'Agricultural Inputs Management and Distribution System',
    description:
      'An end-to-end platform for managing the procurement, storage, and distribution of agricultural inputs such as seeds, fertilizers, and pesticides. Includes supplier management, stock tracking, order workflows, and reporting dashboards for farm cooperatives.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API', "Socket.io", "Tailwind CSS", "Material UI"],
    github: 'https://github.com',
    live: 'https://agri-demo.onrender.com/',
    // stars: 31,
    // forks: 9,
    glow: 'group-hover:shadow-emerald-500/20',
    badge: 'Full-Stack',
    image: AIMDS,
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={`group relative bg-[#0d0d18] border border-white/8 hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.glow} flex flex-col`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Project image */}
      <div className="relative h-48 overflow-hidden bg-[#0a0a14]">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        {/* Dark overlay that lightens on hover */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${hovered ? 'opacity-20' : 'opacity-40'}`}
        />
        {/* Badge */}
        <span className="absolute top-3 right-3 text-xs font-medium text-white/90 bg-black/50 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full">
          {project.badge}
        </span>
        {/* Bottom fade into card */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0d0d18] to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title + stats */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
          <div className="flex items-center gap-3 text-gray-600 text-xs flex-shrink-0 pt-0.5">
            <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors duration-200 cursor-default">
              <Star className="w-3.5 h-3.5" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1 hover:text-blue-400 transition-colors duration-200 cursor-default">
              <GitFork className="w-3.5 h-3.5" />
              {project.forks}
            </span>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-500 hover:text-gray-300 bg-white/4 hover:bg-white/8 border border-white/6 px-2.5 py-0.5 rounded-lg transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-1 pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-white px-3 py-1.5 rounded-xl hover:bg-white/6 transition-all duration-200"
          >
            <GitHubIcon className="w-4 h-4" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-violet-300 px-3 py-1.5 rounded-xl hover:bg-violet-600/10 transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative bg-[#080810]">
      {/* Divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            What I've built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            A selection of real-world projects that demonstrate my range across the full stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-violet-500/40 bg-white/3 hover:bg-violet-600/10 px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <GitHubIcon className="w-4 h-4" />
            View all on GitHub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  )
}
