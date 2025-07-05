import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSection = styled.section`
  min-height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 4rem 0 2rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0 1rem 0;
  }
`;

const GlassCard = styled.div`
  background: rgba(255,255,255,0.10);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.17);
  backdrop-filter: blur(12px);
  border-radius: 32px;
  border: 1.5px solid rgba(255,255,255,0.18);
  padding: 2.5rem 2rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeInUp} 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 24px;
    max-width: 90vw;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    border-radius: 20px;
    max-width: 95vw;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

const Description = styled.p`
  color: #e0e0e0;
  font-size: 1.18rem;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export default function About() {
  return (
    <AboutSection id="about">
      <GlassCard>
        <Title>About Me</Title>
        <Description>
          I am a passionate full stack developer with experience in building modern, scalable web applications. I love to create beautiful, animated, and responsive user interfaces.
        </Description>
      </GlassCard>
    </AboutSection>
  );
}
