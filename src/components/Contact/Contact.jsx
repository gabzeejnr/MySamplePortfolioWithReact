import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { portfolioData } from "../../data/portfolioData.js";
import './Contact.css';

function Contact() {
    return(
        <section id="contact">
            <h2>Contact Me</h2>

            <div className="contact-grid">
                {portfolioData.contact.map((item) => (
                    <a key={item.title}
                      href={item.link}
                      target="_blank"
                      className="contact-card">
                        <h3><FontAwesomeIcon icon={item.fontawesome} />&ensp;{item.title}</h3>
                        <p>{item.value}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contact;