import React from "react";
import Navbar from "./components/Navbar";
import SocialLinksBar from "./components/SocialLinks";
import styled, { createGlobalStyle } from "styled-components";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import PlanetVideo from "./assets/0_Earth_Planet_3840x2160.mov"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
    background: #000000;
    min-height: 100vh;
    overflow-x: hidden;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  /* Responsive video background */
  @media (max-width: 768px) {
    video {
      object-position: center;
    }
  }
  
  /* Hide scrollbar on mobile but keep functionality */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
  
  /* Ensure proper touch targets on mobile */
  @media (max-width: 768px) {
    button, a {
      min-height: 44px;
      min-width: 44px;
    }
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* Fixed background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src={PlanetVideo}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -2,
          pointerEvents: "none",
        }}
      />
      {/* Optional dark overlay for readability */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.7)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      <Navbar />
      <SocialLinksBar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}
