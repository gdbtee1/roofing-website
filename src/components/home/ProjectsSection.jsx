const projects = [
  {
    location: "GRAND RAPIDS / MI",
    type: "ARCHITECTURAL SHINGLE",
    scope: "FULL REPLACEMENT",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    location: "ADA / MI",
    type: "STORM RESTORATION",
    scope: "WIND + HAIL",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
  },
  {
    location: "HOLLAND / MI",
    type: "RESIDENTIAL ROOFING",
    scope: "COMPLETE SYSTEM",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  },
];

function ProjectsSection() {
  return (
    <section className="roof-projects" id="projects">
      <div className="roof-projects-head">
        <span>05 / FIELD WORK</span>

        <h2>
          BUILT ABOVE
          <br />
          THE STREETLINE.
        </h2>
      </div>

      <div className="roof-projects-list">
        {projects.map((project, index) => (
          <article className="roof-project" key={project.location}>
            <div className="roof-project-number">
              0{index + 1}
            </div>

            <div className="roof-project-image">
              <img src={project.image} alt={project.type} />
            </div>

            <div className="roof-project-copy">
              <span>{project.location}</span>
              <h3>{project.type}</h3>
              <p>{project.scope}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
