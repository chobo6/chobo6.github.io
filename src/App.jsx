import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { navigationItems } from './data/portfolio'
import './App.css'

const sectionIds = navigationItems.map((item) => item.page)

function App() {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const initialHash = window.location.hash.replace('#', '')
    if (sectionIds.includes(initialHash)) {
      document.getElementById(initialHash)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    }

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (page) => {
    document.getElementById(page)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', page === 'home' ? '#' : `#${page}`)
  }

  return (
    <main className="portfolio">
      <Navigation activePage={activeSection} onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="site-footer">
        <span>chobo6.github.io</span>
        <span>Built with React · Vite</span>
      </footer>
    </main>
  )
}

export default App
