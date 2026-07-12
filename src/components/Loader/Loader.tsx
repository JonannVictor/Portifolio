import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '@/data/profile'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(onComplete, shouldReduceMotion ? 0 : 900)
    return () => clearTimeout(timer)
  }, [onComplete, shouldReduceMotion])

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
    >
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="font-display text-sm font-bold uppercase tracking-[0.4em] text-ink"
      >
        {initials}
      </motion.span>
    </motion.div>
  )
}
