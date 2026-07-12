import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const codeLines: { tokens: { text: string; className?: string }[] }[] = [
  { tokens: [{ text: 'type Product = {', className: 'text-accent' }] },
  { tokens: [{ text: '  reliable: true', className: 'text-ink-muted' }] },
  { tokens: [{ text: '  scalable: true', className: 'text-ink-muted' }] },
  { tokens: [{ text: '  polished: true', className: 'text-ink-muted' }] },
  { tokens: [{ text: '}', className: 'text-accent' }] },
  { tokens: [{ text: '' }] },
  {
    tokens: [
      { text: 'export ', className: 'text-accent' },
      { text: 'function ', className: 'text-accent' },
      { text: 'ship', className: 'text-ink' },
      { text: '(idea: Idea) {', className: 'text-ink-muted' },
    ],
  },
  {
    tokens: [
      { text: '  return ', className: 'text-accent' },
      { text: 'build', className: 'text-ink' },
      { text: '(idea).', className: 'text-ink-muted' },
      { text: 'ship', className: 'text-ink' },
      { text: '()', className: 'text-ink-muted' },
    ],
  },
  { tokens: [{ text: '}', className: 'text-ink-muted' }] },
]

export default function CodePanel() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Janela do editor */}
      <div className="overflow-hidden rounded-2xl border border-line bg-base-panel/80 shadow-panel backdrop-blur-xl">
        <div className="flex items-center gap-4 border-b border-line px-5 py-3.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[11px] tracking-wide text-ink-faint">
            hero.tsx
          </span>
        </div>

        <div className="px-5 py-6 font-mono text-[13px] leading-[1.9]">
          {codeLines.map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="w-4 shrink-0 select-none text-right text-ink-faint/70">
                {i + 1}
              </span>
              <span>
                {line.tokens.map((token, j) => (
                  <span key={j} className={token.className ?? 'text-ink'}>
                    {token.text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chip flutuante de status — a peça-assinatura */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: [0, -6, 0] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }
            : {
                opacity: { duration: 0.6, delay: 0.9 },
                y: {
                  duration: 5,
                  delay: 1.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
        }
        className="absolute -bottom-6 -left-6 flex items-center gap-2.5 rounded-full border border-line bg-base-elevated/90 px-4 py-2.5 shadow-panel backdrop-blur-xl"
      >
        <CheckCircle2 className="h-4 w-4 text-emerald-400/80" strokeWidth={2} />
        <span className="font-mono text-xs text-ink-muted">Build passing</span>
      </motion.div>
    </motion.div>
  )
}
