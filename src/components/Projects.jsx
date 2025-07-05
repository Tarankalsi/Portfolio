import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import saveurRestaurant from "../assets/SaveurRestaurant.png";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const UniverseBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const NebulaGlow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 600px;
  height: 400px;
  background: radial-gradient(circle,rgba(91, 91, 91, 0.2) 0%,rgba(176, 176, 176, 0.07) 60%, transparent 100%);
  filter: blur(60px);
  transform: translate(-50%, -50%) scale(1.1);
  z-index: 1;
  pointer-events: none;
`;

const Star = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  left: ${({ x }) => x}vw;
  top: ${({ y }) => y}vh;
  background: ${({ color }) =>
    color === 'white'
      ? 'radial-gradient(circle, #fff 0%, #fff 60%, transparent 100%)'
      : color === 'blue'
      ? 'radial-gradient(circle, #b5e3ff 0%,rgb(48, 48, 48) 60%, transparent 100%)'
      : 'radial-gradient(circle,rgb(34, 34, 34) 0%, #fff 60%, transparent 100%)'};
  border-radius: 50%;
  opacity: ${({ opacity }) => opacity};
  filter: blur(0.5px) drop-shadow(0 0 6px #fff8);
  animation: shineStar 2.5s infinite alternate;
  animation-delay: ${({ delay }) => delay}s;

  @keyframes shineStar {
    0%, 100% { opacity: ${({ opacity }) => opacity}; filter: blur(0.5px) drop-shadow(0 0 6px #fff8); }
    50% { opacity: ${({ opacity }) => opacity * 1.2}; filter: blur(1.5px) drop-shadow(0 0 12px #fff); }
  }
`;

const ProjectsSection = styled.section`
  min-height: 100vh;
  width: 100%;
  background: none;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0 1rem 0;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 2.2rem;
  letter-spacing: 1px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  width: 90vw;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    width: 95vw;
  }
  
  @media (max-width: 480px) {
    gap: 1.2rem;
    width: 98vw;
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectCard = styled.div`
  background: rgba(20, 20, 20, 0.35);
  box-shadow: 0 4px 24px 0 rgba(134, 134, 134, 0.13), 0 1.5px 12px 0 rgba(208, 208, 208, 0.13);
  backdrop-filter: blur(18px);
  border-radius: 20px;
  border: 1.5px solid rgba(255,255,255,0.13);
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInUp} 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: both;
  position: relative;
  transition: transform 0.18s, box-shadow 0.18s;
  width: 30rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 28rem;
    padding: 1.2rem 1rem 1rem 1rem;
    border-radius: 18px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 22rem;
    padding: 1rem 0.8rem 0.8rem 0.8rem;
    border-radius: 16px;
    margin: 0 auto;
  }
  
  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 8px 32px 0 rgba(205, 205, 205, 0.27);
    cursor: pointer;
    
    @media (max-width: 768px) {
      transform: translateY(-4px) scale(1.01);
    }
    
    @media (max-width: 480px) {
      transform: translateY(-2px) scale(1.005);
    }
  }
`;

const MonitorFrame = styled.a`
  display: block;
  width: 92%;
  max-width: 320px;
  aspect-ratio: 16/9;
  background: rgb(30, 30, 30);
  border-radius: 16px 16px 10px 10px;
  box-shadow: 0 2px 16px 0 #0006, 0 1.5px 12px 0 rgba(176, 176, 176, 0.13);
  border: 2px solid rgba(33, 33, 33, 0.2);
  position: relative;
  margin-bottom: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.18s, border 0.18s;
  
  @media (max-width: 768px) {
    max-width: 280px;
    border-radius: 14px 14px 8px 8px;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    width: 100%;
    border-radius: 12px 12px 6px 6px;
    margin-bottom: 0.6rem;
  }
  
  &:hover {
    box-shadow: 0 4px 32px 0 rgba(44, 44, 44, 0.33);
    border: 2px solid rgb(166, 166, 166);
  }
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%);
    width: 70px;
    height: 12px;
    background: rgb(36, 36, 36);
    border-radius: 0 0 14px 14px;
    box-shadow: 0 2px 8px #0004;
    
    @media (max-width: 768px) {
      width: 60px;
      height: 10px;
      bottom: -10px;
    }
    
    @media (max-width: 480px) {
      width: 50px;
      height: 8px;
      bottom: -8px;
    }
  }
