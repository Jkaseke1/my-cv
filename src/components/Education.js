import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  padding: 50px 0;
  background-color: #f8f9fa;
`;

const EducationItem = styled.div`
  margin-bottom: 20px;
`;

const Education = () => {
  return (
    <EducationSection>
      <h2 className="text-3xl text-center mb-8">Education</h2>
      <div>
        <EducationItem>
          <h3>Degree</h3>
          <p>Institution Name</p>
          <p>Duration</p>
          <p>Description or achievements.</p>
        </EducationItem>
        {/* Add more education items here */}
      </div>
    </EducationSection>
  );
};

export default Education;
