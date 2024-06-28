import React from 'react';
import './WorkExp.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function WorkExp() {
  const timelineData = [
    {
      details1: "NextGen Analytics",
      details2: "Position - Frontend Web Developer",
      details3: "Tenure of Job- January 2024 – June 2024",
      details4: "Skills – React Js, Figma"
    },
    {
      details1: "Institute of Pulmocare & Research",
      details2: "Position- Backend Developer",
      details3: "Tenure of Job- February 2024 – Cont.",
      details4: "Skills – Node Js, Express Js, MongoDB, Figma"
    },
   
  ];

  React.useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className="WorkExp-container">
      <div className="WorkExp-header">
        <div className="WorkExp-circle">
        <i className="fas fa-briefcase"></i>
        </div>
        <div className='WorkExp-txt'>Work Experience</div>
      </div>
      <div className="WorkExp-timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="WorkExp-timeline-item">
            <div className="WorkExp-timeline-content">
              <div className="WorkExp-dot"></div>
              <div className="WorkExp-box"  data-aos="fade-left" data-aos-delay={0 + index * 200}>
                <p className="WorkExp-details1">{item.details1}</p>
                <p className="WorkExp-details2">{item.details2}</p>
                <p className="WorkExp-details3">{item.details3}</p>
                <p className="WorkExp-details4">{item.details4}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

