import useLenis from './hooks/useLenis.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Extracurriculars from './components/Extracurriculars.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useLenis()

  return (
    <div className="bg-ink text-paper font-body">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Extracurriculars />
      </main>
      <Footer />
    </div>
  )
}
