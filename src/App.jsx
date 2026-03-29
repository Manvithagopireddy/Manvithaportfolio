import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ background: '#080808', minHeight: '100vh', color: '#F5F5F5' }}>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" />
        ) : (
          <div key="main-content" style={{ position: 'relative' }}>
            <CustomCursor />
            <SmoothScroll>
              <ScrollProgress />
              <Navbar />
              <main>
                <Hero />
                <TechMarquee />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Certifications />
                <Education />
                <Contact />
              </main>
              <Footer />
            </SmoothScroll>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
