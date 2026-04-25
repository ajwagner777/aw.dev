import { NavLink, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import ExperiencePage from './pages/ExperiencePage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand-link">
          <span className="brand-aw">AW</span><span className="brand-dev">.dev</span>
        </NavLink>
        <nav aria-label="Primary navigation" className="site-nav">
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>Building thoughtful software experiences from idea to launch.</p>
        <p>Available for select opportunities in 2026.</p>
      </footer>
    </div>
  )
}

export default App
