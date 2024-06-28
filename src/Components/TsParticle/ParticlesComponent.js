import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesComponent = (props) => {
  const options = useMemo(() => {

    const calculateParticlesNumber = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        return 30; // Adjust for smaller screens
      } else {
        return 90; // Default number of particles for larger screens
      }
    };
    const particleNumber = calculateParticlesNumber();
    return {
      autoPlay: true, // Ensure autoPlay is enabled
      background: {
        color: "#121212",
      },
      fullScreen: {
        enable: true,
        zIndex: -5,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 50,
          },
        },
      },
      particles: {
        number: {
          value: particleNumber, // Set the initial number of particles
          limit: 120, // Maximum number of particles
        },
        color: {
          //value: "#adb5bd", // Color for the particles
          value: "#C00246",
        },
        links: {
          enable: false,
          distance: 150,
          color: {
            value: "#495057", // Color for the links
          },
          opacity: 0.5,
          width: 3,
        },
        move: {
          enable: true, // Enable particle movement
          speed: 4, // Set a consistent speed
          direction: "none", // No specific direction
          random: true, // Randomize the movement direction
          straight: false, // Ensure particles move in a non-straight path
          outModes: {
            default: "out", // Make particles bounce when they reach the edge
          },
        },
        opacity: {
          value: { min: 0.4, max: 0.6 },
          animation: {
            enable: true,
            speed: 3,
            sync: false,
          },
        },
        size: {
          value: { min: 2, max: 5 },
        },
        shape: {
          type: "star", // Star shape for particles
        },
        shadow: {
          enable: true,
          blur: 5,
          color: "#C00246",
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id={props.id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
