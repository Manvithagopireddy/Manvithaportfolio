import { motion } from 'framer-motion'

const coursework = [
  'Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks',
  'DBMS', 'Software Engineering', 'Machine Learning', 'Cloud Computing', 'OOP',
]

export default function Education() {
  return (
    <section id="education" style={{
      padding: '100px 32px',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-number">// 06</span>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card"
          style={{ padding: '40px', marginTop: 8 }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'start', marginBottom: 24 }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.02em', marginBottom: 6,
              }}>
                B.Tech — Computer Science & Engineering
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>
                Sree Venkateshwara College of Engineering, Nellore
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.03em',
              }}>8.05</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>CGPA</div>
            </div>
          </div>

          <div style={{ width: '100%', height: 1, background: 'var(--border)', marginBottom: 24 }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
            {[['Duration', 'Dec 2021 – Apr 2025'], ['Location', 'Nellore, Andhra Pradesh'], ['Degree', 'B.Tech']].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{k}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>{v}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
              Relevant Coursework
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {coursework.map(c => <span key={c} className="badge">{c}</span>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
