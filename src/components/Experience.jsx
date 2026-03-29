import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '100px 32px',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-number">// 04</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">Where I've worked</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ position: 'relative', paddingLeft: 28 }}
        >
          <div className="timeline-line" />
          <div className="timeline-dot" />

          <div className="card" style={{ padding: '32px 36px', borderRadius: 4 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  Full Stack Developer Intern
                </h3>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 8 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                    Brain O Vision
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>
                    <Calendar size={11} /> Jan 2024 – Apr 2024
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>
                    <MapPin size={11} /> Hyderabad, India
                  </span>
                </div>
              </div>
              <span className="badge badge-white">Internship</span>
            </div>

            <div style={{ width: '100%', height: 1, background: 'var(--border)', marginBottom: 20 }} />

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Built real-time bidirectional chat with Socket.IO achieving sub-100ms message delivery',
                'JWT-secured REST APIs and Socket.IO handshakes with token-based authentication',
                'Responsive React.js UI with read receipts, typing indicators, and message history',
                'Agile/Scrum sprint planning, daily standups, and retrospectives throughout the project',
                'WebSocket connection management reducing server load through efficient event handling',
              ].map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  style={{ display: 'flex', gap: 12, color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.65 }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-mono)', flexShrink: 0, marginTop: 1 }}>→</span>
                  {b}
                </motion.li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
              {['Socket.IO', 'React.js', 'Node.js', 'JWT', 'REST APIs', 'Agile'].map(t => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
