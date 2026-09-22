import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">TECHNOLOGIES</p>
        <h2>Skills</h2>
        <p>Technologies and tools I work with.</p>
      </div>

      <div className="skills-list">
        {skills.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;