import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { heroHeadline, profile } from '@/data/profile'
import { cn } from '@/lib/cn'
import HeroBackground from './HeroBackground'
import CodePanel from './CodePanel'

const EASE = [0.16, 1, 0.3, 1] as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-base"
    >
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-28 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute inset-y-20 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-line to-transparent lg:block" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.h1
            variants={item}
            className="font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem] lg:tracking-tighter xl:text-7xl"
          >
            {heroHeadline.map((line, i) => (
              <span
                key={line}
                className={cn(
                  'block',
                  i === heroHeadline.length - 1 &&
                    'bg-gradient-to-r from-accent to-[#9db8ff] bg-clip-text text-transparent'
                )}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.div variants={item} className="mt-8 space-y-1.5">
            <p className="text-lg font-medium text-ink/90">{profile.role}</p>
            <p className="text-lg text-ink-muted">{profile.affiliation}</p>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
            {profile.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] leading-none tracking-wide text-ink-faint"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href={profile.links.projects}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-base shadow-[0_8px_30px_-8px_rgba(76,130,251,0.35)] transition-colors hover:bg-ink/90"
            >
              View Projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </motion.a>

            <motion.a
              href={profile.resumeUrl}
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-white/[0.03]"
            >
              Download Resume
              <Download
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                strokeWidth={2}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block lg:-rotate-1">
          <CodePanel />
        </div>
      </div>
    </section>
  )
}
