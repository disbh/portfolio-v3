import React from 'react';
import styled from 'styled-components';

interface Job {
  title: string;
  company: string;
  skills: string[];
}

interface ResumeComponentProps {
  jobs: Job[];
}

const ResumeContainer = styled.div`
  // ...
`;

const JobSection = styled.div`
  // ...
`;

const Resume: React.FC<ResumeComponentProps> = ({ jobs }) => {
  return (
    <ResumeContainer>
      {jobs.map((job, index) => (
        <JobSection key={index}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <ul>
            {job.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </JobSection>
      ))}
    </ResumeContainer>
  );
};

export default Resume;