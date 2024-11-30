import React from 'react';
import styled from 'styled-components';

interface ProjectItem {
  title: string;
  skills: string[];
}

interface ProjectComponentProps {
  projects: ProjectItem[];
}

const ProjectContainer = styled.div`
  // ...
`;

const ProjectSection = styled.div`
  // ...
`;

const Project: React.FC<ProjectComponentProps> = ({ projects }) => {
  return (
    <ProjectContainer>
      {projects.map((ProjectItem, index) => (
        <ProjectSection key={index}>
          <h3>{ProjectItem.title}</h3>
          <ul>
            {ProjectItem.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </ProjectSection>
      ))}
    </ProjectContainer>
  );
};

export default Project;