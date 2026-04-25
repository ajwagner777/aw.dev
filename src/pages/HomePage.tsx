import { Link } from 'react-router-dom'

const skills = [
  'Product Strategy',
  'TypeScript',
  'React',
  'Design Systems',
  'Node.js',
  'Performance',
]

const highlights = [
  {
    label: '8+',
    detail: 'years crafting web products with design-forward teams',
  },
  {
    label: '24',
    detail: 'cross-functional launches spanning B2B and consumer apps',
  },
  {
    label: '99.95%',
    detail: 'average production uptime maintained across recent roles',
  },
]

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy reveal reveal-1">
          <h1>
            Aaron Wagner
            <br />
            Senior Software Engineer
          </h1>
          <p className="hero-summary">
            I design and build resilient digital experiences where product clarity,
            visual craft, and engineering rigor all matter equally.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Work With Me
            </Link>
            <Link to="/projects" className="btn btn-ghost">
              View Projects
            </Link>
          </div>
        </div>
        <aside className="hero-panel reveal reveal-2" aria-label="Professional focus">
          <img
            src="/images/aaron-wagner.jpg"
            alt="Aaron Wagner"
            className="profile-photo"
          />
          <h2>Current Focus</h2>
          <p>
            Leading frontend architecture for ambitious teams shipping quickly without
            sacrificing accessibility or long-term maintainability.
          </p>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="stats-grid">
        {highlights.map((item, index) => (
          <article key={item.label} className={`stat-card reveal reveal-${index + 1}`}>
            <p className="stat-label">{item.label}</p>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default HomePage
