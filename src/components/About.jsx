import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const isFloat = String(target).includes('.')
    const n = parseFloat(target)
    const dur = 1800
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      const v = n * e
      setVal(isFloat ? parseFloat(v.toFixed(2)) : Math.floor(v))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return <span ref={ref}>{val}{suffix}</span>
}

const stats = [
  { n: 3, suffix: '+', label: 'Projects Shipped' },
  { n: 1, suffix: '', label: 'Internship' },
  { n: 2, suffix: '', label: 'Azure Certifications' },
  { n: 8.05, suffix: '', label: 'CGPA' },
]

const facts = [
  ['Location', 'Hyderabad, India'],
  ['Available', 'Immediately'],
  ['Focus', 'Full Stack & Mobile'],
  ['Email', 'gopireddymanvitha@gmail.com'],
]

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div className="container">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="section-number">// 01</span>
        <h2 className="section-title">About</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 56, marginTop: 8 }}>
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem',
            lineHeight: 1.9,
            marginBottom: 20,
            fontWeight: 400,
          }}>
            Full Stack Developer with a B.Tech in CS, passionate about building production-grade solutions.
            I specialize in the MERN stack, React Native for mobile, and Firebase for real-time cloud features.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: 32 }}>
            Built at-risk student alerting systems, real-time chat (sub-100ms Socket.IO), AI analytics dashboards,
            and offline-first SPAs. Microsoft Azure certified (AZ-900, DP-900).
          </p>

          {/* Facts table */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {facts.map(([k, v]) => (
              <div key={k} style={{
                display: 'flex', gap: 0,
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em',
                  textTransform: 'uppercase', minWidth: 100,
                  paddingTop: 2,
                }}>{k}</span>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', fontWeight: 400 }}>{v}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats + code block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginBottom: 24 }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="card"
                style={{ padding: '28px 24px', borderRadius: 0 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ background: '#1a1a1a' }}
              >
                <div className="counter-val" style={{ marginBottom: 6 }}>
                  <CountUp target={s.n} suffix={s.suffix} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Code block */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="card"
            style={{ padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', lineHeight: 2 }}
          >
            <div style={{ color: 'rgba(255,255,255,0.2)', marginBottom: 4 }}>// developer.profile</div>
            <div><span style={{ color: 'rgba(255,255,255,0.3)' }}>const</span> <span style={{ color: '#fff' }}>dev</span> <span style={{ color: 'rgba(255,255,255,0.3)' }}>= {'{'}</span></div>
            <div style={{ paddingLeft: 20 }}><span style={{ color: 'rgba(255,255,255,0.4)' }}>stack:</span> <span style={{ color: 'rgba(255,255,255,0.7)' }}>"MERN + React Native"</span><span style={{ color: 'rgba(255,255,255,0.2)' }}>,</span></div>
            <div style={{ paddingLeft: 20 }}><span style={{ color: 'rgba(255,255,255,0.4)' }}>cloud:</span> <span style={{ color: 'rgba(255,255,255,0.7)' }}>"Azure + Firebase"</span><span style={{ color: 'rgba(255,255,255,0.2)' }}>,</span></div>
            <div style={{ paddingLeft: 20 }}><span style={{ color: 'rgba(255,255,255,0.4)' }}>available:</span> <span style={{ color: '#fff' }}>true</span><span style={{ color: 'rgba(255,255,255,0.2)' }}>,</span></div>
            <div><span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
  )
}
