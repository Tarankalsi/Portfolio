import React from "react";
import styled, { keyframes } from "styled-components";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaDatabase, FaGitAlt, FaAws, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiPostman } from "react-icons/si";


const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
`;

const SkillsSection = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  background: none;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;



const Title = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 2.2rem;
  letter-spacing: 1px;
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
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
  
  @media (max-width: 480px) {
    width: 300px;
    height: 500px;
    max-height: 70vh;
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
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem 0.5rem 0.8rem;
    font-size: 0.9rem;
    gap: 0.5rem;
    border-radius: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem 0.4rem 0.6rem;
    font-size: 0.8rem;
    gap: 0.4rem;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    background: transparent;
    box-shadow: none;
    border: none;
    backdrop-filter: none;
    padding: 0.3rem 0.6rem;
    border-radius: 0;
  }
  
  &:hover {
    background: rgba(60, 60, 60, 0.14);
    color: rgb(255, 255, 255);
    box-shadow: 0 4px 32px 0 rgba(255, 255, 255, 0.35);
    transform: scale(1.08);
    
    @media (max-width: 768px) {
      transform: scale(1.05);
    }
    
    @media (max-width: 480px) {
      transform: scale(1.03);
      background: transparent;
      box-shadow: none;
    }
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
  
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const StarsBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
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

  @media (max-width: 768px) {
    animation: none;
    filter: blur(0.3px) drop-shadow(0 0 3px #fff6);
  }

  @keyframes shineStar {
    0%, 100% { opacity: ${({ opacity }) => opacity}; filter: blur(0.5px) drop-shadow(0 0 6px #fff8); }
    50% { opacity: ${({ opacity }) => opacity * 1.2}; filter: blur(1.5px) drop-shadow(0 0 12px #fff); }
  }
`;

const skills = [
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "React.js", icon: <FaReact color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#43e97b" /> },
  { name: "Express.js", icon: <SiExpress color="#000000" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06b6d4" /> },
  { name: "REST API", icon: <FaDatabase color="#22223b" /> },
  { name: "Prisma (ORM)", icon: <SiPrisma color="#2d3748" /> },
  { name: "Mongoose", icon: <SiMongodb color="#00ed64" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "MongoDB", icon: <SiMongodb color="#00ed64" /> },
  { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
  { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
  { name: "AWS", icon: <FaAws color="#ff9900" /> },
  { name: "Docker", icon: <FaDocker color="#2496ed" /> },
];

// Fixed constellation node positions for 16 skills - well distributed
const nodePositions = [
  { x: 15, y: 20 }, { x: 35, y: 15 }, { x: 55, y: 18 }, { x: 75, y: 12 },
  { x: 85, y: 30 }, { x: 75, y: 60 }, { x: 90, y: 70 }, { x: 65, y: 80 },
  { x: 45, y: 85 }, { x: 25, y: 75 }, { x: 12, y: 65 }, { x: 8, y: 45 },
  { x: 20, y: 35 }, { x: 40, y: 45 }, { x: 60, y: 55 }, { x: 80, y: 45 },
];

// Mobile-specific node positions for better vertical distribution
const mobileNodePositions = [
  { x: 10, y: 8 }, { x: 30, y: 6 }, { x: 50, y: 10 }, { x: 70, y: 5 },
  { x: 80, y: 15 }, { x: 70, y: 25 }, { x: 85, y: 35 }, { x: 60, y: 45 },
  { x: 40, y: 55 }, { x: 20, y: 65 }, { x: 8, y: 75 }, { x: 2, y: 85 },
  { x: 15, y: 95 }, { x: 35, y: 85 }, { x: 55, y: 75 }, { x: 75, y: 65 },
];

// Fixed connections for 16 nodes - creates a nice constellation pattern
const connections = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,0], // outer loop
  [1,13],[13,14],[14,15],[15,5],[13,9],[14,7],[2,14],[3,15],[6,14],[8,13],[10,12],[11,13] // inner connections
];

export default function Skills() {
  // Custom hook to detect screen size
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Use appropriate positions based on screen size
  const currentPositions = isMobile ? mobileNodePositions : nodePositions;

  // Generate stars based on screen size for better performance
  const stars = React.useMemo(() => {
    const starCount = isMobile ? 40 : 120;
    return Array.from({ length: starCount }, (_, i) => {
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
    });
  }, [isMobile]);

  return (
    <SkillsSection id="skills">
      <StarsBg>
        {stars.map(star => (
          <Star {...star} />
        ))}
      </StarsBg>

      <Title>Skills</Title>
      <ConstellationContainer>
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", left: 0, top: 0, zIndex: 1, pointerEvents: "none" }}
        >
          {connections.map(([from, to], i) => {
            const a = currentPositions[from];
            const b = currentPositions[to];
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
          const { x, y } = currentPositions[i];
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
