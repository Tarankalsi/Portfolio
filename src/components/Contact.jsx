import React from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaDownload } from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 12px 2px rgba(62, 62, 62, 0.27), 0 2px 24px 0 rgba(23, 23, 23, 0.27); }
  50% { box-shadow: 0 0 24px 6px rgba(70, 70, 70, 0.6), 0 2px 32px 0 rgba(22, 22, 22, 0.6); }
`;

const Section = styled.section`
  min-height: 50vh;
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
    background: linear-gradient(90deg, #22223b 0%, #ffffff 100%);
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

const Card = styled.div`
  background: rgba(34, 18, 51, 0.32);
  box-shadow: 0 4px 24px 0 #22223b33, 0 1.5px 12px 0 #ffffff22;
  backdrop-filter: blur(18px);
  border-radius: 22px;
  border: 1.5px solid rgba(255,255,255,0.13);
  padding: 2.2rem 2.2rem 1.5rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInUp} 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: both;
  position: relative;
  transition: transform 0.18s, box-shadow 0.18s, border 0.18s;
  max-width: 420px;
  width: 92vw;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ffffff 0%, #22223b 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  @media (max-width: 768px) {
    padding: 1.8rem 1.8rem 1.2rem 1.8rem;
    border-radius: 18px;
    max-width: 380px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border-radius: 16px;
    max-width: 340px;
    width: 95vw;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px 0 #22223b44;
    border: 2px solid #ffffff;
    
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

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin: 1.1rem 0;
  width: 100%;
  
  @media (max-width: 768px) {
    gap: 1rem;
    margin: 1rem 0;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin: 0.8rem 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 1.2rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
    transform: translateX(5px);
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    gap: 0.6rem;
  }
`;

const InfoIcon = styled.div`
  color: #ffffff;
  font-size: 1.2rem;
  min-width: 20px;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const InfoText = styled.div`
  color: #e0e0e0;
  font-size: 0.95rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ContactLink = styled.a`
  color: #22223b;
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #ffffff;
  border-radius: 50%;
  padding: 0.55rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.45rem;
  }
  
  &:hover {
    background: #ffffff;
    color: #000;
    transform: scale(1.13) translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
    
    @media (max-width: 768px) {
      transform: scale(1.1) translateY(-2px);
    }
    
    @media (max-width: 480px) {
      transform: scale(1.08) translateY(-2px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const ResumeButton = styled.a`
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  color: #000;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Card>
        <ContactInfo>
          <InfoItem>
            <InfoIcon><FaEnvelope /></InfoIcon>
            <InfoText>your.email@example.com</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon><FaPhone /></InfoIcon>
            <InfoText>+1 (555) 123-4567</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon><FaMapMarkerAlt /></InfoIcon>
            <InfoText>Your City, Country</InfoText>
          </InfoItem>
        </ContactInfo>
        
        <SocialLinks>
          <ContactLink href="mailto:your.email@example.com" title="Email">
            <FaEnvelope />
          </ContactLink>
          <ContactLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </ContactLink>
          <ContactLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </ContactLink>
        </SocialLinks>
        
        <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaDownload />
          Download Resume
        </ResumeButton>
      </Card>
    </Section>
  );
}
