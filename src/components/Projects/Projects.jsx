import { portfolioData } from "../../data/portfolioData.js";
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
            </div>
            <div className="project-links">
              {project.github ? <a href={project.github} target="_blank">GitHub</a> : null}
              {project.liveDemo ? <a href={project.liveDemo} target="_blank">Live Demo</a> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;