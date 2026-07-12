import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#08090B',
          elevated: '#0D0E10',
          panel: '#101113',
        },
        ink: {
          DEFAULT: '#F5F6F7',
          muted: 'rgba(245, 246, 247, 0.64)',
          faint: 'rgba(245, 246, 247, 0.4)',
        },
        line: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.14)',
        },
        accent: {
          DEFAULT: '#4C82FB',
          dim: 'rgba(76, 130, 251, 0.16)',
        },
      },
      fontFamily: {
        display: ['"Satoshi"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
      },
      boxShadow: {
        panel: '0 30px 80px -20px rgba(0, 0, 0, 0.65)',
      },
    },
  },
  plugins: [],
} satisfies Config
