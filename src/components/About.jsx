function About() {
  return (
    <section id="about" className="section section-muted">
      <div className="section-heading">
        <p className="eyebrow">ABOUT</p>
        <h2>About Me</h2>
        <p>
          A brief introduction about who I am, what I build, and the
          technologies I enjoy working with.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="card-number">01</div>
          <h3>Who I am</h3>
          <p>
            I am a Computer Science graduate with an interest in software
            development, full-stack applications and problem solving.
          </p>
        </div>

        <div className="about-card">
          <div className="card-number">02</div>
          <h3>What I do</h3>
          <p>
            I build responsive web applications and work across frontend,
            backend, databases and APIs.
          </p>
        </div>

        <div className="about-card">
          <div className="card-number">03</div>
          <h3>What I value</h3>
          <p>
            Clean code, simple interfaces, practical solutions and continuous
            learning are central to how I approach development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;