import React, { useEffect } from 'react';
import './Education.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Education() {
  const timelineData = [
    {
      details1: "B. Tech. – Computer Science and Engineering",
      details2: "Techno International New Town",
      details3: "Year of Passing - 2025 | CGPA: 9.03"
    },
    {
      details1: "Class 12 – Science",
      details2: "St Stephens's School Dum Dum | Board- CISCE",
      details3: "Year of Passing - 2021 | Percentage- 90.5"
    },
    {
      details1: "Class 10 – General",
      details2: "St Stephens's School Dum Dum | Board- CISCE",
      details3: "Year of Passing - 2019 | Percentage- 89.4"
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="education-container">
      <div className="education-header">
        <div className="education-circle">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className='education-txt'>Education</div>
      </div>
      <div className="education-timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="education-timeline-item">
            <div className="education-timeline-content">
              <div className="education-dot"></div>
              <div className="education-box" data-aos="fade-left" data-aos-delay={0 + index * 200}>
                <p className="education-details1">{item.details1}</p>
                <p className="education-details2">{item.details2}</p>
                <p className="education-details3">{item.details3}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
