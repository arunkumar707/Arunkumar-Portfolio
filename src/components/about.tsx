import { lotusLarge, profile } from '@/assets/images'

const TAGS = ['MCA', 'Open to opportunities', 'Mysore', 'Karnataka, India']

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="reveal flex justify-center">
            <div className="relative">
              <div className="w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] max-w-[85vw] aspect-square rounded-full p-[3px]" style={{ background: 'var(--gold-gradient)' }}>
                <img
                  src={profile}
                  alt="Arun Kumar A N"
                  loading="lazy"
                  className="w-full h-full rounded-full object-cover object-[center_55%]"
                />
              </div>
              <img
                src={lotusLarge}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-auto object-contain"
                style={{ opacity: 0.55 }}
              />

            </div>
          </div>

          <div className="text-justify">
            <span className="reveal block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              About Me
            </span>
            <h2 className="reveal reveal-d1 font-serif font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--navy)' }}>
              I build products from idea to production.
            </h2>
            <div className="reveal reveal-d1 gold-bar mb-6" />
            <p className="reveal reveal-d2 text-sm leading-[1.8] mb-4" style={{ color: 'var(--text-secondary)' }}>
              I{"'"}m <strong style={{ color: 'var(--navy)' }}>Arun Kumar A N</strong>, a full-stack developer at{' '}
              <strong style={{ color: 'var(--navy)' }}>Inventech Info Solutions</strong>, where I work on real-time
              enterprise and government applications used in real-world workflows.
            </p>
            <p className="reveal reveal-d3 text-sm leading-[1.8] mb-4" style={{ color: 'var(--text-secondary)' }}>
              I work across the stack, building clean and responsive interfaces, scalable REST APIs, secure authentication
              systems, and reliable data layers. My primary tools include React, Next.js, TypeScript, NestJS, MySQL, and Redis.
            </p>
            <p className="reveal reveal-d3 text-sm leading-[1.8] mb-6" style={{ color: 'var(--text-secondary)' }}>
              Alongside my professional work, I{"'"}ve built and deployed 6 full-stack projects independently, giving me
              hands-on experience with the complete development lifecycle — from architecture and implementation to
              deployment and maintenance.
            </p>
            <div className="reveal reveal-d4 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="chip-navy inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
