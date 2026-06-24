import { portfolioData } from "../../data/portfolioData.js";

function About() {
  return(
    <section id="about">
      <h2>{portfolioData.about.title}</h2>
      <p>{portfolioData.about.description}</p>
    </section>
  )
}

export default About;