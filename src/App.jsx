import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

const pages = {
  home: Hero,
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
}

function getInitialPage() {
  const hashPage = window.location.hash.replace('#', '')

  return pages[hashPage] ? hashPage : 'home'
}

function App() {
  const [activePage, setActivePage] = useState(getInitialPage)
  const ActivePage = pages[activePage]

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getInitialPage())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page) => {
    setActivePage(page)
    window.location.hash = page === 'home' ? '' : page
  }

  return (
    <main className="portfolio">
      <Navigation activePage={activePage} onNavigate={handleNavigate} />
      <ActivePage onNavigate={handleNavigate} />
      <footer className="site-footer">
        <span>chobo6.github.io</span>
        <span>Built with React · Vite</span>
      </footer>
    </main>
  )
}

export default App
