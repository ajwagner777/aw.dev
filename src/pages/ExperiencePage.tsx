import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const timeline = [
  {
    company: 'Zego',
    role: 'Engineering Lead → Lead Prompt Engineer',
    period: '2024 - Present',
    summary:
      'Championed Prompt Engineering program, driving two platform-level initiatives: unifying mobile and web experiences under a shared component architecture, and decomposing a monolithic application into microservices and microfrontends. Both efforts leveraged Claude Code and Copilot, measurably reduced tech debt, improved CI/CD velocity, and elevated developer experience across the org.',
  },
  {
    company: 'TUNE Inc.',
    role: 'Software Development Lead',
    period: '2021 - 2024',
    summary:
      'Built the engineering org from one senior engineer to a 16-person team spanning on- and off-shore talent. Owned all customer-facing surfaces — APIs, UIs, and integrations — while leading two multi-year platform efforts: a stack modernization and a revenue diversification initiative built on new product surfaces.',
  },
  {
    company: 'Loomis USA',
    role: 'Software Development Lead → Senior Frontend Engineer',
    period: '2015 - 2021',
    summary:
      'Started as a senior frontend engineer owning three mission-critical web apps supporting 35,000+ remote devices, then transitioned into building and leading a 6-person team responsible for the Loomis Direct customer portal. Stabilized and modernized the portal while also delivering a high-impact internal application used from support roles to the C-Suite.',
  },
  {
    company: 'Adhere Creative',
    role: 'Lead Developer',
    period: '2014 - 2015',
    summary:
      'Developed client projects across HubSpot COS, WordPress, and custom web builds while mentoring two junior engineers. Took on technical leadership, project scoping, and cross-functional coordination alongside hands-on development.',
  },
  {
    company: 'UTHealth School of Public Health',
    role: 'Senior Software Development',
    period: '2013 - 2014',
    summary:
      'Directed a three-engineer team that launched three major applications and two supporting services. Initiated a campus-wide IT asset tracking system spanning 4,000+ staff and faculty across six cities.',
  },
  {
    company: 'Other Positions',
    role: 'UTHealth Communications · Lubbock Audio Visual · C&S Cable',
    period: '2002 - 2010',
    summary:
      'Web Developer III at UTHealth Communications (2009–2010), Marketing Specialist at Lubbock Audio Visual (2006–2007), and Website Developer/Administrator at C&S Cable (2002–2006). These roles built the foundation in web development, client work, and technical operations that carries through everything since.',
  },
]

function ExperiencePage() {
  useEffect(() => {
    document.body.dataset.page = 'experience'
    return () => { delete document.body.dataset.page }
  }, [])
  return (
    <section className="content-stack">
      <header className="content-header reveal reveal-1">
        <p className="eyebrow">Experience</p>
        <h1>Shipping first rate User Experiences for over 2 decades.</h1>
        <p>
          Over two decades of building software — from writing my first lines of code in 2002
          to leading engineering orgs shipping products used by tens of thousands of people.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Work With Me
          </Link>
        </div>
      </header>

      <ol className="timeline">
        {timeline.map((job, index) => (
          <li key={job.company} className={`timeline-item reveal reveal-${(index % 3) + 1}`}>
            <div className="timeline-dot" aria-hidden="true" />
            <article>
              <p className="timeline-period">{job.period}</p>
              <h2>{job.role}</h2>
              <h3>{job.company}</h3>
              <p>{job.summary}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ExperiencePage
