
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/Screenshot 2022-10-19 150847.png'; // Import the profile image
import backgroundImage from '../assets/pexels-joyston-judah-331625-933054.jpg'; // Import the background image

const HomeSection = styled.section`
  background: url(${backgroundImage}) no-repeat center center/cover; /* Set the background image */
  padding: 100px 0;
  text-align: left; /* Align text to the left */
  min-height: 100vh;
  display: flex;
  align-items: flex-start; /* Align items to the top */
  justify-content: flex-start; /* Move items to the left */
  font-family: 'Roboto', sans-serif;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 20px;
`;

const ProfileImage = styled.img`
  width: 200px; /* Increase the width */
  height: 200px; /* Increase the height */
  border-radius: 50%;
  border: 5px solid #007bff;
  margin-right: 20px; /* Add margin to the right */
  object-fit: cover; /* Ensures the image covers the container without distortion */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  text-align: left; /* Align text to the left */
`;

const SocialIcons = styled.div`
  margin-top: 20px;

  a {
    color: #007bff;
    margin: 0 10px;
    font-size: 1.8rem; /* Increase the icon size */
    font-weight: bold; /* Make the icons bolder */
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`;

const Heading = styled.h1`
  font-size: 3rem; /* Increase the font size */
  color: #fff; /* Change the font color to white */
  font-weight: bold; /* Make the font bolder */
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 1.5rem; /* Increase the font size */
  color: #fff; /* Change the font color to white */
  font-weight: bold; /* Make the font bolder */
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem; /* Increase the font size */
  color: #fff; /* Change the font color to white */
  font-weight: bold; /* Make the font bolder */
  margin-bottom: 20px;
  max-width: 600px;
`;

const IconText = styled.span`
  margin-left: 10px;
`;

const Home = () => {
  return (
    <HomeSection>
      <ContentWrapper>
        <ProfileImage src={profileImage} alt="Joseph Kaseke" />
        <Details>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading>
              <FontAwesomeIcon icon={faLaptopCode} />
              <IconText>Joseph Kaseke</IconText>
            </Heading>
            <SubHeading>
              <FontAwesomeIcon icon={faCode} />
              <IconText>Full Stack Web Developer</IconText>
            </SubHeading>
            <Description>
              Passionate about creating interactive and responsive web applications. Always eager to learn new technologies and improve my skills.
            </Description>
            <SocialIcons>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Jkaseke1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:kasekejoseph19@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </SocialIcons>
          </motion.div>
        </Details>
      </ContentWrapper>
    </HomeSection>
  );
};

export default Home;
