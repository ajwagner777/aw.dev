const projects = [
  {
    name: 'Atlas Design System',
    type: 'Frontend Platform',
    impact:
      'Unified component architecture across 6 product teams and cut release QA time in half.',
  },
  {
    name: 'Beacon Analytics Dashboard',
    type: 'Data Product',
    impact:
      'Designed and implemented a real-time dashboard used by 12,000 monthly active users.',
  },
  {
    name: 'Orbit Checkout',
    type: 'E-commerce',
    impact:
      'Rebuilt the checkout journey with performance budgets, increasing completed purchases by 21%.',
  },
]

function ProjectsPage() {
  return (
    <section className="content-stack">
      <header className="content-header reveal reveal-1">
        <p className="eyebrow">Projects</p>
        <h1>Selected Work</h1>
        <p>
          A few projects that represent how I blend product outcomes with elegant,
          scalable technical delivery.
        </p>
      </header>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.name} className={`project-card reveal reveal-${(index % 3) + 1}`}>
            <p className="project-type">{project.type}</p>
            <h2>{project.name}</h2>
            <p>{project.impact}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
