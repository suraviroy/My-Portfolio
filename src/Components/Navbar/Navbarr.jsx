import React from 'react';
import { useState } from 'react';
import './Navbarr.css';

export default function Navbarr() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setDrawerOpen(false); // Close drawer on navigation
        }
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <span className="brand-meet">Meet</span>
                    <span className="brand-me">Me</span>
                </div>
                <div className="menu-icon" onClick={toggleDrawer}>
                    &#9776;
                </div>
                <div className={`navbar-links ${drawerOpen ? 'open' : ''}`}>
                      <a onClick={() => scrollToSection('home')}>Home</a>
                    <a onClick={() => scrollToSection('projects')}>Projects</a>
                    <a onClick={() => scrollToSection('experience')}>Experience</a>
                    <a onClick={() => scrollToSection('achievement')}>Achievement</a>
                    <a onClick={() => scrollToSection('publications')}>Publications</a>
                </div>
            </nav>
        </div>
    )
}
