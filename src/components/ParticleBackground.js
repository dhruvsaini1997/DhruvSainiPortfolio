import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function ParticleBackground({ darkMode }) {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const options = useMemo(() => {
  const particleColor = darkMode ? '#aaaaaa' : '#666666';
  const linkColor = darkMode ? '#888888' : '#aaaaaa';
  return {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    particles: {
      color: { value: particleColor },
      links: {
        color: linkColor,
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: true,
        outModes: { default: 'bounce' },
      },
      number: { value: 80, density: { enable: true } },
      opacity: { value: { min: 0.5, max: 0.9 } },
      shape: { type: 'circle' },
      size: { value: { min: 1.5, max: 4 } },
    },
    detectRetina: true,
  };
  }, [darkMode]);

  if (!engineReady) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Particles id="tsparticles" options={options} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default React.memo(ParticleBackground);
