import React from 'react';
import './Herosection.css';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaOrcid } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import pic from'../../images/mypic.png';

export default function Herosection() {
    return (
        <div>
            <div className="herosection">
                <div className="herosection-left-side">
                    <div className="herosection-text_hi">
                        Hi, I'm
                    </div>
                    <div className="herosection-text_suravi">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: ["Suravi Roy", "A Web Developer", "Backend Developer", "UI/UX Developer"]
                            }}
                        />
                    </div>
                    <div className="herosection-text_details">
                    Web Applications | Publications | Copyrights | Projects
                    </div>
                    <div className="herosection-social-icons">
                        <a href="https://github.com/suraviroy/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/suravi-roy-445814222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        </a>
                        <a href="https://orcid.org/0009-0001-4610-1961" target="_blank" rel="noopener noreferrer"><FaOrcid /></a>
                        <a href="https://www.instagram.com/_suravi_15_?igsh=ZTM4dnRmeno3b2dl" ><FaInstagram /></a>
                        <a href="https://www.facebook.com/suravi.roy.9216?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    </div>
                </div>
                <div className="herosection-right-side">
                    <div className="herosection-image-container">
                        <img src={pic} alt="Profile" />
                    </div>
                    <div className="herosection-half-circle"></div>
                </div>
            </div>
        </div>
    )
}
