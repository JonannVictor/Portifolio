import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Process from '@/components/Process'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Loader from '@/components/Loader'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'

// V2 do portfolio — construção por etapas.
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-base"
      >
        Skip to content
      </a>

      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <motion.main
        id="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: loading ? 0 : 0.05 }}
        className="bg-base"
      >
        <Hero />
        <Projects />
        <Process />
        <WhyWorkWithMe />
        <Footer />
      </motion.main>
    </>
  )
}

export default App
