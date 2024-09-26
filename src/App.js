import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaPen } from 'react-icons/fa';

import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  // Scroll reveal effect for sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const revealPoint = windowHeight * 0.9; // Adjusted for better timing

        // Add 'visible' class when section enters the viewport
        if (sectionTop < revealPoint) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger the scroll event on load to reveal sections already in view
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">Vishal Navin</div>
          
          {/* Navigation links */}
          <ul className="nav-links">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <a href="mailto:your.email@example.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="/your-portfolio-link" className="edit-icon">
            <FaPen />
          </a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
        <Home />
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <Projects />
      </section>
    </div>
  );
}

export default App;
