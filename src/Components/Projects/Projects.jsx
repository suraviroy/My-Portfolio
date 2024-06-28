import React from 'react';
import './Projects.css';
import nostarve from "../../images/nostarve.png";
import bharat from "../../images/Screenshot (4656).png";
import advaya from "../../images/advaya.png";
import doctor from "../../images/doctor.png";
import app from "../../images/hospital.png";
import criminal from "../../images/criminal.png";
import vidcall from "../../images/vidcall.png";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Projects() {

    const projects = [
        {
          title: 'Bharat Raahat Kendra',
          description: 'React js, Node js, Express Js, MongoDb, Leaflet, Email js, ML, Python, Flask',
          details: ' ‘Bharat Raahat Kendra’ is a multilingual   platform where all types of rescue agencies and emergency services  which include disaster management agencies, medical service providers, fire stations, police station, news channels etc can connect with each other to handle any type of disaster in India. This system also allows the Government administration to take the lead in emergency situations.',
          image: bharat, 
        },
        {
          title: 'Advaya',
          description: 'React js, Node js, Express Js, MongoDb, Google Authentication',
          details: 'A Customizable Online Assessment Platform to Assist Organisations and Institutions in Identifying and Selecting the Right Skilled and Talented Candidates.',
          image: advaya, 
        },
        {
          title: 'Online Doctor consultancy website',
          description: 'React js, Vid sdk, FCM',
          details: 'An online doctor consultancy website functions as an e-commerce platform where patients can receive remote consultations from a variety of listed doctors. The website provides separate dashboards for both doctors and patients, facilitating efficient communication and management of medical consultations.',
          image: doctor, 
        },
        {
          title: 'No starve',
          description: 'React js, Node js, Express Js, Google Authentication, Firebase, Email js',
          details: 'No-Starve connects businesses, individuals, and restaurants through our website, enabling them to share surplus food with those in need.  Using data-driven insights and food hubs with cold storage facilities, the initiative ensures efficient distribution and reduces food waste, fostering a resilient food ecosystem.',
          image: nostarve, 
        },
        {
          title: 'App for Patient & Doctors',
          description: 'Node js, Express Js, MongoDb',
          details: 'The Patient & Doctor App is designed for patients and doctors at the Institute of Pulmocare & Research. Patients can provide feedback and request immediate support from the administrative team, particularly in emergency situations. Doctors coordinate responses to ensure timely assistance and support for patients in need.',
          image: app, 
        },
        {
            title: 'AI Criminal Tracker',
            description: 'Machine Learning, Python, Firebase',
            details: 'The AI Criminal Tracker employs facial recognition technology to track criminals, enhancing local police stations by replacing outdated handwritten records with modern solutions. Specialized software enables police officers to swiftly scan and gather crucial information about suspects, aiding in efficient law enforcement.',
            image: criminal, 
          },
          {
            title: 'Video Calling Application',
            description: 'React js, Node js, Express Js, Vid SDK',
            details: 'The Video Calling Application by Vid SKD facilitates video calls using room IDs, offering a user experience similar to Google Meet.',
            image: vidcall, 
          },
      ];

      React.useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div className="Projects-App">
      <div className="projects-heading">Projects</div>
      <p className="projects-description">
      Following projects showcase my skills and experience through real-world examples of my work. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively. 
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up"  data-aos-delay={0 + index * 300}>
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <i><p>{project.description}</p></i>
              </div>
              <div className="project-card-back">
                <h3>{project.title}</h3>
                <p>{project.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

