import { motion } from 'framer-motion'
import { Layers, MessageSquare, Target, Workflow } from 'lucide-react'

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

const reasons = [
  {
    index: '01',
    icon: Workflow,
    title: 'End-to-End Development',
    description:
      'From database schema to deployed UI — I own the full stack, not just a slice of it.',
  },
  {
    index: '02',
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'Systems built to handle real growth, not just the demo — clean boundaries, typed contracts, sane defaults.',
  },
  {
    index: '03',
    icon: Target,
    title: 'Business-Focused Solutions',
    description:
      'Every technical decision is weighed against what actually moves the business forward.',
  },
  {
    index: '04',
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'Direct updates, realistic timelines, no jargon — you always know exactly where the project stands.',
  },
]

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-work-with-me"
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
            The Difference
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            Why Work With Me
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-base-panel/60 p-6 backdrop-blur-sm transition-colors hover:border-accent/30"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 30% 15%, rgba(76,130,251,0.10), transparent 70%)',
                }}
              />

              <div className="relative flex items-start justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <reason.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <span className="font-mono text-xs text-ink-faint">
                  {reason.index}
                </span>
              </div>

              <h3 className="relative mt-4 font-display text-lg font-bold text-ink">
                {reason.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
