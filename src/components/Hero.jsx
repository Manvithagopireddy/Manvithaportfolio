import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { Mail } from 'lucide-react'

import heroImg from '../assets/hero.png'
import Magnetic from './Magnetic'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="hero" ref={ref} className="grid-bg" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 64,
      overflow: 'hidden',
    }}>
      {/* Parallax content */}
      <motion.div style={{ y, opacity }} className="hero-inner-wrap">
        <div className="container" style={{ width: '100%' }}>

          {/* Row 1: status tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 40, display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <span className="hero-tag">
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#fff', display: 'inline-block',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Available for hire
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'rgba(255,255,255,0.2)',
              letterSpacing: '0.1em',
            }}>Hyderabad, India</span>
          </motion.div>

          {/* Row 2: Big editorial heading */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 48,
            alignItems: 'end',
            marginBottom: 40,
          }} className="hero-grid">
            <div>
              <motion.h1
                className="display-heading"
                style={{ fontSize: 'clamp(3.2rem, 8vw, 7rem)', marginBottom: 8 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Manvitha<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Gopireddy</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '-0.01em',
                  marginBottom: 0,
                  minHeight: '2rem',
                }}
              >
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer', 2500,
                    'MERN Stack Engineer', 2500,
                    'React Native Developer', 2500,
                    'Firebase Expert', 2500,
                    'Azure Certified Dev', 2500,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  cursor={true}
                />
              </motion.div>
            </div>

            {/* Profile photo col */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-photo-col"
              style={{ flexShrink: 0 }}
            >
              <div style={{
                width: 220,
                height: 220,
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                background: '#111',
              }}>
                <img
                  src={heroImg}
                  alt="Manvitha Gopireddy"
                  className="profile-photo"
                  style={{ width: '100%', height: '100%' }}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                />
                {/* Fallback */}
                <div style={{
                  display: 'none', width: '100%', height: '100%',
                  alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '3.5rem',
                  fontWeight: 700, color: 'rgba(255,255,255,0.15)',
                }}>MG</div>
                {/* Overlay text */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '12px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem', color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.08em',
                }}>B.Tech CSE · 2025</div>
              </div>
            </motion.div>
          </div>

          {/* Divider line */}
          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ transformOrigin: 'left', marginBottom: 32 }}
          />

          {/* Row 3: CTAs + socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}
          >
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Magnetic strength={0.3}><a href="#projects" className="btn-primary" style={{ padding: '12px 24px' }}>View Work <ArrowDown size={14} /></a></Magnetic>
              <Magnetic strength={0.3}><a href="/resume.pdf" download className="btn-ghost" style={{ padding: '12px 24px' }}><Download size={14} /> Resume</a></Magnetic>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { icon: <FaGithub size={16} />, href: 'https://github.com/Manvithagopireddy', label: 'GitHub' },
                { icon: <FaLinkedinIn size={15} />, href: 'https://www.linkedin.com/in/gopireddy-manvitha-489a08368', label: 'LinkedIn' },
                { icon: <SiLeetcode size={16} />, href: 'https://leetcode.com/u/gLJ2E1bNWI', label: 'LeetCode' },
                { icon: <Mail size={16} />, href: 'mailto:gopireddymanvitha@gmail.com', label: 'Email' },
              ].map(s => (
                <Magnetic key={s.label} strength={0.5}>
                  <a href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer" className="social-btn" title={s.label}>
                    {s.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} style={{ color: 'rgba(255,255,255,0.25)' }} />
        </motion.div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}>
          SCROLL
        </span>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 992px) {
          .hero-grid { gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .hero-grid { 
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-photo-col { 
            order: -1;
            display: flex;
            justify-content: center;
            margin-bottom: 24px;
          }
          .hero-tag { justify-content: center; margin: 0 auto; }
          .hero-inner-wrap > .container > div:first-child { 
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-inner-wrap > .container > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}
