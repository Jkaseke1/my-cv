
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/pexels-joyston-judah-331625-933054.jpg'; // Import the background image

const SkillsSection = styled.section`
  padding: 50px 0;
  background: url(${backgroundImage}) no-repeat center center fixed; /* Set the background image */
  background-size: cover;
  position: relative;
  z-index: 1;
  min-height: 100vh; /* Make the background cover the whole page */

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

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 1.5rem; /* Increase the font size */

  .icon {
    font-size: 2rem; /* Increase the icon size */
    margin-right: 15px;
    color: #007bff; /* Icon color */
  }

  .number {
    font-weight: bold;
    margin-right: 10px;
  }
`;

const Skills = () => {
  return (
    <SkillsSection>
      <SkillsList>
        <SkillItem>
          <div className="number">1.</div>
          <FontAwesomeIcon className="icon" icon={faHtml5} />
          HTML
        </SkillItem>
        <SkillItem>
          <div className="number">2.</div>
          <FontAwesomeIcon className="icon" icon={faCss3Alt} />
          CSS
        </SkillItem>
        <SkillItem>
          <div className="number">3.</div>
          <FontAwesomeIcon className="icon" icon={faJs} />
          JavaScript
        </SkillItem>
        <SkillItem>
          <div className="number">4.</div>
          <FontAwesomeIcon className="icon" icon={faReact} />
          React
        </SkillItem>
        <SkillItem>
          <div className="number">5.</div>
          <FontAwesomeIcon className="icon" icon={faNodeJs} />
          Node.js
        </SkillItem>
        <SkillItem>
          <div className="number">6.</div>
          <FontAwesomeIcon className="icon" icon={faDatabase} />
          MongoDB
        </SkillItem>
        {/* Add more skill items here */}
      </SkillsList>
    </SkillsSection>
  );
};

export default Skills;
