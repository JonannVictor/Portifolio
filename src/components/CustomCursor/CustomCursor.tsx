import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 28, stiffness: 380, mass: 0.4 })
  const springY = useSpring(y, { damping: 28, stiffness: 380, mass: 0.4 })
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!isFine || reduced) return

    setEnabled(true)
    document.body.classList.add('custom-cursor-active')

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement | null
      setHovering(!!target?.closest('a, button, [role="button"]'))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] rounded-full bg-white mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: hovering ? 32 : 8, height: hovering ? 32 : 8 }}
      transition={{ duration: 0.2, ease: EASE }}
    />
  )
}
