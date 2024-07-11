import React from 'react'
import './Technology.css';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'
import java from '../../images/java.png'
import c from '../../images/c.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import react from '../../images/react.png'
import tail from '../../images/tail.png'
import node from '../../images/node.png'
import exp from '../../images/exp.png'
import md from '../../images/md.png'
import fire from '../../images/fire.png'
import bash from '../../images/bash.png'
import figma from '../../images/figma.png'
import leaf from '../../images/leaflet.png'
import boot from '../../images/boot.png'
import mui from '../../images/mui1.png'


export default function Technology() {
  const technologies = [
    { name: 'C', icon: c },
    { name: 'Java', icon: java },
    { name: 'HTML5', icon: html },
    { name: 'CSS3', icon: css },
    { name: 'JavaScript', icon: js },
    { name: 'React', icon: react },
    { name: 'Tailwind CSS', icon: tail },
    { name: 'Node.js', icon: node },
    { name: 'Express.js', icon: exp },
    { name: 'Firebase', icon: md },
    { name: 'Git', icon: fire },
    { name: 'Figma', icon: bash },
    { name: 'MongoDB', icon: figma },
    { name: 'Leaflet', icon: leaf },
    { name: 'Bootstarp', icon: boot },
    // { name: 'Material Ui', icon: mui },
  ];

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Technology-App">
      <Element name="technology" className="element">

        <div className="technology-section">
          <h2 className="technology-heading">Technology</h2>
          <div className="technology-container">
            {technologies.map((tech, index) => (
              <div className="technology-card" key={index} >
                <img src={tech.icon} alt={tech.name} className="technology-icon" />
              </div>
            ))}
          </div>
        </div>

      </Element>
    </div>
  )
}
