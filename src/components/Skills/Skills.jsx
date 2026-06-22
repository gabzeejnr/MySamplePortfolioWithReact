import { portfolioData } from "../../data/portfolioData";
import './Skills.css'

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills">
        {portfolioData.skills.map(skill => (
          <div key={skill.name} className="skill">
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}



export default Skills;