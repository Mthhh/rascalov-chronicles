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
      const maxLife = 600 + Math.random() * 400;
      return {
        x: Math.random() * canvas.width,
        y: canvas.height * (0.5 + Math.random() * 0.5),
        size: 80 + Math.random() * 150,
        speedY: -(0.05 + Math.random() * 0.15),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: 0.015 + Math.random() * 0.025,
        life: 0,
        maxLife,
      };
    };

    // Create initial smoke particles
    for (let i = 0; i < 12; i++) {
      particlesRef.current.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.life++;
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Slight horizontal drift
        particle.speedX += (Math.random() - 0.5) * 0.01;
        particle.speedX = Math.max(-0.3, Math.min(0.3, particle.speedX));

        // Fade based on life
        const lifeRatio = particle.life / particle.maxLife;
        const fadeOpacity = particle.opacity * Math.sin(lifeRatio * Math.PI);

        // Draw smoke - dark, diffuse, organic
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, `hsla(0, 0%, 8%, ${fadeOpacity})`);
        gradient.addColorStop(0.4, `hsla(0, 0%, 5%, ${fadeOpacity * 0.6})`);
        gradient.addColorStop(0.7, `hsla(0, 0%, 3%, ${fadeOpacity * 0.3})`);
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
