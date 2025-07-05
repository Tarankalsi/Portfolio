import React from "react";
import styled, { keyframes } from "styled-components";
import { FaCertificate, FaCalendarAlt, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 12px 2px rgba(62, 62, 62, 0.27), 0 2px 24px 0 rgba(23, 23, 23, 0.27); }
  50% { box-shadow: 0 0 24px 6px rgba(70, 70, 70, 0.6), 0 2px 32px 0 rgba(22, 22, 22, 0.6); }
`;

const Section = styled.section`
  min-height: 60vh;
  width: 100%;
  background: none;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
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
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg,rgb(44, 44, 44) 0%, #ffffff 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.2rem;
  width: 90vw;
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.8rem;
    width: 95vw;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 98vw;
  }
`;

const CertCard = styled.div`
  background: rgba(30, 30, 30, 0.32);
  box-shadow: 0 4px 24px 0 rgba(183, 183, 183, 0.2), 0 1.5px 12px 0 rgba(210, 210, 210, 0.13);
  backdrop-filter: blur(18px);
  border-radius: 22px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInUp} 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: both;
  animation-delay: ${({ delay }) => delay * 0.2}s;
  position: relative;
  transition: transform 0.18s, box-shadow 0.18s;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ffffff 0%,rgb(29, 29, 29) 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  @media (max-width: 768px) {
    padding: 1.8rem 1.2rem 1.2rem 1.2rem;
    border-radius: 18px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem 1rem 1rem;
    border-radius: 16px;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.28);
  
    
    &::before {
      opacity: 1;
    }
    
    @media (max-width: 768px) {
      transform: translateY(-6px) scale(1.02);
    }
    
    @media (max-width: 480px) {
      transform: translateY(-4px) scale(1.01);
    }
  }
`;

const BadgeContainer = styled.div`
  position: relative;
  margin-bottom: 1.1rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

const Badge = styled.img`
  width: 54px;
  height: 54px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(46, 46, 46, 0.53));
  transition: transform 0.3s;
  
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
  
  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
  }
`;

const CertIcon = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ffffff;
  color: #000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.4);
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
    font-size: 0.6rem;
  }
`;

const CertName = styled.h3`
  color: #fff;
  font-size: 1.18rem;
  margin: 0.2rem 0 0.5rem 0;
  text-align: center;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
  color: #e0e0e0;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const InfoIcon = styled.span`
  color: #ffffff;
  font-size: 0.8rem;
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const Issuer = styled.div`
  color: #ffffff;
  font-size: 1.02rem;
  margin-bottom: 0.3rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Date = styled.div`
  color: #e0e0e0;
  font-size: 0.98rem;
  margin-bottom: 0.2rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ViewButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  &:hover {
    background: #ffffff;
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`;

const certifications = [
  {
    name: "React Developer Certification",
    issuer: "Meta (Facebook)",
    date: "May 2023",
    badge: "https://img.icons8.com/color/96/000000/react-native.png",
    link: "#"
  },
  {
    name: "Full Stack Web Development",
    issuer: "Coursera / IBM",
    date: "Jan 2023",
    badge: "https://img.icons8.com/color/96/000000/ibm.png",
    link: "#"
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "Aug 2022",
    badge: "https://img.icons8.com/color/96/000000/javascript.png",
    link: "#"
  },
];

export default function Certifications() {
  return (
    <Section id="certifications">
      <Title>Certifications</Title>
      <CertGrid>
        {certifications.map((cert, i) => (
          <CertCard key={i} delay={i}>
            <BadgeContainer>
              <Badge src={cert.badge} alt={cert.issuer} />
              <CertIcon>
                <FaCertificate />
              </CertIcon>
            </BadgeContainer>
            <CertName>{cert.name}</CertName>
            <InfoRow>
              <InfoIcon><FaBuilding /></InfoIcon>
              <Issuer>{cert.issuer}</Issuer>
            </InfoRow>
            <InfoRow>
              <InfoIcon><FaCalendarAlt /></InfoIcon>
              <Date>{cert.date}</Date>
            </InfoRow>
            <ViewButton>
              <FaExternalLinkAlt />
              View Certificate
            </ViewButton>
          </CertCard>
        ))}
      </CertGrid>
    </Section>
  );
}
