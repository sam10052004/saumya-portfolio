import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">CREDENTIALS</p>
        <h2>Certifications</h2>
        <p>Certifications and learning milestones.</p>
      </div>

      <div className="certification-list">
        {certifications.map((certificate, index) => (
          <div className="certificate" key={certificate.name}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{certificate.name}</h3>
              <p>{certificate.issuer}</p>
            </div>
            {certificate.link && (
              <a href={certificate.link} target="_blank" rel="noreferrer">
                View ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;