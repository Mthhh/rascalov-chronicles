import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
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

    // Create slow, organic smoke particle
    const createParticle = (): Particle => {
      const maxLife = 800 + Math.random() * 400;
      return {
        x: Math.random() * canvas.width,
        y: canvas.height * (0.5 + Math.random() * 0.5),
        size: 100 + Math.random() * 120,
        speedY: -(0.03 + Math.random() * 0.08),
        speedX: (Math.random() - 0.5) * 0.15,
        opacity: 0.01 + Math.random() * 0.015,
        life: 0,
        maxLife,
      };
    };

    // Create initial smoke particles - reduced count for performance
    for (let i = 0; i < 6; i++) {
      particlesRef.current.push(createParticle());
    }

    let frameCount = 0;
    const animate = () => {
      frameCount++;
      // Only update every 2nd frame for performance (30fps instead of 60fps)
      if (frameCount % 2 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesRef.current.forEach((particle, index) => {
          particle.life += 2;
          particle.x += particle.speedX * 2;
          particle.y += particle.speedY * 2;

          // Slight horizontal drift - less frequent
          if (frameCount % 4 === 0) {
            particle.speedX += (Math.random() - 0.5) * 0.01;
            particle.speedX = Math.max(-0.2, Math.min(0.2, particle.speedX));
          }

          // Fade based on life
          const lifeRatio = particle.life / particle.maxLife;
          const fadeOpacity = particle.opacity * Math.sin(lifeRatio * Math.PI);

          // Draw smoke - simplified gradient
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          );
          gradient.addColorStop(0, `hsla(0, 0%, 6%, ${fadeOpacity})`);
          gradient.addColorStop(0.5, `hsla(0, 0%, 4%, ${fadeOpacity * 0.4})`);
          gradient.addColorStop(1, 'transparent');

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Reset particle if off screen or dead
          if (particle.y < -particle.size || particle.life >= particle.maxLife) {
            particlesRef.current[index] = createParticle();
          }
        });
      }

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
    />
  );
};

export default ParticleBackground;
