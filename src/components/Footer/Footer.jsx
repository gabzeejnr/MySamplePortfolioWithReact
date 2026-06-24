import { portfolioData } from "../../data/portfolioData";
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <h2>Gabriel Dodowei</h2>
      <p>Frontend Developer</p>

      <div className="footer-links">
        <a target='_blank' href={portfolioData.socialMedia.github}>GitHub</a>
        <a target='_blank' href={portfolioData.socialMedia.linkedIn}>LinkedIn</a>
        <a target='_blank' href={portfolioData.socialMedia.whatsapp}>WhatsApp</a>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Gabriel Dodowei
      </p>
    </footer>
  );
}

export default Footer;