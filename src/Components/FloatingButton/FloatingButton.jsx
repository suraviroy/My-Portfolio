import React from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="floating-button" onClick={scrollToTop}>
      ↑
    </button>
  );
};

export default FloatingButton;