`;

const MonitorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 14px 14px 8px 8px;
  display: block;
  transition: transform 0.32s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
  
  @media (max-width: 768px) {
    border-radius: 12px 12px 6px 6px;
  }
  
  @media (max-width: 480px) {
    border-radius: 10px 10px 4px 4px;
  }
  
  ${MonitorFrame}:hover & {
    transform: scale(1.06);
    
    @media (max-width: 768px) {
      transform: scale(1.04);
    }
    
    @media (max-width: 480px) {
      transform: scale(1.02);
    }
  }
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  margin: 0.5rem 0 0.2rem 0;
  text-align: center;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0.4rem 0 0.15rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin: 0.3rem 0 0.1rem 0;
  }
`;

const ProjectDesc = styled.p`
  color: #e0e0e0;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.35;
    margin-bottom: 0.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.3;
    margin-bottom: 0.3rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 0.4rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.35rem;
    margin-bottom: 0.3rem;
  }
`;

const TechIcon = styled.span`
  font-size: 1.1rem;
  color: ${({ color }) => color || '#22223b'};
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.27));
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 0.3rem;
  
  @media (max-width: 768px) {
    gap: 0.7rem;
    margin-top: 0.2rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-top: 0.1rem;
  }
`;

const LinkIcon = styled.a`
  color: rgb(153, 153, 153);
  font-size: 1.3rem;
  border-radius: 50%;
  transition: background 0.18s, color 0.18s, transform 0.18s;
  padding: 0.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0.2rem;
  }
  
  &:hover {
    color: rgb(255, 255, 255);
    transform: scale(1.1);
    box-shadow: 0 4px 32px 0 rgba(197, 197, 197, 0.33);
    
    @media (max-width: 768px) {
      transform: scale(1.08);
    }
    
    @media (max-width: 480px) {
      transform: scale(1.05);
    }
  }
`;

const projects = [
  {
    title: "Saveur Restaurant - Fine Dining",
    desc: "A beautiful responsive restaurant website where you can reserve your table and check availability of tables. Features modern UI with booking system.",
    image: saveurRestaurant, // Use your actual image instead of the Unsplash URL
    tech: [<FaReact color="#61dafb" />, <FaHtml5 color="#e44d26" />, <FaCss3Alt color="#2965f1" />],
    github: "https://github.com/Tarankalsi/restaurant-frontend",
    demo: "https://restaurant-frontend-nl3x.onrender.com/",
  },
  // {
  //   title: "Node.js API Server",
  //   desc: "A robust REST API server built with Node.js, Express, and MongoDB, featuring authentication and CRUD operations.",
  //   image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  //   tech: [<FaNodeJs color="#43e97b" />, <FaReact color="#61dafb" />, <FaGithub color="#fff" />],
  //   github: "https://github.com/yourusername/api-server",
  //   demo: "https://yourapiserver.com",
  // },
];

export default function Projects() {
  const stars = React.useMemo(() => Array.from({ length: 90 }, (_, i) => {
    const size = 0.7 + Math.random() * 2.5;
    const opacity = 0.28 + Math.random() * 0.45;
    let color = 'white';
    if (Math.random() < 0.12) color = 'blue';
    else if (Math.random() < 0.22) color = '#0a001a';
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size,
      opacity,
      delay: Math.random() * 2.5,
      color,
      key: i,
    };
  }), []);

  return (
    <ProjectsSection id="projects">
      <UniverseBg>
        {stars.map(star => (
          <Star {...star} key={star.key} />
        ))}
      </UniverseBg>
      <NebulaGlow />
      <Title>Projects</Title>
      <ProjectsGrid>
        {projects.map((project, i) => (
          <ProjectCard key={i}>
            <MonitorFrame
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              title="View Live Demo"
            >
              <MonitorImg src={project.image} alt={project.title} />
            </MonitorFrame>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.desc}</ProjectDesc>
            <TechStack>
              {project.tech.map((icon, j) => (
                <TechIcon key={j}>{icon}</TechIcon>
              ))}
            </TechStack>
            <Links>
              <LinkIcon href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </LinkIcon>
              <LinkIcon href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                <FaExternalLinkAlt />
              </LinkIcon>
            </Links>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}
