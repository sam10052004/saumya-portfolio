function Contact() {
  return (
    <section id="contact" className="section section-dark">
      <div className="contact-content">
        <p className="eyebrow">CONTACT</p>
        <h2>Let's work together.</h2>
        <p>
          Have an opportunity, project or just want to connect? Feel free to
          reach out.
        </p>

        <div className="contact-actions">
          <a className="button button-white" href="mailto:mathursaumya23@gmail.com">
            Email me
          </a>
          <a
            className="button button-outline-white"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/sam10052004"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saumya-mathur-4a646424a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;