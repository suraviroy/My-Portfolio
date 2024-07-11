import React, { useState } from 'react'
import './Copyright.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import copyrightImage from '../../images/copy.jpeg';
import copyrightImage2 from '../../images/copy2.jpeg';

export default function Copyright() {
    const Copyright = [
        {
            name: '“Advaya: A Customizable Online Assessment Platform to Assist Organisations and Institutions in Identifying and Selecting the Right Skilled and Talented Candidates”',
            author: "Authors- Suravi Roy, Tiasha Manda, and Debraj Chatterjee",
            publication: "Registration Number - SW-18318/2024",
            date: "February 2024",
            image: copyrightImage,
        },
        {
            name: '“Bharat Raahat Kendra is a  platform where all types of rescue agencies and emergency services can come together to handle any type of disaster. ”',
            author: "Authors- Suravi Roy, Tiasha Manda, Debraj Chatterjee, Sakshi Srivastava and Aitijhya Saha",
            publication: "Registration Number- SW-19141/2024",
            date: "July 2024",
            image: copyrightImage2,
        },
       
    ];
    const [selectedCopyright, setSelectedCopyright] = useState(null);


    React.useEffect(() => {
        AOS.init();
    }, []);

    const openModal = (copyright) => {
        setSelectedCopyright(copyright);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCopyright(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="Copyright-App">
            <div className="Copyright-subheading">Copyright</div>
            <div className="Copyright-timeline">
                {Copyright.map((Copyright, index) => (
                    <div className="Copyright-timeline-item" key={index} onClick={() => openModal(Copyright)}>
                        <div className="Copyright-timeline-date">{Copyright.date}</div>
                        <div className="Copyright-timeline-content" data-aos="fade-right"  data-aos-delay={0 + index * 200}>
                            <h3>{Copyright.name}</h3>
                            {/* <p>{Copyright.author}</p> */}
                            <p>{Copyright.publication}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedCopyright && (
                <div className="Copyright-modal-overlay" onClick={closeModal}>
                    <div className="Copyright-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <div className="modal-content-h2">{selectedCopyright.name}</div>
                        <img src={selectedCopyright.image} alt={selectedCopyright.name} className="copyright-image" />
                       
                    </div>
                </div>
            )}
        </div>
    )
}

