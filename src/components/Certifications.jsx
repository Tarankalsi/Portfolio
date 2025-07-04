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

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.2rem;
  width: 90vw;
  max-width: 900px;
  margin: 0 auto;
`;

const CertCard = styled.div`
  background: rgba(34, 18, 51, 0.32);
  box-shadow: 0 4px 24px 0 #22223b33, 0 1.5px 12px 0 #43e97b22;
  backdrop-filter: blur(18px);
  border-radius: 22px;
  border: 1.5px solid rgba(255,255,255,0.13);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
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
    border: 2px solid #22223b;
  }
`;

const Badge = styled.img`
  width: 54px;
  height: 54px;
  object-fit: contain;
  margin-bottom: 1.1rem;
  filter: drop-shadow(0 0 8px #22223b88);
`;

const CertName = styled.h3`
  color: #fff;
  font-size: 1.18rem;
  margin: 0.2rem 0 0.5rem 0;
  text-align: center;
`;

const Issuer = styled.div`
  color: #22223b;
  font-size: 1.02rem;
  margin-bottom: 0.3rem;
`;

const Date = styled.div`
  color: #e0e0e0;
  font-size: 0.98rem;
  margin-bottom: 0.2rem;
`;

const certifications = [
  {
    name: "React Developer Certification",
    issuer: "Meta (Facebook)",
    date: "May 2023",
    badge: "https://img.icons8.com/color/96/000000/react-native.png"
  },
  {
    name: "Full Stack Web Development",
    issuer: "Coursera / IBM",
    date: "Jan 2023",
    badge: "https://img.icons8.com/color/96/000000/ibm.png"
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "Aug 2022",
    badge: "https://img.icons8.com/color/96/000000/javascript.png"
  },
];

export default function Certifications() {
  return (
    <Section id="certifications">
      <Title>Certifications</Title>
      <CertGrid>
        {certifications.map((cert, i) => (
          <CertCard key={i}>
            <Badge src={cert.badge} alt={cert.issuer} />
            <CertName>{cert.name}</CertName>
            <Issuer>{cert.issuer}</Issuer>
            <Date>{cert.date}</Date>
          </CertCard>
        ))}
      </CertGrid>
    </Section>
  );
}
