import React, { useState } from 'react'
import './Publications.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import publicationImage1 from '../../images/paper1.jpeg';
import publicationImage2 from '../../images/paper2.jpeg';
import publicationImage3 from '../../images/paper3.jpeg';

export default function Publications() {
    const Publications = [
        {
            name: '“Towards Zero Hunger: A Platform for Sustainable Food Distribution and Collaboration in Achieving the United Nations’ Sustainable Development Goal”',
            author: "Authors- Suravi Roy, Tiasha Mandal, Parthib Das, and Nilanjana Dutta Roy",
            publication: "Name of the publication - Springer,  ICSTA 2023 ",
            date: "December 2023",
            image: publicationImage1,
        },
        {
            name: "“Empowering Public Safety through AI-Driven Criminal Identification and Real-Time Record Management”",
            author: "Authors- Suravi Roy and Tiasha Mandal",
            publication: "Name of the publication - IEEE, FOSET 2024",
            date: "May 2024",
            image: publicationImage2,
        },
        {
            name: "“Biometric Identification using Gait Analysis: Methods, Characteristics, and Difficulties”",
            author: "Authors- Suravi Roy, Sakshi Srivastava, Ritwika Acharya, Arya Raj, Bitan Misra and Nilanjan Dey",
            publication: "Name of the publication - IEEE, ACET 2024 ",
            date: "July 2024",
            image: publicationImage3,
        },
    ];

    const [selectedPublication, setSelectedPublication] = useState(null);

    React.useEffect(() => {
        AOS.init();
    }, []);

    const openModal = (publication) => {
        setSelectedPublication(publication);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedPublication(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="Publications-App">
            <div className="Publications-heading">RESEARCH PAPER</div>
            <div className="Publications-subheading">Publications</div>
            <div className="Publications-timeline">
                {Publications.map((Publications, index) => (
                    <div className="Publications-timeline-item" key={index} onClick={() => openModal(Publications)}>
                        <div className="Publications-timeline-date">{Publications.date}</div>
                        <div className="Publications-timeline-content" data-aos="fade-left" data-aos-delay={0 + index * 200}>
                            <h3>{Publications.name}</h3>
                            {/* <p>{Publications.author}</p> */}
                            <p>{Publications.publication}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedPublication && (
                <div className="Publications-modal-overlay" onClick={closeModal}>
                    <div className="Publications-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>{selectedPublication.name}</h2>
                        <img src={selectedPublication.image} alt={selectedPublication.name} className="publication-image" />
                    </div>
                </div>
            )}
        </div>
    )
}
