import { useEffect, useRef } from 'react';
import './BackgroundGlow.css';

const BackgroundGlow = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Only run on non-touch devices
        if (window.innerWidth <= 768 || 'ontouchstart' in window) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let mouseX = width / 2;
        let mouseY = height / 2;

        const particles = [];
        
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                // Random velocity for scattering effect
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 2 + 0.5;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                
                // Random size between 1 and 3
                this.size = Math.random() * 2 + 1;
                
                // Opacity fades over time
                this.life = 1;
                this.decay = Math.random() * 0.02 + 0.01;
                
                // Color picking between Cyan and Purple from the theme
                const colors = ['rgba(0, 240, 255, ', 'rgba(138, 43, 226, '];
                this.colorBase = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= this.decay;
            }

            draw(ctx) {
                if (this.life <= 0) return;
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `${this.colorBase}${this.life})`;
                ctx.fill();
                
                // Add a subtle glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = `${this.colorBase}${this.life})`;
            }
        }

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Add particles at the mouse position continuously
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(mouseX, mouseY));
            }
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        let animationFrameId;

        const render = () => {
            // Use a slight fade on the canvas instead of clearRect to create trails
            ctx.clearRect(0, 0, width, height);

            // Update and draw all particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.update();
                p.draw(ctx);
                
                // Reset shadow blur optimization
                ctx.shadowBlur = 0;

                // Remove dead particles
                if (p.life <= 0) {
                    particles.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };
        
        render();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas className="particle-canvas" ref={canvasRef} />;
};

export default BackgroundGlow;
