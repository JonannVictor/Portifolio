import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Process from '@/components/Process'

// V2 do portfolio — construção por etapas.
// Próximas seções (Navbar, About, Footer) entram aqui depois.
function App() {
  return (
    <main className="bg-base">
      <Hero />
      <Projects />
      <Process />
    </main>
  )
}

export default App
