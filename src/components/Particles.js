//DISCLAIMER THIS IS NOT OWNED BY ME AT ALL CREDIT TO https://github.com/VincentGarreau/particles.js/
//MY GOAT I LOVE THIS SH*T (what whos reading this anyways...)
// src/components/Particles.js

import React, { useEffect } from 'react';

export default function Particles() {
  useEffect(() => {
    const script = document.createElement('script');
   // script.src = '/particles.min.js';
   script.src = `${process.env.PUBLIC_URL}/particles.min.js`;

    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 }
          },
          color: { value: '#888888' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#b833ff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            out_mode: 'out'
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: false, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: -1,
        top: 0,
        left: 0,
        pointerEvents: 'auto'
      }}
    />
  );
}
