import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const UniverseBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
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
  background: radial-gradient(circle, #22223b33 0%, #43e97b11 60%, transparent 100%);
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
      ? 'radial-gradient(circle, #b5e3ff 0%, #22223b 60%, transparent 100%)'
      : 'radial-gradient(circle, #22223b 0%, #fff 60%, transparent 100%)'};
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
  width: 100vw;
  background: none;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 2.2rem;
  letter-spacing: 1px;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: rgba(34, 18, 51, 0.32);
  box-shadow: 0 4px 24px 0 #22223b22, 0 1.5px 12px 0 #22223b22;
  backdrop-filter: blur(18px);
  border-radius: 28px;
  border: 1.5px solid rgba(255,255,255,0.13);
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInUp} 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: both;
  position: relative;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px 0 #22223b44;
  }
`;

const MonitorFrame = styled.a`
  display: block;
  width: 96%;
  max-width: 360px;
  aspect-ratio: 16/10;
  background: #181828;
  border-radius: 18px 18px 12px 12px;
  box-shadow: 0 2px 16px 0 #0006, 0 1.5px 12px 0 #22223b22;
  border: 2.5px solid #22223b33;
  position: relative;
  margin-bottom: 1.2rem;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.18s, border 0.18s;
  &:hover {
    box-shadow: 0 4px 32px 0 #22223b55;
    border: 2.5px solid #22223b;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: -14px;
    transform: translateX(-50%);
    width: 80px;
    height: 14px;
    background: #22223a;
    border-radius: 0 0 16px 16px;
    box-shadow: 0 2px 8px #0004;
  }
`;

const MonitorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px 14px 8px 8px;
  display: block;
  transition: transform 0.32s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
  ${MonitorFrame}:hover & {
    transform: scale(1.08);
  }
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 1.32rem;
  margin: 0.7rem 0 0.3rem 0;
  text-align: center;
`;

const ProjectDesc = styled.p`
  color: #e0e0e0;
  font-size: 1.08rem;
  text-align: center;
  margin-bottom: 0.7rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  margin-bottom: 0.7rem;
`;

const TechIcon = styled.span`
  font-size: 1.3rem;
  color: ${({ color }) => color || '#22223b'};
  filter: drop-shadow(0 0 4px #22223b44);
`;

const Links = styled.div`
  display: flex;
  gap: 1.1rem;
  justify-content: center;
  margin-top: 0.5rem;
`;

const LinkIcon = styled.a`
  color: #22223b;
  font-size: 1.3rem;
  background: rgba(185,131,255,0.10);
  border-radius: 50%;
  padding: 0.45rem;
  transition: background 0.18s, color 0.18s, transform 0.18s;
  &:hover {
    background: rgba(185,131,255,0.22);
    color: #fff;
    transform: scale(1.13);
  }
`;

const projects = [
  {
    title: "Modern Portfolio Website",
    desc: "A beautiful, animated, and responsive portfolio website built with React and styled-components.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tech: [<FaReact color="#61dafb" />, <FaHtml5 color="#e44d26" />, <FaCss3Alt color="#2965f1" />],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Node.js API Server",
    desc: "A robust REST API server built with Node.js, Express, and MongoDB, featuring authentication and CRUD operations.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    tech: [<FaNodeJs color="#43e97b" />, <FaReact color="#61dafb" />, <FaGithub color="#fff" />],
    github: "https://github.com/yourusername/api-server",
    demo: "https://yourapiserver.com",
  },
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
