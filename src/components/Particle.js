import React from "react";
import Particles from "react-tsparticles";

// Hoisted to module scope so the object reference is stable across renders
// and react-tsparticles never needlessly re-initialises the canvas.
const PARTICLE_PARAMS = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    line_linked: {
      enable: false,
      opacity: 0.03,
    },
    move: {
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};

// React.memo prevents re-renders when parent state changes (e.g. preloader
// toggling, navbar scroll state, route transitions).
const Particle = React.memo(function Particle() {
  return <Particles id="tsparticles" params={PARTICLE_PARAMS} />;
});

export default Particle;
