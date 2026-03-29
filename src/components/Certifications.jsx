import { motion } from 'framer-motion'

const certs = [
  { name: 'Azure Fundamentals', code: 'AZ-900', issuer: 'Microsoft', year: '2024' },
  { name: 'Azure Data Fundamentals', code: 'DP-900', issuer: 'Microsoft', year: '2024' },
  { name: 'Cloud Computing', code: 'NPTEL', issuer: 'IIT Kharagpur', year: '2024' },
  { name: 'Full Stack Web Dev', code: 'Udemy', issuer: 'Udemy', year: '2023' },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-number">// 05</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-sub">Credentials & credentials</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 1 }}>
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="card"
              style={{ padding: '28px 24px', borderRadius: 0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ background: 'var(--bg-3)' }}
            >
              <div style={{ marginBottom: 16 }}>
                <span className="badge badge-white" style={{ marginBottom: 12, display: 'inline-block' }}>{cert.code}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem', fontWeight: 700, color: '#fff',
                  letterSpacing: '-0.01em', lineHeight: 1.3,
                }}>
                  {cert.name}
                </h3>
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
                  {cert.issuer}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)' }}>
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
