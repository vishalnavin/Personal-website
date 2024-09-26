import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="typing-container">
        <span className="typing-text">
          Hi, <span className="highlight-name">Vishal</span> here!
        </span>
      </div>
      <div className="subtitle">I create data-driven solutions and visualizations.</div>
      <p>
        I'm a passionate data analyst who specializes in turning data into insights. 
        I have contributed to projects that have helped organizations drive efficiency and growth.
      </p>
      <div className="email-button">
        <a href="mailto:your.email@example.com" className="email-link">Say Hi!</a>
      </div>
    </div>
  );
}

export default Home;
