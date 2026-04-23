import React, { useEffect, useRef } from 'react';

interface SplashCursorProps {
  SIM_RESOLUTION?: number;
  DYE_RESOLUTION?: number;
  DENSITY_DISSIPATION?: number;
  VELOCITY_DISSIPATION?: number;
  PRESSURE?: number;
  CURL?: number;
  SPLAT_RADIUS?: number;
  SPLAT_FORCE?: number;
  COLOR_UPDATE_SPEED?: number;
  color?: string; // Cor customizável
}

const SplashCursor: React.FC<SplashCursorProps> = ({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  COLOR_UPDATE_SPEED = 10,
  color = '#00f0ff', // Cor padrão: cyan
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    age: number;
    radius: number;
  }>>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Create particles at cursor
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          age: 0,
          radius: Math.random() * 3 + 2,
        });
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Clear canvas with semi-transparent background
      ctx.fillStyle = 'rgba(6, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.age += 1;
        particle.vy += 0.2; // gravity

        const alpha = Math.max(0, 1 - particle.age / 80);

        ctx.fillStyle = color;
        ctx.globalAlpha = alpha * 0.6;
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * (1 - particle.age / 80), 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 1;

        return particle.age < 80; // Remove old particles
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default SplashCursor;
