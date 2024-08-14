import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 50px 0;
`;

const ExperienceItem = styled.div`
  margin-bottom: 20px;
`;

const Experience = () => {
  return (
    <ExperienceSection>
      <h2 className="text-3xl text-center mb-8">Experience</h2>
      <div>
        <ExperienceItem>
          <h3>IT System Admin</h3>
          <p>Pulse Pharmaceuticals</p>
          <p>August 2019 - Present</p>
          <p></p>
        </ExperienceItem>
        {/* Add more experience items here */}
      </div>
    </ExperienceSection>
  );
};

export default Experience;
