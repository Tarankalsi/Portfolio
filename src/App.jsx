import React from "react";
import Navbar from "./components/Navbar";
import styled, { createGlobalStyle } from "styled-components";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
    background: #000000;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
    </>
  );
}
