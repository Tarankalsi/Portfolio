import React from "react";
import styled, { keyframes } from "styled-components";
import anginatLogo from "../assets/anginatLogo.png";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  min-height: 80vh;
  width: 100vw;
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
  margin-bottom: 3rem;
  letter-spacing: 1px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const TimelineContainer = styled.div`
  width: 80vw;
  max-width: 1000px;
  position: relative;
  margin: 2rem auto;
  
  @media (max-width: 768px) {
    width: 90vw;
    margin: 1.5rem auto;
  }
  
  @media (max-width: 480px) {
    width: 95vw;
    margin: 1rem auto;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #22223b 0%, #43e97b 50%, #22223b 100%);
  transform: translateY(-50%);
  
  @media (max-width: 768px) {
    height: 1px;
  }
`;

const TimelineContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const TimelinePoint = styled.div`
  width: 16px;
  height: 16px;
  background: #43e97b;
  border: 3px solid #fff;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px #43e97b;
  
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
    border: 2px solid #fff;
  }
`;

const CompanyLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  padding: 4px;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 3px;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    padding: 2px;
  }
`;

const CompanyName = styled.h3`
  color: #fff;
  font-size: 1.1rem;
  margin: 0.2rem 0;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const JobType = styled.span`
  background: ${({ $type }) => $type === 'Full Time' ? '#43e97b' : '#ff6b6b'};
  color: #fff;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
  margin-bottom: 0.3rem;
  
  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.15rem 0.4rem;
  }
`;

const Role = styled.div`
  color: rgb(0, 0, 0);
  text-shadow: 0 1px 8px rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Duration = styled.div`
  color: #e0e0e0;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(26, 26, 26, 0.36);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  padding: 1.5rem;
  margin-top: 1rem;
  box-shadow: 0 2px 16px rgba(255, 255, 255, 0.51);
  
  @media (max-width: 768px) {
    padding: 1.2rem;
    margin-top: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    margin-top: 0.5rem;
    border-radius: 10px;
  }
`;

const CardTitle = styled.h4`
  color: #fff;
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CardList = styled.ul`
  color: #e0e0e0;
  font-size: 0.8rem;
  margin: 0;
  padding-left: 1rem;
  line-height: 1.4;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    line-height: 1.3;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    line-height: 1.2;
    padding-left: 0.8rem;
  }
`;

const experiences = [
  {
    company: "Anginat",
    logo: anginatLogo,
    role: "Full Stack Developer",
    type: "Full Time",
    duration: "June 2025 - Present",
    about: "A 𝗦𝗮𝗮𝗦-based platform that enables businesses to seamlessly deliver educational solutions to their users.",
    responsibilities: [
      "Designing and developing scalable backend microservices",
      "Building and integrating a custom CMS dashboard, handling role-based access, content management",
      "Managing deployment and DevOps tasks using Docker, Nginx, and AWS EC2, with a focus on performance, security, and scalability",
      "Continuously collaborating on product architecture, system design, and codebase improvements to support long-term growth",
    ]
  },
  {
    company: "Anginat",
    logo: anginatLogo,
    role: "Full Stack Developer",
    type: "Internship",
    duration: "December 2024 - June 2025",
    about: "A 𝗦𝗮𝗮𝗦-based platform that enables businesses to seamlessly deliver educational solutions to their users.",
    responsibilities: [
      "Developed and maintained frontend interfaces using React.js, Next Js and Tailwind CSS.",
      "Built and maintained backend APIs and database schemas with Node.js and Express.js",
      "Integrated and managed Razorpay for secure payment handling.",
      "Deployed and managed backend services on AWS EC2",
    ]
  }
];

export default function Experience() {
  return (
    <Section id="experience">
      <Title>Experience</Title>
      <TimelineContainer>
        <TimelineLine />
        <TimelineContent>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <CompanyLogo src={exp.logo} alt={exp.company} />
              {/* <TimelinePoint /> */}
              <CompanyName>{exp.company}</CompanyName>
              <JobType $type={exp.type}>{exp.type}</JobType>
              <Role>{exp.role}</Role>
              <Duration>{exp.duration}</Duration>
              
              <ExperienceCard>
                <CardTitle>About Company:</CardTitle>
                <CardList style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>{exp.about}</li>
                </CardList>
                
                <CardTitle style={{ marginTop: '1rem' }}>Responsibilities:</CardTitle>
                <CardList>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </CardList>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </TimelineContent>
      </TimelineContainer>
    </Section>
  );
}
