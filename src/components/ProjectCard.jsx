function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={`${project.title} preview`} />
      </div>

      <div className="project-content">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;