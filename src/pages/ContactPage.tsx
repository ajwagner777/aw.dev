import { useEffect } from 'react'

function ContactPage() {
  useEffect(() => {
    document.body.dataset.page = 'contact'
    return () => { delete document.body.dataset.page }
  }, [])
  return (
    <section className="content-stack">
      <header className="content-header reveal reveal-1">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s Build Something Useful</h1>
        <p>
          I am open to senior prompt engineering roles, AI technical advisory work, and
          focused product collaborations.
        </p>
      </header>

      <div className="contact-grid">
        <a className="contact-card reveal reveal-1" href="mailto:aaron@example.com">
          <p>Email</p>
          <h2>aaron@aaronwagner.dev</h2>
          <span>Best for project inquiries and opportunities</span>
        </a>

        <a
          className="contact-card reveal reveal-3"
          href="https://github.com/ajwagner777"
          target="_blank"
          rel="noreferrer"
        >
          <p>GitHub</p>
          <h2>github.com/ajwagner777</h2>
          <span>Code samples, experiments, and open-source contributions</span>
        </a>
      </div>
    </section>
  )
}

export default ContactPage
