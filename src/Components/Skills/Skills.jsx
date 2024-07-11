import React from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import web from'../../images/web.png';
import ui from'../../images/ui.png';
import backend from'../../images/backend.png';

export default function Skills() {

  React.useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className="skills-container">
      <h1 className="skills-heading">Skills</h1>
      <p className="skills-description">
        I'm a skilled software developer with expertise in JavaScript, React, Node js, and MongoDB . 
        I excel in creating efficient, scalable, and user-friendly solutions. As a quick learner and
         collaborative team player, I'm dedicated to solving real-world problems. Let's bring your ideas to life!
      </p>
      <div className="skills-boxes">
        <div className="skills-box" data-aos="fade-right">
          <img src={web} alt="Web Developer Icon" className="skills-icon" />
          <p className="skills-text">Web <br /> Developer</p>
        </div>
        <div className="skills-box" data-aos="fade-right" data-aos-delay="300">
          <img src={backend} alt="UI/UX Developer Icon" className="skills-icon" />
          <p className="skills-text">Backend Developer</p>
        </div>
        <div className="skills-box" data-aos="fade-right" data-aos-delay="600">
          <img src={ui} alt="Another Role Icon" className="skills-icon" />
          <p className="skills-text">UI/UX <br /> Developer</p>
        </div>
      </div>
    </div>
  );
}
