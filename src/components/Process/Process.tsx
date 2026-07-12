import { motion } from 'framer-motion'
import { ArrowRight, Boxes, Code2, Rocket, Search } from 'lucide-react'
import { cn } from '@/lib/cn'

const EASE = [0.16, 1, 0.3, 1] as const

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description:
      'Understand the real problem, the users, and the constraints before writing a single line of code.',
  },
  {
    icon: Boxes,
    title: 'Architecture',
    description:
      "Design a system that's simple to reason about today and easy to extend tomorrow.",
  },
  {
    icon: Code2,
    title: 'Development',
    description:
      'Ship clean, typed, tested code — iterating in small, reviewable increments.',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description:
      'Ship to production with CI/CD, monitoring, and a clear rollback path.',
  },
]

const timeline = [
  { title: 'Founded Hineni', current: false },
  { title: 'Started building software for businesses', current: false },
  { title: 'Systems Analysis & Development', current: true },
]

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-line bg-base px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            How I Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            How I Build Software
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="group relative"
            >
              <div className="h-full rounded-2xl border border-line bg-base-panel/60 p-6 backdrop-blur-sm transition-colors duration-300 group-hover:border-accent/30">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-9 hidden lg:block">
                  <ArrowRight
                    className="h-4 w-4 text-ink-faint"
                    strokeWidth={2}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-display text-xl font-bold text-ink"
          >
            The Journey So Far
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={container}
            className="relative mt-8 border-l border-line pl-8"
          >
            <ul className="space-y-8">
              {timeline.map((entry) => (
                <motion.li
                  key={entry.title}
                  variants={item}
                  className="relative"
                >
                  <span
                    className={cn(
                      'absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full',
                      entry.current
                        ? 'bg-accent shadow-[0_0_0_4px_rgba(76,130,251,0.18)]'
                        : 'bg-ink-faint'
                    )}
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="font-display text-lg font-bold text-ink">
                      {entry.title}
                    </h4>
                    {entry.current && (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                        Current
                      </span>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
