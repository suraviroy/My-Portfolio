import React, { useState, useEffect } from 'react';
import './PictureGallery.css';
import pic from '../../images/Screenshot (4656).png'

const images = [
  pic,
  pic,
  pic,
  // Add more image paths as needed
];

function PictureGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-container">
      <h2>WHAT EVENTS I HAVE DONE SO FAR</h2>
      <h1>Picture Gallery</h1>
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''} ${
              index === (currentIndex + 1) % images.length ? 'next' : ''
            } ${
              index === (currentIndex - 1 + images.length) % images.length
                ? 'prev'
                : ''
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PictureGallery;
