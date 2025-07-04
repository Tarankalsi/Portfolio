import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  min-height: 60vh;
  width: 100vw;
  background: none;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 2.2rem;
  letter-spacing: 1px;
  text-align: center;
`;

const ExpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.2rem;
  width: 90vw;
  max-width: 1000px;
  margin: 0 auto;
`;

const ExpCard = styled.div`
  background: rgba(34, 18, 51, 0.32);
  box-shadow: 0 4px 24px 0 #22223b33, 0 1.5px 12px 0 #43e97b22;
  backdrop-filter: blur(18px);
  border-radius: 22px;
  border: 1.5px solid rgba(255,255,255,0.13);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeInUp} 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: both;
  position: relative;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px 0 #22223b44;
    border: 2px solid #22223b;
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 0.7rem;
  filter: drop-shadow(0 0 8px #22223b88);
`;

const Company = styled.h3`
  color: #fff;
  font-size: 1.18rem;
  margin: 0.2rem 0 0.2rem 0;
`;

const Role = styled.div`
  color: #22223b;
  font-size: 1.08rem;
  margin-bottom: 0.2rem;
`;

const Duration = styled.div`
  color: #e0e0e0;
  font-size: 0.98rem;
  margin-bottom: 0.5rem;
`;

const Achievements = styled.ul`
  color: #e0e0e0;
  font-size: 1.01rem;
  margin: 0.2rem 0 0 1.1rem;
  padding: 0 0 0 1.1rem;
  list-style: disc;
`;

const experiences = [
  {
    company: "TechNova Solutions",
    logo: "https://img.icons8.com/color/96/000000/source-code.png",
    role: "Frontend Developer",
    duration: "Feb 2022 - Present",
    achievements: [
      "Developed and maintained modern React web apps.",
      "Implemented responsive UI and glassmorphic design.",
      "Collaborated with backend team for seamless API integration."
    ]
  },
  {
    company: "Cloudify Inc.",
    logo: "https://img.icons8.com/color/96/000000/cloud.png",
    role: "Full Stack Developer",
    duration: "Jul 2020 - Jan 2022",
    achievements: [
      "Built scalable REST APIs with Node.js and Express.",
      "Led migration to a microservices architecture.",
      "Mentored junior developers and interns."
    ]
  },
  {
    company: "Open Source Contributor",
    logo: "https://img.icons8.com/color/96/000000/github--v1.png",
    role: "Contributor",
    duration: "2019 - Present",
    achievements: [
      "Contributed to popular open source projects on GitHub.",
      "Reviewed and merged community pull requests.",
      "Wrote documentation and tutorials."
    ]
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <Title>Experience</Title>
      <ExpGrid>
        {experiences.map((exp, i) => (
          <ExpCard key={i}>
            <Logo src={exp.logo} alt={exp.company} />
            <Company>{exp.company}</Company>
            <Role>{exp.role}</Role>
            <Duration>{exp.duration}</Duration>
            <Achievements>
              {exp.achievements.map((ach, j) => (
                <li key={j}>{ach}</li>
              ))}
            </Achievements>
          </ExpCard>
        ))}
      </ExpGrid>
    </Section>
  );
}
