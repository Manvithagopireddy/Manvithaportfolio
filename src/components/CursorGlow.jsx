import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let raf
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x, ty = y

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }

    const animate = () => {
      x += (tx - x) * 0.1
      y += (ty - y) * 0.1
      glow.style.left = x + 'px'
      glow.style.top = y + 'px'
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" />
}
