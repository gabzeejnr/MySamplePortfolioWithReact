import { portfolioData } from "../../data/portfolioData";
import './Projects.css'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects">
        {portfolioData.projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tec) => (
                <span key={tec}>{tec}</span>
              ))}
              <span className="link"><a href={project.github}>GitHub</a></span>
              <span className="link"><a href={project.liveDemo}>Live Demo</a></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;