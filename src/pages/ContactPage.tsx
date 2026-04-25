function ContactPage() {
  return (
    <section className="content-stack">
      <header className="content-header reveal reveal-1">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s Build Something Useful</h1>
        <p>
          I am open to senior engineering roles, technical advisory work, and focused
          product collaborations.
        </p>
      </header>

      <div className="contact-grid">
        <a className="contact-card reveal reveal-1" href="mailto:aaron@example.com">
          <p>Email</p>
          <h2>aaron@example.com</h2>
          <span>Best for project inquiries and opportunities</span>
        </a>

        <a
          className="contact-card reveal reveal-2"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <p>LinkedIn</p>
          <h2>linkedin.com/in/aaronwagner</h2>
          <span>Professional background and recommendations</span>
        </a>

        <a
          className="contact-card reveal reveal-3"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          <p>GitHub</p>
          <h2>github.com/aaronwagner</h2>
          <span>Code samples, experiments, and open-source contributions</span>
        </a>
      </div>
    </section>
  )
}

export default ContactPage
