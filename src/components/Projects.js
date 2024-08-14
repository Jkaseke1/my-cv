
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/pexels-joyston-judah-331625-933054.jpg'; // Import the background image

const ProjectsSection = styled.section`
  padding: 50px 0;
  background: url(${backgroundImage}) no-repeat center center fixed; /* Set the background image */
  background-size: cover;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5); /* Glossy overlay with increased visibility */
    z-index: -1;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  font-weight: bold;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #007bff;
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #0056b3;
    transform: scale(1.1);
  }

  svg {
    margin-left: 5px;
  }
`;

const ProjectDescription = styled.ul`
  font-size: 0.9rem;
  color: #666;
  margin-top: 10px;
  list-style-type: disc;
  padding-left: 20px;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <ProjectsContainer>
        <ProjectCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ProjectTitle>1. iTunes Search Web Application</ProjectTitle>
          <ProjectLink href="https://search-app-beta-final.onrender.com" target="_blank" rel="noopener noreferrer">
            View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
          </ProjectLink>
          <ProjectDescription>
            <li>Developed a full-stack web application using React and Express</li>
            <li>Integrated with the iTunes Search API</li>
            <li>Enabled users to search for content in the iTunes and Apple Books Stores</li>
            <li>Allowed users to save their favourite items</li>
            <li>Demonstrated proficiency in front-end and back-end development</li>
            <li>Showcased API integration and technical documentation skills</li>
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ProjectTitle>2. Web Store Capstone</ProjectTitle>
          <ProjectLink href="https://kaseke-web-store-final.onrender.com" target="_blank" rel="noopener noreferrer">
            View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
          </ProjectLink>
          <ProjectDescription>
            <li>Designed and developed a Web Store using React</li>
            <li>Showcased products from a fictional or real online store</li>
            <li>Consolidated knowledge of React, JSX, and JavaScript</li>
            <li>Demonstrated ability to create a fully functional e-commerce application</li>
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ProjectTitle>3. Weather App</ProjectTitle>
          <ProjectDescription>
            <li>Created a React app to display current weather in a particular city</li>
            <li>Used the Weather API to retrieve weather data</li>
            <li>Allowed users to enter city names to get weather data</li>
            <li>Optionally used geolocation to get the user's local weather</li>
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ProjectTitle>4. Nationality Predictor App</ProjectTitle>
          <ProjectDescription>
            <li>Created a React app to predict nationality based on a person's name</li>
            <li>Used the nationalize.io API to fetch nationality data</li>
            <li>Implemented auto-focused input field and a button to trigger the fetch</li>
            <li>Displayed details of the first object in the country array</li>
            <li>Used function components with useState, useEffect, and useRef hooks</li>
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ProjectTitle>5. Banking Interest Calculator App</ProjectTitle>
          <ProjectDescription>
            <li>Created a React app to simulate a banking application</li>
            <li>Displayed the user’s current bank balance</li>
            <li>Allowed users to deposit and withdraw money</li>
            <li>Included functionality to add interest and charge bank fees</li>
            <li>Used at least two separate components with a shared state</li>
          </ProjectDescription>
        </ProjectCard>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
