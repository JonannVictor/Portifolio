import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'
import { cn } from '@/lib/cn'

const EASE = [0.16, 1, 0.3, 1] as const

const navLinks = [
  { href: '#projects', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#why-work-with-me', label: 'Why Me' },
  { href: '#contact', label: 'Contact' },
]

const sectionIds = ['hero', 'projects', 'process', 'why-work-with-me', 'contact']

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export default function Navbar() {
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-b border-line bg-base/75 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-12"
      >
        <a
          href="#hero"
          className="font-display text-sm font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:text-ink/80"
        >
          {initials}
        </a>

        <div
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className={cn(
                  'relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors',
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                )}
              >
                {(hovered === link.href || (!hovered && isActive)) && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ duration: 0.3, ease: EASE }}
                    className="absolute inset-0 rounded-full bg-white/[0.06]"
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            )
          })}
        </div>

        <a
          href={profile.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="group hidden items-center gap-2 rounded-full border border-line-strong bg-white/[0.05] px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-accent/40 hover:bg-white/[0.09] lg:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-white/[0.05] lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={2} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="border-b border-line bg-base/95 px-6 pb-8 pt-2 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-wide text-ink-muted transition-colors hover:bg-white/[0.05] hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full border border-line-strong bg-white/[0.05] px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:bg-white/[0.09]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
