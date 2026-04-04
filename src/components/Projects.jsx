import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    num: '01',
    title: 'Role-Based School\nManagement System',
    desc: 'AI-driven platform with proactive at-risk student alerting, dual-role RBAC, gamified badges, and parent communication hub.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/Manvithagopireddy/School-management-system',
    tag: 'AI-Powered',
  },
  {
    num: '02',
    title: 'EduHyderabad\nUniversity Discovery',
    desc: 'Offline-first SPA for Hyderabad university discovery with side-by-side comparison and a scalable Node.js + MongoDB backend.',
    tech: ['React', 'Vite', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Manvithagopireddy/manvitha',
    tag: 'Offline-First',
  },
  {
    num: '03',
    title: 'Grocery & E-Commerce\nPlatform',
    desc: 'Multi-role marketplace with real-time push notifications via Firebase Cloud Messaging and a cross-platform React Native mobile app.',
    tech: ['React.js', 'Node.js', 'Firebase', 'React Native'],
    github: 'https://github.com/Manvithagopireddy',
    tag: 'Full Stack',
  },
]

function TiltCard({ children }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 25 })
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 25 })

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
      onMouseMove={e => {
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-number">// 03</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Things I've built</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <TiltCard>
                <div
                  className="card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto',
                    gap: 32,
                    padding: '36px 32px',
                    borderRadius: 0,
                    borderLeft: 'none', borderRight: 'none',
                    borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                    borderBottom: '1px solid var(--border)',
                    alignItems: 'start',
                    cursor: 'default',
                  }}
                >
                  {/* Number */}
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'rgba(255,255,255,0.2)',
                      letterSpacing: '0.1em',
                    }}>{p.num}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        whiteSpace: 'pre-line',
                        margin: 0,
                      }}>{p.title}</h3>
                      <span className="badge badge-outline" style={{ flexShrink: 0 }}>{p.tag}</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: 16 }}>
                      {p.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {p.tech.map(t => (
                        <span key={t} className="badge">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="project-cta">
                    <a
                      href={p.github} target="_blank" rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ padding: '8px 16px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                    >
                      <FaGithub size={13} /> GitHub
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .card { 
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 32px 24px !important;
          }
          .project-cta { 
            align-items: flex-start !important;
            margin-top: 12px;
          }
        }
      `}</style>
    </section>
  )
}
