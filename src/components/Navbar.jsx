import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaUser, FaCode, FaProjectDiagram, FaCertificate, FaBriefcase, FaEnvelope } from "react-icons/fa";

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 12px 2px rgba(62, 62, 62, 0.27), 0 2px 24px 0 rgba(23, 23, 23, 0.27); }
  50% { box-shadow: 0 0 24px 6px rgba(70, 70, 70, 0.6), 0 2px 32px 0 rgba(22, 22, 22, 0.6); }
`;

const FloatingBar = styled.nav`
  position: fixed;
  top: 50%;
  left: 24px;
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
  box-shadow: 0 4px 24px 0rgba(60, 60, 60, 0.51);
`;

const ProgressBar = styled.div`
  width: 4px;
  height: 90%;
  background: linear-gradient(180deg,rgb(98, 98, 98) 0%,rgb(26, 26, 26) 100%);
  border-radius: 2px;
  margin: 0.5rem 0;
  position: absolute;
  left: -10px;
  top: 1%;
  opacity: 0.5;
`;

const ProgressIndicator = styled.div`
  width: 4px;
  background:rgb(243, 243, 243);
  border-radius: 2px;
  position: absolute;
  left: -10px;
  transition: height 0.3s;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavLink = styled.a`
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
  background: ${({ $active }) => $active ? 'rgba(255, 255, 255, 0.22)' : 'none'};
  color: ${({ $active }) => $active ? '#ffffff' : '#fff'};
  opacity: ${({ $active }) => $active ? 1 : 0.8};
  transform: ${({ $active }) => $active ? 'scale(1.18) rotate(-8deg)' : 'none'};
  box-shadow: ${({ $active }) => $active ? '0 0 8px 2px rgba(255, 255, 255, 0.27)' : 'none'};
  &:hover {
    color: #ffffff;
    opacity: 1;
    background: rgba(229, 229, 229, 0.21);
    transform: scale(1.18) rotate(-8deg);
    box-shadow: 0 0 8px 2px rgba(54, 54, 54, 0.6);
  }
`;

const Tooltip = styled.span`
  position: absolute;
  left: 56px;
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
  transition: opacity 0.18s, left 0.18s, box-shadow 0.18s;
  z-index: 999;
  box-shadow: 0 0 12px 2px #22223b55;
  text-shadow: 0 0 6px #fff2;
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  &:hover ${Tooltip} {
    opacity: 1;
    left: 44px;
    box-shadow: 0 0 16px 4px rgba(49, 49, 49, 0.6);
  }
`;

const navSections = [
  { id: "hero", icon: <FaUser />, label: "Profile" },
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { id: "certifications", icon: <FaCertificate />, label: "Certifications" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let found = "hero";
      for (const section of navSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = section.id;
            break;
          }
        }
      }
      setActiveSection(found);
      // Progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FloatingBar>
      <ProgressBar />
        <ProgressIndicator style={{ height: `${progress * 90}%` }} />
      <NavLinks>
        {navSections.map(section => (
          <NavItem key={section.id}>
            <NavLink
              href={`#${section.id}`}
              $active={activeSection === section.id}
              title={section.label}
            >
              {section.icon}
            </NavLink>
            <Tooltip>{section.label}</Tooltip>
          </NavItem>
        ))}
      </NavLinks>
    </FloatingBar>
  );
}
