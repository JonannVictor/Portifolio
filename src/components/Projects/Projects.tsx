import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCase from './ProjectCase'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-line bg-base px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Selected Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            Projects
          </h2>
        </motion.div>

        <div className="mt-14 space-y-10">
          {projects.map((project) => (
            <ProjectCase key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
