import React from 'react'
import Navbarr from '../Navbar/Navbarr';
import './Home.css';
import Herosection from '../Herosection/Herosection';
import EducationWorkExp from '../EducationWorkExp/EducationWorkExp';
import Skills from '../Skills/Skills';
import ParticlesComponent from '../TsParticle/ParticlesComponent';
import Achievements from '../Achievements/Achievements';
import Projects from '../Projects/Projects';
import Technology from '../Technology/Technology';
import Publications from '../Publications/Publications';
import Copyright from '../Copright/Copyright';
import ContactForm from '../ContactForm/ContactForm';
import PictureGallery from '../PictureGallery/PictureGallery';
import FloatingButton from '../FloatingButton/FloatingButton';

export default function Home() {
  
  return (
    <div className='Home_fullPage'>
      <ParticlesComponent id="particles" />
      <div  className='Home_navbar'><Navbarr /></div>
            <div id="home" className='Home_Herosection'><Herosection /></div>
            <div id="experience" className='Home_EducationWorkExp'><EducationWorkExp /></div>
            <div id="skills" className='Home_Skills'><Skills /></div>
            <div id="technology" className='Home_Herosection'><Technology /></div>
            <div id="publications" className='Home_Skills'><Publications /></div>
            <div id="copyright" className='Home_Skills'><Copyright /></div>
            <div id="projects" className='Home_Herosection'><Projects /></div>
            <div id="achievement" className='Home_Herosection'><Achievements /></div>
            {/* <div id="gallery" className='Home_Skills'><PictureGallery /></div> */}
            <div id="contact" className='Home_Herosection'><ContactForm /></div>
            <div className='Home_FloatingButton'><FloatingButton /></div>
    </div>
  )
}
