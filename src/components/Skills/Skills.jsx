import { portfolioData } from "../../data/portfolioData.js";
import './Skills.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills">
        {portfolioData.skills.map((skill) => (
          <div key={skill.name} className="skill">
            {skill.icon ? (
              <FontAwesomeIcon icon={skill.icon} 
                className="skill-icon"
                style={{color: skill.iconColor}} />
            ) : (
              <img src={skill.image}
                className="skill-image"
                alt={`${skill.name} svg`}
              />
            )}
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;