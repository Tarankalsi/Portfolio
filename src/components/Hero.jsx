import React, { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import styled, { keyframes } from "styled-components";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import IMG_0811 from "../assets/IMG_0811.jpg";

const morph = keyframes`
  0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlobBg = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg,rgb(177, 177, 177) 0%,rgba(109, 109, 109, 0.35) 100%);
  opacity: 0.18;
  filter: blur(60px);
  animation: ${morph} 18s infinite linear;
  z-index: 0;
  
  @media (max-width: 768px) {
    width: 500px;
    height: 500px;
  }
  
  @media (max-width: 480px) {
    width: 400px;
    height: 400px;
  }
`;

const GlassPhoto = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px 0 rgba(187, 187, 187, 0.27);
  backdrop-filter: blur(8px);
  border: 2.5px solid rgba(255,255,255,0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  z-index: 3;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
  }
`;

const Photo = styled.img`
  width: 92%;
  height: 92%;
  border-radius: 50%;
  object-fit: cover;
  filter: grayscale(10%) contrast(1.1);
`;

const FloatingIcons = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
  
  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
  }
`;

const Icon = styled.div`
  position: absolute;
  font-size: 2.2rem;
  color: #fff;
  opacity: 0.85;
  filter: drop-shadow(0 2px 8px #0002);
  animation: float 6s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-18px); }
  }
`;

const iconPositions = [
  { top: "-40%", left: "90%" },
  { top: "3%", left: "80%" },
  { top: "-30%", left: "20%" },
  { top: "20%", left: "10%" },
  { top: "15%", left: "100%" },
  { top: "-20%", left: "-20%" },
];

const NeonTagline = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 8px rgb(234, 188, 61), 0 0 16px rgb(249, 133, 56);
  letter-spacing: 1.5px;
  margin-bottom: 1.2rem;
  animation: neonFlicker 2.5s infinite alternate;
  z-index: 3;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    margin-bottom: 0.8rem;
  }
  
  @keyframes neonFlicker {
    0%, 100% { opacity: 1; text-shadow: 0 0 8px rgb(239, 187, 63), 0 0 16px rgb(249, 127, 56); }
    45% { opacity: 0.7; text-shadow: 0 0 2px rgb(239, 187, 63), 0 0 4px rgb(249, 127, 56); }
    55% { opacity: 0.9; text-shadow: 0 0 12px rgb(239, 187, 63), 0 0 24px rgb(249, 127, 56); }
  }
`;

const GlassCard = styled.div`
  background: rgba(6, 5, 8, 0.32);
  box-shadow: 0 4px 24px 0 rgba(5, 5, 7, 0.13), 0 1.5px 12px 0 rgba(11, 11, 18, 0.13);
  backdrop-filter: blur(18px);
  border-radius: 28px;
  border: 1.5px solid rgba(255,255,255,0.13);
  padding: 2.8rem 2rem 2.2rem 2rem;
  z-index: 3;
  text-align: center;
  max-width: 480px;
  width: 92%;
  margin: 0 auto;
  position: relative;
  animation: glassPop 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    border-radius: 24px;
    max-width: 420px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem 1rem 1rem;
    border-radius: 20px;
    max-width: 360px;
    width: 95%;
  }
  
  @keyframes glassPop {
    0% { opacity: 0; transform: scale(0.96) translateY(32px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
`;

const AccentBar = styled.div`
  width: 48px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, #22223b 0%, #43e97b 100%);
  margin: 0 auto 1.2rem auto;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 3px;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    width: 32px;
    height: 2px;
    margin-bottom: 0.8rem;
  }
`;

const BubbleCanvas = styled.canvas`
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  pointer-events: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

export default function Hero() {
  const canvasRef = useRef(null);
  const bubblesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    // Create bubbles
    const bubbles = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: 48 + Math.random() * 32,
      color: `rgba(255, 255, 255,${0.18 + Math.random() * 0.18})`,
    }));
    bubblesRef.current = bubbles;

    // Mouse move
    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    canvas.addEventListener("mousemove", onMouseMove);
    // Mouse leave
    const onMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };
    canvas.addEventListener("mouseleave", onMouseLeave);

    // Animation loop
    let running = true;
    function loop() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (let bubble of bubblesRef.current) {
        // Bubble-mouse interaction
        const d = distance(bubble.x, bubble.y, mouseRef.current.x, mouseRef.current.y);
        if (d < bubble.radius + 30) {
          // Move away from mouse
          const angle = Math.atan2(bubble.y - mouseRef.current.y, bubble.x - mouseRef.current.x);
          bubble.vx += Math.cos(angle) * 1.5;
          bubble.vy += Math.sin(angle) * 1.5;
        }
        // Damping
        bubble.vx *= 0.96;
        bubble.vy *= 0.96;
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;
        // Bounce off edges
        if (bubble.x < bubble.radius) { bubble.x = bubble.radius; bubble.vx *= -0.7; }
        if (bubble.x > width - bubble.radius) { bubble.x = width - bubble.radius; bubble.vx *= -0.7; }
        if (bubble.y < bubble.radius) { bubble.y = bubble.radius; bubble.vy *= -0.7; }
        if (bubble.y > height - bubble.radius) { bubble.y = height - bubble.radius; bubble.vy *= -0.7; }
        // Draw bubble
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.opacity = 50;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI);
        ctx.fillStyle = bubble.color;
        ctx.shadowColor = '#969696';   
        
        
        ctx.shadowBlur = 40;
        ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(loop);
    }
    loop();
    // Resize
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", onResize);
    return () => {
      running = false;
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <HeroSection id="hero">
      <BlobBg />
      <BubbleCanvas ref={canvasRef} />
      <FloatingIcons>
        <Icon style={iconPositions[0]}><FaReact color="#61dafb" /></Icon>
        <Icon style={iconPositions[1]}><FaNodeJs color="#43e97b" /></Icon>
        <Icon style={iconPositions[2]}><FaJs color="#f7df1e" /></Icon>
        <Icon style={iconPositions[3]}><FaHtml5 color="#e44d26" /></Icon>
        <Icon style={iconPositions[4]}><FaCss3Alt color="#2965f1" /></Icon>
        <Icon style={iconPositions[5]}><FaGithub color="#fff" /></Icon>
      </FloatingIcons>
      <GlassPhoto>
        <Photo src={IMG_0811} alt="Taranjit Singh" />
      </GlassPhoto>
      <NeonTagline>
        <Typewriter
          words={["Taranjit Singh | Full Stack Developer"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </NeonTagline>
      <GlassCard>
        <AccentBar />
        <p style={{ color: '#e0e0e0', fontSize: '1.18rem', lineHeight: 1.7, marginBottom: 0 }}>
          I am a passionate full stack developer with experience in building modern, scalable web applications. I love to create beautiful, animated, and responsive user interfaces.
        </p>
      </GlassCard>
    </HeroSection>
  );
}
