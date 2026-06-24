import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { portfolioData } from "../../data/portfolioData";

function Hero() {

  const { hero } = portfolioData;

  return (
    <section id="hero">

      <div className="introduction">
        <span className="hi">HI, I'M</span>

        <h1 className="name">
          {hero.name}
        </h1>

        <span className="position">
          {hero.role.toUpperCase()}
        </span>

        <hr />

        <p className="short-intro">
          {hero.tagline}
        </p>
      </div>

      <div className="buttons">
        <a href="#projects" className="work">
          <button>
            View My Work →
          </button>
        </a>

        <a href="#contact" className="contact-btn">
          <button>
            Contact Me
          </button>
        </a>
      </div>
      <div id="social-links">
        <div className="link"><a href={portfolioData.socialMedia.github} target="_blank"><FontAwesomeIcon icon={hero.icons[0]}/></a></div>
        <div className="link"><a href={portfolioData.socialMedia.whatsapp} target="_blank"><FontAwesomeIcon icon={hero.icons[1]}/></a></div>
        <div className="link"><a href={portfolioData.contact[0].link} target="_blank"><FontAwesomeIcon icon={hero.icons[2]}/></a></div>
      </div>

    </section>
  );
}

export default Hero;