import { useState } from 'react';
import './App.css';
import About from './components/About.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div id='App'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;