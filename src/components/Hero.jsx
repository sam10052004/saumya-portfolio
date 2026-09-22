function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <p className="eyebrow">SOFTWARE DEVELOPER</p>
        <h1>Hello, I'm <span>Saumya Mathur</span></h1>
        <p className="hero-text">
          A Computer Science graduate focused on building clean, useful and
          user-friendly web applications.
        </p>

        <div className="hero-actions">
          <a className="button button-dark" href="#contact">
            Get in touch
          </a>
          <a className="button button-light" href="#projects">
            View my work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;