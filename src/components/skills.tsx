import type { ReactElement } from 'react'
import { Code2, Server, Database, Wrench, Sparkles, Globe } from 'lucide-react'
import type { Skill } from '@/types/types'
import { SkillCategory } from '@/types/types'
import skillsData from '@/data/skills.json'

const CAT_ICONS: Record<string, ReactElement> = {
  [SkillCategory.FRONTEND]: <Code2 size={16} strokeWidth={1.8} />,
  [SkillCategory.BACKEND]:  <Server size={16} strokeWidth={1.8} />,
  [SkillCategory.DATABASE]: <Database size={16} strokeWidth={1.8} />,
  [SkillCategory.TOOLS]:    <Wrench size={16} strokeWidth={1.8} />,
  [SkillCategory.AI]:       <Sparkles size={16} strokeWidth={1.8} />,
  [SkillCategory.OTHER]:    <Globe size={16} strokeWidth={1.8} />,
}

const CATEGORIES = [
  SkillCategory.FRONTEND,
  SkillCategory.BACKEND,
  SkillCategory.DATABASE,
  SkillCategory.TOOLS,
  SkillCategory.AI,
]

export default function Skills() {
  const skills = skillsData as Skill[]

  return (
    <section id="skills" className="band-warm py-24">
      <div className="max-w-6xl mx-auto px-6">
        <span className="reveal block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          Technical Skills
        </span>
        <h2 className="reveal reveal-d1 font-serif font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--navy)' }}>
          What I work with
        </h2>
        <div className="reveal reveal-d1 gold-bar mb-4" />
        <p className="reveal reveal-d2 text-sm leading-[1.8] mb-12" style={{ color: 'var(--text-secondary)', maxWidth: '580px' }}>
          Not a list of certificates — tools I have used in real production projects, real deadlines, real users.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => {
            const catSkills = skills.filter((s) => s.category === cat)
            if (!catSkills.length) return null
            return (
              <div key={cat}
                className={`card-lift surface-card relative rounded-xl border p-6 overflow-hidden reveal reveal-d${Math.min(i + 2, 5)}`}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="icon-gold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    {CAT_ICONS[cat] ?? CAT_ICONS[SkillCategory.OTHER]}
                  </span>
                  <p className="text-xs font-bold tracking-[0.12em] uppercase" style={{ color: 'var(--gold)' }}>{cat}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {catSkills.map((s) => (
                    <span key={s.id}
                      className="skill-pill inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                      style={{ background: 'var(--warm-white)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
