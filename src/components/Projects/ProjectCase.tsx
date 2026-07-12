import { motion } from 'framer-motion'
import { CheckCircle2, ExternalLink, Github } from 'lucide-react'
import type { CaseStudy } from '@/data/projects'
import { cn } from '@/lib/cn'

const EASE = [0.16, 1, 0.3, 1] as const

export default function ProjectCase({ project }: { project: CaseStudy }) {
  const featured = project.featured

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE }}
      className={cn(
        'overflow-hidden rounded-2xl border bg-base-panel/80 backdrop-blur-xl',
        featured
          ? 'border-accent/25 shadow-[0_30px_90px_-20px_rgba(76,130,251,0.28)]'
          : 'border-line shadow-panel'
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
        </div>

        <div className="flex shrink-0 gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-line-strong hover:bg-white/[0.03]"
            >
              <Github className="h-3.5 w-3.5" strokeWidth={2} />
              Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-base transition-colors hover:bg-ink/90"
            >
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div
        className={cn(
          'grid sm:grid-cols-2',
          featured
            ? 'gap-10 px-7 py-8 sm:px-10 sm:py-10'
            : 'gap-8 px-6 py-6 sm:px-8 sm:py-8'
        )}
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Goal
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {project.goal}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Solution
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {project.solution}
          </p>
        </div>
      </div>

      <div
        className={cn(
          'border-t border-line',
          featured ? 'px-7 py-8 sm:px-10 sm:py-10' : 'px-6 py-6 sm:px-8 sm:py-8'
        )}
      >
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          Tech Stack
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] leading-[1.6] tracking-wide text-ink-faint"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div
        className={cn(
          'border-t border-line',
          featured ? 'px-7 py-8 sm:px-10 sm:py-10' : 'px-6 py-6 sm:px-8 sm:py-8'
        )}
      >
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          Key Features
        </p>
        <ul className="mt-4 space-y-2.5">
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
  )
}
