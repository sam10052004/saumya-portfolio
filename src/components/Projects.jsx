import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section section-muted">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Projects</h2>
        <p>Some of the projects I have worked on.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;