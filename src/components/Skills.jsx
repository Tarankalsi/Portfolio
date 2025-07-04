import React from "react";
import styled, { keyframes } from "styled-components";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaDatabase, FaGitAlt } from "react-icons/fa";
import smokeVideo from "../assets/vecteezy_realistic-dry-ice-smoke-clouds-fog-overlay-perfect-for_21523291.mp4";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
`;

const SkillsSection = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background: none;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SmokeVideo = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.30;
  pointer-events: none;
  object-fit: cover;
`;

const SmokeFade = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent 0%,rgba(0, 0, 0, 0.84) 100%);
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 2.2rem;
  letter-spacing: 1px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const ConstellationContainer = styled.div`
  position: relative;
  width: 900px;
  height: 700px;
  max-width: 98vw;
  max-height: 80vh;
  margin: 0 auto;
  z-index: 2;
  @media (max-width: 900px) {
    width: 98vw;
    height: 60vw;
    max-height: 60vw;
  }
  @media (max-width: 700px) {
    width: 340px;
    height: 320px;
    max-height: 50vw;
  }
`;

const SkillNode = styled.div`
  position: absolute;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  background: rgba(255,255,255,0.13);
  color: #ffffff;
  border-radius: 32px;
  padding: 0.7rem 1.3rem 0.7rem 1.1rem;
  font-size: 1.08rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  box-shadow: 0 4px 24px 0 rgba(22, 22, 22, 0.53), 0 2px 16px 0 rgba(54, 54, 54, 0.13);
  border: 1.5px solid rgba(255,255,255,0.13);
  backdrop-filter: blur(8px);
  z-index: 3;
  animation: ${fadeIn} 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: both;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.18s;
  &:hover {
    background: rgba(60, 60, 60, 0.14);
    color:rgb(255, 255, 255);
    box-shadow: 0 4px 32px 0 rgba(255, 255, 255, 0.35);
    transform: scale(1.08);
  }
`;

const Glow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 32px;
  height: 32px;
  background: radial-gradient(circle,rgba(62, 62, 62, 0.33) 0%, transparent 80%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none;
`;

const StarsBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
`;

const Star = styled.div`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  background: ${({ color }) =>
    color === 'white'
      ? 'radial-gradient(circle, #fff 0%, #fff 60%, transparent 100%)'
      : color === 'blue'
      ? 'radial-gradient(circle,rgb(8, 8, 8) 0%,rgb(0, 0, 0) 60%, transparent 100%)'
      : 'radial-gradient(circle,rgb(0, 0, 0) 0%, #fff 60%, transparent 100%)'};
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

const skills = [
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "TypeScript", icon: <FaJs color="#3178c6" /> },
  { name: "React.js", icon: <FaReact color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#43e97b" /> },
  { name: "HTML5", icon: <FaHtml5 color="#e44d26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#2965f1" /> },
  { name: "SASS", icon: <FaSass color="#cc6699" /> },
  { name: "MongoDB", icon: <FaDatabase color="#43e97b" /> },
  { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
  { name: "REST APIs", icon: <FaDatabase color="#22223b" /> },
  { name: "GraphQL", icon: <FaDatabase color="#0a001a" /> },
  { name: "CI/CD", icon: <FaDatabase color="#0a001a" /> },
];

// Predefined constellation node positions (x, y in % of container)
const nodePositions = [
  { x: 10, y: 15 }, { x: 30, y: 7 }, { x: 65, y: 12 }, { x: 88, y: 25 },
  { x: 92, y: 50 }, { x: 75, y: 75 }, { x: 50, y: 85 }, { x: 25, y: 75 },
  { x: 7, y: 50 }, { x: 18, y: 32 }, { x: 70, y: 55 }, { x: 45, y: 22 },
];

// Pairs of node indices to connect with lines
const connections = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0], // outer loop
  [1,10],[10,11],[11,4],[11,7],[10,6],[2,10],[9,11],[5,10]
];

export default function Skills() {
  // Generate 120 random stars, with more tiny and visible ones
  const stars = React.useMemo(() => Array.from({ length: 120 }, (_, i) => {
    const size = 0.7 + Math.random() * 2.5;
    const opacity = 0.32 + Math.random() * 0.45;
    // Most stars white, some blue or deep space
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
    <SkillsSection id="skills">
      <StarsBg>
        {stars.map(star => (
          <Star {...star} />
        ))}
      </StarsBg>
      <SmokeVideo
        src={smokeVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <SmokeFade />
      <Title>Skills</Title>
      <ConstellationContainer>
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", left: 0, top: 0, zIndex: 1, pointerEvents: "none" }}
        >
          {connections.map(([from, to], i) => {
            const a = nodePositions[from];
            const b = nodePositions[to];
            return (
              <line
                key={i}
                x1={`${a.x}%`} y1={`${a.y}%`} x2={`${b.x}%`} y2={`${b.y}%`}
                stroke="#dbdbdb"
                strokeWidth="1.5"
                opacity="0.18"
                style={{ filter: "drop-shadow(0 0 8px rgba(255, 254, 254, 0.56))" }}
              />
            );
          })}
        </svg>
        {skills.map((skill, i) => {
          const { x, y } = nodePositions[i];
          return (
            <React.Fragment key={skill.name}>
              <Glow style={{ left: `${x}%`, top: `${y}%` }} />
              <SkillNode
                x={x}
                y={y}
                delay={i * 0.08}
                title={skill.name}
              >
                <span style={{ fontSize: '1.5em', display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
                {skill.name}
              </SkillNode>
            </React.Fragment>
          );
        })}
      </ConstellationContainer>
    </SkillsSection>
  );
}
