import type { ProjectCardProps, Project } from '@/types/types'
import projectsData from '@/data/projects.json'

function ProjectCard({ project, delay }: ProjectCardProps) {
  if (project.status === 'in-development') {
    return (
      <div className={`card-lift card-dev relative rounded-xl border p-6 overflow-hidden reveal reveal-d${delay}`}
        style={{ borderStyle: 'dashed' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="blink-dot" />
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--success)' }}>In Development</span>
        </div>
        <h3 className="font-serif font-bold text-lg mb-3" style={{ color: 'var(--navy)' }}>{project.title}</h3>
        <p className="text-sm leading-[1.7] mb-4" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((t) => (
            <span key={t} className="chip-muted inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium">{t}</span>
          ))}
        </div>
        <p className="text-xs italic" style={{ color: 'var(--text-muted)' }}>Personal product — no demo link until release.</p>
      </div>
    )
  }

  return (
    <div className={`card-lift surface-card relative rounded-xl border p-6 overflow-hidden flex flex-col reveal reveal-d${delay}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-serif font-bold text-lg leading-tight" style={{ color: 'var(--navy)' }}>{project.title}</h3>
        <span className="chip-navy shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Intern Work</span>
      </div>
      <p className="proj-blurb text-sm leading-[1.65] mb-4 pl-3 border-l-2"
        style={{ color: 'var(--text-secondary)', borderColor: 'var(--beige)' }}>
        {project.description}
      </p>
      <ul className="flex flex-col gap-2 mb-4">
        {(project.bullets ?? []).map((b) => (
          <li key={b} className="proj-arrow text-xs leading-[1.6] pl-4 relative" style={{ color: 'var(--text-secondary)' }}>
            <span className="absolute left-0" style={{ color: 'var(--sand)' }}>→</span>
            {b}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((t) => (
          <span key={t} className="chip-gold inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const projects = projectsData as Project[]
  const featured  = projects.filter((p) => p.featured  && p.type !== 'personal')
  const secondary = projects.filter((p) => !p.featured && p.type !== 'personal')
  const personal  = projects.find((p) => p.type === 'personal')

  return (
    <section id="projects" className="band-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <span className="reveal block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Projects</span>
        <h2 className="reveal reveal-d1 font-serif font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--navy)' }}>
          Real apps. Real users.<br />Real code.
        </h2>
        <div className="reveal reveal-d1 gold-bar mb-4" />
        <p className="reveal reveal-d2 text-sm leading-[1.8] mb-12" style={{ color: 'var(--text-secondary)', maxWidth: '560px' }}>
          Every project below is a production app I contributed to at Inventech — not a tutorial clone or a demo.
          Repos are private. I can walk through any of them in detail.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => <ProjectCard key={p.id} project={p} delay={Math.min(i + 2, 6)} />)}
        </div>

        {secondary.length > 0 && (
          <>
            <p className="reveal text-xs font-bold uppercase tracking-[0.1em] mb-4" style={{ color: 'var(--text-muted)' }}>
              Also contributed to
            </p>
            <div className="flex flex-col gap-4 mb-6">
              {secondary.map((p, i) => (
                <div key={p.id}
                  className="card-lift surface-card relative rounded-xl border p-5 overflow-hidden grid grid-cols-[56px_1fr_auto] gap-5 items-center reveal">
                  <span className="font-serif font-bold text-3xl" style={{ color: 'var(--beige)' }}>0{i + 1}</span>
                  <div>
                    <div className="text-sm font-bold mb-1" style={{ color: 'var(--navy)' }}>{p.title}</div>
                    <div className="text-xs leading-[1.5]" style={{ color: 'var(--text-muted)' }}>{p.description}</div>
                  </div>
                  <div className="hidden sm:flex flex-wrap gap-2 justify-end">
                    {p.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="chip-navy inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {personal && <ProjectCard project={personal} delay={5} />}

        <p className="reveal mt-8 text-xs italic text-center" style={{ color: 'var(--text-muted)' }}>
          All intern project repos are private. Available on request through Inventech Info Solutions.
        </p>
      </div>
    </section>
  )
}
