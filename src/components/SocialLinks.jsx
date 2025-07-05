import React from "react";
import styled, { keyframes } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 12px 2px rgba(62, 62, 62, 0.27), 0 2px 24px 0 rgba(23, 23, 23, 0.27); }
  50% { box-shadow: 0 0 24px 6px rgba(70, 70, 70, 0.6), 0 2px 32px 0 rgba(22, 22, 22, 0.6); }
`;

const FloatingSocialBar = styled.nav`
  position: fixed;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  width: 54px;
  background: rgba(28, 28, 28, 0.1);
  backdrop-filter: blur(18px);
  border-radius: 32px;
  border: 2px solid #22223b44;
  animation: ${glow} 3s infinite alternate;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7rem 0.2rem;
  gap: 0.2rem;
  box-shadow: 0 4px 24px 0 rgba(60, 60, 60, 0.51);
  
  @media (max-width: 768px) {
    right: 16px;
    width: 48px;
    padding: 0.5rem 0.15rem;
    gap: 0.15rem;
  }
  
  @media (max-width: 480px) {
    top: auto;
    bottom: 15px;
    right: 50%;
    transform: translateX(50%);
    width: auto;
    flex-direction: row;
    padding: 0.3rem 0.6rem;
    gap: 0.6rem;
    border-radius: 20px;
  }
  
  @media (max-width: 360px) {
    display: none; // Hide on very small screens
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: row;
    gap: 0.6rem;
  }
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.4rem;
  opacity: 0.8;
  transition: color 0.2s, opacity 0.2s, transform 0.2s, background 0.2s;
  border-radius: 50%;
  padding: 0.45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.25rem;
  }
  
  &:hover {
    color: #ffffff;
    opacity: 1;
    background: rgba(229, 229, 229, 0.21);
    transform: scale(1.18) rotate(-8deg);
    box-shadow: 0 0 8px 2px rgba(54, 54, 54, 0.6);
    
    @media (max-width: 768px) {
      transform: scale(1.15) rotate(-6deg);
    }
    
    @media (max-width: 480px) {
      transform: scale(1.08);
    }
  }
`;

const Tooltip = styled.span`
  position: absolute;
  right: 56px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(60, 60, 60, 0.98);
  color: #fff;
  padding: 0.32rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s, right 0.18s, box-shadow 0.18s;
  z-index: 999;
  box-shadow: 0 0 12px 2px #22223b55;
  text-shadow: 0 0 6px #fff2;
  
  @media (max-width: 768px) {
    right: 48px;
    font-size: 0.9rem;
    padding: 0.25rem 0.8rem;
  }
  
  @media (max-width: 480px) {
    right: 50%;
    top: -35px;
    transform: translateX(50%);
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
  }
`;

const SocialItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  &:hover ${Tooltip} {
    opacity: 1;
    right: 44px;
    box-shadow: 0 0 16px 4px rgba(49, 49, 49, 0.6);
    
    @media (max-width: 768px) {
      right: 36px;
    }
    
    @media (max-width: 480px) {
      right: 50%;
      top: -35px;
    }
  }
`;

const socialLinks = [
  { 
    icon: <FaLinkedin />, 
    label: "LinkedIn", 
    url: "https://linkedin.com/in/yourusername" 
  },
  { 
    icon: <FaGithub />, 
    label: "GitHub", 
    url: "https://github.com/yourusername" 
  },
];

export default function SocialLinksBar() {
  return (
    <FloatingSocialBar>
      <SocialLinks>
        {socialLinks.map(social => (
          <SocialItem key={social.label}>
            <SocialLink
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
            >
              {social.icon}
            </SocialLink>
            <Tooltip>{social.label}</Tooltip>
          </SocialItem>
        ))}
      </SocialLinks>
    </FloatingSocialBar>
  );
} 