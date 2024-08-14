
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/pexels-stijn-dijkstra-1306815-3265460.jpg'; // Import the new background image

const ContactSection = styled.section`
  padding: 50px 0;
  height: 100vh; /* Make the section take up the full viewport height */
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
    background: rgba(255, 255, 255, 0.7); /* Glossy overlay */
    z-index: -1;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 100px; /* Add some padding to push the form down */

  input, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2 className="text-3xl text-center mb-8">Contact</h2>
      <ContactForm>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
