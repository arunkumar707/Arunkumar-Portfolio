import { lotusLarge, profile } from '@/assets/images'

const TAGS = ['Karnataka, India', 'MCA', 'Open to opportunities', 'Mysore']

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="reveal flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-full p-[3px]" style={{ background: 'var(--gold-gradient)' }}>
                <img
                  src={profile}
                  alt="Arun Kumar A N"
                  loading="lazy"
                  className="w-full h-full rounded-full object-cover object-[center_18%]"
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
              <div className="absolute -bottom-4 -right-4 rounded-xl px-5 py-3 border surface-card">
                <div className="font-serif font-bold text-2xl" style={{ color: 'var(--gold)' }}>6</div>
                <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Apps shipped</div>
              </div>
            </div>
          </div>

          <div>
            <span className="reveal block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              About Me
            </span>
            <h2 className="reveal reveal-d1 font-serif font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--navy)' }}>
              I build real products,<br />not portfolio demos.
            </h2>
            <div className="reveal reveal-d1 gold-bar mb-6" />
            <p className="reveal reveal-d2 text-sm leading-[1.8] mb-4" style={{ color: 'var(--text-secondary)' }}>
              I am a full stack developer based in Karnataka, India. During my internship at{' '}
              <strong style={{ color: 'var(--navy)' }}>Inventech Info Solutions</strong>, I worked on real government
              and enterprise applications — things that actual government staff, field engineers, and civic applicants use every day.
            </p>
            <p className="reveal reveal-d3 text-sm leading-[1.8] mb-6" style={{ color: 'var(--text-secondary)' }}>
              I build across the whole stack: React feature modules, NestJS REST APIs, JWT auth with token refresh,
              MySQL-backed data. Multi-tenant architecture, Expo React Native mobile apps, OTP pipelines,
              digital-certificate generation — all production code.
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
