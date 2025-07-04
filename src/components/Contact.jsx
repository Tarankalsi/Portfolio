import React from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  min-height: 50vh;
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

const Card = styled.div`
  background: rgba(34, 18, 51, 0.32);
  box-shadow: 0 4px 24px 0 #22223b33, 0 1.5px 12px 0 #43e97b22;
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
  transition: transform 0.18s, box-shadow 0.18s;
  max-width: 420px;
  width: 92vw;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px 0 #22223b44;
    border: 2px solid #22223b;
  }
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin: 1.1rem 0;
`;

const ContactLink = styled.a`
  color: #22223b;
  font-size: 1.5rem;
  background: rgba(185,131,255,0.10);
  border-radius: 50%;
  padding: 0.55rem;
  transition: background 0.18s, color 0.18s, transform 0.18s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(185,131,255,0.22);
    color: #fff;
    transform: scale(1.13);
  }
`;

const Email = styled.a`
  color: #22223b;
  font-size: 1.13rem;
  text-decoration: underline;
  margin-left: 0.5rem;
  &:hover {
    color: #22223b;
  }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Card>
        <ContactRow>
          <ContactLink href="mailto:your.email@example.com" title="Email">
            <FaEnvelope />
          </ContactLink>
          <Email href="mailto:your.email@example.com">your.email@example.com</Email>
        </ContactRow>
        <ContactRow>
          <ContactLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </ContactLink>
          <ContactLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </ContactLink>
        </ContactRow>
      </Card>
    </Section>
  );
}
