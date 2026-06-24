import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData.js';

function Navbar() {
  
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return(
    <header>
      <nav id='desktop-navbar'>
        <h1>&lt;GABRIEL /&gt;</h1>
        <div className="navbar-right">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
          <a href={`tel:${portfolioData.contact[1].value}`}><FontAwesomeIcon icon={faPhone} className='navbar-phone' /></a>
        </div>
      </nav>
      <nav id="mobile-navbar">
        <h2>&lt;GABRIEL /&gt;</h2>
        <button className="burger-menu"
          onClick={() => setOpen(prev => !prev)}>
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>

        {open && (
          <div className="mobile-dropdown">
            <a href="#home" onClick={handleClose}>HOME</a>
            <a href="#about" onClick={handleClose}>ABOUT</a>
            <a href="#projects" onClick={handleClose}>PROJECTS</a>
            <a href="#skills" onClick={handleClose}>SKILLS</a>
            <a href="#contact" onClick={handleClose}>CONTACT</a>
          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar;