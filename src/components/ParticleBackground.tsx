import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  type: 'ember' | 'mist';
  life: number;
  maxLife: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const createParticle = (type: 'ember' | 'mist'): Particle => {
      const maxLife = type === 'ember' ? 300 + Math.random() * 200 : 500 + Math.random() * 300;
      return {
        x: Math.random() * canvas.width,
        y: type === 'ember' ? canvas.height + 10 : Math.random() * canvas.height,
        size: type === 'ember' ? 1 + Math.random() * 3 : 50 + Math.random() * 100,
        speedY: type === 'ember' ? -(0.5 + Math.random() * 1.5) : -0.1 - Math.random() * 0.2,
        speedX: (Math.random() - 0.5) * 0.5,
        opacity: type === 'ember' ? 0.8 + Math.random() * 0.2 : 0.02 + Math.random() * 0.03,
        type,
        life: 0,
        maxLife,
      };
    };

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      particlesRef.current.push(createParticle('ember'));
    }
    for (let i = 0; i < 8; i++) {
      particlesRef.current.push(createParticle('mist'));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.life++;
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Fade based on life
        const lifeRatio = particle.life / particle.maxLife;
        const fadeOpacity = particle.opacity * (1 - lifeRatio);

        if (particle.type === 'ember') {
          // Draw ember with glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          gradient.addColorStop(0, `hsla(0, 100%, 50%, ${fadeOpacity})`);
          gradient.addColorStop(0.3, `hsla(15, 100%, 50%, ${fadeOpacity * 0.6})`);
          gradient.addColorStop(1, 'transparent');

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(45, 100%, 70%, ${fadeOpacity})`;
          ctx.fill();
        } else {
          // Draw mist
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          );
          gradient.addColorStop(0, `hsla(0, 30%, 20%, ${fadeOpacity})`);
          gradient.addColorStop(0.5, `hsla(0, 20%, 15%, ${fadeOpacity * 0.5})`);
          gradient.addColorStop(1, 'transparent');

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Reset particle if off screen or dead
        if (particle.y < -50 || particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle(particle.type);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleBackground;
