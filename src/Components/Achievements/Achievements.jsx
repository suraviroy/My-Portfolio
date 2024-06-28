// import React from 'react'
// import './Achievements.css';

// export default function Achievements() {
//     const achievements = [
//         {
//           title: "6th in Google Solution Challenge Hackathon 2023",
//           description: "Organised by Calcutta Institute of Engineering and Management",
//           date: "January 2023",
//         },
//         {
//           title: "Finalist in Smart Bengal Hackathon 2023",
//           description: "Organised by Calcutta Institute of Engineering and Management",
//           date: "April 2023",
//         },
//         {
//           title: "Top 35 in Intra college Smart India Hackthon 2023",
//           description: "Organised by Calcutta Institute of Engineering and Management",
//           date: "September 2023",
//         },
//         {
//           title: "2nd position at Celsius Hackathon 2024",
//           description: "Organised by Calcutta Institute of Engineering and Management",
//           date: "January 2024",
//         },
//         {
//           title: "Finalist in Smart Bengal Hackathon 2024",
//           description: "Organised by Calcutta Institute of Engineering and Management",
//           date: "April 2024",
//         },
//       ];
//   return (
//     <div className="Achievements-App">
//       <h1 className="Achievements-heading">WHAT I HAVE ACHIEVED SO FAR</h1>
//       <h2 className="Achievements-subheading">Achievements</h2>
//       <div className="Achievements-timeline">
//         {achievements.map((achievement, index) => (
//           <div className="Achievements-timeline-item" key={index}>
//             <div className="Achievements-timeline-date">{achievement.date}</div>
//             <div className="Achievements-timeline-content">
//               <h3>{achievement.title}</h3>
//               <p>{achievement.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import './Achievements.css';
import gdsc from '../../images/gdsc.jpeg';
import sbh23 from '../../images/sbh2023.jpeg';
import sih from '../../images/sih.jpeg';
import ciem from '../../images/ciem.jpeg';
import sbh24 from '../../images/sbh2024.jpeg';

const achievements = [
  {
    date: 'January 2023',
    title: '6th in Google Solution Challenge Hackathon 2023',
    organization: 'Organised by Techno International New Town',
    picture: gdsc,
  },
  {
    date: 'April 2023',
    title: 'Finalist in Smart Bengal Hackathon 2023',
    organization: 'Organised by RCC Institute of Information Technology',
    picture: sbh23,
  },
  {
    date: 'September 2023',
    title: 'Top 35 in Intra college Smart India Hackathon 2023',
    organization: 'Organised by Techno International New Town',
    picture: sih,
  },
  {
    date: 'January 2024',
    title: '2nd position at Celsius Hackathon 2024',
    organization: 'Organised by Calcutta Institute of Engineering and Management',
    picture: ciem,
  },
  {
    date: 'April 2024',
    title: 'Finalist in Smart Bengal Hackathon 2024',
    organization: 'Organised by RCC Institute of Information Technology',
    picture: sbh24,
  },
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAchievement(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="Achievements-timeline">
      <div className="Achievements-timeline-h1">WHAT I HAVE ACHIEVE SO FAR</div>
      <div className="Achievements-timeline-h2">Achievements</div>
      <div className="Achievements-timelineP"></div>
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className={`Achievements-container ${index % 2 === 0 ? 'left' : 'right'}`}
          onClick={() => openModal(achievement)}
        >
          <div className="Achievements-content">
            <h3>{achievement.date}</h3>
            <p>{achievement.title}</p>
            <i><p>{achievement.organization}</p></i>
          </div>
        </div>
      ))}
      {selectedAchievement && (
        <div className="Achievements-modal-overlay" onClick={closeModal}>
          <div className="Achievements-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{selectedAchievement.title}</h2>
            <img src={selectedAchievement.picture} alt={selectedAchievement.title} className="achievement-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
