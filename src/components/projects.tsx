import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'
import type { ProjectCardProps, Project } from '@/types/types'
import projectsData from '@/data/projects.json'

function ProjectCard({ project, delay }: ProjectCardProps) {
  return (
    <div className={`card-lift surface-card relative rounded-xl border p-6 overflow-hidden flex flex-col reveal reveal-d${delay}`}>
      <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3 mb-3">
        <h3 className="font-serif font-bold text-base sm:text-lg leading-tight flex-1 min-w-[200px]" style={{ color: 'var(--navy)' }}>
          {project.title}
        </h3>
        <span className="chip-navy shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          {project.badge || (project.type === 'intern' ? 'Enterprise' : 'Independent')}
        </span>
      </div>

      <p
        className="proj-blurb text-sm leading-[1.65] mb-4 pl-3 border-l-2"
        style={{ color: 'var(--text-secondary)', borderColor: 'var(--beige)' }}
      >
        {project.description}
      </p>

      <ul className="flex flex-col gap-2 mb-5">
        {(project.bullets ?? []).map((b) => (
          <li key={b} className="proj-arrow text-xs leading-[1.6] pl-4 relative" style={{ color: 'var(--text-secondary)' }}>
            <span className="absolute left-0" style={{ color: 'var(--sand)' }}>→</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-[var(--sand)]/20">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span key={t} className="chip-gold inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--navy)',
                color: 'var(--cream)',
              }}
              title="View Source Code on GitHub"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all border hover:bg-[var(--gold)]/10"
              style={{
                borderColor: 'var(--gold)',
                color: 'var(--gold-dark)',
              }}
              title="View Live Application"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const projects = projectsData as Project[]
  const enterpriseProjects = projects.filter((p) => p.type === 'intern')
  const personalProjects = projects.filter((p) => p.type === 'personal')

  return (
    <section id="projects" className="band-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Part 1: Enterprise & Production Platforms */}
        <div className="mb-20">
          <span className="reveal block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Production Systems
          </span>
          <h2
            className="reveal reveal-d1 font-serif font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--navy)' }}
          >
            Real apps. Real users.<br />Real code.
          </h2>
          <div className="reveal reveal-d1 gold-bar mb-4" />
          <p className="reveal reveal-d2 text-sm leading-[1.8] mb-12" style={{ color: 'var(--text-secondary)', maxWidth: '640px' }}>
            Every project below is a production platform I engineered at Inventech — built for high-concurrency enterprise,
            Karnataka state infrastructure, and municipal government workflows.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enterpriseProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={Math.min(i + 2, 6)} />
            ))}
          </div>
        </div>

        {/* Part 2: Personal & Independent Engineering */}
        <div>
          <span className="reveal block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Self-Built & Deployed
          </span>
          <h2
            className="reveal reveal-d1 font-serif font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--navy)' }}
          >
            Independent projects & research.
          </h2>
          <div className="reveal reveal-d1 gold-bar mb-4" />
          <p className="reveal reveal-d2 text-sm leading-[1.8] mb-12" style={{ color: 'var(--text-secondary)', maxWidth: '640px' }}>
            Personal applications, academic capstones, and deployed server systems exploring AI integration, voice-driven spreadsheets,
            and healthcare automation. All source code is publicly accessible on GitHub.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {personalProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={Math.min(i + 2, 6)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
