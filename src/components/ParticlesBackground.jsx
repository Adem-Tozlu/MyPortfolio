import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import { IoMoon } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
import { useTheme } from './Theme/ThemeContext';

const ParticlesComponent = (props) => {
  const { theme, toggleTheme } = useTheme(); 

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    background: {
      color: {
        value: theme === 'light' ? "#000000" : "#ffffff",
      },
    },
    fpsLimit: 120,
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
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 130,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "00cffc", 
      },
      links: {
        color: "00cffc", 
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 150,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), [theme]); 

  return (
    <>
      <span className="dark-lightmode" onClick={toggleTheme}>
       {theme === 'light' ?  <IoMoon className="dark" />: <BsSun className="light" />  }
      </span>
      <Particles id={props.id} init={particlesLoaded} options={options} />
    </>
  );
};

export default ParticlesComponent;