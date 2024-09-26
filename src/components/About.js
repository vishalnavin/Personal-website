import React from 'react';
import './About.css';
import profileImage from './picture.jpg';  // Correct way to import the image in React

function About() {
  return (
    <div className="about-container">
      {/* Left Side: Text */}
      <div className="about-text">
        <h2>/ about me</h2>
        <p>
          I am a Data Analyst specializing in turning data into actionable insights. With a strong background in business analytics, 
          I help companies drive efficiency and growth. I am passionate about developing visualizations and using data to tell impactful stories.
        </p>
        <h3>Here are some technologies I have been working with:</h3>
        <ul>
          <li>R Studio</li>
          <li>Python</li>
          <li>MySQL</li>
          <li>Excel</li>
          <li>Tableau</li>
          <li>Spark</li>
        </ul>
      </div>

      {/* Right Side: Image */}
      <div className="about-image">
        <img src={profileImage} alt="Vishal Navin" />  {/* Correct reference to the imported image */}
      </div>
    </div>
  );
}

export default About;
