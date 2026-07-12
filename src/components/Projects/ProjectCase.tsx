import { motion } from 'framer-motion'
import { CheckCircle2, ExternalLink, Github } from 'lucide-react'
import type { CaseStudy } from '@/data/projects'
import { cn } from '@/lib/cn'
import { withBase } from '@/lib/url'
import BrowserMockup from './BrowserMockup'
import PhoneMockup from './PhoneMockup'

const EASE = [0.16, 1, 0.3, 1] as const

export default function ProjectCase({ project }: { project: CaseStudy }) {
  const featured = project.featured

  return (
    <div className="relative">
      {featured && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl sm:-inset-10"
        />
      )}

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: EASE }}
        className={cn(
          'overflow-hidden rounded-2xl border bg-base-panel/80 backdrop-blur-xl transition-shadow duration-300',
          featured
            ? 'border-accent/25 shadow-[0_30px_90px_-20px_rgba(76,130,251,0.28)] hover:shadow-[0_36px_110px_-20px_rgba(76,130,251,0.38)]'
            : 'border-line shadow-panel hover:shadow-[0_36px_100px_-20px_rgba(0,0,0,0.55)]'
        )}
      >
      <div
        className={cn(
          'flex flex-wrap items-start justify-between gap-4 border-b border-line',
          featured ? 'px-7 py-6 sm:px-10 sm:py-8' : 'px-6 py-5 sm:px-8'
        )}
      >
        <div>
          {featured && (
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-accent">
              Featured Project
            </p>
          )}
          <h3
            className={cn(
              'font-display font-bold text-ink',
              featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
            )}
          >
            {project.name}
          </h3>
          <p
            className={cn(
              'text-ink-muted',
              featured ? 'mt-2 text-base' : 'mt-1 text-sm'
            )}
          >
            {project.tagline}
          </p>
          <p className="mt-2 font-mono text-xs tracking-wide text-ink-faint">
            My Role — <span className="text-ink-muted">{project.role}</span>
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.05] px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-accent/40 hover:bg-white/[0.09]"
            >
              <Github
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-12"
                strokeWidth={2}
              />
              Code
            </motion.a>
          )}
          {project.links.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-base shadow-[0_6px_20px_-6px_rgba(76,130,251,0.45)] transition-colors hover:bg-ink/90"
            >
              <ExternalLink
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>

      {project.image && (
        <div
          className={cn(
            'border-b border-line bg-base/40',
            featured ? 'px-7 py-8 sm:px-10 sm:py-10' : 'px-6 py-6 sm:px-8 sm:py-8'
          )}
        >
          {project.platform === 'mobile' ? (
            <PhoneMockup src={withBase(project.image)} alt={project.name} />
          ) : (
            <BrowserMockup src={withBase(project.image)} alt={project.name} />
          )}
        </div>
      )}

      <div
        className={cn(
          'grid sm:grid-cols-2',
          featured
            ? 'gap-12 px-7 py-9 sm:px-10 sm:py-12'
            : 'gap-9 px-6 py-7 sm:px-8 sm:py-9'
        )}
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Goal
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {project.goal}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Solution
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {project.solution}
          </p>
        </div>
      </div>

      <div
        className={cn(
          'border-t border-line',
          featured ? 'px-7 py-9 sm:px-10 sm:py-11' : 'px-6 py-7 sm:px-8 sm:py-9'
        )}
      >
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          Tech Stack
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] leading-none tracking-wide text-ink-faint"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div
        className={cn(
          'border-t border-line',
          featured ? 'px-7 py-9 sm:px-10 sm:py-11' : 'px-6 py-7 sm:px-8 sm:py-9'
        )}
      >
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          Key Features
        </p>
        <ul className="mt-5 space-y-3">
          {project.keyFeatures.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-ink-muted"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/80"
                strokeWidth={2}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      </motion.article>
    </div>
  )
}
