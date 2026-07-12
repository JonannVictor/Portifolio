import { motion } from 'framer-motion'
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/data/profile'
import { withBase } from '@/lib/url'

const EASE = [0.16, 1, 0.3, 1] as const

const socials = [
  { label: 'GitHub', href: profile.links.github, icon: Github },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.links.email}`, icon: Mail },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="relative border-t border-line bg-base px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center"
        >
          <p className="font-mono text-xs uppercase tracking-wide text-accent">
            Get In Touch
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-black uppercase leading-[0.98] tracking-tight text-ink sm:text-5xl">
            Let&apos;s build something amazing.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-ink-muted">
            Have a project in mind or just want to talk shop? I&apos;m always
            open to a good conversation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={`mailto:${profile.links.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-base shadow-[0_8px_30px_-8px_rgba(76,130,251,0.35)] transition-colors hover:bg-ink/90"
            >
              Say Hello
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </motion.a>

            <motion.a
              href={withBase(profile.resumeUrl)}
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
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <social.icon className="h-4 w-4" strokeWidth={2} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col items-center gap-2 border-t border-line pt-8 text-center font-mono text-xs text-ink-faint sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
