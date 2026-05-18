import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <main className="portfolio">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

export default App
